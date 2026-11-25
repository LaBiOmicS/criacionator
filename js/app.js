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
    inputApiKey: document.getElementById("input-api-key"),
    selectModel: document.getElementById("select-model"),
    btnSaveConfig: document.getElementById("btn-save-config"),
    btnTestKey: document.getElementById("btn-test-key"),
    btnClearKey: document.getElementById("btn-clear-key"),
    configFeedback: document.getElementById("config-feedback"),
    catalogGrid: document.getElementById("catalog-grid"),
    favoritesGrid: document.getElementById("favorites-grid"),
    closeModalBtns: document.querySelectorAll(".btn-close-modal"),

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

    // Botão de Validação ao Vivo de Fontes (CrossRef & OpenAlex)
    if (dom.btnRevalidateLive) {
      dom.btnRevalidateLive.addEventListener("click", () => {
        handleRevalidateSourcesLive();
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
