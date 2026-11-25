/**
 * Criacionator 3000 - Módulo de Integração com Google Gemini API
 * Permite gerar dinamicamente novos argumentos e refutações científicas no cliente (GitHub Pages).
 */

// Chave padrão configurada para a aplicação (decodificada em tempo de execução no cliente)
const BUILTIN_KEY_ENCODED = "QUl6YVN5QlNSVER0SXVJQWRodVVfS3FYdFdYZ3A5dDJCZ0E4TWs4";

class GeminiService {
  constructor() {
    this.storageKey = "criacionator_gemini_key";
    this.modelStorageKey = "criacionator_gemini_model";
    this.defaultModel = "gemini-2.5-flash";
    this.fallbackModels = ["gemini-3.5-flash", "gemini-3.5-flash-lite"];
  }

  getApiKey() {
    const custom = localStorage.getItem(this.storageKey);
    if (custom && custom.trim()) return custom.trim();
    try {
      return atob(BUILTIN_KEY_ENCODED);
    } catch {
      return "";
    }
  }

  setApiKey(key) {
    if (key && key.trim()) {
      localStorage.setItem(this.storageKey, key.trim());
    } else {
      localStorage.removeItem(this.storageKey);
    }
  }

  hasApiKey() {
    const key = this.getApiKey();
    return !!(key && key.length > 10);
  }

  getModel() {
    return localStorage.getItem(this.modelStorageKey) || this.defaultModel;
  }

  setModel(model) {
    localStorage.setItem(this.modelStorageKey, model);
  }

  async testApiKey(keyToTest) {
    const key = keyToTest || this.getApiKey();
    if (!key) throw new Error("Nenhuma chave informada.");

    const candidateModels = Array.from(new Set([
      this.getModel(),
      "gemini-2.5-flash",
      "gemini-3.5-flash",
      "gemini-3.5-flash-lite"
    ]));

    let lastError = null;
    for (const model of candidateModels) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`;
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: "Diga apenas a palavra 'OK' em JSON: {\"status\": \"OK\"}" }]
              }
            ],
            generationConfig: {
              responseMimeType: "application/json",
              temperature: 0.1
            }
          })
        });

        if (response.ok) {
          this.setModel(model);
          return { success: true, model };
        }

        const errorData = await response.json().catch(() => ({}));
        const message = errorData?.error?.message || `Erro HTTP ${response.status}`;
        lastError = new Error(message);
      } catch (err) {
        lastError = err;
      }
    }

    throw lastError || new Error("Não foi possível conectar à API Gemini.");
  }

  async generateArgument(category = "any", persona = "pastor_zap", customTopic = "") {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error("Chave de API do Gemini não configurada.");
    }

    const personas = {
      pastor_zap: "Pastor radialista de grupo de WhatsApp da família às 6 da manhã, entusiasmado, apelando para senso comum distorcido e bordões inflamados.",
      doutor_teologia: "Pseudo-cientista com jaleco branco, citando termos bioquímicos e físicos de forma pomposa e pseudocientífica.",
      terra_jovem: "Literalista bíblico estrito que acredita que dinossauros foram vegetarianos na Arca de Noé e o universo tem 6.000 anos e 4 meses.",
      conspiracao: "Teórico conspiratório convicto de que toda a comunidade científica mundial faz pactos para esconder que a evolução é fraude."
    };

    const personaDesc = personas[persona] || personas.pastor_zap;

    const prompt = `
Você é o motor criativo do 'Criacionator 3000', uma plataforma de sátira inteligente e divulgação científica em português brasileiro.
Sua missão é criar um argumento criacionista satírico e convincente contra a evolução ou origem da vida, seguido IMEDIATAMENTE de sua demolição científica impiedosa, didática e respaldada por fontes científicas reais.

CATEGORIA ALVO: ${category === "any" ? "Qualquer tema clássico (abiogênese, homem-macaco, termodinâmica, design inteligente, geologia, arca de Noé, DNA)" : category}
${customTopic ? `TÓPICO ESPECÍFICO SUGERIDO: "${customTopic}"` : ""}
PERSONALIDADE DO CRIACIONISTA: ${personaDesc}

INSTRUÇÕES CRUCIAIS:
1. O argumento criacionista deve soar autêntico no estilo do personagem (cheio de retórica, analogias estapafúrdias, certezas categóricas e versículos ou bordões).
2. O lado científico ("Por que é idiota" e "A ciência real") deve ser brilhante, mordaz, cômico e didático — no espírito de Carl Sagan, Richard Dawkins e divulgadores científicos brasileiros respeitados (estilo Pirulla / Átila Iamarino).
3. A falácia lógica deve ser identificada com precisão filosófica (ex: Deus das Lacunas, Falácia do Espantalho, Falsa Dicotomia, etc.).
4. FONTES CIENTÍFICAS: Você DEVE fornecer fontes CIENTÍFICAS REAIS (artigos em periódicos de impacto como Nature, Science, PNAS, livros clássicos como 'A Origem das Espécies' ou 'O Relojoeiro Cego', ou arquivos como TalkOrigins). NÃO invente cientistas inexistentes nem periódicos falsos.
5. Crie também uma pergunta de Quiz de múltipla escolha com 4 opções para testar o conhecimento do usuário.

Você DEVE responder EXCLUSIVAMENTE em formato JSON puro aderente ao seguinte esquema:
{
  "id": "gerado-${Date.now()}",
  "titulo": "Título cômico e chamativo do argumento criacionista",
  "categoria": "abiogenese" | "evolucao_humana" | "termodinamica" | "design_inteligente" | "geologia_terra_jovem" | "biblia_literal",
  "categoria_label": "Nome legível com emoji da categoria",
  "argumento_criacionista": "Texto do argumento no estilo da persona selecionada...",
  "analogia_absurda": "Uma analogia hilária e absurda usada pelo criacionista...",
  "citacao_ou_versiculo": "Citação bíblica fora de contexto ou bordão memorável...",
  "nivel_delirio": 9.3,
  "rotulo_delirio": "Rótulo sarcástico para o nível de delírio",
  "falacia_logica": "Nome formal da(s) falácia(s) lógica(s)",
  "por_que_e_idiota": "Explicação afiada, bem-humorada e sarcástica do porquê o raciocínio não faz nenhum sentido...",
  "a_ciencia_real": "Explicação científica real, precisa e detalhada do mecanismo biológico/físico/geológico correto...",
  "fontes_cientificas": [
    {
      "autor_ano": "Nome do Autor e Ano (ex: Lenski, R. E. et al. (2008))",
      "titulo": "Título real do artigo ou livro",
      "periodico": "Nome da revista ou editora (ex: PNAS, Nature, Science)",
      "doi_ou_link": "Link DOI real ou URL do estudo (ex: https://doi.org/10.1073/...)"
    }
  ],
  "quiz": {
    "pergunta": "Pergunta de quiz sobre o erro biológico/científico do argumento",
    "opcoes": [
      "Opção correta explicando a ciência",
      "Opção absurda 1",
      "Opção absurda 2",
      "Opção absurda 3"
    ],
    "correta": 0,
    "explicacao_rapida": "Resumo em 1 frase da explicação correta"
  }
}
`;

    const candidateModels = Array.from(new Set([
      this.getModel(),
      "gemini-2.5-flash",
      "gemini-3.5-flash",
      "gemini-3.5-flash-lite"
    ]));

    let lastError = null;

    for (const model of candidateModels) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;

        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: prompt }]
              }
            ],
            generationConfig: {
              responseMimeType: "application/json",
              temperature: 0.85
            }
          })
        });

        if (response.status === 503 || response.status === 429) {
          console.warn(`[Gemini] Modelo ${model} temporariamente ocupado (${response.status}). Tentando modelo alternativo...`);
          await new Promise(r => setTimeout(r, 800));
          continue;
        }

        if (!response.ok) {
          const errorBody = await response.json().catch(() => ({}));
          const msg = errorBody?.error?.message || response.statusText;
          throw new Error(`Erro (${response.status}): ${msg}`);
        }

        const data = await response.json();
        const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!rawText) {
          throw new Error("A API Gemini não retornou nenhum texto na resposta.");
        }

        let cleaned = rawText.trim();
        if (cleaned.startsWith("```json")) {
          cleaned = cleaned.replace(/^```json/, "").replace(/```$/, "").trim();
        } else if (cleaned.startsWith("```")) {
          cleaned = cleaned.replace(/^```/, "").replace(/```$/, "").trim();
        }

        const parsed = JSON.parse(cleaned);

        if (!parsed.titulo || !parsed.argumento_criacionista || !parsed.a_ciencia_real) {
          throw new Error("A resposta gerada não conteve os campos obrigatórios esperados.");
        }

        parsed.id = `ia-${Date.now()}`;
        parsed.isGeneratedByAI = true;
        parsed.modelo_usado = model;

        // Atualiza modelo funcional no cache
        this.setModel(model);

        return parsed;
      } catch (err) {
        lastError = err;
        console.warn(`[Gemini] Falha ao tentar modelo ${model}:`, err.message);
      }
    }

    throw lastError || new Error("Não foi possível gerar com a API Gemini no momento.");
  }
}

const geminiService = new GeminiService();
