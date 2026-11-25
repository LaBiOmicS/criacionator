/**
 * Criacionator 3000 — Módulo de Persistência Local via IndexedDB
 * Desenvolvido no LaBiOmicS — Laboratório de Bioinformática e Ciências Ômicas
 * Universidade de Mogi das Cruzes (UMC)
 * Coordenação: Prof. Dr. Fabiano Bezerra Menegidio · fabianomenegidio@umc.br
 *
 * Garante que a chave da API Gemini do usuário e o histórico de chat com Darwin
 * permaneçam ESTRITAMENTE LOCAIS no dispositivo do usuário (Zero-Cloud Storage / LGPD).
 */

class CriacionatorStorageDB {
  constructor() {
    this.dbName = "CriacionatorDB";
    this.version = 1;
    this.db = null;
    this.isReady = false;
    this.initPromise = null;
  }

  async init() {
    if (this.initPromise) return this.initPromise;

    this.initPromise = new Promise((resolve) => {
      if (typeof window === "undefined" || !window.indexedDB) {
        console.warn("[StorageDB] IndexedDB não suportado no ambiente. Usando fallback em memória.");
        this.isReady = true;
        resolve(false);
        return;
      }

      const request = window.indexedDB.open(this.dbName, this.version);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // Store para credenciais e configurações locais
        if (!db.objectStoreNames.contains("settings")) {
          db.createObjectStore("settings", { keyPath: "key" });
        }

        // Store para o Chat com Charles Darwin
        if (!db.objectStoreNames.contains("darwin_chat")) {
          const darwinStore = db.createObjectStore("darwin_chat", { keyPath: "id", autoIncrement: true });
          darwinStore.createIndex("timestamp", "timestamp", { unique: false });
        }

        // Store para argumentos customizados refutados
        if (!db.objectStoreNames.contains("custom_refutations")) {
          const refStore = db.createObjectStore("custom_refutations", { keyPath: "id" });
          refStore.createIndex("timestamp", "timestamp", { unique: false });
        }

        // Store para favoritos
        if (!db.objectStoreNames.contains("favorites")) {
          db.createObjectStore("favorites", { keyPath: "id" });
        }
      };

      request.onsuccess = async (event) => {
        this.db = event.target.result;
        this.isReady = true;
        console.log("[StorageDB] Banco IndexedDB 'CriacionatorDB' inicializado com sucesso.");
        // Migra chave antiga de localStorage se existir
        await this.migrateFromLocalStorage();
        resolve(true);
      };

      request.onerror = (event) => {
        console.error("[StorageDB] Falha ao abrir IndexedDB:", event.target.error);
        this.isReady = true;
        resolve(false);
      };
    });

    return this.initPromise;
  }

  async migrateFromLocalStorage() {
    try {
      const oldKey = localStorage.getItem("criacionator_gemini_key");
      if (oldKey && oldKey.trim()) {
        const currentInDb = await this.getSetting("gemini_api_key");
        if (!currentInDb) {
          await this.setSetting("gemini_api_key", oldKey.trim());
          console.log("[StorageDB] Chave Gemini migrada do localStorage para o IndexedDB seguro.");
        }
      }
    } catch (e) {
      // Ignora silenciosamente
    }
  }

  // Operações genéricas de Settings
  async getSetting(key) {
    await this.init();
    if (!this.db) return localStorage.getItem(`criacionator_${key}`) || null;

    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(["settings"], "readonly");
        const store = tx.objectStore("settings");
        const req = store.get(key);
        req.onsuccess = () => resolve(req.result ? req.result.value : null);
        req.onerror = () => resolve(localStorage.getItem(`criacionator_${key}`) || null);
      } catch (err) {
        resolve(localStorage.getItem(`criacionator_${key}`) || null);
      }
    });
  }

  async setSetting(key, value) {
    await this.init();
    if (!this.db) {
      if (value) localStorage.setItem(`criacionator_${key}`, value);
      else localStorage.removeItem(`criacionator_${key}`);
      return;
    }

    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(["settings"], "readwrite");
        const store = tx.objectStore("settings");
        if (value === null || value === undefined || value === "") {
          store.delete(key);
        } else {
          store.put({ key, value, updated_at: new Date().toISOString() });
        }
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      } catch (err) {
        resolve(false);
      }
    });
  }

  // API Key do Usuário
  async getApiKey() {
    return await this.getSetting("gemini_api_key");
  }

  async setApiKey(key) {
    return await this.setSetting("gemini_api_key", key ? key.trim() : "");
  }

  // Modelo Gemini Selecionado
  async getModel() {
    const val = await this.getSetting("gemini_model");
    return val || "gemini-2.5-flash";
  }

  async setModel(model) {
    return await this.setSetting("gemini_model", model);
  }

  // Histórico de Conversas com Charles Darwin
  async saveDarwinMessage(msg) {
    await this.init();
    if (!this.db) return false;

    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(["darwin_chat"], "readwrite");
        const store = tx.objectStore("darwin_chat");
        store.add({
          role: msg.role, // 'user' ou 'darwin'
          content: msg.content,
          chapter_ref: msg.chapter_ref || null,
          timestamp: new Date().toISOString()
        });
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      } catch (err) {
        resolve(false);
      }
    });
  }

  async getDarwinMessages(limit = 50) {
    await this.init();
    if (!this.db) return [];

    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(["darwin_chat"], "readonly");
        const store = tx.objectStore("darwin_chat");
        const req = store.getAll();
        req.onsuccess = () => {
          const list = req.result || [];
          resolve(list.slice(-limit));
        };
        req.onerror = () => resolve([]);
      } catch (err) {
        resolve([]);
      }
    });
  }

  async clearDarwinChat() {
    await this.init();
    if (!this.db) return false;

    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(["darwin_chat"], "readwrite");
        tx.objectStore("darwin_chat").clear();
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      } catch (err) {
        resolve(false);
      }
    });
  }

  // Argumentos Customizados Refutados
  async saveCustomRefutation(item) {
    await this.init();
    if (!this.db) return false;

    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(["custom_refutations"], "readwrite");
        const store = tx.objectStore("custom_refutations");
        store.put({
          id: item.id || `custom-${Date.now()}`,
          argumento_usuario: item.argumento_criacionista,
          data: item,
          timestamp: new Date().toISOString()
        });
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      } catch (err) {
        resolve(false);
      }
    });
  }

  async getCustomRefutations() {
    await this.init();
    if (!this.db) return [];

    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(["custom_refutations"], "readonly");
        const store = tx.objectStore("custom_refutations");
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => resolve([]);
      } catch (err) {
        resolve([]);
      }
    });
  }

  // Limpar Todos os Dados Locais
  async clearAllData() {
    await this.init();
    if (!this.db) {
      localStorage.clear();
      return true;
    }

    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(["settings", "darwin_chat", "custom_refutations", "favorites"], "readwrite");
        tx.objectStore("settings").clear();
        tx.objectStore("darwin_chat").clear();
        tx.objectStore("custom_refutations").clear();
        tx.objectStore("favorites").clear();
        tx.oncomplete = () => {
          localStorage.removeItem("criacionator_gemini_key");
          localStorage.removeItem("criacionator_favorites");
          resolve(true);
        };
        tx.onerror = () => resolve(false);
      } catch (err) {
        resolve(false);
      }
    });
  }
}

// Instância singleton global
const storageDB = new CriacionatorStorageDB();

if (typeof window !== "undefined") {
  window.CriacionatorStorageDB = CriacionatorStorageDB;
  window.storageDB = storageDB;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { CriacionatorStorageDB, storageDB };
}
