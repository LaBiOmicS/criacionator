/**
 * Criacionator 3000 - Controlador Principal da Aplicação
 * Gerencia a interface, modos de visualização, fala (TTS), quiz e histórico.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Estado da aplicação
  const state = {
    current: null,
    currentCategory: "all",
    quizAnswered: false,
    history: [],
    favorites: JSON.parse(localStorage.getItem("criacionator_favorites") || "[]"),
    isSpeaking: false,
    currentTab: "compare" // 'compare' ou 'quiz'
  };

  // Referências DOM
  const dom = {
    // Ações principais
    btnRandomClassic: document.getElementById("btn-random-classic"),
    btnGenerateAI: document.getElementById("btn-generate-ai"),
    btnToggleMode: document.getElementById("btn-toggle-quiz"),
    btnSoundToggle: document.getElementById("btn-sound-toggle"),
    btnOpenConfig: document.getElementById("btn-open-config"),
    btnOpenCatalog: document.getElementById("btn-open-catalog"),
    btnOpenFavorites: document.getElementById("btn-open-favorites"),

    // Filtros
    categoryPills: document.querySelectorAll(".category-pill"),
    personaSelect: document.getElementById("persona-select"),
    customTopicInput: document.getElementById("custom-topic-input"),

    // Painéis principais
    cardContainer: document.getElementById("main-card-container"),
    quizContainer: document.getElementById("quiz-container"),
    loadingOverlay: document.getElementById("loading-overlay"),
    loadingQuote: document.getElementById("loading-quote"),

    // Lado Criacionista
    creationBadge: document.getElementById("creation-badge"),
    creationTitle: document.getElementById("creation-title"),
    creationArgument: document.getElementById("creation-argument"),
    creationAnalogy: document.getElementById("creation-analogy"),
    creationVerse: document.getElementById("creation-verse"),
    deliriumScore: document.getElementById("delirium-score"),
    deliriumFill: document.getElementById("delirium-fill"),
    deliriumLabel: document.getElementById("delirium-label"),
    btnSpeakCreation: document.getElementById("btn-speak-creation"),

    // Lado Científico
    scienceFallacy: document.getElementById("science-fallacy"),
    scienceWhyDumb: document.getElementById("science-why-dumb"),
    scienceRealScience: document.getElementById("science-real-science"),
    scienceSourcesList: document.getElementById("science-sources-list"),
    btnSpeakScience: document.getElementById("btn-speak-science"),

    // Ações do Card
    btnCopyCard: document.getElementById("btn-copy-card"),
    btnShareCard: document.getElementById("btn-share-card"),
    btnFavoriteCard: document.getElementById("btn-favorite-card"),

    // Quiz
    quizQuestion: document.getElementById("quiz-question"),
    quizOptions: document.getElementById("quiz-options"),
    quizFeedback: document.getElementById("quiz-feedback"),
    btnQuizRevealAll: document.getElementById("btn-quiz-reveal-all"),

    // Modais
    modalConfig: document.getElementById("modal-config"),
    modalCatalog: document.getElementById("modal-catalog"),
    modalFavorites: document.getElementById("modal-favorites"),
    inputApiKey: document.getElementById("input-api-key"),
    selectModel: document.getElementById("select-model"),
    btnSaveConfig: document.getElementById("btn-save-config"),
    btnTestKey: document.getElementById("btn-test-key"),
    btnClearKey: document.getElementById("btn-clear-key"),
    configFeedback: document.getElementById("config-feedback"),
    catalogGrid: document.getElementById("catalog-grid"),
    favoritesGrid: document.getElementById("favorites-grid"),
    closeModalBtns: document.querySelectorAll(".btn-close-modal"),

    // Badges informativos de status
    hasAiBadge: document.getElementById("ai-status-badge"),
    statsClassicCount: document.getElementById("stats-classic-count")
  };

  // Frases divertidas de loading
  const LOADING_QUOTES = [
    "Consultando o bisavô de Adão pelo WhatsApp...",
    "Medindo a distância da Terra ao Sol com trena milimétrica...",
    "Procurando o zíper original da banana no Éden...",
    "Acelerando a fotossíntese para ver se Noé tinha mudas de sequoia...",
    "Verificando se o flagelo bacteriano precisa de troca de óleo...",
    "Explicando para o pastor que a Terra recebe 174 petawatts do Sol...",
    "Perguntando aos chimpanzés por que ainda não abriram conta no banco...",
    "Pesquisando artigos na Nature, Science e PNAS para a marretada..."
  ];

  // Inicialização
  function init() {
    setupEventListeners();
    updateSoundButton();
    updateAiBadge();
    if (dom.statsClassicCount && typeof ARGUMENTOS_CLASSICOS !== "undefined") {
      dom.statsClassicCount.textContent = ARGUMENTOS_CLASSICOS.length;
    }

    // Carregar configurações salvas
    if (dom.inputApiKey) {
      dom.inputApiKey.value = geminiService.getApiKey();
    }
    if (dom.selectModel) {
      dom.selectModel.value = geminiService.getModel();
    }

    // Carrega o primeiro argumento clássico aleatório
    loadRandomClassic();
  }

  // Configuração de Event Listeners
  function setupEventListeners() {
    // Botão Sortear Clássico
    dom.btnRandomClassic.addEventListener("click", () => {
      sounds.playClick();
      loadRandomClassic();
    });

    // Botão Gerar com IA
    dom.btnGenerateAI.addEventListener("click", () => {
      sounds.playClick();
      handleGenerateWithAI();
    });

    // Alternar Modo Quiz / Comparação
    if (dom.btnToggleMode) {
      dom.btnToggleMode.addEventListener("click", () => {
        sounds.playClick();
        toggleViewMode();
      });
    }

    // Alternar Som
    dom.btnSoundToggle.addEventListener("click", () => {
      sounds.toggle();
      updateSoundButton();
      sounds.playClick();
    });

    // Filtros de Categoria
    dom.categoryPills.forEach(pill => {
      pill.addEventListener("click", () => {
        sounds.playClick();
        dom.categoryPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        state.currentCategory = pill.dataset.category || "all";
      });
    });

    // Ações do Card
    dom.btnCopyCard.addEventListener("click", copyCardContent);
    dom.btnShareCard.addEventListener("click", shareCardContent);
    dom.btnFavoriteCard.addEventListener("click", toggleFavorite);

    // Síntese de Voz (TTS)
    dom.btnSpeakCreation.addEventListener("click", () => speakText(state.current.argumento_criacionista, "creation"));
    dom.btnSpeakScience.addEventListener("click", () => speakText(`${state.current.por_que_e_idiota} ${state.current.a_ciencia_real}`, "science"));

    // Modais
    dom.btnOpenConfig.addEventListener("click", () => openModal(dom.modalConfig));
    dom.btnOpenCatalog.addEventListener("click", () => {
      renderCatalog();
      openModal(dom.modalCatalog);
    });
    dom.btnOpenFavorites.addEventListener("click", () => {
      renderFavorites();
      openModal(dom.modalFavorites);
    });

    dom.closeModalBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        closeAllModals();
      });
    });

    // Fechar modal ao clicar fora
    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-backdrop")) {
        closeAllModals();
      }
    });

    // Salvar Chave API
    dom.btnSaveConfig.addEventListener("click", () => {
      sounds.playClick();
      geminiService.setApiKey(dom.inputApiKey.value);
      geminiService.setModel(dom.selectModel.value);
      updateAiBadge();
      showConfigFeedback("Configurações salvas com sucesso!", "success");
      setTimeout(() => closeAllModals(), 1200);
    });

    // Testar Chave API
    dom.btnTestKey.addEventListener("click", async () => {
      sounds.playClick();
      showConfigFeedback("Testando conexão com a API Gemini...", "info");
      try {
        await geminiService.testApiKey(dom.inputApiKey.value);
        sounds.playSuccess();
        showConfigFeedback("✅ Chave válida e funcionando perfeitamente!", "success");
      } catch (err) {
        sounds.playError();
        showConfigFeedback(`❌ Erro no teste: ${err.message}`, "error");
      }
    });

    // Limpar Chave API
    dom.btnClearKey.addEventListener("click", () => {
      sounds.playClick();
      dom.inputApiKey.value = "";
      geminiService.setApiKey("");
      updateAiBadge();
      showConfigFeedback("Chave removida.", "info");
    });

    // Quiz Reveal All
    if (dom.btnQuizRevealAll) {
      dom.btnQuizRevealAll.addEventListener("click", () => {
        sounds.playScienceLaser();
        state.currentTab = "compare";
        updateViewMode();
      });
    }
  }

  // Carrega um argumento clássico aleatório
  function loadRandomClassic() {
    let pool = ARGUMENTOS_CLASSICOS;
    if (state.currentCategory !== "all") {
      pool = ARGUMENTOS_CLASSICOS.filter(a => a.categoria === state.currentCategory);
      if (pool.length === 0) pool = ARGUMENTOS_CLASSICOS;
    }

    // Evita repetir imediatamente o mesmo se houver mais de 1
    let candidates = pool;
    if (state.current && pool.length > 1) {
      candidates = pool.filter(a => a.id !== state.current.id);
    }

    const randomIndex = Math.floor(Math.random() * candidates.length);
    const chosen = candidates[randomIndex];
    displayArgument(chosen);
    sounds.playDivineHarp();
  }

  // Manipula clique em Gerar com IA
  async function handleGenerateWithAI() {
    if (!geminiService.hasApiKey()) {
      sounds.playError();
      openModal(dom.modalConfig);
      showConfigFeedback("Insira sua chave de API do Gemini para gerar novos argumentos com IA!", "warning");
      return;
    }

    showLoading(true);
    const persona = dom.personaSelect ? dom.personaSelect.value : "pastor_zap";
    const customTopic = dom.customTopicInput ? dom.customTopicInput.value.trim() : "";

    try {
      const generated = await geminiService.generateArgument(state.currentCategory, persona, customTopic);
      displayArgument(generated);
      sounds.playScienceLaser();
    } catch (err) {
      sounds.playError();
      alert(`Falha ao gerar com a IA: ${err.message}\n\nExibindo um argumento clássico da nossa base embutida!`);
      loadRandomClassic();
    } finally {
      showLoading(false);
    }
  }

  // Exibe o argumento selecionado na UI
  function displayArgument(item) {
    state.current = item;
    state.quizAnswered = false;

    // Atualiza histórico
    if (!state.history.some(h => h.id === item.id)) {
      state.history.unshift(item);
      if (state.history.length > 20) state.history.pop();
    }

    // Animação de entrada suave
    dom.cardContainer.classList.remove("fade-in");
    void dom.cardContainer.offsetWidth; // trigger reflow
    dom.cardContainer.classList.add("fade-in");

    // Lado Criacionista
    dom.creationBadge.textContent = item.categoria_label || "Argumento Teológico";
    dom.creationTitle.textContent = item.titulo;
    dom.creationArgument.textContent = item.argumento_criacionista;
    dom.creationAnalogy.textContent = `"${item.analogia_absurda}"`;
    dom.creationVerse.textContent = item.citacao_ou_versiculo || "";

    // Nível de delírio (0 a 10)
    const score = Number(item.nivel_delirio) || 8.5;
    dom.deliriumScore.textContent = `${score.toFixed(1)}/10`;
    dom.deliriumFill.style.width = `${Math.min(100, (score / 10) * 100)}%`;
    dom.deliriumLabel.textContent = item.rotulo_delirio || "Nível elevado de delírio cosmológico";

    // Lado Científico
    dom.scienceFallacy.textContent = item.falacia_logica;
    dom.scienceWhyDumb.textContent = item.por_que_e_idiota;
    dom.scienceRealScience.textContent = item.a_ciencia_real;

    // Fontes científicas
    dom.scienceSourcesList.innerHTML = "";
    if (Array.isArray(item.fontes_cientificas) && item.fontes_cientificas.length > 0) {
      item.fontes_cientificas.forEach(src => {
        const li = document.createElement("li");
        li.className = "source-item";
        const linkHref = src.doi_ou_link && src.doi_ou_link.startsWith("http")
          ? src.doi_ou_link
          : `https://scholar.google.com/scholar?q=${encodeURIComponent(`${src.autor_ano} ${src.titulo}`)}`;

        li.innerHTML = `
          <div class="source-header">
            <strong>${escapeHtml(src.autor_ano)}</strong> — <em>${escapeHtml(src.periodico)}</em>
          </div>
          <div class="source-title">"${escapeHtml(src.titulo)}"</div>
          <a class="source-link" href="${escapeHtml(linkHref)}" target="_blank" rel="noopener noreferrer">
            <svg class="icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
            Ver Estudo / DOI
          </a>
        `;
        dom.scienceSourcesList.appendChild(li);
      });
    } else {
      dom.scienceSourcesList.innerHTML = `<li class="source-item text-muted">Literatura biológica geral e TalkOrigins Archive.</li>`;
    }

    // Configurar Quiz
    setupQuiz(item);

    // Atualizar botão de favorito
    updateFavoriteButton();

    // Se estiver em modo quiz, garantir visualização adequada
    updateViewMode();
  }

  // Prepara o bloco de quiz interativo
  function setupQuiz(item) {
    if (!item.quiz) {
      if (dom.quizContainer) dom.quizContainer.style.display = "none";
      return;
    }

    const quiz = item.quiz;
    dom.quizQuestion.textContent = quiz.pergunta;
    dom.quizFeedback.style.display = "none";
    dom.quizFeedback.className = "quiz-feedback";
    dom.quizOptions.innerHTML = "";

    quiz.opcoes.forEach((opcao, idx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option-btn";
      btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + idx)}</span> <span class="option-text">${escapeHtml(opcao)}</span>`;
      btn.addEventListener("click", () => handleQuizOptionClick(idx, quiz.correta, quiz.explicacao_rapida));
      dom.quizOptions.appendChild(btn);
    });
  }

  function handleQuizOptionClick(chosenIdx, correctIdx, explanation) {
    if (state.quizAnswered) return;
    state.quizAnswered = true;

    const buttons = dom.quizOptions.querySelectorAll(".quiz-option-btn");
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIdx) {
        btn.classList.add("correct");
      } else if (idx === chosenIdx) {
        btn.classList.add("wrong");
      }
    });

    dom.quizFeedback.style.display = "block";
    if (chosenIdx === correctIdx) {
      sounds.playSuccess();
      dom.quizFeedback.className = "quiz-feedback success";
      dom.quizFeedback.innerHTML = `<strong>🎉 Acertou em cheio!</strong> ${escapeHtml(explanation || "Excelente raciocínio científico!")}`;
    } else {
      sounds.playError();
      dom.quizFeedback.className = "quiz-feedback error";
      dom.quizFeedback.innerHTML = `<strong>❌ Caiu na falácia!</strong> ${escapeHtml(explanation || "A opção correta era a destacada em verde.")}`;
    }
  }

  function toggleViewMode() {
    state.currentTab = state.currentTab === "compare" ? "quiz" : "compare";
    updateViewMode();
  }

  function updateViewMode() {
    if (state.currentTab === "quiz") {
      dom.cardContainer.classList.add("quiz-mode");
      if (dom.quizContainer) dom.quizContainer.style.display = "block";
      if (dom.btnToggleMode) dom.btnToggleMode.innerHTML = `<span>📖 Ver Refutação Completa</span>`;
    } else {
      dom.cardContainer.classList.remove("quiz-mode");
      if (dom.quizContainer) dom.quizContainer.style.display = "none";
      if (dom.btnToggleMode) dom.btnToggleMode.innerHTML = `<span>🎯 Testar em Modo Quiz</span>`;
    }
  }

  // Copiar conteúdo formatado
  function copyCardContent() {
    if (!state.current) return;
    sounds.playClick();
    const item = state.current;

    const formatted = `🍌 CRIACIONATOR 3000 — FALÁCIA & CIÊNCIA 🐒\n\n` +
      `📢 ARGUMENTO CRIACIONISTA:\n"${item.titulo}"\n${item.argumento_criacionista}\n\n` +
      `🤦‍♂️ POR QUE É IDIOTA:\n${item.por_que_e_idiota}\n\n` +
      `🔬 A CIÊNCIA REAL:\n${item.a_ciencia_real}\n\n` +
      `📚 FONTE:\n${item.fontes_cientificas?.[0]?.autor_ano || "Literatura Biológica"} - "${item.fontes_cientificas?.[0]?.titulo || ""}" (${item.fontes_cientificas?.[0]?.doi_ou_link || ""})\n\n` +
      `Criado com Criacionator 3000 (GitHub Pages)`;

    navigator.clipboard.writeText(formatted).then(() => {
      const originalText = dom.btnCopyCard.innerHTML;
      dom.btnCopyCard.innerHTML = `<span>✅ Copiado!</span>`;
      setTimeout(() => {
        dom.btnCopyCard.innerHTML = originalText;
      }, 1800);
    }).catch(err => {
      console.error("Erro ao copiar para clipboard:", err);
    });
  }

  // Compartilhar conteúdo (Web Share API)
  function shareCardContent() {
    if (!state.current) return;
    sounds.playClick();
    const item = state.current;

    if (navigator.share) {
      navigator.share({
        title: `Criacionator 3000: ${item.titulo}`,
        text: `"${item.titulo}" — Veja por que esse argumento criacionista é absurdo e o que a ciência real diz:`,
        url: window.location.href
      }).catch(() => {});
    } else {
      copyCardContent();
    }
  }

  // Favoritos
  function toggleFavorite() {
    if (!state.current) return;
    sounds.playClick();
    const id = state.current.id;
    const idx = state.favorites.findIndex(f => f.id === id);

    if (idx >= 0) {
      state.favorites.splice(idx, 1);
    } else {
      state.favorites.unshift(state.current);
    }

    localStorage.setItem("criacionator_favorites", JSON.stringify(state.favorites));
    updateFavoriteButton();
  }

  function updateFavoriteButton() {
    if (!state.current) return;
    const isFav = state.favorites.some(f => f.id === state.current.id);
    if (isFav) {
      dom.btnFavoriteCard.classList.add("favorited");
      dom.btnFavoriteCard.title = "Remover dos Favoritos";
    } else {
      dom.btnFavoriteCard.classList.remove("favorited");
      dom.btnFavoriteCard.title = "Salvar nos Favoritos";
    }
  }

  // Renderizar catálogo de clássicos no modal
  function renderCatalog() {
    dom.catalogGrid.innerHTML = "";
    ARGUMENTOS_CLASSICOS.forEach(item => {
      const card = document.createElement("div");
      card.className = "catalog-item-card";
      card.innerHTML = `
        <div class="cat-badge">${item.categoria_label}</div>
        <h4>${escapeHtml(item.titulo)}</h4>
        <p class="cat-snippet">${escapeHtml(item.argumento_criacionista.substring(0, 110))}...</p>
        <div class="cat-footer">
          <span class="cat-delirium">Delírio: ${item.nivel_delirio}/10</span>
          <button class="btn-select-catalog" data-id="${item.id}">Carregar</button>
        </div>
      `;
      card.querySelector(".btn-select-catalog").addEventListener("click", () => {
        displayArgument(item);
        closeAllModals();
        sounds.playDivineHarp();
      });
      dom.catalogGrid.appendChild(card);
    });
  }

  // Renderizar favoritos no modal
  function renderFavorites() {
    dom.favoritesGrid.innerHTML = "";
    if (state.favorites.length === 0) {
      dom.favoritesGrid.innerHTML = `
        <div class="empty-state">
          <p>Você ainda não favoritou nenhum argumento!</p>
          <p class="text-muted">Clique na estrelinha no card principal para colecionar suas falácias favoritas.</p>
        </div>
      `;
      return;
    }

    state.favorites.forEach(item => {
      const card = document.createElement("div");
      card.className = "catalog-item-card";
      card.innerHTML = `
        <div class="cat-badge">${item.categoria_label || "Favorito"}</div>
        <h4>${escapeHtml(item.titulo)}</h4>
        <p class="cat-snippet">${escapeHtml(item.argumento_criacionista.substring(0, 110))}...</p>
        <div class="cat-footer">
          <button class="btn-select-catalog" data-id="${item.id}">Ver Argumento</button>
        </div>
      `;
      card.querySelector(".btn-select-catalog").addEventListener("click", () => {
        displayArgument(item);
        closeAllModals();
        sounds.playClick();
      });
      dom.favoritesGrid.appendChild(card);
    });
  }

  // Síntese de Fala (Web Speech API)
  function speakText(text, side) {
    if (!("speechSynthesis" in window)) {
      alert("Seu navegador não suporta síntese de voz nativa.");
      return;
    }

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";

    // Efeito de voz: solene e dramática para criacionismo, mais rápida e didática para ciência
    if (side === "creation") {
      utterance.pitch = 0.85;
      utterance.rate = 0.95;
      sounds.playDivineHarp();
    } else {
      utterance.pitch = 1.1;
      utterance.rate = 1.05;
      sounds.playScienceLaser();
    }

    window.speechSynthesis.speak(utterance);
  }

  // Controle de som UI
  function updateSoundButton() {
    if (sounds.enabled) {
      dom.btnSoundToggle.innerHTML = `
        <svg class="icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/>
        </svg>
      `;
      dom.btnSoundToggle.title = "Som: Ativado (Clique para mutar)";
    } else {
      dom.btnSoundToggle.innerHTML = `
        <svg class="icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"/>
        </svg>
      `;
      dom.btnSoundToggle.title = "Som: Desativado (Clique para ativar)";
    }
  }

  function updateAiBadge() {
    if (dom.hasAiBadge) {
      if (geminiService.hasApiKey()) {
        dom.hasAiBadge.className = "status-badge active";
        dom.hasAiBadge.textContent = "✨ Gemini Conectado";
      } else {
        dom.hasAiBadge.className = "status-badge offline";
        dom.hasAiBadge.textContent = "⚡ Base Local Ativa";
      }
    }
  }

  // Modais helpers
  function openModal(modal) {
    if (!modal) return;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeAllModals() {
    document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("active"));
    document.body.style.overflow = "";
  }

  function showConfigFeedback(msg, type = "info") {
    if (!dom.configFeedback) return;
    dom.configFeedback.textContent = msg;
    dom.configFeedback.className = `feedback-box ${type}`;
    dom.configFeedback.style.display = "block";
  }

  function showLoading(show) {
    if (show) {
      const quote = LOADING_QUOTES[Math.floor(Math.random() * LOADING_QUOTES.length)];
      dom.loadingQuote.textContent = quote;
      dom.loadingOverlay.classList.add("active");
    } else {
      dom.loadingOverlay.classList.remove("active");
    }
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Executa inicialização
  init();
});
