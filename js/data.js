/**
 * Criacionator 3000 - Base de Conhecimento Clássica
 * Coleção curada de falácias criacionistas clássicas e suas refutações científicas rigorosas.
 */

const ARGUMENTOS_CLASSICOS = [
  {
    id: "homem-macaco",
    titulo: "Se o homem veio do macaco, por que ainda existem macacos?",
    categoria: "evolucao_humana",
    categoria_label: "🐒 Homem-Macaco & Ancestralidade",
    argumento_criacionista: "Se a evolução é real e a humanidade evoluiu do macaco, por que os chimpanzés dos zoológicos ainda não viraram gente? Se uma espécie se transforma na outra, os macacos deveriam ter sido extintos ou estarem todos usando terno e pagando boleto agora!",
    analogia_absurda: "É como se os macacos tivessem perdido o ônibus da evolução e ficado para trás na rodoviária biológica.",
    citacao_ou_versiculo: "Gênesis 1:26 — 'Façamos o homem à nossa imagem, conforme a nossa semelhança.' (Claramente Adão não tinha rabo preênsil!)",
    nivel_delirio: 8.5,
    rotulo_delirio: "Tiozão do churrasco após o terceiro copo",
    falacia_logica: "Falácia do Espantalho + Má compreensão de Cladogênese vs. Anagênese",
    por_que_e_idiota: "Porque a evolução biológica não é uma escada linear onde Pokémon evolui para a próxima forma consumindo uma pedra mágica. A evolução é uma árvore ramificada (cladogênese). Dizer isso é o equivalente biológico de perguntar: 'Se os brasileiros vieram dos portugueses, por que ainda existem portugueses em Lisboa?'",
    a_ciencia_real: "Os seres humanos NÃO evoluíram de nenhuma espécie de macaco moderno vivente (como chimpanzés, bonobos ou gorilas). Em vez disso, humanos e chimpanzés compartilham um ancestral comum hominídeo extinto que viveu entre 6 e 8 milhões de anos atrás na África. Essa linhagem ancestral se dividiu em vários ramos: um levou aos chimpanzés e bonobos modernos, e outro ramo (os hominínios) gerou os gêneros Ardipithecus, Australopithecus e Homo, dos quais apenas o Homo sapiens sobreviveu até hoje.",
    fontes_cientificas: [
      {
        autor_ano: "Patterson, N. et al. (2006)",
        titulo: "Genetic analysis of chimpanzee and human speciation",
        periodico: "Nature, 441(7097), 1103–1108",
        doi_ou_link: "https://doi.org/10.1038/nature04789"
      },
      {
        autor_ano: "Futuyma, D. J. & Kirkpatrick, M. (2017)",
        titulo: "Evolution (4th Edition) - Chapter 17: Human Evolution",
        periodico: "Sinauer Associates / Oxford University Press",
        doi_ou_link: "https://global.oup.com/ushe/product/evolution-9781605356051"
      },
      {
        autor_ano: "TalkOrigins Archive",
        titulo: "CB910: If humans evolved from apes, why are there still apes?",
        periodico: "An Index to Creationist Claims",
        doi_ou_link: "http://www.talkorigins.org/indexcc/CB/CB910.html"
      }
    ],
    quiz: {
      pergunta: "Por que a pergunta 'Se viemos do macaco, por que ainda existem macacos?' é um absurdo biológico?",
      opcoes: [
        "Porque humanos e chimpanzés são primos que dividem um ancestral comum extinto, não pai e filho.",
        "Porque os macacos atuais na verdade vieram dos humanos que regrediram.",
        "Porque a evolução só acontece no fundo dos oceanos.",
        "Porque Charles Darwin esqueceu de registrar os chimpanzés na sua árvore."
      ],
      correta: 0,
      explicacao_rapida: "A evolução é ramificada (como primos em uma família), não linear!"
    }
  },
  {
    id: "segunda-lei-termodinamica",
    titulo: "A 2ª Lei da Termodinâmica impede a evolução porque tudo tende à desordem!",
    categoria: "termodinamica",
    categoria_label: "🌡️ Termodinâmica & Física Freestyle",
    argumento_criacionista: "A Segunda Lei da Termodinâmica diz que o universo caminha inexoravelmente da ordem para o caos e o aumento da entropia. Como então organismos unicelulares primitivos puderam se organizar espontaneamente em seres complexos com cérebro, olhos e coração sem violar a física fundamental estabelecida pelo Criador?",
    analogia_absurda: "Deixar um quarto bagunçado esperando que com o tempo ele se arrume sozinho.",
    citacao_ou_versiculo: "Salmos 102:26 — 'Todos eles como um vestido envelhecerão; como roupa os mudarás, e ficarão mudados.'",
    nivel_delirio: 9.2,
    rotulo_delirio: "Físico Quântico de Igreja de Garagem",
    falacia_logica: "Falácia do Espantalho Termodinâmico + Equívoco de Sistema Aberto vs. Isolado",
    por_que_e_idiota: "Os criacionistas convenientemente esquecem que a Segunda Lei da Termodinâmica se aplica estritamente a SISTEMAS ISOLADOS (que não trocam matéria nem energia com o exterior). A Terra NÃO é um sistema isolado: temos um reator nuclear de fusão gigantesco no céu chamado SOL despejando 174 petawatts contínuos de energia limpa na superfície todos os dias. Se a 2ª Lei proibisse o aumento local de ordem, um óvulo fecundado nunca viraria um bebê, sementes nunca virariam sequoias e a água líquida no seu congelador violaria as leis do universo ao formar cristais de gelo perfeitamente simétricos!",
    a_ciencia_real: "Em sistemas termodinamicamente abertos fora do equilíbrio, fluxos constantes de energia externa permitem a diminuição local da entropia e a auto-organização de estruturas complexas (estruturas dissipativas), enquanto a entropia global do universo (incluindo o Sol) continua aumentando, respeitando rigorosamente a 2ª Lei da Termodinâmica. A teoria das estruturas dissipativas em sistemas abertos rendeu a Ilya Prigogine o Prêmio Nobel de Química em 1977.",
    fontes_cientificas: [
      {
        autor_ano: "Styer, D. F. (2008)",
        titulo: "Entropy and evolution",
        periodico: "American Journal of Physics, 76(11), 1031–1033",
        doi_ou_link: "https://doi.org/10.1119/1.2973046"
      },
      {
        autor_ano: "Prigogine, I. (1978)",
        titulo: "Time, Structure, and Fluctuations (Nobel Lecture)",
        periodico: "Science, 201(4358), 777–785",
        doi_ou_link: "https://doi.org/10.1126/science.201.4358.777"
      },
      {
        autor_ano: "TalkOrigins Archive",
        titulo: "CF001: 2nd law of thermodynamics and evolution",
        periodico: "An Index to Creationist Claims",
        doi_ou_link: "http://www.talkorigins.org/indexcc/CF/CF001.html"
      }
    ],
    quiz: {
      pergunta: "Qual é o erro fatal do argumento criacionista sobre a 2ª Lei da Termodinâmica?",
      opcoes: [
        "A Terra é um sistema aberto que recebe constantemente energia do Sol.",
        "A 2ª Lei da Termodinâmica foi revogada por Albert Einstein em 1905.",
        "A entropia na verdade significa amor divino em grego arcaico.",
        "Organismos vivos não são feitos de átomos e por isso não obedecem à física."
      ],
      correta: 0,
      explicacao_rapida: "A Terra é um sistema aberto banhado por energia solar, permitindo ordem biológica local!"
    }
  },
  {
    id: "tornado-ferro-velho",
    titulo: "A evolução é como um tornado num ferro-velho montando um Boeing 747!",
    categoria: "abiogenese",
    categoria_label: "🧬 Abiogênese & Origem da Vida",
    argumento_criacionista: "A probabilidade de uma célula viva se formar por processos naturais aleatórios é matematicamente idêntica à probabilidade de um furacão passar por um ferro-velho e, por puro acaso, deixar para trás um Boeing 747 novinho em folha, abastecido e pronto para decolar! (Citação clássica do astrofísico Fred Hoyle).",
    analogia_absurda: "Chacoalhar uma caixa com peças soltas de relógio e esperar sair um Rolex suíço funcionando.",
    citacao_ou_versiculo: "Provérbio do WhatsApp: 'Quem não vê a mão do Projetista nisso é cego espiritual!'",
    nivel_delirio: 9.0,
    rotulo_delirio: "Engenheiro de Avião de Papel",
    falacia_logica: "Falsa Equivalência Probabilística + Falácia do Acaso Cego em Passo Único",
    por_que_e_idiota: "A evolução biológica e a seleção natural NÃO são mero acaso! A mutação genética introduz variação aleatória, mas a SELEÇÃO NATURAL é um mecanismo cumulativo rigorosamente NÃO aleatório que filtra e preserva vantagens adaptativas a cada geração ao longo de bilhões de anos. A analogia do tornado comete o erro grosseiro de assumir que a vida precisaria surgir pronta de uma só vez em um único instante, em vez de passar por incontáveis etapas químicas e protobióticas cumulativas ao longo de 500 milhões de anos.",
    a_ciencia_real: "Como Richard Dawkins demonstrou em 'O Relojoeiro Cego', a seleção cumulativa transforma probabilidades infinitesimais em certezas estatísticas. Se você tentar digitar uma frase de Shakespeare por sorteio aleatório de uma só vez, levará bilhões de anos; mas se congelar as letras corretas a cada tentativa e recombinar as restantes, a frase é montada em minutos. Além disso, a abiogênese começa com moléculas orgânicas simples que se autorreplicam (como no Mundo de RNA), catalisadas por minerais e fontes hidrotermais, não com um Boeing 747 biológico pronto.",
    fontes_cientificas: [
      {
        autor_ano: "Dawkins, R. (1986)",
        titulo: "The Blind Watchmaker: Why the Evidence of Evolution Reveals a Universe without Design",
        periodico: "W. W. Norton & Company",
        doi_ou_link: "https://www.worldcat.org/title/blind-watchmaker/oclc/13498877"
      },
      {
        autor_ano: "Lenski, R. E., Ofria, C., Pennock, R. T., & Adami, C. (2003)",
        titulo: "The evolutionary origin of complex features",
        periodico: "Nature, 423(6936), 139–144",
        doi_ou_link: "https://doi.org/10.1038/nature01568"
      },
      {
        autor_ano: "Joyce, G. F. (2002)",
        titulo: "The antiquity of RNA-based evolution",
        periodico: "Nature, 418(6894), 214–221",
        doi_ou_link: "https://doi.org/10.1038/418214a"
      }
    ],
    quiz: {
      pergunta: "Por que a analogia do 'Boeing 747 no ferro-velho' de Fred Hoyle é cientificamente furada?",
      opcoes: [
        "Porque a seleção natural é um processo cumulativo não-aleatório de bilhões de anos, não um evento único ao acaso.",
        "Porque aviões Boeing só começaram a existir no século XX.",
        "Porque ferros-velhos não têm peças de alumínio suficientes.",
        "Porque tornados não têm força aerodinâmica para levantar asas."
      ],
      correta: 0,
      explicacao_rapida: "A seleção natural é cumulativa passo a passo, nunca um evento único aleatório!"
    }
  },
  {
    id: "flagelo-bacteriano",
    titulo: "Complexidade Irredutível: O Flagelo Bacteriano é um motor de popa perfeito!",
    categoria: "design_inteligente",
    categoria_label: "⚙️ Design Inteligente & Complexidade",
    argumento_criacionista: "O flagelo bacteriano é um micromotor rotativo biológico com estator, rotor, eixo de transmissão e hélice que gira a 100.000 RPM. Se você remover qualquer uma das suas 40 partes proteicas essenciais, o motor para de funcionar completamente. Portanto, ele não poderia ter evoluído gradualmente, pois partes intermediárias não teriam utilidade!",
    analogia_absurda: "Uma ratoeira: se você tirar a mola, a trava ou a base de madeira, ela não pega rato nenhum.",
    citacao_ou_versiculo: "Michael Behe (1996) em 'A Caixa Preta de Darwin' — A bíblia do Design Inteligente.",
    nivel_delirio: 8.8,
    rotulo_delirio: "Bioquímico com Diploma de Retórica",
    falacia_logica: "Argumento da Incredulidade Pessoal + Falácia da Falsa Dicotomia (Exaptação ignorada)",
    por_que_e_idiota: "A 'Complexidade Irredutível' é o clássico 'se eu não sei como evoluiu, logo foi mágica'. O argumento da ratoeira foi destruído tanto na biologia quanto na Justiça americana (no histórico julgamento de Dover em 2005). Kenneth Miller demonstrou em tribunal que se você tirar peças de uma ratoeira, ela ainda serve perfeitamente como prendedor de gravata, chaveiro ou clipe de papel! Peças biológicas não evoluem apenas para o propósito final; elas mudam de função ao longo do caminho.",
    a_ciencia_real: "Bactérias patogênicas como a Yersinia pestis (causadora da Peste Negra) possuem uma nanomáquina chamada Sistema de Secreção Tipo III (T3SS), que funciona como uma seringa hipodérmica para injetar toxinas em células hospedeiras. O T3SS é composto por cerca de 10 proteínas que são HOMÓLOGAS e idênticas à base do flagelo bacteriano! Ou seja: o subsistema funciona perfeitamente sem o motor e sem a hélice, desempenhando outra função vital. O flagelo evoluiu por coopção e exaptação de peças pré-existentes de secreção proteica.",
    fontes_cientificas: [
      {
        autor_ano: "Pallen, M. J. & Matzke, N. J. (2006)",
        titulo: "From The Origin of Species to the origin of bacterial flagella",
        periodico: "Nature Reviews Microbiology, 4(10), 784–790",
        doi_ou_link: "https://doi.org/10.1038/nrmicro1493"
      },
      {
        autor_ano: "Miller, K. R. (2004)",
        titulo: "The Flagellum Unspun: The Collapse of 'Irreducible Complexity'",
        periodico: "Debating Design: From Darwin to DNA, Cambridge University Press",
        doi_ou_link: "https://www.millerandlevine.com/km/evol/design2/article.html"
      },
      {
        autor_ano: "Sentença Judicial (2005)",
        titulo: "Kitzmiller v. Dover Area School District (Case 04cv2688)",
        periodico: "US District Court for the Middle District of Pennsylvania",
        doi_ou_link: "https://www.pamd.uscourts.gov/kitzmiller-v-dover-area-school-district"
      }
    ],
    quiz: {
      pergunta: "Qual estrutura biológica comprova que as peças do flagelo bacteriano tinham funções anteriores?",
      opcoes: [
        "O Sistema de Secreção Tipo III (T3SS), que usa peças homólogas como seringa molecular.",
        "O aparelho de Golgi das células vegetais.",
        "A carapaça externa dos besouros bombardeiros.",
        "As guelras dos tubarões pré-cambrianos."
      ],
      correta: 0,
      explicacao_rapida: "O T3SS usa as mesmas proteínas da base do flagelo como seringa molecular!"
    }
  },
  {
    id: "banana-kirk-cameron",
    titulo: "A Banana é a prova irrefutável do Design Inteligente feita para a mão humana!",
    categoria: "design_inteligente",
    categoria_label: "⚙️ Design Inteligente & Complexidade",
    argumento_criacionista: "Veja a banana: ela tem o formato perfeito que encaixa na mão humana, vem com uma embalagem natural biodegradável que não vaza, possui abas na ponta para puxar como um zíper, muda de cor de verde para amarelo quando está pronta para comer e aponta para a boca! Claramente Deus desenhou a banana sob medida para o homem!",
    analogia_absurda: "O famoso vídeo de Ray Comfort e Kirk Cameron segurando uma banana como 'o pesadelo do ateu'.",
    citacao_ou_versiculo: "Ray Comfort (The Way of the Master, 2003): 'Notice how it gracefully points towards the mouth!'",
    nivel_delirio: 9.9,
    rotulo_delirio: "Ray Comfort descascando a própria dignidade",
    falacia_logica: "Confusão entre Seleção Artificial Humana e Criação Divina Natural",
    por_que_e_idiota: "Essa é provavelmente a maior gafe da história do criacionismo televisivo. A banana Cavendish amarela, doce e sem sementes que você compra no supermercado NÃO EXISTE NA NATUREZA! Ela é o resultado de milhares de anos de SELEÇÃO ARTIFICIAL e melhoramento genético conduzido por agricultores humanos. A banana selvagem ancestral (Musa acuminata selvagem) é pequenina, redonda, amarga e entupida de sementes pretas duras como pedras que quebram dentes humanos se você morder!",
    a_ciencia_real: "A domesticação da banana começou há cerca de 7.000 anos na Nova Guiné e sudeste da Ásia. Agricultores primitivos selecionaram mutações raras partenocárpicas (que geram frutos carnosos sem sementes viáveis) e criaram linhagens triploides estéreis propagadas exclusivamente por mudas e clones. O que Kirk Cameron estava louvando não era o design divino, mas o trabalho exaustivo de biotecnologia agrícola humana!",
    fontes_cientificas: [
      {
        autor_ano: "Perrier, X. et al. (2011)",
        titulo: "Multidisciplinary perspectives on banana (Musa spp.) domestication",
        periodico: "PNAS, 108(28), 11311–11318",
        doi_ou_link: "https://doi.org/10.1073/pnas.1102001108"
      },
      {
        autor_ano: "Heslop-Harrison, J. S. & Schwarzacher, T. (2007)",
        titulo: "Domestication, genomics and the future for banana",
        periodico: "Annals of Botany, 100(5), 1073–1084",
        doi_ou_link: "https://doi.org/10.1093/aob/mcm191"
      }
    ],
    quiz: {
      pergunta: "Como é a banana selvagem ancestral original antes da domesticação humana?",
      opcoes: [
        "Pequena, dura e cheia de dezenas de sementes pretas duras que quebram dentes.",
        "Já vinha com código de barras e selo da feira livre.",
        "Era exatamente igual à do supermercado, só que azul.",
        "Crescia diretamente embaixo d'água em recifes de coral."
      ],
      correta: 0,
      explicacao_rapida: "A banana selvagem é minúscula e cheia de sementes duras; foi domesticada por humanos!"
    }
  },
  {
    id: "evolucao-do-olho",
    titulo: "Metade de um olho não serve para nada: como o olho humano evoluiu?",
    categoria: "design_inteligente",
    categoria_label: "⚙️ Design Inteligente & Complexidade",
    argumento_criacionista: "O olho humano possui cristalino, córnea, íris, retina com 120 milhões de bastonetes e nervo óptico. Se faltar a córnea ou a retina, você não enxerga nada! Charles Darwin confessou que pensar no olho lhe dava calafrios. Como um órgão tão refinado poderia ter evoluído por pequenos passos graduais se 50% de um olho é inútil?",
    analogia_absurda: "Comprar metade de uma lente de câmera fotográfica e esperar tirar fotos perfeitas.",
    citacao_ou_versiculo: "Provérbios 20:12 — 'O ouvido que ouve, e o olho que vê, o Senhor os fez a ambos.'",
    nivel_delirio: 8.7,
    rotulo_delirio: "Oftalmologista com Miopia Epistemológica",
    falacia_logica: "Falsa Dicotomia + Citação Descontextualizada de Darwin (Quote Mining)",
    por_que_e_idiota: "Primeiro: Darwin mencionou o olho apenas para, nas páginas seguintes de 'A Origem das Espécies', explicar detalhadamente como a evolução do olho é totalmente plausível! Segundo: 5% de um olho não é inútil — pergunte a uma presa se detectar uma sombra se aproximando não salva a vida dela contra um predador! Na zoologia atual, temos criaturas vivas com TODOS os estágios intermediários imagináveis. E o mais irônico: o olho dos vertebrados tem um 'design' péssimo, com os fotorreceptores virados ao contrário e a fiação na frente, criando um ponto cego que o polvo não tem!",
    a_ciencia_real: "Em 1994, os biólogos Dan-Eric Nilsson e Susanne Pelger calcularam através de modelos computacionais de física óptica que um olho complexo com cristalino e foco pode evoluir a partir de uma simples mancha pigmentar plana em menos de 400.000 gerações. Na natureza viva hoje temos: manchas de fotorreceptores em Euglena; cálices fóticos côncavos em lapas (Patella); olho de câmara escura pinhole sem lente no Nautilus; e olhos complexos em cefalópodes e vertebrados. O olho de polvos e lulas é evolutivamente superior ao humano porque não possui ponto cego!",
    fontes_cientificas: [
      {
        autor_ano: "Nilsson, D.-E. & Pelger, S. (1994)",
        titulo: "A pessimistic estimate of the time required for an eye to evolve",
        periodico: "Proceedings of the Royal Society of London. Series B, 256(1345), 53–58",
        doi_ou_link: "https://doi.org/10.1098/rspb.1994.0048"
      },
      {
        autor_ano: "Lamb, T. D., Collin, S. P., & Pugh, E. N. (2007)",
        titulo: "Evolution of the vertebrate eye: opsins, photoreceptors, retina and lens",
        periodico: "Nature Reviews Neuroscience, 8(12), 960–976",
        doi_ou_link: "https://doi.org/10.1038/nrn2283"
      }
    ],
    quiz: {
      pergunta: "Por que o olho dos polvos e lulas é considerado melhor desenhado que o olho humano?",
      opcoes: [
        "Porque a fiação nervosa fica atrás dos fotorreceptores, eliminando o ponto cego.",
        "Porque eles conseguem enxergar no escuro através de raios laser biológicos.",
        "Porque os polvos usam óculos de grau feitos de madrepérola.",
        "Porque os cefalópodes têm três cérebros focados exclusivamente na córnea."
      ],
      correta: 0,
      explicacao_rapida: "Os polvos não têm o ponto cego bizarro que nós vertebrados temos!"
    }
  },
  {
    id: "terra-jovem-6000-anos",
    titulo: "A Terra tem apenas 6.000 anos calculados pelas genealogias bíblicas!",
    categoria: "geologia_terra_jovem",
    categoria_label: "⏳ Geologia & Terra Jovem (6.000 anos)",
    argumento_criacionista: "Somando as idades dos patriarcas de Gênesis de Adão até Cristo (cálculo famoso do Arcebispo James Ussher em 1650), a Criação ocorreu no entardecer de 22 de outubro de 4004 a.C. As camadas geológicas, desfiladeiros como o Grand Canyon e os fósseis foram depositados rapidamente durante o Dilúvio Global de Noé há 4.400 anos, não em milhões de anos!",
    analogia_absurda: "O Grand Canyon foi escavado pela água escoando da banheira de Noé após o dilúvio.",
    citacao_ou_versiculo: "Arcebispo Ussher (1650): 'O mundo foi criado no início da noite do dia 22 de outubro de 4004 a.C.'",
    nivel_delirio: 9.6,
    rotulo_delirio: "Historiador que mede o tempo com ampulheta de farinha",
    falacia_logica: "Apelo à Autoridade Religiosa + Rejeição Sistemática de Evidências Físicas",
    por_que_e_idiota: "Para a Terra ter 6.000 anos, TODA a física atômica, mecânica quântica, geologia estratigráfica, astrofísica estelar, dendrocronologia (anéis de árvores com mais de 12.000 anos) e testemunhos de gelo na Antártida (que contam mais de 800.000 anos de camadas anuais de neve) teriam que estar erradas por um fator de UM MILHÃO! Além disso, a galáxia de Andrômeda está a 2,5 milhões de anos-luz da Terra. Se o universo tivesse 6.000 anos, os fótons de luz de Andrômeda estariam a 2.494.000 anos de distância e o céu noturno seria quase completamente escuro!",
    a_ciencia_real: "A Terra tem aproximadamente 4,54 bilhões de anos (com margem de erro inferior a 1%). Esta idade foi determinada por datação radiométrica de isótopos de Urânio-Chumbo em zircões primitivos de Jack Hills na Austrália (4,4 bilhões de anos) e meteoritos condritos que se formaram junto com a nebulosa solar primordial. A taxa de decaimento nuclear de isótopos instáveis é uma constante invariante da física fundamental.",
    fontes_cientificas: [
      {
        autor_ano: "Dalrymple, G. B. (2001)",
        titulo: "The age of the Earth in the twentieth century: a problem (mostly) solved",
        periodico: "Geological Society, London, Special Publications, 190(1), 205–221",
        doi_ou_link: "https://doi.org/10.1144/GSL.SP.2001.190.01.14"
      },
      {
        autor_ano: "Wilde, S. A. et al. (2001)",
        titulo: "Evidence from detrital zircons for the existence of continental crust and oceans on the Earth 4.4 Gyr ago",
        periodico: "Nature, 409(6817), 175–178",
        doi_ou_link: "https://doi.org/10.1038/35051550"
      },
      {
        autor_ano: "EPICA Community Members (2004)",
        titulo: "Eight glacial cycles from an Antarctic ice core",
        periodico: "Nature, 429(6992), 623–628",
        doi_ou_link: "https://doi.org/10.1038/nature02599"
      }
    ],
    quiz: {
      pergunta: "Quantos anos de história climática contínua foram medidos nos testemunhos de gelo da Antártida (EPICA)?",
      opcoes: [
        "Mais de 800.000 anos em camadas anuais contínuas de gelo.",
        "Exatamente 4.400 anos contados a partir da Arca de Noé.",
        "Apenas 60 anos, desde a invenção do termômetro digital.",
        "Nenhum, porque o gelo derrete a cada duas semanas no Polo Sul."
      ],
      correta: 0,
      explicacao_rapida: "Os cilindros de gelo da Antártida registram mais de 800.000 anos de camadas anuais ininterruptas!"
    }
  },
  {
    id: "fosseis-transicao-elos-perdidos",
    titulo: "Não existem fósseis de transição: onde estão os 'Elos Perdidos'?",
    categoria: "geologia_terra_jovem",
    categoria_label: "⏳ Geologia & Terra Jovem (6.000 anos)",
    argumento_criacionista: "Se os répteis viraram aves e os peixes viraram animais terrestres, onde estão as criaturas meio-crocodilo meio-pato (o 'Crocoduck')? O registro fóssil só mostra espécies prontas e acabadas surgindo do nada! Os cientistas vivem caçando os famosos elos perdidos e nunca encontram nada além de fragmentos duvidosos!",
    analogia_absurda: "O famoso 'Crocoduck' (Pato com cabeça de crocodilo) inventado por Kirk Cameron.",
    citacao_ou_versiculo: "Bordão Criacionista: 'Fóssil de transição é lenda urbana de paleontólogo ateu!'",
    nivel_delirio: 8.9,
    rotulo_delirio: "Paleontólogo de Caça-Fantasmas",
    falacia_logica: "Meta Móvel (Moving the Goalposts) + Espantalho Quimérico",
    por_que_e_idiota: "Toda vez que os paleontólogos encontram um fóssil de transição entre o animal A e o animal B, os criacionistas dizem: 'Ah, agora vocês têm DOIS elos perdidos novos: um entre A e o fóssil, e outro entre o fóssil e B!' Eles exigem quimeras absurdas como o 'Crocoduck', demonstrando desconhecimento total de como a evolução funciona. A evolução não costura metade de um animal moderno na metade de outro; ela modifica linhagens anatômicas graduais.",
    a_ciencia_real: "O registro fóssil possui milhares de formas transicionais espetaculares documentadas na literatura científica: o Tiktaalik roseae (transição peixe-tetrápode com nadadeiras articuladas e pescoço funcional); o Archaeopteryx e dinossauros emplumados como Microraptor e Anchiornis (transição dinossauros terópodes para aves); a série completa da evolução dos cetáceos (Pakicetus -> Ambulocetus -> Rodhocetus -> Basilosaurus -> baleias modernas); e a série hominínea (Sahelanthropus, Ardipithecus, Australopithecus afarensis, Homo erectus).",
    fontes_cientificas: [
      {
        autor_ano: "Daeschler, E. B., Shubin, N. H., & Jenkins, F. A. (2006)",
        titulo: "A Devonian tetrapod-like fish and the evolution of the tetrapod body plan",
        periodico: "Nature, 440(7085), 757–763",
        doi_ou_link: "https://doi.org/10.1038/nature04639"
      },
      {
        autor_ano: "Thewissen, J. G. M. et al. (2001)",
        titulo: "Skeletons of terrestrial cetaceans and the relationship of whales to artiodactyls",
        periodico: "Nature, 413(6853), 277–281",
        doi_ou_link: "https://doi.org/10.1038/35095005"
      },
      {
        autor_ano: "Prothero, D. R. (2017)",
        titulo: "Evolution: What the Fossils Say and Why It Matters (2nd Edition)",
        periodico: "Columbia University Press",
        doi_ou_link: "https://cup.columbia.edu/book/evolution/9780231180641"
      }
    ],
    quiz: {
      pergunta: "Qual fóssil descoberto em 2004 no Ártico canadense preencheu a transição exata entre peixes e anfíbios tetrápodes?",
      opcoes: [
        "Tiktaalik roseae",
        "Crocoduck bíblico",
        "Plesiossauro de plástico",
        "Mula sem cabeça fóssil"
      ],
      correta: 0,
      explicacao_rapida: "Tiktaalik roseae tinha guelras e escamas de peixe, mas costelas, pescoço e membros com pulsos de tetrápode!"
    }
  },
  {
    id: "carbono-14-foca-viva",
    titulo: "A datação por Carbono-14 é farsa porque datou uma foca viva como tendo 1.000 anos!",
    categoria: "geologia_terra_jovem",
    categoria_label: "⏳ Geologia & Terra Jovem (6.000 anos)",
    argumento_criacionista: "A ciência diz que os métodos de datação radiométrica são precisos, mas testes de Carbono-14 feitos em uma foca recém-morta na Antártida deram que ela tinha morrido há 1.300 anos! Se eles não conseguem datar nem uma foca moderna direito, como querem que a gente acredite que os ossos de dinossauros têm 65 milhões de anos?",
    analogia_absurda: "Usar uma fita métrica estragada e achar que o quarto mede três quilômetros.",
    citacao_ou_versiculo: "Artigo de panfleto criacionista: 'A ciência que não sabe a idade de uma foca quer julgar Adão!'",
    nivel_delirio: 8.4,
    rotulo_delirio: "Químico que confunde termômetro com balança",
    falacia_logica: "Espantalho Metodológico + Ignorar Limites e Pressupostos de Calibração",
    por_que_e_idiota: "Existem dois erros monumentais aqui. Primeiro: o Carbono-14 NÃO É USADO PARA DINOSSAUROS! A meia-vida do C-14 é de 5.730 anos, tornando-o inútil para qualquer coisa com mais de 50.000 anos. Para fósseis de milhões de anos, usam-se outros métodos radiométricos (Potássio-Argônio, Urânio-Chumbo, Argônio-Argônio). Segundo: o caso da foca é o famoso 'Efeito Reservatório Marinho', um fenômeno físico perfeitamente compreendido e calibrado pelos cientistas desde os anos 1950!",
    a_ciencia_real: "Organismos marinhos na Antártida se alimentam de animais que consomem carbono orgânico dissolvido vindo de correntes oceânicas profundas ressurgentes que ficaram séculos sem contato com a atmosfera, com baixíssima proporção de C-14 fresco. Qualquer laboratório sério aplica curvas de calibração marinha (Marine20). Nenhum geólogo no planeta usa Carbono-14 para datar dinossauros do Cretáceo; as cinzas vulcânicas entre as quais os fósseis jazem são datadas por decaimento de Urânio-Chumbo em cristais de zircão.",
    fontes_cientificas: [
      {
        autor_ano: "Heier-Nielsen, S. et al. (1995)",
        titulo: "The marine reservoir effect in radiocarbon dating",
        periodico: "Radiocarbon, 37(2), 263–273",
        doi_ou_link: "https://doi.org/10.1017/S003382220003072X"
      },
      {
        autor_ano: "Reimer, P. J. et al. (2020)",
        titulo: "The IntCal20 Northern Hemisphere Radiocarbon Age Calibration Curve",
        periodico: "Radiocarbon, 62(4), 725–757",
        doi_ou_link: "https://doi.org/10.1017/RDC.2020.41"
      }
    ],
    quiz: {
      pergunta: "Por que os cientistas NÃO usam Carbono-14 para datar ossos de dinossauros?",
      opcoes: [
        "Porque a meia-vida do C-14 é de apenas 5.730 anos, esgotando-se após ~50.000 anos.",
        "Porque o Carbono-14 só existe em animais que bebiam leite pasteurizado.",
        "Porque os dinossauros eram imunes à radiação atômica.",
        "Porque a Igreja proibiu o uso do elemento 14 na tabela periódica."
      ],
      correta: 0,
      explicacao_rapida: "O C-14 só alcança cerca de 50 mil anos; para dinossauros de 66 milhões de anos usam-se Urânio-Chumbo ou Argônio-Argônio!"
    }
  },
  {
    id: "especies-laboratorio-lenski",
    titulo: "Ninguém nunca viu uma espécie se transformar em outra no laboratório!",
    categoria: "abiogenese",
    categoria_label: "🧬 Abiogênese & Origem da Vida",
    argumento_criacionista: "Se a macroevolução é uma realidade científica comprovada pelo método empírico, por que nenhum biólogo em mais de 150 anos jamais viu uma mosca de frutas (Drosophila) virar uma borboleta ou um cachorro parir um gato dentro de um laboratório?",
    analogia_absurda: "Plantar milho e ficar indignado porque não colheu abacaxi na semana seguinte.",
    citacao_ou_versiculo: "Ken Ham (Creation Museum): 'Were you there? Did you see it with your own eyes?'",
    nivel_delirio: 8.6,
    rotulo_delirio: "Inspetor de Balcão de Especiação Instantânea",
    falacia_logica: "Falácia da Mudança Categórica Impossível (Cachorro parir gato violaria a própria evolução!)",
    por_que_e_idiota: "Se um cachorro parisse um gato em laboratório, a Teoria da Evolução estaria TOTALMENTE REFUTADA! A evolução prediz que descendentes herdam a filogenia de seus ancestrais (a 'Lei da Monofilia' inquebrável). Além disso, nós já vimos especiação e surgimento de inovações metabólicas inéditas acontecendo diante dos nossos olhos em experimentos controlados de longa duração com microrganismos e plantas!",
    a_ciencia_real: "O Long-Term Evolution Experiment (LTEE), liderado por Richard Lenski na Universidade Estadual de Michigan, monitora 12 populações idênticas da bactéria Escherichia coli desde 1988, ultrapassando mais de 75.000 gerações contínuas! Por volta da geração 31.500, uma das populações evoluiu espontaneamente a capacidade inteiramente nova de metabolizar citrato em ambiente aeróbico (fenótipo Cit+), uma inovação complexa que exigiu múltiplas mutações prévias e duplicação gênica regulatória. Em animais, a formação de novas espécies de tentilhões de Galápagos (Big Bird lineage) foi documentada em tempo real na natureza.",
    fontes_cientificas: [
      {
        autor_ano: "Blount, Z. D., Borland, C. Z., & Lenski, R. E. (2008)",
        titulo: "Historical contingency and the evolution of a key innovation in an experimental population of Escherichia coli",
        periodico: "PNAS, 105(23), 7899–7906",
        doi_ou_link: "https://doi.org/10.1073/pnas.0803151105"
      },
      {
        autor_ano: "Lamichhaney, S. et al. (2018)",
        titulo: "Rapid hybrid speciation in Darwin's finches",
        periodico: "Science, 359(6372), 224–228",
        doi_ou_link: "https://doi.org/10.1126/science.aao4593"
      }
    ],
    quiz: {
      pergunta: "Que inovação metabólica complexa evoluiu no laboratório de Richard Lenski na linhagem de E. coli após 31.500 gerações?",
      opcoes: [
        "A capacidade de metabolizar citrato na presença de oxigênio (Cit+).",
        "A habilidade de cantar ópera em frequência ultrassônica.",
        "A transformação espontânea de bactérias em mosquitos alados.",
        "A síntese artificial de plástico biodegradável a partir do ar puro."
      ],
      correta: 0,
      explicacao_rapida: "A linhagem Cit+ adquiriu uma via metabólica complexa inédita por mutação e duplicação gênica!"
    }
  },
  {
    id: "nervo-laringeo-girafa",
    titulo: "O 'Design Inteligente' do Nervo Laríngeo Recorrente da Girafa",
    categoria: "design_inteligente",
    categoria_label: "⚙️ Design Inteligente & Complexidade",
    argumento_criacionista: "Cada detalhe anatômico de cada criatura viva foi planejado com sabedoria e perfeição divina infinita para seu propósito supremo. Não existem falhas de projeto no corpo dos seres vivos, apenas mistérios que a mente humana pecaminosa ainda não compreende!",
    analogia_absurda: "Contratar um arquiteto para puxar um fio do interruptor até a lâmpada do quarto dando 4 voltas pelo esgoto da rua.",
    citacao_ou_versiculo: "Panfleto do Design Inteligente: 'Tudo na natureza manifesta engenharia de precisão divina!'",
    nivel_delirio: 9.1,
    rotulo_delirio: "Engenheiro Eletricista com Fios Cruzados",
    falacia_logica: "Petição de Princípio (Circularidade Teológica) + Negação de Imperfeições Óbvias",
    por_que_e_idiota: "Se a girafa foi desenhada por um engenheiro celestial inteligente, esse engenheiro merecia ter o registro cassado imediatamente pelo CREA biológico! O nervo laríngeo recorrente liga o cérebro à laringe. Na girafa, a laringe fica a meros 10 centímetros do cérebro. Em vez de ir direto, o nervo desce por CINCO METROS ao longo de todo o pescoço da girafa, dá a volta por baixo da artéria aorta no peito (perto do coração) e SOBE OUTROS CINCO METROS de volta para a garganta! Um desvio bizarro e inútil de quase 5 metros!",
    a_ciencia_real: "Essa aberração anatômica faz todo o sentido sob a luz da evolução histórica a partir de peixes ancestrais! Nos peixes primitivos sem pescoço, o sexto arco aórtico ficava bem ao lado do nervo branquial correspondente, e a rota era curta e direta. Conforme o pescoço dos tetrápodes e mamíferos foi se alongando ao longo de milhões de anos, a aorta ficou retida no tórax e o nervo ficou preso por trás do vaso sanguíneo, sendo gradualmente esticado a cada geração porque mudar a rota exigiria cortar e quebrar o nervo durante o desenvolvimento embrionário.",
    fontes_cientificas: [
      {
        autor_ano: "Wedel, M. J. (2012)",
        titulo: "A monument of inefficiency: The presumed course of the recurrent laryngeal nerve in sauropod dinosaurs",
        periodico: "Acta Palaeontologica Polonica, 57(2), 251–256",
        doi_ou_link: "https://doi.org/10.4202/app.2011.0019"
      },
      {
        autor_ano: "Dawkins, R. (2009)",
        titulo: "The Greatest Show on Earth: The Evidence for Evolution (Chapter 11: History Written All Over Us)",
        periodico: "Free Press / Simon & Schuster",
        doi_ou_link: "https://www.worldcat.org/title/greatest-show-on-earth/oclc/310398086"
      }
    ],
    quiz: {
      pergunta: "Por que o nervo laríngeo da girafa dá uma volta bizarra de quase 5 metros até o peito para voltar à garganta?",
      opcoes: [
        "Porque ficou anatomicamente preso atrás do arco da aorta desde os nossos ancestrais peixes sem pescoço.",
        "Para a girafa conseguir mastigar folhas de acácia com mais ritmo musical.",
        "Porque Deus queria testar a elasticidade do tecido conjuntivo dos mamíferos.",
        "Porque o pescoço da girafa cresce em espiral durante a noite."
      ],
      correta: 0,
      explicacao_rapida: "Herança histórica de peixes ancestrais sem pescoço: o nervo ficou enganchado atrás da aorta!"
    }
  },
  {
    id: "apenas-uma-teoria",
    titulo: "A evolução é 'apenas uma teoria', não é uma lei ou um fato comprovado!",
    categoria: "biblia_literal",
    categoria_label: "📖 Bíblia Literal & Folclore",
    argumento_criacionista: "Por que as escolas públicas ensinam a evolução como verdade se o próprio nome já diz: é 'Teoria da Evolução'? Teoria é apenas uma hipótese não comprovada, um palpite que os cientistas deram. Se fosse fato comprovado, se chamaria 'Lei da Evolução', como a Lei da Gravidade!",
    analogia_absurda: "Achar que teoria científica é igual a teoria de que o seu vizinho roubou seu vaso de samambaia.",
    citacao_ou_versiculo: "Bordão Popular: 'Se fosse provado não se chamava teoria, chamava certeza!'",
    nivel_delirio: 8.0,
    rotulo_delirio: "Semiólogo de Calçada",
    falacia_logica: "Equívoco Semântico (Confundir Teoria Coloquial com Teoria Científica)",
    por_que_e_idiota: "Confundir 'teoria' do boteco com 'Teoria Científica' é analfabetismo científico básico. No dia a dia, teoria significa palpite ('tenho uma teoria sobre o final da novela'). Na ciência, TEORIA É O NÍVEL MAIS ALTO DE CONHECIMENTO POSSÍVEL! Uma teoria científica é uma explicação robusta, testada e corroborada por milhares de fatos e observações independentes. Dizer que a evolução é 'só uma teoria' é como pular do 15º andar de um prédio porque a gravidade é descrita pela Teoria da Relatividade Geral de Einstein!",
    a_ciencia_real: "Na ciência, leis descrevem O QUE acontece sob certas condições (ex: F = m.a), enquanto Teorias explicam COMO E POR QUE os fenômenos acontecem. Teorias nunca 'viram' leis quando crescem. A evolução é tanto um FATO (as espécies mudam ao longo do tempo e compartilham ancestralidade, observado diretamente na genética e no registro fóssil) quanto uma TEORIA (a Teoria Sintética da Evolução, que explica os mecanismos de mutação, deriva genética, fluxo gênico e seleção natural).",
    fontes_cientificas: [
      {
        autor_ano: "National Academy of Sciences (2008)",
        titulo: "Science, Evolution, and Creationism",
        periodico: "The National Academies Press",
        doi_ou_link: "https://doi.org/10.17226/11876"
      },
      {
        autor_ano: "Gould, S. J. (1981)",
        titulo: "Evolution as Fact and Theory",
        periodico: "Discover Magazine, 2(5), 34–37",
        doi_ou_link: "https://stephenjaygould.org/library/gould_fact-and-theory.html"
      }
    ],
    quiz: {
      pergunta: "Qual é a definição correta de 'Teoria' no método científico?",
      opcoes: [
        "Uma explicação abrangente, testada e altamente corroborada por fatos e evidências empíricas.",
        "Um palpite aleatório formulado antes de tomar café da manhã.",
        "Uma lei científica júnior que ainda não completou 18 anos.",
        "Uma mentira criada para receber verbas governamentais de pesquisa."
      ],
      correta: 0,
      explicacao_rapida: "Na ciência, teoria é o ápice da explicação testada, não um palpite!"
    }
  },
  {
    id: "dinossauros-arca-noe",
    titulo: "Os dinossauros viveram com os humanos e Noé levou filhotes de T-Rex na Arca!",
    categoria: "biblia_literal",
    categoria_label: "📖 Bíblia Literal & Folclore",
    argumento_criacionista: "Deus criou todos os animais terrestres no 6º dia, portanto humanos e dinossauros foram contemporâneos no Jardim do Éden! Os dinossauros eram herbívoros gentis antes do pecado original. Para salvar todas as espécies no Dilúvio sem afundar a madeira, Noé foi inteligente e levou apenas casais de filhotes bebês de Tiranossauro Rex e Braquiossauro!",
    analogia_absurda: "Passear com um Velociraptor na coleira na pracinha do Éden comendo maçã.",
    citacao_ou_versiculo: "Jó 40:15 — 'Contempla agora o Beemote, que eu fiz contigo, que come erva como o boi.'",
    nivel_delirio: 9.8,
    rotulo_delirio: "Paleontólogo dos Flintstones",
    falacia_logica: "Anacronismo Estratigráfico Monumental + Apelo ao Mito dos Flintstones",
    por_que_e_idiota: "Há um abismo temporal intransponível de 66 MILHÕES DE ANOS entre o último dinossauro não-aviano e o primeiro ancestral hominíneo! Em todas as centenas de milhares de escavações paleontológicas realizadas em todos os continentes nos últimos 200 anos, JAMAIS foi encontrado um único fóssil humano ou de mamífero moderno junto com dinossauros do Mesozóico. Nenhum osso de coelho, vaca ou ser humano no Jurássico. Se o Dilúvio tivesse enterrado todo mundo junto, encontraríamos crânios de humanos abraçados com velociraptors na mesma rocha!",
    a_ciencia_real: "Os dinossauros não-avianos foram extintos há 66,0 milhões de anos no limite Cretáceo-Paleógeno (K-Pg), causado pelo impacto de um asteroide de 10 km na península de Yucatán (cratera de Chicxulub), evidenciado pela camada global de irídio. Os primeiros hominínios bípedes só surgiram há cerca de 6 a 7 milhões de anos. As supostas 'pegadas humanas com dinossauros' do Rio Paluxy (Texas) foram desmascaradas como erosões naturais, pegadas de dinossauros deformadas ou falsificações entalhadas na pedra durante a Grande Depressão para vender a turistas.",
    fontes_cientificas: [
      {
        autor_ano: "Schulte, P. et al. (2010)",
        titulo: "The Chicxulub Asteroid Impact and Mass Extinction at the Cretaceous-Paleogene Boundary",
        periodico: "Science, 327(5970), 1214–1218",
        doi_ou_link: "https://doi.org/10.1126/science.1177265"
      },
      {
        autor_ano: "Kuban, G. J. (1989)",
        titulo: "Retracking Those Incredible-Man Tracks",
        periodico: "Creation/Evolution, 9(2), 13–76",
        doi_ou_link: "http://www.talkorigins.org/faqs/paluxy.html"
      }
    ],
    quiz: {
      pergunta: "Qual elemento químico raro na crosta terrestre marca a camada global da extinção dos dinossauros há 66 milhões de anos?",
      opcoes: [
        "Irídio, trazido em abundância pelo asteroide de Chicxulub.",
        "Kryptonita radioativa pré-diluviana.",
        "Ouro em pó deixado por civilizações perdidas.",
        "Bicarbonato de sódio fossilizado."
      ],
      correta: 0,
      explicacao_rapida: "A camada de Irídio de Chicxulub marca o impacto do asteroide há 66 milhões de anos!"
    }
  },
  {
    id: "dna-linguagem-programacao",
    titulo: "O DNA é um código de programação digital, e software exige um Programador!",
    categoria: "abiogenese",
    categoria_label: "🧬 Abiogênese & Origem da Vida",
    argumento_criacionista: "Bill Gates disse que o DNA é como um programa de computador, só que muito mais avançado do que qualquer software que já inventamos. Nós sabemos que o Microsoft Windows não se escreve sozinho nem por 1 bilhão de anos de bugs aleatórios no teclado. Logo, o DNA é informação pura que exige uma Mente Inteligente Transcendente!",
    analogia_absurda: "O universo como um servidor Windows rodando o código-fonte do Gênesis.",
    citacao_ou_versiculo: "Stephen C. Meyer em 'Signature in the Cell' (A Assinatura na Célula).",
    nivel_delirio: 8.9,
    rotulo_delirio: "Dev Júnior da Criação",
    falacia_logica: "Reificação Metafórica + Falsa Analogia Tecnológica",
    por_que_e_idiota: "Dizer que o DNA é 'um software' é uma metáfora pedagógica útil para o leigo, não uma identidade literal físico-química. O DNA não é feito de zeros e uns binários abstratos flutuando em um chip de silício: é uma molécula polimérica orgânica sujeita a ligações de hidrogênio, conformações estereoquímicas e afinidades eletrostáticas. Além disso, se o DNA foi feito por um programador inteligente supremo, esse programador era um estagiário bêbado: nosso genoma é entupido de pseudogenes inativos quebrados, vírus endógenos antigos fossilizados (ERVs) e sequências repetitivas inúteis que quebrariam qualquer sistema operacional!",
    a_ciencia_real: "Mutações espontâneas, crossing-over, duplicações cromossômicas e retrotransposons geram novidade genética contínua de acordo com leis termodinâmicas de síntese molecular. Além disso, retrovírus endógenos (ERVs) inseridos no genoma de primatas ancestrais foram cooptados pela evolução para desempenhar papéis novos essenciais — como a proteína Sincitina, derivada de um retrovírus infectante ancestral que hoje permite a formação da placenta em humanos e mamíferos!",
    fontes_cientificas: [
      {
        autor_ano: "Mi, S. et al. (2000)",
        titulo: "Syncytin is a captive retroviral envelope protein involved in human placental morphogenesis",
        periodico: "Nature, 403(6771), 785–789",
        doi_ou_link: "https://doi.org/10.1038/35001608"
      },
      {
        autor_ano: "Lander, E. S. et al. (2001)",
        titulo: "Initial sequencing and analysis of the human genome",
        periodico: "Nature, 409(6822), 860–921",
        doi_ou_link: "https://doi.org/10.1038/35057062"
      }
    ],
    quiz: {
      pergunta: "De onde veio a proteína humana 'Sincitina', vital para a placenta dos mamíferos?",
      opcoes: [
        "De um gene de envelope de retrovírus antigo (ERV) integrado ao genoma e cooptado pela evolução.",
        "De uma linha de código escrita em Java no barro primordial.",
        "Foi transplantada diretamente de uma maçã no Jardim do Éden.",
        "Foi criada por um raio cósmico em 1953."
      ],
      correta: 0,
      explicacao_rapida: "A Sincitina da nossa placenta vem de um vírus antigo fossilizado em nosso DNA!"
    }
  },
  {
    id: "ajuste-fino-terra-sol",
    titulo: "Se a Terra estivesse 1 metro mais perto do Sol queimava, 1 metro mais longe congelava!",
    categoria: "termodinamica",
    categoria_label: "🌡️ Termodinâmica & Física Freestyle",
    argumento_criacionista: "Vejam a precisão milimétrica da criação de Deus: a Terra está na distância perfeita do Sol! Se estivéssemos apenas um metro ou um centímetro mais próximos da estrela, toda a água evaporaria e seríamos incinerados. Se estivéssemos um metro mais afastados, o planeta viraria um bloco de gelo absoluto!",
    analogia_absurda: "O termostato divino regulado no milímetro para a humanidade não passar calor.",
    citacao_ou_versiculo: "Mensagem clássica de corrente de WhatsApp com foto de pôr do sol.",
    nivel_delirio: 9.7,
    rotulo_delirio: "Astrofísico de Churrasqueira",
    falacia_logica: "Falácia da Poça d'Água (Douglas Adams) + Erro Aritmético Espantoso de 5 Milhões de Km",
    por_que_e_idiota: "Essa é de chorar de rir ou de vergonha alheia. A órbita da Terra em torno do Sol NÃO É CIRCULAR, ela é elíptica! Ao longo de cada ano, a distância entre a Terra e o Sol varia em CINCO MILHÕES DE QUILÔMETROS (cerca de 147 milhões de km no periélio em janeiro contra 152 milhões de km no afélio em julho). Se 'um metro' fizesse a diferença entre congelar ou queimar, qualquer pessoa que subisse numa escada de pedreiro ou pulasse num trampolim seria instantaneamente carbonizada!",
    a_ciencia_real: "A zona habitável circunstelar (onde a água líquida pode existir na superfície de um planeta rochoso) é uma faixa ampla calculada em dezenas de milhões de quilômetros de espessura. Como brilhantemente ironizou o autor Douglas Adams: 'Esta é uma poça d'água que acorda de manhã e pensa: Que mundo engraçado em que me encontro! Ele se encaixa perfeitamente em mim! As bordas têm a forma exata do meu corpo! Deve ter sido feito especialmente para mim!' Nós nos adaptamos ao ambiente pela evolução, não o cosmos que foi moldado sob medida para o nosso conforto.",
    fontes_cientificas: [
      {
        autor_ano: "Kasting, J. F., Whitmire, D. P., & Reynolds, R. T. (1993)",
        titulo: "Habitable zones around main sequence stars",
        periodico: "Icarus, 101(1), 108–128",
        doi_ou_link: "https://doi.org/10.1006/icar.1993.1010"
      },
      {
        autor_ano: "Adams, D. (1998)",
        titulo: "The Salmon of Doubt: Hitchhiking the Galaxy One Last Time (Puddle Analogy)",
        periodico: "Harmony Books",
        doi_ou_link: "https://en.wikipedia.org/wiki/Douglas_Adams#Puddle_analogy"
      }
    ],
    quiz: {
      pergunta: "Quanto varia a distância da Terra ao Sol ao longo de um único ano em sua órbita elíptica?",
      opcoes: [
        "Cerca de 5 milhões de quilômetros (entre periélio e afélio).",
        "Apenas 2 centímetros marcados na régua escolar.",
        "Não varia absolutamente nada porque o Sol gira em torno de Brasília.",
        "Varia exatamente 1 metro conforme o pastor do zap avisou."
      ],
      correta: 0,
      explicacao_rapida: "A órbita varia 5 milhões de km todo ano sem ninguém queimar ou congelar!"
    }
  },
  {
    id: "eva-mitocondrial-adao-y",
    titulo: "A genética provou Adão e Eva: a 'Eva Mitocondrial' e o 'Adão Y'!",
    categoria: "evolucao_humana",
    categoria_label: "🐒 Homem-Macaco & Ancestralidade",
    argumento_criacionista: "Cientistas ateus tiveram que admitir: estudos de DNA mapearam a linhagem humana e encontraram a 'Eva Mitocondrial' e o 'Adão Cromossomial Y', provando que toda a humanidade descende de um único casal original exatamente como relatado em Gênesis!",
    analogia_absurda: "O casal do Éden fazendo teste de DNA no programa do Ratinho.",
    citacao_ou_versiculo: "Gênesis 3:20 — 'E chamou Adão o nome de sua mulher Eva, porquanto ela era a mãe de todos os viventes.'",
    nivel_delirio: 8.7,
    rotulo_delirio: "Geneticista de Folheto de Domingo",
    falacia_logica: "Equívoco Conceitual + Falácia da Falsa Equivalência Populacional",
    por_que_e_idiota: "Os criacionistas ouviram a palavra bíblica 'Adão' e 'Eva' em matérias de divulgação científica e entraram em êxtase sem ler uma única linha do estudo. A 'Eva Mitocondrial' e o 'Adão Cromossomial Y' NUNCA SE CONHECERAM, viveram com dezenas de milhares de anos de diferença temporal e NUNCA FORAM OS ÚNICOS HUMANOS NA TERRA! Eles viveram no meio de populações de milhares de outros indivíduos humanos férteis cujos outros genes ainda compõem nosso DNA.",
    a_ciencia_real: "A Eva Mitocondrial (mt-MRCA) é simplesmente o ancestral comum matrilinear mais recente de quem todo o DNA mitocondrial atual descende por linha feminina ininterrupta (viveu há cerca de 150.000–200.000 anos na África). O Adão Cromossomial Y (Y-MRCA) é o ancestral patrilinear mais recente por linha paterna ininterrupta (viveu há cerca de 200.000–300.000 anos). Por causa da coalescência estocástica em genética de populações, em qualquer população finita genes neutros convergem para um único ancestral por deriva genética.",
    fontes_cientificas: [
      {
        autor_ano: "Cann, R. L., Stoneking, M., & Wilson, A. C. (1987)",
        titulo: "Mitochondrial DNA and human evolution",
        periodico: "Nature, 325(6099), 31–36",
        doi_ou_link: "https://doi.org/10.1038/325031a0"
      },
      {
        autor_ano: "Poznik, G. D. et al. (2013)",
        titulo: "Sequencing Y chromosomes resolves discrepancy in time to common ancestor of males versus females",
        periodico: "Science, 341(6145), 562–565",
        doi_ou_link: "https://doi.org/10.1126/science.1237619"
      }
    ],
    quiz: {
      pergunta: "Por que a 'Eva Mitocondrial' e o 'Adão Y' não foram o casal de Gênesis?",
      opcoes: [
        "Porque viveram com dezenas de milhares de anos de diferença em populações de milhares de outros humanos.",
        "Porque ambos eram personagens de ficção científica escritos por Isaac Asimov.",
        "Porque o DNA mitocondrial só existe em plantas carnívoras.",
        "Porque eles viviam na Austrália e não no Oriente Médio."
      ],
      correta: 0,
      explicacao_rapida: "Eles viveram com dezenas de milhares de anos de diferença no seio de grandes populações!"
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { ARGUMENTOS_CLASSICOS };
}
