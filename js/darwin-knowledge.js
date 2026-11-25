/**
 * Criacionator 3000 — Base de Conhecimento: A Origem das Espécies (1859)
 * Charles Darwin, M.A., F.R.S.
 * Curadoria: LaBiOmicS — Universidade de Mogi das Cruzes
 * Coordenação: Prof. Dr. Fabiano Bezerra Menegidio · fabianomenegidio@umc.br
 *
 * Contém o índice dos 14 capítulos completos em Markdown e trechos cruciais anotados.
 */

const DARWIN_CHAPTERS = [
  {
    "number": 0,
    "title_en": "Introduction",
    "title_pt": "Introdução: Origem da Obra a Bordo do Beagle e Mutabilidade das Espécies",
    "filename": "00_introduction.md",
    "word_count": 1705,
    "preview": "INTRODUCTION. When on board H.M.S. 'Beagle,' as naturalist, I was much struck with certain facts in the distribution of the inhabitants of South America, and in the geological relations of the present to the past inhabitants of that continent. These facts seemed to me to throw some light on the origin of species--that mystery of mysteries, as it has been called by one of our greatest philosophers. On my return home, it occurred to me, in 1837, that something might perhaps be made out on this qu"
  },
  {
    "number": 1,
    "title_en": "Variation Under Domestication",
    "title_pt": "Capítulo 1: A Variação sob Domesticação (Pombos, Seleção Artificial e Herança)",
    "filename": "01_variation_under_domestication.md",
    "word_count": 11657,
    "preview": "1. VARIATION UNDER DOMESTICATION. Causes of Variability. Effects of Habit. Correlation of Growth. Inheritance. Character of Domestic Varieties. Difficulty of distinguishing between Varieties and Species. Origin of Domestic Varieties from one or more Species. Domestic Pigeons, their Differences and Origin. Principle of Selection anciently followed, its Effects. Methodical and Unconscious Selection. Unknown Origin of our Domestic Productions. Circumstances favourable to Man's power of Selection."
  },
  {
    "number": 2,
    "title_en": "Variation Under Nature",
    "title_pt": "Capítulo 2: A Variação na Natureza (Diferenças Individuais e Espécies Duvidosas)",
    "filename": "02_variation_under_nature.md",
    "word_count": 4889,
    "preview": "2. VARIATION UNDER NATURE. Variability. Individual differences. Doubtful species. Wide ranging, much diffused, and common species vary most. Species of the larger genera in any country vary more than the species of the smaller genera. Many of the species of the larger genera resemble varieties in being very closely, but unequally, related to each other, and in having restricted ranges. Before applying the principles arrived at in the last chapter to organic beings in a state of nature, we must"
  },
  {
    "number": 3,
    "title_en": "Struggle For Existence",
    "title_pt": "Capítulo 3: A Luta pela Existência (Doutrina de Malthus e Geometria da Sobrevivência)",
    "filename": "03_struggle_for_existence.md",
    "word_count": 6190,
    "preview": "3. STRUGGLE FOR EXISTENCE. Bears on natural selection. The term used in a wide sense. Geometrical powers of increase. Rapid increase of naturalised animals and plants. Nature of the checks to increase. Competition universal. Effects of climate. Protection from the number of individuals. Complex relations of all animals and plants throughout nature. Struggle for life most severe between individuals and varieties of the same species; often severe between species of the same genus. The relation of"
  },
  {
    "number": 4,
    "title_en": "Natural Selection",
    "title_pt": "Capítulo 4: A Seleção Natural (Sobrevivência dos Mais Aptos e Divergência de Caracteres)",
    "filename": "04_natural_selection.md",
    "word_count": 15711,
    "preview": "4. NATURAL SELECTION. Natural Selection: its power compared with man's selection, its power on characters of trifling importance, its power at all ages and on both sexes. Sexual Selection. On the generality of intercrosses between individuals of the same species. Circumstances favourable and unfavourable to Natural Selection, namely, intercrossing, isolation, number of individuals. Slow action. Extinction caused by Natural Selection. Divergence of Character, related to the diversity of inhabit"
  },
  {
    "number": 5,
    "title_en": "Laws Of Variation",
    "title_pt": "Capítulo 5: Leis da Variação (Uso e Desuso, Aclimação e Variação Correlata)",
    "filename": "05_laws_of_variation.md",
    "word_count": 12241,
    "preview": "5. LAWS OF VARIATION. Effects of external conditions. Use and disuse, combined with natural selection; organs of flight and of vision. Acclimatisation. Correlation of growth. Compensation and economy of growth. False correlations. Multiple, rudimentary, and lowly organised structures variable. Parts developed in an unusual manner are highly variable: specific characters more variable than generic: secondary sexual characters variable. Species of the same genus vary in an analogous manner. Rever"
  },
  {
    "number": 6,
    "title_en": "Difficulties On Theory",
    "title_pt": "Capítulo 6: Dificuldades da Teoria (Evolução do Olho, Transições e Órgãos de Extrema Perfeição)",
    "filename": "06_difficulties_on_theory.md",
    "word_count": 11169,
    "preview": "6. DIFFICULTIES ON THEORY. Difficulties on the theory of descent with modification. Transitions. Absence or rarity of transitional varieties. Transitions in habits of life. Diversified habits in the same species. Species with habits widely different from those of their allies. Organs of extreme perfection. Means of transition. Cases of difficulty. Natura non facit saltum. Organs of small importance. Organs not in all cases absolutely perfect. The law of Unity of Type and of the Conditions of Ex"
  },
  {
    "number": 7,
    "title_en": "Instinct",
    "title_pt": "Capítulo 7: O Instinto (Comportamento das Formigas Escravocratas e Células Hexagonais das Abelhas)",
    "filename": "07_instinct.md",
    "word_count": 11953,
    "preview": "7. INSTINCT. Instincts comparable with habits, but different in their origin. Instincts graduated. Aphides and ants. Instincts variable. Domestic instincts, their origin. Natural instincts of the cuckoo, ostrich, and parasitic bees. Slave-making ants. Hive-bee, its cell-making instinct. Difficulties on the theory of the Natural Selection of instincts. Neuter or sterile insects. Summary. The subject of instinct might have been worked into the previous chapters; but I have thought that it would"
  },
  {
    "number": 8,
    "title_en": "Hybridism",
    "title_pt": "Capítulo 8: Hibridismo (Fertilidade, Esterilidade e os Limites Entre Espécies e Variedades)",
    "filename": "08_hybridism.md",
    "word_count": 9987,
    "preview": "8. HYBRIDISM. Distinction between the sterility of first crosses and of hybrids. Sterility various in degree, not universal, affected by close interbreeding, removed by domestication. Laws governing the sterility of hybrids. Sterility not a special endowment, but incidental on other differences. Causes of the sterility of first crosses and of hybrids. Parallelism between the effects of changed conditions of life and crossing. Fertility of varieties when crossed and of their mongrel offspring no"
  },
  {
    "number": 9,
    "title_en": "On The Imperfection Of The Geological Record",
    "title_pt": "Capítulo 9: A Imperfeição do Registro Geológico (A Falta Aparente de Fósseis Intermediários)",
    "filename": "09_imperfection_geological_record.md",
    "word_count": 9758,
    "preview": "9. ON THE IMPERFECTION OF THE GEOLOGICAL RECORD. On the absence of intermediate varieties at the present day. On the nature of extinct intermediate varieties; on their number. On the vast lapse of time, as inferred from the rate of deposition and of denudation. On the poorness of our palaeontological collections. On the intermittence of geological formations. On the absence of intermediate varieties in any one formation. On the sudden appearance of groups of species. On their sudden appearance"
  },
  {
    "number": 10,
    "title_en": "On The Geological Succession Of Organic Beings",
    "title_pt": "Capítulo 10: Da Sucessão Geológica dos Seres Orgânicos (Extinção e Formas Imutáveis)",
    "filename": "10_geological_succession.md",
    "word_count": 10364,
    "preview": "10. ON THE GEOLOGICAL SUCCESSION OF ORGANIC BEINGS. On the slow and successive appearance of new species. On their different rates of change. Species once lost do not reappear. Groups of species follow the same general rules in their appearance and disappearance as do single species. On Extinction. On simultaneous changes in the forms of life throughout the world. On the affinities of extinct species to each other and to living species. On the state of development of ancient forms. On the succe"
  },
  {
    "number": 11,
    "title_en": "Geographical Distribution",
    "title_pt": "Capítulo 11: Distribuição Geográfica (Barreiras Físicas, Galápagos e Migração Glacial)",
    "filename": "11_geographical_distribution.md",
    "word_count": 11433,
    "preview": "11. GEOGRAPHICAL DISTRIBUTION. Present distribution cannot be accounted for by differences in physical conditions. Importance of barriers. Affinity of the productions of the same continent. Centres of creation. Means of dispersal, by changes of climate and of the level of the land, and by occasional means. Dispersal during the Glacial period co-extensive with the world. In considering the distribution of organic beings over the face of the globe, the first great fact which strikes us is, that"
  },
  {
    "number": 12,
    "title_en": "Geographical Distribution Continued",
    "title_pt": "Capítulo 12: Distribuição Geográfica Continuação (Ilhas Oceânicas e Dispersão de Sementes)",
    "filename": "12_geographical_distribution_cont.md",
    "word_count": 8586,
    "preview": "12. GEOGRAPHICAL DISTRIBUTION--continued. Distribution of fresh-water productions. On the inhabitants of oceanic islands. Absence of Batrachians and of terrestrial Mammals. On the relation of the inhabitants of islands to those of the nearest mainland. On colonisation from the nearest source with subsequent modification. Summary of the last and present chapters. As lakes and river-systems are separated from each other by barriers of land, it might have been thought that fresh-water productions"
  },
  {
    "number": 13,
    "title_en": "Mutual Affinities Of Organic Beings",
    "title_pt": "Capítulo 13: Afinidades Mútuas, Morfologia, Embriologia e Órgãos Rudimentares",
    "filename": "13_mutual_affinities_morphology_embryology.md",
    "word_count": 14599,
    "preview": "13. MUTUAL AFFINITIES OF ORGANIC BEINGS: MORPHOLOGY: EMBRYOLOGY: RUDIMENTARY ORGANS. CLASSIFICATION, groups subordinate to groups. Natural system. Rules and difficulties in classification, explained on the theory of descent with modification. Classification of varieties. Descent always used in classification. Analogical or adaptive characters. Affinities, general, complex and radiating. Extinction separates and defines groups. MORPHOLOGY, between members of the same class, between parts of the"
  },
  {
    "number": 14,
    "title_en": "Recapitulation And Conclusion",
    "title_pt": "Capítulo 14: Recapitulação e Conclusão (Visão Grandiosa: Infinitas Formas Mais Belas)",
    "filename": "14_recapitulation_and_conclusion.md",
    "word_count": 9606,
    "preview": "14. RECAPITULATION AND CONCLUSION. Recapitulation of the difficulties on the theory of Natural Selection. Recapitulation of the general and special circumstances in its favour. Causes of the general belief in the immutability of species. How far the theory of natural selection may be extended. Effects of its adoption on the study of Natural history. Concluding remarks. As this whole volume is one long argument, it may be convenient to the reader to have the leading facts and inferences briefly"
  }
];

const DARWIN_KEY_EXCERPTS = {
  "eye_evolution": {
    "topic": "A Evolução do Olho e Órgãos de Extrema Perfeição",
    "chapter": 6,
    "chapter_title": "Chapter VI: Difficulties on Theory",
    "quote_original": "To suppose that the eye with all its inimitable contrivances for adjusting the focus to different distances, for admitting different amounts of light, and for the correction of spherical and chromatic aberration, could have been formed by natural selection, seems, I freely confess, absurd in the highest degree. Yet reason tells me, that if numerous gradations from a perfect and complex eye to one very imperfect and simple, each grade being useful to its possessor, can be shown to exist... then the difficulty of believing that a perfect and complex eye could be formed by natural selection, though insuperable by our imagination, can hardly be considered real.",
    "translation_pt": "Supor que o olho, com todos os seus inimitáveis artifícios para ajustar o foco a diferentes distâncias, regular a quantidade de luz e corrigir aberrações esféricas e cromáticas, pudesse ter sido formado pela seleção natural, parece, confesso livremente, absurdo no mais alto grau. Contudo, a razão me diz que se inúmeras gradações de um olho simples e imperfeito até um complexo e perfeito, sendo cada grau útil ao seu possuidor, puderem ser demonstradas existir... então a dificuldade de crer que um olho perfeito e complexo pudesse ser formado pela seleção natural, embora insuperável para a nossa imaginação, dificilmente pode ser considerada real.",
    "keywords": [
      "olho",
      "visao",
      "eye",
      "perfeicao",
      "complexidade irredutivel",
      "dificuldades da teoria"
    ]
  },
  "fossil_record_gaps": {
    "topic": "A Imperfeição do Registro Fóssil e Formas de Transição",
    "chapter": 9,
    "chapter_title": "Chapter IX: On the Imperfection of the Geological Record",
    "quote_original": "Why then is not every geological formation and every stratum full of such intermediate links? Geology assuredly does not reveal any such finely-graduated organic chain; and this, perhaps, is the most obvious and gravest objection which can be urged against my theory. The explanation lies, as I believe, in the extreme imperfection of the geological record... The crust of the earth is a vast museum; but the natural collections have been imperfectly made, and only at long intervals of time.",
    "translation_pt": "Por que então nem toda formação geológica e estrato está repleto de tais elos intermediários? A geologia seguramente não revela nenhuma cadeia orgânica tão finamente graduada; e esta é, talvez, a objeção mais óbvia e grave que pode ser levantada contra minha teoria. A explicação reside, creio eu, na extrema imperfeição do registro geológico... A crosta da Terra é um vasto museu; mas as coleções naturais foram formadas imperfeitamente e apenas em longos intervalos de tempo.",
    "keywords": [
      "fossil",
      "fosseis",
      "elos perdidos",
      "transicao",
      "intermediarios",
      "geologia",
      "estratos",
      "camadas"
    ]
  },
  "social_insects_instinct": {
    "topic": "O Instinto das Abelhas e Formigas Neutras/Estéreis",
    "chapter": 7,
    "chapter_title": "Chapter VII: Instinct",
    "quote_original": "He must be a dull man who can examine the exquisite structure of a comb, so beautifully adapted to its end, without extreme admiration. We hear from mathematicians that bees have practically solved a recondite problem, and have made their cells of the proper shape to hold the greatest possible amount of honey, with the least possible consumption of precious wax... Beyond this stage of perfection in architecture, natural selection could not lead; for the comb of the hive-bee, as far as we can see, is absolutely perfect.",
    "translation_pt": "Homem obtuso seria aquele que pudesse examinar a requintada estrutura de um favo, tão belamente adaptado ao seu propósito, sem extrema admiração. Ouvimos de matemáticos que as abelhas resolveram praticamente um problema recôndito, construindo suas células na forma exata para armazenar o máximo de mel com o mínimo de cera preciosa... Além desse estágio de perfeição na arquitetura, a seleção natural não poderia conduzir; pois o favo da abelha-europeia é absolutamente perfeito.",
    "keywords": [
      "abelha",
      "favo",
      "cera",
      "instinto",
      "formiga",
      "esteril",
      "hexagonal",
      "comportamento"
    ]
  },
  "artificial_selection_pigeons": {
    "topic": "A Seleção Artificial de Pombos e Raças Domésticas",
    "chapter": 1,
    "chapter_title": "Chapter I: Variation Under Domestication",
    "quote_original": "Altogether at least a score of pigeons might be chosen, which if shown to an ornithologist, and he were told that they were wild birds, would certainly, I think, be ranked by him as well-defined species... Great as the differences are between the breeds of pigeons, I am fully convinced that the common opinion of naturalists is correct, namely, that all have descended from the rock-pigeon (Columba livia).",
    "translation_pt": "Ao todo, pelo menos uma vintena de pombos poderiam ser escolhidos, os quais, se mostrados a um ornitólogo e dito que eram aves selvagens, seriam certamente classificados por ele como espécies bem definidas... Por maiores que sejam as diferenças entre as raças de pombos, estou plenamente convencido de que a opinião comum dos naturalistas está correta: todas descenderam do pombo-da-rocha selvagem (Columba livia).",
    "keywords": [
      "pombos",
      "domestico",
      "selecao artificial",
      "columba livia",
      "racas",
      "criadores"
    ]
  },
  "rudimentary_organs": {
    "topic": "Órgãos Rudimentares e Embriologia como Prova de Descendência",
    "chapter": 13,
    "chapter_title": "Chapter XIII: Mutual Affinities of Organic Beings",
    "quote_original": "Rudimentary organs, by whatever steps they may have been degraded into their present useless condition, are the record of a former state of things, and have been retained solely through the power of inheritance... It is an incredible supposition that in animals formed with the utmost skill, parts should have been intentionally created with no use whatever. They may be compared to letters in a word, still retained in the spelling, but become useless in the pronunciation.",
    "translation_pt": "Órgãos rudimentares, por quaisquer etapas que tenham sido degradados à sua condição inútil atual, são o registro de um estado anterior de coisas, preservados unicamente pela força da hereditariedade... É uma suposição inacreditável que em animais formados com a máxima habilidade, partes tenham sido intencionalmente criadas sem utilidade alguma. Eles podem ser comparados às letras de uma palavra, ainda mantidas na ortografia, mas tornadas inúteis na pronúncia.",
    "keywords": [
      "rudimentar",
      "vestigial",
      "embriologia",
      "apendice",
      "ossos da pélvis da baleia",
      "letras mudas"
    ]
  },
  "endless_forms_beautiful": {
    "topic": "A Conclusão Sublime: Infinitas Formas Mais Belas",
    "chapter": 14,
    "chapter_title": "Chapter XIV: Recapitulation and Conclusion",
    "quote_original": "There is grandeur in this view of life, with its several powers, having been originally breathed into a few forms or into one; and that, whilst this planet has gone cycling on according to the fixed law of gravity, from so simple a beginning endless forms most beautiful and most wonderful have been, and are being, evolved.",
    "translation_pt": "Há uma grandeza nesta visão da vida, com seus múltiplos poderes tendo sido originalmente insuflados em poucas formas ou em apenas uma; e que, enquanto este planeta continuou a girar de acordo com a lei imutável da gravidade, a partir de um início tão simples, infinitas formas, as mais belas e mais maravilhosas, evoluíram e continuam evoluindo.",
    "keywords": [
      "grandiosidade",
      "endless forms",
      "conclusao",
      "beleza",
      "origem da vida",
      "grandeur"
    ]
  }
};

// Função de busca rápida no acervo do livro para o Chat com Charles Darwin
function findDarwinContext(query) {
  if (!query) return null;
  const qLower = query.toLowerCase();
  
  // 1. Checa temas fundamentais conhecidos
  for (const [key, item] of Object.entries(DARWIN_KEY_EXCERPTS)) {
    for (const kw of item.keywords) {
      if (qLower.includes(kw)) {
        return item;
      }
    }
  }
  
  // 2. Fallback para capítulos relacionados
  if (qLower.includes('olho') || qLower.includes('complex') || qLower.includes('dificuld')) {
    return DARWIN_KEY_EXCERPTS.eye_evolution;
  }
  if (qLower.includes('fossil') || qLower.includes('elo') || qLower.includes('camada')) {
    return DARWIN_KEY_EXCERPTS.fossil_record_gaps;
  }
  if (qLower.includes('abelha') || qLower.includes('formiga') || qLower.includes('instinto')) {
    return DARWIN_KEY_EXCERPTS.social_insects_instinct;
  }
  if (qLower.includes('pombo') || qLower.includes('cachorro') || qLower.includes('raca')) {
    return DARWIN_KEY_EXCERPTS.artificial_selection_pigeons;
  }
  if (qLower.includes('vestigial') || qLower.includes('apendice') || qLower.includes('embri')) {
    return DARWIN_KEY_EXCERPTS.rudimentary_organs;
  }

  return DARWIN_KEY_EXCERPTS.endless_forms_beautiful;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DARWIN_CHAPTERS, DARWIN_KEY_EXCERPTS, findDarwinContext };
}
