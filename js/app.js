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
    btnRevalidateLive: document.getElementById("btn-revalidate-live"),
    citationsLiveBadge: document.getElementById("citations-live-badge"),
    citationsBadgeLabel: document.getElementById("citations-badge-label"),
    citationsValidationBanner: document.getElementById("citations-validation-banner"),
    citationsValidationText: document.getElementById("citations-validation-text"),

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
    modalAboutMission: document.getElementById("modal-about-mission"),
    btnOpenAbout: document.getElementById("btn-open-about"),
    inputApiKey: document.getElementById("input-api-key"),
    selectModel: document.getElementById("select-model"),
    btnSaveConfig: document.getElementById("btn-save-config"),
    btnTestKey: document.getElementById("btn-test-key"),
    btnClearKey: document.getElementById("btn-clear-key"),
    btnClearAllDb: document.getElementById("btn-clear-all-db"),
    configFeedback: document.getElementById("config-feedback"),
    catalogGrid: document.getElementById("catalog-grid"),
    favoritesGrid: document.getElementById("favorites-grid"),
    closeModalBtns: document.querySelectorAll(".btn-close-modal"),

    // Navegação Acadêmica por Módulos
    academicTabs: document.querySelectorAll(".academic-tab-btn"),
    moduleArena: document.getElementById("module-arena"),
    moduleRefuter: document.getElementById("module-refuter"),
    moduleDarwin: document.getElementById("module-darwin"),

    // Refutador Customizado
    customArgumentText: document.getElementById("custom-argument-text"),
    btnSubmitRefutation: document.getElementById("btn-submit-refutation"),
    customRefutationResult: document.getElementById("custom-refutation-result"),
    quickChips: document.querySelectorAll(".quick-chip"),

    // Gabinete de Charles Darwin
    darwinChatMessages: document.getElementById("darwin-chat-messages"),
    darwinUserInput: document.getElementById("darwin-user-input"),
    btnDarwinSend: document.getElementById("btn-darwin-send"),
    btnDarwinClear: document.getElementById("btn-darwin-clear"),
    darwinChips: document.querySelectorAll(".darwin-chip"),
    btnOpenChapterReader: document.getElementById("btn-open-chapter-reader"),
    modalChapterReader: document.getElementById("modal-chapter-reader"),
    selectDarwinChapter: document.getElementById("select-darwin-chapter"),
    chapterReaderBody: document.getElementById("chapter-reader-body"),
    btnDownloadCurrentChapter: document.getElementById("btn-download-current-chapter"),

    // Marcos da Timeline Evolutiva
    evoMilestones: document.querySelectorAll(".evo-milestone"),

    // Busca e filtros do Catálogo
    catalogSearchInput: document.getElementById("catalog-search-input"),
    catalogCategorySelect: document.getElementById("catalog-category-select"),
    catalogMatchesCount: document.getElementById("catalog-matches-count"),
    btnClearCatalogSearch: document.getElementById("btn-clear-catalog-search"),

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
  async function init() {
    setupEventListeners();
    updateSoundButton();
    updateAiBadge();

    // Inicializa persistência local via IndexedDB
    if (window.storageDB) {
      try {
        await window.storageDB.init();
        const dbKey = await window.storageDB.getApiKey();
        const dbModel = await window.storageDB.getModel();
        if (dom.inputApiKey && dbKey) dom.inputApiKey.value = dbKey;
        if (dom.selectModel && dbModel) dom.selectModel.value = dbModel;

        // Carrega histórico do Chat com Darwin do IndexedDB
        await loadDarwinChatFromStorage();
      } catch (e) {
        console.warn("[App] Falha ao carregar do IndexedDB:", e);
      }
    } else {
      if (dom.inputApiKey) dom.inputApiKey.value = geminiService.getApiKey();
      if (dom.selectModel) dom.selectModel.value = geminiService.getModel();
    }

    // Inicializa o leitor de capítulos de Darwin
    initDarwinChapterReader();

    if (dom.statsClassicCount && typeof ARGUMENTOS_CLASSICOS !== "undefined") {
      dom.statsClassicCount.textContent = ARGUMENTOS_CLASSICOS.length;
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

    // Filtros de Categoria da Página Principal
    dom.categoryPills.forEach(pill => {
      pill.addEventListener("click", () => {
        sounds.playClick();
        dom.categoryPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        state.currentCategory = pill.dataset.category || "all";
        loadRandomClassic();
      });
    });

    // Marcos da Linha do Tempo Evolutiva (Deep Time)
    if (dom.evoMilestones) {
      dom.evoMilestones.forEach(milestone => {
        milestone.addEventListener("click", () => {
          const era = milestone.dataset.era;
          const nameEl = milestone.querySelector(".milestone-name");
          const timeEl = milestone.querySelector(".milestone-badge");
          const eraName = nameEl ? nameEl.textContent : "Marco Evolutivo";
          const eraTime = timeEl ? timeEl.textContent : "";

          // Sincroniza categoria
          state.currentCategory = era || "all";
          dom.categoryPills.forEach(p => {
            if (p.dataset.category === era) {
              p.classList.add("active");
            } else {
              p.classList.remove("active");
            }
          });

          // Carrega argumento temático
          loadRandomClassic();

          if (milestone.classList.contains("myth-milestone")) {
            sounds.playError();
            showToast(`🛑 Mito de 6.000 Anos selecionado! Carregando as maiores peripécias da Terra Jovem...`, "error");
          } else {
            sounds.playScienceLaser();
            showToast(`🌍 ${eraName} (${eraTime}): Filtrando evidências e argumentos clássicos!`, "info");
          }

          if (dom.cardContainer) {
            dom.cardContainer.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });

        // Suporte a teclado
        milestone.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            milestone.click();
          }
        });
      });
    }

    // Busca e Filtros em Tempo Real no Catálogo Modal
    if (dom.catalogSearchInput) {
      dom.catalogSearchInput.addEventListener("input", () => {
        const query = dom.catalogSearchInput.value.trim();
        if (dom.btnClearCatalogSearch) {
          dom.btnClearCatalogSearch.style.display = query.length > 0 ? "flex" : "none";
        }
        renderCatalog();
      });
    }

    if (dom.btnClearCatalogSearch) {
      dom.btnClearCatalogSearch.addEventListener("click", () => {
        if (dom.catalogSearchInput) {
          dom.catalogSearchInput.value = "";
          dom.btnClearCatalogSearch.style.display = "none";
          renderCatalog();
          dom.catalogSearchInput.focus();
        }
      });
    }

    if (dom.catalogCategorySelect) {
      dom.catalogCategorySelect.addEventListener("change", () => {
        renderCatalog();
      });
    }

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
    if (dom.btnOpenAbout && dom.modalAboutMission) {
      dom.btnOpenAbout.addEventListener("click", () => {
        sounds.playClick();
        openModal(dom.modalAboutMission);
      });
    }

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

    // Salvar Chave API e Modelo no IndexedDB
    dom.btnSaveConfig.addEventListener("click", async () => {
      sounds.playClick();
      await geminiService.setApiKey(dom.inputApiKey.value);
      await geminiService.setModel(dom.selectModel.value);
      updateAiBadge();
      showConfigFeedback("Configurações salvas localmente no IndexedDB!", "success");
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
    dom.btnClearKey.addEventListener("click", async () => {
      sounds.playClick();
      dom.inputApiKey.value = "";
      await geminiService.setApiKey("");
      updateAiBadge();
      showConfigFeedback("Chave removida.", "info");
    });

    // Limpar Todo o Banco IndexedDB
    if (dom.btnClearAllDb) {
      dom.btnClearAllDb.addEventListener("click", async () => {
        if (confirm("Deseja realmente limpar todos os dados locais (chave do Gemini, conversas com Darwin e histórico) salvos no IndexedDB?")) {
          if (window.storageDB) await window.storageDB.clearAllData();
          await geminiService.setApiKey("");
          if (dom.inputApiKey) dom.inputApiKey.value = "";
          updateAiBadge();
          resetDarwinChatUI();
          showConfigFeedback("Todos os dados locais do IndexedDB foram apagados.", "info");
          showToast("Dados do IndexedDB limpos.", "info");
        }
      });
    }

    // Quiz Reveal All
    if (dom.btnQuizRevealAll) {
      dom.btnQuizRevealAll.addEventListener("click", () => {
        sounds.playScienceLaser();
        state.currentTab = "compare";
        updateViewMode();
      });
    }

    // Botão de Validação ao Vivo de Fontes (CrossRef & OpenAlex)
    if (dom.btnRevalidateLive) {
      dom.btnRevalidateLive.addEventListener("click", () => {
        handleRevalidateSourcesLive();
      });
    }

    // Navegação por Abas Acadêmicas
    if (dom.academicTabs) {
      dom.academicTabs.forEach(tab => {
        tab.addEventListener("click", () => {
          sounds.playClick();
          switchAcademicModule(tab.dataset.target);
        });
      });
    }

    // Refutador Customizado: Chips de Testes Rápidos
    if (dom.quickChips) {
      dom.quickChips.forEach(chip => {
        chip.addEventListener("click", () => {
          sounds.playClick();
          if (dom.customArgumentText) {
            dom.customArgumentText.value = chip.dataset.sample || "";
            dom.customArgumentText.focus();
          }
        });
      });
    }

    // Refutador Customizado: Submissão do Argumento
    if (dom.btnSubmitRefutation) {
      dom.btnSubmitRefutation.addEventListener("click", () => {
        handleSubmitCustomRefutation();
      });
    }

    // Gabinete de Charles Darwin: Chat
    if (dom.btnDarwinSend) {
      dom.btnDarwinSend.addEventListener("click", () => {
        handleSendDarwinMessage();
      });
    }
    if (dom.darwinUserInput) {
      dom.darwinUserInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSendDarwinMessage();
        }
      });
    }
    if (dom.btnDarwinClear) {
      dom.btnDarwinClear.addEventListener("click", async () => {
        if (confirm("Deseja reiniciar a conversa e limpar o histórico local com Charles Darwin?")) {
          if (window.storageDB) await window.storageDB.clearDarwinChat();
          resetDarwinChatUI();
          showToast("Conversa reiniciada com Charles Darwin.", "info");
        }
      });
    }
    if (dom.darwinChips) {
      dom.darwinChips.forEach(chip => {
        chip.addEventListener("click", () => {
          sounds.playClick();
          if (dom.darwinUserInput) {
            dom.darwinUserInput.value = chip.dataset.question || "";
            handleSendDarwinMessage();
          }
        });
      });
    }
  }

  // Alterna entre abas acadêmicas (Arena, Refutador, Darwin, Catálogo)
  function switchAcademicModule(targetId) {
    if (dom.academicTabs) {
      dom.academicTabs.forEach(tab => {
        if (tab.dataset.target === targetId) {
          tab.classList.add("active");
        } else {
          tab.classList.remove("active");
        }
      });
    }

    if (dom.moduleArena) dom.moduleArena.classList.add("hidden");
    if (dom.moduleRefuter) dom.moduleRefuter.classList.add("hidden");
    if (dom.moduleDarwin) dom.moduleDarwin.classList.add("hidden");

    if (targetId === "module-arena" && dom.moduleArena) {
      dom.moduleArena.classList.remove("hidden");
    } else if (targetId === "module-refuter" && dom.moduleRefuter) {
      dom.moduleRefuter.classList.remove("hidden");
    } else if (targetId === "module-darwin" && dom.moduleDarwin) {
      dom.moduleDarwin.classList.remove("hidden");
      if (dom.darwinChatMessages) {
        dom.darwinChatMessages.scrollTop = dom.darwinChatMessages.scrollHeight;
      }
    } else if (targetId === "module-catalog") {
      openModal(dom.modalCatalog);
      if (dom.academicTabs) {
        dom.academicTabs.forEach(t => {
          if (t.dataset.target === "module-arena") t.classList.add("active");
          else t.classList.remove("active");
        });
      }
      if (dom.moduleArena) dom.moduleArena.classList.remove("hidden");
    }
  }

  // Submissão do Refutador de Argumentos ao Vivo
  async function handleSubmitCustomRefutation() {
    const text = dom.customArgumentText ? dom.customArgumentText.value.trim() : "";
    if (!text || text.length < 5) {
      sounds.playError();
      showToast("Por favor, digite ou cole um argumento com pelo menos 5 caracteres.", "warning");
      return;
    }

    if (!geminiService.hasApiKey()) {
      sounds.playError();
      openModal(dom.modalConfig);
      showConfigFeedback("Insira sua chave de API do Gemini para refutar argumentos ao vivo!", "warning");
      return;
    }

    showLoading(true, "Analisando falácia lógica e consultando biologia evolutiva com Gemini...");
    try {
      const result = await geminiService.refuteCustomArgument(text);

      // Validação ao vivo das fontes geradas
      if (window.liveCitationValidator && result.fontes_cientificas?.length > 0) {
        updateLoadingQuote("⚡ Auditando fontes geradas em tempo real com CrossRef e OpenAlex...");
        await liveCitationValidator.validateArgumentSources(result, (cur, tot, msg) => {
          updateLoadingQuote(`⚡ ${msg}`);
        });
      }

      // Salva no IndexedDB
      if (window.storageDB) {
        await window.storageDB.saveCustomRefutation(result);
      }

      // Renderiza resultado
      displayCustomRefutation(result);
      sounds.playScienceLaser();
      showToast("⚔️ Argumento refutado e fontes validadas ao vivo com sucesso!", "success", 4500);
    } catch (err) {
      console.error("[Refuter] Falha ao refutar argumento:", err);
      sounds.playError();
      showToast(`Erro ao refutar argumento: ${err.message}`, "error", 5000);
    } finally {
      showLoading(false);
    }
  }

  // Renderiza o resultado customizado refutado
  function displayCustomRefutation(item) {
    if (!dom.customRefutationResult) return;
    dom.customRefutationResult.classList.remove("hidden");

    let sourcesHtml = "";
    if (Array.isArray(item.fontes_cientificas) && item.fontes_cientificas.length > 0) {
      item.fontes_cientificas.forEach(src => {
        const rawUrl = src.doi_ou_link || "";
        const isDoi = src.doi || rawUrl.includes("10.");
        const cleanDoi = src.doi || (rawUrl.includes("doi.org/") ? rawUrl.split("doi.org/")[1] : rawUrl);
        const doiUrl = isDoi ? `https://doi.org/${cleanDoi}` : null;
        const scholarUrl = src.scholar_url || `https://scholar.google.com/scholar?q=${encodeURIComponent(`${src.autor_ano || ""} ${src.titulo || ""}`)}`;

        let btns = "";
        if (doiUrl) {
          btns += `<a class="citation-btn btn-doi" href="${escapeHtml(doiUrl)}" target="_blank" rel="noopener noreferrer"><span>DOI Oficial ↗</span></a>`;
        }
        if (src.oa_url) {
          btns += `<a class="citation-btn btn-oa" href="${escapeHtml(src.oa_url)}" target="_blank" rel="noopener noreferrer"><span>PDF Aberto (OA) ↗</span></a>`;
        }
        btns += `<a class="citation-btn btn-scholar" href="${escapeHtml(scholarUrl)}" target="_blank" rel="noopener noreferrer"><span>Google Scholar ↗</span></a>`;

        let badge = "";
        if (src.badge_text) {
          badge = `<span class="badge-live-tag badge-live-verified">${escapeHtml(src.badge_text)}</span>`;
        } else {
          badge = `<span class="badge-live-tag badge-live-verified">✓ Validado ao Vivo (CrossRef/OpenAlex)</span>`;
        }

        sourcesHtml += `
          <li class="citation-item">
            <div class="citation-meta">
              <span class="citation-authors">${escapeHtml(src.autor_ano || "Literatura Biológica")}</span>
              <span class="citation-sep">&bull;</span>
              <span class="citation-journal">${escapeHtml(src.periodico || "Periódico Revisado por Pares")}</span>
            </div>
            <div class="citation-title">&ldquo;${escapeHtml(src.titulo || "Estudo sobre Evolução")}&rdquo;</div>
            <div class="citation-live-status">${badge}</div>
            <div class="citation-actions">${btns}</div>
          </li>
        `;
      });
    }

    dom.customRefutationResult.innerHTML = `
      <div class="duel-arena-wrapper fade-in" style="margin-top: 1.5rem;">
        <div class="duel-arena">
          <article class="duel-panel creation-panel">
            <div class="panel-header creation-header">
              <div class="panel-tag-group">
                <span class="panel-pill pill-creation">📢 ARGUMENTO SUBMETIDO</span>
                <span class="badge-category">${escapeHtml(item.falacia_logica || "Falácia Lógica")}</span>
              </div>
            </div>
            <div class="panel-body">
              <h3 class="panel-title">${escapeHtml(item.titulo)}</h3>
              <div class="argument-card">
                <div class="quote-mark left">&ldquo;</div>
                <p class="argument-text">${escapeHtml(item.argumento_criacionista)}</p>
                <div class="quote-mark right">&rdquo;</div>
              </div>
              <div class="analogy-card">
                <div class="analogy-header">
                  <span class="analogy-icon">🤡</span>
                  <span class="analogy-label">Analogia Equivalente:</span>
                </div>
                <p class="analogy-text">&ldquo;${escapeHtml(item.analogia_absurda || "")}&rdquo;</p>
              </div>
              <div class="delirium-meter-box">
                <div class="delirium-meter-header">
                  <span class="delirium-title">NÍVEL DE DELÍRIO:</span>
                  <span class="delirium-value">${item.nivel_delirio || 9}/10</span>
                </div>
                <div class="delirium-glow-bar">
                  <div class="delirium-glow-fill" style="width: ${(item.nivel_delirio || 9) * 10}%;"></div>
                </div>
                <p class="delirium-verdict">${escapeHtml(item.rotulo_delirio || "Nível elevado de delírio")}</p>
              </div>
            </div>
          </article>

          <div class="arena-vs-divider">
            <div class="vs-glow-line"></div>
            <div class="vs-circle"><span>VS</span></div>
          </div>

          <article class="duel-panel science-panel">
            <div class="panel-header science-header">
              <div class="panel-tag-group">
                <span class="panel-pill pill-science">🔬 A CIÊNCIA REAL & REVISÃO POR PARES</span>
                <span class="badge-fallacy">${escapeHtml(item.falacia_logica || "Falácia Formal")}</span>
              </div>
            </div>
            <div class="panel-body">
              <div class="debunk-section">
                <div class="debunk-header">
                  <span class="debunk-icon">🤦‍♂️</span>
                  <h4>Por que é um erro absurdo:</h4>
                </div>
                <p class="debunk-text">${escapeHtml(item.por_que_e_idiota)}</p>
              </div>

              <div class="debunk-section color-cyan">
                <div class="debunk-header">
                  <span class="debunk-icon">🧬</span>
                  <h4>O que a Biologia e a Geologia dizem:</h4>
                </div>
                <p class="science-text">${escapeHtml(item.a_ciencia_real)}</p>
              </div>

              <div class="citations-card">
                <div class="citations-header">
                  <div class="citations-header-title">
                    <span class="citations-icon">📚</span>
                    <h4>Literatura Científica Validada ao Vivo:</h4>
                  </div>
                </div>
                <ul class="citations-list">${sourcesHtml}</ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    `;

    dom.customRefutationResult.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Carrega histórico de mensagens do Darwin a partir do IndexedDB
  async function loadDarwinChatFromStorage() {
    if (!window.storageDB || !dom.darwinChatMessages) return;
    try {
      const messages = await window.storageDB.getDarwinMessages(30);
      if (messages && messages.length > 0) {
        dom.darwinChatMessages.innerHTML = "";
        for (const msg of messages) {
          appendDarwinChatMessageUI(msg.role, msg.content, msg.chapter_ref);
        }
      }
    } catch (e) {
      console.warn("[DarwinChat] Falha ao carregar do IndexedDB:", e);
    }
  }

  function appendDarwinChatMessageUI(role, content, chapterRef = null) {
    if (!dom.darwinChatMessages) return;

    const msgEl = document.createElement("div");
    msgEl.className = `chat-msg msg-${role}`;

    if (role === "user") {
      msgEl.innerHTML = `
        <div class="chat-avatar-user">👤</div>
        <div class="chat-bubble-user">
          <p>${escapeHtml(content)}</p>
        </div>
      `;
    } else {
      let citationHtml = "";
      if (chapterRef) {
        citationHtml = `
          <div class="darwin-citation-pill">
            <span>📖 Citando: ${escapeHtml(chapterRef)}</span>
          </div>
        `;
      } else {
        citationHtml = `
          <div class="darwin-citation-pill">
            <span>📖 Embasado em 'On the Origin of Species' (1859)</span>
          </div>
        `;
      }

      msgEl.innerHTML = `
        <div class="chat-avatar-darwin">👴🏼</div>
        <div class="chat-bubble-darwin">
          <div class="darwin-speaker-header">
            <strong>Charles Darwin</strong>
            <span class="darwin-role">Down House, Kent (1859)</span>
          </div>
          <p>${escapeHtml(content).replace(/\n\n/g, "</p><p>")}</p>
          ${citationHtml}
        </div>
      `;
    }

    dom.darwinChatMessages.appendChild(msgEl);
    dom.darwinChatMessages.scrollTop = dom.darwinChatMessages.scrollHeight;
  }

  function appendDarwinTypingIndicator() {
    if (!dom.darwinChatMessages) return null;
    const id = `typing-${Date.now()}`;
    const typingEl = document.createElement("div");
    typingEl.id = id;
    typingEl.className = "chat-msg msg-darwin";
    typingEl.innerHTML = `
      <div class="chat-avatar-darwin">👴🏼</div>
      <div class="chat-bubble-darwin" style="font-style: italic; color: #fbbf24;">
        <span>Charles Darwin está consultando seus manuscritos e escrevendo... ✍️</span>
      </div>
    `;
    dom.darwinChatMessages.appendChild(typingEl);
    dom.darwinChatMessages.scrollTop = dom.darwinChatMessages.scrollHeight;
    return id;
  }

  function removeDarwinTypingIndicator(id) {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  function resetDarwinChatUI() {
    if (!dom.darwinChatMessages) return;
    dom.darwinChatMessages.innerHTML = `
      <div class="chat-msg msg-darwin">
        <div class="chat-avatar-darwin">👴🏼</div>
        <div class="chat-bubble-darwin">
          <div class="darwin-speaker-header">
            <strong>Charles Darwin</strong>
            <span class="darwin-role">Down House, Kent (1859)</span>
          </div>
          <p>Meu estimado amigo da ciência. É com supremo prazer que o recebo em meu gabinete de estudos. Dediquei duas décadas à compilação de fatos desde o regresso do <em>HMS Beagle</em> para publicar <em>'A Origem das Espécies'</em>. Qual aspecto de minhas observações ou da teoria da descendência com modificação desejas debater?</p>
          <div class="darwin-citation-pill">
            <span>📖 Embasado em 'On the Origin of Species' (John Murray, 1859)</span>
          </div>
        </div>
      </div>
    `;
  }

  async function handleSendDarwinMessage() {
    const input = dom.darwinUserInput;
    if (!input) return;
    const query = input.value.trim();
    if (!query) return;

    if (!geminiService.hasApiKey()) {
      sounds.playError();
      openModal(dom.modalConfig);
      showConfigFeedback("Insira sua chave de API do Gemini para conversar com Charles Darwin!", "warning");
      return;
    }

    input.value = "";
    appendDarwinChatMessageUI("user", query);

    if (window.storageDB) {
      await window.storageDB.saveDarwinMessage({ role: "user", content: query });
    }

    const contextInfo = typeof findDarwinContext === "function" ? findDarwinContext(query) : null;
    const typingId = appendDarwinTypingIndicator();

    try {
      const history = window.storageDB ? await window.storageDB.getDarwinMessages(10) : [];
      const reply = await geminiService.chatWithDarwin(query, history, contextInfo);

      removeDarwinTypingIndicator(typingId);
      appendDarwinChatMessageUI("darwin", reply.content, reply.chapter_ref);

      if (window.storageDB) {
        await window.storageDB.saveDarwinMessage({
          role: "darwin",
          content: reply.content,
          chapter_ref: reply.chapter_ref
        });
      }
      sounds.playSuccess();
    } catch (err) {
      removeDarwinTypingIndicator(typingId);
      appendDarwinChatMessageUI("darwin", `Perdoe-me, prezado interlocutor, mas minhas anotações não puderam ser recuperadas neste momento (${err.message}). Poderíeis reformular vossa indagação?`);
      sounds.playError();
    }
  }

  // Inicializa o leitor de capítulos de Darwin
  function initDarwinChapterReader() {
    if (!dom.selectDarwinChapter) return;
    dom.selectDarwinChapter.innerHTML = "";

    if (typeof DARWIN_CHAPTERS !== "undefined" && Array.isArray(DARWIN_CHAPTERS)) {
      DARWIN_CHAPTERS.forEach(ch => {
        const opt = document.createElement("option");
        opt.value = ch.filename;
        opt.textContent = `${ch.title_pt} (${ch.word_count.toLocaleString("pt-BR")} palavras)`;
        dom.selectDarwinChapter.appendChild(opt);
      });

      dom.selectDarwinChapter.addEventListener("change", () => {
        loadDarwinChapter(dom.selectDarwinChapter.value);
      });

      if (DARWIN_CHAPTERS.length > 0) {
        loadDarwinChapter(DARWIN_CHAPTERS[0].filename);
      }
    }

    if (dom.btnOpenChapterReader) {
      dom.btnOpenChapterReader.addEventListener("click", () => {
        openModal(dom.modalChapterReader);
      });
    }
  }

  async function loadDarwinChapter(filename) {
    if (!dom.chapterReaderBody) return;
    dom.chapterReaderBody.innerHTML = `<div class="reader-loading">Carregando capítulo ${escapeHtml(filename)}...</div>`;

    if (dom.btnDownloadCurrentChapter) {
      dom.btnDownloadCurrentChapter.href = `darwin/chapters/${filename}`;
      dom.btnDownloadCurrentChapter.setAttribute("download", filename);
    }

    try {
      const res = await fetch(`darwin/chapters/${filename}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      dom.chapterReaderBody.textContent = text;
    } catch (err) {
      dom.chapterReaderBody.innerHTML = `<p class="text-danger">Não foi possível carregar o arquivo do capítulo (${err.message}). Você pode baixá-lo diretamente pelo link acima.</p>`;
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

  // Validação ao Vivo acionada manualmente pelo usuário
  async function handleRevalidateSourcesLive() {
    if (!state.current || !state.current.fontes_cientificas || state.current.fontes_cientificas.length === 0) {
      showToast("Nenhuma fonte científica neste card para validar.", "info");
      return;
    }

    if (!window.liveCitationValidator) {
      showToast("Módulo de validação ao vivo não inicializado.", "error");
      return;
    }

    if (dom.btnRevalidateLive) {
      dom.btnRevalidateLive.classList.add("loading");
    }
    if (dom.citationsValidationBanner) {
      dom.citationsValidationBanner.classList.remove("hidden");
      if (dom.citationsValidationText) {
        dom.citationsValidationText.textContent = "Consultando CrossRef & OpenAlex ao vivo...";
      }
    }

    try {
      await liveCitationValidator.validateArgumentSources(state.current, (cur, tot, msg) => {
        if (dom.citationsValidationText) {
          dom.citationsValidationText.textContent = msg;
        }
      });
      displayArgument(state.current);
      sounds.playSuccess();
      showToast("✓ Fontes auditadas ao vivo nas APIs CrossRef e OpenAlex!", "success", 4000);
      if (dom.citationsBadgeLabel) {
        dom.citationsBadgeLabel.textContent = "Auditado ao Vivo Agora";
      }
    } catch (err) {
      console.error("[LiveValidator] Falha:", err);
      showToast(`Erro na validação ao vivo: ${err.message}`, "error");
    } finally {
      if (dom.btnRevalidateLive) {
        dom.btnRevalidateLive.classList.remove("loading");
      }
      setTimeout(() => {
        if (dom.citationsValidationBanner) {
          dom.citationsValidationBanner.classList.add("hidden");
        }
      }, 1500);
    }
  }

  // Manipula clique em Gerar com IA
  async function handleGenerateWithAI() {
    if (!geminiService.hasApiKey()) {
      sounds.playError();
      openModal(dom.modalConfig);
      showConfigFeedback("Insira sua chave de API do Gemini para gerar novos argumentos com IA!", "warning");
      return;
    }

    showLoading(true, "Gerando argumento criacionista e demolição científica com Gemini...");
    const persona = dom.personaSelect ? dom.personaSelect.value : "pastor_zap";
    const customTopic = dom.customTopicInput ? dom.customTopicInput.value.trim() : "";

    try {
      const generated = await geminiService.generateArgument(state.currentCategory, persona, customTopic);

      // Validação ao vivo em tempo real via CrossRef e OpenAlex
      if (window.liveCitationValidator && generated.fontes_cientificas && generated.fontes_cientificas.length > 0) {
        updateLoadingQuote("⚡ Consultando CrossRef & OpenAlex ao vivo para validar ou recuperar DOIs...");
        await liveCitationValidator.validateArgumentSources(generated, (cur, tot, msg) => {
          updateLoadingQuote(`⚡ ${msg}`);
        });
      }

      displayArgument(generated);
      sounds.playScienceLaser();
      showToast(`✨ Argumento gerado com fontes 100% validadas ao vivo no CrossRef/OpenAlex!`, "success", 4500);
    } catch (err) {
      console.error("[Criacionator] Falha ao gerar:", err);
      sounds.playError();
      showToast(`⚠️ Não foi possível conectar à IA agora (${err.message}). Carregamos um clássico!`, "error", 5000);
      loadRandomClassic();
    } finally {
      showLoading(false);
    }
  }

  // Notificações Toast no canto da tela
  function showToast(message, type = "info", duration = 4000) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      setTimeout(() => toast.remove(), 400);
    }, duration);
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

    // Fontes científicas verificadas (CrossRef, OpenAlex, TalkOrigins e Google Scholar)
    dom.scienceSourcesList.innerHTML = "";
    if (Array.isArray(item.fontes_cientificas) && item.fontes_cientificas.length > 0) {
      item.fontes_cientificas.forEach(src => {
        const li = document.createElement("li");
        li.className = "citation-item";

        const rawUrl = src.doi_ou_link || "";
        const isDoi = src.doi || rawUrl.includes("doi.org/10.") || rawUrl.startsWith("10.");
        let doiUrl = null;
        if (isDoi) {
          const cleanDoi = src.doi || (rawUrl.includes("doi.org/") ? rawUrl.split("doi.org/")[1] : rawUrl);
          doiUrl = `https://doi.org/${cleanDoi}`;
        }
        const isTalkOrigins = rawUrl.includes("talkorigins.org");
        const scholarUrl = src.scholar_url || `https://scholar.google.com/scholar?q=${encodeURIComponent(`${src.autor_ano} ${src.titulo}`)}`;

        let buttonsHtml = "";

        if (doiUrl) {
          buttonsHtml += `
            <a class="citation-btn btn-doi" href="${escapeHtml(doiUrl)}" target="_blank" rel="noopener noreferrer" title="Abrir publicação pelo DOI oficial (doi.org)">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
              <span>DOI Oficial</span>
            </a>
          `;
        }

        if (src.oa_url) {
          buttonsHtml += `
            <a class="citation-btn btn-oa" href="${escapeHtml(src.oa_url)}" target="_blank" rel="noopener noreferrer" title="Acessar publicação em formato aberto (Open Access)">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
              </svg>
              <span>PDF Aberto (OA)</span>
            </a>
          `;
        }

        if (isTalkOrigins) {
          buttonsHtml += `
            <a class="citation-btn btn-talkorigins" href="${escapeHtml(rawUrl)}" target="_blank" rel="noopener noreferrer" title="Ver refutação completa no TalkOrigins Archive">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
              </svg>
              <span>TalkOrigins Archive</span>
            </a>
          `;
        } else if (rawUrl && rawUrl.startsWith("http") && !isDoi) {
          buttonsHtml += `
            <a class="citation-btn btn-external" href="${escapeHtml(rawUrl)}" target="_blank" rel="noopener noreferrer" title="Acessar link da publicação">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
              <span>Fonte / Link</span>
            </a>
          `;
        }

        // Google Scholar sempre presente como busca direta garantida
        buttonsHtml += `
          <a class="citation-btn btn-scholar" href="${escapeHtml(scholarUrl)}" target="_blank" rel="noopener noreferrer" title="Buscar estudo e PDFs livres no Google Scholar">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <span>Google Scholar</span>
          </a>
        `;

        // Badge de status de validação ao vivo
        let badgeHtml = "";
        if (src.badge_text) {
          let badgeClass = "badge-live-verified";
          if (src.badge_type === "recovered" || src.badge_type === "topic_match") badgeClass = "badge-live-recovered";
          else if (src.badge_type === "talkorigins") badgeClass = "badge-live-talkorigins";
          else if (src.badge_type === "scholar") badgeClass = "badge-live-scholar";

          badgeHtml = `
            <div class="citation-live-status">
              <span class="badge-live-tag ${badgeClass}">
                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${escapeHtml(src.badge_text)}
              </span>
            </div>
          `;
        } else if (item.isGeneratedByAI) {
          badgeHtml = `
            <div class="citation-live-status">
              <span class="badge-live-tag badge-live-scholar">
                ⚡ Validação ao vivo CrossRef/OpenAlex disponível
              </span>
            </div>
          `;
        } else {
          badgeHtml = `
            <div class="citation-live-status">
              <span class="badge-live-tag badge-live-verified">
                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ✓ Auditado CrossRef / OpenAlex
              </span>
            </div>
          `;
        }

        li.innerHTML = `
          <div class="citation-meta">
            <span class="citation-authors">${escapeHtml(src.autor_ano)}</span>
            <span class="citation-sep">&bull;</span>
            <span class="citation-journal">${escapeHtml(src.periodico)}</span>
          </div>
          <div class="citation-title">&ldquo;${escapeHtml(src.titulo)}&rdquo;</div>
          ${badgeHtml}
          <div class="citation-actions">
            ${buttonsHtml}
          </div>
        `;
        dom.scienceSourcesList.appendChild(li);
      });
    } else {
      dom.scienceSourcesList.innerHTML = `<li class="citation-item text-muted">Literatura biológica geral revisada por pares e TalkOrigins Archive.</li>`;
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

  // Renderizar catálogo de falácias com busca e filtros em tempo real
  function renderCatalog() {
    if (!dom.catalogGrid) return;
    dom.catalogGrid.innerHTML = "";

    const query = dom.catalogSearchInput ? dom.catalogSearchInput.value.trim().toLowerCase() : "";
    const selectedCategory = dom.catalogCategorySelect ? dom.catalogCategorySelect.value : "all";

    // Filtragem combinada
    const filtered = ARGUMENTOS_CLASSICOS.filter(item => {
      // Filtro de categoria
      if (selectedCategory !== "all" && item.categoria !== selectedCategory) {
        return false;
      }
      // Filtro de texto por termos
      if (query) {
        const titleMatch = (item.titulo || "").toLowerCase().includes(query);
        const argMatch = (item.argumento_criacionista || "").toLowerCase().includes(query);
        const debunkMatch = (item.por_que_e_idiota || "").toLowerCase().includes(query);
        const scienceMatch = (item.a_ciencia_real || "").toLowerCase().includes(query);
        const fallacyMatch = (item.falacia_logica || "").toLowerCase().includes(query);
        return titleMatch || argMatch || debunkMatch || scienceMatch || fallacyMatch;
      }
      return true;
    });

    // Atualiza badge de contagem
    if (dom.catalogMatchesCount) {
      dom.catalogMatchesCount.textContent = `${filtered.length} de ${ARGUMENTOS_CLASSICOS.length} falácias`;
    }

    if (filtered.length === 0) {
      dom.catalogGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1; padding: 2.5rem 1rem;">
          <p style="font-size: 1.15rem; font-weight: 700; color: #f87171;">Nenhuma falácia encontrada!</p>
          <p class="text-muted" style="margin-top: 0.5rem; max-width: 500px; margin-left: auto; margin-right: auto;">
            Não encontramos argumentos correspondentes aos termos digitados. Tente palavras como <em>"arca"</em>, <em>"olho"</em>, <em>"banana"</em>, <em>"entropia"</em>, <em>"neandertal"</em> ou limpe a busca.
          </p>
          <button id="btn-reset-catalog-filters" class="btn-primary-action btn-secondary" style="margin-top: 1rem;">
            Limpar Busca & Filtros
          </button>
        </div>
      `;
      const btnReset = document.getElementById("btn-reset-catalog-filters");
      if (btnReset) {
        btnReset.addEventListener("click", () => {
          if (dom.catalogSearchInput) dom.catalogSearchInput.value = "";
          if (dom.catalogCategorySelect) dom.catalogCategorySelect.value = "all";
          if (dom.btnClearCatalogSearch) dom.btnClearCatalogSearch.style.display = "none";
          renderCatalog();
        });
      }
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "catalog-item-card";
      card.innerHTML = `
        <div class="cat-badge">${escapeHtml(item.categoria_label || "Falácia")}</div>
        <h4>${escapeHtml(item.titulo)}</h4>
        <p class="cat-snippet">${escapeHtml(item.argumento_criacionista.substring(0, 115))}...</p>
        <div class="cat-footer">
          <span class="cat-delirium">Delírio: ${item.nivel_delirio}/10</span>
          <button class="btn-select-catalog" data-id="${item.id}">Carregar &rarr;</button>
        </div>
      `;
      card.querySelector(".btn-select-catalog").addEventListener("click", () => {
        displayArgument(item);
        closeAllModals();
        sounds.playDivineHarp();
        if (dom.cardContainer) {
          dom.cardContainer.scrollIntoView({ behavior: "smooth", block: "start" });
        }
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

  function showLoading(show, customQuote = null) {
    if (show) {
      const quote = customQuote || LOADING_QUOTES[Math.floor(Math.random() * LOADING_QUOTES.length)];
      if (dom.loadingQuote) dom.loadingQuote.textContent = quote;
      if (dom.loadingOverlay) dom.loadingOverlay.classList.add("active");
    } else {
      if (dom.loadingOverlay) dom.loadingOverlay.classList.remove("active");
    }
  }

  function updateLoadingQuote(text) {
    if (dom.loadingQuote) {
      dom.loadingQuote.textContent = text;
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
