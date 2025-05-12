// Banco de dados simulado de sinônimos
const bancoDeSinonimos = {
    //A
    "à custa de": ["à expensa de", "em detrimento de", "à conta de"],
    "à medida que": ["conforme", "à medida que", "à medida que"],
    "a partir": ["desde", "a partir de", "começando"],
    "a posteriori": ["posteriormente", "depois", "mais tarde"],
    "a priori": ["antecipadamente", "de antemão", "de início"],
    "a propósito": ["por acaso", "casualmente", "por oportunismo"],
    "a respeito de": ["sobre", "acerca de", "relativo a", "em relação a"],
    "ab-rogar": ["revogar", "anular", "cancelar", "abolir", "invalidar"],
    "aba": ["tampa", "cobertura", "capô"],
    "abacaxi": ["ananás"],
    "abaixo": ["embaixo", "inferior", "em baixo"],
    "abalar": ["balançar", "agitar", "mover", "tremer", "sacudir"],
    "abalroar": ["colidir", "bater", "impactar", "atropelar", "acidentar"],
    "abandonar": ["deixar", "desistir", "renunciar", "desamparar"],
    "abarcar": ["abranger", "incluir", "compreender", "envolver"],
    "abarroado": ["teimoso", "obstinado", "persistente", "perseverante", "aferrado"],
    "abarrotado": ["lotado", "cheio", "repleto", "superlotado", "apinhado"],
    "abastado": ["rico", "próspero", "endinheirado", "opulento", "abundante"],
    "abate": ["derrubada", "redução", "abatimento", "diminuição", "eliminação"],
    "abatido": ["triste", "desanimado", "desolado", "deprimido", "melancólico"],
    "abaulado": ["curvado", "arredondado", "convexo", "abobadado"],
    "abdicar": ["renunciar", "desistir", "abandonar"],
    "ábdito": ["oculto", "escondido", "secreto", "encoberto", "velado"],
    "abdome": ["barriga", "pança", "ventre", "abdômen", "bojo"],
    "abdômen": ["barriga", "pança", "ventre", "abdome", "bojo"],
    "abdução": ["rapto", "sequestro", "captura", "prisão", "arremesso"],
    "abduzir": ["raptar", "sequestrar", "capturar", "arremessar", "tirar"],
    "abelha": ["inseto", "himenóptero"],
    "abelhão": ["abelha", "inseto", "himenóptero"],
    "abençoado": ["bendito", "sagrado", "santo", "santificado"],
    "abençoar": ["benzer", "louvar", "bendizer", "santificar"],
    "abençoe": ["benza", "louva"],
    "abençoei": ["benzi", "louvei"],
    "aberração": ["anomalia", "desvio", "irregularidade", "anormalidade"],
    "abertamente": ["francamente", "de forma clara", "abertamente"],
    "abertas": ["descobertas", "expostas", "reveladas"],
    "aberto": ["descoberto", "exposto", "revelado"],
    "abiquem": ["abiquem"],
    "abismo": ["precipício", "poço"],
    "abissal": ["profundo", "infinito"],
    "abjeto": ["desprezível", "vil", "ignóbil", "torpe", "indigno"],
    "ablução": ["purificação", "limpeza", "lavagem"],
    "abnegação": ["sacrifício", "renúncia", "desapego"],
    "abnegado": ["dedicado", "devotado", "sacrificado"],
    "abóbada": ["cúpula", "arco"],
    "abobreira": ["abóbora", "cabaça"],
    "abole": ["elimina", "extingue", "anula"],
    "abolição": ["extinção", "anulação", "revogação"],
    "abolido": ["extinto", "anulado", "revogado"],
    "abolir": ["extinguir", "anular", "revogar"],
    "abominação": ["desprezo", "aversão", "repúdio"],
    "abominável": ["desprezível", "repulsivo", "detestável"],
    "abonar": ["aprovar", "justificar", "ratificar", "confirmar", "validar"],
    "abordada": ["atacada", " abordada", " abordada", " abordada", " abordada"],
    "abordado": ["tratado", "discutido", "analisado", "abordado", "abordado"],
    "abordagem": ["aproximação", "técnica", "método", "estratégia", "abordagem"],
    "abordar": ["tratar", "discutir", "analisar", "enfrentar", "aproximar-se"],
    "aborígene": ["indígena", "nativo", "aborígine", "autóctone", "primitivo"],
    "aborrecer": ["desgostar", "enfurecer", "irritar", "aborrecer", "aborrecer"],
    "aborrecido": ["irritado", "chateado", "desgostoso", "aborrecido", "aborrecido"],
    "aborto": ["interrupção", "gravidez interrompida", "aborto", "abortamento", "terminação"],
    "abraço": ["acolhimento", "afago", "carinho", "abraço", "abraço"],
    "abrandar": ["amolecer", "suavizar", "mitigar", "aliviar", "abrandar"],
    "abrange": ["inclui", "cobre", "envolve", "abrange", "abrange"],
    "abrangência": ["extensão", "alcance", "alcance", "abrangência", "abrangência"],
    "abrangendo": ["inclusão", "envolvimento", "compreendendo", "abrangendo", "abrangendo"],
    "abrangente": ["amplo", "extenso", "geral", "abrangente", "abrangente"],
    "abranger": ["incluir", "abrir", "compreender", "abranger", "abranger"],
    "abrasada": ["quente", "incandescente", "abrasadora", "abrasadora", "abrasadora"],
    "abrasadora": ["intensa", "quente", "incandescente", "abrasiva", "abrasadora"],
    "abrasar": ["queimar", "incendiar", "abrasar", "incendiar", "consumir"],
    "abreviação": ["abreviatura", "sigla", "redução", "abreviação", "abreviação"],
    "abreviar": ["reduzir", "encurtar", "abreviar", "encurtar", "diminuir"],
    "abrigo": ["refúgio", "refúgio", "abrigo", "abrigo", "cobertura"],
    "abrir": ["destrancar", "desbloquear", "iniciar", "abrir", "abrir"],
    "abriu": ["iniciou", "desbloqueou", "destrancou", "abriu", "abriu"],
    "abrolho": ["espinho", "armadilha", "perigo", "abrolho", "abrolho"],
    "abrupta": ["repentina", "inesperada", "imprevisível", "abrupta", "abrupta"],
    "abruptamente": ["repentinamente", "inesperadamente", "imprevisivelmente", "brusco", "abruptamente"],
    "abrupto": ["repentino", "inesperado", "imprevisível", "abrupto", "abrupto"],
    "abscôndito": ["oculto", "escondido", "secreto", "velado", "disfarçado"],
    "absenteísmo": ["falta", "ausência", "deserção", "abstencionismo", "desistência"],
    "absolutamente": ["totalmente", "completamente", "plenamente", "absolutamente", "absolutamente"],
    "absolutismo": ["despotismo", "autocracia", "tirania", "monarquia", "absolutismo"],
    "absoluto": ["completo", "total", "inteiro", "absoluto", "absoluto"],
    "absolver": ["isentar", "perdoar", "libertar", "exonerar", "absolver"],
    "absolvição": ["perdão", "absolvição", "libertação", "exoneração"],
    "absolvido": ["perdoado", "libertado", "exonerado"],
    "absorção": ["sugestão", "assimilação", "incorporação", "captura"],
    "absorto": ["atônito", "pensativo", "impressionado", "maravilhado"],
    "absorver": ["sugar", "incorporar", "capturar", "assimilar"],
    "absorver-se": ["mergulhar", "envolver-se", "dedicar-se", "focar-se"],
    "absorvido": ["absorvido", "capturado", "incorporado"],
    "absorvimento": ["absorção", "incorporação", "sugestão"],
    "abstém": ["abster-se", "renunciar", "abster"],
    "abstêmio": ["abstinente", "modesto", "contido"],
    "abstenção": ["renúncia", "evitação", "abstenção", "recusa"],
    "abster": ["renunciar", "desistir", "evitar"],
    "abstinência": ["renúncia", "abstinência", "contenção"],
    "abstinente": ["abstêmio", "moderado", "contido"],
    "abstração": ["distanciamento", "isolamento", "generalização"],
    "abstrai": ["isolamento", "fuga", "reflexão"],
    "abstrair": ["desviar", "focar-se", "separar", "distanciar"],
    "abstrato": ["teórico", "imaginário", "conceitual", "intangible"],
    "absurda": ["irracional", "ilógica", "sem sentido", "ridícula"],
    "absurdamente": ["irracionalmente", "ilogicamente", "sem sentido"],
    "absurdo": ["ilógico", "irracional", "sem sentido", "ridículo"],
    "abundância": ["riqueza", "profusão", "grande quantidade", "superabundância"],
    "abundante": ["rico", "copioso", "profuso", "numeroso"],
    "abundantemente": ["profusamente", "copiosamente", "ricas"],
    "abusar": ["exceder", "violentar", "explorar", "abusar"],
    "abusivo": ["excessivo", "violento", "explorador", "injusto"],
    "abuso": ["violência", "excesso", "exploração", "maltrato"],
    "acabar": ["terminar", "concluir", "finalizar", "completar"],
    "acabou-se": ["findou", "terminou", "cessou", "desapareceu"],
    "academia": ["instituto", "escola", "faculdade", "centro de estudos"],
    "acadêmico": ["científico", "educacional", "teórico", "intelectual"],
    "acalanto": ["canto de ninar", "melodia suave", "canção de embalar"],
    "acalentar": ["embalar", "consolar", "cuidar", "acalmar"],
    "acalento": ["canto de ninar", "melodia suave", "canto reconfortante"],
    "acanhado": ["tímido", "reservado", "envergonhado", "modesto"],
    "ação": ["atividade", "movimento", "gesto", "processo"],
    "acarretado": ["resultante", "conseqüente", "provocado", "derivado"],
    "acarretar": ["causar", "provocar", "resultar em", "produzir"],
    "acasalar": ["juntar", "casar", "reunir", "ajuntar"],
    "acaso": ["casualidade", "sorte", "acidente", "imprevisibilidade"],
    "acatar": ["obedecer", "seguir", "respeitar", "aceitar"],
    "acautelar": ["prevenir", "precaver", "proteger", "cautelar"],
    "aceder": ["concordar", "permitir", "autorizar", "aceder"],
    "acéfalo": ["sem cérebro", "ignorante", "sem inteligência"],
    "aceitação": ["aprovação", "consentimento", "admissão", "aceitação"],
    "aceitar": ["concordar", "admitir", "assumir", "receber"],
    "aceleração": ["acréscimo", "aumento", "intensificação", "aceleramento"],
    "acenar": ["sinalizar", "saudar", "agitar", "mover"],
    "acender": ["iluminar", "acender", "acender", "dar luz"],
    "acendido": ["iluminado", "aceso", "acendido", "flamejante"],
    "acento": ["ênfase", "tônica", "sotaque", "entonação"],
    "acentuada": ["destacada", "intensa", "forte", "marcada"],
    "acentuar": ["destacar", "realçar", "salientar", "enfatizar"],
    "acepção": ["sentido", "significado", "interpretação", "conotação"],
    "acerca": ["sobre", "relativo a", "a respeito de", "acerca de"],
    "acerejado": ["decorado", "enfeitado", "ornamentado", "engalanado"],
    "acertar": ["corrigir", "ajustar", "consertar", "resolver"],
    "acertarão": ["resolverão", "corrigirão", "ajustarão", "completarão"],
    "acervo": ["coleção", "conjunto", "inventário", "totalidade"],
    "acesa": ["iluminada", "acesa", "sacudida", "acendida"],
    "aceso": ["iluminado", "acendido", "brilhante", "aceso"],
    "acessar": ["entrar", "acessar", "abrir", "chegar"],
    "acessibilidade": ["facilidade", "acessibilidade", "acesso", "disponibilidade"],
    "acessível": ["disponível", "alcançável", "acessível", "fácil de chegar"],
    "acesso": ["entrada", "acesso", "chegada", "entrada"],
    "acessório": ["secundário", "complementar", "adicional", "auxiliar"],
    "acha": ["encontra", "considera", "acredita", "julga"],
    "achanar": ["encolher", "embolar", "reduzir", "comprimir"],
    "achar": ["encontrar", "localizar", "descobrir", "perceber"],
    "acharia": ["consideraria", "pensaria", "julgar-se-ia", "acreditava"],
    "achem": ["encontrem", "descubram", "percebam", "considerem"],
    "achicalhe": ["desprezo", "ofensa", "humilhação", "vergonha"],
    "achincalhamento": ["ridicularização", "humilhação", "desprezo", "rebaixamento"],
    "achismo": ["opinião", "presunção", "convicção", "crença"],
    "acidental": ["casual", "fortuito", "imprevisto", "involuntário"],
    "acidente": ["incidente", "imprevisto", "eventualidade", "siniestro"],
    "acidez": ["amargor", "azedo", "acidez", "sabor ácido"],
    "acima": ["superior", "mais alto", "em cima", "sobre"],
    "acinte": ["desprezo", "desrespeito", "insolência", "desdém"],
    "acintosamente": ["desrespeitosamente", "desafiadoramente", "arrogantemente"],
    "acintoso": ["insolente", "desrespeitoso", "desaforado", "desdenhoso"],
    "acionar": ["ativar", "iniciar", "ligar", "operar"],
    "acirrado": ["intenso", "fervoroso", "intenso", "extremo"],
    "acirrante": ["provocante", "instigante", "intensificador", "agitado"],
    "aclamação": ["aplausos", "elogios", "aclamação", "gritos de aprovação"],
    "acme": ["pico", "auge", "topo", "culminação"],
    "acocorar": ["curvar-se", "agachar", "ajoelhar", "dobrar-se"],
    "ações": ["movimentos", "atividades", "gestos", "ações"],
    "acoime": ["culpa", "acusação", "fardo", "responsabilidade"],
    "açoite": ["flagelo", "punição", "surra", "castigo", "bastinado"],
    "acolá": ["ali", "lá", "aí", "naquele lugar"],
    "acolher": ["receber", "abraçar", "acolher", "admitir", "aceitar"],
    "acolhíamos": ["recebíamos", "admitíamos", "abraçávamos", "acolhíamos"],
    "acolhida": ["recepção", "admissão", "acolhimento", "abertura"],
    "acolhido": ["recebido", "admitido", "abraçado", "aceito"],
    "acolhimento": ["recepção", "abrigo", "acolhida", "admissão"],
    "acometer": ["atingir", "incidir", "afetar", "invadir", "atingir"],
    "acometermos": ["atingirmos", "sofrermos", "incidirmos", "afetarmos"],
    "acometida": ["atingida", "afligida", "prejudicada", "contaminada"],
    "acometido": ["atingido", "afligido", "prejudicado", "contaminado"],
    "acompanhamento": ["monitoramento", "vigilância", "supervisão", "seguimento"],
    "acompanhar": ["seguir", "observar", "monitorar", "vigiando"],
    "acompanharemos": ["seguiremos", "observaremos", "vigilaremos", "monitoraremos"],
    "acondicionado": ["armazenado", "guardado", "reservado", "tratado"],
    "acondicionamento": ["armazenamento", "guardar", "tratamento", "organização"],
    "acondicionar": ["armazenar", "guardar", "reservar", "organizar"],
    "aconselharmos": ["orientarmos", "sugerirmos", "aconselharmos", "recomendar"],
    "acontecer": ["ocorrer", "suceder", "surge", "realizar-se"],
    "acontecimento": ["evento", "ocorrência", "episódio", "ocorrência"],
    "acontecimentos": ["eventos", "ocorrências", "episódios", "casos"],
    "aconteço": ["ocorro", "realizo", "surge", "apareço"],
    "acordado": ["desperto", "acordado", "atento", "acordado"],
    "acordar": ["despertar", "acordar", "levantar-se", "sair do sono"],
    "acordo": ["pacto", "entendimento", "contrato", "convenção"],
    "acreditar": ["crer", "confiar", "achar", "supor"],
    "acrescentar": ["adicionar", "incluir", "somar", "juntar"],
    "acrescento": ["adição", "soma", "inclusão", "incremento"],
    "acrescido": ["aumentado", "adicionado", "somado", "incrementado"],
    "acréscimo": ["aumento", "soma", "adição", "incremento"],
    "acrítico": ["não crítico", "não analítico", "não observador"],
    "acrônimo": ["abreviação", "sigla", "abreviatura", "redução"],
    "actividade": ["atividade", "ocupação", "trabalho", "função"],
    "acuado": ["encurralado", "pressionado", "assustado", "aterrorizado"],
    "açúcar": ["doçura", "sacarose", "glicose", "mel"],
    "acudas": ["ajuda", "socorro", "assistência", "auxílio"],
    "açude": ["represa", "reservatório", "barragem", "dique"],
    "acudir": ["socorrer", "ajudar", "assistir", "auxiliar"],
    "acuidade": ["precisão", "agudeza", "nitidez", "clareza"],
    "açulado": ["apontado", "encorajado", "estimulado", "incitado"],
    "açular": ["incitar", "provocar", "instigar", "despertar"],
    "acume": ["pico", "ápice", "topo", "culminância"],
    "acumulando": ["acrescentando", "juntando", "arrecadando", "reunindo"],
    "acumular": ["arrecadar", "juntar", "reunir", "amontoar"],
    "acúmulo": ["acréscimo", "acumulação", "reunião", "acréscimo"],
    "acurácia": ["precisão", "exatidão", "fidelidade", "certeza"],
    "acuracidade": ["precisão", "exatidão", "acurácia", "perfeição"],
    "acurado": ["preciso", "exato", "fiel", "certo"],
    "acusar": ["denunciar", "reprovar", "imputar", "indicar"],
    "acusava": ["denunciava", "imputava", "reprovava", "relatava"],
    "ad aeternum": ["para sempre", "eternamente", "perpetuamente", "infinitamente"],
    "adágio": ["provérbio", "ditado", "sabedoria popular", "máxima"],
    "adaptação": ["ajuste", "adaptação", "alteração", "modificação"],
    "adaptar": ["ajustar", "modificar", "adequar", "ajustar-se"],
    "adaptativo": ["flexível", "modificável", "ajustável", "maleável"],
    "adaptável": ["flexível", "ajustável", "maleável", "modificável"],
    "ademais": ["além disso", "também", "igualmente", "adicionalmente"],
    "adendo": ["acréscimo", "adicional", "nota", "observação"],
    "adentrar": ["entrar", "adentrar", "penetrar", "entrar em"],
    "adepto": ["seguidor", "fã", "entusiasta", "partidário"],
    "adequação": ["ajuste", "adequação", "compatibilidade", "conformidade"],
    "adequado": ["apto", "apropriado", "conveniente", "compatível"],
    "adequar": ["ajustar", "adaptar", "arranjar", "conformar"],
    "adereço": ["acessório", "ornamento", "decoração", "adereço"],
    "aderência": ["adesão", "atrito", "fixação", "ligação"],
    "aderido": ["unido", "agarrado", "ligado", "colado"],
    "aderir": ["unir-se", "juntar-se", "aceitar", "agrupar-se"],
    "adesão": ["adesão", "inclusão", "aderência", "fidelidade"],
    "adestrar": ["treinar", "ensinar", "formar", "instruir"],
    "adeus": ["despedida", "partida", "tchau", "despedir-se"],
    "adiante": ["à frente", "mais à frente", "posteriormente", "daqui para frente"],
    "adiante-se": ["antecipe-se", "avance", "antecipadamente", "prossiga"],
    "adiar": ["postergar", "remarcar", "protelar", "adiar"],
    "adição": ["acréscimo", "adicional", "soma", "incremento"],
    "adicionar": ["incluir", "acrescentar", "somar", "adicionar"],
    "adimplir": ["cumprir", "executar", "realizar", "atender"],
    "aditamento": ["acréscimo", "anexo", "suplemento", "adicional"],
    "aditar": ["adicionar", "acrescentar", "suplementar", "incluir"],
    "adivinha": ["enigma", "mistério", "questão", "charada"],
    "adjacente": ["vizinho", "próximo", "contíguo", "lado"],
    "adjetivo": ["característica", "atributo", "qualidade", "descritor"],
    "adjudicação": ["atribuição", "designação", "concessão", "atribuição"],
    "adjudicar": ["atribuir", "conceder", "dar", "designar"],
    "adjunto": ["suplementar", "secundário", "complementar", "auxiliar"],
    "administração": ["gestão", "administração", "direção", "comando"],
    "admiração": ["respeito", "surpresa", "encanto", "apreço"],
    "admirar": ["respeitar", "encantar", "apreciar", "surpreender-se"],
    "admirável": ["notável", "extraordinário", "excelente", "impressionante"],
    "admissão": ["entrada", "aceitação", "ingresso", "admissão"],
    "admissibilidade": ["aceitação", "legitimidade", "validade", "admissibilidade"],
    "admitir": ["aceitar", "reconhecer", "assumir", "conceder", "autorizar"],
    "admoestação": ["advertência", "repreensão", "censura", "punição", "admoestamento"],
    "admoestar": ["repreender", "advertir", "censurar", "punir", "chamar a atenção"],
    "admoeste": ["repreenda", "advertir", "chame a atenção", "censure", "critique"],
    "adoção": ["admissão", "aceitação", "incorporação", "assimilação", "recebimento"],
    "adolescente": ["jovem", "menor", "criança", "pubescente", "inexperiente"],
    "adolescentes": ["jovens", "menores", "crianças", "pubescentes", "inexperientes"],
    "adorá-lo": ["amá-lo", "idolatrá-lo", "venerá-lo", "apreciá-lo", "reverenciá-lo"],
    "adoração": ["veneração", "culto", "adoração", "idolatria", "apreço"],
    "adorar": ["venerar", "idolar", "amplo", "reverenciar", "apreciar"],
    "adorável": ["encantador", "admirável", "cativante", "atraente", "amável"],
    "adore": ["venerar", "idolatrar", "apreciar", "adorar", "amar"],
    "adorno": ["decoração", "ornamento", "enfeite", "embelecimento", "detalhe"],
    "adotar": ["adquirir", "incorporar", "assumir", "aceitar", "iniciar"],
    "adquiríamos": ["obtivemos", "conseguimos", "ganhávamos", "comprávamos", "alcançávamos"],
    "adquirido": ["obtido", "conquistado", "conseguido", "alcançado", "comprado"],
    "adquirir": ["obter", "conseguir", "comprar", "conquistar", "alcançar"],
    "adquiriria": ["compraria", "obteria", "conseguiria", "ganharia", "alcançaria"],
    "adrede": ["propositadamente", "intencionalmente", "deliberadamente", "com propósito", "previamente"],
    "adrenalina": ["hormônio", "substância estimulante", "neurotransmissor", "hormônio excitante", "substância nervosa"],
    "adstringência": ["rigidez", "dureza", "estreitamento", "restrição", "contratilidade"],
    "adstringente": ["restritivo", "rigoroso", "intenso", "forte", "seco"],
    "adstrito": ["vinculado", "ligado", "restrito", "conectado", "limitado"],
    "aduaneiro": ["alfandegário", "fronteiriço", "de aduana", "de alfândega", "de comércio exterior"],
    "adubação": ["fertilização", "adubo", "fertilidade", "melhora do solo", "fertilização agrícola"],
    "adular": ["elogiaro", "lisonjear", "exaltar", "ajudar", "admirar"],
    "adultério": ["infidelidade", "traição", "adultério conjugal", "traição conjugal", "infidelidade conjugal"],
    "aduzir": ["argumentar", "afirmar", "informar", "explicar", "expôr"],
    "aduzo": ["afirmo", "argumento", "explico", "digo", "informo"],
    "advém": ["procede", "vem", "surge", "resulta", "originado"],
    "advenhas": ["chegues", "aconteçam", "sobrevenham", "advenha", "surgem"],
    "advento": ["chegada", "emergência", "aparecimento", "manifestação", "surgimento"],
    "adversário": ["oponente", "concorrente", "rival", "inimigo", "competidor"],
    "adversativa": ["contraditória", "opositiva", "antagônica", "oponente", "contrária"],
    "adversidade": ["dificuldade", "problema", "desafio", "obstáculo", "contrariedade"],
    "adverso": ["contrário", "oposto", "negativo", "opositor", "inimigo"],
    "adversos": ["contrários", "opositores", "inimigos", "antagônicos", "negativos"],
    "advertência": ["aviso", "alerta", "admoestação", "repreensão", "censura"],
    "advertir": ["avisar", "alertar", "repreender", "chamar a atenção", "censurar"],
    "advindo": ["chegado", "surgido", "aparecido", "emergido", "resultante"],
    "advir": ["provir", "resultar", "emergir", "surgir", "vir de"],
    "advogado": ["jurista", "advogado", "procurador", "defensor", "consultor jurídico"],
    "advogado-pilantra": ["fraudulento", "enganador", "picareta", "desonesto", "corrupto"],
    "aerófano": ["balão", "dirigível", "aeronave", "zepelim", "aeroplano"],
    "afã": ["esforço", "dedicação", "ímpeto", "vontade", "zeal"],
    "afabilidade": ["gentileza", "educação", "cordialidade", "simplicidade", "doçura"],
    "afagar": ["acariciar", "mimar", "tocar", "carinhar", "afagar"],
    "afago": ["carinho", "mimo", "cuidado", "afeto", "toque"],
    "afanei": ["roubei", "furtava", "subtraí", "desonrei", "apoderei-me"],
    "afasia": ["dificuldade de fala", "distúrbio de fala", "desordem verbal", "dificuldade de comunicação", "perda de linguagem"],
    "afastar": ["remover", "distanciar", "separar", "dispersar", "eliminar"],
    "afável": ["amável", "gentil", "cordial", "simpático", "educado"],
    "afazeres": ["tarefas", "ocupações", "trabalhos", "responsabilidades", "afazeres diários"],
    "afecção": ["doença", "condição", "problema", "distúrbio", "sintoma"],
    "afeição": ["carinho", "afeto", "amor", "amorosidade", "simpatia"],
    "afeiçoar-se": ["apaixonar-se", "sentir afeto", "gostar", "amar", "adotar"],
    "afeito": ["habituado", "acostumado", "adaptado", "familiar", "iniciado"],
    "afeminado": ["feminino", "delicado", "sensível", "afeminado", "frágil"],
    "aferição": ["medição", "verificação", "avaliação", "análise", "checagem"],
    "aferir": ["medir", "verificar", "avaliar", "checar", "inspecionar"],
    "afeta": ["influencia", "mexe", "modifica", "atinge", "prejudica"],
    "afetação": ["artificialidade", "simulação", "fingimento", "pretenção", "exagero"],
    "afetar": ["influenciar", "modificar", "prejudicar", "alterar", "impactar"],
    "afetivo": ["emocional", "sentimental", "amoroso", "carinhoso", "passional"],
    "afeto": ["carinho", "amor", "ternura", "cuidado", "amizade"],
    "afetuoso": ["carinhoso", "amoroso", "dócil", "meigo", "sensível"],
    "affair": ["romance", "relacionamento", "caso", "história", "envolvimento"],
    "afilhada": ["padrinha", "filha de consideração", "madrinha", "comadre", "mentora"],
    "afilhado": ["padrinho", "filho de consideração", "mentorado", "comigo", "tutorado"],
    "afiliação": ["filiação", "adesão", "afirmação", "conexão", "pertencimento"],
    "afim": ["semelhante", "similar", "ligado", "relacionado", "próximo"],
    "afinal": ["por fim", "finalmente", "consequentemente", "em última análise", "por último"],
    "afinar": ["ajustar", "harmonizar", "regular", "compor", "modificar"],
    "afinaria": ["afinar", "ajustaria", "harmonizaria", "modificaria", "regularia"],
    "afinco": ["esforço", "dedicação", "vontade", "determinação", "emprego"],
    "afinidade": ["similaridade", "relação", "semelhança", "conexão", "sintonia"],
    "afins": ["semelhantes", "relacionados", "conexos", "sintônicos", "similares"],
    "afirmação": ["declaração", "asseveração", "afirmação", "asseveração", "dizer"],
    "afirmar": ["dizer", "asseverar", "declarar", "reconhecer", "confirmar"],
    "afirmará": ["declarará", "asseverará", "dirá", "reconhecerá", "confirmará"],
    "afirmo": ["digo", "confirmo", "reconheço", "assevero", "declaro"],
    "aflição": ["angústia", "sofrimento", "dor", "tristeza", "preocupação"],
    "aflige": ["preocupa", "angustia", "incomoda", "perturba", "desespera"],
    "afligir": ["preocupar", "angustiar", "incomodar", "perturbar", "turbular"],
    "aflito": ["ansioso", "preocupado", "desesperado", "aflito", "turbado"],
    "aflorar": ["surgir", "aparecer", "manifestar-se", "emergir", "desabrochar"],
    "afluente": ["rival", "tributário", "confluente", "fiscal", "rival"],
    "afluído": ["fluído", "desaguado", "corrente", "passando", "fluindo"],
    "afoito": ["arrojado", "audaz", "ousado", "impetuoso", "corajoso"],
    "afônica": ["sem voz", "rouca", "sem som", "sem capacidade vocal", "muda"],
    "afônico": ["sem voz", "mudo", "sem som", "sem fala", "sem expressão vocal"],
    "afora": ["exceto", "fora", "além de", "salvo", "fora de"],
    "aforismo": ["máxima", "ditado", "provérbio", "sentença", "pensamento"],
    "afortunado": ["sortudo", "próspero", "rico", "feliz", "afortunado"],
    "afronta": ["insulto", "desrespeito", "humilhação", "ofensa", "provocação"],
    "afrontosa": ["insultante", "desrespeitosa", "provocadora", "desafiante", "atrevida"],
    "afrontoso": ["insultante", "desrespeitoso", "provocador", "atrevido", "desafiador"],
    "afugentar": ["espantar", "afastar", "repelir", "dispersar", "expulsar"],
    "afundar": ["mergulhar", "submergir", "afogar", "afundar", "submergir"],
    "agem": ["atuam", "comportam-se", "procedem", "reagem", "agem"],
    "agenda": ["calendário", "programa", "cronograma", "horário", "tabela"],
    "agente": ["representante", "intermediário", "funcionário", "operador", "agente"],
    "agentivo": ["relativo ao agente", "ativo", "executor", "agente", "agente"],
    "agilidade": ["rapidez", "velocidade", "destreza", "eficiência", "agilidade"],
    "agilizar": ["acelerar", "facilitar", "otimizar", "dinamizar", "agilizar"],
    "agiotar": ["emprestar dinheiro a juros altos", "explorar financeiramente", "agenciar", "agiotar", "agiotar"],
    "agir": ["atuar", "proceder", "comportar-se", "agir", "agir"],
    "agitação": ["movimento", "excitação", "agitação", "agitação", "agitação"],
    "agitado": ["nervoso", "inquieto", "excitado", "agitado", "agitado"],
    "aglomeração": ["multidão", "concentração", "acúmulo", "aglomerado", "aglomeração"],
    "aglutinar": ["unir", "agrupar", "concentrar", "juntar", "aglutinar"],
    "agnóstico": ["não crente", "cético", "ateu", "agnóstico", "agnóstico"],
    "agonia": ["sofrimento", "aflição", "angústia", "agonia", "agonia"],
    "agoureiro": ["mau presságio", "preditor de infortúnios", "agoureiro", "agoureiro", "agoureiro"],
    "agouro": ["presságio", "preságio", "augúrio", "agouro", "agouro"],
    "agraciado": ["abençoado", "favorecido", "privilegiado", "agraciado", "agraciado"],
    "agraciar": ["abençoar", "favorecer", "privilegiar", "agraciar", "agraciar"],
    "agradar": ["satisfazer", "contentar", "encantar", "agradar", "agradar"],
    "agradável": ["prazeroso", "agradável", "encantador", "agradável", "agradável"],
    "agradecer": ["expressar gratidão", "reconhecer", "agradecer", "agradecer", "agradecer"],
    "agrário": ["rural", "agrícola", "campestre", "agrário", "agrário"],
    "agravante": ["agravador", "piorador", "complicador", "agravante", "agravante"],
    "agravar": ["piorar", "intensificar", "aumentar", "agravar", "agravar"],
    "agravo": ["recurso", "protesto", "contestação", "agravo", "agravo"],
    "agredi": ["ofendi", "insultei", "atropelado", "agredi", "agredi"],
    "agregado": ["juntado", "unido", "acrescentado", "agregado", "agregado"],
    "agregar": ["unir", "juntar", "acrescentar", "agregar", "agregar"],
    "agremiação": ["associação", "sociedade", "clube", "agremiação", "agremiação"],
    "agressão": ["ataque", "violência", "ofensa", "agressão", "agressão"],
    "agressivo": ["violento", "hostil", "agressivo", "agressivo", "agressivo"],
    "agressores": ["atacantes", "agressores", "ofensores", "agressores", "agressores"],
    "agreste": ["rude", "selvagem", "rústico", "agreste", "agreste"],
    "agricultura": ["agronomia", "cultivo", "lavroura", "agricultura", "agricultura"],
    "agrotóxico": ["pesticida", "veneno agrícola", "agrotóxico", "agrotóxico", "agrotóxico"],
    "agrupamento": ["concentração", "reunião", "agregação", "agrupamento", "agrupamento"],
    "agrura": ["dificuldade", "sofrimento", "adversidade", "agrura", "agrura"],
    "aguardar": ["esperar", "aguardar", "ansiar", "aguardar", "aguardar"],
    "aguardo": ["espera", "aguardo", "expectativa", "aguardo", "aguardo"],
    "águas": ["rios", "lagos", "mares", "águas", "águas"],
    "aguça": ["afiar", "aguzar", "aperfeiçoar", "aguça", "aguça"],
    "aguçado": ["afiado", "perspicaz", "aguçado", "aguçado", "aguçado"],
    "aguçar": ["afiar", "aguzar", "aperfeiçoar", "aguçar", "aguçar"],
    "agudo": ["afiado", "intenso", "agudo", "agudo", "agudo"],
    "aguentar": ["suportar", "tolerar", "resistir", "agarrar-se", "persistir"],
    "aguerrido": ["valente", "corajoso", "combativo", "bravo", "lutador"],
    "aguilhão": ["espeto", "agulha", "ferrão", "estímulo", "incitador"],
    "ah": ["ó", "ai", "ufa", "nossa", "vixe"],
    "aia": ["dama de companhia", "empregada", "assistente", "serva", "ama"],
    "ainda": ["até agora", "mesmo", "também", "por enquanto", "todavia"],
    "ainda-bem": ["felizmente", "graças a Deus", "por sorte", "ufa", "que bom"],
    "aio": ["tutor", "preceptor", "educador", "mentor", "instrutor"],
    "ajeitar": ["arrumar", "organizar", "endireitar", "alinhar", "ajustar"],
    "ajo": ["ajoelho", "curvo-me", "submeto-me", "inclino-me", "me prostro"],
    "ajuda": ["auxílio", "assistência", "amparo", "apoio", "colaboração"],
    "ajudador": ["auxiliador", "colaborador", "assistente", "parceiro", "amigo"],
    "ajudante": ["assistente", "auxiliar", "substituto", "colaborador", "ajudador"],
    "ajudar": ["auxiliar", "amparar", "colaborar", "socorrer", "assistir"],
    "ajuizamento": ["julgamento", "ponderação", "decisão", "análise", "avaliação"],
    "ajuntar": ["reunir", "juntar", "agregar", "coletar", "acumular"],
    "ajustado": ["organizado", "combinado", "alinhado", "adequado", "regulado"],
    "ajustável": ["regulável", "adaptável", "ajustado", "flexível", "configurável"],
    "ajuste": ["ajustamento", "acordo", "adaptação", "alinhamento", "regulagem"],
    "alado": ["com asas", "voador", "aéreo", "alado", "pennado"],
    "alameda": ["avenida", "caminho arborizado", "via", "rua", "trajeto"],
    "alarde": ["ostentação", "exibição", "propaganda", "apresentação", "vanglória"],
    "alarido": ["gritaria", "barulho", "confusão", "clamor", "tumulto"],
    "alarme": ["sirene", "sinal", "alerta", "aviso", "advertência"],
    "alavancar": ["impulsionar", "erguer", "elevar", "estimular", "fomentar"],
    "alçada": ["altura", "nível", "competência", "posição", "patamar"],
    "alcançar": ["atingir", "chegar", "conseguir", "obter", "alcançar"],
    "alcance": ["extensão", "distância", "raio", "medida", "possibilidade"],
    "alçar": ["erguer", "levantar", "elevar", "suspender", "alavancar"],
    "alcateia": ["matilha", "bando", "grupo de lobos", "tropa", "ajuntamento"],
    "alcatrão": ["piche", "betume", "resíduo", "substância preta", "massa asfáltica"],
    "alcova": ["quarto", "aposento", "recanto", "dormitório", "câmara"],
    "alcoviteira": ["fofoqueira", "intermediária", "mediadora amorosa", "mexeriqueira", "casamenteira"],
    "alcoviteiro": ["fofoqueiro", "intermediário", "mediador amoroso", "mexeriqueiro", "casamenteiro"],
    "alcunha": ["apelido", "epíteto", "sobrenome", "designação", "cognome"],
    "aldeão": ["camponês", "morador de aldeia", "habitante rural", "rústico", "vilarejo"],
    "aldeia": ["vila", "povoado", "comunidade", "lugarejo", "arraial"],
    "aleatoriedade": ["casualidade", "imprevisibilidade", "acaso", "contingência", "eventualidade", "ocorrência", "acidente", "vicissitude", "imprevisto", "indeterminação", "desordem", "entropia", "incerteza"],
    "aleatório": ["acidental", "imprevisível", "casual", "contingente", "eventual", "fortuito", "incerto", "duvidável", "instável", "arbitrário", "imprevisto", "inesperado", "ocorrente", "inesperado", "aleatório"],
    "alega": ["afirma", "declara", "diz", "sustenta", "assevera", "argumenta", "justifica", "apresenta", "exponde", "menciona", "cita", "aponta", "invoca", "relata", "apresenta"],
    "alegação": ["argumento", "justificativa", "defesa", "declaração", "afirmação", "exposição", "apresentação", "argumentação", "argumento", "alegamento", "alegação"],
    "alegar": ["argumentar", "justificar", "afirmar", "declarar", "expor", "apresentar", "invocar", "citar", "mencionar", "apontar", "referir", "dizer", "relatar", "apontar", "alegar"],
    "alego": ["afirmo", "declaro", "digo", "sustento", "assevero", "argumento", "justifico", "apresento", "exponho", "menciono", "cito", "aponto", "invoco", "relato", "aponto"],
    "alegoria": ["parábola", "metáfora", "símbolo", "representação", "figura de linguagem", "imagem", "apólogo", "fábula", "figura literária", "alegoria"],
    "alegórico": ["simbolista", "metafórico", "figurativo", "representativo", "abstrato", "metafórico", "alegórico"],
    "alegre": ["feliz", "contente", "jovial", "animado", "sorridente", "bem-disposto", "radiante", "alegre"],
    "alegria": ["felicidade", "contentamento", "júbilo", "satisfação", "prazer", "regozijo", "entusiasmo", "ânimo", "alegria"],
    "aleijado": ["deficiente", "inválido", "incapacitado", "impossibilitado", "mutilado", "deficiente físico", "aleijado"],
    "aleivosia": ["traição", "falsidade", "deslealdade", "infidelidade", "duplicidade", "traição", "aleivosia"],
    "aleivoso": ["traidor", "falso", "desleal", "infiel", "duplicado", "traiçoeiro", "aleivoso"],
    "aleluia": ["glória", "louvor", "exaltação", "adoração", "gratidão", "aleluia"],
    "além": ["mais distante", "ultrapassando", "fora de", "para além de", "acima de", "além"],
    "além da medida": ["excessivamente", "demasiadamente", "exageradamente", "desmesuradamente", "além da conta", "além da medida"],
    "além de": ["além disso", "para além de", "fora de", "acima de", "além de"],
    "além disso": ["além do mais", "para além disso", "fora isso", "além disso"],
    "alento": ["ânimo", "coragem", "vigor", "força", "energia", "impulso", "alento"],
    "alerta": ["aviso", "advertência", "atenção", "cuidado", "sinal", "alerta"],
    "alfa": ["primeiro", "inicial", "primário", "fundamental", "alfa"],
    "alfândega": ["aduana", "posto de controle", "ponto de fiscalização", "alfândega"],
    "alfarrábio": ["livro antigo", "obra rara", "manuscrito", "livro raro", "alfarrábio"],
    "alforje": ["bolsa", "saco", "mochila", "carteira", "alforje"],
    "algarismo": ["dígito", "número", "símbolo numérico", "algoritmo", "algarismo"],
    "algazarra": ["barulho", "confusão", "tumulto", "gritaria", "alvoroço", "algazarra"],
    "algibeira": ["bolso", "pochete", "bolsinha", "carteira", "algibeira"],
    "algo": ["coisa", "item", "objeto", "assunto", "algo"],
    "algoritmo": ["procedimento", "método", "processo", "sistema", "algoritmo"],
    "algoz": ["carrasco", "executor", "torturador", "algoz"],
    "algozes": ["carrascos", "executores", "torturadores", "algozes"],
    "alguém": ["pessoa", "indivíduo", "ser humano", "alguém"],
    "algum": ["determinado", "certo", "específico", "algum"],
    "algum tempo": ["algum período", "algum intervalo", "algum espaço de tempo", "algum tempo"],
    "alguma": ["determinada", "certa", "específica", "alguma"],
    "alguns": ["determinados", "certos", "específicos", "alguns"],
    "algures": ["em algum lugar", "em algum ponto", "em algum local", "algures"],
    "alheia": ["estranha", "externa", "desconhecida", "alheia"],
    "alheio": ["estranho", "externo", "desconhecido", "alheio"],
    "alhures": ["em outro lugar", "em outro ponto", "em outro local", "alhures"],
    "ali": ["lá", "aí", "aqui", "ali"],
    "aliado": ["parceiro", "companheiro", "cúmplice", "aliado"],
    "aliás": ["porém", "entretanto", "contudo", "no entanto", "todavia", "mas", "por outro lado", "ainda assim", "aliás"],
    "alicerçamento": ["fundação", "baseamento", "estruturação", "alicerceamento", "alicerçamento"],
    "alicerce": ["fundamento", "base", "suporte", "fundação", "alicerce"],
    "aliciamento": ["incitação", "indução", "persuasão", "convencimento", "aliciamento"],
    "aliciar": ["seduzir", "persuadir", "induzir", "convencer", "aliciar"],
    "alienação": ["desvinculação", "afastamento", "distanciamento", "alienação"],
    "alienado": ["desvinculado", "afastado", "distante", "alienado"],
    "alienar": ["desvincular", "afastar", "distanciar", "alienar"],
    "alienaria": ["alienação", "desvinculação", "afastamento", "alienaria"],
    "alienígena": ["extraterrestre", "extraterrestre", "alienígena"],
    "alijamento": ["exclusão", "marginalização", "afastamento", "alijamento"],
    "alijar": ["excluir", "marginalizar", "afastar", "alijar"],
    "alimária": ["alimentação", "nutrição", "sustento", "alimária"],
    "alimentoso": ["nutritivo", "sustentador", "alimentar", "alimentoso"],
    "alínea": ["parágrafo", "inciso", "item", "alínea"],
    "alinhar": ["arrumar", "organizar", "alocar", "alinhar"],
    "alinhar-se": ["alistar-se", "alocar-se", "alistar-se", "alinhar-se"],
    "alisado": ["suavizado", "nivelado", "polido", "alisado"],
    "alívio": ["consolo", "alívio", "alívio"],
    "alma": ["espírito", "essência", "psique", "alma"],
    "almeja": ["deseja", "aspira", "quer", "almeja"],
    "almejado": ["desejado", "almejado", "almejado"],
    "almejante": ["desejante", "aspirante", "almejante"],
    "almejar": ["desejar", "aspirar", "querer", "almejar"],
    "almoço": ["refeição", "jantar", "lanche", "almoço"],
    "alocação": ["distribuição", "atribuição", "designação", "alocação"],
    "alocado": ["designado", "atribuído", "distribuído", "alocado"],
    "alocar": ["designar", "atribuir", "distribuir", "alocar"],
    "alocução": ["discurso", "fala", "pronunciamento", "alocução"],
    "alpendre": ["varanda", "terraço", "pátio", "alpendre"],
    "alta": ["elevada", "superior", "alta"],
    "altamente": ["muito", "intensamente", "altamente"],
    "altaneiro": ["orgulhoso", "soberbo", "altivo", "altaneiro"],
    "alteração": ["modificação", "mudança", "variação", "alteração"],
    "alterar": ["modificar", "mudar", "transformar", "alterar"],
    "altercação": ["discussão", "debate", "conflito", "altercação"],
    "alteridade": ["outrem", "outro", "diferente", "alteridade"],
    "alternado": ["intercalado", "alternativo", "alternado"],
    "alternância": ["variação", "mudança", "alternância"],
    "alternativa": ["opção", "escolha", "alternativa"],
    "alternativo": ["opcional", "substituto", "alternativo"],
    "altíssimo": ["extremamente alto", "superlativo", "altíssimo"],
    "altivez": ["orgulho", "dignidade", "altivez"],
    "altivíssimo": ["extremamente altivo", "altivíssimo"],
    "altivo": ["orgulhoso", "soberbo", "altivo"],
    "alto": ["elevado", "grande", "alto"],
    "altruísmo": ["generosidade", "solidariedade", "benevolência", "altruísmo"],
    "altruísta": ["generoso", "benevolente", "solidário", "caridoso", "filantrópico", "humanitário", "desinteressado", "compassivo", "benevolente", "solidário"],
    "alucinação": ["ilusão", "delírio", "fantasia", "visão", "quimera", "miragem", "devaneio", "alucinatório", "alucinado"],
    "alucinatório": ["ilusório", "fantástico", "imaginário", "quimérico", "irreal", "surreal", "fantasmagórico", "alucinante", "alucinógeno"],
    "alude": ["refere-se", "menciona", "cita", "faz referência", "alude a", "evoca", "sugere", "insinua", "alusão"],
    "aludido": ["mencionado", "referido", "citado", "aludido", "indicado", "evocado", "sugerido", "insinuado", "alusão"],
    "aludir": ["referir", "mencionar", "citar", "fazer referência", "evocar", "sugerir", "insinuar", "alusão"],
    "alumiar": ["iluminar", "clarear", "esclarecer", "iluminar-se", "acender", "brilhar", "reluzir", "alumiar-se"],
    "aluno": ["estudante", "discente", "aprendiz", "pupilo", "educando", "alunado", "aprendiz", "discente"],
    "alusão": ["referência", "menção", "citação", "insinuação", "evocação", "sugestão", "alusão", "aludido"],
    "alusivo": ["referencial", "indicativo", "sugestivo", "evocativo", "insinuante", "aludido", "alusão"],
    "alva": ["branca", "pálida", "clara", "luminosa", "brilhante", "alvo", "alvo", "alvo"],
    "alvejado": ["atingido", "ferido", "golpeado", "acertado", "alvo", "alvo", "alvo"],
    "alvíssaras": ["recompensa", "prêmio", "gratificação", "bônus", "alvo", "alvo", "alvo"],
    "alvissareiro": ["portador de boas notícias", "mensageiro", "anunciador", "alvo", "alvo", "alvo"],
    "alvitre": ["opinião", "sugestão", "conselho", "parecer", "proposta", "alvo", "alvo", "alvo"],
    "alvo": ["destino", "objetivo", "meta", "fim", "propósito", "alvo", "alvo", "alvo"],
    "alvorada": ["amanhecer", "aurora", "nascer do sol", "alvorada", "alvo", "alvo", "alvo"],
    "alvorecer": ["amanhecer", "aurora", "nascer do sol", "alvorada", "alvo", "alvo", "alvo"],
    "alvorecido": ["clareado", "iluminado", "esclarecido", "alvo", "alvo", "alvo"],
    "alvoroço": ["agitação", "tumulto", "confusão", "barulho", "burburinho", "alvo", "alvo", "alvo"],
    "amabilidade": ["gentileza", "cortesia", "educação", "polidez", "delicadeza", "amável", "amável", "amável"],
    "amada": ["querida", "estimada", "adorada", "preciosa", "amada", "amável", "amável", "amável"],
    "amado": ["querido", "estimado", "adorado", "precioso", "amado", "amável", "amável", "amável"],
    "amadurecer": ["maturar", "enrijecer", "fortalecer", "aperfeiçoar", "amadurecer", "amável", "amável", "amável"],
    "amálgama": ["mistura", "fusão", "combinação", "mescla", "amálgama", "amável", "amável", "amável"],
    "amalgamar": ["fundir", "misturar", "combinar", "mesclar", "amalgamar", "amável", "amável", "amável"],
    "amanhasse": ["preparasse", "organizar-se", "planejasse", "arrumasse", "amanhasse", "amável", "amável", "amável"],
    "amante": ["parceiro", "companheiro", "cônjuge", "namorado", "amante", "amável", "amável", "amável"],
    "amar": ["adorar", "estimular", "apreciar", "cuidar", "amar", "amável", "amável", "amável"],
    "amarelo": ["dourado", "mostarda", "canário", "ouro", "amarelo", "amável", "amável", "amável"],
    "amarescente": ["desbotado", "descolorido", "pálido", "desvanecido", "amarescente", "amável", "amável", "amável"],
    "amargo": ["ácido", "azedo", "picante", "ranzinza", "amargo", "amável", "amável", "amável"],
    "amargura": ["tristeza", "desgosto", "decepção", "mágoa", "amargura", "amável", "amável", "amável"],
    "amargurado": ["triste", "desgostoso", "abatido", "melancólico", "amargurado", "amável", "amável", "amável"],
    "amaricado": ["envelhecido", "curado", "fermentado", "fermentado", "amaricado", "amável", "amável", "amável"],
    "amásia": ["relacionamento extraconjugal", "romance paralelo", "amásia", "amável", "amável", "amável"],
    "amasiado": ["coabitado", "convivido", "juntado", "amasiado", "amável", "amável", "amável"],
    "amassado": ["amarrotado", "enrugado", "vincado", "esmagado", "misturado", "acostumado", "derrotado", "barrento", "amassadura"],
    "amável": ["afável", "agradável", "gentil", "amigável", "educado", "cortês", "simpático", "carinhoso", "atencioso"],
    "amazona": ["guerreira", "cavaleira", "combatente", "lutadora", "cavaleira amazona", "mulher guerreira", "mulher cavaleira"],
    "ambas": ["as duas", "as duas partes", "as duas coisas", "ambas as opções", "ambas as alternativas"],
    "ambição": ["desejo", "aspiração", "cobiça", "vontade", "intenção", "objetivo", "meta", "anelo", "ânsia"],
    "ambicioso": ["cobiçoso", "desejoso", "aspirante", "arrojado", "audacioso", "ousado", "determinado", "empreendedor", "visionário"],
    "ambiência": ["atmosfera", "clima", "ambiente", "mood", "aura", "cultura", "contexto", "cenário", "ambiente envolvente"],
    "ambiente": ["meio ambiente", "ecossistema", "clima", "atmosfera", "contexto", "espaço", "local", "área", "ambiente social"],
    "ambiguidade": ["incerteza", "confusão", "dúvida", "equívoco", "imprecisão", "indefinição", "indeterminação", "insegurança", "irresolução"],
    "ambíguo": ["duplo", "confuso", "incerto", "vago", "impreciso", "indefinido", "inseguro", "equívoco", "polissêmico"],
    "ambivalência": ["ambiguidade", "confusão", "dúvida", "equívoco", "hesitação", "indefinição", "insegurança", "irresolução", "vacilação"],
    "ambivalente": ["ambíguo", "dúbio", "confuso", "equívoco", "incerto", "impreciso", "indeterminado", "contraditório", "paradoxal"],
    "ambos": ["os dois", "as duas partes", "os dois elementos", "as duas opções", "ambas as alternativas", "ambas as escolhas"],
    "ambulante": ["itinerante", "vagabundo", "errante", "nômade", "móvel", "peregrino", "transitório", "móvel", "ambulante"],
    "ameaça": ["perigo", "risco", "ameaço", "intimidação", "ameaçamento", "ameaçador", "ameaçante", "ameaçador", "ameaçoso"],
    "ameaçar": ["intimidar", "perigar", "riscar", "ameaçar", "ameaçar", "ameaçar", "ameaçar", "ameaçar", "ameaçar"],
    "ameaçara": ["intimidara", "perigara", "riscara", "ameaçara", "ameaçara", "ameaçara", "ameaçara", "ameaçara", "ameaçara"],
    "amealhar": ["acumular", "recolher", "arrecadar", "coletar", "juntar", "angariar", "recolher", "recolher", "recolher"],
    "amedrontado": ["assustado", "apavorado", "medroso", "temeroso", "aterrorizado", "assustado", "apavorado", "medroso", "temeroso"],
    "amém": ["assim seja", "que assim seja", "que seja", "que aconteça", "que se realize", "que se concretize", "que se cumpra", "que se faça", "que se realize"],
    "amena": ["agradável", "suave", "amável", "agradável", "amável", "agradável", "amável", "agradável", "amável"],
    "amenizar": ["suavizar", "atenuar", "mitigar", "aliviar", "diminuir", "amenizar", "suavizar", "atenuar", "mitigar"],
    "ameno": ["suave", "agradável", "amável", "agradável", "amável", "agradável", "amável", "agradável", "amável"],
    "amesquinhado": ["desprezado", "humilhado", "rebaixado", "depreciado", "desvalorizado", "rebaixado", "humilhado", "desprezado", "depreciado"],
    "amido": ["polissacarídeo", "carboidrato", "amilopectina", "amilo", "amilopectina", "amilopectina", "amilopectina", "amilopectina", "amilopectina"],
    "amiga": ["companheira", "camarada", "amiga", "amiga", "amiga", "amiga", "amiga", "amiga", "amiga"],
    "amigo": ["companheiro", "camarada", "amigo", "amigo", "amigo", "amigo", "amigo", "amigo", "amigo"],
    "amistoso": ["amigável", "cordial", "afável", "simpático", "amável", "amigável", "cordial", "afável", "simpático"],
    "amiudamente": ["frequentemente", "habitualmente", "costumeiramente", "regularmente", "frequentemente", "habitualmente", "costumeiramente", "regularmente", "frequentemente"],
    "amiúde": ["frequentemente", "habitualmente", "costumeiramente", "regularmente", "frequentemente", "habitualmente", "costumeiramente", "regularmente", "frequentemente"],
    "amizade": ["companheirismo", "camaradagem", "amizade", "amizade", "amizade", "amizade", "amizade", "amizade", "amizade"],
    "amnésia": ["esquecimento", "perda de memória", "lapsos de memória", "esquecimento", "perda de memória", "lapsos de memória", "esquecimento", "perda de memória", "lapsos de memória"],
    "amoldado": ["adaptado", "ajustado", "modelado", "moldado", "conformado", "ajustável", "personalizado", "configurado", "formatado"],
    "amolentado": ["suavizado", "amaciado", "atenuado", "relaxado", "suavizado", "amolecido", "amolecido", "suavizado", "amaciado"],
    "amolentar": ["suavizar", "amolecer", "atenuar", "relaxar", "suavizar", "amolecer", "amolecer", "suavizar", "amaciado"],
    "amontoar": ["acumular", "empilhar", "agrupar", "acumular", "agrupar", "empilhar", "amontoar", "acumular", "empilhar"],
    "amor": ["afeto", "carinho", "paixão", "afeição", "ternura", "desejo", "sentimento", "coração", "cuidado"],
    "amor-próprio": ["autoestima", "autoconfiança", "autovalorização", "autorespeito", "autocuidado", "autovalor", "autorespeito", "autocuidado", "autovalor"],
    "amoral": ["imoral", "não ético", "sem moral", "sem princípios", "sem ética", "sem valores", "sem princípios", "sem ética", "sem valores"],
    "amorfo": ["sem forma", "sem estrutura", "indefinido", "sem contorno", "sem forma definida", "sem estrutura", "indefinido", "sem contorno", "sem forma definida"],
    "amorosa": ["afetuosa", "carinhosa", "ternurenta", "afetuosa", "carinhosa", "ternurenta", "afetuosa", "carinhosa", "ternurenta"],
    "amorosidade": ["afetuosidade", "carinhosidade", "ternura", "afeto", "carinho", "ternura", "afeto", "carinho", "ternura"],
    "amoroso": ["afetuoso", "carinhoso", "ternurento", "afetuoso", "carinhoso", "ternurento", "afetuoso", "carinhoso", "ternurento"],
    "amostra": ["exemplo", "modelo", "amostra", "exemplo", "modelo", "amostra", "exemplo", "modelo", "amostra"],
    "amparar": ["ajudar", "auxiliar", "socorrer", "assistir", "apoiar", "sustentar", "amparar", "ajudar", "auxiliar"],
    "ampare": ["ajude", "auxilie", "socorra", "assista", "apoie", "sustente", "ampare", "ajude", "auxilie"],
    "amparo": ["apoio", "assistência", "ajuda", "suporte", "proteção", "sustentação", "amparo", "apoio", "assistência"],
    "amplexo": ["abraço", "aperto", "aperto de mão", "abraço", "aperto", "aperto de mão", "abraço", "aperto", "aperto de mão"],
    "ampliar": ["aumentar", "expandir", "crescer", "alargar", "estender", "expandir", "crescer", "alargar", "estender"],
    "amplificado": ["aumentado", "expandido", "crescido", "alargado", "estendido", "expandido", "crescido", "alargado", "estendido"],
    "amplificar": ["aumentar", "expandir", "crescer", "alargar", "estender", "expandir", "crescer", "alargar", "estender"],
    "amplitude": ["extensão", "largura", "dimensão", "tamanho", "escala", "capacidade", "envergadura", "proporção", "ampliação"],
    "amplo": ["grande", "extenso", "vastos", "amplitude", "espaçoso", "ampla", "dilatado", "alargado", "generoso"],
    "amputação": ["corte", "secação", "extirpação", "remoção", "ablação", "dissecação", "desmembramento"],
    "amuado": ["mole", "irritado", "aborrecido", "triste", "murcho", "melancólico", "desanimado", "deprimido"],
    "amuar": ["irritar", "aborrecer", "magoar", "entristecer", "chatear", "desgostar", "desencorajar", "magoar", "entristecer"],
    "anacrônica": ["antiquada", "desatualizada", "passada", "arcaica", "ultrapassada", "dissociada", "retro", "fora de moda"],
    "anacrônico": ["antiquado", "obsoleto", "arcaico", "passado", "desatualizado", "retro", "ultrapassado", "fora de moda"],
    "anacronismo": ["desatualização", "obsolescência", "incongruência", "arcaísmo", "retrocesso", "erro temporal", "desfasamento"],
    "anais": ["registros", "livros", "memórias", "documentos", "arquivos", "históricos", "crônicas", "relatórios"],
    "analfabeto": ["iletrado", "sem instrução", "inculto", "não escolarizado", "instrução insuficiente", "sem leitura", "sem educação"],
    "analisa": ["examina", "avalia", "observa", "estuda", "pesquisa", "analisa", "compreende", "interpreta"],
    "analisados": ["examinados", "observados", "estudados", "avaliados", "inspecionados", "pesquisados", "explorados", "diagnosticados"],
    "analisar": ["examinar", "avaliar", "observar", "estudar", "pesquisar", "avaliar", "inspecionar", "diagnosticar", "observar"],
    "analisasse": ["examinasse", "avaliar-se", "estudasse", "inspecionasse", "observasse", "pesquisasse", "estudasse"],
    "analise": ["exame", "avaliação", "estudo", "análise", "observação", "inspeção", "investigação", "avaliação", "pesquisa"],
    "análise": ["exame", "estudo", "avaliação", "investigação", "inspeção", "observação", "pesquisa", "diagnóstico"],
    "analítica": ["racional", "metódica", "precisa", "objetiva", "técnica", "detalhada", "científica", "crítica", "minuciosa"],
    "analítico": ["racional", "metódico", "preciso", "objetivo", "técnico", "detalhado", "científico", "crítico", "minucioso"],
    "análoga": ["semelhante", "parecida", "equivalente", "comparável", "afim", "compatível", "similar", "correspondente"],
    "analogamente": ["semelhantemente", "de modo similar", "de maneira comparável", "de forma semelhante", "de forma correspondente", "igualmente", "da mesma forma"],
    "analogia": ["semelhança", "comparação", "equivalência", "paralelismo", "relação", "correspondência", "conexão", "comparação"],
    "analógico": ["semelhante", "equivalente", "correspondente", "similar", "afim", "relacionado", "comparável", "paralelo"],
    "análogo": ["semelhante", "similar", "comparável", "correspondente", "equivalente", "relacionado", "compatível"],
    "anamnese": ["histórico médico", "diagnóstico", "relato clínico", "entrevista", "consulta", "histórico de saúde", "análise médica"],
    "ananás": ["abacaxi", "fruta tropical", "carambola", "fruto da família das bromeliáceas"],
    "anarquia": ["desordem", "caos", "confusão", "desorganização", "rebelião", "subversão", "tumulto", "desgoverno", "baderna"],
    "anárquico": ["caótico", "desordenado", "sem controle", "sem lei", "desorganizado", "desgovernado", "rebeldia", "subversivo"],
    "anátema": ["maldição", "execrável", "maldição", "condenação", "imprecado", "desagrado", "desavença", "detestável"],
    "ancenúbio": ["matrimônio", "casamento", "união", "aliança", "conjugalidade", "casamento arranjado", "aliança formal"],
    "ancestrais": ["antepassados", "antecessores", "ancestrais", "progenitores", "precursores", "antecedentes", "avós", "bisavós"],
    "ancestral": ["antepassado", "progenitor", "genitor", "ancestral", "anterior", "predecessor", "antecessor", "fundador"],
    "ancestralidade": ["herança", "tradição", "origem", "linhagem", "genealogia", "raiz", "patrimônio genético", "origem histórica"],
    "anciã": ["idosa", "velha", "sénior", "senil", "madura", "avó", "anciã", "velhinha"],
    "ancião": ["idoso", "velho", "sénior", "experiente", "anterior", "senil", "avô", "ancião", "venerável"],
    "ancorar": ["fixar", "prender", "amarrar", "atacar", "anexar", "ligar", "fundear", "segurar"],
    "andados": ["andados", "viajados", "percorridos", "trilhados", "explorados", "caminhados", "avançados"],
    "andar": ["caminhar", "perambular", "ir", "mover-se", "deslocar-se", "passear", "circular", "trilhar"],
    "andarão": ["irão", "caminharão", "deslocar-se-ão", "se moverão", "avançarão", "se deslocarão"],
    "andarei": ["caminharei", "irei", "me moverei", "viajarei", "trilharei", "me deslocarei"],
    "andássemos": ["percorressemos", "caminhássemos", "viajássemos", "nos deslocássemos", "avançássemos"],
    "andávamos": ["percorriamos", "caminhávamos", "viajávamos", "nos deslocávamos", "avançávamos"],
    "andemos": ["caminhemos", "viajemos", "nos movamos", "trilhamos", "percorremos"],
    "anedota": ["piada", "história", "conto", "narrativa", "brincadeira", "historieta", "gag", "engraçado"],
    "anel": ["argola", "anel de dedo", "banda", "ferragem", "volta", "círculo", "giro"],
    "anelar": ["desejar", "ansiar", "querer", "sonhar", "almejar", "ansiar", "aspirar"],
    "anelo": ["desejo", "ânsia", "aspiração", "vontade", "ansiedade", "almejo"],
    "anexar": ["adicionar", "incorporar", "incluir", "juntar", "agregar", "anexar", "ligar", "agregar"],
    "anexo": ["adicional", "incorporado", "anexado", "agregado", "adicionada", "acrescentado"],
    "anfibologia": ["ambiguidade", "confusão", "dupla interpretação", "erro de linguagem", "imprecisão"],
    "anfitriã": ["hospedeira", "recepcionista", "mestre de cerimônias", "organizador", "organizador de evento"],
    "anfitrião": ["hospedeiro", "anfitriã", "recepcionista", "mestre de cerimônias", "organizador", "responsável"],
    "angariar": ["obter", "captar", "arrecadar", "conseguir", "recolher", "garimpar", "recolher"],
    "angelical": ["divino", "celestial", "angélico", "puro", "santo", "etérico", "cósmico", "celestial"],
    "angústia": ["sofrimento", "dor", "aflição", "desespero", "angústia", "preocupação", "tensão", "ansiedade", "desassossego", "angustiante"],
    "angustiado": ["preocupado", "aflito", "ansioso", "desesperado", "abatido", "perturbado", "nervoso", "desolado", "triste", "desesperançado"],
    "anhanga": ["tempestade", "tormenta", "guincho", "rugido", "barulho"],
    "anil": ["cor azul", "azul", "tonalidade azul", "cor azulada"],
    "animação": ["entusiasmo", "exaltação", "energia", "vitalidade", "alegria", "vigor", "fervor", "dinamismo", "entusiasmo", "euforia"],
    "animada": ["alegre", "vibrante", "excitada", "entusiasmada", "animada", "jovial", "exuberante", "festa", "energizada"],
    "animadamente": ["alegremente", "entusiasticamente", "excitadamente", "vivazmente", "energicamente", "com entusiasmo", "com energia"],
    "animado": ["entusiasmado", "alegre", "vibrante", "exuberante", "empolgado", "eufórico", "energizado", "excitante", "radiante"],
    "animal": ["bestial", "bruto", "selvagem", "feroz", "irracional", "instintivo", "não humano", "creatura", "quadrúpede"],
    "animália": ["fauna", "bicharada", "seres vivos", "seres irracionais", "mundo animal"],
    "anímico": ["mental", "emocional", "psíquico", "espiritual", "psicológico", "interior", "psíquico"],
    "animismo": ["crença", "mitologia", "fé", "religião", "espiritualismo", "credo", "superstição", "entidades espirituais"],
    "ânimo": ["vigor", "energia", "determinação", "força", "vitalidade", "coragem", "ímpeto", "disposição", "gás", "ânimo"],
    "animosidade": ["hostilidade", "rancor", "ressentimento", "inimizade", "ódio", "antagonismo", "raiva", "agressividade", "animosidade"],
    "aninhado": ["enrolado", "acocorado", "recolhido", "encolhido", "curvado", "ajuntado", "protegido", "compactado"],
    "aninhar": ["encolher", "recolher", "ajuntar-se", "fazer ninho", "aninhavar-se", "enrolar-se", "se recolher", "se abrigar"],
    "aniquilador": ["destruidor", "exterminador", "eliminador", "devastador", "desintegrador", "extirpador", "matador", "destruído"],
    "aniquilar": ["destruir", "exterminar", "eliminar", "extinguir", "apagar", "devastar", "eliminar", "reduzir", "apagar"],
    "anistia": ["perdão", "absolvição", "perdão judicial", "liberação", "remissão", "libertação", "absolvição", "relaxamento"],
    "aniversário": ["comemoração", "data festiva", "celebração", "aniversário", "festa de aniversário", "festividade", "aniversário"],
    "anjo mau": ["demônio", "diabo", "espírito maligno", "ser do mal", "entidade maligna", "ser demoníaco"],
    "ano": ["ano civil", "período de 365 dias", "ano fiscal", "ciclo anual", "ano de vida", "ciclo de 12 meses"],
    "anódino": ["inofensivo", "insignificante", "inexpressivo", "fácil", "não prejudicial", "não doloroso", "suave", "neutro"],
    "anojado": ["envergonhado", "arrependido", "culpado", "humilhado", "desonrado", "envergonhado", "penitente"],
    "anomalia": ["irregularidade", "defeito", "desvio", "anormalidade", "distúrbio", "falha", "imperfeição", "inconformidade", "defeito"],
    "anômalo": ["irregular", "estranho", "incomum", "anormal", "bizarro", "extravagante", "atípico", "fora do comum", "desviante"],
    "anomia": ["falta de normas", "desordem", "caos social", "anomalia", "incoerência", "ausência de lei", "desorganização"],
    "anonimato": ["desconhecido", "incógnito", "anônimo", "sem nome", "sem identidade", "oculto", "sem identificação"],
    "anônimo": ["desconhecido", "incógnito", "sem nome", "sem identificação", "anônima", "não identificado", "invisível"],
    "anormal": ["irregular", "extraordinário", "estranho", "incomum", "atípico", "anômalo", "improvável", "incorreto"],
    "anoso": ["envelhecido", "antigo", "gastado", "usado", "decrépito", "velho", "gasto", "usado"],
    "anseia": ["deseja", "almeja", "quer", "ansiou", "aspira", "deseja muito", "espera", "toma", "anseia"],
    "anseie": ["deseje", "almeje", "queira", "aspire", "espera", "ansiosamente espera", "deseje profundamente"],
    "anseio": ["desejo", "vontade", "aspiração", "ânsia", "desejo profundo", "ambição", "fome", "ansiedade"],
    "ansiar": ["desejar", "almejar", "ansiar", "ter pressa", "esperar intensamente", "ter vontade de", "desejar muito"],
    "ansiedade": ["preocupação", "aflição", "medo", "nervosismo", "tensão", "desejo", "ansioso", "preocupação constante"],
    "ansiosa": ["preocupada", "ansiosa", "aflita", "agitada", "nervosa", "impaciente", "ansiosa", "impulsiva", "nervosa"],
    "ansioso": ["preocupado", "aflito", "nervoso", "ansioso", "inquieto", "tenso", "angustiado", "apreensivo", "nervoso", "tenso"],
    "antagônico": ["oposto", "contrário", "adversário", "inimigo", "opositor", "contraposto", "dissidente", "hostil", "antagonista"],
    "antagonismo": ["oposição", "contrariedade", "inimizade", "hostilidade", "disputa", "conflito", "rivalidade", "oposição", "discordância"],
    "antagonista": ["oponente", "adversário", "rival", "inimigo", "opositor", "contrário", "oponente", "concorrente", "adversário"],
    "ante": ["antes", "antes de", "previamente", "previamente a", "anteriormente"],
    "antecedência": ["antecedência", "prioridade", "anterioridade", "antecedente", "presteza", "urgência"],
    "antecedente": ["anterior", "precedente", "anterior", "próprio anterior", "predecessor"],
    "antecessor": ["predecessor", "anterior", "previamente", "passado", "anterior", "antecedente"],
    "antemão": ["de antemão", "antes", "previamente", "com antecedência", "logo", "antes do tempo"],
    "anteparo": ["proteção", "defesa", "obstáculo", "barreira", "obstáculo", "impedimento"],
    "antepassado": ["passado", "anterior", "histórico", "sucedido", "precedente"],
    "anteponha": ["colocar antes", "colocar antes de", "preceder", "pôr antes", "anteceder"],
    "anterior": ["passado", "previamente", "prévio", "antecedente", "anterior", "precedente", "predecessor"],
    "anterioridade": ["anterioridade", "precedência", "anterior", "prioridade"],
    "antes": ["anteriormente", "antes de", "anterior", "previamente", "antes que", "antes que o esperado"],
    "anteveem": ["prevêem", "antecipam", "prevê", "preveem", "presagem", "adivinham"],
    "antevi": ["percebi", "antevi", "percebi", "compreendi", "vislumbrei"],
    "antevisão": ["previsão", "prever", "olhar para o futuro", "visão antecipada", "prefiguração"],
    "anti": ["contra", "oposição", "antagonista", "anti-", "antagonista"],
    "anti-inflacionário": ["que combate a inflação", "desinflacionário", "estabilizador", "anti-aumento de preços"],
    "antidemocrático": ["totalitário", "autoritário", "arbitrário", "tirânico", "ditatorial", "não democrático", "autocrático"],
    "antídoto": ["remédio", "cura", "tratamento", "remédio", "solução", "contraveneno", "contra-toxico"],
    "antiético": ["imoral", "não ético", "antiético", "corrupto", "antiético", "ilícito", "contrário à ética"],
    "antigo": ["velho", "antiquado", "arcaico", "passado", "primitivo", "doutro tempo", "arredio", "antiquíssimo"],
    "antinomia": ["contradição", "oposição", "conflito", "contrariedade", "discordância", "discrepância"],
    "antipatia": ["aversão", "repulsa", "rancor", "inimizade", "antagonismo", "desgosto", "antipatia", "hostilidade"],
    "antipático": ["desagradável", "hostil", "inamistoso", "rude", "desatencioso", "arrogante", "insensível", "irritante"],
    "antípoda": ["oposto", "contrário", "antagônico", "discrepante", "em oposição", "oposto", "lugar oposto"],
    "antiquado": ["velho", "ultrapassado", "desatualizado", "arcaico", "obsoleto", "desgastado", "superado", "passado", "defasado"],
    "antiquados": ["superados", "arcaicos", "ultrapassados", "obsoletos", "desatualizados", "defasados"],
    "antítese": ["oposição", "contradição", "inversão", "contrário", "antagonismo", "oposição direta", "oposição direta"],
    "antitético": ["oposto", "contrário", "contraditório", "inverso", "oposição direta", "antagonista", "oposição"],
    "antitóxico": ["desintoxicante", "não tóxico", "não venenoso", "curativo", "desintoxicante"],
    "antologia": ["coleção", "compilação", "reunião", "coleção de obras", "coleção de textos", "antologia literária"],
    "antológico": ["exemplar", "referencial", "de referência", "mítico", "icônico", "clássico", "notável"],
    "antônimo": ["contrário", "oposto", "inverso", "antagônico", "oposição", "contrário"],
    "antro": ["caverna", "covil", "esconderijo", "refúgio", "esconderijo"],
    "antrópico": ["humano", "da humanidade", "relacionado ao ser humano", "da natureza humana", "da vida humana"],
    "antropocentrismo": ["antropocentrismo", "visão centrada no homem", "visão de que o homem é o centro", "humanocentrismo"],
    "antropófago": ["canibal", "devorador de carne humana", "comediante humano", "come-gente", "comediante"],
    "antropologia": ["ciência social", "estudo da humanidade", "estudo dos povos", "estudo dos seres humanos", "ciência antropológica"],
    "antropomórfico": ["humanizado", "semelhante ao homem", "com características humanas", "humaniforme", "em forma humana"],
    "anuência": ["aprovação", "consentimento", "autorização", "aceitação", "concordância", "permissão"],
    "anuente": ["que consente", "que aprova", "que permite", "que autoriza", "que aceita", "consentidor"],
    "anuir": ["consentir", "aprovar", "aceitar", "permitir", "concordar", "aceder", "autorizar"],
    "anuncio": ["divulgação", "propaganda", "publicidade", "anúncio", "mensagem", "aviso", "comunicação"],
    "ao": ["em", "na", "para", "à", "em direção a", "para"],
    "ao passo que": ["enquanto", "à medida que", "durante", "simultaneamente"],
    "ao redor": ["em volta", "ao redor de", "circundante", "nas proximidades", "em torno de", "cercado"],
    "aonde": ["para onde", "aonde", "em direção a", "onde"],
    "apagada": ["extinta", "desligada", "apaga", "desaparecida", "sumida", "extinguida", "apagada"],
    "apaixonado": ["entusiástico", "emocionado", "aflito", "intenso", "encantado", "enamorado", "romântico"],
    "apanágio": ["privilégio", "direito", "favor", "benefício", "atributo"],
    "apanhar": ["catar", "pegar", "recolher", "capturar", "arrebatar", "agarrar"],
    "apanharia": ["pegar", "capturaria", "agarraria", "recolheria", "cataría", "faria"],
    "aparamentar": ["equipar", "arranjar", "fornecer", "tratar", "prover", "enfeitar", "preparar"],
    "aparato": ["equipamento", "instrumentos", "utensílios", "armamento", "apetrechos", "fornecimento"],
    "aparecer": ["mostrar-se", "surgir", "manifestar-se", "aparecer", "vir a tona", "revelar-se"],
    "aparecerão": ["surgirão", "mostraram-se", "revelarão", "mostrar-se-ão", "surgirão"],
    "apareci": ["surgi", "mostrei-me", "revelar-me", "apareci", "surgi"],
    "aparelhos": ["equipamentos", "dispositivos", "instrumentos", "máquinas", "utensílios", "ferramentas"],
    "aparência": ["aspecto", "visual", "imagem", "semblante", "externo", "fisionomia", "aspecto exterior"],
    "aparente": ["visível", "perceptível", "manifesto", "externo", "visível", "óbvio"],
    "aparentemente": ["visivelmente", "em aparência", "de forma visível", "externamente", "aos olhos"],
    "apartado": ["isolado", "distante", "separado", "afastado", "divorciado", "isolado"],
    "apartar": ["separar", "distanciar", "dividir", "isolar", "afastar", "separar-se", "separar"],
    "apartidário": ["não partidário", "neutro", "independente", "sem partido", "isento"],
    "apascentar": ["alimentar", "pastar", "cuidar", "alimentar-se", "regar", "nutrir"],
    "apatia": ["indiferença", "desinteresse", "falta de entusiasmo", "desânimo", "insensibilidade", "letargia", "apatia"],
    "apático": ["indiferente", "desinteressado", "apatético", "insensível", "desanimado", "falta de emoção"],
    "apaziguar": ["acalmar", "tranquilizar", "serenar", "aliviar", "apaziguar", "suavizar", "acelerar", "acalma"],
    "apedeuta": ["ignorante", "inculto", "não educado", "não instruído", "pessoa sem formação"],
    "apegar": ["segurar", "agarrar", "prender", "capturar", "apossar-se", "tirar", "segurar"],
    "apego": ["afeto", "carinho", "grande apego", "afeto", "vínculo", "ligação"],
    "apelado": ["recorrido", "procurado", "clamado", "pedido", "requisitado", "apelante"],
    "apelante": ["requerente", "que apela", "proponente", "peticionário"],
    "apelar": ["solicitar", "recorrer", "pedir", "protestar", "reclamar", "implorar"],
    "apelido": ["nome", "surnome", "diminutivo", "título", "sobrenome", "identificação"],
    "apelo": ["chamado", "protesto", "reclamação", "pedido", "proposta", "invocação", "clamor"],
    "apenas": ["somente", "exclusivamente", "apenas", "único", "somente", "apenas"],
    "apêndice": ["anexo", "acréscimo", "suplemento", "adendo", "inciso", "post-scriptum"],
    "apenso": ["juntado", "anexado", "acrescentado", "adicionado", "ligado", "acrescentado"],
    "aperceber-se": ["notar", "perceber", "observar", "entender", "sentir", "perceber-se"],
    "aperfeiçoamento": ["melhoria", "aperfeiçoamento", "evolução", "refinamento", "atualização", "acréscimo", "progresso"],
    "aperfeiçoar": ["melhorar", "refinar", "aperfeiçoar", "aperfeiçoar", "melhorar"],
    "apesar": ["embora", "não obstante", "contudo", "apesar de", "mas"],
    "apesar de": ["não obstante", "mesmo com", "a despeito de", "ainda que", "embora"],
    "apessoado": ["com aparência humana", "com forma humana", "humanizado", "com características humanas"],
    "apetecer": ["desejar", "querer", "ansiar", "almejar", "ter desejo de"],
    "apetecido": ["desejado", "querido", "almejado", "ansiado", "desejável"],
    "apetrechar": ["equipar", "fornecer", "prover", "armar", "arranjar", "preparar", "montar", "adornar", "completar", "instalar"],
    "apetrechos": ["utensílios", "ferramentas", "equipamento", "instrumentos", "materiais", "aparatos", "acessórios", "artifícios", "suprimentos"],
    "apiedar-se": ["compadecer", "lamentar", "sentir pena", "ter compaixão", "ter dó", "ter misericórdia", "entristecer-se"],
    "aplacar": ["acalmar", "suavizar", "aliviar", "tranquilizar", "atenuar", "serenar", "mitigar", "amortecer", "diminuir", "apaziguar"],
    "aplausível": ["merecedor de aplausos", "digno de aplausos", "louvável", "reconhecível", "admirável", "aprovável", "honroso"],
    "aplicabilidade": ["utilidade", "praticabilidade", "efetividade", "viabilidade", "relevância", "adequação", "aplicação prática"],
    "aplicação": ["uso", "emprego", "utilização", "implementação", "execução", "aplicação prática", "realização", "exercício", "uso prático"],
    "aplicada": ["diligente", "esforçada", "dedicada", "atenta", "comprometida", "exercitada", "prática", "concreta", "focada"],
    "aplicar": ["utilizar", "empregar", "usar", "colocar em prática", "exercer", "executar", "impor", "implementar", "realizar"],
    "aplicável": ["utilizável", "adequado", "apropriado", "próprio", "relevante", "apto", "viável", "eficaz", "prático", "funcional"],
    "apocalipse": ["catástrofe", "fim do mundo", "destruição", "tragédia", "calamidade", "devastação", "desastre", "ruína", "cataclismo"],
    "apocalíptico": ["catastrófico", "destrutivo", "caótico", "trágico", "extremo", "alarmante", "terrível", "de fim do mundo", "sombrio"],
    "apócrifa": ["falsa", "falsificada", "fictícia", "não autêntica", "ilegítima", "não genuína", "não verdadeira"],
    "apócrifo": ["falso", "fraudulento", "não autêntico", "fictício", "não verídico", "inverídico", "ilegítimo"],
    "apodadura": ["disciplina", "rigor", "estrito", "tensão", "pressão", "força", "controle", "apertamento"],
    "apoderar": ["tomar posse", "assumir", "apropriar-se", "capturar", "dominar", "possuir", "se apoderar de", "incorporar", "ocupar"],
    "apogeu": ["auge", "pico", "cume", "clímax", "zênite", "máximo", "topo", "ponto alto", "extremo"],
    "apoiar": ["sustentar", "ajudar", "assistir", "amparar", "fortalecer", "auxiliar", "dar suporte", "reforçar", "amparar"],
    "apoiava": ["sustentava", "ajudava", "assistia", "amparava", "fortalecia", "reforçava", "auxiliava", "dava suporte"],
    "apoio": ["suporte", "assistência", "ajuda", "sustentação", "auxílio", "reforço", "subsidiação", "acolhimento", "proteção"],
    "apologético": ["defensivo", "justificador", "explicativo", "argumentativo", "doutrinador", "explanatório", "de defesa"],
    "apologia": ["defesa", "justificação", "exaltação", "exposição", "argumentação", "sustentação", "defensiva", "elogio"],
    "apologista": ["defensor", "justificador", "seguidor", "advogado", "partidário", "adepto", "sustentador", "defensor"],
    "apólogo": ["fábula", "parábola", "história", "conto", "narrativa", "história moral", "exemplo", "conto moral"],
    "apontamento": ["nota", "observação", "comentário", "indicação", "registro", "anotação", "detalhe", "consideração", "observação"],
    "apontar": ["indicar", "mostrar", "indicar", "salientar", "marcar", "destacar", "sinalizar", "indicar", "refletir"],
    "apoplexia": ["derrame cerebral", "insulto cerebral", "acidente vascular cerebral", "embolia cerebral", "paralisia"],
    "apor": ["explicar", "argumentar", "insistir", "dizer", "colocar", "afirmar", "debater", "apresentar", "sugerir"],
    "aporia": ["contradição", "dúvida", "impasse", "dilema", "incerteza", "enigma", "questão difícil", "obstáculo"],
    "aportar": ["chegar", "alcançar", "atingir", "atingir o destino", "tomar destino", "aproximar", "desembocar"],
    "aporte": ["contribuição", "investimento", "ajuda", "acréscimo", "aporte financeiro", "apoio", "contribuição"],
    "após": ["depois", "posteriormente", "em seguida", "após", "a seguir", "depois de", "subsequente"],
    "aposento": ["quarto", "câmara", "dormitório", "habitação", "cômodo", "residência", "casa", "lar"],
    "apostasia": ["renúncia", "deserção", "abandono", "heresia", "traição", "rejeição", "desistência", "abandono da fé"],
    "apóstata": ["renegado", "desertor", "herege", "traidor", "descrente", "abjurador", "renunciante"],
    "apostila": ["manual", "livro didático", "guia", "nota de estudo", "documento de estudo", "folha de estudos"],
    "aposto": ["anexo", "adendo", "complemento", "acréscimo", "suplemento", "apêndice", "informação adicional"],
    "apóstolo": ["discípulo", "missionário", "seguidor", "emissário", "pregador", "evangelista", "missionário"],
    "apoteose": ["clímax", "culminância", "apogeu", "grande êxito", "glória", "exaltação", "pico"],
    "apoteótico": ["triunfal", "glorioso", "grandioso", "espetacular", "brilhante", "exaltado", "heroico"],
    "apraz": ["agrada", "satisfez", "agrada", "satisfaz", "delicia", "contenta", "encanta", "prazeroso"],
    "aprazado": ["satisfeito", "contente", "agradado", "deliciado", "contentado", "agraciado"],
    "aprazível": ["agradável", "delicioso", "satisfatório", "gostoso", "aprazente", "confortante", "suave", "aprazado"],
    "aprecar": ["deteriorar", "enfraquecer", "comprometer", "desgastar", "danificar", "rebaixar"],
    "apreciação": ["avaliação", "avaliação crítica", "percepção", "julgamento", "apreço", "avaliação", "valor", "observação"],
    "apreciador": ["admirador", "crítico", "avaliador", "julgador", "entusiasta", "entendedor", "apreciador"],
    "apreciar": ["avaliar", "examinar", "gostar", "admirar", "apreciar", "avaliar", "reconhecer", "perceber"],
    "apreciarmos": ["avaliarmos", "apreciarmos", "examinarmos", "avaliar", "admirar", "reconhecer"],
    "apreço": ["estima", "valorização", "carinho", "apreço", "gratidão", "respeito", "admiração"],
    "apreender": ["capturar", "conquistar", "agarrar", "prender", "recolher", "apreender", "acatar"],
    "apreendessem": ["capturassem", "recolhessem", "prendessem", "agarrassem", "tomassem", "conquistassem"],
    "apreendido": ["capturado", "preso", "detido", "agarrado", "conquistado", "recolhido"],
    "apreensão": ["medo", "temor", "ansiedade", "dúvida", "inquietação", "preocupação", "desconfiança"],
    "apreensivo": ["ansioso", "preocupado", "nervoso", "inquieto", "ansioso", "receoso", "apreensivo"],
    "apregoar": ["proclamar", "divulgar", "anunciar", "afirmar", "gritar", "declamar", "publicar"],
    "aprender": ["estudar", "compreender", "entender", "absorver", "apreender", "ensinar", "conhecer", "captar"],
    "aprendizado": ["ensino", "educação", "desenvolvimento", "instrução", "formação", "conhecimento", "sabedoria"],
    "aprendizagem": ["ensino", "formação", "estudo", "conhecimento", "instrução", "educação", "treinamento"],
    "apresentação": ["exposição", "mostra", "desfile", "relato", "performance", "exibição", "introdução"],
    "apresentada": ["mostrada", "exposta", "demonstrada", "revelada", "introduzida", "proposta", "divulgada"],
    "apresentados": ["expostos", "demonstrados", "revelados", "introduzidos", "mostrados", "propostos"],
    "apresentando": ["mostrando", "expondo", "demonstrando", "revelando", "introduzindo", "propondo", "divulgando"],
    "apresentar": ["mostrar", "demonstrar", "expor", "introduzir", "exibir", "relatar", "propor", "exibir"],
    "apresentávamos": ["expondo", "demonstrando", "mostrando", "revelando", "introduzindo", "exibindo"],
    "apresentável": ["adequado", "apto", "apropriado", "exibível", "apresentado", "mostrável", "digno"],
    "apressar": ["acelerar", "apressar", "afobar", "agitar", "apurando", "preparar"],
    "apresso": ["urgente", "acelero", "agito", "urgência"],
    "apressuramento": ["pressão", "urgência", "agitação", "velocidade"],
    "apressurar": ["acelerar", "pressionar", "agitar", "afobar"],
    "aprimorado": ["melhorado", "refinado", "aperfeiçoado", "evoluído", "avançado"],
    "aprimoramento": ["aperfeiçoamento", "melhoria", "evolução", "aperfeiçoação", "refinamento"],
    "aprimorar": ["aperfeiçoar", "melhorar", "refinar", "avançar", "evoluir"],
    "aprisco": ["gaiola", "cercado", "abrigo", "canil", "refúgio"],
    "apropriado": ["adequado", "apropriado", "adequado", "apropriado"],
    "apropriar": ["tomar", "possuir", "apoderar", "capturar", "apropriar-se", "adquirir"],
    "apropriar-se": ["tomar", "possuir", "apoderar-se", "capturar", "apropriar"],
    "aprouver": ["aceitar", "aprovar", "concordar", "validar", "permitir", "verificar", "consentir"],
    "aprovação": ["consentimento", "autorização", "permissão", "validação", "aceitação", "suporte"],
    "aproveitador": ["explorador", "interesseiro", "cambista", "ganancioso", "ausente de ética", "aproveitador"],
    "aproveitar": ["usufruir", "tirar proveito", "se beneficiar", "extrair", "aproveitar", "usufruir"],
    "aproveite": ["faça uso", "aproveite", "colha", "utilize", "usufrua"],
    "aprovisionado": ["fornecido", "suprido", "disponibilizado", "reservado", "provisionado", "estocado"],
    "aprovisionar": ["fornecer", "suprir", "reservar", "abastecer", "provisionar", "disponibilizar"],
    "aproximar": ["chegar", "acercar", "atrair", "conectar", "aproximar-se", "juntar"],
    "aprumar": ["endireitar", "ajustar", "alinhar", "arrumar", "equilibrar", "regular"],
    "apta": ["habilitada", "capaz", "qualificada", "competente", "proficiente", "adequada", "preparada"],
    "aptidão": ["habilidade", "competência", "capacidade", "qualidade", "proeficiência", "especialização"],
    "apto": ["qualificado", "preparado", "habilitado", "competente", "apto", "habilidoso"],
    "apuração": ["investigação", "inquérito", "análise", "exame", "verificação", "inspeção", "levantamento"],
    "apurado": ["investigado", "analisado", "verificado", "conferido", "inspecionado", "esclarecido"],
    "apurar": ["investigar", "examinar", "verificar", "esclarecer", "conferir", "analisar", "inspecionar", "checar", "avaliar", "esclarecer"],
    "aquela": ["aquela coisa", "essa", "a citada", "a mencionada", "a indicada", "a especificada"],
    "aquele": ["aquele homem", "aquele objeto", "o citado", "o mencionado", "o indicado", "o especificado"],
    "aquém": ["abaixo", "inferior", "menos", "para baixo", "em baixo", "por baixo"],
    "aqui": ["neste local", "neste lugar", "nesse ponto", "nessa região", "neste local"],
    "aquiescência": ["concordância", "consentimento", "aceitação", "aprovação", "assentimento", "submissão"],
    "aquiescer": ["concordar", "aceitar", "aprovar", "consentir", "submeter-se", "anuir"],
    "aquisição": ["compra", "obtenção", "adquirir", "incorporação", "obtenção", "alcançar", "recebimento"],
    "ar": ["atmosfera", "ambiente", "vento", "brisa", "aire", "aragem"],
    "arábico": ["árabe", "relativo à língua árabe", "do Oriente Médio", "árabe clássico", "linguagem árabe"],
    "arado": ["implemento agrícola", "ferramenta de cultivo", "utensílio agrícola", "instrumento de lavra"],
    "arador": ["agricultor", "lavrador", "trabalhador rural", "fazendeiro", "cultivador"],
    "aragem": ["brisa", "vento suave", "corrente de ar", "ar fresco", "aragem"],
    "aranha": ["arácnido", "inseto", "bicho", "aranhóide"],
    "arar": ["plantar", "semear", "cultivar", "lavourar", "regar"],
    "arara": ["ave tropical", "papagaio", "psitacídeo", "arara-azul", "arara-vermelha"],
    "arauto": ["mensageiro", "heraldista", "anunciante", "portador", "mensageiro de novidades"],
    "arbitrária": ["autoritária", "despótica", "imparcial", "autocrática", "não fundamentada", "injusta"],
    "arbitrariamente": ["de forma autoritária", "sem base", "sem critério", "sem justificativa", "de forma injusta"],
    "arbitrariedade": ["autoritarismo", "injustiça", "despotismo", "imparcialidade", "tiranismo", "arbitrarismo"],
    "arbitrário": ["autoritário", "sem razão", "imparcial", "injusto", "indefinido", "desprovido de critérios"],
    "arbítrio": ["decisão", "opção", "preferência", "juízo", "critério", "livre-arbítrio", "escolha"],
    "árbitro": ["juiz", "referee", "moderador", "avaliador", "examinador", "juiz de campo", "juiz de partida"],
    "arborizado": ["com árvores", "florestado", "verde", "vegetado", "paisagístico"],
    "arbusto": ["arbóreo", "planta", "vegetação", "arbusto lenhoso", "mato"],
    "arcabouço": ["estrutura", "fundamento", "esqueleto", "estruturação", "estrutura básica", "base", "construção"],
    "arcaico": ["antigo", "pré-histórico", "passado", "primitivo", "arcaizante", "vintage", "retrô"],
    "arcar": ["suportar", "carregar", "suportar peso", "encarar", "enfrentar", "assumir", "responsabilizar-se"],
    "archote": ["tocha", "vela", "lume", "lanterna", "fogo", "iluminação portátil"],
    "árdego": ["ardente", "intenso", "feroz", "violento", "de calor extremo", "intenso"],
    "ardil": ["estratagema", "trapaça", "fraude", "manipulação", "artifício", "engano", "farsa"],
    "ardiloso": ["astuto", "enganador", "fraudulento", "manhoso", "caviloso", "truculento", "perverso"],
    "ardor": ["paixão", "fervor", "intensidade", "sentimento forte", "desejo", "ímpeto", "calor", "desconforto"],
    "arduamente": ["dificilmente", "com esforço", "com dificuldade", "penosamente", "exaustivamente", "incansavelmente"],
    "areia": ["grãos", "material arenoso", "terra fina", "sólo", "sedimento", "pó de terra"],
    "aresta": ["bordo", "margem", "canto", "extremo", "ponta", "límite", "canto afiado"],
    "arfar": ["respirar com dificuldade", "ofegar", "suspirar", "respiração difícil", "exalar", "soltar ar"],
    "argo": ["intenção", "sentido", "objetivo", "finalidade", "direção"],
    "argola": ["anel", "círculo", "anel de metal", "laço", "aro", "argola metálica"],
    "argúcia": ["inteligência", "astúcia", "perspicácia", "habilidade", "sagacidade", "acuidade", "percepção"],
    "argucioso": ["perspicaz", "inteligente", "astuto", "sagaz", "esperto", "mestre"],
    "arguição": ["questão", "interrogação", "pergunta", "questionamento", "inquérito", "consulta", "prova"],
    "arguido": ["acusado", "suspeito", "réu", "denunciado", "interrogado"],
    "arguir": ["questionar", "interrogar", "perguntar", "afirmar", "alegar", "propor", "discutir"],
    "argumentar": ["discutir", "justificar", "razão", "apresentar razões", "defender", "fundamentar", "disputar"],
    "argumentaria": ["discutiria", "debateria", "defenderia", "justificaria", "debatia", "proporia"],
    "argumento": ["razão", "justificação", "explicação", "defesa", "fundamento", "discussão", "pretexto"],
    "arguto": ["perspicaz", "astuto", "inteligente", "habilidoso", "sagaz", "esperto"],
    "árido": ["seco", "deserto", "estéril", "inóspito", "impróprio", "duro", "pouco fértil"],
    "aríete": ["bode", "animal de combate", "bicho", "cabra", "maça de ataque", "animal"],
    "arisca": ["agitada", "suspeita", "desconfiada", "esquiva", "brava", "desconfiada", "assustada"],
    "arisco": ["desconfiado", "bravo", "agressivo", "irritado", "repelente", "antipático", "pouco sociável"],
    "aristocracia": ["elite", "nobreza", "classe alta", "alto escalão", "classe privilegiada", "nobreza"],
    "aristocrata": ["nobre", "membro da alta sociedade", "nobre de linhagem", "membro da aristocracia", "senhor"],
    "aristocrático": ["nobre", "elevado", "de classe alta", "distinto", "sofisticado", "altivo"],
    "armário": ["guarda-roupa", "closet", "armário de armazenamento", "móvel", "gaveteiro", "compartimento"],
    "armazém": ["depósito", "loja", "almoxarifado", "armazém de mercadorias", "depósito comercial"],
    "armistício": ["trégua", "cessação de hostilidades", "acordo de paz", "suspensão de guerra"],
    "aroma": ["cheiro", "odor", "perfume", "fragrância", "essência", "odor agradável"],
    "arquétipo": ["modelo", "prototipo", "ideal", "exemplo", "paradigma", "exemplar"],
    "arquipélago": ["conjunto de ilhas", "ilha em grupo", "sistema de ilhas", "formação de ilhas"],
    "arquitetar": ["planejar", "projetar", "conceber", "desenhar", "elaborar", "formular", "planejar"],
    "arquivo": ["documento", "registro", "dossiê", "pastas", "documentação", "contabilidade"],
    "arrabalde": ["bairro", "periferia", "subúrbio", "zona rural", "área afastada"],
    "arraial": ["vila", "localidade", "povoado", "bairro", "comunidade", "colônia"],
    "arraigada": ["firmada", "enraizada", "profunda", "estabelecida", "implantada"],
    "arraigado": ["profundo", "fixado", "enraizado", "consolidado", "imparcial", "permanente"],
    "arranho": ["corte", "rasgo", "arranhão", "machucado", "ferida", "lesão"],
    "arranque": ["início", "começo", "início abrupto", "ponto de partida", "início rápido"],
    "arrasa": ["destruir", "derrubar", "arruinar", "quebrar", "dilacerar"],
    "arrasar": ["destruir", "devastar", "deteriorar", "destruir completamente"],
    "arrazoado": ["explicação", "justificação", "defesa", "argumentação", "raciocínio", "motivo"],
    "arrazoo": ["justificação", "argumento", "raciocínio", "explicação", "defesa"],
    "arrear": ["descarregar", "tirar", "remover", "abaixar", "descarregar"],
    "arrebatado": ["emocionado", "agitado", "intenso", "impressionado", "excitado"],
    "arrebatador": ["emocionante", "impressionante", "deslumbrante", "extremamente encantador", "intenso"],
    "arrebatar": ["tirar", "roubar", "arrancar", "capturar", "remover", "roubo"],
    "arrecadar": ["coletar", "recolher", "acumular", "capturar", "guardar"],
    "arredio": ["desconfiado", "agitado", "assustado", "despistado", "ansioso"],
    "arrefecer": ["esfriar", "acalmar", "reduzir", "diminuir", "amortecer"],
    "arrefecimento": ["esfriamento", "redução", "calmante", "diminuição"],
    "arreliado": ["irritado", "aborrecido", "chateado", "incomodado", "aflito"],
    "arremede": ["imitar", "copiar", "fazer imitação", "simular", "reproduzir"],
    "arremendar": ["consertar", "reparar", "remendar", "ajustar", "corrigir"],
    "arrendar": ["alugar", "ceder", "alocar", "emprestar", "locar", "alugar terrenos"],
    "arrendatário": ["inquilino", "locatário", "usuário", "morador", "tomador de aluguel"],
    "arrepender": ["desistir", "lamentar", "desejar não ter feito", "se lamentar"],
    "arrependimento": ["remorso", "culpa", "desculpa", "penitência", "lamentação"],
    "arretado": ["incrível", "fantástico", "extraordinário", "sensacional", "fabuloso", "excelente"],
    "arriar": ["abaixar", "recolher", "soltar", "deixar cair", "deter"],
    "arriaria": ["diminuiria", "reduziria", "baixaria", "recolheria", "abaixaria"],
    "arrimo": ["apoio", "sustento", "fundamento", "suporte", "amparo", "base"],
    "arrogância": ["prepotência", "soberba", "altivez", "orgulho", "desdém", "vaidade"],
    "arrogante": ["prepotente", "soberbo", "orgulhoso", "presunçoso", "desdenhoso"],
    "arrogar": ["atribuir-se", "reivindicar", "afirmar", "usurpar", "pretender", "proclamar"],
    "arroio": ["ribeirão", "riacho", "córrego", "ribeira", "águas", "curso d'água"],
    "arrojado": ["ousado", "audacioso", "valente", "corajoso", "destemido", "ousadia"],
    "arrojo": ["coragem", "audácia", "ousadia", "ousado", "valentia", "destemor"],
    "arrolado": ["enumerado", "listado", "mencionado", "citados", "relacionados"],
    "arrolar": ["enumerar", "listar", "mencionar", "citar", "relatar", "catalogar"],
    "arromba": ["destruição", "quebra", "dano", "devastação", "agitação", "violência"],
    "arroubo": ["exaltação", "entusiasmo", "frenesi", "ânimo", "arrebato", "excesso de emoção"],
    "arruinar-se": ["destruir-se", "prejudicar-se", "arruinar", "deteriorar", "perder-se"],
    "arrumar": ["organizar", "arranjar", "ordenar", "arranjar", "dispor", "ajustar"],
    "arte": ["habilidade", "técnica", "talento", "criação", "mestre", "expressão artística"],
    "artefato": ["objeto", "instrumento", "ferramenta", "artigo", "utensílio", "produto"],
    "articulação": ["conexão", "ligação", "juntura", "coerência", "associação", "união"],
    "articulado": ["conectado", "organizado", "planejado", "coeso", "combinado", "coerente"],
    "articulam": ["conectam", "organizam", "unem", "associam", "coordenam", "planejam"],
    "articular": ["conectar", "unir", "organizar", "formular", "planejar", "coordenar"],
    "articulei": ["organizei", "planejei", "conectei", "coordenei", "estruturei"],
    "artífice": ["criador", "inventor", "trabalhador", "fabricante", "construtor", "engenheiro"],
    "artificial": ["sintético", "falso", "fabricado", "não natural", "artifício", "imitação"],
    "artifício": ["estratagema", "truque", "trapaça", "técnica", "método", "manipulação"],
    "artigo": ["item", "peça", "produto", "matéria", "objeto", "item", "componente"],
    "artimanha": ["engano", "truque", "estratagema", "farsa", "artifício", "fraude"],
    "artista": ["criador", "pintor", "músico", "performer", "designer", "produtor", "arteiro"],
    "arvorar": ["erguer", "levantar", "subir", "afirmar", "exibir", "manifestar"],
    "árvore": ["planta", "arbusto", "vegetação", "flora", "árvore frutífera", "árvore alta"],
    "asa": ["pavio", "aeródromo", "asa de ave", "projeção", "flap", "estrutura de voo"],
    "ascendência": ["origem", "ascensão", "linhagem", "ancestralidade", "tradição", "ascensão"],
    "ascendente": ["elevado", "superior", "dominante", "em ascensão", "de alto escalão"],
    "ascender": ["subir", "elevar", "alcançar", "subir", "progredir", "avançar"],
    "ascensão": ["elevação", "subida", "promoção", "crescimento", "desenvolvimento", "progresso"],
    "asceta": ["ermita", "monge", "contente com o simples", "fervoroso", "disciplinado"],
    "ascetério": ["campo de retiro", "espaço de retiro", "lugar de meditação", "lugar de isolamento"],
    "ascético": ["espiritual", "disciplinado", "simplista", "de renúncia", "moderado"],
    "ascetismo": ["disciplina", "renúncia", "abnegação", "rigor", "purificação", "rejeição do luxo"],
    "asco": ["repulsa", "nojo", "desgosto", "repugnância", "aversão", "desgosto"],
    "asfixiar": ["sufocar", "estrangular", "sufocar ar", "asfixiar", "engasgar"],
    "asilo": ["abrigo", "refúgio", "lar", "casa de repouso", "santuário", "residência"],
    "asinino": ["besta", "burro", "idiota", "estúpido", "tolo", "tosco", "insensato"],
    "asnada": ["tolice", "idiotice", "baboseira", "insensatez", "tolice", "trabalho inútil"],
    "asneira": ["bobagem", "tolice", "estupidez", "besteira", "absurdo", "imprudência"],
    "asno": ["burro", "jumento", "idiota", "estúpido", "tolo", "insensato"],
    "aspecto": ["aparência", "visão", "aspecto físico", "forma", "característica", "imagem"],
    "aspectos": ["características", "detalhes", "pontos de vista", "facetas", "particularidades"],
    "aspereza": ["rigidez", "dureza", "áspero", "brusquidade", "rudeza", "intolerância"],
    "aspergir": ["spray", "molhar", "regar", "borrifar", "irrigrar", "salpicar"],
    "aspiração": ["desejo", "ambição", "objetivo", "anhelo", "vontade", "aspirante"],
    "aspirante": ["candidato", "iniciando", "novato", "noviço", "potencial", "almejador"],
    "aspirar": ["desejar", "almejar", "respirar", "sugerir", "ter como objetivo", "intentar"],
    "aspire": ["respire", "sugira", "deseje", "almeje", "pensar", "almejar"],
    "asquerosa": ["repulsiva", "nojenta", "desagradável", "repugnante", "insalubre", "sujíssima"],
    "asqueroso": ["nojento", "repulsivo", "desagradável", "repugnante", "insalubre", "nojo"],
    "assalariado": ["empregado", "trabalhador", "funcionário", "operário", "assalariado"],
    "assaltear": ["roubar", "saquear", "atacar", "agredir", "pilhar", "despojar"],
    "assar": ["cozinhar", "fazer", "preparar", "torrar", "fritar", "esquentar"],
    "assassinato": ["homicídio", "morte", "crime", "execução", "abate", "execução"],
    "assassino": ["criminoso", "homicida", "mortal", "matador", "criminoso", "perpetrador"],
    "assassinos": ["criminosos", "homicidas", "matadores", "perpetradores", "execráveis"],
    "assaz": ["bastante", "suficiente", "completamente", "muito", "consideravelmente", "muitíssimo"],
    "asseado": ["limpo", "organizado", "arrumado", "higiênico", "impecável", "puro"],
    "assecla": ["seguidor", "lacai", "vassalo", "cúmplice", "acólito", "servo"],
    "assédio": ["intimidação", "abuso", "perseguição", "agressão", "pressionamento", "violência"],
    "assegurar": ["garantir", "afirmar", "confirmar", "certificar", "assegurar", "validar"],
    "asseio": ["limpeza", "organização", "higiene", "arrumação", "limpeza", "estética"],
    "asselvajar": ["degredar", "sujar", "fazer barbaridades", "cometer excessos", "descontrolar"],
    "assembleia": ["reunião", "encontro", "congresso", "convenção", "plenária", "encontro"],
    "assentamento": ["acordo", "decisão", "assentimento", "negociação", "tomada de decisão"],
    "assentar": ["estabelecer", "fixar", "firmar", "implantar", "organizar", "iniciar"],
    "assente": ["fixado", "estabelecido", "fundado", "resolvido", "decidido"],
    "assentimento": ["acordo", "aceitação", "aprovação", "consentimento", "admissão"],
    "assentir": ["concordar", "aceitar", "aprovar", "admitir", "sancionar", "endossar"],
    "assento": ["cadeira", "poltrona", "banco", "assento", "cadeira de apoio", "local de sentar"],
    "asséptico": ["higienizado", "limpo", "sterilizado", "sem germes", "sanitário", "claro"],
    "asserção": ["afirmação", "declaração", "opinião", "oposição", "confirmação", "garantia"],
    "assertiva": ["afirmativa", "declaração", "opinião", "afirmação", "oposição", "aprovação"],
    "assertivo": ["decisivo", "afirmativo", "convincente", "claro", "resoluto", "positivo"],
    "assessor": ["consultor", "conselheiro", "assistente", "orientador", "ajudante", "facilitador"],
    "assessorado": ["assistido", "orientado", "ajudado", "consultado", "assistido"],
    "assessoria": ["consultoria", "apoio", "orientação", "suporte", "assistência"],
    "assevera": ["afirma", "decreta", "garante", "declara", "expressa", "assevera"],
    "asseverar": ["confirmar", "garantir", "afirmar", "declara", "expor", "sustentar"],
    "assexuado": ["desprovido de sexualidade", "asexual", "não sexual", "sem atrativos sexuais"],
    "assiduidade": ["frequência", "regularidade", "constância", "permanência", "assiduidade"],
    "assíduo": ["frequente", "constante", "regular", "dedicado", "assiduidade"],
    "assim": ["dessa forma", "dessa maneira", "dessa maneira", "como", "portanto", "desse jeito"],
    "assim-sendo": ["portanto", "logo", "em consequência", "dessa forma", "por isso"],
    "assimetria": ["desequilíbrio", "desproporção", "injustiça", "desarmonia", "irregularidade", "desigualdade"],
    "assimétrico": ["desigual", "irregular", "desequilibrado", "distorcido", "injusto", "incongruente"],
    "assimilação": ["integração", "absorção", "incorporação", "apreensão", "adaptação", "aculturação"],
    "assimilar": ["absorver", "integrar", "incorporar", "entender", "compreender", "adotar"],
    "assíncrono": ["não simultâneo", "não sincronizado", "dispar", "diferente", "não coordenado", "desfasado"],
    "assintomático": ["sem sintomas", "invisível", "indolente", "sem sinais", "inapresentável", "inaparente"],
    "assistência": ["ajuda", "suporte", "apoio", "assistência técnica", "acompanhamento", "assistência social"],
    "assistir": ["ver", "observar", "presenciar", "ajudar", "associar-se", "participar"],
    "assoalho": ["chão", "piso", "superfície", "soalho", "fundamento", "base"],
    "assoberbado": ["sobrecarregado", "aflito", "excessivamente ocupado", "preocupado", "atolado", "apertado"],
    "associação": ["organização", "grupo", "entidade", "parceria", "fórum", "conexão"],
    "associada": ["conectada", "unida", "ligada", "relacionada", "cooptada", "vinculada"],
    "associado": ["integrante", "membro", "coligado", "parceiro", "sócio", "filiado"],
    "associar": ["unir", "ligar", "conectar", "relacionar", "integrar", "combinar"],
    "assolar": ["devastar", "destruir", "arrasar", "deteriorar", "derrubar", "desorganizar"],
    "assumir": ["aceitar", "assumir responsabilidade", "aceitar", "tomar", "encarar", "iniciar"],
    "assunção": ["aceitação", "tomada de responsabilidade", "obrigação", "função", "atribuição", "tarefa"],
    "assunto": ["tema", "assunto", "pauta", "questão", "tópico", "problema"],
    "astral": ["espiritual", "energético", "vibracional", "mágico", "psíquico", "mental"],
    "astro": ["estrela", "corpo celeste", "luminária", "satélite", "estrela do mar", "planeta"],
    "astronauta": ["cosmonauta", "viajante espacial", "explorador do espaço", "astrónomo", "cosmólogo"],
    "astronomia": ["estudo das estrelas", "ciência celestial", "ciência do espaço", "estudo planetário", "astrologia"],
    "astronômico": ["celestial", "do espaço", "estelar", "planetário", "gigante", "cosmicamente grande"],
    "astúcia": ["habilidade", "inteligência", "astúcia", "habilidade", "espertice", "cautela"],
    "astucioso": ["esperto", "ingenioso", "artifício", "habilidoso", "astuto", "esperto"],
    "astuta": ["esperta", "inteligente", "perspicaz", "habilidosa", "ingeniosa", "inteligente"],
    "astuto": ["espertalhão", "inteligente", "artificioso", "perspicaz", "sagaz", "esperto"],
    "ata": ["documento", "registro", "memorial", "ato oficial", "relatório", "pacto"],
    "atadura": ["curativo", "bandagem", "ligadura", "envoltório", "faixa", "sutura"],
    "atalaia": ["vigilante", "sentinela", "guarda", "espião", "observador", "vigia"],
    "atarracado": ["baixo", "encolhido", "compacto", "baixo e largo", "forte", "grosso"],
    "ataviar-se": ["engalanar", "arrumar-se", "vestir-se", "adornar-se", "enfeitar-se", "decorar-se"],
    "atávico": ["ancestral", "hereditário", "primitivo", "instintivo", "ancestralidade", "histórico"],
    "atavismo": ["herança", "repetição", "resquício", "traço antigo", "comportamento herdado"],
    "até": ["até aquele ponto", "no limite", "no máximo", "completamente", "inclusive"],
    "até aquele momento": ["até então", "até aquele ponto", "neste momento", "no presente", "até agora"],
    "até lá": ["quando chegar", "no futuro", "em breve", "no momento marcado", "logo"],
    "ateia": ["não crente", "agnóstica", "sem fé", "sem crença religiosa"],
    "ateliê": ["estúdio", "oficina", "local de trabalho", "espaço artístico", "sala de arte"],
    "atemorizar": ["assustar", "aterrorizar", "medo", "amedrontar", "atemorizar", "incutir medo"],
    "atemporal": ["fora do tempo", "não datado", "intemporal", "eterno", "sempre atual", "fora de época"],
    "atenção": ["cuidado", "foco", "concentração", "interesse", "observação", "alerta"],
    "atenciosamente": ["cordialmente", "com atenção", "com carinho", "com consideração", "respeitosamente"],
    "atencioso": ["cortês", "educado", "dedicado", "cuidadoso", "amável", "carinhoso"],
    "atendam": ["ajudem", "assistem", "acolham", "servem", "auxiliam", "orientam"],
    "atendendo": ["ajudando", "auxiliando", "prestando assistência", "assistindo", "acolhendo", "respondendo"],
    "atender": ["ajudar", "assistir", "prestar serviço", "acolher", "servir", "dar suporte"],
    "atendíamos": ["auxiliávamos", "prestávamos", "ajudávamos", "acolhíamos", "oferecíamos ajuda"],
    "atendimento": ["assistência", "ajuda", "suporte", "acolhimento", "atendimento ao cliente", "serviço"],
    "atentado": ["ataque", "agressão", "violência", "tentativa de homicídio", "incidente", "ato de violência"],
    "atentamente": ["com atenção", "cuidadosamente", "detidamente", "com concentração", "observando"],
    "atentar": ["prestar atenção", "considerar", "observar", "avaliar", "prestar atenção", "focar"],
    "atento": ["alerta", "concentrado", "atencioso", "vigilante", "cuidado", "observador"],
    "atenuação": ["diminuição", "redução", "suavização", "moderação", "amenização", "alívio"],
    "atenuado": ["suavizado", "reduzido", "diminuído", "amenizado", "amenizado", "diminuído"],
    "atenuante": ["mitigador", "aliviador", "suavizante", "amenizador", "moderador", "mitigante"],
    "atenuar": ["suavizar", "diminuir", "reduzir", "amenizar", "mitigar", "moderar"],
    "ater": ["chegar", "atingir", "encontrar", "superar", "atingir"],
    "aterrorizante": ["aterrorizante", "assustador", "medonho", "horrível", "terrível", "apavorante"],
    "ateu": ["não crente", "agnóstico", "sem fé", "sem religião", "incrédulo", "não religioso"],
    "atiçar": ["incitar", "provocar", "estimular", "despertar", "agitar", "excitar"],
    "atinar": ["compreender", "perceber", "entender", "encontrar", "perceber", "notar"],
    "atinente": ["relevante", "apropriado", "pertinente", "congruente", "adequado", "direcionado"],
    "atingimento": ["alcance", "efeito", "atingir", "conquista", "realização", "execução"],
    "atingimos": ["alcançamos", "conseguimos", "executamos", "realizamos", "atingimos", "obtivemos"],
    "atingir": ["alcançar", "atingir", "superar", "conquistar", "cumprir", "atender"],
    "atingirão": ["alcançarão", "conquistarão", "atingirão", "serão capazes", "realizarão", "conseguirão"],
    "atípico": ["inusitado", "anômalo", "diferente", "irregular", "pouco usual", "fora do comum"],
    "atitude": ["comportamento", "ação", "postura", "atuação", "mentalidade", "opinião"],
    "ative": ["execute", "realize", "faça funcionar", "inicie", "comece", "ative"],
    "atividade": ["ação", "ocupação", "tarefa", "função", "atividade prática", "emprego"],
    "atividades": ["tarefas", "ocupações", "ações", "funções", "empregos", "deveres"],
    "ativismo": ["engajamento", "mobilização", "ação política", "activismo", "luta social", "defesa"],
    "ativista": ["defensor", "militante", "engajado", "participante", "agitador", "combatente"],
    "ativo": ["dinâmico", "vivo", "energético", "eficaz", "operante", "produtivo"],
    "atmosfera": ["ambiente", "clima", "ar", "atmosférico", "ambiente atmosférico", "atmosfera terrestre"],
    "ato": ["ação", "gesto", "movimento", "atividade", "procedimento", "manifestação"],
    "atônito": ["surpreso", "chocado", "perplexo", "estupefato", "boquiaberto", "maravilhado"],
    "atormentação": ["sofrimento", "aflição", "tortura", "angústia", "padecimento", "aflição mental"],
    "atormentado": ["afligido", "sofrido", "atormentado", "torturado", "preocupado", "afligido"],
    "atormentador": ["torturador", "angustiante", "aflitivo", "opressor", "assustador", "inquietante"],
    "atraente": ["charmoso", "sedutor", "bonito", "interessante", "encantador", "apetitoso"],
    "atraíamos": ["seduzíamos", "chamávamos", "encantávamos", "atraímos", "captávamos", "envolvíamos"],
    "atraiçoado": ["traído", "enganado", "desleal", "fiel", "infiel", "desleal"],
    "atraído": ["chamado", "seduzido", "convencido", "chamado", "encantado", "sugado"],
    "atrapalhar": ["interferir", "dificultar", "complicar", "atrasar", "desorganizar", "confundir"],
    "atrás": ["por trás", "retroceder", "posteriormente", "atrasado", "para trás", "em retaguarda"],
    "atrasada": ["demorada", "atrasada", "desatualizada", "retrasada", "adiada", "tardia"],
    "atrasado": ["demorado", "atrasado", "retardado", "desatualizado", "prejudicado", "retardado"],
    "atrasar": ["atrasar-se", "demorar", "postergar", "interromper", "segurar", "retrasar"],
    "atraso": ["demora", "retardo", "adiamento", "retraso", "diferimento", "postergação"],
    "através": ["por meio", "via", "com", "por", "utilizando", "atravessando"],
    "através de": ["por meio de", "usando", "com", "utilizando", "atravessando", "por intermédio de"],
    "atravessadamente": ["de forma apressada", "de maneira desordenada", "descontroladamente", "com pressa", "sem cuidado", "desorientadamente"],
    "atrelado": ["ligado", "conectado", "vinculado", "associado", "relacionado", "atado"],
    "atrevidaço": ["muito atrevido", "excessivamente ousado", "desrespeitoso", "audacioso", "impertinente", "atrevido demais"],
    "atribuição": ["tarefa", "função", "responsabilidade", "encargo", "missão", "atributo"],
    "atribuições": ["funções", "tarefas", "encargos", "responsabilidades", "atributos", "missões"],
    "atribuída": ["designada", "imposta", "dada", "concedida", "delegada", "passada"],
    "atribuído": ["designado", "imposto", "concedido", "passado", "devido", "delegado"],
    "atribuir": ["dar", "designar", "impor", "conceder", "passar", "delegar"],
    "atribulado": ["preocupado", "aflito", "sobrecarregado", "desorganizado", "atordoado", "atrapalhado"],
    "atributo": ["qualidade", "característica", "caráter", "propriedade", "aspecto", "função"],
    "atrito": ["conflito", "desentendimento", "fricção", "choque", "disputa", "desavença"],
    "atrocidade": ["barbárie", "crueldade", "violência", "abominação", "injustiça", "atrocidade moral"],
    "atrocidades": ["barbáries", "crueldades", "violências", "abusos", "injustiças", "monstruosidades"],
    "atrofiado": ["enfraquecido", "deteriorado", "debilitado", "atrofiado", "diminuto", "murchado"],
    "atrofiar": ["deteriorar", "enfraquecer", "debilitar", "reduzir", "murchar", "diminuir"],
    "atroz": ["cruel", "barbárico", "monstruoso", "terrível", "brutal", "desumano"],
    "atua": ["trabalha", "age", "executa", "realiza", "funciona", "opera"],
    "atuação": ["ação", "trabalho", "desempenho", "atividade", "função", "exercício"],
    "atuado": ["realizado", "feito", "executado", "desempenhado", "concluído", "processado"],
    "atual": ["presente", "moderno", "atualizado", "recentemente", "em curso", "contemporâneo"],
    "atualização": ["renovação", "modernização", "reformulação", "ajuste", "atualização de dados", "atualização de informações"],
    "atualizado": ["modernizado", "renovado", "ajustado", "reformulado", "atualizado", "melhorado"],
    "atualizar": ["renovar", "modernizar", "reformular", "ajustar", "atualizar dados", "atualizar informações"],
    "atualmente": ["hoje", "no momento", "agora", "atualmente falando", "no presente", "no atual momento"],
    "atuando": ["realizando", "operando", "trabalhando", "funcionando", "desempenhando", "executando"],
    "atuar": ["agir", "trabalhar", "executar", "operar", "desempenhar", "agir de forma"],
    "atuasse": ["agisse", "fizesse", "trabalhasse", "operasse", "funcionasse", "desempenhasse"],
    "aturdido": ["atordoado", "confuso", "desorientado", "tonto", "surpreendido", "abalado"],
    "audácia": ["ousadia", "coragem", "atrevimento", "audacioso", "desafio", "bravura"],
    "audaciosa": ["ousada", "arrojada", "desafiante", "corajosa", "intrépida", "valente"],
    "audacioso": ["corajoso", "ousado", "arrojado", "intrépido", "desafiante", "audacioso"],
    "audaz": ["corajoso", "ousado", "arrojado", "valente", "audacioso", "intrépido"],
    "audiência": ["sessão", "plenário", "ouvido", "reunião", "escuta", "sessão pública"],
    "auferido": ["recebido", "adquirido", "ganho", "obtido", "conquistado", "angariado"],
    "auferir": ["receber", "obter", "adquirir", "ganhar", "conquistar", "arrecadar"],
    "auge": ["pico", "clímax", "apogeu", "topo", "cúspide", "crescimento máximo"],
    "augúrio": ["presságio", "previsão", "pressentimento", "sinal", "oráculo", "augúrio favorável"],
    "augusto": ["respeitável", "nobre", "ilustre", "honrado", "digno", "grandioso"],
    "aula": ["lição", "ensino", "treinamento", "educação", "sessão", "classificação"],
    "aumenta": ["cresce", "aumenta", "expande", "eleva", "amplia", "expande"],
    "aumentado": ["expandido", "crescido", "elevar", "ampliado", "aumentado", "acrescido"],
    "aumentar": ["crescer", "expandir", "elevar", "ampliar", "incrementar", "acrescentar"],
    "aumento": ["crescimento", "expansão", "acréscimo", "elevação", "ampliação", "expansão"],
    "aura": ["campo energético", "atmosfera", "halo", "glória", "luminosidade", "vibe"],
    "auréola": ["halo", "glória", "coroa", "luz", "aura", "resplendor"],
    "auricular": ["do ouvido", "auditivo", "relativo ao ouvido", "sonoro", "auditivo", "escutável"],
    "aurora": ["alvorada", "amanhecer", "início", "primeiros raios", "luz da manhã", "começo"],
    "auscultar": ["escutar", "ouvir", "examinar", "verificar", "analisar", "investigar"],
    "ausência": ["falta", "privação", "inexistência", "não presença", "desaparecimento", "vacuidade"],
    "ausente": ["faltando", "não presente", "desaparecido", "em falta", "inexistente", "desaparecido"],
    "auspício": ["presságio", "indicação", "favor", "benesse", "indício", "sinal"],
    "auspícios": ["presságios", "indicações", "sinais", "favores", "benesses", "oráculos"],
    "auspicioso": ["favorável", "promissor", "benéfico", "positivo", "favorável", "benévolo"],
    "austera": ["rigorosa", "severa", "sóbria", "dura", "restrita", "rígida"],
    "austeridade": ["severidade", "rigor", "rigidez", "sóbrio", "restrição", "simplicidade"],
    "austero": ["severo", "rigoroso", "rígido", "restrito", "sóbrio", "distoante"],
    "autarquia": ["autossuficiência", "independência", "autonomia", "independência administrativa", "autossuficiente", "administração independente"],
    "autêntica": ["genuína", "real", "verdadeira", "legítima", "pura", "confiável"],
    "autenticado": ["verificado", "validado", "confirmado", "certificado", "homologado", "legalizado"],
    "autenticidade": ["genuinidade", "realidade", "veracidade", "legitimidade", "verificação", "originalidade"],
    "autêntico": ["genuíno", "verdadeiro", "real", "original", "legítimo", "não falsificado"],
    "auto": ["próprio", "pessoal", "individual", "autossuficiente", "autônomo", "solitário"],
    "autocomiseração": ["autopiedade", "autoindulgência", "autoapatia", "compaixão por si mesmo", "autovitimização", "autoestima baixa"],
    "autoconfiança": ["segurança", "certeza", "autoestima", "fé em si mesmo", "confiança", "convicção"],
    "autoconhecimento": ["conhecimento de si", "autoentendimento", "autocompreensão", "reflexão interna", "introspecção", "autodeterminação"],
    "autocontrole": ["controle próprio", "domínio próprio", "disciplina", "autoajuste", "controle emocional", "controle interno"],
    "autóctone": ["nativo", "originário", "autêntico", "local", "próprio da terra", "inerente"],
    "autoestima": ["amor próprio", "valorização", "autoconfiança", "orgulho de si", "dignidade", "segurança interna"],
    "automóvel": ["carro", "veículo", "automóvel", "carroceria", "carro de passeio", "veículo motorizado"],
    "autonomia": ["independência", "autossuficiência", "autodeterminação", "autogoverno", "liberdade", "autocontrole"],
    "autônomo": ["independente", "livre", "autossuficiente", "autogovernado", "sem vínculo", "autodidata"],
    "autor": ["criador", "escritor", "inventor", "originador", "responsável", "compositor"],
    "autoria": ["criação", "responsabilidade", "propriedade", "ação do autor", "autoria intelectual", "origem"],
    "autoridade": ["poder", "controle", "domínio", "influência", "liderança", "competência"],
    "autoritária": ["despótica", "opressiva", "absoluta", "autocrática", "dictatorial", "impositiva"],
    "autoritário": ["despótico", "opressor", "autocrático", "tirânico", "impositivo", "controlador"],
    "autoritarismo": ["despotismo", "tirania", "opressão", "autocracia", "controle", "dominação"],
    "autorização": ["aprovação", "permissão", "consentimento", "licença", "habilitação", "autorização formal"],
    "autos": ["documentos", "registros", "papéis", "ações", "processos", "registros oficiais"],
    "autossuficiente": ["independente", "autoalimentado", "autossustentado", "autocontido", "autossuficiência", "independente em recursos"],
    "autuação": ["imposição de multa", "penalidade", "ação legal", "processo", "infração", "indicação"],
    "autuado": ["penalizado", "multado", "processado", "notificado", "acuzado", "condenado"],
    "autuar": ["multar", "penalizar", "notificar", "processar", "acusar", "impor multa"],
    "auxiliar": ["ajudar", "assistir", "apoio", "assistir", "apoiar", "colaborar"],
    "auxiliar-se": ["ajudar-se", "assister-se", "apoiar-se", "cooperar", "colaborar", "auxiliar-se"],
    "auxilie": ["ajude", "assista", "socorra", "apóie", "coopere", "colabore"],
    "auxílio": ["ajuda", "assistência", "suporte", "socorro", "ajuste", "apoiamento"],
    "aval": ["aprovação", "garantia", "autorização", "fiança", "certificação", "apoio"],
    "avaliação": ["análise", "avaliação", "exame", "avaliação crítica", "ponderação", "julgar"],
    "avaliado": ["analisado", "avaliado", "examinado", "apreciado", "considerado", "verificado"],
    "avaliam": ["analisam", "examinam", "avaliam", "apreciam", "consideram", "verificam"],
    "avaliar": ["analisar", "examinar", "ponderar", "avaliar", "julgar", "verificar"],
    "avalie": ["analise", "examine", "aprecie", "considere", "verifique", "julgue"],
    "avalizar": ["confirmar", "aprovar", "validar", "garantir", "autenticar", "certificar"],
    "avançamento": ["progresso", "desenvolvimento", "crescimento", "evolução", "impulso", "expansão"],
    "avançar": ["progredir", "crescer", "evoluir", "expandir", "ir adiante", "seguir em frente"],
    "avançaria": ["progrediria", "cresceria", "evoluiria", "seguiria em frente", "expandiria", "prosseguiria"],
    "avante": ["para frente", "adiante", "à frente", "em direção à frente", "seguindo", "para o futuro"],
    "avarento": ["ganancioso", "mesquinho", "pegador", "coveiro", "hoarder", "mesquinho"],
    "avareza": ["ganância", "mesquinhez", "cobiça", "ambição excessiva", "egoísmo", "egoísmo materialista"],
    "avaria": ["dano", "defeito", "estrago", "dano material", "falha", "problema"],
    "avaro": ["ganancioso", "mesquinho", "coveiro", "despótico", "pequeno", "egoísta"],
    "avassalador": ["arrasador", "dominante", "forte", "incontrolável", "poderoso", "imperioso"],
    "avatar": ["imagem", "representação", "persona", "alter ego", "figura", "personagem"],
    "avejão": ["grande ave", "pássaro", "ave imponente", "animal de grande porte"],
    "avença": ["acordo", "trato", "entendimento", "pacto", "compromisso", "arranjo"],
    "avental": ["roupa de proteção", "vestimenta", "fato", "cobertura", "roupa de trabalho", "capote"],
    "aventar": ["lançar", "arremessar", "ventilar", "soprar", "discutir", "pensar sobre"],
    "aventura": ["expedição", "viagem", "experiência", "descoberta", "desafio", "emoção"],
    "aventureiro": ["explorador", "desbravador", "explorador de novos horizontes", "corajoso", "desafiador", "perigoso"],
    "averiguar": ["verificar", "investigar", "examinar", "checar", "analisar", "confirmar"],
    "aversão": ["antipatia", "repulsa", "desgosto", "desapreço", "avaliação negativa", "não gostar"],
    "avesso": ["inverso", "contrário", "oposto", "contraposição", "antônimo", "inverso completo"],
    "aviamento": ["suprimento", "equipamento", "fornecimento", "acessórios", "material de apoio", "munição"],
    "avião": ["aeronave", "avião comercial", "aeroplano", "aeromóvel", "média aeronave", "transporte aéreo"],
    "aviar": ["preparar", "arranjar", "preparar para viagem", "combinar", "provisionar", "preparar algo"],
    "aviasse": ["preparasse", "arrumasse", "organizar", "elaborar", "organizar", "compor"],
    "ávida": ["desejosa", "ansiosa", "intensa", "avidente", "sedenta", "cobiçosa"],
    "avidez": ["desejo", "ânsia", "sede", "fome", "cobiça", "desejo excessivo"],
    "avido": ["ansioso", "desejoso", "cobiçoso", "saciado", "aflito", "sedento"],
    "aviltado": ["humilhado", "desprezado", "submisso", "desvalorizado", "desprezado", "rebaixado"],
    "aviltamento": ["humilhação", "depreciação", "desvalorização", "rebaixamento", "desdém", "afronta"],
    "aviltante": ["humilhante", "desprezível", "depreciativo", "rebaixante", "miserável", "desonroso"],
    "aviltar": ["humilhar", "rebaixar", "depreciar", "desvalorizar", "desprezar", "submeter"],
    "avisar": ["informar", "alertar", "comunicar", "notificar", "avertir", "advertir"],
    "aviso": ["alerta", "notificação", "advertência", "informação", "comunicação", "aviso prévio"],
    "avistam": ["veem", "observam", "enxergam", "percebem", "olham", "detectam"],
    "avistarmos": ["vermos", "olharmos", "observarmos", "enxergarmos", "encontrarmos", "percebermos"],
    "avivar": ["animar", "agitar", "revigorar", "fortalecer", "reanimar", "energizar"],
    "avizinhamento": ["proximidade", "vizinhança", "aproximação", "circunstância", "contiguidade", "contato próximo"],
    "avocar": ["chamar", "convocar", "chamar para si", "atribuir", "instruir", "chamar para julgamento"],
    "avoengo": ["ascendência", "ancestralidade", "raiz familiar", "linhagem", "origem", "ancestral"],
    "avulso": ["isolado", "solitário", "desconectado", "fora de conjunto", "independente", "não relacionado"],
    "axe": ["machado", "ferramenta", "instrumento de corte", "martelo", "ferramenta de madeira", "cutelo"],
    "axila": ["embaixo do braço", "sulco axilar", "cavidade axilar", "área do braço", "parte inferior do braço", "do braço"],
    "axiologia": ["teoria dos valores", "estudo dos valores", "filosofia dos valores", "teoria ética", "teoria do bem", "valores humanos"],
    "axioma": ["princípio", "verdade", "afirmação", "postulado", "lei", "fundamento"],
    "azáfama": ["pressa", "agitação", "correria", "turbulência", "atividade", "aflição"],
    "azêmola": ["farinha de trigo", "farinha fina", "amido", "farinha", "resíduo de trigo", "produto de trigo"],
    "azo": ["necessidade", "urgência", "pressa", "agitação", "transtorno", "correria"],
    "azoar": ["zoar", "brincar", "trollar", "provocar", "mofar", "zombar"],
    "azougue": ["mercúrio", "substância química", "metal pesado", "elemento", "metal líquido", "azougue líquido"],
    "azul": ["cor", "tonalidade", "cor celeste", "azul marinho", "azul claro", "cor do céu"],
    //B
    "babaca": ["idiota", "imbecil", "tolo", "estúpido", "pateta", "palerma", "besta", "trouxa", "alimária", "burro"],
    "babado": ["fofoca", "novidade", "notícia", "boato", "comentário", "intriga", "mexerico", "segredo", "história", "caso"],
    "babão": ["puxa-saco", "adulador", "lisonjeador", "servil", "bajulador", "lambe-botas", "chaleira", "alcoviteiro", "capacho", "obreiro"],
    "babaquice": ["tolice", "estupidez", "idiotice", "imbecilidade", "palermice", "besteira", "asneira", "sandice", "bobagem", "burrice"],
    "babar": ["salivar", "escorrer", "umedecer", "molhar", "desejar", "cobiçar", "admirar", "gostar muito", "ter inveja", "ansiar"],
    "babel": ["confusão", "desordem", "tumulto", "algazarra", "gritaria", "barulho", "pandemônio", "caos", "mistura", "encontro"],
    "babilônia": ["confusão", "desordem", "tumulto", "lugar de perdição", "cidade grande e agitada", "grandeza", "opulência", "luxo", "esplendor", "magnificência"],
    "baboseira": ["bobagem", "besteira", "asneira", "tolice", "palavra vã", "conversa fiada", "discurso vazio", "non sense", "absurdo", "despropósito"],
    "baboso": ["viscoso", "pegajoso", "gosmento", "meloso", "açucarado", "sentimentalóide", "adulador", "puxa-saco", "lisonjeiro", "servil"],
    "baby": ["bebê", "neném", "criança pequena", "filho pequeno", "querido(a)", "amor", "tesouro", "xodó", "anjinho", "bonequinho(a)"],
    "bacalhau": ["peixe salgado e seco", "gadus morhua", "tipo de peixe", "alimento tradicional", "iguaria", "prato", "manjar", "sustento", "pescado", "marisco"],
    "bacamarte": ["arma de fogo antiga", "espingarda antiga", "peça de artilharia antiga", "arma de cano curto", "arma de pólvora", "objeto de coleção", "antiguidade", "relíquia", "instrumento bélico", "artefato histórico"],
    "bacana": ["legal", "maneiro", "jóia", "bom", "agradável", "simpático", "elegante", "estiloso", "interessante", "divertido"],
    "bacante": ["seguidora de Baco", "ménade", "mulher frenética", "mulher embriagada", "mulher em êxtase", "devota de Dionísio", "participante de bacanais", "mulher extasiada", "mulher exaltada", "mulher entusiasta"],
    "bacharéis": ["formados", "graduados", "doutores (em alguns contextos)", "licenciados", "diplomados", "concluintes de curso superior", "profissionais", "intelectuais", "eruditos", "letrados"],
    "bacharel": ["formado", "graduado", "doutor (em alguns contextos)", "licenciado", "diplomado", "concluinte de curso superior", "profissional", "intelectual", "erudito", "letrado"],
    "bacharela": ["formada", "graduada", "doutora (em alguns contextos)", "licenciada", "diplomada", "concluinte de curso superior", "profissional", "intelectual", "erudita", "letrada"],
    "bacharelado": ["curso de graduação", "nível superior", "formação universitária", "estudos superiores", "ensino superior", "diploma de bacharel", "grau acadêmico", "título universitário", "licenciatura", "escolaridade superior"],
    "bacharelando": ["estudante universitário", "aluno de graduação", "cursando o bacharelado", "aspirante a bacharel", "universitário", "acadêmico", "discente", "aprendiz", "estudioso", "dedicado aos estudos"],
    "bacharelato": ["curso de graduação", "nível superior", "formação universitária", "estudos superiores", "ensino superior", "diploma de bacharel", "grau acadêmico", "título universitário", "licenciatura", "escolaridade superior"],
    "bacia": ["vasilha", "recipiente", "tigela", "gamela", "alguidar", "vale", "depressão", "planície", "bacia hidrográfica", "bacia sedimentar"],
    "bacilo": ["bactéria em forma de bastão", "microrganismo", "germes", "agente infeccioso", "ser microscópico", "forma de vida unicelular", "microbio", "patógeno", "organismo minúsculo", "causador de doenças"],
    "background": ["fundo", "plano de fundo", "contexto", "histórico", "experiência", "formação", "base", "pano de fundo", "cenário", "ambiente"],
    "backup": ["cópia de segurança", "segunda via", "reserva", "salvaguarda", "proteção de dados", "arquivo de segurança", "cópia reserva", "plano B", "recurso alternativo", "apoio"],
    "baço": ["órgão do sistema linfático", "esplênio", "órgão interno", "víscera", "parte do corpo", "escuro", "pálido", "desbotado", "sem brilho", "opaco"],
    "bacon": ["toucinho defumado", "barriga de porco defumada", "carne suína defumada", "alimento defumado", "ingrediente alimentar", "produto de charcutaria", "gordura de porco", "pedaço de carne", "tira de carne", "alimento saboroso"],
    "bacorinho": ["leitão", "porquinho", "filhote de porco", "suíno jovem", "animal jovem", "mamífero jovem", "bicho pequeno", "criatura jovem", "ser vivo jovem", "porco bebê"],
    "bactéria": ["microrganismo unicelular", "ser microscópico", "germes", "microbio", "forma de vida simples", "organismo minúsculo", "agente infeccioso", "patógeno", "flora bacteriana", "microorganismo procariótico"],
    "báculo": ["cajado", "vara", "bordão", "bastão", "insígnia", "símbolo de autoridade", "apoio", "suporte", "instrumento de pastor", "objeto cerimonial"],
    "bacurau": ["ave noturna", "pássaro noturno", "caprimulgídeo", "ave misteriosa", "ave crepuscular", "bicho que canta à noite", "morcego-falso", "nambuco", "tuju", "urupema"],
    "badalado": ["famoso", "popular", "conhecido", "célebre", "notório", "em evidência", "em voga", "na moda", "de destaque", "prestigiado"],
    "badalo": ["lingueta de sino", "peça que faz o sino soar", "martelo do sino", "elemento sonoro", "parte do sino", "objeto metálico", "produtor de som", "percutor", "vibrador", "ressoador"],
    "baderna": ["desordem", "confusão", "tumulto", "algazarra", "gritaria", "motim", "rebuliço", "anarquia", "bagunça", "desorganização"],
    "badernas": ["desordens", "confusões", "tumultos", "algazarras", "gritarias", "motins", "rebuliços", "anarquias", "bagunças", "desorganizações"],
    "baderneiro": ["desordeiro", "agitador", "revoltoso", "tumultuador", "arruaceiro", "indisciplinado", "perturbador", "insubordinado", "provocador", "causador de confusão"],
    "badulaque": ["objeto pequeno e sem valor", "quinquilharia", "bugiganga", "tralha", "miudeza", "enfeite barato", "objeto decorativo de pouco valor", "cacareco", "ninharia", "futilidade"],
    "bafafá": ["confusão", "tumulto", "discussão acalorada", "bate-boca", "desentendimento", "querela", "altercação", "briga", "争论", "conflito"],
    "bafejado": ["acariciado pelo vento", "soprado levemente", "inspirado", "influenciado", "abençoado", "favorecido", "protegido", "ungido", "tocado", "atingido levemente"],
    "bafejar": ["soprar levemente", "acariciar com o vento", "inspirar", "influenciar", "abençoar", "favorecer", "proteger", "ungir", "tocar levemente", "emitir vapor"],
    "bafejo": ["sopro leve", "brisa", "hálito", "respiração", "influência", "inspiração", "favor", "proteção", "toque suave", "emanação"],
    "bafejos": ["sopros leves", "brisas", "hálitos", "respirações", "influências", "inspirações", "favores", "proteções", "toques suaves", "emanações"],
    "bafio": ["cheiro desagradável", "mau hálito", "odor rançoso", "fedor", "catinga", "exalação fétida", "cheiro forte e ruim", "hálito fétido", "ar viciado", "emanação pútrida"],
    "baforada": ["sopro forte", "golfada", "lufada", "jato de ar", "expiração vigorosa", "fumaça expelida", "vapor expelido", "rajada", "vento súbito", "emissão forte"],
    "baforar": ["soprar forte", "expelir ar com força", "emitir fumaça", "soltar vapor", "bufar", "respirar com dificuldade", "lufar", "ventilar", "exalar", "emanar"],
    "baga": ["fruto pequeno e redondo", "grão", "semente", "fruta miúda", "bago", "uva (em alguns contextos)", "amora (em alguns contextos)", "jabuticaba (em alguns contextos)", "mirtilo (em alguns contextos)", "framboesa (em alguns contextos)"],
    "bagaça": ["resíduo da fruta", "sobra da uva", "borra", "bagulho", "coisa sem valor", "refugo", "lixo", "esterco", "matéria orgânica em decomposição", "resto"],
    "bagaceira": ["aguardente de bagaço", "cachaça de bagaço", "destilaria de bagaço", "lugar sujo e desordenado", "confusão", "desordem", "festa barulhenta e desorganizada", "ambiente degradado", "local de má reputação", "bebedeira"],
    "bagaço": ["resíduo da fruta", "sobra da uva", "borra", "bagulho", "coisa sem valor", "refugo", "lixo", "esterco", "matéria orgânica em decomposição", "resto"],
    "bagagem": ["conjunto de malas", "pertences", "objetos pessoais", "equipamento", "experiência", "conhecimento", "vivência", "cultura", "repertório", "acervo"],
    "bagatela": ["coisa de pouco valor", "ninharia", "futilidade", "insignificância", "mixaria", "bobagem", "besteira", "coisa irrisória", "pequena quantia", "valor desprezível"],
    "bago": ["fruto pequeno e redondo", "grão", "semente", "fruta miúda", "baga", "uva (em alguns contextos)", "amora (em alguns contextos)", "jabuticaba (em alguns contextos)", "mirtilo (em alguns contextos)", "framboesa (em alguns contextos)"],
    "bagual": ["cavalo selvagem", "cavalo arisco", "cavalo indomado", "animal bravo", "pessoa rude", "pessoa grosseira", "pessoa inculta", "pessoa teimosa", "pessoa forte e bruta", "pessoa difícil de lidar"],
    "bagulho": ["coisa velha e sem valor", "tralha", "cacareco", "objeto inútil", "coisa qualquer", "treco", "porcaria", "lixo", "refugo", "bagaça"],
    "bagunça": ["desordem", "confusão", "desorganização", "tumulto", "algazarra", "rebuliço", "anarquia", "miscelânea", "mistura", "caos"],
    "bagunçado": ["desordenado", "confuso", "desorganizado", "tumultuado", "revirado", "misturado", "caótico", "desarrumado", "em desalinho", "atribulado"],
    "bagunceiro": ["desordeiro", "confuso", "desorganizador", "agitado", "turbulento", "indisciplinado", "rebelde", "perturbador", "inquieto", "levado"],
    "baía": ["enseada", "golfo pequeno", "reentrância costeira", "ancoradouro natural", "porto natural", "extensão de mar que entra na costa", "abra", "cala", "angra", "ensenada"],
    "baiano": ["natural da Bahia", "habitante da Bahia", "pessoa da Bahia", "gentílico da Bahia", "relativo à Bahia", "originário da Bahia", "nascido na Bahia", "cidadão baiano", "indivíduo baiano", "conterrâneo baiano"],
    "baião": ["dança popular nordestina", "música nordestina", "ritmo musical", "gênero musical brasileiro", "prato típico nordestino (baião de dois)", "comida regional", "iguaria nordestina", "alimento brasileiro", "manifestação cultural", "expressão artística"],
    "baila": ["dança", "bailado", "coreografia", "movimentos rítmicos", "arte do movimento", "expressão corporal", "saracoteio", "ginga", "passos de dança", "evolução"],
    "bailar": ["dançar", "coreografar", "mover-se ritmicamente", "saracotear", "gingar", "executar passos de dança", "evoluir", "saltitar", "rebolar", "dançarina"],
    "bailarina": ["dançarina", "artista da dança", "coreógrafa", "intérprete da dança", "profissional da dança", "dançarina clássica", "dançarina de ballet", "dançarina de flamenco", "dançarina de salão", "dançarina moderna"],
    "baile": ["festa dançante", "serão dançante", "dança social", "evento festivo com música e dança", "reunião para dançar", "balada", "sarau", "tertúlia", "folia", "divertimento"],
    "bainha": ["estojo para lâmina", "capa de faca", "funda", "invólucro", "proteção para arma branca", "acabamento de costura", "barra de roupa", "dobra na borda do tecido", "arremate", "remate"],
    "baio": ["cavalo de cor castanho-clara", "equino de pelagem clara", "cor de cavalo", "tonalidade castanha", "pelagem equina", "animal de montaria", "cavalo", "égua", "potro", "garanhao"],
    "bairrismo": ["apego excessivo à terra natal", "amor exagerado à região", "campanilismo", "chauvinismo local", "regionalismo exacerbado", "exaltação da própria terra", "sentimento de superioridade regional", "preconceito regional", "defesa intransigente da região", "idolatria da terra natal"],
    "bairrista": ["apegado à terra natal", "amante da própria região", "campanilista", "chauvinista local", "regionalista", "que exalta a própria terra", "que se sente superior por sua origem", "preconceituoso regionalmente", "defensor intransigente da região", "idólatra da terra natal"],
    "bairro": ["zona", "localidade", "vizinhança", "distrito", "comunidade", "arredores", "subúrbio", "setor", "quadra", "gleba"],
    "baita": ["grande", "enorme", "imenso", "gigantesco", "colossal", "tremendo", "formidável", "considerável", "significativo", "importante"],
    "baitola": ["homossexual", "gay", "viado", "afeminado", "homossexual masculino", "pessoa LGBT+", "pessoa queer", "invertido (termo pejorativo)", "bicha (termo pejorativo)", "maricas (termo pejorativo)"],
    "baiuca": ["bar pequeno e modesto", "botequim", "tasca", "bodega", "estalagem", "casa de pasto simples", "lugar humilde", "estabelecimento comercial simples", "venda", "espelunca"],
    "baixa": ["diminuição", "redução", "declínio", "queda", "descida", "depressão", "vale", "planície", "baixada", "inferior"],
    "baixada": ["planície litorânea", "terreno baixo", "várzea", "depressão geográfica", "região baixa", "zona plana", "baixio", "litoral", "planura", "campina"],
    "baixar": ["descer", "diminuir", "reduzir", "abaixar", "arriar", "declinar", "cair", "transferir (arquivo)", "fazer download", "amenizar"],
    "baixaria": ["vulgaridade", "grosseria", "indecência", "obscenidade", "palavrão", "comportamento grosseiro", "ato indecente", "ofensa", "insulto", "vilania"],
    "baixela": ["conjunto de louças", "serviço de mesa", "aparelho de jantar", "utensílios de mesa", "louçaria", "prataria", "faqueiro", "copos e pratos", "vasilhame", "conjunto de cerâmica"],
    "baixeza": ["vilania", "maldade", "perversidade", "canalhice", "infâmia", "torpeza", "indignidade", "abjeção", "servilismo", "humilhação"],
    "baixinho": ["pequeno", "miúdo", "diminuto", "liliputiano", "anão", "de pouca altura", "de estatura reduzida", "pigmeu", "mirrado", "curto"],
    "baixio": ["lugar baixo e alagadiço", "terreno pantanoso", "várzea", "planície aluvial", "baixada", "zona úmida", "charco", "pântano", "lagoa rasa", "terreno inundável"],
    "baixo": ["inferior", "diminuto", "pequeno", "raso", "grave (som)", "suave (voz)", "humilde", "vil", "reles", "ínfimo"],
    "bajulação": ["adulação", "lisonja", "puxa-saquismo", "servilismo", "chaleirismo", "incenso", "louvação exagerada", "elogio interesseiro", "adoração servil", "obsequiosidade"],
    "bajulador": ["adulador", "lisonjeador", "puxa-saco", "servil", "chaleira", "incensador", "obreiro", "capacho", "alcoviteiro", "lambe-botas"],
    "bajular": ["adular", "lisonjear", "puxar o saco", "ser servil", "fazer a corte", "incensar", "louvar exageradamente", "elogiar com interesse", "ser obsequioso", "fazer média"],
    "bala": ["projétil", "munição", "esfera metálica", "chumbo", "pastilha", "doce", "rebuçado", "caramelo", "confeito", "bala de canhão"],
    "balaço": ["tiro", "disparo", "estampido", "estrondo", "impacto da bala", "projétil disparado", "tiroteio", "troca de tiros", "combate armado", "confronto"],
    "balada": ["festa noturna", "serão dançante", "evento musical", "casa noturna", "discoteca", "boate", "nightclub", "farra", "divertimento noturno", "música alta e dança"],
    "balaio": ["cesto", "paneiro", "cestão", "alcofa", "cesta grande", "recipiente de vime", "utensílio de palha", "artefato de cipó", "objeto trançado", "embalagem rústica"],
    "balança": ["instrumento de pesar", "peso", "escala", "báscula", "gangorra", "equilíbrio", "instabilidade", "hesitação", "dúvida", "indecisão"],
    "balançante": ["oscilante", "vacilante", "trêmulo", "instável", "movediço", "pendular", "que balança", "em movimento de vaivém", "titubeante", "hesitante"],
    "balançar": ["oscilar", "mover-se", "agitar", "sacudir", "embalar", "ninar", "hesitar", "vacilar", "titubear", "pendular"],
    "balanceado": ["equilibrado", "ponderado", "harmônico", "estável", "justo", "compensado", "contrabalançado", "igualado", "sopesado", "moderado"],
    "balancear": ["equilibrar", "ponderar", "harmonizar", "estabilizar", "igualar", "compensar", "contrabalançar", "sopesar", "nivelar", "regular"],
    "balanço": ["equilíbrio", "estabilidade", "movimento de vaivém", "oscilação", "relatório financeiro", "demonstração contábil", "resumo", "apuração", "totalização", "síntese"],
    "balangandã": ["objeto pendente e oscilante", "adorno", "enfeite", "penduricalho", "berloque", "pingente", "ornamento", "objeto decorativo", "amuletos", "quinquilharia"],
    "balão": ["globo inflável", "aeróstato", "dirigível", "bexiga", "bola", "luminária de papel", "enfeite de festa", "brinquedo", "objeto voador", "meio de transporte aéreo"],
    "balaustrada": ["grade de sacada", "corrimão", "parapeito", "cercado com balaústres", "proteção de varanda", "guarda-corpo", "estrutura de suporte", "elemento arquitetônico", "mureta", "barreira"],
    "balaústre": ["coluna pequena de sacada", "pequeno pilar", "elemento de sustentação de corrimão", "suporte de parapeito", "peça vertical de balaustrada", "elemento arquitetônico", "coluneta", "pilarete", "esteio", "espora"],
    "balázio": ["rubi de baixa qualidade", "espinélio", "pedra preciosa vermelha", "gema vermelha", "mineral vermelho", "joia", "pedra ornamental", "cristal vermelho", "pedra sem valor elevado", "imitação de rubi"],
    "balbuciar": ["murmurar", "sussurrar", "falar indistintamente", "gaguejar", "tartamudear", "emitir sons inarticulados", "pronunciar mal", "dizer em voz baixa", "falar hesitante", "soltar vagidos"],
    "balbucio": ["murmúrio", "sussurro", "fala indistinta", "gagueira", "tartamudez", "sons inarticulados", "pronúncia hesitante", "fala baixa", "hesitação na fala", "vagido"],
    "balbúrdia": ["confusão", "desordem", "tumulto", "algazarra", "gritaria", "motim", "rebuliço", "anarquia", "bagunça", "desorganização"],
    "balça": ["jangada", "embarcação rústica", "flutuador", "plataforma flutuante", "meio de transporte aquático simples", "construção de troncos", "balsa pequena", "barco rudimentar", "estrutura para atravessar água", "artefato náutico"],
    "balcão": ["mesa de atendimento", "guichê", "púlpito", "tribuna", "contador", "estante", "aparador", "móvel de apoio", "prateleira", "bancada"],
    "balda": ["defeito", "falha", "imperfeição", "vício", "culpa", "erro", "omissão", "negligência", "falta moral", "mácula"],
    "baldado": ["frustrado", "vano", "inútil", "mal-sucedido", "abortado", "ineficaz", "em vão", "sem resultado", "frustrante", "desapontado"],
    "baldar": ["falhar", "frustrar-se", "tornar-se inútil", "não ter sucesso", "abortar", "ser ineficaz", "ser vão", "não dar resultado", "desapontar", "gorar"],
    "balde": ["vasilha cilíndrica", "recipiente com alça", "vaso", "tina", "cesto", "utensílio para líquidos", "objeto para transportar água", "contentor", "reservatório", "vasilhame"],
    "baldeação": ["transferência", "transbordo", "troca de veículo", "conexão", "mudança", "passagem", "transposição", "desembarque e embarque", "troca de condução", "itinerário com troca"],
    "baldear": ["transferir", "transbordar", "trocar de veículo", "fazer baldeação", "mudar", "passar", "transpor", "desembarcar e embarcar", "trocar de condução", "fazer conexão"],
    "baldio": ["inculto", "abandonado", "desabitado", "ermo", "vazio", "improdutivo", "selvagem", "não cultivado", "sem uso", "desocupado"],
    "baldo": ["vano", "inútil", "frustrado", "falho", "imperfeito", "sem efeito", "sem resultado", "ineficaz", "vazio", "nulo"],
    "baleia": ["mamífero marinho cetáceo", "grande mamífero aquático", "animal marinho gigante", "cetáceo", "baleia franca", "jubarte", "cachalote", "misticeto", "odontoceto", "leviathan"],
    "balela": ["mentira", "engano", "falsidade", "inverdade", "lorota", "embuste", "história inventada", "conversa fiada", "bobagem", "besteira"],
    "balido": ["som da ovelha", "berro de ovelha", "voz do carneiro", "som característico ovino", "bramido", "gemido", "som animal", "manifestação sonora do ovino", "ruído de ovelha", "voz da ovelha"],
    "balir": ["emitir o som da ovelha", "berrar como ovelha", "vozear como carneiro", "bramar", "gemer (como ovelha)", "fazer o som característico ovino", "ruir (como ovelha)", "manifestar-se sonoramente (ovino)", "soltar a voz (ovelha)", "ecoar o som da ovelha"],
    "baliza": ["marco", "sinal", "demarcação", "limite", "guia", "referência", "ponto de orientação", "estaca", "poste", "farol"],
    "balizar": ["demarcar", "limitar", "guiar", "orientar", "sinalizar", "marcar", "indicar", "apontar", "direcionar", "guiar-se"],
    "balneário": ["estância balnear", "local de banho", "cidade litorânea com praias", "resort à beira-mar", "praia turística", "localidade com águas termais", "estação de águas", "lugar para banhos", "destino de férias litorâneo", "ponto turístico costeiro"],
    "balofo": ["inchado", "tumefeito", "gordo", "obeso", "corpulento", "volumoso", "abalonado", "empolado", "ufano", "presunçoso"],
    "baloiço": ["balanço", "gangorra", "gira-gira", "brinquedo de parque", "assento suspenso", "objeto para balançar", "divertimento infantil", "estrutura para recreação", "jogo infantil", "equipamento de playground"],
    "balouçar": ["balançar", "oscilar", "mover-se ritmicamente", "embalar", "ninar", "pendular", "agitar suavemente", "mover de um lado para o outro", "vai-e-vem", "ondular"],
    "balsa": ["embarcação para travessia", "ferryboat", "transatlântico pequeno", "barca", "navio de transporte fluvial", "meio de transporte aquático", "construção flutuante", "plataforma flutuante", "nave", "canoa grande"],
    "balsâmico": ["aromático", "perfumado", "fragrante", "suave", "calmante", "lenitivo", "medicinal", "curativo", "restaurador", "odorífero"],
    "bálsamo": ["resina aromática", "unguento", "pomada", "remédio", "consolo", "alívio", "suavizante", "lenitivo", "medicamento", "cura"],
    "balsão": ["tipo de árvore", "planta medicinal", "árvore aromática", "árvore de resina", "espécie vegetal", "vegetal", "árvore de grande porte", "planta nativa", "flora", "espécime botânico"],
    "baluarte": ["fortaleza", "bastão", "torre de defesa", "reduto", "proteção", "defesa", "apoio", "sustentáculo", "refúgio", "alicerce"],
    "bamba": ["hábil", "experiente", "competente", "mestre", "perito", "craque", "fera", "expert", "virtuoso", "talentoso"],
    "bambino": ["menino (italiano)", "criança (italiano)", "bebê (italiano)", "garoto", "infante", "pueril", "pequeno", "filho", "neném", "gurizinho"],
    "bambo": ["flexível", "maleável", "elástico", "dobrável", "vergável", "frouxo", "mole", "não rígido", "instável", "trêmulo"],
    "bambolê": ["aro giratório", "brinquedo circular", "arco para girar no corpo", "objeto de malabarismo", "atividade recreativa", "exercício físico", "brincadeira infantil", "anel giratório", "instrumento de dança", "objeto lúdico"],
    "bambu": ["planta gramínea", "cana", "taquara", "vegetal lenhoso", "material de construção natural", "matéria-prima", "planta asiática", "broto de bambu (alimento)", "vara de bambu", "junco"],
    "banais": ["comuns", "ordinários", "vulgares", "triviais", "insignificantes", "corriqueiros", "habituais", "normais", "modestos", "simples"],
    "banal": ["comum", "ordinário", "vulgar", "trivial", "insignificante", "corriqueiro", "habitual", "normal", "modesto", "simples"],
    "banalidade": ["comunidade", "vulgaridade", "trivialidade", "insignificância", "corriqueiro", "habitualidade", "normalidade", "modéstia", "simplicidade", "falta de originalidade"],
    "banalização": ["vulgarização", "trivialização", "desvalorização", "desacreditação", "massificação", "popularização excessiva", "perda de valor", "tornar comum", "difusão excessiva", "proliferação"],
    "banalizar": ["vulgarizar", "trivializar", "desvalorizar", "desacreditar", "tornar comum", "massificar", "popularizar excessivamente", "perder o valor", "difundir excessivamente", "proliferar"],
    "banana": ["fruta tropical", "fruto alongado e curvo", "alimento rico em potássio", "musa", "plátano", "nanica", "prata", "ouro", "maçã", "terra"],
    "banca": ["mesa de exposição", "barraca", "estandarte", "quiosque", "grupo de pessoas", "comissão", "tribunal", "banco (em alguns contextos)", "casa de apostas", "feira"],
    "bancada": ["mesa de trabalho", "plano de apoio", "balcão", "tribuna", "grupo parlamentar", "banco de réus", "mesa de jurados", "superfície horizontal", "plataforma", "estrado"],
    "bancar": ["financiar", "custear", "pagar", "sustentar", "apoiar", "defender", "representar", "fazer-se de", "fingir", "aguentar"],
    "bancário": ["relativo a banco", "financeiro", "creditício", "monetário", "de banco", "empregado de banco", "funcionário de banco", "correntista", "investidor", "cliente de banco"],
    "bancarrota": ["falência", "insolvência", "ruína financeira", "quebra", "estado de falido", "colapso financeiro", "insolvibilidade", "liquidação", "cessação de pagamentos", "dificuldade financeira extrema"],
    "banco": ["instituição financeira", "assento", "sofá", "cadeira comprida", "lugar para sentar", "depósito", "reservatório", "jazida", "cardume", "banco de areia"],
    "banda": ["grupo musical", "conjunto musical", "orquestra", "faixa", "tira", "lado", "direção", "lado de fora", "lado de dentro"],
    "bandalha": ["canalha", "velhaco", "patife", "indivíduo desprezível", "pessoa sem caráter", "malandro", "trapaceiro", "pessoa baixa e vil", "escória", "gente ordinária"],
    "bandalheira": ["vida desregrada", "libertinagem", "devassidão", "vida dissoluta", "vida depravada", "orgia", "farra desenfreada", "vida boêmia excessiva", "desregramento", "imoralidade"],
    "bandalho": ["canalha", "velhaco", "patife", "indivíduo desprezível", "pessoa sem caráter", "malandro", "trapaceiro", "pessoa baixa e vil", "escória", "gente ordinária"],
    "bandear": ["mudar de lado", "aderir a outro grupo", "passar para o lado oposto", "desertar", "trair", "alinhar-se com", "juntar-se a", "mudar de facção", "virar a casaca", "seguir outra corrente"],
    "bandeira": ["estandarte", "pavilhão", "insígnia", "símbolo nacional", "emblema", "flâmula", "pendão", "estandarte de luta", "sinal", "marca"],
    "bandeirante": ["explorador do interior do Brasil colonial", "desbravador", "pioneiro", "sertanista", "homem que participou das bandeiras", "colonizador", "aventureiro", "descobertor", "conquistador", "homem do sertão"],
    "bandeja": ["tabuleiro", "prato grande", "suporte para servir", "objeto para transportar alimentos", "vasilha plana", "recipiente para levar coisas", "serviço", "auxílio", "apoio"],
    "bandida": ["fora da lei (feminino)", "criminosa (feminino)", "delinquente (feminino)", "malfeitora (feminino)", "marginal (feminino)", "facínora (feminino)", "meliante (feminino)", "pessoa perigosa (feminino)", "mulher criminosa", "mulher fora da lei"],
    "bandido": ["fora da lei (masculino)", "criminoso (masculino)", "delinquente (masculino)", "malfeitor (masculino)", "marginal (masculino)", "facínora (masculino)", "meliante (masculino)", "pessoa perigosa (masculino)", "homem criminoso", "homem fora da lei"],
    "banditismo": ["criminalidade organizada", "vida de bandido", "atividade criminosa", "delinquência", "marginalidade", "facinorismo", "meliantismo", "vida fora da lei", "conjunto de crimes", "ação de bandidos"],
    "bando": ["grupo", "turma", "quadrilha", "gangue", "ajuntamento", "reunião", "grupo de animais", "manada", "cardume", "alcateia"],
    "bandoleira": ["correia para sustentar arma", "tira de couro para arma", "cartucheira", "cinto para munição", "faixa de tecido para carregar objetos", "alça", "correia de ombro", "suporte para arma", "acessório militar", "equipamento de caça"],
    "bandoleiro": ["membro de bando armado", "salteador", "ladrão de estrada", "fora da lei", "criminoso", "delinquente", "aventureiro armado", "homem que usa bandoleira", "guerrilheiro", "rebelde"],
    "bandulho": ["barriga grande", "abdômen volumoso", "pança", "bucho", "ventre proeminente", "estômago grande", "abdômen dilatado", "barriga avantajada", "protuberância abdominal", "volume abdominal"],
    "bandulho": ["barriga grande", "abdômen volumoso", "pança", "bucho", "ventre proeminente", "estômago grande", "abdômen dilatado", "barriga avantajada", "protuberância abdominal", "volume abdominal"],
    "bangalô": ["casa térrea pequena", "chalé", "cabana", "moradia unifamiliar pequena", "casa de praia", "casa de campo", "habitação simples", "construção rústica", "edificação pequena", "residência térrea"],
    "banguela": ["sem dente", "édentulo", "desdentado", "com falha dentária", "que perdeu os dentes", "sem os dentes da frente", "com a boca vazia", "sorriso incompleto", "mastigação difícil", "fala com chiado"],
    "banhado": ["alagado", "inundado", "imerso", "molhado", "irrigado", "aspergido", "lavado", "limpo com água", "coberto por água", "encharcado"],
    "banhar": ["lavar", "limpar com água", "molhar", "imersir", "regar", "irrigar", "aspergir", "tomar banho", "mergulhar", "purificar"],
    "banheiro": ["casa de banho", "sanitário", "lavabo", "quarto de banho", "WC", "instalação sanitária", "lugar para higiene pessoal", "cômodo com pia e vaso sanitário", "aposento para banho", "toalete"],
    "banho": ["imersão em água", "lavagem", "higiene corporal", "duche", "chuveiro", "banheira", "imersão", "purificação", "limpeza", "aspersão"],
    "banido": ["expulso", "exilado", "deportado", "proscrito", "afastado", "rejeitado", "interdito", "vetado", "impedido", "segregado"],
    "banimento": ["expulsão", "exílio", "deportação", "proscrição", "afastamento", "rejeição", "interdição", "veto", "impedimento", "segregação"],
    "banir": ["expulsar", "exilar", "deportar", "proscrever", "afastar", "rejeitar", "interditar", "vetar", "impedir", "segregar"],
    "banner": ["faixa", "cartaz", "pôster", "anúncio", "propaganda", "divulgação", "publicidade", "mensagem visual", "painel", "outdoor pequeno"],
    "banqueiro": ["dono de banco", "acionista de banco", "dirigente de banco", "financista", "investidor", "homem de negócios do setor bancário", "empresário do ramo financeiro", "especulador financeiro", "magnata das finanças", "capitalista"],
    "banquete": ["festa suntuosa", "refeição abundante", "festim", "ágape", "celebração com comida", "jantar formal", "almoço festivo", "mesa farta", "comes e bebes", "regabofe"],
    "banzé": ["confusão", "tumulto", "agitação", "barulho", "algazarra", "rebuliço", "desordem", "furdunço", "pandemônio", "gritaria"],
    "banzeiro": ["ressaca (do mar ou rio)", "ondas lentas e longas", "marulho", "agitação da água após tempestade", "movimento ondulatório da água", "ondulação", "vaga", "maré de ressaca", "ondas residuais", "perturbação aquática"],
    "banzo": ["nostalgia", "saudade", "melancolia", "tristeza profunda", "depressão", "abatimento", "desânimo", "agonia", "sofrimento moral", "mágoa"],
    "baobá": ["árvore africana gigante", "embondeiro", "árvore da vida", "adansonia", "planta de grande porte", "árvore símbolo da África", "espécie vegetal", "vegetal africano", "flora africana", "espécime botânico"],
    "baque": ["queda", "tombo", "impacto", "choque", "golpe", "estrondo", "ruído surdo", "abalo", "trauma", "susto"],
    "bar": ["estabelecimento comercial de bebidas", "boteco", "botequim", "tasca", "pub", "barzinho", "lugar para beber", "ponto de encontro", "local de socialização", "casa noturna"],
    "baraço": ["corda grossa", "laço", "amarra", "atadura", "cordel", "fio resistente", "instrumento de ligação", "objeto para amarrar", "ligamento", "cabo"],
    "barafunda": ["confusão", "desordem", "tumulto", "algazarra", "gritaria", "pandemônio", "rebuliço", "anarquia", "mistura confusa", "aglomeração desordenada"],
    "barafustar": ["debater-se", "agitar-se", "lutar", "resistir", "opor-se", "revoltar-se", "protestar", "manifestar-se", "contestar", "opor resistência"],
    "baralho": ["jogo de cartas", "conjunto de cartas", "cartas de jogar", "naipe", "jogo de azar", "passatempo com cartas", "instrumento de jogo", "cartomancia", "jogo de estratégia", "lazer com cartas"],
    "baranga": ["mulher feia", "mulher desleixada", "mulher mal vestida", "mulher sem atrativos", "pessoa desinteressante (feminino)", "mulher vulgar", "mulher desarrumada", "pessoa de aparência desagradável (feminino)", "mulher desprovida de beleza", "pessoa sem charme (feminino)"],
    "barão": ["nobre", "aristocrata", "fidalgo", "título de nobreza", "grande proprietário", "magnata", "poderoso", "influente", "ricaço", "senhor"],
    "barata": ["inseto rastejante", "blatodeu", "praga doméstica", "bicho nojento", "inseto comum em residências", "animal urbano", "ser vivo pequeno", "bicho que corre rápido", "inseto resistente", "blatta"],
    "baratinado": ["tonto", "atordoado", "vertiginoso", "desorientado", "com vertigem", "com a cabeça a rodar", "grogue", "zonzo", "aturdido", "desnorteado"],
    "barato": ["de baixo custo", "econômico", "acessível", "em conta", "de preço módico", "com preço reduzido", "não caro", "a preço baixo", "vantajoso", "conveniente"],
    "báratro": ["abismo profundo", "precipício", "despenhadeiro", "inferno (mitologia grega)", "lugar tenebroso", "profundeza", "abismo insondável", "vazio profundo", "lugar de tormento", "caos"],
    "baraúna": ["árvore nativa do Brasil", "madeira de lei", "árvore resistente", "espécie vegetal brasileira", "planta nativa", "árvore de grande porte", "madeira escura e dura", "vegetal brasileiro", "flora brasileira", "espécime botânico"],
    "barba": ["pelos que crescem no rosto", "pilosidade facial", "cavanhaque", "bigode e barba", "pelos na face", "atributo masculino", "sinal de masculinidade", "aparência facial", "ornamento facial", "pelugem facial"],
    "barbante": ["fio grosso", "cordão fino", "cordel", "fio de algodão grosso", "material para amarrar", "fio resistente", "utensílio para artesanato", "material de embalagem", "corda fina", "fio de sisal"],
    "bárbara": ["cruel", "desumana", "selvagem", "feroz", "violenta", "brutal", "implacável", "incivilizada", "rude", "grosseira"],
    "barbaramente": ["cruelmente", "desumanamente", "selvagemente", "ferozmente", "violentamente", "brutalmente", "implacavelmente", "incivilizadamente", "rudemente", "grosseiramente"],
    "barbaria": ["crueldade", "desumanidade", "selvageria", "ferocidade", "violência extrema", "brutalidade", "implacabilidade", "incivilidade", "rudeza", "grosseira"],
    "barbaridade": ["ato cruel", "atrocidade", "crueldade extrema", "selvageria", "ferocidade", "violência brutal", "brutalidade", "incivilidade", "rudeza", "grosseira"],
    "barbárie": ["estado selvagem", "incivilização", "falta de cultura", "ignorância", "brutalidade", "crueldade", "desumanidade", "ferocidade", "violência", "estado primitivo"],
    "barbarismo": ["erro gramatical", "solecismo", "estrangeirismo não adaptado", "palavra ou expressão incorreta", "vício de linguagem", "falta de correção na linguagem", "impropriedade vocabular", "desvio da norma culta", "erro de concordância", "erro de regência"],
    "bárbaro": ["selvagem", "incivilizado", "cruel", "desumano", "feroz", "violento", "brutal", "implacável", "rude", "grosseiro"],
    "barbatana": ["nadadeira", "apêndice natatório", "membro para nadar", "aleta", "órgão de locomoção aquática", "parte do corpo de peixes e cetáceos", "instrumento de natação", "extensão membranosa", "apêndice lateral", "elemento propulsor aquático"],
    "barbeiro": ["profissional que corta cabelo e faz barba", "cabeleireiro masculino", "profissional de barbearia", "quem cuida da barba e cabelo masculinos", "artista do corte masculino", "profissional da beleza masculina", "quem apara a barba", "quem faz a barba", "quem corta o cabelo de homens", "profissional do ramo capilar masculino"],
    "barbicha": ["pequena barba no queixo", "cavanhaque pequeno", "pilosidade no queixo", "barba curta no mento", "atributo facial masculino", "pequena barba", "pelos no queixo", "ornamento facial masculino", "sinal de estilo", "parte da barba"],
    "barcaça": ["embarcação de carga", "navio de transporte fluvial", "balsa grande", "navio de carga", "embarcação de grande porte para rios", "meio de transporte aquático de carga", "navio mercante fluvial", "transporte fluvial de mercadorias", "canoa grande para carga", "nave fluvial"],
    "barcarola": ["canção de gondoleiro", "música veneziana", "canção melancólica", "melodia suave", "canto tradicional de Veneza", "música folclórica italiana", "canção lírica", "melodia romântica", "canto de barqueiro", "música aquática"],
    "barco": ["embarcação", "navio pequeno", "canoa", "bote", "lancha", "veleiro", "meio de transporte aquático", "nave", "embarcação miúda", "navio de pequeno porte"],
    "barda": ["armadura de cavalo", "proteção para cavalo de guerra", "cobertura protetora para equino", "equipamento de cavalaria", "vestimenta de cavalo de batalha", "proteção metálica para cavalo", "armadura equina", "cobertura de couro para cavalo", "equipamento militar equestre", "vestimenta de proteção animal"],
    "bardo": ["poeta medieval", "cantor épico", "menestrel", "trovador", "aedo", "poeta antigo", "cantor de histórias", "declamador de versos", "artista da palavra", "contador de lendas"],
    "barganha": ["negociação", "acordo", "tratativa", "ajuste de preços", "regateio", "pechincha", "transação", "combinação", "convénio", "contrato"],
    "barganhar": ["negociar", "regatear", "pechinchar", "acertar o preço", "combinar", "ajustar", "tratar", "transacionar", "discutir o preço", "fazer acordo"],
    "barítono": ["voz masculina grave", "voz entre tenor e baixo", "cantor de voz média masculina", "tipo de voz masculina", "registro vocal masculino", "voz masculina aveludada", "voz masculina encorpada", "cantor lírico de voz grave", "intérprete masculino de voz média", "voz masculina intermediária"],
    "barnabé": ["homem ingênuo", "homem simplório", "homem bobo", "pessoa crédula", "pessoa fácil de enganar", "ingênuo", "simplório", "bobo", "crédulo", "tolaz"],
    "baroa": ["esposa de barão", "nobre (feminino)", "aristocrata (feminino)", "fidalga", "título de nobreza (feminino)", "senhora influente", "ricaça", "dama da nobreza", "mulher de barão", "nobre mulher"],
    "barômetro": ["instrumento para medir a pressão atmosférica", "medidor de pressão do ar", "aparelho meteorológico", "indicador de mudanças climáticas", "instrumento de previsão do tempo", "medidor de pressão atmosférica", "manômetro atmosférico", "aparelho para meteorologia", "instrumento científico", "medidor de altitude (indiretamente)"],
    "baronesa": ["esposa de barão", "nobre (feminino)", "aristocrata (feminino)", "fidalga", "título de nobreza (feminino)", "senhora influente", "ricaça", "dama da nobreza", "mulher de barão", "nobre mulher"],
    "barra": ["pedaço comprido", "vergalhão", "lingote", "travessa", "obstáculo", "impedimento", "barra de chocolate", "barra de ferro", "barra de ouro", "barra de sabão"],
    "barraca": ["tenda", "abrigo de lona", "acampamento", "cabana improvisada", "estrutura temporária", "construção provisória", "abrigo portátil", "toldo", "quiosque", "banca de feira"],
    "barracão": ["galpão", "armazém", "depósito", "construção grande e simples", "edifício industrial", "hangar", "pavilhão", "estrutura ampla", "construção rústica grande", "edifício comercial amplo"],
    "barraco": ["habitação precária", "casa humilde", "moradia improvisada", "favela", "casebre", "construção rudimentar", "habitação simples", "moradia pobre", "casa de construção frágil", "habitação irregular"],
    "barrado": ["impedido", "proibido", "vedado", "obstruído", "bloqueado", "interditado", "detido", "interceptado", "embaraçado", "dificultado"],
    "barragem": ["represa", "dique", "açude", "muro de contenção de água", "obra hidráulica", "estrutura para represar água", "obstáculo para água", "represamento", "acumulação de água", "obra de engenharia hídrica"],
    "barranco": ["despenhadeiro", "precipício", "abismo", "escarpa", "ribanceira", "ladeira íngreme", "declive acentuado", "terreno inclinado", "penhasco", "abismo à beira d'água"],
    "barrão": ["porco reprodutor", "javali", "suíno macho para reprodução", "animal macho", "reprodutor suíno", "macho da porca", "verrão", "porco inteiro", "animal de criação", "espécime macho"],
    "barrar": ["impedir", "proibir", "vedar", "obstruir", "bloquear", "interditar", "deter", "interceptar", "embaraçar", "dificultar"],
    "barras": ["grades", "ferragens", "vergalhões", "obstáculos", "impedimentos", "exercícios de ginástica em barras", "equipamento de ginástica", "conjunto de barras", "estrutura metálica", "elementos de ferro"],
    "barregã": ["concubina", "amante", "amásia", "segunda esposa (em algumas culturas)", "companheira", "mulher que vive com um homem sem ser casada", "querida", "favorita", "mantença", "mulher ilegítima"],
    "barreira": ["obstáculo", "impedimento", "dificuldade", "empecilho", "limite", "fronteira", "muro", "cerca", "barragem", "óbice"],
    "barrela": ["vasilha para lavar roupa", "tina", "balde grande", "recipiente para lavagem", "vaso para limpeza", "utensílio doméstico", "alguidar", "gamela", "bacia grande", "lavatório"],
    "barrer": ["varrer", "limpar com vassoura", "raspar", "limpar o chão", "remover a sujeira", "espalhar", "varredura", "ação de varrer", "limpeza com escova", "arrastar"],
    "barrete": ["gorro", "touca", "chapéu pequeno", "cobertura para a cabeça", "chapéu mole", "chapéu de tecido", "gorro de padre (em alguns ritos)", "chapéu regional", "chapéu tradicional", "coifa"],
    "barrica": ["pequeno barril", "tonel pequeno", "vasilha de madeira", "recipiente para líquidos", "pipa pequena", "odre", "vasilhame de madeira", "reservatório pequeno", "pequeno tonel de vinho", "pequena cuba"],
    "barricada": ["obstrução de rua", "bloqueio", "defesa improvisada", "tranqueira", "muro improvisado", "proteção de combate", "barreira de proteção", "obstáculo de guerra", "defesa de rua", "bloqueio de via"],
    "barriga": ["abdômen", "ventre", "pança", "bucho", "estômago", "abdome", "região abdominal", "parte inferior do tronco", "protuberância abdominal", "bandulho"],
    "barril": ["tonel", "vasilha grande de madeira", "pipa", "odre grande", "recipiente para líquidos", "vasilhame de madeira grande", "reservatório grande", "grande tonel de vinho", "grande cuba", "vasilha cilíndrica grande"],
    "barro": ["argila", "lama", "terra úmida", "lodo", "massa pegajosa", "material para cerâmica", "solo argiloso", "terra molhada", "sedimento fino", "material de construção rústico"],
    "barroca": ["estilo artístico do século XVII", "arte barroca", "arquitetura barroca", "música barroca", "literatura barroca", "período artístico", "estilo ornamentado", "arte dramática", "estilo teatral", "arte da Contrarreforma"],
    "barroco": ["relativo ao barroco", "ornamentado", "dramático (na arte)", "teatral", "extravagante", "curvilíneo", "assimetrico", "complexo", "carregado", "grandioso"],
    "barrote": ["viga pequena", "peça de madeira", "ripa grossa", "tora pequena", "elemento de construção", "suporte de madeira", "peça estrutural de madeira", "elemento de sustentação", "madeira roliça pequena", "peça de madeira retangular"],
    "barulhento": ["ruidoso", "estrondoso", "tumultuado", "estridente", "sonoro", "forte", "ensurdecedor", "cacofônico", "bulhento", "ressoante"],
    "barulho": ["ruído", "estrondo", "tumulto", "algazarra", "gritaria", "estridente", "cacofonia", "bulício", "rumor", "fragor"],
    "basal": ["fundamental", "primordial", "básico", "essencial", "primário", "inicial", "originário", "radicular", "de base", "alicerce"],
    "basalto": ["rocha vulcânica escura", "rocha magmática extrusiva", "pedra vulcânica", "material geológico", "minério escuro", "rocha ígnea", "pedra preta", "material de construção", "rocha compacta", "formação geológica"],
    "basbaque": ["admirado", "pasmo", "assombrado", "espantado", "maravilhado", "boquiaberto", "estupefato", "perplexo", "atônito", "surpreso"],
    "basculante": ["que bascula", "que se move em torno de um eixo", "pivotante", "giratório", "oscilante", "que tomba", "que se inclina", "de abrir e fechar girando", "com movimento de báscula", "articulado"],
    "bascular": ["inclinar", "tombar", "girar em torno de um eixo", "pivotar", "oscilar", "mover-se como uma báscula", "virar", "inclinar-se", "pender", "mover-se para cima e para baixo"],
    "basculho": ["lixo", "detrito", "entulho", "restos", "sobras", "refugo", "imundície", "porcaria", "tralha", "cacareco"],
    "base": ["fundamento", "alicerce", "sustentação", "apoio", "origem", "princípio", "essência", "elemento principal", "sede", "raiz"],
    "baseado": ["fundamentado", "alicerçado", "sustentado", "apoiado", "inspirado", "derivado", "assentado", "firmado", "estribado", "motivado"],
    "basear": ["fundamentar", "alicerçar", "sustentar", "apoiar", "inspirar-se", "derivar-se", "assentar", "firmar", "estribar-se", "motivar"],
    "basicamente": ["fundamentalmente", "essencialmente", "principalmente", "primordialmente", "em essência", "em princípio", "no fundo", "de modo geral", "em suma", "essencialmente"],
    "básico": ["fundamental", "essencial", "primário", "elementar", "inicial", "simples", "rudimentar", "nuclear", "de base", "primordial"],
    "basilar": ["fundamental", "essencial", "primordial", "básico", "principal", "central", "estrutural", "de base", "alicerce", "substrato"],
    "basílica": ["igreja importante", "templo religioso", "igreja com privilégios papais", "edifício religioso", "templo cristão", "igreja principal", "grande igreja", "templo católico", "casa de Deus", "local de culto"],
    "basílico": ["relativo a basílica", "majestoso", "real", "imperial", "magnífico", "imponente", "grandioso", "esplêndido", "nobre", "augusto"],
    "basilisco": ["lagarto mitológico", "serpente lendária", "criatura fantástica", "animal imaginário com olhar mortal", "monstro antigo", "besta fabulosa", "réptil venenoso imaginário", "figura mitológica", "animal peçonhento lendário", "ser mitológico perigoso"],
    "basquetebol": ["jogo de bola com cestas", "esporte com bola e aro", "basquete", "desporto coletivo com bola", "jogo de cinco contra cinco", "esporte olímpico", "jogo com arremessos à cesta", "atividade física competitiva", "desporto de quadra", "jogo com placar"],
    "basta": ["chega", "é suficiente", "é o bastante", "não precisa mais", "fim", "acabou", "cessa", "pare", "suficiente", "adequado"],
    "bastante": ["suficiente", "muito", "considerável", "abundante", "numeroso", "vários", "alguns", "razoavelmente", "em quantidade suficiente", "em grande número"],
    "bastão": ["vara", "cajado", "bordão", "cacete", "porrete", "vara de comando", "instrumento de apoio", "símbolo de autoridade", "vareta", "pau"],
    "bastar": ["ser suficiente", "chegar", "ser o bastante", "satisfazer", "ser adequado", "ser necessário", "ser preciso", "ser bastante", "atingir", "suprir"],
    "bastardo": ["ilegítimo", "filho fora do casamento", "espurio", "mestiço (em alguns contextos)", "híbrido", "degenerado", "inferior", "de origem duvidosa", "não puro", "adulterado"],
    "bastião": ["fortaleza", "baluarte", "reduto", "torre de defesa", "ponto forte", "defesa", "apoio", "sustentáculo", "refúgio", "alicerce"],
    "bastidor": ["armação de bordado", "suporte para bordar", "quadro para bordar", "estrutura para bordado", "pano de fundo (teatro)", "cenário", "traseira do palco", "por trás das cortinas", "nos bastidores (figurativo)", "nos bastidores da política"],
    "bastidores": ["por trás do palco", "nos fundos do teatro", "nos coulisses", "nos bastidores (figurativo)", "nos segredos", "nas entrelinhas", "nos bastidores da política", "nos bastidores do poder", "nos bastidores da mídia", "nos bastidores das negociações"],
    "basto": ["grosseiro", "rude", "tosco", "rústico", "ordinário", "comum", "vulgar", "abundante (em alguns contextos)", "cheio", "denso"],
    "bata": ["vestimenta solta", "camisola comprida", "roupa folgada", "veste", "túnica", "avental", "roupa de trabalho", "roupa de dormir", "vestido simples", "camisa comprida"],
    "batalha": ["combate", "luta", "confronto armado", "guerra", "disputa", "peleja", "combate militar", "conflito bélico", "operação militar", "encontro de exércitos"],
    "batalhão": ["unidade militar", "tropa", "grupo de soldados", "companhia militar", "força militar", "contingente", "efetivo", "destacamento", "pelotão grande", "formação militar"],
    "batata": ["tubérculo comestível", "solanum tuberosum", "alimento básico", "legume", "produto agrícola", "raiz tuberosa", "alimento rico em carboidratos", "planta solanácea", "tubérculo", "alimento versátil"],
    "bate": ["golpe", "pancada", "impacto", "choque", "encontro", "colisão", "toque", "palpita", "pulsa", "vibra"],
    "bate-papo": ["conversa informal", "diálogo", "papo", "conversa descontraída", "bateção de papo", "troca de ideias", "comunicação verbal", "conversa amigável", "colóquio", "palestra"],
    "bateção": ["ato de bater", "pulsação", "palpitação", "vibração", "agitação", "movimento repetitivo", "ação de golpear", "ruído de batida", "ação de tocar", "ação de percutir"],
    "batedor": ["explorador", "olheiro", "reconhecedor", "quem busca informações", "quem precede o grupo", "mensageiro", "corredor", "quem bate (porta)", "instrumento para bater", "utensílio de cozinha para misturar"],
    "bátega": ["aguaceiro forte", "chuva torrencial", "temporal", "dilúvio", "chuva intensa", "pancada de chuva", "tempestade com chuva forte", "chuvarada", "toró", "chuva copiosa"],
    "bateia": ["utensílio para garimpar", "vasilha para extrair ouro", "alguidar de garimpo", "recipiente para mineração artesanal", "instrumento de garimpeiro", "vaso de madeira para garimpo", "utensílio para peneirar minérios", "instrumento de trabalho manual", "objeto para separar ouro de areia", "vasilha côncava para garimpo"],
    "batéis": ["pequenos barcos", "botes", "canoas", "embarcações miúdas", "navios pequenos", "barquinhos", "embarcações leves", "meios de transporte aquático pequenos", "navios de pequeno porte", "canoas pequenas"],
    "batel": ["pequeno barco", "bote", "canoa", "embarcação miúda", "navio pequeno", "barquinho", "embarcação leve", "meio de transporte aquático pequeno", "navio de pequeno porte", "canoa pequena"],
    "batelada": ["grande quantidade", "multidão", "leva", "grupo numeroso", "enxurrada", "torrente", "fluxo intenso", "grande número", "grande porção", "grande massa"],
    "batente": ["parte fixa da porta", "marco da porta", "moldura da porta", "guarnição da porta", "estrutura da porta", "lateral da porta", "parte onde a porta fecha", "elemento fixo da janela", "marco da janela", "moldura da janela"],
    "bater": ["golpear", "percutir", "pulsar", "palpitar", "vibrar", "chocar-se", "colidir", "lutar", "combater", "superar"],
    "baterão": ["grande barco a motor", "lancha grande", "embarcação motorizada grande", "navio a motor grande", "barco veloz", "embarcação rápida", "meio de transporte aquático motorizado grande", "navio rápido", "lancha potente", "embarcação de grande velocidade"],
    "bateria": ["pilha", "acumulador de energia", "conjunto de tambores", "percussão", "sequência de golpes", "série de tiros", "conjunto de canhões", "força", "energia", "vitalidade"],
    "bati": ["golpeei", "percuti", "pulsei", "palpitei", "vibrei", "choquei-me", "colidi", "lutei", "combati", "superei"],
    "batida": ["golpe", "pancada", "pulsação", "palpitação", "vibração", "colisão", "choque", "batida policial", "festa com música eletrônica", "ritmo musical"],
    "batido": ["agitado", "misturado", "mexido", "cansado", "exausto", "vencido", "surrado", "gasto", "comido (alimento)", "bebido (bebida)"],
    "batismo": ["sacramento cristão", "cerimônia religiosa de iniciação", "rito de purificação", "ato de dar nome", "designação", "nascimento espiritual", "iniciação na fé cristã", "primeiro sacramento", "rito batismal", "cerimônia de apresentação"],
    "batizado": ["cerimônia de batismo", "festa de batismo", "ato de batizar", "nomeado", "designado", "iniciado na fé cristã", "apresentado à comunidade religiosa", "abençoado", "purificado", "consagrado"],
    "batizar": ["administrar o batismo", "dar nome", "designar", "iniciar na fé cristã", "abençoar", "purificar", "consagrar", "dar o primeiro sacramento", "realizar o rito batismal", "apresentar à comunidade religiosa"],
    "bato": ["golpeio", "percuto", "pulso", "palpito", "vibro", "choque-me", "colido", "luto", "combato", "supero"],
    "batom": ["cosmético labial", "maquiagem para os lábios", "pintalabial", "corante para os lábios", "produto de beleza", "item de maquiagem", "cosmético feminino", "produto para colorir os lábios", "bastão de cor para os lábios", "embelezador labial"],
    "batoré": ["tipo de ave pequena", "pássaro pequeno", "ave campestre", "ave silvestre", "passarinho", "ave comum", "espécie de pássaro", "fauna local", "ave nativa", "pássaro da região"],
    "batota": ["trapaça", "engano", "fraude", "jogo desonesto", "manha", "artimanha", "truque", "engodo", "falcatrua", "logro"],
    "batoteiro": ["trapaceiro", "enganador", "fraudulento", "jogador desonesto", "manhoso", "artimanheiro", "truqueiro", "embusteiro", "falsário", "velhaco"],
    "batráquio": ["anfíbio", "animal de duas vidas", "sapo", "rã", "perereca", "axolote", "cecília", "girino", "vertebrado anfíbio", "animal que vive na água e na terra"],
    "batumado": ["pisado", "calcado", "amassado", "esmagado", "achatado", "compactado", "pisoteado", "deformado pela pressão", "com marcas de pisadas", "terra batida"],
    "batuque": ["dança afro-brasileira", "ritmo musical afro-brasileiro", "instrumento de percussão", "festa com dança e música afro", "manifestação cultural afrodescendente", "gênero musical afro-brasileiro", "tambor", "instrumento de percussão de origem africana", "festa popular com ritmo africano", "celebração afro-brasileira"],
    "batuta": ["vareta de maestro", "cajado de regente", "instrumento de direção musical", "símbolo de autoridade do maestro", "vara de comando", "vareta", "instrumento musical", "objeto usado para reger", "guia musical", "instrumento do maestro"],
    "baú": ["arca", "cofre", "mala grande", "caixa grande", "recipiente para guardar objetos", "móvel antigo para guardar pertences", "mala de viagem antiga", "caixote grande", "recipiente de madeira", "objeto para armazenamento"],
    "baunilha": ["essência aromática", "aroma doce", "saborizante", "fava de baunilha", "planta aromática", "especiaria", "condimento doce", "aroma para alimentos", "extrato de baunilha", "planta do gênero Vanilla"],
    "bazar": ["mercado", "feira", "venda de artigos diversos", "loja de variedades", "mercado de usados", "feira de artesanato", "venda beneficente", "mercado popular", "comércio diversificado", "loja de artigos baratos"],
    "bazófia": ["jactância", "vanglória", "ostentação", "arrogância", "presunção", "vaidade", "exibicionismo", "alarde", "gabarolice", "imodéstia"],
    "bazófio": ["jactancioso", "vanglorioso", "ostentador", "arrogante", "presunçoso", "vaidoso", "exibicionista", "alardeador", "gabarola", "imodesto"],
    "bê-á-bá": ["alfabeto", "primeiras letras", "início do aprendizado", "rudimentos", "elementos básicos", "princípios fundamentais", "começo", "primeiros passos", "iniciação", "abc"],
    "beabá": ["alfabeto", "primeiras letras", "início do aprendizado", "rudimentos", "elementos básicos", "princípios fundamentais", "começo", "primeiros passos", "iniciação", "abc"],
    "beata": ["mulher religiosa", "mulher piedosa", "mulher devota", "mulher que frequenta igrejas", "mulher carola", "mulher fervorosa", "mulher que pratica a religião com intensidade", "mulher temente a Deus", "mulher que segue os preceitos religiosos", "mulher de fé"],
    "beatificação": ["ato de declarar beato", "elevação aos altares (catolicismo)", "reconhecimento de santidade (passo anterior à canonização)", "cerimônia religiosa", "declaração de bem-aventurança", "processo de reconhecimento de santidade", "ato de tornar beato", "reconhecimento pela Igreja Católica", "elevação a beato", "primeira etapa da canonização"],
    "beatificado": ["declarado beato", "elevado aos altares (catolicismo)", "reconhecido como santo (primeiro passo)", "bem-aventurado", "abençoado", "venerável", "reconhecido pela Igreja", "declarado santo pela Igreja", "elevado a beato", "na primeira etapa da canonização"],
    "beatífico": ["que causa beatitude", "que traz felicidade espiritual", "que eleva a alma", "celestial", "divino", "angélico", "sublime", "radiante de alegria", "que inspira devoção", "bem-aventurado"],
    "beatitude": ["felicidade suprema", "bem-aventurança", "êxtase espiritual", "alegria celestial", "estado de graça", "felicidade plena", "satisfação espiritual completa", "estado de bem-aventurado", "deleite espiritual", "gozo celestial"],
    "beato": ["homem religioso", "homem piedoso", "homem devoto", "homem que frequenta igrejas", "homem carola", "homem fervoroso", "homem que pratica a religião com intensidade", "homem temente a Deus", "homem que segue os preceitos religiosos", "homem de fé"],
    "bêbado": ["alcoólatra", "ébrio", "embriagado", "etílico", "alcoolizado", "mamado", "pinguço", "cachaceiro", "ivre", "tomado pela bebida"],
    "bebê": ["recém-nascido", "lactente", "criança pequena", "neném", "infante", "filhote", "criança de colo", "ser humano nos primeiros meses de vida", "criança de tenra idade", "pequenino"],
    "bebedeira": ["embriaguez", "alcoolismo", "borrachice", "ébrio", "intoxicação alcoólica", "estado de bêbado", "ato de beber em excesso", "vício em álcool", "dependência alcoólica", "etilismo"],
    "bebedice": ["hábito de beber", "inclinação para a bebida", "propensão ao álcool", "vício em beber", "alcoolismo", "tendência à embriaguez", "costume de beber", "hábito alcoólico", "predisposição ao álcool", "vício da bebida"],
    "bêbedo": ["alcoólatra", "ébrio", "embriagado", "etílico", "alcoolizado", "mamado", "pinguço", "cachaceiro", "ivre", "tomado pela bebida"],
    "bebedouro": ["fonte", "local para beber água", "reservatório de água para animais", "ponto de água", "lugar para matar a sede", "depósito de água potável", "utensílio para dar água", "local de abastecimento de água", "ponto de hidratação", "manancial"],
    "beber": ["ingerir líquido", "tomar", "sorver", "tragar", "embeber-se", "hidratar-se", "saciar a sede", "ingerir bebida alcoólica", "embriagar-se", "tomar um gole"],
    "bebericar": ["beber aos poucos", "sorver lentamente", "tomar pequenos goles", "petiscar bebida", "bebericar suavemente", "tomar bebida em pequenas quantidades", "molhar a garganta", "tomar um trago", "beber com moderação", "degustar bebida"],
    "beberrão": ["alcoólatra", "ébrio contumaz", "pinguço", "cachaceiro", "etílico inveterado", "viciado em álcool", "quem bebe muito", "quem tem o hábito de beber em excesso", "dependente de álcool", "alcoólatra inveterado"],
    "bebida": ["líquido para beber", "brebaje", "refresco", "suco", "água", "vinho", "cerveja", "aguardente", "licor", "ponche"],
    "bebum": ["alcoólatra", "ébrio", "embriagado", "etílico", "alcoolizado", "mamado", "pinguço", "cachaceiro", "ivre", "tomado pela bebida"],
    "beca": ["vestimenta de formatura", "traje acadêmico", "capelo", "toga", "veste talar", "roupa formal de cerimônia", "hábito religioso", "vestimenta de juiz", "vestimenta de advogado", "roupa de professor universitário"],
    "beco": ["rua estreita e sem saída", "viela", "travessa estreita", "passagem estreita", "ruela", "ruazinha", "corredor estreito", "passadiço", "atalho estreito", "logradouro estreito"],
    "bedel": ["fiscal de escola", "inspetor de alunos", "funcionário de escola encarregado da disciplina", "monitor escolar", "auxiliar administrativo escolar", "zelador de escola", "encarregado da ordem na escola", "assistente de disciplina", "servidor escolar", "funcionário de apoio escolar"],
    "bedelho": ["intromissão", "bisbilhotice", "curiosidade excessiva", "indiscrição", "ingerência", "palpite indevido", "olho gordo", "meter o nariz onde não é chamado", "intrometido", "bisbilhoteiro"],
    "beduíno": ["árabe nômade do deserto", "habitante do deserto", "nômade do Oriente Médio", "povo do deserto", "árabe errante", "habitante do Saara", "membro de tribo nômade árabe", "povo tradicional do deserto", "nômade árabe", "povo do deserto da Arábia"],
    "bege": ["cor castanho-clara", "cor pálida", "cor neutra", "tonalidade clara de marrom", "cor areia", "cor creme", "cor clara e suave", "tonalidade discreta", "cor sem brilho intenso", "matiz clara de castanho"],
    "beiço": ["lábio", "boca", "comissura labial", "orifício bucal", "parte carnuda da boca", "margem da boca", "rebordo labial", "bordo da boca", "lábio inferior", "lábio superior"],
    "beija-flor": ["colibri", "pássaro pequeno que suga néctar", "ave nectarívora", "pássaro de cores vibrantes", "ave que paira no ar", "pássaro com bico longo e fino", "ave tropical", "pássaro migratório", "ave que se alimenta de flores", "pássaro ágil e veloz"],
    "beijar": ["tocar com os lábios", "dar um beijo", "selar", "tocar com afeto", "demonstrar carinho com os lábios", "roçar os lábios", "unir os lábios em sinal de afeto", "dar um ósculo", "tocar com os lábios em sinal de amor", "tocar com os lábios em sinal de respeito"],
    "beijo": ["ósculo", "toque com os lábios", "selo", "demonstração de afeto com os lábios", "ato de beijar", "carícia labial", "afeto labial", "saudação com os lábios", "sinal de carinho", "manifestação de amor"],
    "beijoca": ["beijo carinhoso", "beijo afetuoso", "beijo grande", "ósculo carinhoso", "selo afetuoso", "demonstração de carinho com beijo", "beijo terno", "beijo afetuoso e demorado", "carícia labial afetuosa", "manifestação de amor com beijo"],
    "beiju": ["tapioca", "bolo de goma", "massa de mandioca", "alimento indígena", "comida feita de fécula de mandioca", "iguaria brasileira", "alimento regional", "preparação com mandioca", "crepe de tapioca", "disco de massa de mandioca"],
    "beira": ["margem", "borda", "orla", "limite", "extremidade", "aba", "canto", "lado", "barra", "ourela"],
    "beira-mar": ["litoral", "costa", "orla marítima", "praia", "margem do mar", "zona costeira", "faixa litorânea", "beira da praia", "lugar à beira do mar", "região costeira"],
    "beirada": ["margem", "borda", "orla", "extremidade", "aba", "canto", "lado", "barra", "ourela", "limite"],
    "beiral": ["aba do telhado", "parte saliente do telhado", "telhado que se projeta", "proteção contra chuva", "acabamento do telhado", "parte inferior do telhado", "saliência do telhado", "extensão do telhado", "cobertura saliente", "parte do telhado que avança"],
    "beirar": ["estar perto de", "aproximar-se de", "confinar com", "estar na borda de", "estar na margem de", "limitar com", "estar junto a", "tocar a borda de", "estar quase em", "fazer fronteira com"],
    "bel": ["bonito", "formoso", "belo", "lindo", "atraente", "agradável à vista", "esteticamente agradável", "de boa aparência", "encantador", "gracioso"],
    "bel-prazer": ["vontade", "desejo", "arbítrio", "alvedrio", "livre vontade", "gosto", "satisfação pessoal", "prazer", "capricho", "querer"],
    "bela": ["bonita", "formosa", "bela", "linda", "atraente", "agradável à vista", "esteticamente agradável", "de boa aparência", "encantadora", "graciosa"],
    "belchior": ["cantor e compositor brasileiro", "artista da MPB", "músico cearense", "intérprete de 'Apenas um Rapaz Latino-Americano'", "autor de canções populares", "ícone da música brasileira", "compositor de sucessos", "cantor de voz marcante", "artista da música popular brasileira", "nome da música brasileira"],
    "beldade": ["beleza", "formosura", "lindez", "boniteza", "encanto", "graça", "atração", "magnificência", "esplendor", "luzimento"],
    "beleguim": ["oficial de justiça (antigo)", "executor de ordens judiciais (antigo)", "agente da lei (antigo)", "funcionário judicial (antigo)", "meirinho (arcaico)", "servidor da justiça (antigo)", "encarregado de cumprir mandados (antigo)", "auxiliar da justiça (antigo)", "oficial de diligências (antigo)", "pregoeiro (em certos contextos antigos)"],
    "beleléu": ["fim", "acabou", "destruição", "ruína", "perdição", "desaparecimento", "aniquilação", "extinção", "derrocada", "desastre"],
    "beletrista": ["escritor de belas letras", "literato", "homem de letras", "autor de obras literárias", "escritor de ficção", "autor de poesia", "ensaísta", "crítico literário", "estudioso de literatura", "amante da literatura"],
    "beleza": ["formosura", "lindez", "boniteza", "encanto", "graça", "atração", "magnificência", "esplendor", "luzimento", "atrativo"],
    "belezura": ["beleza", "encanto", "formosura", "lindez", "boniteza", "graça", "atração", "coisa bela", "objeto de beleza", "pessoa bela"],
    "beliche": ["cama de dois andares", "cama sobreposta", "cama dupla vertical", "móvel para dormir com duas camas", "cama econômica para espaços pequenos", "cama em dois níveis", "móvel com duas camas", "cama para economizar espaço", "cama para quartos compartilhados", "móvel com duas posições de dormir"],
    "belicismo": ["doutrina que exalta a guerra", "militarismo", "atitude favorável à guerra", "defesa da guerra como solução", "exaltação do conflito armado", "ideologia pró-guerra", "tendência à agressividade militar", "crença na eficácia da guerra", "política de agressão militar", "espírito guerreiro exacerbado"],
    "belicista": ["partidário da guerra", "militarista", "defensor da guerra", "favorável ao conflito armado", "que exalta a guerra", "pró-guerra", "agressivo militarmente", "que acredita na eficácia da guerra", "que apoia a política de agressão militar", "com espírito guerreiro exacerbado"],
    "bélico": ["relativo à guerra", "militar", "guerreiro", "de combate", "armamentista", "de armas", "de conflito armado", "de hostilidades", "de luta", "de campanha militar"],
    "belicosidade": ["tendência à guerra", "agressividade militar", "espírito guerreiro", "disposição para o combate", "propensão ao conflito armado", "natureza guerreira", "atitude agressiva militar", "inclinação à hostilidade", "temperamento bélico", "vontade de lutar"],
    "belicoso": ["guerreiro", "agressivo militarmente", "com espírito guerreiro", "disposto ao combate", "propenso ao conflito armado", "de natureza guerreira", "com atitude agressiva militar", "inclinado à hostilidade", "de temperamento bélico", "com vontade de lutar"],
    "beligerância": ["estado de guerra", "conflito armado", "hostilidades", "guerra declarada", "estado de beligerante", "situação de guerra", "confronto bélico", "luta armada", "estado de inimizade bélica", "estado de conflito"],
    "beligerante": ["em guerra", "em conflito armado", "hostil", "combatente", "lutador", "guerreiro", "em estado de beligerância", "envolvido em guerra", "em luta armada", "em confronto bélico"],
    "beliscão": ["aperto com os dedos", "pinçada", "pellizco", "ato de beliscar", "aperto doloroso", "pinçamento", "beliscadura", "apertão", "pinção", "ato de pinçar"],
    "beliscar": ["apertar com os dedos", "pinçar", "pellizcar", "dar beliscão", "apertar dolorosamente", "pinçar levemente", "beliscar de leve", "dar um aperto", "pinçar com força", "apertar entre os dedos"],
    "belisco": ["aperto com os dedos", "pinçada", "pellizco", "ato de beliscar", "aperto doloroso", "pinçamento", "beliscadura", "apertão", "pinção", "ato de pinçar"],
    "belíssimo": ["muito belo", "lindíssimo", "extremamente bonito", "maravilhoso", "esplêndido", "magnífico", "formosíssimo", "de beleza superlativa", "encantador ao extremo", "graciosíssimo"],
    "belo": ["bonito", "formoso", "lindo", "atraente", "agradável à vista", "esteticamente agradável", "de boa aparência", "encantador", "gracioso", "magnífico"],
    "belvedere": ["mirante", "terraço panorâmico", "ponto de observação", "vista panorâmica", "lugar com bela vista", "varanda com vista", "torre de observação", "miradouro", "local para apreciar a paisagem", "estrutura com vista privilegiada"],
    "belzebu": ["demônio", "diabo", "satã", "príncipe das trevas", "chefe dos demônios", "maligno", "espírito do mal", "inimigo de Deus", "tentador", "senhor das moscas (tradução literal)"],
    "bem": ["bom", "corretamente", "adequadamente", "satisfatoriamente", "vantagem", "benefício", "riqueza", "posse", "propriedade", "ativo"],
    "bem haja": ["obrigado", "muito obrigado", "agradecido", "grato", "obrigada (feminino)", "valeu", "apreciado", "reconhecido", "obrigadinho", "grata (feminino)"],
    "bem-aventurado": ["feliz", "ditoso", "venturoso", "abençoado", "agraciado", "felizardo", "sortudo", "radiante de alegria", "em estado de graça", "bem-sucedido espiritualmente"],
    "bem-aventurança": ["felicidade suprema", "dita", "ventura", "graça divina", "estado de felicidade plena", "alegria celestial", "satisfação espiritual completa", "êxtase espiritual", "estado de graça divina", "felicidade eterna"],
    "bem-conceituado": ["respeitado", "prestigiado", "renomado", "de boa reputação", "conceituado", "bem-visto", "aclamado", "notável", "eminente", "ilustre"],
    "bem-disposto": ["animado", "alegre", "contente", "de bom humor", "otimista", "disposto", "entusiasmado", "risonho", "jovial", "vivaz"],
    "bem-educado": ["cortês", "gentil", "atencioso", "polido", "refinado", "civilizado", "respeitoso", "amável", "cordial", "urbano"],
    "bem-estar": ["conforto", "satisfação", "contentamento", "felicidade", "saúde", "equilíbrio", "harmonia", "bem-estar físico e mental", "qualidade de vida", "estado de satisfação plena"],
    "bem-humorado": ["alegre", "divertido", "jovial", "espirituoso", "engraçado", "bem-disposto", "risonho", "de bom humor", "animado", "otimista"],
    "bem-intencionado": ["bondoso", "generoso", "caridoso", "benevolente", "benévolo", "com boas intenções", "querendo o bem", "com propósito positivo", "com intenção nobre", "com espírito altruísta"],
    "bem-querer": ["afeição", "carinho", "amor", "estima", "simpatia", "ternura", "afeto", "amizade", "boa vontade", "benevolência"],
    "bem-sucedido": ["vitorioso", "triunfante", "bem-afortunado", "próspero", "realizado", "que obteve sucesso", "com êxito", "afortunado", "feliz", "com bom resultado"],
    "bem-vindo": ["recebido com alegria", "acolhido", "saudado", "recebido cordialmente", "bem-chegado", "bem-recebido", "bem-aceito", "com boas-vindas", "hospedado com prazer", "recebido de braços abertos"],
    "bem-visto": ["respeitado", "admirado", "apreciado", "bem-conceituado", "popular", "aceito", "querido", "estimado", "favorecido", "com boa reputação"],
    "bença": ["bênção (forma abreviada)", "licença", "permissão", "aprovação", "proteção divina", "palavra de bênção", "ato de abençoar", "graça", "favor", "amparo"],
    "bênção": ["ato de abençoar", "graça divina", "proteção divina", "palavra de bem", "favor divino", "amparo celestial", "consagração", "aprovação divina", "licença", "permissão"],
    "bênçãos": ["atos de abençoar", "graças divinas", "proteções divinas", "palavras de bem", "favores divinos", "amparos celestiais", "consagrações", "aprovações divinas", "licenças", "permissões"],
    "bendiga": ["abençoe", "louve", "glorifique", "exalte", "celebre", "magnifique", "revere", "santifique", "proteja", "favoreça"],
    "bendito": ["abençoado", "louvado", "glorificado", "exaltado", "sagrado", "santo", "divino", "bem-aventurado", "protegido", "favorecido"],
    "bendizer": ["abençoar", "louvar", "glorificar", "exaltar", "celebrar", "magnificar", "reverenciar", "santificar", "proteger", "favorecer"],
    "beneficência": ["caridade", "filantropia", "generosidade", "bondade", "altruísmo", "ação de fazer o bem", "assistência social", "ajuda ao próximo", "benemerência", "humanitarismo"],
    "beneficente": ["caridoso", "filantrópico", "generoso", "bondoso", "altruísta", "que faz o bem", "de assistência social", "que ajuda o próximo", "benemérito", "humanitário"],
    "beneficiação": ["melhoramento", "aprimoramento", "valorização", "processamento", "tratamento", "refinamento", "enobrecimento", "otimização", "qualificação", "transformação para melhor"],
    "beneficiado": ["favorecido", "agraciado", "vantajado", "ajudado", "amparado", "protegido", "auxiliado", "premiado", "contemplado", "sorteado"],
    "beneficiamento": ["melhoramento", "aprimoramento", "valorização", "processamento", "tratamento", "refinamento", "enobrecimento", "otimização", "qualificação", "transformação para melhor"],
    "beneficiar": ["favorecer", "avantajar", "ajudar", "amparar", "proteger", "auxiliar", "premiar", "contemplar", "sortear", "melhorar"],
    "beneficiário": ["favorecido", "agraciado", "vantajado", "receptor de benefício", "quem recebe ajuda", "quem é amparado", "quem é protegido", "quem é auxiliado", "quem é contemplado", "quem é sorteado"],
    "benefício": ["vantagem", "proveito", "favor", "auxílio", "ajuda", "amparo", "proteção", "graça", "mercê", "bem"],
    "benéfico": ["favorável", "vantajoso", "útil", "proveitoso", "salutar", "saudável", "bom", "positivo", "benigno", "propício"],
    "benemerência": ["mérito", "virtude", "bondade", "generosidade", "altruísmo", "ação meritória", "ato de benemerência", "qualidade de quem merece reconhecimento", "benevolência", "filantropia"],
    "benemérito": ["meritório", "virtuoso", "bondoso", "generoso", "altruísta", "que merece reconhecimento", "caridoso", "filantrópico", "benéfico", "nobre"],
    "beneplácito": ["aprovação", "consentimento", "anuência", "autorização", "permissão", "acordo", "concordância", "visto bom", "assentimento", "sanção"],
    "benesse": ["favor", "graça", "mercê", "benefício", "dádiva", "presente", "dom", "ajuda", "auxílio", "amparo"],
    "benesses": ["favores", "graças", "mercês", "benefícios", "dádivas", "presentes", "dons", "ajudas", "auxílios", "amparos"],
    "benevolência": ["bondade", "generosidade", "caridade", "afabilidade", "simpatia", "boa vontade", "clemência", "indulgência", "humanidade", "altruísmo"],
    "benevolente": ["bondoso", "generoso", "caridoso", "afável", "simpático", "com boa vontade", "clemente", "indulgente", "humano", "altruísta"],
    "benévolo": ["bondoso", "generoso", "caridoso", "afável", "simpático", "com boa vontade", "clemente", "indulgente", "humano", "altruísta"],
    "benfazejo": ["benéfico", "salutar", "proveitoso", "útil", "bom", "positivo", "favorável", "vantajoso", "benigno", "propício"],
    "benfeito": ["bem feito", "bem realizado", "feito com capricho", "bem acabado", "primoroso", "excelente", "ótimo", "perfeito", "caprichado", "bem executado"],
    "benfeitor": ["benemérito", "benfeitora (feminino)", "protetor", "patrono", "mecenas", "quem faz o bem", "quem ajuda", "quem ampara", "quem protege", "quem auxilia"],
    "benfeitoria": ["melhoramento", "obra de melhoria", "reforma", "reparação", "aprimoramento", "valorização", "incremento", "melhora", "obra útil", "intervenção para melhorar"],
    "bengala": ["cajado", "vara de apoio", "bordão", "bastão", "apoio para caminhar", "instrumento para auxiliar a marcha", "vara", "suporte", "instrumento ortopédico", "símbolo de autoridade (em certos contextos)"],
    "benignamente": ["bondosamente", "generosamente", "caridosamente", "afavelmente", "benevolentemente", "com benignidade", "com clemência", "com indulgência", "com brandura", "com doçura"],
    "benignidade": ["bondade", "generosidade", "caridade", "afabilidade", "benevolência", "clemência", "indulgência", "brandura", "doçura", "suavidade"],
    "benigno": ["bondoso", "brando", "suave", "não maligno (médico)", "favorável", "benéfico", "clemente", "indulgente", "amável", "gentil"],
    "benjamim": ["árvore aromática", "planta ornamental", "tipo de figueira", "espécie vegetal", "planta de interior", "vegetal decorativo", "árvore de pequeno porte", "planta nativa de regiões tropicais", "flora", "espécime botânico"],
    "benquerença": ["afeição", "carinho", "amor", "estima", "simpatia", "ternura", "afeto", "amizade", "boa vontade", "benevolência"],
    "benquerer": ["amar", "querer bem", "afeiçoar-se", "estimar", "ter carinho por", "simpatizar com", "ter afeto por", "prezar", "gostar", "admirar"],
    "benquisto": ["querido", "amado", "estimado", "apreciado", "bem-visto", "popular", "favorito", "predileto", "aceito", "bem-recebido"],
    "bens": ["riquezas", "fortuna", "patrimônio", "propriedades", "haveres", "capitais", "ativos", "recursos", "posses", "fazenda"],
    "benzer": ["fazer o sinal da cruz sobre", "invocar proteção divina sobre", "abençoar", "consagrar", "santificar", "livrar do mal", "proteger espiritualmente", "fazer orações por", "impetrar bênçãos", "pedir proteção divina"],
    "benzinho": ["querido", "amado", "carinho", "tesouro", "xodó", "bem-amado", "afeto", "ternura", "meu bem", "queridinho"],
    "benzoico": ["ácido benzoico (química)", "conservante alimentar", "antimicrobiano", "fungicida", "substância química", "composto orgânico", "ácido carboxílico aromático", "conservante de alimentos e bebidas", "produto químico industrial", "ingrediente farmacêutico"],
    "beócio": ["ignorante", "rude", "grosseiro", "inculto", "estúpido", "tolo", "obtuso", "lerdo", "boçal", "palerma"],
    "beque": ["jogador de defesa (futebol)", "zagueiro (futebol)", "defensor (esportes)", "jogador da retaguarda", "atleta de defesa", "posicionamento defensivo", "jogador que protege a meta", "defesa central", "lateral (futebol)", "zagueiro central"],
    "berçário": ["creche", "escola infantil", "jardim de infância (para bebês)", "local para cuidar de bebês", "instituição para crianças pequenas", "lugar para bebês", "sala de bebês", "ambiente para recém-nascidos", "local de acolhimento infantil", "centro de educação infantil (para os menores)"],
    "berço": ["cama de bebê", "leito infantil", "moisés", "cama para recém-nascido", "lugar de nascimento", "origem", "nascimento", "procedência", "família", "linhagem"],
    "bereba": ["bolha na pele", "vesícula", "pústula", "erupção cutânea", "ferida pequena na pele", "lesão dermatológica", "mancha na pele", "irritação cutânea", "problema de pele", "afecção cutânea"],
    "bergamota": ["fruta cítrica", "laranja pequena e aromática", "tangerina (em algumas regiões)", "cidra (em algumas regiões)", "fruto da bergamoteira", "cítrico perfumado", "fruta da estação", "alimento saudável", "fonte de vitamina C", "fruta cítrica aromática"],
    "berilo": ["mineral precioso", "pedra preciosa", "gema", "cristal", "esmeralda (variedade verde)", "água-marinha (variedade azul)", "morganita (variedade rosa)", "heliodoro (variedade amarela)", "goshenita (variedade incolor)", "pedra ornamental"],
    "berimbau": ["instrumento musical afro-brasileiro", "arco musical", "instrumento de corda percutida", "instrumento da capoeira", "arco com cabaça", "instrumento de percussão indireta", "instrumento de origem africana", "música afro-brasileira", "som característico da capoeira", "instrumento musical rústico"],
    "beringela": ["planta hortícola", "fruto comestível roxo", "solanum melongena", "legume roxo", "alimento vegetal", "hortaliça", "planta da família das solanáceas", "ingrediente culinário", "produto da horta", "vegetal roxo alongado"],
    "berinjela": ["planta hortícola", "fruto comestível roxo", "solanum melongena", "legume roxo", "alimento vegetal", "hortaliça", "planta da família das solanáceas", "ingrediente culinário", "produto da horta", "vegetal roxo alongado"],
    "berlinda": ["carruagem antiga", "veículo de luxo antigo", "coche", "carroça fechada", "veículo de tração animal elegante", "antigo meio de transporte", "carruagem nobre", "veículo histórico", "carro antigo", "meio de transporte aristocrático"],
    "berma": ["margem de estrada", "acostamento", "bordo da estrada", "faixa lateral da via", "espaço ao lado da pista", "lateral da rodovia", "parte não pavimentada da estrada", "zona de segurança da estrada", "faixa de rolamento", "espaço contíguo à pista"],
    "bernardo": ["nome próprio masculino", "prenome masculino", "apelido", "alcunha", "nome de batismo", "designação pessoal", "identificador masculino", "nome de homem", "antropônimo masculino", "vocativo masculino"],
    "berrar": ["gritar", "clamar", "vociferar", "urrar", "bradar", "exclamar alto", "dar berros", "gritar fortemente", "clamar com força", "soltar a voz com intensidade"],
    "berro": ["grito", "clamor", "vociferação", "urro", "brado", "exclamação alta", "grito forte", "clamação forte", "voz alta e intensa", "soltura de voz intensa"],
    "berruga": ["verruga", "excrecência cutânea", "tumor benigno da pele", "lesão na pele causada por vírus", "crescimento anormal da pele", "protuberância na pele", "neoformação cutânea benigna", "tumor epidérmico benigno", "lesão viral da pele", "crescimento epitelial benigno"],
    "besouro": ["inseto coleóptero", "coleóptero", "bicho com carapaça dura", "inseto com élitros", "bicho que voa", "inseto voador", "ser vivo pequeno", "bicho que anda", "inseto comum", "coleóptero comum"],
    "best-seller": ["livro mais vendido", "campeão de vendas", "sucesso editorial", "obra literária de grande vendagem", "livro popular", "êxito de vendas literárias", "livro com muitas cópias vendidas", "sucesso de livraria", "livro de grande aceitação", "obra literária de sucesso comercial"],
    "besta": ["animal irracional", "bicho", "quadrúpede", "fera", "animal selvagem", "pessoa ignorante", "pessoa estúpida", "tolo", "idiota", "imbecil"],
    "besteira": ["bobagem", "tolice", "asneira", "palavra vã", "non sense", "absurdo", "despropósito", "futilidade", "insignificância", "boboca"],
    "bestial": ["animalesco", "brutal", "selvagem", "feroz", "cruel", "desumano", "violento", "bárbaro", "instintivo", "primitivo"],
    "bestialidade": ["brutalidade", "selvageria", "ferocidade", "crueldade extrema", "desumanidade", "violência animal", "comportamento animalesco", "instinto bruto", "ação cruel e selvagem", "natureza bestial"],
    "bestializado": ["embrutecido", "animalizado", "tornado brutal", "selvagem", "feroz", "desumano", "violento", "rude", "grosseiro", "inculto"],
    "bestializar": ["embrutecer", "animalizar", "tornar brutal", "desumanizar", "tornar selvagem", "tornar feroz", "tornar rude", "tornar grosseiro", "tornar inculto", "privar da razão"],
    "bestificado": ["tolo", "estúpido", "idiota", "imbecil", "pateta", "palerma", "lerdo", "obtuso", "burro", "alimária"],
    "bestunto": ["entendimento", "juízo", "razão", "inteligência", "mente", "cabeça", "capacidade mental", "discernimento", "lucidez", "compreensão"],
    "besuntado": ["untado", "lubrificado", "engraxado", "azeitado", "oleado", "lambuzado", "sujo de gordura", "coberto de óleo", "melado", "pegajoso"],
    "besuntar": ["untar", "lubrificar", "engraxar", "azeitar", "olear", "lambuzar", "cobrir com gordura", "cobrir com óleo", "melar", "engordurar"],
    "beta": ["segunda letra do alfabeto grego", "segundo lugar", "segunda versão (teste)", "fase de testes de software", "onda cerebral (neurologia)", "radiação beta (física)", "variedade de beterraba", "segundo em importância", "segunda opção", "segundo estágio"],
    "beterraba": ["raiz comestível", "legume vermelho", "beta vulgaris", "alimento nutritivo", "produto da horta", "hortaliça de raiz", "planta bienal", "ingrediente culinário", "alimento rico em vitaminas", "vegetal de cor intensa"],
    "betume": ["asfalto", "piche", "alcatrão", "material impermeabilizante", "substância viscosa escura", "produto derivado do petróleo", "material para pavimentação", "substância para vedação", "material betuminoso", "aglomerante asfáltico"],
    "bexiga": ["órgão do sistema urinário", "vesícula urinária", "balão", "bola inflável", "objeto de borracha que se enche de ar", "brinquedo inflável", "instrumento musical de percussão rústico", "doença infecciosa", "varíola", "moléstia viral"],
    "bexiguento": ["com bexigas", "com varíola", "doente de varíola", "cheio de bolhas", "com erupções na pele", "com lesões vesiculares", "afetado pela varíola", "com marcas de bexiga", "com sequelas da varíola", "que teve varíola"],
    "bezerro": ["filhote de vaca", "novilho", "vitelo", "animal jovem da espécie bovina", "boi jovem", "vaca jovem", "gado jovem", "animal de criação", "mamífero jovem", "bovino jovem"],
    "bianual": ["que ocorre duas vezes por ano", "semestral", "que dura dois anos", "a cada dois anos", "de dois em dois anos", "com frequência semestral", "com periodicidade de dois anos", "duas vezes anualmente", "a cada semestre", "com intervalo de dois anos"],
    "biba": ["lésbica (termo informal e às vezes pejorativo)", "mulher homossexual", "homossexual feminina", "mulher que sente atração por outras mulheres", "pessoa LGBT+", "pessoa queer", "mulher gay", "mulher que ama mulheres", "mulher com orientação sexual não heterossexual", "mulher com identidade de gênero feminina e atração por outras mulheres"],
    "bibelô": ["objeto decorativo pequeno", "enfeite", "quinquilharia", "bugiganga", "objeto de adorno", "objeto de coleção", "peça de decoração", "objeto de valor sentimental", "objeto de arte pequeno", "objeto de decoração delicado"],
    "bíblico": ["relativo à Bíblia", "sagrado", "escriturístico", "das Sagradas Escrituras", "canônico", "inspirado por Deus (segundo a fé)", "relativo ao cristianismo e ao judaísmo", "das escrituras judaico-cristãs", "que se encontra na Bíblia", "de teor religioso"],
    "bibliografia": ["lista de livros consultados", "referências bibliográficas", "fontes de pesquisa", "relação de obras citadas", "catálogo de livros", "relação de publicações", "lista de autores e obras", "referencial teórico", "literatura consultada", "obras de referência"],
    "biblioteca": ["coleção de livros", "acervo literário", "casa dos livros", "local de estudo e leitura", "centro de informação", "depósito de livros", "livraria pública", "lugar para empréstimo de livros", "instituição cultural", "arquivo de livros"],
    "biboca": ["lugar pequeno e modesto", "casa humilde", "bar pequeno e simples", "estalagem modesta", "lugar isolado", "esconderijo", "antro", "espelunca", "tugúrio", "barracão"],
    "bica": ["pequena fonte", "chafariz pequeno", "cano de água", "torneira", "saída de água", "olho d'água pequeno", "filete de água", "jorro de água fino", "fontezinha", "mina d'água pequena"],
    "bicameral": ["com duas câmaras legislativas", "de duas casas parlamentares", "com sistema de duas assembleias", "de parlamento duplo", "com duas instâncias legislativas", "de legislativo em dois níveis", "com duas seções legislativas", "de parlamento bicameral", "com duas câmaras de representação", "de sistema legislativo duplo"],
    "bicampeão": ["campeão duas vezes", "bi-campeão", "duas vezes vencedor", "duas vezes campeão", "vencedor em duas edições", "campeão por duas vezes", "duplo campeão", "campeão em duas ocasiões", "vencedor de dois campeonatos", "campeão repetido"],
    "bicanca": ["tipo de embarcação pequena", "canoa estreita", "bote pequeno", "embarcação leve", "pequeno barco a remo", "canoa comprida e estreita", "embarcação fluvial pequena", "barco estreito", "canoa de pesca", "pequena embarcação de rio"],
    "bicarbonato": ["sal ácido de sódio", "hidrogenocarbonato de sódio", "bicarbonato de sódio (química)", "fermento químico", "antiácido", "regulador de pH", "ingrediente culinário", "produto químico", "sal de cozinha ácido", "bicarbonato para uso doméstico"],
    "bicefalia": ["condição de ter duas cabeças", "anomalia congênita com duas cabeças", "dupla cefalia", "monstro de duas cabeças", "deformidade com duas cabeças", "animal com duas cabeças", "ser com duas cabeças", "duplicidade cefálica", "anomalia craniofacial dupla", "organismo com duas cabeças distintas"],
    "bicentenário": ["período de duzentos anos", "ducentésimo aniversário", "comemoração de duzentos anos", "jubileu de duzentos anos", "evento de duzentos anos", "celebração do século XX", "duplo centenário", "ocorrência a cada duzentos anos", "relativo a duzentos anos", "festa de duzentos anos"],
    "bíceps": ["músculo do braço", "músculo flexor do braço", "músculo braquial anterior", "músculo da parte superior do braço", "músculo esquelético do braço", "músculo motor do braço", "músculo da flexão do cotovelo", "músculo da supinação do antebraço", "músculo braquial", "músculo do membro superior"],
    "bicha": ["fila", "sequência", "enfiada", "cordão", "série", "homossexual masculino (termo pejorativo)", "gay (termo pejorativo)", "viado (termo pejorativo)", "afeminado (termo pejorativo)", "homossexual (termo pejorativo)"],
    "bichado": ["infestado de bichos", "com vermes", "carcomido", "apodrecido", "deteriorado", "estragado", "corroído por larvas", "com parasitas", "com bichos dentro", "infetado por insetos"],
    "bichano": ["gato", "felino doméstico", "miau", "gatinho", "animal de estimação", "mascote felino", "bicho peludo que mia", "animal doméstico", "mimoso", "ronronador"],
    "bichão": ["animal grande", "inseto grande", "verme grande", "pessoa esperta", "pessoa astuta", "pessoa influente", "figura importante", "animal de grande porte", "inseto de tamanho considerável", "verme de grande dimensão"],
    "bicheiro": ["quem explora o jogo do bicho", "apontador do jogo do bicho", "banqueiro do jogo do bicho", "contraventor", "pessoa envolvida em jogo ilegal", "quem recolhe apostas do jogo do bicho", "organizador do jogo do bicho", "pessoa que trabalha com o jogo do bicho", "apostador do jogo do bicho (informal)", "quem lucra com o jogo do bicho"],
    "bichinha": ["animal pequeno", "inseto pequeno", "verme pequeno", "pessoa frágil", "pessoa delicada", "pessoa sensível", "homossexual masculino (termo pejorativo)", "gay (termo pejorativo)", "viado (termo pejorativo)", "afeminado (termo pejorativo)"],
    "bichinho": ["animal pequeno", "inseto pequeno", "verme pequeno", "animal de estimação pequeno", "mascote pequeno", "bicho miúdo", "ser vivo pequeno", "criatura pequena", "pequeno animal", "pequeno inseto"],
    "bicho": ["animal", "ser vivo não humano", "criatura", "fera", "inseto", "verme", "pessoa (informal)", "coisa estranha", "algo desconhecido", "monstro"],
    "bicho do mato": ["animal selvagem", "animal silvestre", "criatura da floresta", "animal que vive na mata", "fauna nativa", "animal não domesticado", "bicho da selva", "animal do campo", "espécie selvagem", "animal que não é de criação"],
    "bicicleta": ["veículo de duas rodas", "bike", "magrela", "meio de transporte individual", "veículo movido a pedal", "bicla", "velocípede", "meio de locomoção de duas rodas", "veículo ecológico", "transporte não motorizado"],
    "bico": ["extremidade pontiaguda", "ponta", "proeminência", "saliente", "gorjeta", "extra", "trabalho informal", "emprego temporário", "bico de ave", "bico de mamífero"],
    "bicolor": ["de duas cores", "em duas cores", "com duas tonalidades", "que apresenta duas cores", "com duas pigmentações", "de duplo matiz", "em dois tons", "com duas colorações", "que tem duas cores distintas", "com duas cores predominantes"],
    "bidimensional": ["de duas dimensões", "em duas dimensões", "comprimento e largura", "plano", "superficial", "em superfície", "com duas medidas", "de duas grandezas", "em espaço bidimensional", "com duas coordenadas"],
    "bidirecional": ["em duas direções", "de mão dupla", "que se move em dois sentidos", "com fluxo em duas direções", "que opera em dois sentidos", "de duplo sentido", "com comunicação em duas vias", "que permite movimento em ambos os sentidos", "com tráfego em ambos os sentidos", "que atua em duas direções opostas"],
    "bienal": ["que ocorre a cada dois anos", "de dois em dois anos", "com periodicidade de dois anos", "que dura dois anos", "que se realiza de dois em dois anos", "com intervalo de dois anos", "que tem duração bienal", "que se repete a cada biênio", "de frequência bienal", "que acontece em anos alternados"],
    "biênio": ["período de dois anos", "espaço de tempo de dois anos", "dois anos consecutivos", "lapso de dois anos", "período bienal", "dois anos seguidos", "intervalo de dois anos", "duração de dois anos", "espaço temporal de dois anos", "ciclo de dois anos"],
    "bifásico": ["com duas fases", "de duas etapas", "em duas partes", "com dois estágios", "de dupla fase", "em dois tempos", "com duas componentes", "que apresenta duas fases distintas", "de sistema com duas fases", "com dois momentos distintos"],
    "bife": ["pedaço de carne", "fatia de carne", "carne bovina grelhada ou frita", "filé de carne", "corte de carne", "alimento de origem animal", "prato de carne", "refeição com carne", "pedaço de carne para grelhar", "carne para fritar"],
    "bifurcação": ["divisão em dois ramos", "ramificação", "forquilha", "bifurcamento", "divisão binária", "ponto de separação", "lugar onde algo se divide em dois", "divisão em duas partes", "ramo duplo", "separação em dois caminhos"],
    "bifurcado": ["dividido em dois", "ramificado em dois", "em forma de forquilha", "com duas pontas", "bifurcado", "com duas ramificações", "que se divide em dois ramos", "que tem duas extremidades", "em forma de Y", "com duas vias"],
    "bifurcar": ["dividir-se em dois", "ramificar-se em dois", "formar uma forquilha", "separar-se em dois ramos", "bifurcar-se", "dividir em duas partes", "criar duas ramificações", "ter duas pontas", "tomar forma de Y", "abrir-se em dois caminhos"],
    "bigamia": ["casamento com duas pessoas ao mesmo tempo", "estado de casado com duas cônjuges", "poligamia (especificamente com duas esposas ou dois maridos)", "crime de ter dois cônjuges simultaneamente", "união matrimonial dupla", "casamento duplo", "estado civil ilegal", "prática de ter dois cônjuges", "violação das leis matrimoniais", "casamento múltiplo (com dois)"],
    "bígamo": ["casado com duas pessoas ao mesmo tempo", "que tem dois cônjuges simultaneamente", "polígamo (especificamente com duas esposas ou dois maridos)", "que cometeu bigamia", "em estado de bigamia", "casado duplamente", "com dois cônjuges", "que vive em bigamia", "que possui dois laços matrimoniais", "que infringiu as leis matrimoniais"],
    "bigode": ["pelos que crescem acima do lábio superior", "pilosidade facial acima da boca", "atributo masculino facial", "pelos no buço", "ornamento facial masculino", "sinal de masculinidade", "parte da barba acima do lábio", "pelugem labial superior", "atributo estético facial masculino", "pelos faciais superiores"],
    "bigorna": ["ferramenta de ferreiro", "suporte de metal para forjar", "instrumento para moldar metal", "bloco de aço para trabalhar metal", "ferramenta de metalurgia", "suporte para martelar metal", "instrumento de oficina mecânica", "ferramenta de trabalho em metal", "suporte para deformar metal", "instrumento de metal pesado"],
    "bigorrilha": ["pequena engrenagem", "roda dentada pequena", "catraca pequena", "mecanismo pequeno de engrenagem", "roda com dentes pequenos", "peça mecânica pequena com dentes", "engrenagem miúda", "roda dentada miúda", "mecanismo de catraca pequeno", "pequena roda de transmissão"],
    "biju": ["joia de pouco valor", "bijuteria", "adorno barato", "enfeite de baixo custo", "joia de fantasia", "acessório de moda de baixo valor", "objeto de adorno sem valor intrínseco", "joia falsa", "ornamento de pouco valor", "acessório de moda acessível"],
    "bijuteria": ["joias de pouco valor", "adornos baratos", "enfeites de baixo custo", "joias de fantasia", "acessórios de moda de baixo valor", "objetos de adorno sem valor intrínseco", "joias falsas", "ornamentos de pouco valor", "acessórios de moda acessíveis", "joias não preciosas"],
    "bilateral": ["de dois lados", "entre duas partes", "mútuo", "recíproco", "de mão dupla", "em duas direções", "com duas faces", "com dois aspectos", "que envolve duas partes", "de acordo entre duas partes"],
    "bile": ["fel", "líquido amargo produzido pelo fígado", "secreção hepática", "humor biliar", "líquido digestivo", "produto do fígado", "fluido digestivo amarelado", "substância produzida no fígado", "secreção do fígado para a digestão", "líquido que auxilia na digestão de gorduras"],
    "bilha": ["vasilha de barro", "pote de barro", "cântaro", "jarro de barro", "recipiente de cerâmica", "vaso de argila", "utensílio de barro para líquidos", "recipiente de barro para água", "vaso de barro para flores", "utensílio doméstico de barro"],
    "bilhão": ["mil milhões", "1.000.000.000", "milhar de milhão", "um seguido de nove zeros", "mil vezes um milhão", "unidade numérica grande", "número com nove zeros após a unidade", "mil milhões de unidades", "grande quantidade numérica", "milhões de milhões"],
    "bilhete": ["pequeno papel escrito", "mensagem curta", "recado", "nota", "papelinho", "carta curta", "bilhete de loteria", "ingresso", "vale", "cupom"],
    "bilíngue": ["que fala duas línguas", "que se expressa em dois idiomas", "que tem domínio de duas línguas", "fluente em dois idiomas", "que usa duas línguas", "que conhece duas línguas", "com competência em dois idiomas", "que se comunica em duas línguas", "que aprendeu duas línguas", "que tem bilinguismo"],
    "bilinguismo": ["capacidade de falar duas línguas", "domínio de dois idiomas", "uso de duas línguas", "conhecimento de duas línguas", "fluência em dois idiomas", "competência em duas línguas", "habilidade de se expressar em dois idiomas", "aprendizado de duas línguas", "uso cotidiano de duas línguas", "familiaridade com dois idiomas"],
    "bilioso": ["com excesso de bile", "com problemas de fígado", "irascível", "irritadiço", "colérico", "mal-humorado", "amargo", "ressentido", "com temperamento bilioso", "propenso à irritação"],
    "bílis": ["fel", "bile", "líquido amargo produzido pelo fígado", "secreção hepática", "humor biliar", "líquido digestivo", "produto do fígado", "fluido digestivo amarelado", "substância produzida no fígado", "secreção do fígado para a digestão"],
    "bilontra": ["vadio", "vagabundo", "errante", "andarilho", "ocioso", "preguiçoso", "malandro", "pessoa sem ocupação fixa", "pessoa que vive sem rumo", "pessoa que evita o trabalho"],
    "bilro": ["peça de madeira para renda de bilros", "pequeno cilindro de madeira", "utensílio de rendeira", "instrumento para fazer renda", "fuselo", "vareta de madeira para artesanato", "peça para tecer renda", "instrumento de filigrana", "pequeno bastão de madeira", "utensílio para manufatura têxtil"],
    "biltre": ["canalha", "velhaco", "patife", "indivíduo desprezível", "pessoa sem caráter", "malandro", "trapaceiro", "pessoa baixa e vil", "escória", "gente ordinária"],
    "bimestral": ["que ocorre a cada dois meses", "de dois em dois meses", "com periodicidade bimestral", "a cada bimestre", "com frequência de dois meses", "que se repete a cada bimestre", "de dois em dois meses", "que tem duração de dois meses", "que acontece bimestralmente", "com intervalo de dois meses"],
    "bimestre": ["período de dois meses", "espaço de tempo de dois meses", "dois meses consecutivos", "lapso de dois meses", "período bimestral", "dois meses seguidos", "intervalo de dois meses", "duração de dois meses", "espaço temporal de dois meses", "ciclo de dois meses"],
    "binário": ["de dois elementos", "composto por dois", "duplo", "par", "em pares", "de base dois (matemática)", "sistema numérico de base dois", "com duas opções", "de duas partes", "dual"],
    "binga": ["jogo de azar com números", "jogo de cartelas numeradas", "jogo de bingo", "sorteio de números", "jogo de bingo eletrônico", "jogo com bolas numeradas", "atividade de entretenimento com sorteio", "jogo de salão", "jogo de azar popular", "atividade recreativa com números"],
    "binóculo": ["instrumento óptico de ampliação", "luneta de dois tubos", "instrumento para ver à distância com os dois olhos", "óculos de longo alcance", "instrumento para observação distante", "telescópio binocular", "instrumento para ampliar a visão distante", "óptica binocular", "instrumento de observação", "aparelho para visão remota"],
    "binômio": ["expressão algébrica com dois termos", "polinômio de dois termos", "expressão matemática com duas partes", "soma ou diferença de dois monômios", "expressão algébrica com dois membros", "termo matemático com duas parcelas", "expressão algébrica com dois somandos", "expressão algébrica com dois subtraendos", "expressão algébrica de duas partes", "expressão algébrica com dois componentes"],
    "bio": ["vida (prefixo)", "relativo à vida", "biológico", "biografia (abreviação informal)", "relativo a organismos vivos", "da natureza", "natural", "orgânico", "ecológico", "sustentável"],
    "biocida": ["substância que mata organismos vivos", "pesticida", "herbicida", "fungicida", "bactericida", "agente antimicrobiano", "produto químico para controle de pragas", "veneno para seres vivos", "agente letal para organismos", "produto para eliminação de vida"],
    "biodegradável": ["que se decompõe naturalmente", "que se degrada por ação biológica", "decomponível por microrganismos", "que se dissolve na natureza", "que se desintegra naturalmente", "ecologicamente correto", "amigo do ambiente", "que não polui a longo prazo", "que retorna ao ciclo natural", "que se degrada biologicamente"],
    "biodiversidade": ["diversidade de vida", "variedade de espécies", "riqueza biológica", "variedade de seres vivos", "diversidade ecológica", "variedade de ecossistemas", "riqueza de formas de vida", "variedade genética", "diversidade de organismos", "riqueza da vida na Terra"],
    "bioética": ["ética da vida", "ética das ciências da vida", "ética da biologia e da medicina", "reflexão ética sobre a vida", "moral aplicada à biologia", "ética das biotecnologias", "ética das pesquisas biológicas", "ética das práticas médicas", "ética dos avanços científicos na vida", "ética da saúde e do meio ambiente"],
    "biografia": ["história da vida de alguém", "relato da vida de uma pessoa", "narrativa da vida de um indivíduo", "vida escrita de alguém", "perfil biográfico", "histórico de vida", "memórias de alguém escritas por outro", "relato da trajetória de vida", "vida contada por um autor", "narrativa da existência de alguém"],
    "biógrafo": ["escritor de biografias", "autor de biografias", "quem escreve sobre a vida de outros", "autor de relatos biográficos", "quem narra a vida de alguém", "escritor de histórias de vida", "autor de perfis biográficos", "quem conta a vida de pessoas", "escritor de trajetórias de vida", "autor de narrativas da existência de alguém"],
    "biologia": ["ciência da vida", "estudo dos seres vivos", "ciência dos organismos", "estudo da natureza viva", "ciência da vida e dos processos vitais", "estudo da estrutura, função, crescimento, evolução e distribuição dos seres vivos", "ciência que investiga os organismos", "estudo da vida em todas as suas formas", "ciência dos sistemas vivos", "investigação científica da vida"],
    "biológica": ["relativa à biologia", "da vida", "dos seres vivos", "orgânica", "natural", "vital", "fisiológica", "genética", "ecológica", "relativa aos organismos"],
    "biologicamente": ["do ponto de vista da biologia", "em termos biológicos", "quanto à vida", "relativamente aos seres vivos", "organicamente", "naturalmente (em termos biológicos)", "vitalmente", "fisiologicamente", "geneticamente", "ecologicamente"],
    "biológico": ["relativo à biologia", "da vida", "dos seres vivos", "orgânico", "natural", "vital", "fisiológico", "genético", "ecológico", "relativo aos organismos"],
    "biólogo": ["cientista da biologia", "estudioso dos seres vivos", "pesquisador da vida", "especialista em organismos", "profissional da biologia", "cientista da natureza viva", "investigador dos processos vitais", "estudioso da estrutura e função dos seres vivos", "cientista que investiga os organismos", "profissional da ciência da vida"],
    "bioma": ["conjunto de ecossistemas", "comunidade biológica", "grande área com clima e vegetação semelhantes", "região com características ecológicas homogêneas", "conjunto de vida vegetal e animal", "unidade biogeográfica", "ecossistema de grande escala", "região com flora e fauna características", "conjunto de ecossistemas interligados", "área com condições ambientais uniformes"],
    "biomassa": ["matéria orgânica utilizada como fonte de energia", "matéria orgânica renovável", "massa biológica", "matéria orgânica de origem vegetal ou animal", "combustível biológico", "fonte de energia renovável de origem orgânica", "recurso energético renovável de origem biológica", "matéria orgânica para produção de energia", "biocombustível sólido", "matéria orgânica para geração de calor ou eletricidade"],
    "biombo": ["divisória móvel", "painel separador", "paravento", "divisória de ambiente", "estrutura para separar espaços", "tela divisória", "objeto para criar privacidade", "divisória decorativa", "painel articulado", "estrutura portátil para dividir ambientes"],
    "biônica": ["estudo de sistemas biológicos para aplicar em tecnologia", "inspiração biológica para a engenharia", "aplicação de princípios biológicos à tecnologia", "engenharia inspirada na natureza", "design baseado em sistemas vivos", "tecnologia inspirada na biologia", "engenharia biomimética", "aplicação de soluções biológicas à tecnologia", "desenvolvimento tecnológico com base em modelos biológicos", "engenharia que imita a vida"],
    "biônico": ["inspirado em sistemas biológicos", "que imita a natureza", "com partes artificiais que simulam funções biológicas", "artificial com funções biológicas", "tecnologicamente avançado com base na biologia", "que utiliza princípios biológicos em tecnologia", "que simula organismos vivos", "com próteses avançadas", "com implantes tecnológicos que substituem funções biológicas", "que aplica a biônica"],
    "biopsicológico": ["que relaciona biologia e psicologia", "que considera aspectos biológicos e psicológicos", "que integra fatores biológicos e mentais", "que envolve a interação entre corpo e mente", "que estuda a base biológica do comportamento", "que analisa a influência da biologia na psicologia", "que aborda a relação entre o físico e o psíquico", "que considera os aspectos somáticos e mentais", "que investiga a interface entre biologia e comportamento", "que relaciona processos biológicos com fenômenos psicológicos"],
    "biopsicossocial": ["que relaciona biologia, psicologia e sociedade", "que considera aspectos biológicos, psicológicos e sociais", "que integra fatores biológicos, mentais e sociais", "que envolve a interação entre corpo, mente e ambiente social", "que estuda a base biológica, psicológica e social do comportamento", "que analisa a influência da biologia, psicologia e sociedade", "que aborda a relação entre o físico, o psíquico e o social", "que considera os aspectos somáticos, mentais e sociais", "que investiga a interface entre biologia, psicologia e contexto social", "que relaciona processos biológicos e psicológicos com fatores sociais"],
    "bioquímica": ["química dos seres vivos", "estudo das moléculas biológicas", "química da vida", "ciência que estuda os processos químicos nos organismos", "estudo das reações químicas nos seres vivos", "química dos sistemas biológicos", "ciência das moléculas e processos biológicos", "investigação química da vida", "estudo das substâncias e transformações químicas nos organismos", "química dos componentes e processos celulares"],
    "biosfera": ["conjunto de todos os ecossistemas da Terra", "camada da Terra onde existe vida", "totalidade dos seres vivos e seus ambientes", "esfera da vida", "sistema ecológico global", "parte do planeta habitada por organismos", "conjunto de todos os biomas", "sistema que inclui todos os seres vivos e seus habitats", "camada da Terra com vida", "totalidade da vida no planeta"],
    "biota": ["conjunto de seres vivos de uma região", "flora e fauna de um local", "vida vegetal e animal de um ambiente", "comunidade de organismos de uma área", "conjunto de espécies de um ecossistema", "vida biológica de uma região", "totalidade dos organismos vivos de um local", "conjunto de seres vivos de um bioma", "vida vegetal e animal de um habitat", "comunidade biológica de uma área geográfica"],
    "biotecnologia": ["tecnologia baseada na biologia", "uso de organismos vivos para fins tecnológicos", "aplicação de princípios biológicos à tecnologia", "engenharia genética e biológica", "tecnologia dos seres vivos", "uso de processos biológicos para produção", "aplicação da biologia para criar produtos e processos", "tecnologia que explora sistemas biológicos", "engenharia biológica aplicada", "uso de organismos ou seus componentes para aplicações tecnológicas"],
    "biótico": ["relativo aos seres vivos", "da vida", "biológico", "que envolve organismos vivos", "que faz parte da biota", "relativo aos componentes vivos de um ecossistema", "que interage com outros seres vivos", "que depende de organismos vivos", "que é produzido por seres vivos", "que influencia outros seres vivos"],
    "biótipa": ["tipo biológico", "conjunto de características físicas e fisiológicas", "tipo constitucional", "tipo morfológico", "conjunto de traços físicos e temperamentais", "tipo somático", "tipo físico", "conjunto de características biológicas", "tipo de constituição física", "conjunto de atributos físicos e funcionais"],
    "bip": ["som curto e agudo", "apito breve", "som eletrônico curto", "sinal sonoro breve", "pito", "som de bipe", "som curto e intermitente", "sinal acústico curto", "som de alerta curto", "som de confirmação breve"],
    "bípede": ["que anda sobre duas pernas", "de duas patas", "com dois pés", "que se locomove sobre dois membros inferiores", "que tem duas pernas", "que caminha sobre dois apoios", "de locomoção bipedal", "que utiliza duas pernas para andar", "com sistema de locomoção em duas pernas", "que se sustenta sobre dois membros inferiores"],
    "bipolar": ["com dois polos", "com duas extremidades opostas", "com duas fases ou estados extremos", "que alterna entre extremos", "com variação entre opostos", "de dupla polaridade", "que apresenta dois polos distintos", "que oscila entre dois estados", "com duas tendências opostas", "que varia entre dois extremos comportamentais ou de humor"],
    "bipolaridade": ["condição de ter dois polos", "existência de duas extremidades opostas", "alternância entre extremos", "variação entre opostos", "dupla polaridade", "presença de dois polos distintos", "oscilação entre dois estados", "existência de duas tendências opostas", "variação entre dois extremos comportamentais ou de humor", "condição de ser bipolar"],
    "bipolarização": ["divisão em dois polos opostos", "separação em duas facções contrárias", "polarização em dois extremos", "divisão em dois grupos antagônicos", "formação de dois polos", "tendência a extremos opostos", "divisão em duas partes com visões contrárias", "formação de duas correntes opostas", "tendência a posições extremas", "divisão em dois lados irreconciliáveis"],
    "biqueira": ["proteção da ponta do sapato", "reforço na extremidade do calçado", "parte da frente do sapato", "extremidade anterior do calçado", "ponta do sapato", "proteção para os dedos do pé", "revestimento da ponta do sapato", "parte frontal do calçado", "extremidade do sapato", "reforço na frente do calçado"],
    "biquíni": ["traje de banho feminino de duas peças", "roupa de praia feminina de duas partes", "conjunto de banho feminino", "peça de vestuário para praia feminina", "roupa de banho de duas partes", "traje de banho feminino composto por sutiã e calcinha", "vestimenta para natação feminina de duas peças", "roupa de praia feminina pequena", "conjunto de praia feminino de duas partes", "traje de banho feminino reduzido"],
    "birosca": ["bar pequeno e simples", "botequim", "tasca", "bodega", "barzinho modesto", "lugar para beber simples", "estabelecimento comercial pequeno", "venda", "espelunca", "boteco simples"],
    "birote": ["pequeno escritório", "sala pequena", "compartimento pequeno", "escritório improvisado", "lugar de trabalho pequeno", "aposento diminuto", "pequena dependência", "cômodo pequeno", "local de trabalho restrito", "pequeno espaço de trabalho"],
    "birra": ["teimosia", "manha", "capricho", "obstinação infantil", "resistência", "insistência", "turra", "manha infantil", "teima infantil", "obstinação"],
    "birrento": ["teimoso", "manhoso", "caprichoso", "obstinado", "turrão", "resistente", "insistente", "que faz birra", "que tem birra", "que teima"],
    "biruta": ["indicador de direção do vento", "manga de vento", "catavento de tecido", "instrumento para medir a direção do vento", "sinalizador de vento", "tubo de vento", "instrumento meteorológico", "indicador eólico", "manga de ar", "instrumento para aeroportos"],
    "bis": ["repetição", "de novo", "mais uma vez", "bis repetendus (latim)", "segunda vez", "repetir", "mais um", "outra vez", "novamente", "de capo (música)"],
    "bisa": ["avó da avó ou do avô", "quarta avó", "antepassada de terceira geração", "avó paterna da avó paterna (exemplo)", "avó materna da avó materna (exemplo)", "ancestral feminina de terceira geração", "parente feminina de terceira geração ascendente", "avó de segundo grau", "avó-bisavó", "trisavó"],
    "bisão": ["boi selvagem americano", "mamífero bovino grande", "búfalo americano", "animal da pradaria", "mamífero herbívoro norte-americano", "grande bovino da América do Norte", "animal selvagem da América do Norte", "espécie de bovídeo", "mamífero da família Bovidae", "animal de grande porte com pelagem densa"],
    "bisavó": ["mãe da avó ou do avô", "avó do pai ou da mãe", "antepassada de segunda geração", "avó paterna do pai (exemplo)", "avó materna da mãe (exemplo)", "ancestral feminina de segunda geração", "parente feminina de segunda geração ascendente", "avó de primeiro grau", "avó-avó", "tetravó"],
    "bisbilhotar": ["espiar", "fuxicar", "intrometer-se", "meter o nariz onde não é chamado", "investigar a vida alheia", "ser curioso sobre a vida dos outros", "indiscretar", "ser intrometido", "ser curioso", "fazer fofoca"],
    "bisbilhoteiro": ["espião", "fofoqueiro", "intrometido", "indiscreto", "curioso", "fuxiqueiro", "que bisbilhota", "que se mete na vida alheia", "que investiga a vida dos outros", "que gosta de fofoca"],
    "bisbórria": ["pessoa insignificante", "pessoa desprezível", "sujeito ordinário", "indivíduo sem valor", "pessoa de má índole", "canalha", "velhaco", "patife", "escória", "gente ruim"],
    "bisca": ["jogo de cartas", "tipo de jogo de baralho", "jogo popular de cartas", "jogo com cartas de naipe", "jogo de cartas simples", "passatempo com baralho", "jogo de truco (em algumas regiões)", "jogo de cartas rápido", "jogo de cartas competitivo", "atividade lúdica com cartas"],
    "biscate": ["trabalho temporário", "trabalho extra", "atividade informal remunerada", "bico", "trabalho avulso", "ocupação temporária", "emprego de curta duração", "atividade para ganhar dinheiro extra", "trabalho eventual", "atividade remunerada esporádica"],
    "biscoiteira": ["recipiente para biscoitos", "lata de biscoitos", "pote para biscoitos", "vasilha para guardar biscoitos", "objeto para armazenar biscoitos", "recipiente para bolachas", "pote de bolachas", "lata de bolachas", "utensílio para guardar biscoitos", "objeto para conservar biscoitos"],
    "biscoiteiro": ["quem faz ou vende biscoitos", "padeiro especializado em biscoitos", "fabricante de biscoitos", "vendedor de biscoitos", "profissional da biscoitaria", "quem trabalha com biscoitos", "quem assa biscoitos", "quem comercializa biscoitos", "especialista em biscoitos", "fornecedor de biscoitos"],
    "biscoito": ["bolacha", "biscouto", "produto de confeitaria seco e crocante", "pequeno bolo assado", "alimento doce assado", "produto de panificação doce", "alimento crocante", "guloseima assada", "doce seco", "produto de padaria doce e crocante"],
    "biscouto": ["bolacha", "biscoito", "produto de confeitaria seco e crocante", "pequeno bolo assado", "alimento doce assado", "produto de panificação doce", "alimento crocante", "guloseima assada", "doce seco", "produto de padaria doce e crocante"],
    "bisel": ["corte oblíquo", "chanfro", "aresta inclinada", "superfície inclinada na borda", "canto cortado em ângulo", "acabamento inclinado", "borda chanfrada", "corte em diagonal", "ângulo oblíquo na borda", "superfície angular na extremidade"],
    "bisnaga": ["tubo flexível", "embalagem em forma de tubo", "recipiente cilíndrico flexível", "tubo de creme", "tubo de pomada", "embalagem para cosméticos", "embalagem para medicamentos", "recipiente para pasta", "tubo de plástico flexível", "embalagem para produtos pastosos"],
    "bisneto": ["filho do neto ou da neta", "neto de segundo grau", "parente masculino de terceira geração descendente", "filho do neto (exemplo)", "filho da neta (exemplo)", "descendente masculino de terceira geração", "neto-filho", "trineto", "descendente de terceiro grau", "parente de terceiro grau descendente"],
    "bisonho": ["inexperiente", "novato", "principiante", "inepto", "desajeitado", "ingênuo", "verde", "aprendiz", "amador", "inábil"],
    "bispado": ["diocese", "jurisdição de um bispo", "cargo de bispo", "governo de um bispo", "território eclesiástico de um bispo", "sede de um bispo", "dignidade episcopal", "função episcopal", "ofício de bispo", "autoridade de um bispo"],
    "bispo": ["dignitário eclesiástico", "prelado", "pastor de uma diocese", "líder religioso", "hierarca da igreja", "autoridade religiosa", "ministro religioso de alta patente", "chefe de uma diocese", "representante da igreja", "guia espiritual de uma diocese"],
    "bissetriz": ["reta que divide um ângulo em duas partes iguais", "linha que divide um ângulo ao meio", "reta que passa pelo vértice de um ângulo e o divide em dois ângulos congruentes", "linha de simetria angular", "reta equidistante dos lados de um ângulo", "linha que bissecta um ângulo", "reta que divide um ângulo em duas partes de mesma medida", "linha que corta um ângulo em duas metades iguais", "reta que divide um ângulo em dois ângulos adjacentes congruentes", "linha que passa pelo ponto médio de um ângulo"],
    "bissexto": ["ano com 366 dias", "ano com um dia extra (29 de fevereiro)", "ano de 4 em 4 anos (geralmente)", "ano com fevereiro tendo 29 dias", "ano com um dia a mais no calendário", "ano com 52 semanas e 2 dias", "ano com um dia adicional", "ano de 365,25 dias (média)", "ano do calendário juliano e gregoriano com um dia extra", "ano que ocorre a cada quatro anos, exceto em anos seculares não divisíveis por 400"],
    "bissexual": ["que sente atração por ambos os sexos", "atraído por homens e mulheres", "com atração por pessoas de ambos os gêneros", "que se relaciona afetiva e sexualmente com homens e mulheres", "com orientação sexual que inclui ambos os sexos", "que experimenta atração por ambos os gêneros", "que se sente atraído por mais de um gênero", "com atração por pessoas do sexo masculino e feminino", "que se relaciona com pessoas de ambos os sexos", "com orientação sexual não monosexual"],
    "bistrô": ["pequeno restaurante", "restaurante informal", "casa de refeições simples", "restaurante com ambiente acolhedor", "pequeno estabelecimento de comida", "restaurante com menu limitado", "casa de jantar pequena", "restaurante com atmosfera descontraída", "pequeno negócio de alimentação", "restaurante com ambiente familiar"],
    "bita": ["pedaço pequeno", "lasca", "fragmento", "pequena parte", "bocado", "restinho", "migalha", "pedaço minúsculo", "fragmento pequeno", "porção diminuta"],
    "bitelo": ["grande", "enorme", "gigantesco", "volumoso", "corpulento", "avantagado", "considerável", "de grande tamanho", "de proporções elevadas", "massivo"],
    "bitoca": ["beliscão pequeno", "aperto leve com os dedos", "pinçada suave", "belisco delicado", "apertoinho", "beliscadinha", "pinção leve", "apertão suave", "beliscadela", "pinçada delicada"],
    "bitola": ["largura interna de um trilho", "distância entre os trilhos", "medida de largura", "padrão de largura", "calibre", "diâmetro interno", "medida padronizada", "dimensão interna", "largura estabelecida", "medida de referência"],
    "bitolado": ["estreito de pensamento", "limitado", "convencional", "apegado a regras", "sem visão ampla", "preso a padrões", "sem originalidade", "com ideias fixas", "que não aceita mudanças", "de mentalidade fechada"],
    "bitolar": ["limitar o pensamento", "restringir ideias", "tornar convencional", "padronizar", "estreitar a visão", "fixar em padrões", "impedir a originalidade", "fixar em ideias", "não aceitar mudanças", "fechar a mentalidade"],
    "bituca": ["ponta de cigarro apagado", "resto de cigarro", "guimba", "cigarro pela metade", "extremidade queimada do cigarro", "parte final do cigarro", "pedaço de cigarro", "resíduo de cigarro", "pontinha de cigarro", "final do cigarro"],
    "biunívoco": ["correspondência um a um", "relação um para um", "correspondência biunívoca", "relação injetora e sobrejetora", "correspondência bijetora", "relação de equivalência entre dois conjuntos", "cada elemento de um conjunto corresponde a um único elemento de outro", "relação de correspondência perfeita", "relação de correspondência exclusiva", "correspondência unívoca em ambos os sentidos"],
    "bivalente": ["com dois elétrons de valência (química)", "com valência dois", "que pode se combinar com dois átomos de hidrogênio (ou equivalente)", "com dois polos ou valências", "que tem duas valências", "de valência dupla", "com capacidade de ligação dupla", "que pode formar duas ligações", "com dois sítios de ligação", "de dupla capacidade de combinação"],
    "bivitelino": ["de dois óvulos fecundados separadamente", "dizigótico", "não idêntico (gêmeos)", "resultante da fecundação de dois óvulos", "com origem em dois zigotos", "de gestação com dois óvulos distintos", "gêmeos não idênticos", "fraternos (gêmeos)", "com código genético diferente (gêmeos)", "resultante de dupla fecundação"],
    "bivolt": ["com dupla voltagem", "que funciona em duas voltagens", "que opera em diferentes tensões elétricas", "adaptável a diferentes voltagens", "comutável para diferentes tensões", "que aceita duas voltagens", "de dupla tensão", "que pode ser usado em diferentes sistemas elétricos", "com capacidade de operar em duas voltagens", "que se ajusta a diferentes tensões elétricas"],
    "bixa": ["homossexual masculino (termo pejorativo)", "gay (termo pejorativo)", "viado (termo pejorativo)", "afeminado (termo pejorativo)", "homossexual (termo pejorativo)", "bicha (sinônimo pejorativo)", "gay (sinônimo pejorativo)", "viado (sinônimo pejorativo)", "homossexual masculino (termo ofensivo)", "pessoa homossexual do sexo masculino (termo depreciativo)"],
    "biza": ["avó da avó ou do avô", "quarta avó", "antepassada de terceira geração", "avó paterna da avó paterna (exemplo)", "avó materna da avó materna (exemplo)", "ancestral feminina de terceira geração", "parente feminina de terceira geração ascendente", "avó de segundo grau", "avó-bisavó", "trisavó"],
    "bizantino": ["relativo a Bizâncio", "relativo ao Império Bizantino", "da arte bizantina", "do estilo bizantino", "complexo", "intrincado", "complicado", "labiríntico", "ornamentado", "suntuoso"],
    "bizarrice": ["extravagância", "esquisitice", "singularidade", "estranheza", "peculiaridade", "anormalidade", "excentricidade", "originalidade incomum", "comportamento bizarro", "coisa estranha"],
    "bizarro": ["estranho", "esquisito", "singular", "peculiar", "anormal", "excêntrico", "original incomum", "extravagante", "esdrúxulo", "inusitado"],
    "bizu": ["dica", "informação privilegiada", "segredo", "macete", "truque", "conselho útil", "informação confidencial", "toque", "manhã", "pulo do gato"],
    "blá-blá-blá": ["conversa fiada", "papo furado", "falação", "tagarelice", "conversa sem sentido", "blablação", "palavras vazias", "conversa trivial", "falar muito sem conteúdo", "verborragia"],
    "blague": ["piada", "chiste", "gracejo", "brincadeira", "dito espirituoso", "observação engraçada", "comentário jocoso", "piada curta", "dizer engraçado", "anedota"],
    "blandícia": ["suavidade", "doçura", "ternura", "afabilidade", "carinho", "meiguice", "amabilidade", "gentileza", "suavidade no trato", "afeto delicado"],
    "blasé": ["indiferente", "apático", "entediado", "desinteressado", "cansado do mundo", "com falta de entusiasmo", "sem emoção", "com atitude de superioridade", "com ar de enfado", "com tédio existencial"],
    "blasfemar": ["proferir blasfêmias", "sacrileger", "injuriar o sagrado", "amaldiçoar o divino", "ofender a religião", "desrespeitar o que é sagrado", "dizer palavras ofensivas contra Deus ou o sagrado", "usar o nome de Deus em vão", "proferir insultos religiosos", "vilipendiar o que é considerado santo"],
    "blasfêmia": ["palavra ofensiva contra o sagrado", "sacrilégio", "injúria ao divino", "maldição do sagrado", "ofensa à religião", "desrespeito ao que é sagrado", "palavra irreverente contra Deus ou o sagrado", "uso indevido do nome de Deus", "insulto religioso", "vilipêndio ao que é considerado santo"],
    "blasfemo": ["que profere blasfêmias", "sacrílego", "que injuria o sagrado", "que amaldiçoa o divino", "que ofende a religião", "que desrespeita o que é sagrado", "que diz palavras ofensivas contra Deus ou o sagrado", "que usa o nome de Deus em vão", "que profere insultos religiosos", "que vilipendia o que é considerado santo"],
    "blazer": ["casaco esportivo", "paletó informal", "jaqueta elegante", "casaco de corte clássico", "peça de vestuário versátil", "casaco de tecido leve", "paletó esportivo", "jaqueta de tecido mais formal", "casaco casual elegante", "peça de roupa para diversas ocasiões"],
    "blecaute": ["apagão", "interrupção no fornecimento de energia elétrica", "falta de luz", "escuridão repentina", "pane elétrica geral", "interrupção de energia", "apagão total", "falha no sistema elétrico", "escuridão completa", "suspensão do fornecimento de eletricidade"],
    "blefar": ["enganar", "fingir", "simular", "iludir", "burlar", "trapacear (em jogos)", "fingir ter algo que não tem", "ostentar falsamente", "intimidar com engano", "fazer bluff"],
    "blefe": ["engano", "fingimento", "simulação", "ilusão", "burlas", "trapaça (em jogos)", "ato de blefar", "ostentação falsa", "intimidação com engano", "bluff"],
    "blindado": ["protegido contra projéteis", "reforçado com blindagem", "resistente a tiros", "invulnerável a balas", "protegido por metal resistente", "revestido para proteção balística", "fortificado contra ataques", "seguro contra disparos", "com proteção reforçada", "resistente a armas de fogo"],
    "blindagem": ["proteção contra projéteis", "reforço com material resistente a tiros", "revestimento protetor contra balas", "proteção balística", "fortificação contra ataques armados", "segurança contra disparos", "material resistente a armas de fogo", "revestimento de proteção", "sistema de proteção contra projéteis", "camada protetora contra disparos"],
    "blindar": ["proteger contra projéteis", "reforçar com blindagem", "tornar resistente a tiros", "tornar invulnerável a balas", "revestir para proteção balística", "fortificar contra ataques armados", "tornar seguro contra disparos", "reforçar a proteção", "revestir com material resistente", "proteger contra armas de fogo"],
    "blister": ["bolha na pele", "vesícula", "embalagem plástica transparente", "embalagem em formato de bolha", "ampola", "bolha causada por atrito", "lesão cutânea com líquido", "embalagem individual para comprimidos", "embalagem selada transparente", "bolha de ar ou líquido sob a pele"],
    "blitz": ["operação policial repentina", "fiscalização surpresa", "batida policial", "inspeção rápida", "ação policial imediata", "operação de trânsito", "fiscalização de trânsito", "operação relâmpago", "inspeção inesperada", "ação rápida de fiscalização"],
    "bloco": ["pedaço sólido", "aglomeração", "grupo", "conjunto", "caderno", "bloco de notas", "bloco de concreto", "bloco de gelo", "bloco de carnaval", "bloco de construção"],
    "blog": ["diário online", "página pessoal na internet", "site com publicações regulares", "plataforma de conteúdo online", "weblog", "site com artigos e posts", "diário virtual", "espaço para compartilhar ideias online", "site com atualizações frequentes", "plataforma de publicação online"],
    "blogueiro": ["autor de um blog", "quem escreve em um blog", "criador de conteúdo para blog", "redator de blog", "administrador de blog", "pessoa que mantém um blog", "criador de conteúdo online", "influenciador digital (em alguns casos)", "escritor online", "produtor de conteúdo para a internet"],
    "bloqueado": ["impedido de passar", "obstruído", "barrado", "interditado", "paralisado", "suspenso", "trancado", "fechado", "impossibilitado de acessar", "retido"],
    "bloquear": ["impedir a passagem", "obstruir", "barrar", "interditar", "paralisar", "suspender", "trancar", "fechar", "impedir o acesso", "reter"],
    "bloqueio": ["impedimento de passagem", "obstrução", "barreira", "interdição", "paralisação", "suspensão", "tranca", "fechamento", "impedimento de acesso", "retenção"],
    "blusa": ["camisa feminina", "parte superior do vestuário", "peça de roupa para a parte de cima do corpo", "camiseta feminina (em alguns casos)", "casaco leve feminino (em alguns casos)", "vestimenta feminina para o tronco", "parte de cima do conjunto feminino", "peça de roupa de tecido leve", "camisa de manga", "vestimenta para a parte superior do corpo feminino"],
    "boa": ["bondosa", "benigna", "generosa", "agradável", "apropriada", "correta", "útil", "vantajosa", "de boa qualidade", "satisfatória"],
    "boa fama": ["reputação positiva", "bom nome", "prestígio", "conceito favorável", "boa reputação", "imagem positiva", "bom conceito público", "renome", "boa imagem", "conceito positivo"],
    "boa sorte": ["felicidade", "êxito", "ventura", "sucesso", "felicidades", "que tudo dê certo", "bons ventos", "prosperidade", "que a fortuna esteja a seu favor", "que tenha sucesso"],
    "boa-fé": ["honestidade", "sinceridade", "lealdade", "integridade", "retidão", "probidade", "ausência de má intenção", "crença na veracidade", "conduta honesta", "ação com intenção correta"],
    "boa-vida": ["vida confortável", "vida de luxo", "vida fácil", "vida despreocupada", "vida regalada", "vida de prazeres", "vida abastada", "vida sem dificuldades financeiras", "vida de fartura", "vida de bem-estar"],
    "boas": ["bondosas", "benignas", "generosas", "agradáveis", "apropriadas", "corretas", "úteis", "vantajosas", "de boa qualidade", "satisfatórias"],
    "boas-vindas": ["saudação de chegada", "acolhimento", "recepção calorosa", "bem-vindo", "bem-chegado", "saudação de boas-vindas", "recebimento cordial", "acolhida calorosa", "palavras de boas-vindas", "saudação de boas vindas"],
    "boate": ["casa noturna", "discoteca", "danceteria", "clube noturno", "local de entretenimento noturno", "lugar para dançar", "estabelecimento com música e pista de dança", "local com música alta e iluminação especial", "casa de shows noturna", "local para diversão noturna"],
    "boato": ["notícia falsa", "rumor", "fofoca", "notícia não confirmada", "diz-que-diz", "voz que corre", "informação não verificada", "notícia sem fundamento", "conversa informal sobre algo", "notícia que se espalha sem confirmação"],
    "boazinha": ["bondosa", "benigna", "generosa", "amável", "gentil", "simpática", "caridosa", "afável", "bem-intencionada", "de bom coração"],
    "bobagem": ["tolice", "asneira", "besteira", "palavra vã", "non sense", "absurdo", "despropósito", "futilidade", "insignificância", "boboca"],
    "bobear": ["ser tolo", "agir descuidadamente", "cometer um erro por distração", "vacilar", "distrair-se", "ser negligente", "fazer algo de forma boba", "dar bobeira", "ser ingênuo", "cometer uma gafe"],
    "bobice": ["tolice", "asneira", "besteira", "palavra vã", "non sense", "absurdo", "despropósito", "futilidade", "insignificância", "bobagem"],
    "bobina": ["espiral de fio condutor", "indutor", "solenoide", "carretel", "cilindro enrolado com fio", "enrolamento de fio", "componente eletrônico", "peça de motor", "carretel de linha", "cilindro para enrolar fio"],
    "boboca": ["tolo", "ingênuo", "inocente", "simplório", "pateta", "palerma", "lerdo", "obtuso", "burro", "alimária"],
    "boca": ["abertura facial", "cavidade oral", "orifício da fala e alimentação", "lábios", "fala", "expressão", "entrada", "abertura de algo", "orifício", "fresta"],
    "bocadinho": ["pequena porção", "pedaço pequeno", "pouquinho", "migalha", "restinho", "parte pequena", "um pouco", "pequena quantidade", "porção diminuta", "pedaço minúsculo"],
    "bocado": ["pedaço", "porção", "bocado de comida", "quantidade", "parte", "fragmento", "porção de alimento", "pedaço pequeno de algo", "quantidade pequena", "uma parte"],
    "bocarra": ["boca grande", "boca larga", "beiçola", "boca exageradamente grande", "abertura bucal ampla", "boca espessa", "boca proeminente", "boca chamativa", "boca avantajada", "abertura labial grande"],
    "bocejar": ["abrir a boca involuntariamente por sono ou tédio", "dar bocejos", "abrir a boca por cansaço", "expressar sono com a boca aberta", "manifestar tédio com bocejos", "abrir a boca amplamente por reflexo", "ação de bocejar", "ato de abrir a boca por sono", "sinal de cansaço com a boca", "expressão facial de sono"],
    "boche": ["cuspir (termo informal)", "expelir líquido da boca (termo informal)", "lançar saliva da boca (termo informal)", "ato de cuspir (termo informal)", "ação de expelir líquido da boca (termo informal)", "lançamento de saliva da boca (termo informal)", "esputar (termo informal)", "dejetar saliva (termo informal)", "expulsar líquido oralmente (termo informal)", "arremessar saliva (termo informal)"],
    "bochecha": ["face", "lado do rosto", "maçã do rosto", "parte lateral da face", "região lateral do rosto", "parte carnuda da face", "lado da cara", "região facial lateral", "parte saliente da face", "lateral do rosto abaixo dos olhos"],
    "bochechar": ["lavar a boca com líquido", "enxaguar a boca", "gargarejar (em alguns casos)", "fazer bochechos", "mover líquido na boca", "limpar a boca com líquido", "enxaguar a cavidade bucal", "fazer um bochecho", "mover água na boca para limpar", "higienizar a boca com líquido"],
    "bochechudo": ["com bochechas grandes", "de rosto cheio", "com bochechas salientes", "de rosto gordo", "com bochechas proeminentes", "com faces volumosas", "de rosto redondo (em alguns casos)", "com bochechas avantajadas", "de rosto carnudo nas laterais", "com bochechas rechonchudas"],
    "bocó": ["tolo", "ingênuo", "inocente", "simplório", "pateta", "palerma", "lerdo", "obtuso", "burro", "alimária"],
    "boda": ["casamento", "cerimônia matrimonial", "festa de casamento", "matrimônio", "união conjugal", "enlace", "rito de casamento", "celebração de casamento", "festa nupcial", "união matrimonial solene"],
    "bodas": ["aniversário de casamento", "celebração do aniversário de casamento", "festa de aniversário de casamento", "comemoração de anos de casamento", "aniversário matrimonial", "celebração matrimonial anual", "festa de aniversário nupcial", "comemoração do dia do casamento", "celebração de anos de união", "festa de aniversário de matrimônio"],
    "bode": ["macho da cabra", "caprino macho", "animal da espécie Capra aegagrus hircus", "animal com chifres e barba", "mamífero ruminante", "animal de fazenda", "caprino", "animal com odor forte", "animal usado para produção de leite e carne", "animal símbolo de teimosia"],
    "bodega": ["pequeno armazém", "mercearia pequena", "venda", "empório", "armazém de secos e molhados", "loja de bairro", "pequeno comércio", "estabelecimento comercial pequeno", "venda de produtos variados", "pequeno mercado"],
    "bodoque": ["pequena arma de arremesso", "estilingue", "atiradeira", "instrumento para lançar projéteis pequenos", "arma de brinquedo", "instrumento com elástico para atirar pedras", "arma rústica de arremesso", "instrumento de caça pequeno", "brinquedo de criança para atirar", "instrumento com forquilha e elástico"],
    "boeiro": ["bueiro", "ralo de rua", "abertura para escoamento de água pluvial", "sumidouro", "grade de esgoto", "abertura na sarjeta", "escoadouro de água da chuva", "entrada de galeria pluvial", "abertura para drenagem de água", "grade na rua para escoamento"],
    "boêmio": ["vida desregrada", "vida noturna", "vida de artista", "vida boêmia", "pessoa que vive de forma desregrada", "pessoa que frequenta a noite", "artista com estilo de vida livre", "pessoa que aprecia a vida noturna e a arte", "pessoa que vive de forma marginal", "pessoa com hábitos noturnos e artísticos"],
    "bofe": ["pulmão (de animais)", "víscera de animais", "órgão respiratório de animais", "carne de pulmão", "alimento feito com pulmão de animais", "víscera comestível", "parte interna de animais", "órgão interno de animais", "carne de abate", "parte do corpo de animais"],
    "bofetada": ["tapa", "estalada", "sopapo", "tabefe", "palmada no rosto", "golpe com a mão aberta no rosto", "agressão com a mão na face", "bofetão", "cachetada", "golpe na cara"],
    "boga": ["tipo de peixe de água doce", "peixe fluvial", "espécie de peixe ciprinídeo", "peixe de rio", "peixe comestível de água doce", "espécie de peixe comum em rios", "peixe de pequeno porte de água doce", "fauna aquática fluvial", "peixe da família Cyprinidae", "espécie de peixe de rio da Europa"],
    "boia": ["objeto flutuante", "flutuador", "objeto para sinalização na água", "objeto para sustentação na água", "marco flutuante", "sinalizador náutico", "objeto para nadar", "auxiliar de flutuação", "objeto para pesca", "objeto para salvamento aquático"],
    "boiada": ["conjunto de bois", "gado bovino", "manada de bois", "grupo de gado", "rebanho de bois", "conjunto de animais bovinos", "gado", "grupo de bovinos", "manada de gado", "conjunto de animais da espécie Bos taurus"],
    "boiadeiro": ["condutor de gado", "vaqueiro", "pessoa que trabalha com gado bovino", "quem guia a boiada", "pessoa que lida com bois", "trabalhador rural com gado", "homem do campo que conduz gado", "pessoa que acompanha a boiada", "trabalhador pecuário com gado bovino", "quem cuida e guia bois"],
    "boiar": ["flutuar", "estar na superfície da água", "não afundar", "manter-se na água", "sustentar-se na água", "estar à deriva", "mover-se na água sem direção", "estar solto na água", "não submergir", "manter-se acima da água"],
    "boicotar": ["recusar-se a participar", "impedir o sucesso de algo", "fazer oposição a algo", "privar de apoio", "negar colaboração", "evitar consumir ou usar algo", "fazer campanha contra algo", "sabotar", "prejudicar intencionalmente", "retirar o apoio"],
    "boicote": ["recusa de participação", "impedimento de sucesso", "oposição organizada", "privação de apoio", "negação de colaboração", "ato de evitar consumir ou usar algo", "campanha contra algo", "sabotagem", "prejuízo intencional", "retirada de apoio"],
    "boieiro": ["condutor de bois", "boiadeiro", "pessoa que trabalha com bois", "quem guia bois", "pessoa que lida com bois", "trabalhador rural com bois", "homem do campo que conduz bois", "pessoa que acompanha a boiada", "trabalhador pecuário com gado bovino", "quem cuida e guia bois"],
    "boina": ["chapéu de feltro macio", "gorro redondo sem aba", "chapéu militar (em alguns casos)", "chapéu tradicional basco", "cobertura para a cabeça redonda e macia", "chapéu de tecido maleável", "acessório de vestuário para a cabeça", "chapéu de lã (em alguns casos)", "cobertura de cabeça sem abas", "chapéu de formato arredondado"],
    "bojo": ["parte curva e saliente", "curva", "convexidade", "parte arredondada", "parte abaulada", "parte protuberante", "barriga (de vaso)", "parte inferior arredondada", "parte mais larga", "parte que se expande"],
    "bojudo": ["com bojo grande", "curvo e saliente", "convexo", "arredondado", "abaulado", "protuberante", "barrigudo (de vaso)", "com a parte inferior arredondada", "com a parte mais larga", "com a parte que se expande"],
    "bola": ["objeto esférico", "objeto redondo", "esfera", "objeto para jogar", "bola de futebol", "bola de basquete", "bola de tênis", "bola de gude", "bola de bilhar", "planeta (figurativo)"],
    "bolacha": ["biscoito", "biscouto", "produto de confeitaria seco e crocante", "pequeno bolo assado", "alimento doce assado", "produto de panificação doce", "alimento crocante", "guloseima assada", "doce seco", "produto de padaria doce e crocante"],
    "bolado": ["irritado", "zangado", "chateado", "aborrecido", "contrariado", "indignado", "furioso", "nervoso", "irado", "ressentido"],
    "bolão": ["aposta coletiva", "sorteio com premiação", "concurso com prêmio", "jogo de apostas em grupo", "rifa", "sorteio entre participantes", "aposta em grupo com rateio de prêmios", "concurso com rateio de prêmios", "jogo de azar em grupo", "sorteio com participação coletiva"],
    "bolar": ["criar", "inventar", "imaginar", "planejar", "conceber", "elaborar", "desenvolver", "arquitetar", "tramar", "maquinar"],
    "bolchevique": ["membro do Partido Operário Social-Democrata Russo (maioritário)", "comunista russo", "revolucionário russo", "partidário da revolução russa", "seguidor de Lenin", "membro do movimento bolchevique", "adepto do bolchevismo", "comunista", "socialista revolucionário russo", "participante da Revolução de Outubro"],
    "bole": ["jogo de bilhar (sinônimo regional)", "sinuca (sinônimo regional)", "jogo de mesa com bolas e tacos (sinônimo regional)", "jogo de bilhar com regras específicas (sinônimo regional)", "partida de bilhar (sinônimo regional)", "mesa de bilhar (sinônimo regional)", "taco de bilhar (sinônimo regional)", "bola de bilhar (sinônimo regional)", "competição de bilhar (sinônimo regional)", "atividade de lazer com bilhar (sinônimo regional)"],
    "boleia": ["assento do cocheiro", "lugar do condutor de um veículo de tração animal", "assento dianteiro de um veículo", "lugar do motorista", "cabine de um veículo de carga", "parte dianteira de uma carruagem", "assento do condutor de uma diligência", "lugar do guia de uma charrete", "parte da frente de um carro", "assento do motorneiro (em bondes antigos)"],
    "boleiro": ["jogador de futebol (informal)", "futebolista (informal)", "atleta de futebol (informal)", "quem joga futebol (informal)", "profissional do futebol (informal)", "jogador de várzea (informal)", "quem pratica futebol (informal)", "amante do futebol (informal)", "quem entende de futebol (informal)", "apaixonado por futebol (informal)"],
    "bolero": ["ritmo musical latino-americano", "dança de origem espanhola e cubana", "canção romântica latino-americana", "gênero musical lento e sentimental", "música para dançar a dois", "estilo musical romântico", "dança de salão latina", "música popular latino-americana", "canção melódica latina", "ritmo suave e apaixonado"],
    "boletim": ["informativo", "comunicado", "relatório", "noticiário", "informação oficial", "publicação periódica", "jornal informativo", "comunicação oficial escrita", "relatório oficial", "informativo periódico"],
    "boleto": ["título de cobrança bancária", "documento de pagamento", "conta a pagar", "guia de pagamento", "cobrança bancária", "papel de pagamento", "instrumento de cobrança", "documento para quitar dívida", "meio de pagamento bancário", "título de crédito bancário"],
    "bolha": ["vesícula", "cavidade cheia de líquido ou gás", "elevação na pele cheia de líquido", "bolha de sabão", "bolha de ar na água", "ampola", "borbulha", "vesícula cutânea", "cavidade gasosa em líquido", "elevação líquida na superfície"],
    "boliche": ["jogo de derrubar pinos com uma bola", "jogo de bowling", "esporte com pinos e bola", "jogo de salão com pinos", "atividade recreativa com bola e pinos", "esporte de precisão com bola", "jogo de derrubar pinos", "atividade de lazer com bola", "jogo de bowling americano", "esporte de salão com arremesso de bola"],
    "bólide": ["meteoro muito brilhante", "estrela cadente muito luminosa", "corpo celeste que atravessa a atmosfera terrestre com grande brilho", "meteoroide que explode na atmosfera", "fenômeno luminoso no céu noturno", "meteoro com brilho intenso", "objeto celeste incandescente", "fenômeno astronômico luminoso", "meteoro de grande magnitude", "estrela cadente muito forte"],
    "bólido": ["meteoro muito brilhante", "estrela cadente muito luminosa", "corpo celeste que atravessa a atmosfera terrestre com grande brilho", "meteoroide que explode na atmosfera", "fenômeno luminoso no céu noturno", "meteoro com brilho intenso", "objeto celeste incandescente", "fenômeno astronômico luminoso", "meteoro de grande magnitude", "estrela cadente muito forte"],
    "bolinar": ["acariciar", "afagar", "fazer carinho", "tocar suavemente", "alisar", "acariciar com afeto", "fazer um afago", "passar a mão suavemente", "tocar com carinho", "fazer um mimo"],
    "bolo": ["doce assado", "torta", "bolo de aniversário", "bolo de casamento", "produto de confeitaria", "alimento doce feito de farinha, ovos e açúcar", "sobremesa assada", "iguaria doce", "produto de panificação doce", "alimento festivo doce"],
    "bolor": ["fungo que se desenvolve em superfícies úmidas", "mofo", "fungo filamentoso", "mancha esverdeada ou preta causada por fungos", "micro-organismo que cresce em ambientes úmidos", "colônia de fungos", "crescimento fúngico", "mancha de mofo", "fungo que deteriora alimentos", "micro-organismo que causa deterioração"],
    "bolorento": ["com bolor", "mofado", "com fungos", "deteriorado por bolor", "com manchas de mofo", "afetado por fungos", "com crescimento fúngico", "estragado por bolor", "com sinais de mofo", "contaminado por fungos"],
    "bolota": ["fruto do carvalho", "semente do carvalho", "noz do carvalho", "fruto seco do carvalho", "semente arredondada do carvalho", "fruto do gênero Quercus", "semente de árvore", "alimento para animais (em alguns casos)", "fruto pequeno e duro", "semente de carvalho com cúpula"],
    "bolsa": ["sacola", "mala pequena", "carteira feminina", "bolsa de mão", "bolsa de ombro", "mochila", "bolsa de estudo", "auxílio financeiro", "bolsa de valores", "mercado financeiro"],
    "bolsão": ["grande bolsa", "bolsa grande", "área isolada", "região isolada", "depressão geográfica", "grande cavidade", "área de concentração", "região de pobreza concentrada", "área de difícil acesso", "grande saco ou bolsa"],
    "bolsista": ["estudante com bolsa de estudo", "aluno que recebe auxílio financeiro para estudar", "beneficiário de bolsa", "quem recebe apoio financeiro para educação", "aluno financiado por bolsa", "estudante com subsídio educacional", "quem tem bolsa de estudo", "aluno com auxílio financeiro para os estudos", "beneficiário de apoio financeiro estudantil", "estudante que recebe bolsa para estudar"],
    "bolso": ["pequena bolsa costurada em roupa", "pequena abertura em vestuário para guardar objetos", "saco pequeno em peça de roupa", "compartimento pequeno em vestimenta", "lugar para guardar pequenos objetos em roupas", "abertura para guardar pertences em roupas", "pequena cavidade em roupa", "compartimento para carregar coisas em roupas", "saco costurado em calças, camisas, etc.", "lugar para colocar objetos pessoais em roupas"],
    "bom": ["bondoso", "benigno", "generoso", "agradável", "apropriado", "correto", "útil", "vantajoso", "de boa qualidade", "satisfatório"],
    "bom senso": ["prudência", "sensatez", "discernimento", "juízo", "equilíbrio", "moderação", "sabedoria prática", "capacidade de julgar corretamente", "inteligência prática", "raciocínio lógico e sensato"],
    "bomba": ["artefato explosivo", "engenho explosivo", "explosivo", "bomba d'água", "bomba de ar", "bomba de combustível", "bomba de gás", "notícia bombástica", "sucesso estrondoso", "algo impressionante"],
    "bombardeado": ["atacado com bombas", "alvo de bombardeio", "atingido por explosivos", "sob ataque aéreo", "destruído por bombas", "atingido por projéteis explosivos", "sob fogo de artilharia", "alvejado por bombas", "atingido por ataque aéreo", "sob investida de bombas"],
    "bombardear": ["atacar com bombas", "lançar bombas sobre", "atirar projéteis explosivos em", "atacar por via aérea", "atingir com explosivos", "submeter a bombardeio", "atacar com artilharia pesada", "alvo de lançamento de bombas", "atacar com mísseis", "submeter a ataque aéreo"],
    "bombardiro crocodillo": ["nome fictício", "personagem imaginário", "expressão sem significado específico", "combinação de palavras", "termo inventado", "nome incomum", "designação fantasiosa", "nome esdrúxulo", "expressão aleatória", "sequência de palavras sem sentido aparente"],
    "bombástico": ["espetacular", "sensacional", "impressionante", "exagerado", "pomposo", "enfático", "estrondoso", "de grande impacto", "que causa grande admiração", "que chama muita atenção"],
    "bombeiro": ["profissional de combate a incêndios", "soldado do fogo", "brigadista", "quem apaga incêndios", "quem resgata pessoas em perigo", "profissional de salvamento", "militar do fogo", "quem atua em emergências", "profissional de prevenção e combate a incêndios", "quem presta socorro em situações de risco"],
    "bombom": ["pequeno doce de chocolate", "doce recheado de chocolate", "pequena guloseima de chocolate", "doce de chocolate individual", "pequena trufa de chocolate", "doce com cobertura de chocolate", "pequena porção de chocolate doce", "doce de chocolate pequeno", "guloseima de chocolate individual", "pequeno doce feito de chocolate"],
    "bombordo": ["lado esquerdo de uma embarcação", "lado esquerdo de um navio", "parte esquerda de um barco", "lado sinistro de uma embarcação", "lado da embarcação à esquerda de quem olha para a proa", "lado esquerdo da frente para trás", "lado esquerdo do navio olhando para a frente", "parte esquerda da embarcação no sentido da proa", "lado esquerdo da embarcação para quem está a bordo olhando para a frente", "lado esquerdo do navio no sentido da proa"],
    "bon vivant": ["pessoa que aprecia os prazeres da vida", "hedonista", "epicurista", "pessoa que gosta de luxo e conforto", "amante dos prazeres sensoriais", "pessoa que vive bem", "apreciador de boa comida e bebida", "pessoa que desfruta da vida social", "amante de festas e diversão", "pessoa que busca o prazer em todas as coisas"],
    "bonachão": ["ingênuo", "simples", "crédulo", "facilmente enganado", "bem-humorado", "afável", "gentil", "amável", "de bom coração", "pessoa simples e bondosa"],
    "bonança": ["calmaria", "tranquilidade", "mansidão", "suavidade", "paz", "serenidade", "tempo bom", "ausência de tempestade", "calma do mar", "estado de tranquilidade e paz"],
    "bonançoso": ["calmo", "tranquilo", "manso", "suave", "pacífico", "sereno", "de tempo bom", "sem tempestade", "com o mar calmo", "em estado de tranquilidade e paz"],
    "bondade": ["benevolência", "generosidade", "caridade", "afabilidade", "simpatia", "boa vontade", "clemência", "indulgência", "humanidade", "altruísmo"],
    "bonde": ["veículo de transporte urbano sobre trilhos", "elétrico", "carro elétrico sobre trilhos", "antigo meio de transporte urbano", "veículo movido a eletricidade sobre trilhos", "transporte público sobre trilhos", "veículo urbano elétrico", "antigo carro elétrico de rua", "transporte coletivo sobre trilhos", "veículo elétrico para transporte urbano"],
    "bondoso": ["benevolente", "generoso", "caridoso", "afável", "simpático", "com boa vontade", "clemente", "indulgente", "humano", "altruísta"],
    "boné": ["chapéu com aba frontal", "cobertura para a cabeça com pala", "chapéu esportivo", "gorro com aba", "acessório de vestuário para a cabeça", "chapéu casual", "cobertura de cabeça com viseira", "chapéu para proteger do sol", "acessório de moda para a cabeça", "chapéu com aba na frente"],
    "boneca": ["brinquedo infantil em forma de figura humana", "brinquedo de criança com aparência de pessoa", "figura humana de brinquedo", "brinquedo para meninas (tradicionalmente)", "objeto de brincar com forma humana", "bonequinha", "brinquedo de pano", "brinquedo de plástico", "objeto de coleção (em alguns casos)", "representação infantil de uma pessoa"],
    "boneco": ["brinquedo infantil em forma de figura humana", "brinquedo de criança com aparência de pessoa", "figura humana de brinquedo", "brinquedo para meninos (tradicionalmente)", "objeto de brincar com forma humana", "bonequinho", "brinquedo de pano", "brinquedo de plástico", "objeto de coleção (em alguns casos)", "representação infantil de uma pessoa"],
    "bonificação": ["bônus", "gratificação", "prêmio", "recompensa", "adicional", "aumento salarial (em alguns casos)", "pagamento extra", "benefício adicional", "gratificação financeira", "recompensa monetária"],
    "boníssimo": ["muito bom", "excelente", "ótimo", "superior", "de qualidade excepcional", "perfeito", "magnífico", "esplêndido", "maravilhoso", "de qualidade superlativa"],
    "bonita": ["bela", "formosa", "linda", "atraente", "agradável à vista", "esteticamente agradável", "de boa aparência", "encantadora", "graciosa", "magnífica"],
    "bonitão": ["muito bonito", "atraente", "charmoso", "galã", "homem bonito", "homem de boa aparência", "homem atraente", "homem charmoso", "homem galante", "homem de beleza marcante"],
    "boniteza": ["beleza", "formosura", "lindez", "encanto", "graça", "atração", "magnificência", "esplendor", "luzimento", "atrativo"],
    "bonitinha": ["pequena e bonita", "graciosa", "charmosa", "simpática", "formosinha", "lindinha", "atraente de forma delicada", "agradável à vista de forma pequena", "de boa aparência em tamanho menor", "encantadora em miniatura"],
    "bonito": ["belo", "formoso", "lindo", "atraente", "agradável à vista", "esteticamente agradável", "de boa aparência", "encantador", "gracioso", "magnífico"],
    "bonomia": ["simplicidade", "moderação", "frugalidade", "economia", "ausência de luxo", "vida simples", "modéstia", "ausência de ostentação", "simplicidade de vida", "vida sem excessos"],
    "bons": ["bondosos", "benignos", "generosos", "agradáveis", "apropriados", "corretos", "úteis", "vantajosos", "de boa qualidade", "satisfatórios"],
    "bônus": ["bonificação", "gratificação", "prêmio", "recompensa", "adicional", "benefício extra", "pagamento adicional", "vantagem adicional", "gratificação financeira", "recompensa monetária"],
    "bonzinho": ["bondoso", "benigno", "generoso", "amável", "gentil", "simpático", "caridoso", "afável", "bem-intencionado", "de bom coração"],
    "book": ["livro", "portfólio (de modelo, ator, etc.)", "álbum de fotos", "coletânea", "obra literária", "volume", "livro de amostras", "catálogo", "registro", "caderno"],
    "boom": ["explosão", "aumento repentino", "crescimento rápido", "expansão", "auge", "sucesso repentino", "estouro", "crescimento significativo", "aumento acentuado", "explosão de popularidade"],
    "boquear": ["fazer movimentos com a boca sem emitir som", "mover os lábios sem falar", "articular palavras silenciosamente", "fazer caretas com a boca", "abrir e fechar a boca sem voz", "simular fala sem som", "fazer mímica com a boca", "mover a boca de forma inaudível", "expressar-se com movimentos labiais", "fazer sinais com a boca"],
    "boquiaberta": ["surpresa", "espantada", "admirada", "pasma", "estupefata", "maravilhada", "impressionada", "assombrada", "perplexa", "atônita"],
    "boquiaberto": ["surpreso", "espantado", "admirado", "pasmo", "estupefato", "maravilhado", "impressionado", "assombrado", "perplexo", "atônito"],
    "boquirroto": ["que fala demais", "tagarela", "palavroso", "loquaz", "falador", "verborrágico", "que não se cala", "que fala sem parar", "que tem facilidade em falar", "que gosta de conversar muito"],
    "bora": ["vamos", "andemos", "partamos", "vamos embora", "ideia de movimento", "convite para ir", "chamado para ação", "expressão de incentivo", "vamos lá", "movimento para ir embora"],
    "borboleta": ["inseto lepidóptero", "inseto com asas coloridas", "bicho que voa com asas grandes", "inseto de metamorfose completa", "animal com asas escamosas", "bicho que passa por fases de larva e pupa", "inseto com antenas finas", "animal delicado voador", "bicho que se alimenta de néctar", "inseto de voo elegante"],
    "borbotão": ["jorro", "fonte", "manancial", "nascente", "olho d'água", "vazão abundante", "fluxo intenso", "saída abundante de líquido", "emanação abundante", "irrupção"],
    "borbotar": ["jorrar", "brotar", "emanar", "fluir abundantemente", "sair em jorro", "nascer em grande quantidade", "irromper", "vazar abundantemente", "sair com força", "manar abundantemente"],
    "borbulha": ["pequena bolha", "vesícula", "bolha na pele", "bolha em líquido", "pequena elevação cheia de líquido", "pequena bolha de gás em líquido", "pústula pequena", "pequena elevação cutânea", "pequena cavidade cheia de líquido", "pequena bolha de ar na superfície"],
    "borbulhar": ["produzir bolhas", "ferver", "efervescer", "soltar bolhas", "formar bolhas", "brotar em bolhas", "agitar-se com bolhas", "ferver com bolhas", "soltar gás em bolhas", "formar pequenas bolhas"],
    "borda": ["margem", "beira", "orla", "extremidade", "aba", "canto", "lado", "barra", "ourela", "limite"],
    "bordado": ["ornamento feito com agulha e linha", "trabalho de agulha", "arte de bordar", "enfeite costurado", "aplicação de pontos decorativos", "arte manual de costurar desenhos", "ornamentação têxtil", "trabalho manual com linha e agulha", "arte de enfeitar tecidos com pontos", "decoração costurada em tecido"],
    "bordão": ["cajado", "vara de apoio", "bengala", "bastão", "apoio para caminhar", "instrumento para auxiliar a marcha", "vara", "suporte", "instrumento de pastor", "símbolo de autoridade (em certos contextos)"],
    "bordar": ["ornamentar com agulha e linha", "fazer bordados", "costurar desenhos em tecido", "enfeitar com pontos decorativos", "aplicar pontos decorativos em tecido", "fazer trabalho de agulha", "decorar tecido com costura", "criar desenhos com linha e agulha", "fazer ornamentação têxtil", "costurar enfeites em tecido"],
    "bordejar": ["andar pela borda", "seguir a margem", "ir pela orla", "caminhar pela beira", "contornar a extremidade", "seguir o limite", "ir pela margem de algo", "caminhar ao longo da borda", "seguir o contorno", "mover-se pela extremidade"],
    "bordel": ["casa de prostituição", "prostíbulo", "casa de tolerância", "lupanar", "casa de encontros", "casa de prazeres", "local de prostituição", "estabelecimento de prostituição", "casa de meretrício", "local de comércio sexual"],
    "borderô": ["lista de pagamentos", "relação de valores a receber", "demonstrativo de pagamentos", "folha de pagamento", "lista de créditos", "documento com valores a serem pagos", "relação de recebimentos", "demonstrativo financeiro", "lista de débitos e créditos", "documento de controle financeiro"],
    "bordo": ["lado de uma embarcação", "lateral de um navio", "parte lateral de um barco", "lado da embarcação", "lateral do navio", "costado", "parte externa da embarcação", "parte lateral externa do navio", "lado do barco", "lateral da embarcação acima da linha d'água"],
    "bordoada": ["golpe com um bordão", "paulada", "cajadada", "golpe com vara", "pancada com um bastão", "agressão com um bordão", "golpe forte com um bastão", "pancada com um cajado", "golpe com uma vara de apoio", "agressão com uma vara"],
    "boreal": ["do norte", "setentrional", "ártico", "relativo ao norte", "da região polar norte", "do hemisfério norte", "que se encontra no norte", "característico do norte", "da zona boreal", "de clima frio do norte"],
    "borla": ["pendão", "franja", "pingente", "adorno de fios soltos", "enfeite de fios pendurados", "ornamento de fios", "acabamento de fios soltos", "penduricalho", "ornamento pendente", "enfeite de fios"],
    "bornal": ["bolsa de caça", "sacola de caçador", "bolsa de couro para provisões", "saco de viagem pequeno", "bolsa de soldado (antigo)", "alforje pequeno", "bolsa para transportar mantimentos", "saco para levar pertences", "bolsa de uso militar (antigo)", "saco de campanha"],
    "borocoxô": ["triste", "desanimado", "deprimido", "melancólico", "abatido", "desconfortável", "indisposto", "para baixo", "sem ânimo", "apático"],
    "borogodó": ["charme", "encanto", "atração", "magnetismo pessoal", "carisma", "jeito especial", "algo que atrai", "qualidade que encanta", "mistério atraente", "poder de sedução"],
    "borra": ["resíduo líquido", "sedimento", "pó fino", "depósito", "resto de líquido", "precipitado", "matéria sólida em suspensão", "resíduo de café", "resíduo de vinho", "sedimento de suco"],
    "borracha": ["material elástico", "látex vulcanizado", "pneu", "apagador", "preservativo", "material para apagar", "material para pneus", "material para preservativos", "elástico", "material flexível e resistente"],
    "borracheira": ["embriaguez", "estado de embriagado", "bebedeira", "intoxicação alcoólica", "efeito do álcool", "estado de quem bebeu muito", "ressaca (em alguns contextos)", "estado alterado pela bebida", "efeito da embriaguez", "estado de embriagamento"],
    "borracho": ["bêbado", "embriagado", "alcoolizado", "etílico", "inebriado", "mamado", "pinga", "cheio de álcool", "com os efeitos do álcool", "que bebeu em excesso"],
    "borrado": ["manchado", "sujo", "desfocado", "apagado", "esbatido", "indefinido", "com borrões", "com manchas de tinta", "com contornos imprecisos", "com aparência suja"],
    "borralho": ["cinzas quentes", "resíduos incandescentes", "brasas", "restos de fogo", "material em combustão lenta", "cinzas com calor residual", "fogo sob as cinzas", "material carbonizado incandescente", "restos de lenha queimada", "cinzas ainda quentes"],
    "borrão": ["mancha", "mácula", "nódoa", "mancha de tinta", "mancha de grafite", "marca suja", "imperfeição gráfica", "falha na escrita ou desenho", "marca imprecisa", "mancha escura"],
    "borrar": ["manchar", "sujar", "desfocar", "apagar", "esbater", "tornar impreciso", "fazer borrões", "sujar com tinta", "tornar os contornos imprecisos", "deixar com aparência suja"],
    "borras": ["resíduos líquidos", "sedimentos", "pó fino", "depósitos", "restos de líquido", "precipitados", "matéria sólida em suspensão", "resíduos de café", "resíduos de vinho", "sedimentos de suco"],
    "borrasca": ["tempestade no mar", "temporal marítimo", "forte tempestade", "tempestade com ventos fortes", "mau tempo no mar", "fúria do mar", "tempestade violenta", "temporal com ondas grandes", "mau tempo com ventania", "tempestade com chuva forte e vento"],
    "borrego": ["cordeiro", "ovelha jovem", "filhote de ovelha", "animal da espécie Ovis aries jovem", "carneiro jovem", "animal lanígero jovem", "animal de fazenda jovem", "ovelha pequena", "cordeirinho", "animal ovino jovem"],
    "borrifar": ["aspergir", "pulverizar", "regar finamente", "umedecer com gotas", "lançar pequenas gotas de líquido", "espalhar líquido em forma de spray", "molhar com borrifos", "aspergir líquido", "lançar spray", "umedecer com pequenas gotas"],
    "bosque": ["pequena floresta", "mata pequena", "arvoredo", "selva pequena", "floresta densa e pequena", "mata fechada e pequena", "conjunto de árvores", "pequena área florestal", "mata rala", "conjunto de árvores próximas"],
    "bosquejo": ["esboço", "rascunho", "projeto inicial", "plano preliminar", "desenho inicial", "ideia geral", "primeira versão", "traçado inicial", "projeto sumário", "primeira representação"],
    "bossa": ["charme", "jeito especial", "talento natural", "habilidade inata", "estilo próprio", "graça", "encanto", "manha", "qualidade especial", "toque pessoal"],
    "bosta": ["fezes", "excremento", "cocô", "matéria fecal", "dejeto", "estrume", "caca", "merda", "excreção", "matéria orgânica eliminada"],
    "bostejar": ["dizer bobagens", "falar besteiras", "dizer asneiras", "falar sem sentido", "dizer tolices", "falar coisas sem importância", "falar bobagens", "dizer palavras vãs", "falar sem conteúdo", "dizer coisas idiotas"],
    "bota": ["calçado que cobre o tornozelo e parte da perna", "calçado de cano alto", "sapato de cano alto", "calçado para proteger os pés e a perna", "tipo de sapato", "calçado de couro (geralmente)", "calçado resistente", "calçado para diversas atividades", "tipo de calçado fechado", "sapato que sobe pela perna"],
    "botânica": ["ciência das plantas", "estudo dos vegetais", "fitologia", "ciência que estuda o reino vegetal", "estudo da vida vegetal", "ciência das plantas e seus processos", "investigação científica das plantas", "estudo da estrutura, função, crescimento, evolução e distribuição das plantas", "ciência dos organismos vegetais", "investigação da vida vegetal em todas as suas formas"],
    "botânico": ["relativo à botânica", "das plantas", "vegetal", "fitológico", "especialista em botânica", "que estuda plantas", "relativo ao reino vegetal", "que se refere aos vegetais", "que trata da ciência das plantas", "que conhece a flora"],
    "botão": ["pequeno objeto para fechar roupas", "peça para prender vestimentas", "dispositivo para acionar mecanismos", "tecla", "interruptor", "botão de flor", "broto", "pequeno objeto redondo", "peça para ligar ou desligar", "comando acionável"],
    "botar": ["pôr", "colocar", "depositar", "jogar", "arremessar", "produzir (ovos)", "dar à luz (animais)", "expulsar", "despedir", "demitir"],
    "bote": ["pequena embarcação", "barco pequeno", "canoa", "embarcação miúda", "barquinho", "embarcação de pequeno porte", "canoa pequena", "barco a remo pequeno", "embarcação para poucos passageiros", "pequena embarcação para pesca ou lazer"],
    "boteco": ["bar pequeno e simples", "botequim", "tasca", "bodega", "barzinho modesto", "lugar para beber simples", "estabelecimento comercial pequeno", "venda", "espelunca", "birosca"],
    "botelho": ["pequena botija", "pequeno pote de barro", "pequeno recipiente de cerâmica", "pequeno vaso de argila", "pequeno cântaro", "pequeno jarro de barro", "pequeno vaso de barro", "pequeno recipiente para líquidos", "pequeno pote de barro para água", "pequeno vaso para flores"],
    "botequim": ["bar pequeno e simples", "boteco", "tasca", "bodega", "barzinho modesto", "lugar para beber simples", "estabelecimento comercial pequeno", "venda", "espelunca", "birosca"],
    "botica": ["farmácia antiga", "drogaria antiga", "estabelecimento para venda de medicamentos (antigo)", "local onde se preparavam remédios (antigo)", "farmácia tradicional", "drogaria de antigamente", "local de venda de produtos medicinais (antigo)", "estabelecimento de saúde (antigo)", "local de manipulação de medicamentos (antigo)", "farmácia do passado"],
    "boticário": ["farmacêutico antigo", "droguista antigo", "quem preparava e vendia medicamentos (antigo)", "profissional de farmácia (antigo)", "manipulador de remédios (antigo)", "profissional de saúde (antigo)", "quem vendia produtos medicinais (antigo)", "profissional da botica", "quem conhecia ervas medicinais (antigo)", "profissional de farmácia tradicional"],
    "botija": ["vasilha de barro", "pote de barro", "cântaro", "jarro de barro", "recipiente de cerâmica", "vaso de argila", "utensílio de barro para líquidos", "recipiente de barro para água", "vaso de barro para flores", "utensílio doméstico de barro"],
    "botijão": ["grande botija", "grande recipiente de barro", "grande pote de cerâmica", "grande vaso de argila", "grande cântaro", "grande jarro de barro", "recipiente grande para gás", "cilindro de gás", "vasilhame grande para líquidos", "grande recipiente de armazenamento"],
    "botim": ["bota curta", "calçado que cobre o tornozelo", "sapato de cano curto", "calçado que vai até o tornozelo", "tipo de bota", "sapato fechado que cobre o tornozelo", "calçado de cano baixo", "bota de cano curto", "sapato que protege o tornozelo", "calçado que envolve o tornozelo"],
    "botina": ["bota curta", "calçado que cobre o tornozelo", "sapato de cano curto", "calçado que vai até o tornozelo", "tipo de bota", "sapato fechado que cobre o tornozelo", "calçado de cano baixo", "bota de cano curto", "sapato que protege o tornozelo", "calçado que envolve o tornozelo"],
    "boutique": ["loja de roupas de luxo", "loja de artigos de moda exclusivos", "loja de vestuário sofisticado", "loja de roupas elegantes", "estabelecimento comercial de moda", "loja de roupas de grife", "loja de roupas caras", "loja de vestuário de alta qualidade", "loja de roupas exclusivas", "estabelecimento de moda sofisticada"],
    "bovino": ["relativo a bois e vacas", "da espécie Bos taurus", "de gado", "relativo a gado bovino", "de boi", "de vaca", "relativo a bovinos", "da família Bovidae", "relativo à criação de gado", "próprio de bois e vacas"],
    "box": ["compartimento pequeno", "cabine", "cela", "recinto fechado", "espaço delimitado", "lugar pequeno e separado", "cubículo", "pequeno espaço", "espaço individual", "compartimento individual"],
    "boxe": ["pugilismo", "luta com os punhos", "esporte de combate com socos", "luta de boxe", "esporte de contato com luvas", "combate com socos regulamentado", "arte marcial com socos", "esporte olímpico de combate", "luta corpo a corpo com socos", "combate pugilístico"],
    "boy": ["rapaz", "garoto", "menino", "jovem", "moço", "rapazote", "menino jovem", "garoto jovem", "jovem do sexo masculino", "rapaz jovem"],
    "braba": ["brava (feminino)", "furiosa (feminino)", "irritada (feminino)", "zangada (feminino)", "indignada (feminino)", "colérica (feminino)", "violenta (feminino)", "feroz (feminino)", "agressiva (feminino)", "revoltada (feminino)"],
    "brabeza": ["fúria", "ira", "raiva", "irritação", "zanga", "indignação", "cólera", "violência", "ferocidade", "agressividade"],
    "brabo": ["furioso", "irritado", "zangado", "indignado", "colérico", "violento", "feroz", "agressivo", "revoltado", "enraivecido"],
    "braça": ["medida de comprimento antiga (cerca de 2,2 metros)", "antiga unidade de medida", "medida náutica", "comprimento de dois braços abertos", "medida tradicional", "unidade de medida histórica", "comprimento aproximado de um abraço amplo", "medida de profundidade (em alguns contextos)", "antiga medida agrária", "medida linear obsoleta"],
    "braçadeira": ["faixa usada no braço", "bracelete", "manguito", "faixa elástica para esportes", "insígnia usada no braço", "faixa de identificação", "suporte para braço", "acessório para o braço", "faixa de capitão (esportes)", "suporte para equipamentos no braço"],
    "braço": ["membro superior do corpo humano", "parte do corpo entre o ombro e a mão", "ramo", "extensão", "lado", "força", "poder", "apoio", "ajuda", "influência"],
    "braço direito": ["ajudante principal", "colaborador mais importante", "pessoa de confiança", "auxiliar imediato", "principal assessor", "segundo em comando", "pessoa essencial", "braço forte", "apoio fundamental", "pessoa indispensável"],
    "bradar": ["gritar", "clamar", "vociferar", "urrar", "exclamar alto", "dar berros", "gritar fortemente", "clamar com força", "soltar a voz com intensidade", "falar em voz alta e imperativa"],
    "bradicardia": ["frequência cardíaca lenta", "batimento cardíaco abaixo do normal", "ritmo cardíaco lento", "lentidão dos batimentos do coração", "pulsação lenta", "frequência cardíaca inferior a 60 bpm", "condição médica de batimentos cardíacos lentos", "diminuição da frequência cardíaca", "ritmo cardíaco bradicárdico", "lentificação dos batimentos cardíacos"],
    "bradipneia": ["respiração lenta", "frequência respiratória baixa", "lentidão da respiração", "ritmo respiratório lento", "diminuição da frequência respiratória", "respiração superficial e lenta", "condição médica de respiração lenta", "lentificação da respiração", "ritmo respiratório bradipneico", "diminuição do número de incursões respiratórias por minuto"],
    "bradisfigmia": ["lentidão do pulso", "pulso lento", "frequência do pulso baixa", "lentidão da pulsação", "ritmo do pulso lento", "diminuição da frequência do pulso", "condição médica de pulso lento", "lentificação da pulsação", "ritmo do pulso bradisfigmico", "diminuição do número de pulsações por minuto"],
    "brado": ["grito", "clamor", "vociferação", "urro", "exclamação alta", "grito forte", "clamação forte", "voz alta e intensa", "soltura de voz intensa", "fala alta e imperativa"],
    "braguilha": ["abertura frontal de calças", "fecho de calças", "zíper de calças", "botões de calças (antigo)", "abertura com botões ou zíper em calças", "parte da frente das calças com fecho", "fechamento frontal de calças", "abertura para urinar em calças", "detalhe frontal de calças", "acabamento da abertura frontal de calças"],
    "braile": ["sistema de escrita tátil para cegos", "escrita em relevo para deficientes visuais", "sistema de leitura com pontos em relevo", "alfabeto tátil para cegos", "código de pontos para leitura tátil", "sistema de escrita para quem não vê", "método de leitura com o tato", "sistema de comunicação para cegos", "escrita com pontos salientes", "forma de escrita para pessoas com deficiência visual"],
    "brainrot": ["deterioração mental", "degeneração cerebral", "perda de capacidade cognitiva", "atrophy cerebral (figurativo)", "estado de confusão mental", "perda de inteligência", "declínio mental", "enfraquecimento das faculdades mentais", "estado de embotamento mental", "perda progressiva da função cerebral (figurativo)"],
    "brama": ["berro alto de animais", "urro forte", "mugido potente", "grito forte de certos animais", "voz forte de animais selvagens", "som alto emitido por animais", "berro intenso", "urro potente de touros ou veados", "grito estrondoso de animais", "som forte de animais em cio"],
    "bramar": ["berrar alto (animais)", "urrar forte", "mugir potentemente", "gritar forte (certos animais)", "emitir voz forte (animais selvagens)", "soltar som alto (animais)", "berrar intensamente", "urrar potentemente (touros ou veados)", "gritar estrondosamente (animais)", "emitir som forte (animais em cio)"],
    "bramido": ["berro alto (animais)", "urro forte", "mugido potente", "grito forte (certos animais)", "voz forte de animais selvagens", "som alto emitido por animais", "berro intenso", "urro potente de touros ou veados", "grito estrondoso de animais", "som forte de animais em cio"],
    "bramir": ["berrar alto (animais)", "urrar forte", "mugir potentemente", "gritar forte (certos animais)", "emitir voz forte (animais selvagens)", "soltar som alto (animais)", "berrar intensamente", "urrar potentemente (touros ou veados)", "gritar estrondosamente (animais)", "emitir som forte (animais em cio)"],
    "branca": ["cor clara", "cor oposta ao preto", "cor da neve", "cor do leite", "cor clara e luminosa", "cor sem pigmentação", "cor clara e pura", "cor da paz (simbólico)", "cor da pureza (simbólico)", "cor clara e neutra"],
    "branco": ["cor clara", "cor oposta ao preto", "cor da neve", "cor do leite", "cor clara e luminosa", "cor sem pigmentação", "cor clara e pura", "cor da paz (simbólico)", "cor da pureza (simbólico)", "cor clara e neutra"],
    "brancura": ["qualidade do que é branco", "alvura", "claridade intensa", "pureza da cor branca", "luminosidade do branco", "estado de ser branco", "aparência branca", "cor branca intensa", "tonalidade branca pura", "intensidade da cor branca"],
    "branda": ["suave", "doce", "amena", "mansa", "delicada", "leve", "moderada", "terna", "afável", "gentil"],
    "brandamente": ["suavemente", "docemente", "amenamente", "mansamente", "delicadamente", "levemente", "moderadamente", "ternamente", "afavelmente", "gentilmente"],
    "brandir": ["agitar", "manejar", "empunhar", "acenar", "movimentar", "erguer e mover", "balançar", "oscilar", "mover com ostentação", "mostrar agitando"],
    "brando": ["suave", "doce", "ameno", "manso", "delicado", "leve", "moderado", "terno", "afável", "gentil"],
    "brandura": ["suavidade", "doçura", "amenidade", "mansidão", "delicadeza", "leveza", "moderação", "ternura", "afabilidade", "gentileza"],
    "brandy": ["aguardente de vinho envelhecida", "conhaque", "destilado de vinho", "bebida alcoólica destilada de vinho", "aguardente vínica envelhecida em barris de carvalho", "bebida alcoólica envelhecida", "destilado de uva envelhecido", "bebida espirituosa de vinho", "aguardente de vinho fina", "destilado de vinho de alta qualidade"],
    "brânquia": ["órgão respiratório de animais aquáticos", "aparelho respiratório de peixes", "estrutura para respiração na água", "órgão de troca gasosa em meio aquático", "guelra", "estrutura respiratória de animais marinhos", "órgão para extrair oxigênio da água", "filamento respiratório de peixes", "estrutura branquial", "órgão de respiração aquática"],
    "braquimorfo": ["de corpo atarracado", "de membros curtos", "de tronco largo", "de constituição física compacta", "de forma corporal curta e robusta", "de membros proporcionalmente curtos em relação ao tronco", "de físico compacto e forte", "de corpo baixo e largo", "de membros curtos e grossos", "de constituição física breve e forte"],
    "brasa": ["pedaço de carvão ou madeira em combustão", "carvão incandescente", "pedaço de material em chamas", "fogo em brasa", "resíduo de fogo incandescente", "material em combustão sem chama", "fogo vivo", "pedaço de lenha queimando sem chama", "material carbonizado em combustão", "fogo com calor intenso"],
    "brasão": ["emblema heráldico", "escudo de armas", "símbolo de família nobre", "insígnia de família", "símbolo heráldico", "emblema familiar", "representação heráldica de uma família", "símbolo de linhagem", "escudo com os símbolos de uma família", "emblema de nobreza"],
    "braseiro": ["recipiente para brasa", "fogareiro", "grelha portátil", "objeto para aquecer com brasa", "utensílio para assar com brasa", "recipiente para carvão em brasa", "forno portátil a carvão", "grelha a carvão", "objeto para manter brasas acesas", "utensílio para cozinhar com brasa"],
    "brasil": ["país da América do Sul", "maior país da América Latina", "República Federativa do Brasil", "país com grande diversidade cultural e natural", "país de língua portuguesa na América do Sul", "nação sul-americana", "país tropical", "país com a maior floresta tropical do mundo", "país com rica história e cultura", "país com grande potencial econômico"],
    "brasileira": ["natural do Brasil (feminino)", "cidadã do Brasil (feminino)", "relativa ao Brasil (feminino)", "da nacionalidade brasileira (feminino)", "originária do Brasil (feminino)", "pertencente ao Brasil (feminino)", "quem nasceu no Brasil (feminino)", "quem tem cidadania brasileira (feminino)", "que é do Brasil (feminino)", "nascida no território brasileiro (feminino)"],
    "brasileiro": ["natural do Brasil (masculino)", "cidadão do Brasil (masculino)", "relativo ao Brasil (masculino)", "da nacionalidade brasileira (masculino)", "originário do Brasil (masculino)", "pertencente ao Brasil (masculino)", "quem nasceu no Brasil (masculino)", "quem tem cidadania brasileira (masculino)", "que é do Brasil (masculino)", "nascido no território brasileiro (masculino)"],
    "brasília": ["capital do Brasil", "cidade planejada do Brasil", "sede do governo federal brasileiro", "capital federal do Brasil", "cidade modernista brasileira", "cidade construída no centro do Brasil", "capital do Distrito Federal", "uma das maiores cidades do Brasil", "centro político do Brasil", "cidade patrimônio cultural da humanidade pela UNESCO"],
    "brasilidade": ["qualidade de ser brasileiro", "características típicas do Brasil", "conjunto de traços culturais brasileiros", "identidade nacional brasileira", "sentimento de pertencimento ao Brasil", "modo de ser brasileiro", "cultura brasileira", "costumes do Brasil", "espírito brasileiro", "conjunto de valores e tradições do Brasil"],
    "brasis": ["plural de Brasil", "diferentes aspectos do Brasil", "diversidade regional e cultural do Brasil", "várias realidades brasileiras", "múltiplas facetas do país", "os diferentes Brasis", "as diversas regiões do Brasil", "as variadas culturas brasileiras", "as múltiplas identidades do país", "os diversos panoramas do Brasil"],
    "brava": ["furiosa", "irritada", "zangada", "indignada", "colérica", "violenta", "feroz", "agressiva", "revoltada", "enraivecida"],
    "bravata": ["ameaça vã", "jactância", "ostentação", "fanfarronice", "arrogância", "vanglória", "exibição de coragem inexistente", "ameaça sem intenção de cumprir", "falsa demonstração de bravura", "exagero na demonstração de coragem"],
    "braveza": ["fúria", "ira", "raiva", "irritação", "zanga", "indignação", "cólera", "violência", "ferocidade", "agressividade"],
    "bravio": ["selvagem", "indomável", "feroz", "agreste", "rude", "não domesticado", "selvático", "silvestre", "não civilizado", "primitivo"],
    "bravo": ["furioso", "irritado", "zangado", "indignado", "colérico", "violento", "feroz", "agressivo", "revoltado", "enraivecido"],
    "bravura": ["coragem", "valentia", "intrepidez", "audácia", "ousadia", "destemor", "heroísmo", "galhardia", "valor", "arrojo"],
    "break": ["pausa", "interrupção", "intervalo", "quebra", "suspensão", "parada", "descanso", "interrupção momentânea", "tempo de descanso", "paralisação"],
    "brecar": ["frear", "deter", "parar", "interromper", "suspender", "estancar", "moderar", "diminuir a velocidade", "fazer parar", "reter"],
    "brecha": ["abertura", "fenda", "racha", "buraco", "falha", "lacuna", "oportunidade", "vão", "intervalo", "espaço aberto"],
    "brechó": ["loja de roupas usadas", "loja de artigos de segunda mão", "loja de antiguidades (em alguns casos)", "loja de objetos usados", "estabelecimento de venda de usados", "loja de artigos vintage", "mercado de usados", "loja de segunda mão", "comércio de artigos usados", "loja de objetos antigos e usados"],
    "brega": ["de gosto duvidoso", "cafona", "kitsch", "de mau gosto", "extravagante e vulgar", "fora de moda e deselegante", "de estilo popular e exagerado", "com cores e combinações chocantes", "de qualidade inferior", "de aparência vulgar"],
    "brejeiro": ["travesso", "malicioso", "atrevido", "indecente (levemente)", "picante", "esperto", "sagaz", "astuto", "engraçado com segundas intenções", "com um toque de malícia"],
    "brejo": ["terreno alagadiço", "pântano", "charco", "zona úmida", "terreno pantanoso", "lugar alagado", "terreno encharcado", "zona de vegetação palustre", "terreno lamacento", "área com água parada e vegetação específica"],
    "brenha": ["mato denso", "selva fechada", "lugar cheio de arbustos e cipós", "mata impenetrável", "vegetação densa e intrincada", "mato cerrado", "lugar selvagem e de difícil acesso", "floresta densa", "mata fechada e escura", "vegetação densa e emaranhada"],
    "breu": ["escuridão total", "negro absoluto", "trevas densas", "escuridão completa", "ausência total de luz", "noite escura sem lua", "escuridão profunda", "negro intenso", "escuridão impenetrável", "falta de luminosidade"],
    "breve": ["curto", "rápido", "sucinto", "conciso", "pequeno", "momentâneo", "fugaz", "de curta duração", "de pouco tempo", "lacônico"],
    "brevemente": ["em pouco tempo", "rapidamente", "em breve", "logo", "daqui a pouco", "num instante", "em seguida", "num futuro próximo", "em curto prazo", "sem demora"],
    "breviário": ["livro de orações", "livro litúrgico", "coletânea de textos religiosos", "livro de devoção", "compêndio de orações", "livro de rezas", "manual de orações", "livro com textos para meditação", "coletânea de leituras religiosas", "livro de orações para uso diário"],
    "brevidade": ["curta duração", "rapidez", "concisão", "pequeno espaço de tempo", "curteza", "rapidez no tempo", "concisão na fala ou escrita", "pequeno período", "curto intervalo", "rapidez de ocorrência"],
    "brevilíneo": ["de corpo baixo e troncudo", "de membros curtos", "de baixa estatura e forte", "de constituição física compacta", "de corpo baixo e largo", "de membros proporcionalmente curtos", "de físico compacto e robusto", "de pequena estatura e forte", "de membros curtos e grossos", "de constituição física breve e forte"],
    "brida": ["arreio", "freio de cavalo", "conjunto de correias para controlar um cavalo", "peça do equipamento de montaria", "conjunto de rédeas e cabeçada", "instrumento para guiar um cavalo", "correias para dirigir um cavalo", "equipamento de equitação", "conjunto de acessórios para a cabeça do cavalo", "instrumento de controle equino"],
    "briga": ["luta", "combate", "discussão acalorada", "desentendimento", "conflito", "rixa", "altercação", "desavença", "pelea", "contenda"],
    "brigada": ["grupo organizado", "equipe", "tropa", "unidade militar", "grupo de trabalho", "equipe de combate a incêndios", "grupo de resgate", "força-tarefa", "grupo de voluntários", "equipe de emergência"],
    "brigadeiro": ["doce brasileiro de chocolate", "doce de chocolate granulado", "doce cremoso de chocolate", "doce tradicional de festas infantis", "doce feito com leite condensado e chocolate", "doce enrolado em granulado", "doce de chocolate pequeno", "guloseima de chocolate brasileira", "doce popular em aniversários", "pequeno doce de chocolate cremoso"],
    "brigadista": ["membro de uma brigada", "integrante de uma equipe de combate a incêndios", "voluntário de resgate", "membro de uma equipe de emergência", "participante de uma brigada de incêndio", "integrante de um grupo de resgate", "membro de uma equipe de primeiros socorros", "voluntário em situações de risco", "pessoa treinada para emergências", "membro de uma equipe de atuação em desastres"],
    "brigar": ["lutar", "combater", "discutir acaloradamente", "desentender-se", "entrar em conflito", "rixar", "altercar", "desavir-se", "pelear", "contender"],
    "briguento": ["que gosta de brigar", "propenso a discussões", "encrenqueiro", "contencioso", "discordante", "que busca confusão", "que provoca brigas", "que vive em conflito", "que arruma encrenca", "que tem tendência a brigar"],
    "brilhando": ["emitindo luz", "luminoso", "radiante", "resplandecente", "cintilante", "fulgurante", "lustroso", "reluzente", "esplendente", "radioso"],
    "brilhante": ["luminoso", "radiante", "resplandecente", "cintilante", "fulgurante", "lustroso", "reluzente", "esplendente", "radioso", "inteligente"],
    "brilhar": ["emitir luz", "ser luminoso", "radiar", "resplandecer", "cintilar", "fulgurar", "lustrar", "reluzir", "esplender", "radiosar"],
    "brilho": ["luz intensa", "luminosidade", "radiação", "resplendor", "cintilação", "fulgor", "lustro", "reluz", "esplendor", "radiosidade"],
    "brilhoso": ["que tem brilho", "lustroso", "reluzente", "resplandecente", "radiante", "cintilante", "fulgurante", "esplendente", "radioso", "luzidio"],
    "brim": ["tecido de algodão resistente", "sarja de algodão", "tecido para calças", "tecido usado em uniformes", "tecido forte de algodão", "tipo de tecido de algodão", "tecido para roupas de trabalho", "tecido durável de algodão", "material têxtil resistente", "tecido de algodão para confecção"],
    "brincadeira": ["jogo", "divertimento", "passatempo", "atividade lúdica", "jogo infantil", "diverção", "entretenimento", "atividade recreativa", "jogo para crianças", "ato de brincar"],
    "brincalhão": ["divertido", "jovial", "alegre", "espirituoso", "engraçado", "que gosta de brincar", "que faz piadas", "que tem senso de humor", "que se diverte facilmente", "que anima o ambiente"],
    "brincar": ["jogar", "divertir-se", "entregar-se a um passatempo", "participar de uma atividade lúdica", "fazer jogos infantis", "divertir", "entreter-se", "participar de atividades recreativas", "fazer jogos para crianças", "engajar-se em brincadeiras"],
    "brinco": ["joia usada na orelha", "adorno para a orelha", "pendente de orelha", "jóia auricular", "acessório de moda para a orelha", "enfeite para a orelha", "jóia que se prende à orelha", "adorno que se usa na orelha", "peça de joalheria para a orelha", "acessório para enfeitar a orelha"],
    "brindar": ["fazer um brinde", "saudar com um brinde", "celebrar com um brinde", "oferecer um brinde", "elevar as taças em saudação", "fazer um brinde em homenagem a algo ou alguém", "celebrar com bebidas", "saudar com bebidas", "oferecer uma bebida em celebração", "elevar os copos em comemoração"],
    "brindasse": ["forma conjugada do verbo brindar (pretérito imperfeito do subjuntivo)", "se fizesse um brinde", "se saudasse com um brinde", "se celebrasse com um brinde", "se oferecesse um brinde", "se elevasse as taças em saudação", "se fizesse um brinde em homenagem", "se celebrasse com bebidas", "se saudasse com bebidas", "se oferecesse uma bebida em celebração", "se elevasse os copos em comemoração"],
    "brinde": ["saudação com bebidas", "oferta de bebida em celebração", "ato de elevar as taças em homenagem", "lembrancinha", "presente promocional", "objeto oferecido gratuitamente", "presente", "lembrança", "objeto de cortesia", "regalo"],
    "brinquedo": ["objeto para brincar", "jogo infantil", "objeto de diversão para crianças", "passatempo infantil", "objeto lúdico", "objeto para entretenimento infantil", "jogo para crianças", "objeto para divertir crianças", "objeto para recreação infantil", "objeto para estimular a imaginação infantil"],
    "brios": ["orgulho", "honra", "dignidade", "amor-próprio", "vaidade", "altivez", "soberba", "bravura", "coragem", "ânimo"],
    "briosa": ["orgulhosa", "honrada", "digna", "com amor-próprio", "vaidosa", "altiva", "soberba", "brava", "corajosa", "animada"],
    "brioso": ["orgulhoso", "honrado", "digno", "com amor-próprio", "vaidoso", "altivo", "soberbo", "bravo", "corajoso", "animado"],
    "brisa": ["vento suave", "vento leve", "aragem", "vento fraco", "vento fresco", "vento calmo", "vento brando", "sopro suave", "vento delicado", "vento moderado"],
    "britânico": ["da Grã-Bretanha", "inglês", "escocês", "galês", "relativo ao Reino Unido", "da Inglaterra", "da Escócia", "do País de Gales", "relativo aos britânicos", "da Grã-Bretanha e Irlanda do Norte"],
    "broca": ["ferramenta para furar", "instrumento de perfuração", "furadeira manual", "peça de furadeira", "ferramenta de metalurgia", "instrumento para fazer furos", "ferramenta rotativa para perfurar", "instrumento para abrir orifícios", "ferramenta para perfurar madeira, metal, etc.", "instrumento de perfuração manual ou mecânica"],
    "brocardo": ["máxima jurídica", "princípio de direito", "sentença jurídica curta e expressiva", "aforismo jurídico", "regra de direito concisa", "ditado jurídico", "enunciado jurídico breve", "expressão jurídica consagrada", "princípio legal fundamental", "máxima do direito"],
    "brocha": ["pincel grande", "pincel grosso", "pincel para pintura de paredes", "pincel para grandes áreas", "pincel de cerdas longas", "pincel para pintura imobiliária", "pincel para aplicação de tinta em paredes", "pincel de pintura", "instrumento para pintar paredes", "pincel grande para pintura"],
    "brochar": ["encadernar (livro com brochura)", "prender as folhas de um livro com grampos ou costura simples", "fazer brochura", "unir as páginas de um livro de forma simples", "encadernar de forma econômica", "prender as folhas de um impresso", "fazer a encadernação de um livro em brochura", "unir as páginas de um livro com capa mole", "fazer a ligação das páginas de um livro", "encadernar um livro com capa flexível"],
    "brochura": ["encadernação simples de livro", "livro com capa mole", "livro encadernado de forma econômica", "tipo de encadernação com capa flexível", "livro com capa maleável", "encadernação sem capa dura", "livro de capa mole e lombada grampeada ou colada", "forma de encadernação mais barata", "livro com capa flexível e páginas unidas", "tipo de encadernação de baixo custo"],
    "brócolis": ["legume da família do repolho", "planta comestível da espécie Brassica oleracea", "tipo de couve com flores verdes", "legume verde com floretes", "verdura da família das crucíferas", "legume rico em vitaminas", "planta herbácea comestível", "hortaliça verde", "legume crucífero", "planta com inflorescências comestíveis"],
    "bromélia": ["planta tropical ornamental", "planta da família Bromeliaceae", "planta epífita (geralmente)", "planta com folhas em roseta", "planta com flores vistosas", "espécie de planta tropical", "planta usada em decoração", "planta que armazena água nas folhas", "planta com diversas espécies e formas", "planta nativa das Américas"],
    "bronca": ["reprimenda", "reprovação", "advertência", "repreensão", "sermão", "censura", "correção", "reprovação verbal", "reprimenda verbal", "advertência formal"],
    "bronco": ["grosseiro", "rude", "tosco", "mal-educado", "incivil", "selvagem", "rústico", "ignorante", "sem refinamento", "palavra ou ato grosseiro"],
    "bronze": ["liga metálica de cobre e estanho", "cor marrom-avermelhada", "medalha de terceiro lugar (esportes)", "escultura de bronze", "objeto feito de bronze", "tom de pele bronzeado", "liga de cobre com outros metais (em algumas definições)", "cor da medalha de terceiro lugar", "material usado em estátuas", "cor de pele após exposição ao sol"],
    "bronzeado": ["com a pele cor de bronze", "com a pele morena pelo sol", "que apanhou sol e ficou com a pele escura", "com a pele queimada de sol", "com tom de pele bronze", "que se expôs ao sol para escurecer a pele", "com a pele corada pelo sol", "com a pele escura devido ao sol", "com a pele com tom acobreado", "que tomou banho de sol"],
    "broquel": ["escudo pequeno e redondo", "escudo de mão", "pequeno escudo usado para defesa pessoal", "escudo de combate corpo a corpo", "escudo circular pequeno", "instrumento de defesa medieval", "escudo leve e fácil de manusear", "escudo usado em esgrima antiga", "pequeno escudo de metal", "instrumento de proteção em lutas"],
    "brotar": ["começar a crescer", "germinar", "sair da terra (planta)", "nascer", "surgir", "aparecer", "manifestar-se", "começar a desenvolver-se", "sair de um tronco ou raiz", "começar a surgir"],
    "brotinho": ["broto pequeno", "planta jovem", "pessoa jovem e bonita (informal)", "menina jovem e atraente (informal)", "jovem planta", "pequena planta em crescimento", "pessoa jovem e charmosa (informal)", "garota jovem e bonita (informal)", "planta nova e pequena", "pessoa jovem e agradável (informal)"],
    "broto": ["parte inicial do crescimento de uma planta", "germe", "rebento", "planta jovem", "início de uma folha ou flor", "parte nova de uma planta", "começo do desenvolvimento vegetal", "planta em fase inicial de crescimento", "germe de uma semente", "parte da planta que começa a crescer"],
    "brownie": ["bolo de chocolate denso e úmido", "doce de chocolate americano", "bolo pequeno de chocolate", "bolo de chocolate com textura macia", "sobremesa de chocolate", "bolo de chocolate quadrado ou retangular", "doce de chocolate rico", "bolo de chocolate com nozes (opcional)", "bolo de chocolate com consistência fudgy", "sobremesa americana de chocolate"],
    "bruaca": ["bolsa de couro rústica", "saco de couro", "mochila de couro (antiga)", "bolsa de viagem de couro", "saco de couro para carga", "bolsa de tropeiro", "bolsa de couro para transportar pertences", "saco de couro usado em viagens a cavalo", "bolsa de couro para guardar mantimentos", "saco de couro resistente"],
    "bruços": ["de barriga para baixo", "com a face voltada para baixo", "em posição ventral", "de rosto no chão", "com o ventre para baixo", "deitado de barriga", "com a frente do corpo para baixo", "em decúbito ventral", "com a parte frontal do corpo apoiada", "deitado com a face inferior do corpo para baixo"],
    "brucutu": ["pessoa forte e bruta", "homem forte e rude", "indivíduo corpulento e grosseiro", "pessoa de físico avantajado e modos rudes", "homem forte e sem refinamento", "pessoa grande e bruta", "indivíduo forte e mal-educado", "homem corpulento e grosseiro", "pessoa forte e sem delicadeza", "indivíduo grande e rude"],
    "bruma": ["névoa leve", "neblina matinal", "vapor d'água condensado", "névoa tênue", "neblina rala", "atmosfera úmida e ligeiramente enevoada", "nevoeiro fraco", "neblina suave", "vapor de água no ar", "condição atmosférica de visibilidade reduzida"],
    "brunch": ["refeição entre o café da manhã e o almoço", "combinação de café da manhã e almoço", "refeição tardia da manhã", "refeição matinal reforçada", "refeição servida no final da manhã ou início da tarde", "refeição que substitui o café da manhã e o almoço", "reunião social com comida no final da manhã", "refeição de domingo no meio da manhã", "café da manhã tardio com elementos de almoço", "refeição para aproveitar o final da manhã"],
    "brusca": ["repentina", "súbita", "abrupta", "inesperada", "imprevista", "seca", "áspera", "grosseira", "rápida e inesperada", "sem rodeios"],
    "bruscamente": ["repentinamente", "subitamente", "abruptamente", "inesperadamente", "imprevistamente", "secamente", "asperamente", "grosseiramente", "rapidamente e de forma inesperada", "sem rodeios"],
    "brusco": ["repentino", "súbito", "abrupto", "inesperado", "imprevisto", "seco", "áspero", "grosseiro", "rápido e inesperado", "sem rodeios"],
    "bruta": ["rude", "grosseira", "selvagem", "crua", "natural", "sem refinamento", "violenta", "feroz", "sem elaboração", "tosca"],
    "brutal": ["cruel", "violento", "feroz", "desumano", "selvagem", "grosseiro", "rude", "sem piedade", "implacável", "sanguinário"],
    "brutalidade": ["crueldade", "violência extrema", "ferocidade", "desumanidade", "selvageria", "grosseria extrema", "rudeza excessiva", "falta de piedade", "implacabilidade", "sanguinaridade"],
    "brutalmente": ["cruelmente", "violentamente", "ferozmente", "desumanamente", "selvagemente", "grosseiramente", "rudemente", "sem piedade", "implacavelmente", "sanguinariamente"],
    "brutamonte": ["pessoa forte e bruta", "homem forte e rude", "indivíduo corpulento e grosseiro", "pessoa de físico avantajado e modos rudes", "homem forte e sem refinamento", "pessoa grande e bruta", "indivíduo forte e mal-educado", "homem corpulento e grosseiro", "pessoa forte e sem delicadeza", "indivíduo grande e rude"],
    "bruto": ["rude", "grosseiro", "selvagem", "cru", "natural", "sem refinamento", "violento", "feroz", "sem elaboração", "tosco"],
    "bruxa": ["mulher com poderes mágicos (folclore)", "feiticeira", "mulher má (em contos)", "mulher velha e feia (estereótipo)", "mulher que pratica magia", "mulher com conhecimentos ocultos", "mulher que usa feitiços", "mulher que se associa a forças sobrenaturais", "mulher com fama de mágica", "personagem de contos de fadas"],
    "bruxaria": ["magia", "feitiçaria", "prática de magia", "uso de feitiços", "conhecimento oculto", "crença em poderes mágicos", "arte de lançar feitiços", "prática de rituais mágicos", "uso de forças sobrenaturais", "conjunto de crenças e práticas mágicas"],
    "bruxo": ["homem com poderes mágicos (folclore)", "feiticeiro", "homem mau (em contos)", "homem velho e feio (estereótipo)", "homem que pratica magia", "homem com conhecimentos ocultos", "homem que usa feitiços", "homem que se associa a forças sobrenaturais", "homem com fama de mágico", "personagem de contos de fadas"],
    "bruxuleante": ["tremeluzente", "vacilante", "intermitente", "oscilante", "que pisca", "que cintila fracamente", "com luz instável", "que oscila em intensidade", "que emite luz fraca e instável", "com brilho vacilante"],
    "bruxulear": ["tremeluzir", "vacilar", "piscar", "cintilar fracamente", "oscilar a luz", "emitir luz instável", "oscilar em intensidade de luz", "emitir luz fraca e instável", "brilhar de forma vacilante", "piscar de forma instável"],
    "bucha": ["esponja vegetal", "esponja para banho", "planta cucurbitácea fibrosa", "esponja natural", "material para esfregar", "material de limpeza", "recheio", "enchimento", "rolha (em alguns contextos)", "material absorvente"],
    "buchada": ["prato nordestino feito com vísceras de bode", "guisado de vísceras de bode", "comida regional do Nordeste", "preparação culinária com estômago de bode", "prato típico do Nordeste brasileiro", "comida feita com partes internas do bode", "guisado de bode com temperos", "iguaria nordestina com vísceras", "prato regional com sabor forte", "comida tradicional do sertão"],
    "buchicho": ["sussurro", "murmúrio", "fofoca", "conversa em voz baixa", "rumor", "boato", "bisbilhoteio", "conversa confidencial", "fala em segredo", "murmuração"],
    "bucho": ["estômago (de animais)", "barriga (informal)", "pança (informal)", "estômago de ruminantes", "parte do aparelho digestivo de animais", "abdômen (informal)", "ventre (informal)", "estômago de porco (para linguiça)", "parte interna do corpo de animais", "órgão digestivo de animais"],
    "buço": ["pelos finos acima do lábio superior", "penugem acima da boca", "primeiros pelos da barba", "pelos faciais finos", "pelos que nascem sobre o lábio superior", "sinal de início da barba", "pelos na região do bigode (inicial)", "pelos finos no lábio superior de jovens", "pequena quantidade de pelos sobre o lábio superior", "indício de crescimento de barba"],
    "bucólica": ["campestre", "pastoril", "rural", "do campo", "relativa à vida no campo", "que evoca o campo", "idílica", "agreste", "rústica", "sertaneja"],
    "bucólico": ["campestre", "pastoril", "rural", "do campo", "relativo à vida no campo", "que evoca o campo", "idílico", "agreste", "rústico", "sertanejo"],
    "bucolismo": ["apreço pela vida campestre", "idealização da vida no campo", "amor pelo campo", "valorização da vida rural", "estilo literário que exalta o campo", "tema literário sobre a vida pastoril", "fascínio pelo ambiente rural", "celebração da natureza e do campo", "gosto pela vida simples do campo", "exaltação da paisagem rural"],
    "buda": ["iluminado (título religioso)", "Sidarta Gautama (fundador do budismo)", "aquele que alcançou a iluminação", "líder espiritual do budismo", "mestre budista", "ser iluminado no budismo", "aquele que despertou para a verdade", "figura central do budismo", "sábio budista", "aquele que atingiu o nirvana"],
    "budismo": ["religião e filosofia oriental", "ensinamentos de Buda", "caminho para a iluminação", "doutrina budista", "sistema de crenças e práticas espirituais", "tradição religiosa originária da Índia", "filosofia de vida baseada nos ensinamentos de Sidarta Gautama", "conjunto de práticas meditativas e éticas", "busca pelo despertar espiritual", "caminho para o nirvana"],
    "bueiro": ["abertura para escoamento de água pluvial", "ralo de rua", "sumidouro", "grade de esgoto", "abertura na sarjeta", "escoadouro de água da chuva", "entrada de galeria pluvial", "abertura para drenagem de água", "grade na rua para escoamento", "boca de lobo"],
    "búfalo": ["mamífero bovino grande", "animal da família Bovidae", "espécie de bovídeo", "grande bovino", "animal de grande porte com chifres", "mamífero herbívoro", "animal selvagem ou doméstico", "espécie Bubalus bubalis (búfalo-asiático)", "espécie Syncerus caffer (búfalo-africano)", "animal usado para tração e produção de leite e carne"],
    "bufão": ["palhaço da corte", "artista cômico", "pessoa que diverte com palhaçadas", "personagem engraçado", "bobo da corte", "indivíduo que faz rir", "artista circense cômico", "pessoa que se veste de forma ridícula para divertir", "personagem teatral engraçado", "indivíduo que busca o riso alheio"],
    "bufar": ["soltar ar com força pelos lábios", "respirar ruidosamente (expressando raiva ou cansaço)", "mostrar irritação com a respiração", "fungar (expressando desagrado)", "emitir som de raiva", "respirar com dificuldade", "soltar um bufo", "expressar descontentamento com a respiração", "respirar pesadamente", "mostrar impaciência com a respiração"],
    "bufarinheiro": ["vendedor ambulante de quinquilharias", "mascate de bugigangas", "comerciante de objetos de pouco valor", "vendedor de miudezas", "quem vende artigos baratos nas ruas", "comerciante de objetos diversos de pequeno valor", "vendedor de artigos de baixo custo", "quem comercializa bugigangas", "vendedor de objetos sem valor significativo", "comerciante ambulante de miudezas"],
    "bufê": ["mesa com variedade de comidas", "serviço de refeição com autosserviço", "mesa com pratos diversos para escolha", "sistema de servir comida onde o cliente se serve", "variedade de alimentos dispostos para escolha", "refeição com diversos pratos disponíveis", "mesa farta de comida", "sistema de alimentação com livre escolha de pratos", "mesa com opções variadas de comida", "forma de servir refeição com autosserviço"],
    "bugiganga": ["objeto de pouco valor", "quinquilharia", "miudeza", "objeto sem importância", "coisa insignificante", "objeto pequeno e sem valor", "tralha", "objeto decorativo de baixo custo", "objeto de pequeno valor comercial", "coisa de pouco préstimo"],
    "bugio": ["macaco da América do Sul", "primata do gênero Alouatta", "macaco com voz forte", "macaco uivador", "animal da fauna sul-americana", "mamífero primata", "macaco com pelagem densa", "animal que emite sons altos", "espécie de macaco encontrada em florestas", "primata de grande porte (em algumas espécies)"],
    "bugre": ["índio brasileiro (termo pejorativo)", "pessoa rústica e ignorante (termo pejorativo)", "pessoa do interior (termo pejorativo)", "habitante indígena do Brasil (termo depreciativo)", "pessoa sem instrução (termo ofensivo)", "indivíduo selvagem (termo pejorativo)", "pessoa com costumes rudes (termo depreciativo)", "habitante nativo do Brasil (termo pejorativo)", "pessoa não civilizada (termo ofensivo)", "termo pejorativo para indígena"],
    "bujão": ["rolha grande", "tampa grande", "tampão", "peça para vedar uma abertura", "rolha de grande dimensão", "tampa para recipientes grandes", "peça para fechar um orifício", "rolha para barril", "tampa para tanque", "peça de vedação grande"],
    "bula": ["folheto informativo de medicamento", "instruções de uso de um remédio", "prospecto de medicamento", "informações sobre um medicamento", "texto com indicações e contraindicações de um remédio", "folheto explicativo de um medicamento", "informações para o paciente sobre um remédio", "texto com a composição e posologia de um remédio", "folheto com efeitos colaterais e precauções de um remédio", "informações detalhadas sobre um medicamento"],
    "bulbo": ["raiz subterrânea modificada", "estrutura arredondada de certas plantas", "parte inferior de uma lâmpada", "raiz em forma de globo", "estrutura de armazenamento de nutrientes em plantas", "base de uma lâmpada elétrica", "raiz arredondada de cebola, alho, etc.", "parte inferior de um bulbo capilar", "estrutura vegetal subterrânea", "base de um tubo de vidro (lâmpada)"],
    "bule": ["recipiente para servir chá ou café", "jarro com bico para servir bebidas quentes", "vasilha para preparar e servir chá", "jarro para servir café", "recipiente com asa e bico para líquidos quentes", "vasilha para infusões", "jarro para servir bebidas quentes como chá ou café", "recipiente para chá", "recipiente para café", "vasilha para servir líquidos quentes"],
    "bulevar": ["avenida larga com árvores", "rua larga com canteiro central", "via urbana arborizada", "avenida com espaços verdes", "rua ampla com vegetação", "via pública larga e arborizada", "avenida com árvores nos lados ou no centro", "rua larga com áreas ajardinadas", "via urbana com árvores e espaço para pedestres", "avenida com canteiros e árvores"],
    "bulha": ["barulho", "ruído", "estrondo", "tumulto", "algazarra", "gritaria", "confusão sonora", "barulho alto", "som forte e desagradável", "ruído intenso"],
    "bulhufas": ["nada", "absolutamente nada", "coisa nenhuma", "nenhuma importância", "insignificância", "coisa de pouco valor", "bobagem", "tolice", "asneira", "besteira"],
    "bulício": ["agitação", "movimento", "tumulto", "confusão", "atividade intensa", "corre-corre", "movimentação", "alvoroço", "rebuliço", "agitação ruidosa"],
    "buliço": ["agitação", "movimento", "tumulto", "confusão", "atividade intensa", "corre-corre", "movimentação", "alvoroço", "rebuliço", "agitação ruidosa"],
    "buliçoso": ["agitado", "movimentado", "inquieto", "travesso", "vivaz", "ativo", "irrequieto", "dinâmico", "energético", "que não para"],
    "bulimia": ["transtorno alimentar caracterizado por compulsão alimentar seguida de métodos compensatórios", "distúrbio alimentar com episódios de ingestão excessiva de comida seguidos de vômitos ou uso de laxantes", "problema de saúde mental relacionado à alimentação", "transtorno alimentar com ciclo de compulsão e purgação", "distúrbio psicológico com comportamento alimentar anormal", "condição em que a pessoa come muito e depois tenta evitar o ganho de peso", "transtorno alimentar grave", "problema de saúde caracterizado por comer em excesso e eliminar o alimento", "distúrbio alimentar com preocupação excessiva com o peso", "condição psicológica com impacto na alimentação"],
    "bulir": ["mexer", "mover", "tocar", "apalpar", "agitar", "remexer", "manusear", "deslocar", "mover ligeiramente", "tocar de leve"],
    "bullying": ["assédio moral", "intimidação sistemática", "violência psicológica repetitiva", "comportamento agressivo intencional e repetido", "humilhação constante", "perseguição", "opressão", "ataque sistemático", "molestamento moral", "violência moral repetida"],
    "bumbum": ["nádegas (informal)", "traseiro (informal)", "popa (informal)", "derrière (informal)", "parte posterior do corpo (informal)", "região glútea (informal)", "rabo (informal)", "bunda (informal)", "ancas (informal)", "parte de trás do corpo (informal)"],
    "bumerangue": ["objeto arremessável que retorna ao lançador", "arma de arremesso australiana", "objeto em forma de V que volta", "instrumento de caça aborígene", "brinquedo que retorna", "objeto aerodinâmico que descreve uma curva", "arma tradicional australiana", "objeto para lançar que volta para a mão", "instrumento de madeira curvado para arremesso", "brinquedo que faz um voo circular"],
    "bunker": ["abrigo subterrâneo fortificado", "fortificação subterrânea", "refúgio subterrâneo", "construção subterrânea de proteção", "abrigo militar subterrâneo", "estrutura subterrânea reforçada", "refúgio antiaéreo", "abrigo contra bombardeios", "construção subterrânea de defesa", "abrigo seguro subterrâneo"],
    "buraco": ["abertura", "fenda", "cavidade", "orifício", "vão", "depressão", "cova", "brecha", "rombo", "lacuna"],
    "burburinho": ["murmúrio", "sussurro", "rumor", "conversa em voz baixa", "aglomeração com vozes baixas", "ruído suave de muitas vozes", "murmuração", "fala indistinta", "conversa sussurrada", "som baixo de muitas pessoas falando"],
    "burgo": ["cidade medieval fortificada", "cidade antiga murada", "povoação medieval", "cidade com muralhas", "núcleo urbano medieval", "cidade protegida por muralhas", "povoado fortificado da Idade Média", "cidade com importância comercial na Idade Média", "centro urbano medieval com autonomia", "cidade com características medievais"],
    "burguês": ["relativo à burguesia", "da classe média alta", "comerciante rico (historicamente)", "habitante de um burgo (historicamente)", "indivíduo da burguesia", "com características da burguesia", "relativo à classe dominante capitalista", "com valores da burguesia", "da classe média com poder econômico", "com estilo de vida da burguesia"],
    "burguesa": ["relativa à burguesia (feminino)", "da classe média alta (feminino)", "comerciante rica (historicamente, feminino)", "habitante de um burgo (historicamente, feminino)", "indivíduo da burguesia (feminino)", "com características da burguesia (feminino)", "relativa à classe dominante capitalista (feminino)", "com valores da burguesia (feminino)", "da classe média com poder econômico (feminino)", "com estilo de vida da burguesia (feminino)"],
    "burguesia": ["classe social dominante no sistema capitalista", "classe média alta com poder econômico", "conjunto dos burgueses", "classe proprietária dos meios de produção", "classe social com poder econômico e influência política", "classe social que surgiu com o desenvolvimento do comércio", "classe social urbana com poder econômico", "classe social que detém o capital", "classe social com valores específicos (consumo, status)", "classe social com papel importante na história do capitalismo"],
    "buril": ["ferramenta de gravura", "instrumento para gravar metal", "ponteiro de aço para gravar", "ferramenta para entalhar", "instrumento para fazer incisões", "ferramenta usada em gravura em metal", "instrumento de corte para gravar", "ponteiro de aço temperado para gravar", "ferramenta para gravar em superfícies duras", "instrumento manual para gravar metal ou madeira"],
    "burilar": ["gravar", "entalhar", "esculpir", "lavrar", "fazer incisões", "trabalhar com buril", "gravar em metal", "entalhar em madeira ou pedra", "fazer gravações artísticas", "trabalhar minuciosamente"],
    "burla": ["engano", "fraude", "trapaça", "artifício para enganar", "engodo", "embuste", "fraude para obter vantagem", "enganação intencional", "ato de ludibriar", "maneira de enganar"],
    "burlar": ["enganar", "fraudar", "trapacear", "ludibriar", "iludir", "engodar", "defraudar", "enganar com astúcia", "passar a perna em", "enganar para obter vantagem"],
    "burlesco": ["cômico", "ridículo", "grotesco", "paródico", "satírico", "que provoca riso pela caricatura", "de caráter jocoso e exagerado", "que imita de forma engraçada", "que ridiculariza com humor", "de estilo cômico e extravagante"],
    "burnout": ["síndrome de exaustão profissional", "esgotamento mental e físico causado pelo trabalho", "estresse crônico relacionado ao trabalho", "condição de esgotamento profissional", "síndrome do esgotamento", "cansaço extremo devido ao trabalho", "fadiga profissional", "exaustão emocional e física no trabalho", "estresse ocupacional crônico", "condição de desgaste profissional"],
    "burocracia": ["sistema administrativo complexo", "excesso de formalidades", "lentidão administrativa", "conjunto de normas e procedimentos complexos", "sistema de governo ou administração caracterizado por muitas regras e processos", "formalismo excessivo na administração", "morosidade administrativa", "conjunto de funcionários públicos e suas funções", "sistema de organização administrativa hierárquica", "administração pública com processos complexos"],
    "burocrata": ["funcionário público com excesso de formalismo", "indivíduo que segue rigidamente as regras administrativas", "pessoa que valoriza os procedimentos burocráticos", "funcionário que dificulta processos com formalidades", "indivíduo preso à burocracia", "pessoa que aplica as normas administrativas de forma inflexível", "funcionário que causa lentidão administrativa", "indivíduo que se apega a papéis e processos", "pessoa que dificulta a resolução de problemas com burocracia", "funcionário que prioriza a forma em detrimento da agilidade"],
    "burocrático": ["relativo à burocracia", "com excesso de formalidades", "lento administrativamente", "complexo em termos de normas e procedimentos", "formalista", "moroso", "que envolve muitos papéis e processos", "que dificulta a agilidade administrativa", "que prioriza a forma", "que segue rigidamente as regras administrativas"],
    "burra": ["fêmea do burro", "animal híbrido estéril (égua + jumento)", "pessoa teimosa (informal)", "pessoa pouco inteligente (informal)", "animal de carga", "asinina fêmea", "mula (em alguns contextos)", "pessoa obstinada (informal)", "pessoa com dificuldade de aprendizado (informal)", "animal de trabalho"],
    "burrice": ["falta de inteligência", "tolice", "ignorância", "estupidez", "asneira", "besteira", "insensatez", "imbecilidade", "palerma", "obtusão"],
    "burrico": ["burro pequeno", "jumento jovem", "pequeno asinino", "filhote de burro", "asinino jovem", "pequeno animal de carga", "jumento pequeno", "burro novo", "filho de jumento", "pequeno asinino híbrido"],
    "burro": ["animal híbrido estéril (égua + jumento)", "asinino macho", "pessoa teimosa (informal)", "pessoa pouco inteligente (informal)", "animal de carga", "jumento", "mulo (em alguns contextos)", "pessoa obstinada (informal)", "pessoa com dificuldade de aprendizado (informal)", "animal de trabalho"],
    "busca": ["ato de procurar", "procura", "investigação", "pesquisa", "averiguação", "diligência", "rastreamento", "perseguição", "tentativa de encontrar", "procedimento de procura"],
    "busca-pé": ["pequeno fogo de artifício que corre pelo chão", "fogos de artifício rastejante", "artefato pirotécnico que se move no chão", "pequeno rojão que corre", "foguete de chão pequeno", "fogo de artifício terrestre", "pequeno artefato pirotécnico que se desloca", "foguete que se move rente ao solo", "pequeno fogo de artifício com movimento", "artefato pirotécnico rastejante e barulhento"],
    "buscar": ["procurar", "ir atrás de", "tentar encontrar", "pesquisar", "investigar", "averiguar", "rastrear", "perseguir", "ir buscar", "tentar achar"],
    "busílis": ["ponto crucial", "cerne da questão", "o nó da questão", "o problema central", "a dificuldade principal", "o ponto essencial", "o âmago do problema", "a parte mais difícil", "o centro da dificuldade", "o ponto nevrálgico"],
    "business": ["negócios", "comércio", "empresa", "atividade comercial", "empreendimento", "transações comerciais", "mundo dos negócios", "atividade econômica", "negociação", "comércio e indústria"],
    "bússola": ["instrumento de navegação que indica o norte magnético", "instrumento de orientação", "agulha magnética que aponta para o norte", "instrumento para determinar direções", "aparelho de navegação magnética", "instrumento para encontrar o norte", "instrumento de orientação magnética", "aparelho que indica os pontos cardeais", "instrumento usado em navegação e orientação", "instrumento com agulha magnetizada"],
    "busto": ["escultura da parte superior do corpo (cabeça, ombros e peito)", "parte superior do corpo humano (peito e seios)", "retrato escultórico da parte superior do corpo", "escultura da cabeça e tronco", "parte do corpo entre o pescoço e a cintura", "seios femininos", "parte frontal superior do tronco", "escultura da parte superior de uma figura", "parte do corpo acima da cintura", "escultura representando a cabeça e ombros"],
    "butique": ["loja de roupas de luxo", "loja de artigos de moda exclusivos", "loja de vestuário sofisticado", "loja de roupas elegantes", "estabelecimento comercial de moda", "loja de roupas de grife", "loja de roupas caras", "loja de vestuário de alta qualidade", "loja de roupas exclusivas", "estabelecimento de moda sofisticada"],
    "buxo": ["arbusto ornamental de folhas pequenas e perenes", "planta da família Buxaceae", "arbusto usado em jardinagem", "planta com folhas densas e verdes", "arbusto para cercas vivas", "planta ornamental resistente", "arbusto de crescimento lento", "planta usada em topiaria", "arbusto com folhas brilhantes", "planta para paisagismo"],
    "buzinar": ["emitir som de buzina", "acionar a buzina", "tocar a buzina", "fazer soar a buzina", "dar uma buzinada", "emitir um som agudo com a buzina", "usar a buzina de um veículo", "fazer barulho com a buzina", "emitir sinal sonoro com a buzina", "tocar a buzina de um carro"],
    "búzio": ["concha marinha espiralada", "concha grande do mar", "caramujo marinho grande", "concha usada para emitir som", "instrumento de sopro feito de concha", "concha ornamental", "molusco gastrópode marinho com concha espiralada", "concha usada em rituais (em algumas culturas)", "concha de caracol marinho grande", "instrumento musical de sopro feito de concha"],
    "caatinga": ["sertão", "agreste", "mata branca", "floresta seca", "estepes nordestinas", "vegetação xerófila", "bioma nordestino", "savana estépica", "mata seca tropical", "bosque seco"],
    "cabal": ["intriga", "conluio", "maquinação", "trama", "panelinha", "combinação secreta", "conspiração", "manobra", "artimanha", "segredo"],
    "cabaré": ["prostíbulo", "casa de prostituição", "puteiro", "zona", "bordel", "casa de tolerância", "inferninho", "antro", "lupanar", "casa noturna"],
    "cabeça": ["crânio", "mente", "juízo", "intelecto", "topo", "chefia", "direção", "líder", "cérebro", "parte superior"],
    "cabeçal": ["principal", "primário", "inicial", "fundamental", "mestre", "primeiro", "guia", "líder", "básico", "essencial"],
    "cabeçalho": ["título", "epígrafe", "manchete", "designação", "lema", "rubrica", "encimado", "parte superior da página", "título corrente", "assinatura"],
    "cabedal": ["patrimônio", "haveres", "bens", "fortuna", "capital", "riqueza", "tesouro", "fundos", "recursos", "montante"],
    "cabeleireira": ["penteadora", "visagista", "estilista capilar", "hairstylist", "profissional da beleza", "especialista em cabelos", "coiffeur", "barbeira (mulher)", "tricologista", "embelezadora"],
    "cabelo": ["fio capilar", "madeixa", "melena", "juba", "grela", "cabeleira", "pilosidade capilar", "fios", "cacho (de cabelo)", "trança"],
    "caber": ["pertencer", "encaixar", "ser adequado", "incumbir", "competir", "ser devido", "ajustar-se", "ser próprio", "ser da responsabilidade de", "ser pertinente"],
    "cabível": ["adequado", "pertinente", "justo", "razoável", "oportuno", "apropriado", "devido", "legítimo", "admissível", "plausível"],
    "cabo": ["extremidade", "ponta", "promontório", "alça", "corda", "fio", "manípulo", "comando", "soldado", "barra"],
    "caboclo": ["mestiço", "híbrido", "tapuia", "sertanejo", "caipira", "indígena aculturado", "descendente de índio", "habitante do interior", "rústico", "matuto"],
    "cabuloso": ["incrível", "espantoso", "assustador", "sinistro", "misterioso", "fantástico", "extraordinário", "sobrenatural", "estranho", "assombroso"],
    "caça ao tesouro": ["busca por riquezas escondidas", "procura por bens ocultos", "jogo de pistas", "aventura em busca de tesouro", "expedição por ouro", "procura por objetos valiosos", "atividade lúdica de busca", "competição por prêmios ocultos", "desafio de encontrar tesouro", "expediente para achar riquezas"],
    "caçar": ["perseguir", "acorrer", "capturar", "abater", "buscar", "rastrear", "perseverar", "procurar insistentemente", "correr atrás", "espreitar"],
    "cacasse": ["zombasse", "ridicularizasse", "escarnecesse", "mockasse", "satirizasse", "troçasse", "humilhasse com escárnio", "fizesse chacota", "desprezasse com risos", "burlasse"],
    "cachaceiro": ["alcoólatra", "ébrio", "beberrão", "pinga", "etílico", "alcoólico", "embriagado contumaz", "bebedor inveterado", "viciado em álcool", "bebum"],
    "cachaço": ["pescoço", "cogote", "nuca", "garrote", "colo", "cerviz", "pescoceira", "garganta", "região cervical", "parte posterior do pescoço"],
    "cacho": ["ramo", "penca", "molho", "feixe", "aglomeração", "grupo", "conjunto", "ramalhete", "racimo", "manojo"],
    "cachopa": ["moça", "rapariga", "donzela", "garota", "menina", "jovem", "adolescente", "mocinha", "senhorita", "garça"],
    "cachorro": ["cão", "canino", "pinscher", "vira-lata", "dog", "animal de estimação", "melhor amigo do homem", "au-au", "totó", "catioro"],
    "caco": ["fragmento", "pedaço", "estilhaço", "lasca", "resto", "quebranto", "cacos de vidro", "cacos de cerâmica", "parte quebrada", "resquício"],
    "caçoar": ["zombar", "ridicularizar", "escarnecer", "provocar", "satirizar", "troçar", "burlar", "fazer chacota", "gracejar", "mangar"],
    "caçoe": ["zombe", "ridicularize", "escarneça", "provoque", "satirize", "troce", "burle", "faça chacota", "graceje", "mangue"],
    "cacoete": ["tic nervoso", "mania", "esquisitice", "hábito peculiar", "trejeito", "automatismo", "vício de linguagem", "gesto repetitivo", "singularidade", "idiossincrasia"],
    "caçula": ["o mais novo", "último filho", "benjamim", "o menor", "novato", "o último a nascer", "filho mais jovem", "caçoila", "pequenino", "infante"],
    "cada": ["qualquer", "um por um", "individualmente", "respectivamente", "todo", "cada qual", "a cada", "por unidade", "em cada", "separadamente"],
    "cada vez mais": ["progressivamente", "crescentemente", "paulatinamente", "sempre mais", "em aumento constante", "de forma crescente", "com maior intensidade", "aumentando gradativamente", "em escala crescente", "de maneira contínua"],
    "cadafalso": ["patíbulo", "forca", "local de execução", "tablado da morte", "instrumento de pena capital", "estrutura para enforcamento", "lugar de suplício", "tribunal da morte", "plataforma de execução", "cadafalque"],
    "cadáver": ["corpo morto", "defunto", "morto", "finado", "extinto", "despojo", "corpo inerte", "alma penada", "resto mortal", "carcaça"],
    "cadeia": ["prisão", "cárcere", "ergástulo", "grade", "elo", "sequência", "série", "encadeamento", "corrente", "liame"],
    "cadeira": ["assento", "banco", "poltrona", "sofá", "butaca", "cargo", "função", "cátedra", "lugar", "posição"],
    "cadência": ["ritmo", "compasso", "melodia", "harmonia", "sequência", "andamento", "pulsação", "regularidade", "fluxo", "sucessão"],
    "cafajeste": ["canalha", "malandro", "mau-caráter", "vilão", "patife", "salafrário", "espertalhão", "trapaceiro", "indigno", "desonesto"],
    "café": ["bebida", "pretinho", "expresso", "carioca", "pingado", "cafezinho", "aroma", "grão", "planta", "pó"],
    "cafetão": ["proxeneta", "alcoviteiro", "chulo", "gigolô", "rufião", "explorador de prostituição", "olheiro", "pimp", "agenciador de prostitutas", "don juan (pejorativo)"],
    "cafofo": ["esconderijo", "antro", "tugúrio", "barraco", "recanto", "abrigo", "refúgio", "lugar secreto", "covil", "ninho"],
    "cafona": ["brega", "kitsch", "fora de moda", "vulgar", "extravagante", "de mau gosto", "deselegante", "ultrapassado", "horrível", "ridículo"],
    "cafuçu": ["grosseiro", "rude", "inculto", "boçal", "tosco", "ignorante", "chulo", "mal-educado", "bronco", "selvagem"],
    "cafundo-do-judas": ["lugar remoto", "fim do mundo", "onde judas perdeu as botas", "lugar inacessível", "lugar ermo", "confins", "interior distante", "rincão", "sítio isolado", "buraco perdido"],
    "caipira": ["sertanejo", "matuto", "roceiro", "jeca", "caboclo", "campesino", "lavrador", "rústico", "do interior", "agreste"],
    "cair": ["desabar", "tombar", "despencar", "sucumbir", "declinar", "desmoronar", "deslizar", "escorregar", "baixar", "diminuir"],
    "cairel": ["franja", "barra", "orla", "penduricalho", "guarnição", "rebordo", "bainha", "adorno pendente", "franjado", "debrum"],
    "cais": ["porto", "atracadouro", "embarcadouro", "molhe", "dique", "ancoradouro", "plataforma de embarque", "terminal portuário", "rampa de acesso", "estrutura portuária"],
    "caixa": ["cofre", "arca", "embalagem", "recipiente", "tesouraria", "fundo", "reservatório", "estojo", "urna", "gaveta"],
    "calamidade": ["desastre", "catástrofe", "tragédia", "flagelo", "desgraça", "infortúnio", "adversidade", "fatalidade", "sinistro", "ocorrência funesta"],
    "calão": ["gíria", "jargão", "linguajar popular", "argot", "fala informal", "vocabulário específico", "expressões idiomáticas", "linguagem de grupo", "socioleto", "dialeto social"],
    "calças": ["pantalonas", "jeans", "bermudas", "ceroulas", "calções", "leggings", "saruel", "skinny", "flare", "cargo"],
    "calcularmos": ["computarmos", "estimarmos", "avaliarmos", "mensurarmos", "contarmos", "determinarmos", "inferirmos", "deduzirmos", "quantificarmos", "orçarmos"],
    "calculista": ["interesseiro", "oportunista", "frio", "estratégico", "ambicioso", "maquiavélico", "manipulador", "astuto", "esperto", "sagaz"],
    "calda": ["molho doce", "xarope", "melado", "doce líquido", "cobertura", "glacê", "liga", "suco concentrado", "néctar", "xarope grosso"],
    "cálido": ["quente", "tépido", "afetuoso", "cordial", "ameno", "morno", "agradável", "caloroso", "apaixonado", "fervoroso"],
    "calma": ["tranquilidade", "paz", "serenidade", "mansidão", "quietude", "sossego", "repouso", "bonança", "fleuma", "paciência"],
    "calmante": ["sedativo", "tranquilizante", "ansiolítico", "lenitivo", "narcótico", "entorpecente", "suavizante", "apaciguador", "sedador", "ataráxico"],
    "calmaria": ["bonança", "mansidão do mar", "paz", "tranquilidade", "sossego", "quietude", "repouso", "ausência de vento", "maré baixa", "tempo sereno"],
    "calmo": ["tranquilo", "sereno", "pacífico", "manso", "sossegado", "quieto", "plácido", "imperturbável", "fleumático", "paciente"],
    "calor": ["quente", "temperatura elevada", "estio", "canicula", "ardor", "quentura", "fogaréu", "estufa", "mormaço", "afeição"],
    "calota": ["tampa", "cobertura", "revestimento", "proteção", "capa", "invólucro", "casca", "coroa", "parte superior", "hemisfério"],
    "calúnia": ["difamação", "injúria", "detração", "falsidade", "mentira", "imputação falsa", "acusação infundada", "maledicência", "boato malicioso", "difamação"],
    "cama": ["leito", "dormitório", "alcova", "jacuzzi (gíria)", "túmulo (figurado)", "estrado", "colchão", "travesseiro", "lençol", "cobertor"],
    "camada": ["estrato", "nível", "plano", "superfície", "folha", "manto", "coberta", "teto", "pavimento", "camada social"],
    "camarada": ["companheiro", "amigo", "colega", "parceiro", "consorte", "sócio", "aliado", "irmão", "compatriota", "camarada de armas"],
    "cambaio": ["torto", "vesgo", "bizco", "estrábico", "zarolho", "vesguinho", "com estrabismo", "olhar desviado", "olhos desalinhados", "tortuoso"],
    "cambaleante": ["trôpego", "vacilante", "titubeante", "bêbado", "instável", "oscilante", "bamboleante", "hesitante", "trêmulo", "desequilibrado"],
    "cambito": ["perna fina", "canela fina", "vara", "perna de saracura", "perna de grilo", "haste fina", "membro delgado", "suporte fino", "estaca fina", "palito"],
    "câmera": ["máquina fotográfica", "filmadora", "aparelho de filmar", "cinegrafista", "objetiva", "lente", "foco", "obturador", "flash", "tripé"],
    "caminheiros": ["andantes", "viandantes", "transeuntes", "peregrinos", "viajantes a pé", "marchadores", "excursionistas", "andarilhos", "passeantes", "turistas a pé"],
    "caminho": ["via", "estrada", "rota", "direção", "rumo", "senda", "trilha", "vereda", "carreiro", "itinerário"],
    "camiseta": ["t-shirt", "blusa", "camisa de malha", "polo", "regata", "baby look", "manga curta", "manga longa", "gola redonda", "gola V"],
    "campanha": ["ação", "movimento", "empreitada", "promoção", "divulgação", "mobilização", "investida", "ofensiva", "série de ações", "esforço coordenado"],
    "campo": ["terra", "planície", "prado", "roça", "lavoura", "gramado", "relvado", "descampado", "zona rural", "território"],
    "campo aberto": ["descampado", "vazio", "extensão plana", "planície vasta", "área desimpedida", "espaço livre", "terreno sem obstáculos", "horizonte livre", "vazio campestre", "planura"],
    "canalha": ["vilão", "malvado", "indigno", "abjeto", "infame", "perverso", "mau-caráter", "scelerado", "desprezível", "ignóbil"],
    "canalhice": ["maldade", "vilania", "indignidade", "abjeção", "infâmia", "perversidade", "mau-caratismo", "sceleração", "desprezo moral", "ignobilidade"],
    "canalizar": ["direcionar", "encaminhar", "orientar", "conduzir", "escoar", "verter", "encaminhar", "guiar", "orientar", "focalizar"],
    "canapé": ["apéritif", "salgadinho", "acepipe", "petisco", "entrada", "finger food", "quitute", "acepipe", "vol-au-vent", "torrada"],
    "cancelamento": ["anulação", "rescisão", "revogação", "supressão", "eliminação", "interrupção", "invalidação", "abolição", "cessação", "anulamento"],
    "cancelar": ["anular", "rescindir", "revogar", "eliminar", "interromper", "invalidar", "abolir", "cessar", "suprimir", "desfazer"],
    "candeeiro": ["lampião", "lustre", "luminária", "abajur", "arandela", "holofote", "refletor", "lamparina", "tocha", "farol"],
    "candeia": ["lâmpada", "lanterna", "farol", "tocha", "lamparina", "círio", "vela", "archote", "isqueiro", "fogo"],
    "cândido": ["ingênuo", "inocente", "puro", "simples", "sincero", "franco", "honesto", "leal", "candoroso", "alvo"],
    "candonga": ["intriga", "mexerico", "fofoca", "conchavo", "tramóia", "bisbilhotice", "leva e traz", "diz que diz", "enredo", "maquinação"],
    "candura": ["pureza", "inocência", "simplicidade", "singeleza", "candidez", "alvura", "brancura", "lisura", "ingenuidade", "sinceridade"],
    "caniço": ["junco", "tabua", "vara", "haste", "bambu pequeno", "cana delgada", "ripa", "estaca", "varinha", "juncal"],
    "canjica": ["mingau de milho", "curau (similar)", "papa de milho", "milho cozido", "sobremesa de milho", "doce de milho", "hominy (similar)", "grãos de milho cozidos", "iguaria de milho", "manjar de milho"],
    "cânon": ["regra", "norma", "preceito", "lei", "modelo", "padrão", "princípio", "dogma", "mandamento", "estatuto"],
    "cânone": ["padrão", "modelo", "norma", "regra", "lista", "catálogo", "repertório", "modelo clássico", "obra fundamental", "texto autorizado"],
    "canônico": ["legítimo", "autorizado", "oficial", "regular", "clássico", "ortodoxo", "aprovado", "estabelecido", "normativo", "prescrito"],
    "cansaço": ["fadiga", "exaustão", "moleza", "lassidão", "prostração", "esgotamento", "desânimo", "adinamia", "extenuação", "quebranto"],
    "canalizar": ["direcionar", "encaminhar", "orientar", "conduzir", "escoar"],
    "canapé": ["apéritif", "salgadinho", "acepipe", "petisco"],
    "cancelamento": ["anulação", "rescisão", "revogação", "supressão"],
    "cancelar": ["anular", "rescindir", "revogar", "eliminar", "interromper"],
    "candeeiro": ["lampião", "lustre", "luminária", "abajur"],
    "candeia": ["lâmpada", "lanterna", "farol", "tocha"],
    "cândido": ["ingênuo", "inocente", "puro", "simples", "sincero"],
    "candonga": ["intriga", "mexerico", "fofoca", "conchavo", "tramóia"],
    "candura": ["pureza", "inocência", "simplicidade", "singeleza"],
    "caniço": ["junco", "tabua", "vara", "haste"],
    "canjica": ["mingau de milho", "curau (similar)"],
    "cânon": ["regra", "norma", "preceito", "lei", "modelo"],
    "cânone": ["padrão", "modelo", "norma", "regra", "lista"],
    "canônico": ["legítimo", "autorizado", "oficial", "regular", "clássico"],
    "cansaço": ["fadiga", "exaustão", "moleza", "lassidão", "prostração"],
    "cansado": ["fatigado", "exausto", "esgotado", "moído", "exausto", "abatido", "desanimado", "extenuado", "prostrado", "derrotado"],
    "canso": ["fadiga", "moleza", "lassidão", "prostração", "esgotamento", "desânimo", "abatimento", "extenuação", "adinamia", "exausto"],
    "cantado": ["entoado", "declamado", "proclamado", "louvado", "recitado", "salmodiado", "vocalizado", "harmonizado", "melodiado", "solfejado"],
    "cantar": ["entoar", "vocalizar", "moduler", "celebrar", "proclamar", "recitar", "salmodiar", "harmonizar", "melodiar", "solfejar"],
    "cante": ["canteiro", "bordadura", "jardim", "área cultivada", "leito de plantio", "tala", "testa", "face", "lado", "margem"],
    "cantiga": ["canção", "música", "modinha", "toada", "melodia", "hino", "ária", "trova", "soneto", "poesia musicada"],
    "canto": ["melodia", "canção", "ângulo", "esquina", "recanto", "lado", "bico (de ave)", "voz", "gorjeio", "canto gregoriano"],
    "cantor": ["vocalista", "intérprete", "menestrel", "bardo", "crooner", "tenor", "soprano", "baixo", "contralto", "barítono"],
    "cantora": ["vocalista", "intérprete", "diva", "estrela musical", "soprano", "contralto", "mezzo-soprano", "lírica", "popular", "coralista"],
    "caos": ["desordem", "confusão", "anarquia", "tumulto", "bagunça", "desorganização", "pandemônio", "algaravia", "barafunda", "embravecimento"],
    "caótico": ["desordenado", "confuso", "anárquico", "tumultuado", "desorganizado", "pandemônico", "barafunda", "embrevecido", "instável", "desarranjado"],
    "capacidade": ["aptidão", "habilidade", "competência", "poder", "potencial", "talento", "destreza", "idoneidade", "eficácia", "envergadura"],
    "capacitação": ["qualificação", "treinamento", "formação", "desenvolvimento", "aperfeiçoamento", "instrução", "preparação", "habilitação", "educação", " reciclagem"],
    "capataz": ["feitor", "encarregado", "supervisor", "gerente", "administrador", "chefe de turma", "líder", "fiscal", "mordomo", "contramestre"],
    "capaz": ["apto", "hábil", "competente", "idôneo", "eficiente", "talentoso", "destro", "qualificado", "aparelhado", "suficiente"],
    "capaz de": ["apto a", "com capacidade para", "hábil em", "competente para", "em condições de", "aparelhado para", "qualificado para", "com poder para", "com recursos para", "com meios para"],
    "capazes": ["aptos", "hábeis", "competentes", "idôneos", "eficientes", "talentosos", "destros", "qualificados", "aparelhados", "suficientes"],
    "capcioso": ["enganoso", "ardiloso", "astuto", "malicioso", "trapaceiro", "insidioso", "doloso", "sofismático", "falacioso", "fraudulento"],
    "capeta": ["diabo", "demônio", "satanás", "belzebu", "capiroto", "lúcifer", "maligno", "tinhoso", "exu (em algumas culturas)", "coisa ruim"],
    "capim": ["erva", "grama", "pasto", "forragem", "relva", "mato", "vegetação rasteira", "planta herbácea", "erva daninha", "gramínea"],
    "capitação": ["imposto per capita", "taxa por cabeça", "cobrança individual", "tributação por indivíduo", "arrecadação por pessoa"],
    "capital": ["dinheiro", "riqueza", "patrimônio", "sede", "metrópole", "fundos", "bens", "ativos", "fortuna", "principal"],
    "capitalismo": ["sistema econômico liberal", "economia de mercado", "livre iniciativa", "propriedade privada", "lucro", "acumulação de capital", "concorrência", "mercantilismo", "financeirização", "globalização"],
    "capitão": ["comandante", "chefe", "líder", "oficial", "patrão", "timoneiro", "guia", "cabeça", "mentor", "autoridade"],
    "capitólio": ["sede do legislativo", "colina sagrada", "parlamento", "congresso", "assembleia", "senado", "câmara dos deputados", "paço municipal", "prefeitura", "governo"],
    "capitulação": ["rendição", "submissão", "entrega", "acordo", "tratado", "pacto", "cessão", "concessão", "derrota", "ultimato"],
    "capítulo": ["seção", "parte", "tópico", "item", "divisão", "segmento", "trecho", "fragmento", "episódio", "fase"],
    "capoeira": ["luta afro-brasileira", "arte marcial", "dança", "jogo", "expressão cultural", "roda de capoeira", "ginga", "berimbau", "mestre de capoeira", "angola"],
    "capricho": ["manha", "teimosia", "birra", "esmero", "cuidado", "zelo", "primor", "detalhe", "fantasia", "vontade repentina"],
    "caprichoso": ["manhoso", "teimoso", "birrento", "exigente", "detalhista", "meticuloso", "volúvel", "fantasioso", "arbitrário", "extravagante"],
    "captação": ["atração", "obtenção", "recolhimento", "aquisição", "arrecadação", "coleta", "angariação", "conquista", "sedimento", "absorção"],
    "captado": ["obtido", "conseguido", "recolhido", "adquirido", "arrecadado", "coletado", "angariado", "conquistado", "percebido", "compreendido"],
    "captar": ["obter", "conseguir", "recolher", "adquirir", "atrair", "arrecadar", "coletar", "angariar", "perceber", "compreender"],
    "capturado": ["preso", "detido", "aprisionado", "apanhado", "dominado", "sequestrado", "acorrentado", "enjaulado", "imobilizado", "confinado"],
    "caquético": ["magro", "emaciado", "esquelético", "desnutrido", "franzino", "mirrado", "macilento", "esquelético", "cadavérico", "debilitado"],
    "cara": ["rosto", "face", "semblante", "indivíduo", "sujeito", "pessoa", "aspecto", "fachada", "aparência", "expressão"],
    "cara de pau": ["descarado", "cínico", "insolente", "sem-vergonha", "abusado", "atrevido", "petulante", "audacioso", "impudente", "desavergonhado"],
    "caractere": ["letra", "sinal", "grafema", "índole", "temperamento", "traço", "marca", "distintivo", "peculiaridade", "individualidade"],
    "caracteres": ["letras", "sinais", "grafemas", "símbolos", "algarismos", "marcas", "traços", "indícios", "elementos", "aspectos"],
    "característica": ["atributo", "peculiaridade", "traço", "propriedade", "qualidade", "distintivo", "particularidade", "singularidade", "nota", "especificidade"],
    "características": ["atributos", "peculiaridades", "traços", "propriedades", "qualidades", "distintivos", "particularidades", "singularidades", "notas", "especificidades"],
    "caracterização": ["descrição", "definição", "representação", "interpretação", "retrato", "perfil", "esboço", "delineamento", "figuração", "tipificação"],
    "caracterizar": ["descrever", "definir", "qualificar", "retratar", "distinguir", "marcar", "singularizar", "tipificar", "especificar", "denotar"],
    "caramba": ["nossa", "uau", "puxa", "meu Deus", "caraca", "eita", "opa", "xi", "vixe", "cruzes"],
    "caráter": ["índole", "natureza", "temperamento", "moral", "ética", "personalidade", "feitura", "marca", "cunho", "distintivo"],
    "cárcere": ["prisão", "cadeia", "ergástulo", "masmorra", "xilindró", "detenção", "reclusão", "confinamento", "encarceramento", "segregação"],
    "cardeal": ["eclesiástico", "membro do clero", "alto dignatário da igreja", "purpurado", "eminência"],
    "carecer": ["precisar", "necessitar", "faltar", "ter carência", "desejar", "querer", "demandar", "reclamar", "sentir falta", "estar desprovido"],
    "carência": ["falta", "necessidade", "privação", "ausência", "escassez", "deficiência", "vazio", "lacuna", "penúria", "indigência"],
    "carente": ["necessitado", "precisado", "desprovido", "falto", "indigente", "pobre", "miserável", "desamparado", "órfão", "desassistido"],
    "carestia": ["inflação", "aumento de preços", "encarecimento", "alta de preços", "oneração", "elevação de custos", "custo de vida elevado", "dificuldade econômica", "aperto financeiro", "escassez de recursos"],
    "careza": ["alto preço", "custo elevado", "carestia", "valor excessivo", "preço exorbitante", "onerosidade", "dispêndio elevado", "gasto excessivo", "monta elevada", "preço salgado"],
    "cargo": ["função", "posto", "emprego", "ofício", "posição", "ocupação", "atividade", "trabalho", "designação", "missão"],
    "caricato": ["cômico", "ridículo", "grotesco", "extravagante", "burlesco", "bufão", "palhaço", "deformado", "exagerado", "paródico"],
    "caricaturesco": ["cômico", "exagerado", "grotesco", "satírico", "burlesco", "paródico", "deformado", "ridículo", "extravagante", "chistoso"],
    "carícia": ["afago", "mimo", "ternura", "aconchego", "toque suave", "aceno", "desvelo", "atenção", "meiguice", "doçura"],
    "caridade": ["benevolência", "generosidade", "filantropia", "esmola", "ajuda", "auxílio", "assistência", "benemerência", "doação", "solidariedade"],
    "carinho": ["afeição", "ternura", "amor", "cuidado", "atenção", "zelo", "dedicação", "afeto", "meiguice", "doçura"],
    "carioca": ["natural do Rio de Janeiro", "habitante do Rio", "fluminense", "gentílico do Rio", "relativo ao Rio de Janeiro"],
    "carisma": ["magnetismo", "atrativo", "encanto", "fascínio", "simpatia", "aura", "poder de atração", "influência", "magnetismo pessoal", "dons especiais"],
    "carismático": ["atraente", "encantador", "fascinante", "magnético", "simpático", "influente", "sedutor", "cativante", "radiante", "afável"],
    "carma": ["destino", "sorte", "consequência", "retribuição", "lei de causa e efeito", "fado", "fatalidade", "predestinação", "karma", "ação e reação"],
    "carnaval": ["festa popular", "folia", "entroido", "festa pagã", "período festivo", "desfile de escolas de samba", "baile de carnaval", "máscaras", "confetes e serpentinas", "alegria"],
    "carnavalesco": ["relativo ao carnaval", "festivo", "folião", "alegre", "extravagante", "colorido", "barulhento", "típico do carnaval", "carnavalesca", "carnavalescos"],
    "carnificina": ["matança", "massacre", "chacina", "extermínio", "holocausto", "genocídio", "banho de sangue", "hecatombe", "assassinato em massa", "mortandade"],
    "caro": ["custoso", "dispendioso", "oneroso", "precioso", "afetivo", "estimado", "querido", "valioso", "de alto preço", "salgado"],
    "carona": ["boleia", "acompanhamento", "transporte gratuito", "favor", "ajuda", "empréstimo de veículo", "viagem de favor", "acompanhamento em veículo", "condução", "leva e traz"],
    "carrasco": ["executor", "algoz", "verdugo", "matador", "justiceiro (pejorativo)", "instrumento de tortura", "opressor", "tirano", "mandante de execuções", "carrasca"],
    "carreador": ["trabalhador braçal", "estivador", "ajudante", "porteador", "moço de frete", "transportador", "carregador", "servente de carga", "auxiliar de transporte", "arrieiro"],
    "carregar": ["levar", "transportar", "portar", "abastecer", "encher", "onerar", "imputar", "atribuir", "gravar", "acumular"],
    "carrego": ["carga", "peso", "fardo", "transporte", "frete", "envio", "remessa", "volume", "pacote", "encomenda"],
    "carretagem": ["transporte", "frete", "carreto", "envio", "remessa", "movimentação de carga", "translação", "condução", "traslado", "acarretamento"],
    "carro": ["automóvel", "veículo", "automotor", "viatura", "coche", "automóvel", "máquina", "bólido", "possante", "nave"],
    "carta": ["epístola", "correspondência", "mensagem escrita", "baralho", "mapa", "planta", "documento", "diploma", "autorização", "licença"],
    "carteira": ["bolsa", "porta-dinheiro", "documentário", "pasta", "portfólio", "estojo", "cofre pequeno", "bolso interno", "sacola pequena", "maleta pequena"],
    "cartel": ["acordo de preços", "oligopólio", "associação", "conluio", "trust", "pool", "consórcio", "combinação", "monopólio", "grupo econômico"],
    "cartilha": ["livro didático", "manual", "guia", "alfabetário", "compêndio", "manual de instrução", "catecismo", "primeiro livro", "livro de iniciação", "texto básico"],
    "cartório": ["tabelionato", "ofício de notas", "escrivania", "registro civil", "registro de imóveis", "tabelião", "escrivão", "serventia extrajudicial", "arquivo público"],
    "casa": ["lar", "moradia", "residência", "habitação", "domicílio", "edifício", "construção", "imóvel", "abrigo", "teto"],
    "casal": ["par", "dupla", "esposos", "namorados", "cônjuges", "companheiros", "amantes", "noivos", "marido e mulher", "parceiros"],
    "casamento": ["matrimônio", "núpcias", "união", "enlace", "boda", "aliança", "concórdia", "harmonia", "conjunção", "rito matrimonial"],
    "casar": ["contrair matrimônio", "unir-se", "emparelhar", "combinar", "harmonizar", "juntar", "acoplar", "consorciar", "maridar", "conjungir"],
    "casarão": ["solar", "palacete", "mansão", "edifício antigo", "sobrado grande", "casa nobre", "residência imponente", "moradia antiga", "prédio histórico", "paço"],
    "casebre": ["choça", "barraco", "cabana", "moradia humilde", "rancho", "palhoça", "tugúrio", "morada pobre", "habitação precária", "barracão"],
    "caserna": ["quartel", "aquartelamento", "base militar", "edifício militar", "alojamento militar", "forte", "acampamento militar", "praça d'armas", "batalhão", "guarnição"],
    "casinha": ["pequena casa", "chalé", "moradia modesta", "bangalô", "edícula", "residência pequena", "larzinho", "abrigo simples", "morada singela", "cabana pequena"],
    "casmurro": ["taciturno", "introvertido", "melancólico", "reservado", "sisudo", "sério", "fechado", "omisso", "calado", "aborrecido"],
    "caso": ["ocorrência", "acontecimento", "situação", "assunto", "enredo", "história", "fato", "evento", "problema", "questão"],
    "cassar": ["anular", "revogar", "invalidar", "abolir", "destituir", "rescindir", "cancelar", "eliminar", "suprimir", "infirmar"],
    "casta": ["classe social", "estrato", "grupo", "linhagem", "raça", "categoria", "divisão social", "seita", "qualidade", "tipo"],
    "castigar": ["punir", "penalizar", "repreender", "sancionar", "disciplinar", "afligir", "mortificar", "corrigir", "admoestar", "vingar"],
    "casto": ["puro", "virginal", "íntegro", "honesto", "decente", "recatado", "imaculado", "inocente", "virtuoso", "abstinente"],
    "castrar": ["esterilizar", "capar", "emascular", "mutilar", "privar da virilidade"],
    "casual": ["ocasional", "fortuito", "inesperado", "acidental", "eventual", "informal", "despretensioso", "descontraído", "superficial", "vago"],
    "casualidade": ["acaso", "fortuidade", "imprevisto", "contingência", "evento inesperado", "ocorrência fortuita", "azar", "sorte", "incidente", "coincidência"],
    "casualmente": ["acidentalmente", "fortuitamente", "inesperadamente", "ocasionalmente", "de repente", "sem querer", "de passagem", "informalmente", "despretensiosamente", "ao acaso"],
    "casulo": ["crisálida", "pupa", "invólucro", "envoltório", "proteção", "abrigo"],
    "cata": ["busca", "procura", "garimpo", "seleção", "escolha", "apanha", "colheita"],
    "cataclismo": ["dilúvio", "inundação", "terremoto", "desastre natural", "tragédia", "destruição em massa", "convulsão"],
    "catalisador": ["acelerador", "ativador", "impulsor", "estimulante", "elemento que promove reação"],
    "catalisar": ["acelerar", "ativar", "impulsionar", "estimular", "promover reação"],
    "catalogação": ["registro", "inventário", "listagem", "classificação", "organização", "indexação"],
    "catálogo": ["lista", "relação", "inventário", "índice", "repertório", "guia", "manual", "mostruário", "prospecto", "publicação"],
    "catártico": ["purificador", "libertador", "expiatório", "emocionalmente libertador", "que promove catarse"],
    "catástrofe": ["tragédia", "desastre", "calamidade", "sinistro", "ocorrência funesta", "revés", "ruína", "destruição", "flagelo", "acontecimento grave"],
    "catavento": ["biruta", "cata-vento", "anemoscópio", "instrumento de medir o vento"],
    "cátedra": ["cadeira universitária", "cargo de professor titular", "magistério", "autoridade", "eminência"],
    "catedrático": ["professor titular", "docente universitário de alto nível", "mestre", "autoridade no assunto"],
    "categoria": ["classe", "tipo", "espécie", "gênero", "nível", "divisão", "grupo", "qualidade", "posição", "estágio"],
    "categoricamente": ["decisivamente", "enfaticamente", "taxativamente", "explicitamente", "sem rodeios", "de forma inequívoca", "com certeza", "absolutamente", "terminantemente", "definitivamente"],
    "categórico": ["decisivo", "enfático", "taxativo", "explícito", "inequívoco", "absoluto", "terminante", "definitivo", "positivo", "afirmativo"],
    "caterva": ["multidão", "ajuntamento", "horda", "bando", "turba", "corja", "legião", "grupo numeroso e desordenado"],
    "catexe": ["instrução religiosa", "doutrinação", "ensino da fé"],
    "catinga": ["mau cheiro", "fedor", "fétido", "odor desagradável", "cheiro forte", "sertão", "vegetação seca"],
    "cativante": ["encantador", "fascinante", "atraente", "sedutor", "interessante", "agradável", "simpático", "arrebatador", "envolvente", "magnético"],
    "cativar": ["encantar", "fascinar", "atrair", "seduzir", "conquistar", "agradar", "prender a atenção", "envolver", "submeter", "escravizar"],
    "cativeiro": ["prisão", "encarceramento", "servidão", "escravidão", "opressão", "jugo", "sujeição", "cárcere", "masmorra", "claustro"],
    "cativo": ["prisioneiro", "preso", "escravo", "subjugado", "dependente", "sujeito", "aprisionado", "encarcerado", "dominado", "vinculado"],
    "cato": ["arbusto espinhoso", "planta xerófita", "mandacaru", "cacto"],
    "católicos": ["cristãos católicos", "seguidores do catolicismo romano"],
    "catraca": ["torniquete", "mecanismo de contagem", "porta giratória"],
    "catre": ["cama simples", "leito modesto", "cama de campanha", "truchão"],
    "caução": ["fiança", "garantia", "depósito", "segurança", "penhor", "aval", "abono"],
    "cauda": ["rabo", "parte posterior", "extremidade", "rastro", "sequela", "consequência"],
    "caudaloso": ["abundante em água", "volumoso", "copioso", "torrencial", "cheio", "ondeante"],
    "causa": ["motivo", "razão", "origem", "justificativa", "fundamento", "porquê", "detonador", "antecedente", "ação judicial", "lide"],
    "causada": ["motivada", "originada", "provocada", "gerada", "desencadeada", "produzida", "ocasionada", "suscitada"],
    "causando": ["motivando", "originando", "provocando", "gerando", "desencadeando", "produzindo", "ocasionando", "suscitando"],
    "causar": ["motivar", "originar", "provocar", "gerar", "desencadear", "produzir", "ocasionar", "suscitar", "determinar", "despertar"],
    "causem": ["motivarem", "originarem", "provocarem", "gerarem", "desencadearem", "produzirem", "ocasionarem", "suscitarem"],
    "causídico": ["advogado", "jurista", "leguleio", "defensor", "patrono"],
    "cáustico": ["corrosivo", "ácido", "mordaz", "sarcastico", "irônico", "agressivo", "pungente", "queimante", "lesivo", "destrutivo"],
    "cautela": ["precaução", "prudência", "atenção", "cuidado", "circunspeção", "discrição", "reserva", "acautelamento", "ponderação", "vigilância"],
    "cauteloso": ["precavido", "prudente", "atento", "cuidadoso", "circunspecto", "discreto", "reservado", "vigilante", "ponderado", "avisado"],
    "cavaleiro": ["ginete", "amazona (mulher)", "nobre", "fidalgo", "gentil-homem", "homem cortês", "membro de ordem militar"],
    "cavalheiro": ["homem cortês", "gentil", "educado", "atencioso", "galante", "fidalgo", "nobre"],
    "cavalo": ["equino", "égua (fêmea)", "poldro (filhote)", "corcel", "ginete (para montaria)"],
    "caxias": ["rigoroso", "estrito", "disciplinador", "exigente", "formalista", "meticuloso", "pedante", "rígido", "severo", "inflexível"],
    "cear": ["jantar", "comer à noite", "fazer a última refeição do dia"],
    "cedendo": ["entregando", "concedendo", "transferindo", "rendendo-se", "afrouxando", "diminuindo", "baixando", "inclinando", "vergando", "permitindo"],
    "ceder": ["entregar", "conceder", "transferir", "render-se", "afrouxar", "diminuir", "baixar", "inclinar", "vergar", "permitir"],
    "cediço": ["ruinoso", "deteriorado", "desgastado", "velho", "em ruínas", "prestes a cair", "instável", "fraco", "decrépito"],
    "cedido": ["entregue", "concedido", "transferido", "emprestado", "doado", "outorgado", "fornecido", "atribuído", "designado", "delegado"],
    "cedo": ["antes do tempo", "antecipadamente", "prematuramente", "no início", "logo", "de manhã", "em breve", "adiantado", "tempestivamente"],
    "cédula": ["nota", "papel-moeda", "vale", "título", "comprovante", "bilhete", "voto", "documento"],
    "cego": ["invidente", "amaurotico", "que não vê", "obscuro", "ignorante", "inconsciente", "desatento", "vendado", "cego de paixão"],
    "ceifador": ["segador", "aquele que ceifa", "a morte (personificação)"],
    "ceifar": ["segar", "cortar", "roçar", "colher", "destruir", "eliminar", "extinguir", "aniquilar", "abater", "findar"],
    "ceifeiro": ["segador", "trabalhador que ceifa"],
    "cela": ["cubículo", "aposento pequeno", "quarto", "prisão", "compartimento"],
    "celebrar": ["festejar", "comemorar", "louvar", "glorificar", "exaltar", "realizar", "oficiar", "solemnizar", "promulgar", "notabilizar"],
    "célebre": ["famoso", "notório", "ilustre", "renomado", "insigne", "afamado", "eminente", "conhecido", "popular", "marcante"],
    "celeiro": ["paiol", "depósito de grãos", "armazém", "abundância", "reservatório"],
    "célere": ["rápido", "veloz", "ligeiro", "ágil", "apressado", "expedito", "diligente", "imediato", "instantâneo", "fugaz"],
    "celeridade": ["rapidez", "velocidade", "agilidade", "ligeireza", "presteza", "prontidão", "vivacidade", "expedição", "diligência", "pressa"],
    "celeste": ["celestial", "divino", "etéreo", "sublime", "paradíaco", "astral", "do céu", "superior", "glorioso", "maravilhoso"],
    "celestial": ["celeste", "divino", "etéreo", "sublime", "paradíaco", "astral", "do céu", "superior", "glorioso", "maravilhoso"],
    "celeuma": ["clamor", "alvoroço", "tumulto", "gritaria", "confusão", "polêmica", "discussão acalorada", "protesto", "manifestação"],
    "celibatário": ["solteiro", "não casado", "que pratica o celibato"],
    "celibato": ["estado de solteiro", "abstinência sexual por convicção religiosa"],
    "célula": ["unidade básica da vida", "pequeno compartimento", "prisão individual", "elemento fundamental"],
    "cem": ["centena", "cento"],
    "cena": ["quadro", "passagem", "ato", "espetáculo", "acontecimento", "local", "palco", "situação", "visão"],
    "cenário": ["paisagem", "panorama", "vista", "ambiente", "contexto", "fundo", "decoração", "plano de fundo", "conjunto visual"],
    "cenho": ["franzir a testa", "expressão de descontentamento", "semblante carregado", "ruga na testa"],
    "cenóbio": ["mosteiro", "convento", "abadia", "comunidade religiosa"],
    "censitário": ["relativo a censo", "estatístico", "demográfico"],
    "censo": ["recenseamento", "levantamento estatístico", "inventário", "contagem da população"],
    "censura": ["reprovação", "crítica", "condenação", "veto", "proibição", "restrição", "inibição", "repressão", "fiscalização"],
    "censurar": ["reprovar", "criticar", "condenar", "vetar", "proibir", "restringir", "inibibir", "reprimir", "fiscalizar", "glosar"],
    "centelha": ["faísca", "chispa", "fragmento incandescente", "indício", "sinal", "princípio"],
    "centrado": ["focado", "concentrado", "equilibrado", "estável", "fixo", "centralizado", "reunido", "converge"],
    "central": ["principal", "fundamental", "básico", "mediador", "intermediário", "nuclear", "dominante", "essencial", "primário", "focal"],
    "cêntrico": ["central", "localizado no centro"],
    "centro": ["meio", "núcleo", "foco", "sede", "polo", "miolo", "interior", "cerne", "ponto principal", "local de convergência"],
    "cepa": ["tronco", "raiz", "origem", "linhagem", "família", "variedade"],
    "céptico": ["cético", "incrédulo", "desconfiado", "duvidoso", "reservado", "questionador", "pessimista", "irônico"],
    "cerca": ["muro", "grade", "tapume", "vedação", "limite", "barreira", "obstáculo", "ao redor de", "aproximadamente"],
    "cerceamento": ["restrição", "limitação", "privação", "impedimento", "obstáculo", "contenção", "opressão", "diminuição", "redução"],
    "cercear": ["restringir", "limitar", "privar", "impedir", "obstar", "conter", "diminuir", "reduzir", "cortar", "tolher"],
    "cerimônia": ["rito", "solenidade", "formalidade", "ato", "festa", "celebração", "protocolo", "rito solene", "cerimonial", "pompa"],
    "cerne": ["miolo", "íntimo", "essência", "âmago", "centro", "ponto crucial", "parte essencial", "natureza", "substância", "raiz"],
    "cerração": ["neblina densa", "névoa espessa", "bruma cerrada", "temporal de neblina", "nevoeiro intenso", "obscuridade", "tempo fechado", "visibilidade reduzida", "fumaça baixa", "véu de neblina"],
    "cerrado": ["fechado", "denso", "compacto", "apertado", "unido", "selvagem", "inculto", "áspero", "bioma brasileiro", "vegetação rasteira e arbustiva"],
    "cerrar": ["fechar", "unir", "juntar", "apertar", "estreitar", "impedir a passagem", "obstruir", "interromper", "concluir", "terminar"],
    "certa": ["determinada", "específica", "precisa", "indefinida", "alguma", "inegável", "segura", "firme", "correta", "exata"],
    "certame": ["competição", "concurso", "torneio", "disputa", "prova", "exame", "justa", "lide", "peleja", "embate"],
    "certamente": ["seguramente", "indubitavelmente", "com certeza", "sem dúvida", "inegavelmente", "efetivamente", "realmente", "positivamente", "seguro", "firme"],
    "certeza": ["segurança", "convicção", "firmeza", "indubitabilidade", "evidência", "fato", "verdade", "inequívoco", "confiança", "garantia"],
    "certificar-se": ["assegurar-se", "confirmar", "verificar", "averiguar", "constatar", "inteirar-se", "informar-se", "convencer-se", "garantir", "assegurar"],
    "certo": ["correto", "exato", "preciso", "verdadeiro", "seguro", "determinado", "algum", "inegável", "firme", "convicto"],
    "cerúleo": ["azul celeste", "azul claro", "azul do céu", "anil", "turquesa", "azulado", "celestial", "diáfano", "etéreo", "lívido"],
    "cessação": ["interrupção", "suspensão", "paralisação", "fim", "término", "conclusão", "extinção", "parada", "detenção", "solução de continuidade"],
    "cessão": ["transferência", "concessão", "delegação", "outorga", "cedência", "alienação", "transmissão", "doação", "entrega", "endereçamento"],
    "cessar": ["interromper", "suspender", "paralisar", "acabar", "terminar", "concluir", "extinguir", "parar", "deter", "sobrestar"],
    "cessionário": ["beneficiário", "receptor", "adquirente", "aquele que recebe a cessão", "outorgado", "favorecido", "sucessor", "herdeiro", "comprador", "arrendatário"],
    "cesta": ["balaio", "cesto", "paneiro", "alcofa", "cabaz", "embrulho", "pacote", "conjunto", "sortimento", "cabaz de compras"],
    "ceticismo": ["incredulidade", "desconfiança", "dúvida", "pirronismo", "agnosticismo", "hesitação", "questionamento", "reservismo", "suspensão de juízo", "relativismo"],
    "cético": ["incrédulo", "desconfiado", "duvidoso", "reservado", "questionador", "pessimista", "irônico", "agnóstico", "pirrônico", "relativista"],
    "cetro": ["bastão de poder", "vara", "insígnia real", "símbolo de autoridade", "emblema de soberania", "vara de comando", "cajado real", "regalia", "vara ornamental", "bastão cerimonial"],
    "céu": ["firmamento", "paraíso", "espaço sideral", "abóbada celeste", "olímpio", "éter", "altura", "infinito", "plano superior", "mundo espiritual"],
    "chacina": ["matança", "massacre", "carnificina", "extermínio", "holocausto", "genocídio", "banho de sangue", "hecatombe", "assassinato em massa", "mortandade"],
    "chacota": ["zombaria", "escárnio", "ridículo", "troça", "sarro", "motejo", "burla", "gracejo", "piada", "sátira"],
    "chafurdar": ["revolcar-se na lama", "atolar-se", "immergir", "afundar", "entregar-se a vícios", "mergulhar", "banhar-se", "empapar-se", "sujar-se", "enlodar-se"],
    "chalaça": ["piada", "gracejo", "brincadeira", "dito espirituoso", "adro", "chiste", "motejo", "sarcasmo", "ironia", "satira"],
    "chama": ["labareda", "fogo", "flama", "clarão", "resplendor", "ardor", "paixão", "entusiasmo", "incêndio", "faísca"],
    "chamado": ["convite", "convocação", "apelo", "denominação", "apelido", "alcunha", "vocação", "grito", "alarido", "aviso"],
    "chamar": ["convidar", "convocar", "apelidar", "denominar", "gritar", "invocar", "atrair", "requerer", "telefonar", "designar"],
    "chamego": ["carinho", "afeto", "mimo", "aconchego", "ternura", "namoro", "flerte", "paquera", "envolvimento amoroso", "xodó"],
    "chamejante": ["flamejante", "incandescente", "ardente", "brilhante", "luminoso", "radiante", "fulgurante", "cintilante", "vivo", "aceso"],
    "chamejar": ["flamejar", "arder", "brilhar", "cintilar", "fulgurar", "resplandecer", "luzir intensamente", "queimar com labaredas", "irradiar luz", "estar em chamas"],
    "chance": ["oportunidade", "possibilidade", "probabilidade", "azar", "sorte", "ventura", "ocasião", "ensejo", "perspectiva", "alternativa"],
    "chancela": ["aprovação oficial", "selo", "assinatura", "rubrica", "garantia", "autenticação", "reconhecimento", "endosso", "ratificação", "validação"],
    "chanceler": ["ministro das relações exteriores", "alto funcionário diplomático", "reitor de universidade (em alguns países)"],
    "chão": ["solo", "terra", "piso", "assoalho", "pavimento", "superfície", "base", "nível inferior", "planta", "terreno"],
    "chapéu": ["gorro", "boné", "cartola", "boina", "sombreiro", "acessório de cabeça", "proteção para a cabeça", "chapéu de sol", "chapéu de chuva", "chapéu de coco"],
    "charco": ["pântano", "lagoa", "brejo", "paul", "atoleiro", "terreno alagadiço", "poça d'água", "lamaçal", "água estagnada", "terreno pantanoso"],
    "charlatão": ["impostor", "embusteiro", "enganador", "falso médico", "vendedor de ilusões", "trapaceiro", "picareta", "mistificador", "curandeiro falso", "logrador"],
    "charme": ["encanto", "atrativo", "fascínio", "graça", "elegância", "magnetismo", "sedutividade", "beleza sutil", "encantamento", "carisma"],
    "charmoso": ["encantador", "atraente", "fascinante", "gracioso", "elegante", "magnético", "sedutor", "belo", "agradável", "carismático"],
    "charola": ["carruagem", "coche", "veículo antigo", "andor", "palanquim", "carroça", "liteira", "viatura antiga", "carro de procissão", "carro fúnebre"],
    "charuto": ["cigarro de folha de tabaco", "puro", "havana", "cubano", "brasileiro", "dominicano", "nacional", "importado", "degustação de charuto", "cinzeiro"],
    "chata": ["aborrecida", "maçante", "enfadonha", "tediosa", "monótona", "insuportável", "irritante", "desagradável", "fastidiosa", "pesada"],
    "chateado": ["aborrecido", "contrariado", "descontente", "melancólico", "triste", "deprimido", "magoado", "ressentido", "indisposto", "desanimado"],
    "chato": ["aborrecido", "maçante", "enfadonho", "tedioso", "monótono", "insuportável", "irritante", "desagradável", "fastidioso", "pesado"],
    "chauvinista": ["nacionalista extremista", "patriota fanático", "xenófobo", "jingoísta", "ultranacionalista", "partidário fervoroso", "defensor cego", "sectário", "intolerante", "preconceituoso"],
    "chavão": ["clichê", "lugar-comum", "frase feita", "expressão batida", "estereótipo", "trivialidade", "banalidade", "platitude", "frase trivial", "ideia gasta"],
    "chaveco": ["flerte", "paquera", "cortejo", "galanteio", "xaveco", "namoro", "conversa sedutora", "investida amorosa", "cantada", "assédio (conforme o contexto)"],
    "chefe": ["líder", "comandante", "superior", "dirigente", "gerente", "administrador", "patrão", "autoridade", "cabeça", "mentor"],
    "chefiado": ["comandado", "dirigido", "gerenciado", "administrado", "liderado", "supervisionado", "governado", "encabeçado", "regido", "controlado"],
    "chegamos": ["alcançamos", "atingimos", "aproximamo-nos", "viemos", "aparecemos", "conseguimos chegar", "estamos aqui", "desembarcamos", "aportamos", "atingimos o destino"],
    "chegar": ["alcançar", "atingir", "aproximar-se", "vir", "aparecer", "conseguir chegar", "aportar", "desembarcar", "alcançar o destino", "ir até"],
    "chegaram": ["alcançaram", "atingiram", "aproximaram-se", "vieram", "apareceram", "conseguiram chegar", "aportaram", "desembarcaram", "atingiram o destino", "vieram até"],
    "chegaremos": ["alcançaremos", "atingiremos", "aproximar-nos-emos", "viremos", "apareceremos", "conseguiremos chegar", "aportaremos", "desembarcaremos", "atingiremos o destino", "iremos até"],
    "chegássemos": ["alcançássemos", "atingíssemos", "aproximássemos", "viéssemos", "aparecêssemos", "conseguíssemos chegar", "aportássemos", "desembarcássemos", "atingíssemos o destino", "fôssemos até"],
    "chegue": ["alcance", "atinja", "aproxime-se", "venha", "apareça", "consiga chegar", "aporte", "desembarque", "vá até", "alcance o destino"],
    "cheguem": ["alcancem", "atinjam", "aproximem-se", "venham", "apareçam", "consigam chegar", "aportem", "desembarquem", "vão até", "alcancem o destino"],
    "cheguemos": ["alcancemos", "atinjamos", "aproximemo-nos", "venhamos", "apareçamos", "consigamos chegar", "aportemos", "desembarquemos", "vamos até", "alcancemos o destino"],
    "cheia": ["repleta", "abarrotada", "lotada", "inundada", "transbordante", "plena", "completa", "copiosa", "ubertosa", "gravidez"],
    "cheio": ["repleto", "abarrotado", "lotado", "inundado", "transbordante", "pleno", "completo", "copioso", "ubertoso", "farto"],
    "cheiro": ["aroma", "fragrância", "perfume", "odor", "olores", "emanção", "exalação", "fedor", "catinga", "imbaúba"],
    "cheque": ["ordem de pagamento", "título de crédito", "vale", "papel de pagamento", "documento bancário", "cheque nominal", "cheque ao portador", "cheque cruzado", "cheque pré-datado", "talão de cheques"],
    "chibatada": ["açoite", "chicoteada", "vergastada", "sova", "surra", "palmatória", "lambada", "azorragueada", "flagelação", "castigo físico"],
    "chique": ["elegante", "sofisticado", "estiloso", "refinado", "distinto", "charmoso", "formidável", "ótimo", "de bom gosto", "classe"],
    "chiqueiro": ["pocilga", "curral de porcos", "estábulo sujo", "lugar imundo", "antro", "casa de suínos", "chafurdeiro", "local fétido", "moradia de porcos", "lugar desordenado"],
    "chiste": ["piada", "gracejo", "adro", "dito espirituoso", "chalaça", "motejo", "sátira", "ironia", "facécia", "bricadeira"],
    "chocarrice": ["grosseria", "vulgaridade", "indelicadeza", "descortesia", "rudeza", "palavrão", "obscenidade", "baixaria", "grosseria", "insolência"],
    "chocolate": ["cacau", "achocolatado", "doce", "guloseima", "tablete de chocolate", "barra de chocolate", "bombom", "cacau em pó", "chocolate quente", "mousse de chocolate"],
    "chofer": ["motorista", "condutor", "motorneiro", "chauffeur", "automobilista", "piloto", "condutor de veículo", "motorista particular", "taxista", "caminhoneiro"],
    "chorão": ["plangente", "lamentoso", "triste", "melancólico", "que chora facilmente", "sensível", "lacrimoso", "soluçante", "pranteador", "plorador"],
    "chorar": ["lamentar", "prantear", "soluçar", "lacrimejar", "verter lágrimas", "derramar lágrimas", "lamentar-se", "queixar-se", "gemer", "fungar"],
    "chucro": ["selvagem", "indomesticado", "bravo", "arisco", "inculto", "rude", "grosseiro", "agreste", "selvático", "silvestre"],
    "chulo": ["vulgar", "grosseiro", "obsceno", "indecente", "baixo", "torpe", "ordinário", "palavreado grosseiro", "linguagem obscena", "indecoroso"],
    "chupado": ["sugado", "absorvido", "extraído", "vazio", "emaciado", "magro", "consumido", "dessecado", "exausto", "esgotado"],
    "chuva": ["aguaceiro", "temporal", "pluviosidade", "precipitação", "toró", "dilúvio", "garoa", "chuvisco", "tempestade", "pingo"],
    "cia": ["companhia", "sociedade", "firma", "associação", "grupo", "parceria", "seguimento", "presença", "ajuda", "apoio"],
    "cibernética": ["informática", "tecnologia da informação", "automação", "controle", "sistemas digitais", "mundo virtual", "rede de computadores", "inteligência artificial", "robótica", "realidade virtual"],
    "cíclico": ["periódico", "recorrente", "intermitente", "rotativo", "em ciclos", "circular", "sazonal", "alternado", "em espiral", "em roda"],
    "ciclo": ["período", "etapa", "fase", "sequência", "rodada", "rotação", "circuito", "recorrência", "andamento", "curso"],
    "cidadania": ["nacionalidade", "direito de cidadão", "civismo", "direitos e deveres civis", "participação cívica", "pertencimento a uma nação", "condição de cidadão", "consciência social", "engajamento comunitário", "responsabilidade social"],
    "cidadão": ["nacional", "habitante", "munícipe", "natural de", "compatriota", "indivíduo com direitos civis", "membro de uma comunidade política", "habitante de uma cidade", "eleitor", "contribuinte"],
    "cidadãos": ["nacionais", "habitantes", "munícipes", "naturais de", "compatriotas", "indivíduos com direitos civis", "membros de uma comunidade política", "habitantes de cidades", "eleitores", "contribuintes"],
    "cidade": ["município", "burgo", "urbe", "metrópole", "aglomeração urbana", "centro urbano", "localidade", "povoação", "comunidade urbana", "zona urbana"],
    "ciência": ["saber", "conhecimento", "erudição", "investigação", "pesquisa", "método científico", "disciplina", "ramo do saber", "estudo", "teoria"],
    "ciente": ["informado", "sabedor", "consciente", "avisado", "inteirado", "notificado", "ao corrente", "a par", "apercebido", "sabendo"],
    "cifra": ["algarismo", "número", "quantia", "montante", "total", "símbolo numérico", "código", "chave", "senha", "valor"],
    "cilada": ["armadilha", "emboscada", "arapuca", "laço", "engano", "truque", "artimanha", "esparrela", "logro", "ardil"],
    "cílio": ["pestana", "pelo da pálpebra", "borda da pálpebra", "guarda-olhos", "proteção ocular", "adorno dos olhos"],
    "címbalo": ["prato (instrumento musical)", "chocalho", "sineta", "campainha", "instrumento de percussão", "metalofone", "gongo", "tam-tam", "sinfonia", "orquestra"],
    "cimento": ["liga", "aglomerante", "material de construção", "argamassa", "concreto (após mistura)", "cal", "gesso", "cola", "fixador", "material ligante"],
    "cimo": ["topo", "cume", "ápice", "pináculo", "culminância", "alto", "pico", "coroa", "auge", "acume"],
    "cinema": ["sétima arte", "filme", "película", "cine", "arte cinematográfica", "sala de projeção", "cinematografia", "vídeo", "produção audiovisual", "tela grande"],
    "cinestésico": ["relativo à cinestesia", "sensorial", "tátil", "motor", "corporal", "de movimento", "proprioceptivo", "sensório-motor", "que envolve o movimento do corpo", "relacionado à percepção do movimento"],
    "cingir": ["circundar", "envolver", "abarcar", "abraçar", "contornar", "rodear", "acorrentar", "atar", "ligar", "apertar"],
    "cínica": ["sarcastica", "irônica", "mordaz", "escarninha", "zombeteira", "dissimulada", "hipócrita", "fingida", "afetada", "fraudulenta"],
    "cínico": ["sarcastico", "irônico", "mordaz", "escarninho", "zombeteiro", "dissimulado", "hipócrita", "fingido", "afetado", "fraudulento"],
    "cinismo": ["sarcasmo", "ironia mordaz", "escárnio", "zombaria", "dissimulação", "hipocrisia", "fingimento", "afetação", "fraude", "descrença na sinceridade humana"],
    "cintilação": ["brilho intermitente", "tremulação luminosa", "titilação", "lampejo", "reluzir", "tremeluzir", "piscar", "vibrar", "oscilar", "fulgurar"],
    "cintilante": ["brilhante", "tremulante", "titilante", "lampejante", "reluzente", "tremeluzente", "piscante", "vibrante", "oscilante", "fulgurante"],
    "cinto": ["correia", "faixa", "guarda-roupa", "acessório de vestuário", "liga", "cordão", "barrigueira", "cingidouro", "cinta", "talabarte"],
    "cioso": ["zeloso", "cuidadoso", "atencioso", "desconfiado", "inseguro", "possessivo", "invejoso", "suspicaz", "escrupuloso", "meticuloso"],
    "cipó": ["liana", "trepadeira", "planta trepadora", "corda vegetal", "vinha", "enredadeira", "planta fibrosa", "planta lenhosa trepadora", "planta de mata", "planta silvestre"],
    "circulação": ["movimento", "tráfego", "fluxo", "corrente", "giro", "rodagem", "divulgação", "propagação", "venda", "distribuição"],
    "círculo": ["redondo", "roda", "anel", "globo", "esfera", "grupo", "sociedade", "reunião", "assembleia", "roda viva"],
    "circuncidado": ["prepúcio removido", "ablacionado", "cortado", "mutilado", "ritualizado", "segundo a tradição judaica", "segundo a tradição islâmica", "conforme o costume", "operado", "extirpado"],
    "circuncisão": ["remoção do prepúcio", "ablação", "corte", "mutilação", "ritual", "operação", "intervenção cirúrgica", "segundo a tradição judaica", "segundo a tradição islâmica", "costume religioso"],
    "circunciso": ["circuncidado", "prepúcio removido", "ablacionado", "cortado", "mutilado", "ritualizado", "segundo a tradição judaica", "segundo a tradição islâmica", "conforme o costume", "operado"],
    "circunferência": ["perímetro do círculo", "contorno circular", "linha circular", "redondeza", "volta", "circuito", "redor", "limite circular", "extensão circular", "medida do contorno"],
    "circunscrever": ["limitar", "restringir", "demarcar", "definir", "delimitar", "confinar", "abranger", "compreender", "incluir", "descrever"],
    "circunscrição": ["jurisdição", "zona", "distrito", "área", "região", "limite territorial", "divisão administrativa", "setor", "âmbito", "demarcação"],
    "circunscrito": ["limitado", "restrito", "demarcado", "definido", "delimitado", "confinado", "abrangido", "compreendido", "incluído", "descrito"],
    "circunspecção": ["prudência", "cautela", "discrição", "moderação", "reserva", "atenção", "cuidado", "ponderação", "discernimento", "juízo"],
    "circunspecto": ["prudente", "cauteloso", "discreto", "moderado", "reservado", "atento", "cuidadoso", "ponderado", "discernível", "ajuizado"],
    "circunstância": ["situação", "condição", "ocasião", "conjuntura", "fator", "elemento", "pormenor", "detalhe", "particularidade", "evento"],
    "cisão": ["separação", "divisão", "ruptura", "dissolução", "desunião", "quebra", "fragmentação", "desmembramento", "discórdia", "cisma"],
    "ciscar": ["espalhar", "dispersar", "jogar", "atirar", "arremessar", "semear", "pulverizar", "borrifar", "salpicar", "esfarelar"],
    "cisma": ["separação religiosa", "divisão na igreja", "dissidência", "heresia", "apostasia", "ruptura", "desacordo doutrinário", "separação de facções", "desunião religiosa", "conflito religioso"],
    "cismado": ["pensativo", "reflexivo", "meditabundo", "melancólico", "desconfiado", "preocupado", "absorto", "concentrado", "introspectivo", "pensando profundamente"],
    "cismar": ["pensar", "refletir", "meditar", "imaginar", "cogitar", "preocupar-se", "suspeitar", "desconfiar", "sonhar acordado", "divagar"],
    "cita": ["menção", "referência", "alude", "reporta-se", "menciona", "refere", "aponta", "exemplifica", "transcreve", "reproduz"],
    "citar": ["mencionar", "referir", "aludir", "reportar-se", "apontar", "exemplificar", "transcrever", "reproduzir", "convocar judicialmente", "intimar"],
    "cito": ["rápido", "veloz", "ligeiro", "ágil", "apressado", "expedito", "diligente", "imediato", "instantâneo", "fugaz"],
    "ciúme": ["inveja", "zelo", "ressentimento", "desconfiança amorosa", "possessividade", "insegurança", "suspeita", "temor de perder o afeto", "ciúmes", "amor possessivo"],
    "cívico": ["patriótico", "nacional", "relativo aos direitos e deveres do cidadão", "civil", "público", "comunitário", "social", "urbano", "municipal", "estadual"],
    "civil": ["laico", "não religioso", "secular", "urbano", "municipal", "estadual", "nacional", "relativo ao cidadão", "cortês", "educado"],
    "civilização": ["progresso social", "desenvolvimento cultural", "sociedade organizada", "urbanização", "refinamento", "evolução", "cultura", "costumes", "hábitos", "nível de desenvolvimento"],
    "civilizado": ["educado", "cortês", "refinado", "urbano", "desenvolvido", "progredido", "culto", "bem-educado", "gentil", "polido"],
    "cizânia": ["discórdia", "desavença", "intriga", "desarmonia", "conflito", "rixa", "inimizade", "divisão", "separação", "desentendimento"],
    "clã": ["família extensa", "grupo familiar", "gens", "tribo", "linhagem", "parentesco", "comunidade", "grupo unido", "seita", "facção"],
    "clamar": ["gritar", "exclamar", "bradar", "reclamar", "implorar", "suplicar", "pedir insistentemente", "protestar", "reivindicar", "invocar"],
    "clamava": ["gritava", "exclamava", "bradava", "reclamava", "implorava", "suplicava", "pedia insistentemente", "protestava", "reivindicava", "invocava"],
    "clamor": ["grito", "exclamação", "brado", "reclamação", "imploro", "súplica", "protesto", "reivindicação", "alarido", "vociferação"],
    "clandestino": ["secreto", "oculto", "ilegal", "proibido", "subterrâneo", "furtivo", "dissimulado", "encoberto", "ilegalmente", "às escondidas"],
    "clareira": ["abertura na mata", "espaço aberto na floresta", "radura", "vão", "espaço livre", "iluminação natural", "luz na floresta", "campo aberto na mata", "desbravado", "área desmatada"],
    "clareza": ["nitidez", "transparência", "limpidez", "evidência", "inteligibilidade", "compreensão fácil", "distinção", "lucidez", "precisão", "exatidão"],
    "clarividência": ["vidência", "premonição", "intuição aguçada", "percepção extrassensorial", "capacidade de ver o futuro", "previsão", "profecia", "adivinhação", "sexto sentido", "presságio"],
    "claro": ["luminoso", "nítido", "transparente", "evidente", "inteligível", "óbvio", "patente", "distinto", "preciso", "exato"],
    "classe": ["categoria", "grupo", "tipo", "espécie", "nível", "divisão social", "estrato", "aula", "turma", "qualidade"],
    "clássico": ["modelo", "padrão", "exemplar", "antigo", "tradicional", "consagrado", "notável", "excelente", "primoroso", "fundamental"],
    "classificação": ["ordenação", "categorização", "arranjo", "disposição", "sistematização", "indexação", "qualificação", "avaliação", "hierarquização", "distribuição"],
    "classificado": ["ordenado", "categorizado", "arranjado", "disposto", "sistematizado", "indexado", "qualificado", "avaliado", "hierarquizado", "distribuído"],
    "classificar": ["ordenar", "categorizar", "arranjar", "dispor", "sistematizar", "indexar", "qualificar", "avaliar", "hierarquizar", "distribuir"],
    "claudicante": ["manco", "coxo", "aleijado", "que manqueja", "cambaleante", "trôpego", "vacilante", "titubeante", "com dificuldade de andar", "com marcha irregular"],
    "cláusula": ["disposição", "artigo", "condição", "termo", "estipulação", "preceito", "item", "parágrafo", "dispositivo", "determinação"],
    "clausura": ["isolamento", "reclusão", "encarceramento", "confinamento", "fechamento", "encerramento", "vida monástica", "vida religiosa enclausurada", "segregação", "claustro"],
    "clava": ["porrete", "maça", "cacete", "arma rústica", "bordão grosso", "pau pesado", "arma de madeira", "instrumento contundente", "bastão", "vara grossa"],
    "clean": ["limpo", "puro", "imaculado", "asseado", "organizado", "minimalista", "simples", "despojado", "elegante", "higiênico"],
    "clemência": ["piedade", "compaixão", "indulgência", "misericórdia", "humanidade", "brandura", "suavidade", "perdão", "leniência", "generosidade"],
    "clemente": ["piedoso", "compassivo", "indulgente", "misericordioso", "humano", "brando", "suave", "magnânimo", "benigno", "generoso"],
    "clérigo": ["eclesiástico", "sacerdote", "padre", "religioso", "ministro religioso", "pastor", "reverendo", "abade", "monge", "frade"],
    "clero": ["conjunto de clérigos", "classe eclesiástica", "ministério religioso", "ordem sacerdotal", "hierarquia religiosa", "corpo de sacerdotes", "igreja", "religião organizada", "instituição religiosa", "serviço religioso"],
    "clichê": ["chavão", "lugar-comum", "frase feita", "expressão batida", "estereótipo", "trivialidade", "banalidade", "platitude", "frase trivial", "ideia gasta"],
    "cliente": ["consumidor", "freguês", "usuário", "comprador", "contratante", "paciente", "assistido", "demandante", "solicitante", "consumidora"],
    "clima": ["tempo", "ambiente", "atmosfera", "temperatura", "estado do tempo", "humor", "disposição", "situação", "contexto", "meio"],
    "clímax": ["auge", "ápice", "ponto culminante", "momento crucial", "ponto máximo", "culminância", "acme", "extremo", "ponto alto", "ápice dramático"],
    "clivagem": ["divisão", "separação", "fenda", "racha", "sulco", "corte", "fragmentação", "desmembramento", "partição", "bipartição"],
    "close": ["primeiro plano", "plano aproximado", "foco próximo", "detalhe", "ampliação", "aproximação da câmera", "foco em detalhe", "imagem ampliada", "plano curto", "detalhe da face"],
    "coabitar": ["morar junto", "viver junto", "habitar o mesmo lugar", "conviver", "residir conjuntamente", "compartilhar moradia", "dividir o lar", "habitar em comum", "morar na mesma casa", "viver sob o mesmo teto"],
    "coação": ["compulsão", "violência", "opressão", "constrangimento", "intimidação", "força", "pressão", "obrigação", "imposição", "cerceamento"],
    "coadjuvante": ["auxiliar", "assistente", "secundário", "ajudante", "colaborador", "participante", "adjunto", "suporte", "apoio", "secundarista"],
    "coadunar": ["harmonizar", "concordar", "combinar", "ajustar", "compatibilizar", "conciliar", "unir", "integrar", "ligar", "conectar"],
    "coagido": ["forçado", "obrigado", "compelido", "constrangido", "intimidado", "pressionado", "violentado", "submetido", "dominado", "cerceado"],
    "coagir": ["forçar", "obrigar", "compelir", "constranger", "intimidar", "pressionar", "violentar", "submeter", "dominar", "cercear"],
    "coagulado": ["solidificado", "endurecido", "espessado", "condensado", "empastado", "grumoso", "aglutinado", "coalhado", "preso", "compacto"],
    "coalização": ["aliança", "união", "liga", "pacto", "confederação", "consorcio", "associação", "bloco", "frente", "junção"],
    "coalizão": ["aliança", "união", "liga", "pacto", "confederação", "consorcio", "associação", "bloco", "frente", "junção"],
    "coautor": ["colaborador", "parceiro", "participante", "associado", "conjunto", "em parceria", "em colaboração", "juntamente", "com participação", "com autoria compartilhada"],
    "cobaia": ["rato de laboratório", "objeto de teste", "sujeito experimental", "vítima", "indivíduo usado para experiências", "testemunha involuntária", "exemplo", "modelo", "espécime", "amostra"],
    "cobiça": ["ganância", "avidez", "cupidez", "ânsia", "desejo ardente", "ambição desmedida", "olho grande", "sede", "apetite voraz", "ânsia descontrolada"],
    "cobiçado": ["desejado", "apetecido", "almejado", "anseiado", "querido", "estimado", "atraente", "sedutor", "fascinante", "precioso"],
    "cobiçar": ["desejar ardentemente", "apetecer", "almejar", "ansiar", "querer muito", "ambicionar", "ter inveja", "olhar com cobiça", "sentir avidez", "ter ganância"],
    "cobicosa": ["gananciosa", "ávida", "cupida", "ansiosa", "desejosa", "ambiciosa", "invejosa", "olhuda", "sedenta", "apetitosa"],
    "cobrar": ["reclamar dívida", "exigir pagamento", "pedir o que é devido", "taxar", "impor tarifa", "custear", "vingar", "retaliar", "demandar", "reivindicar"],
    "cobrir": ["tapar", "revestir", "encobrir", "velar", "ocultar", "proteger", "agasalhar", "abranger", "atingir", "compensar"],
    "cobrir-se": ["agasalhar-se", "envolver-se", "taparse", "vestir-se", "proteger-se", "ocultar-se", "velar-se", "encobrir-se", "revestir-se", "guarnecer-se"],
    "cochilo": ["soneca", "dormitar", "descanso breve", "sono leve", "pestana", "dormidela", "breve sono", "repouso curto", "tirar uma soneca", "adormecida"],
    "cocho": ["vasilha para animais", "gamela", "comedouro", "bebedouro", "recipiente rústico", "vaso de madeira", "pia", "bacia", "alguidar", "tina"],
    "cocô": ["excremento", "fezes", "matéria fecal", "detrito", "dejeto", "caca", "bosta", "merda", "número dois", "evacuação"],
    "coco-1": ["fruto do coqueiro", "noz de coco", "coco da Bahia", "coco seco", "água de coco", "leite de coco", "polpa de coco", "óleo de coco", "raspa de coco", "coco ralado"],
    "codificar": ["criptografar", "converter em código", "cifrar", "decriptografar (inverso)", "traduzir para código", "converter dados", "programar", "inserir código", "escrever código", "formatar em código"],
    "código": ["senha", "chave", "criptograma", "sistema de sinais", "regulamento", "lei", "norma", "codificação", "instrução", "protocolo"],
    "codinome": ["pseudônimo", "apelido secreto", "nome de guerra", "alcunha confidencial", "nome falso", "nome fictício", "nome de cobertura", "nome encriptado", "nome disfarçado", "nome de código"],
    "codorno": ["codorniz", "perdiz pequena", "ave galiforme", "ave de caça", "ave campestre", "ave migratória", "ave silvestre", "galinha-da-terra", "galinhola", "pinguela"],
    "coeficiente": ["fator", "índice", "constante", "parâmetro", "medida", "proporção", "relação", "taxa", "indicador", "multiplicador"],
    "coelho": ["lebre pequena", "lagomorfo", "roedor (erroneamente)", "animal de toca", "orelhudo", "saltador", "mamífero herbívoro", "conejo (espanhol)", "rabbit (inglês)", "lapin (francês)"],
    "coerção": ["compulsão", "força", "violência", "opressão", "constrangimento", "intimidação", "pressão", "obrigação", "imposição", "cerceamento"],
    "coercitivo": ["compulsório", "forçoso", "obrigatório", "impositivo", "restritivo", "opressivo", "intimidatório", "violento", "coator", "que exerce coerção"],
    "coerência": ["lógica", "congruência", "harmonia", "conexão", "nexo", "concordância", "consonância", "encadeamento", "racionalidade", "consistência"],
    "coerente": ["lógico", "congruente", "harmonioso", "conexo", "concordante", "consonante", "racional", "consequente", "sistemático", "consistente"],
    "coesa": ["unida", "ligada", "aderente", "compacta", "junta", "aglutinada", "soldada", "integrada", "conglutinada", "pegajosa"],
    "coesão": ["união", "ligação", "aderência", "compactação", "junção", "aglutinação", "soldagem", "integração", "conglutinação", "força de união"],
    "coeso": ["unido", "ligado", "aderente", "compacto", "junto", "aglutinado", "soldado", "integrado", "conglutinado", "pegajoso"],
    "coexistência": ["convivência", "simultaneidade", "existência simultânea", "vida conjunta", "presença mútua", "concorrência pacífica", "tolerância", "interação", "harmonia", "relações mútuas"],
    "coexistir": ["conviver", "existir simultaneamente", "viver junto", "estar presente ao mesmo tempo", "concorrer pacificamente", "tolerar", "interagir", "harmonizar", "relacionar-se mutuamente", "compartilhar espaço"],
    "cogente": ["obrigatório", "irrefutável", "inegável", "convincente", "imperioso", "necessário", "forçoso", "premente", "incontestável", "indiscutível"],
    "cogitação": ["reflexão", "meditação", "pensamento", "ideia", "projeto", "intenção", "consideração", "planejamento", "hipótese", "suposição"],
    "cogitar": ["pensar", "refletir", "meditar", "imaginar", "considerar", "planejar", "supor", "hipotetizar", "ponderar", "elucubrar"],
    "cogitativo": ["pensativo", "reflexivo", "meditabundo", "especulativo", "ponderativo", "contemplativo", "imaginativo", "intelectual", "raciocinativo", "analítico"],
    "cognição": ["conhecimento", "entendimento", "compreensão", "percepção", "aprendizagem", "raciocínio", "memória", "atenção", "inteligência", "processamento mental"],
    "cognitivo": ["mental", "intelectual", "racional", "de conhecimento", "de entendimento", "de compreensão", "de percepção", "de aprendizagem", "de raciocínio", "de memória"],
    "cognome": ["sobrenome", "apelido", "alcunha", "nome de família", "nome adicional", "nome próprio", "apelido de família", "designação familiar", "nome de linhagem", "nome de clã"],
    "cognoscível": ["conhecível", "apreensível", "inteligível", "perceptível", "compreensível", "discernível", "palpável", "evidente", "manifesto", "claro"],
    "coibir": ["impedir", "reprimir", "proibir", "restringir", "refrear", "deter", "obstar", "controlar", "moderar", "inibibir"],
    "coibir-se": ["reprimir-se", "controlar-se", "refrear-se", "moderar-se", "inibibir-se", "conter-se", "dominar-se", "abster-se", "guardar-se", "reprimir os impulsos"],
    "coincidência": ["simultaneidade", "concorrência", "concomitância", "casualidade", "fortuidade", "encontro fortuito", "ocorrência simultânea", "convergência", "paralelismo", "semelhança"],
    "coincidir": ["ocorrer simultaneamente", "ser simultâneo", "concorrer", "corresponder", "concordar", "harmonizar", "ajustar", "encontrar-se", "cruzar", "convergir"],
    "coisa": ["objeto", "item", "artigo", "ente", "ser", "fato", "assunto", "negócio", "troço", "trem"],
    "coitado": ["infeliz", "desgraçado", "miserável", "desafortunado", "pobre", "vítima", "pena", "que dó", "que lástima", "desditoso"],
    "coito": ["ato sexual", "relação sexual", "cópula", "conjunção carnal", "acasalamento", "fornicação", "transa", "sexo", "encontro íntimo", "união sexual"],
    "coivara": ["roça queimada", "terreno desmatado e queimado", "queimada para plantio", "área de cultivo após queimada", "toca", "abrigo de animais", "lugar de refúgio", "esconderijo", "moradia"],
    "colaboração": ["ajuda", "auxílio", "cooperação", "participação", "apoio", "contribuição", "trabalho em equipe", "parceria", "associação", "concurso"],
    "colaborador": ["ajudante", "auxiliar", "cooperador", "participante", "apoiador", "contribuinte", "parceiro", "associado", "cúmplice", "assistente"],
    "colaboradores": ["ajudantes", "auxiliares", "cooperadores", "participantes", "apoiadores", "contribuintes", "parceiros", "associados", "cúmplices", "assistentes"],
    "colaborar": ["ajudar", "auxiliar", "cooperar", "participar", "apoiar", "contribuir", "trabalhar em equipe", "associar-se", "concorrer", "auxiliar mutuamente"],
    "colacionar": ["comparar", "cotejar", "conferir", "ajuntar", "reunir", "listar", "enumerar", "inventariar", "compilar", "organizar"],
    "colapso": ["ruína", "quebra", "falência", "derrocada", "desmoronamento", "crise", "paralisação", "cessação", "esgotamento", "prostração"],
    "colar": ["grudar", "aderir", "unir", "fixar", "pegar", "aglutinar", "conectar", "afixar", "apregar", "juntar"],
    "colateral": ["lateral", "adjacente", "secundário", "indireto", "marginal", "tangencial", "reflexo", "consequente", "derivado", "adjunto"],
    "colecção": ["coleção", "conjunto", "reunião", "acervo", "sortimento", "aglomeração", "ajuntamento", "compilação", "recolha", "mostruário"],
    "colega": ["companheiro", "camarada", "parceiro", "sócio", "consorte", "condiscípulo", "camarada de trabalho", "companheiro de equipe", "amigo", "chegado"],
    "colégio": ["escola", "instituição de ensino", "educandário", "liceu", "ginásio", "curso", "aula", "turma", "corpo docente", "comunidade escolar"],
    "coleira": ["guia", "arreio", "canga", "gargantilha", "corrente", "bracelete", "anel", "adereço", "enforcador", "peitoral"],
    "cólera": ["ira", "raiva", "fúria", "indignação", "irritação extrema", "sanha", "ódio", "ressentimento", "exasperação", "acrimônia"],
    "colérico": ["iracundo", "raivoso", "furioso", "indignado", "irritadiço", "sanhento", "enraivecido", "exasperado", "colérico", "bilis"],
    "coleta": ["recolhimento", "apanha", "angariação", "arrecadação", "seleção", "extração", "colheita", "levantamento de dados", "pesquisa", "amostragem"],
    "coletamos": ["recolhemos", "apanhamos", "angariamos", "arrecadamos", "selecionamos", "extraímos", "colhemos", "levantamos dados", "pesquisamos", "amostramos"],
    "coletânea": ["antologia", "compilação", "recoletânea", "seleção", "miscelânea", "repertório", "ajuntamento", "reunião", "coleção", "miscelânea"],
    "coletar": ["recolher", "apanhar", "angariar", "arrecadar", "selecionar", "extrair", "colher", "levantar dados", "pesquisar", "amostrar"],
    "coletividade": ["comunidade", "grupo", "sociedade", "conjunto de indivíduos", "povo", "nação", "aglomeração", "totalidade", "massa", "corpo social"],
    "coletivo": ["comum", "geral", "público", "social", "comunitário", "em grupo", "conjunto", "aglomerado", "total", "de todos"],
    "colheita": ["recolha", "apanha", "safra", "fartura", "resultado", "consequência", "produto", "frutos", "grãos", "vindima"],
    "colher": ["apanhar", "recolher", "segurar", "obter", "receber", "extrair", "cortar", "ceifar", "vindimar", "adquirir"],
    "colhido": ["apanhado", "recolhido", "obtido", "recebido", "extraído", "cortado", "ceifado", "vindimado", "adquirido", "apanhado"],
    "colidir": ["chocar-se", "bater", "impactar", "esbarrar", "atingir", "confrontar", "discordar", "opor-se", "entrar em conflito", "contrariar"],
    "coligir": ["reunir", "juntar", "compilar", "ajuntar", "recolher", "aglutinar", "associar", "ligar", "conectar", "agregar"],
    "colisão": ["choque", "batida", "impacto", "esbarrão", "atingimento", "confronto", "atrito", "encontro violento", "embate", "contra choque"],
    "colmeia": ["casa de abelhas", "apiário", "enxame", "conjunto de abelhas", "estrutura para abelhas", "favo", "alveário", "cortiço", "moradia das abelhas", "ninho de abelhas"],
    "colocação": ["posição", "lugar", "situação", "emprego", "trabalho", "disposição", "arranjo", "fixação", "aplicação", "investimento"],
    "colocar": ["pôr", "situar", "dispor", "arranjar", "fixar", "aplicar", "investir", "empregar", "alocar", "posicionar"],
    "colônia": ["território dependente", "possessão", "povoação", "comunidade estrangeira", "grupo de imigrantes", "assentamento", "domínio", "província", "município", "fazenda"],
    "colonizar": ["povoar", "habitar", "assentar", "dominar", "explorar", "implantar colônia", "estabelecer-se", "ocupar", "desenvolver", "civilizar (em perspectiva histórica)"],
    "colono": ["habitante de colônia", "povoado", "morador", "imigrante", "agricultor", "lavrador", "fazendeiro", "plantador", "desbravador", "pioneiro"],
    "coloquial": ["informal", "familiar", "comum", "usual", "corrente", "conversacional", "do dia a dia", "popular", "vernacular", "nativo"],
    "colóquio": ["conversa", "diálogo", "bate-papo", "entrevista", "debate", "reunião", "encontro", "conferência", "simpósio", "palestra"],
    "colorado": ["vermelho", "rubro", "carmesim", "escarlate", "vermelhão", "avermelhado", "corado", "rubente", "vermelhinho", "tinto"],
    "colores": ["cores", "matizes", "tons", "pigmentos", "tintas", "coloridos", "vibrantes", "espectro", "cromático", "policromático"],
    "colorir": ["pintar", "tingir", "matizar", "avivar", "iluminar", "ornamentar", "decorar", "enfeitar", "dourar", "irisar"],
    "colossal": ["gigantesco", "enorme", "imenso", "vasto", "monumental", "titânico", "formidável", "extraordinário", "grandioso", "avassalador"],
    "colosso": ["gigante", "enorme estátua", "pessoa de grande estatura", "algo de proporções vastas", "monumento imenso", "figura imponente", "ser colossal", "estrutura gigantesca", "algo extraordinário", "pessoa influente"],
    "com": ["junto de", "em companhia de", "na posse de", "por meio de", "por causa de", "em relação a", "ao mesmo tempo que", "de acordo com", "apesar de", "contendo"],
    "com certeza": ["seguramente", "indubitavelmente", "certamente", "sem dúvida", "inegavelmente", "efetivamente", "realmente", "positivamente", "seguro", "firme"],
    "com efeito": ["de fato", "realmente", "efetivamente", "portanto", "assim", "consequentemente", "logo", "destarte", "por isso", "em verdade"],
    "comadre": ["madrinha de batismo ou casamento em relação aos pais do afilhado", "amiga íntima", "vizinha", "colega", "parceira", "confidente", "aliada", "testemunha", "participante", "interlocutora"],
    "combate": ["luta", "batalha", "confronto", "guerra", "pugna", "duelo", "pelea", "disputa", "oposição", "resistência"],
    "combater": ["lutar", "bater-se", "confrontar", "guerrear", "pugnar", "duelar", "pelejar", "disputar", "opor-se", "resistir"],
    "combativo": ["lutador", "aguerrido", "pugnaz", "belicoso", "militante", "ativo", "enérgico", "intenso", "feroz", "resoluto"],
    "combinar": ["unir", "juntar", "harmonizar", "ajustar", "conciliar", "misturar", "acordar", "contratar", "concertar", "corresponder"],
    "combinar-se": ["unir-se", "juntar-se", "harmonizar-se", "ajustar-se", "conciliar-se", "misturar-se", "acordar entre si", "concertar-se", "corresponder-se", "entrosar-se"],
    "combinarão": ["unirão", "juntarão", "harmonizarão", "ajustarão", "conciliarão", "misturarão", "acordarão", "contratarão", "concertarão", "corresponderão"],
    "combinarmos": ["unirmos", "juntarmos", "harmonizarmos", "ajustarmos", "conciliarmos", "misturarmos", "acordarmos", "contratarmos", "concertarmos", "corresponder-nos"],
    "combinávamos": ["uníamos", "juntávamos", "harmonizávamos", "ajustávamos", "conciliávamos", "misturávamos", "acordávamos", "contratávamos", "concertávamos", "correspondíamo-nos"],
    "combine": ["una", "junte", "harmonize", "ajuste", "concilie", "misture", "acorde", "contrate", "concerte", "corresponda"],
    "combo": ["combinação", "pacote", "conjunto", "oferta", "promoção", "mix", "aglutinação", "reunião", "sortimento", "arranjo"],
    "começar": ["iniciar", "principar", "originar", "desencadear", "estrear", "inaugurar", "dar início", "pôr em marcha", "arranjar", "esboçar"],
    "começo": ["início", "princípio", "origem", "arranque", "estreia", "inauguração", "exórdio", "prefácio", "primeira fase", "primeiro passo"],
    "começou": ["iniciou", "principou", "originou", "desencadeou", "estreou", "inaugurou", "deu início", "pôs em marcha", "arranhou", "esboçou"],
    "comédia": ["peça teatral humorística", "farsa", "sátira", "burlesco", "pantomima", "palhaçada", "diversão", "entretenimento", "humor", "gracejo"],
    "comedido": ["moderado", "prudente", "cauteloso", "equilibrado", "sóbrio", "discreto", "reservado", "sensato", "controlado", "temperado"],
    "comedimento": ["moderação", "prudência", "cautela", "equilíbrio", "sobriedade", "discrição", "reserva", "sensatez", "controle", "temperança"],
    "comensal": ["convidado", "hóspede", "comparticipante da mesa", "companheiro de refeição", "conviva", "parceiro de jantar", "aquele que come junto", "participante de um banquete", "companheiro de mesa", "alimentando-se junto"],
    "comente": ["opine", "analise", "critique", "explique", "interprete", "declare", "fale sobre", "discorra", "exprima-se", "avalie"],
    "comer": ["alimentar-se", "ingerir", "mastigar", "devorar", "banquetear-se", "nutrir-se", "prover-se de alimento", "cear", "refeicionar", "manducar"],
    "comercial": ["mercantil", "negocial", "empresarial", "de vendas", "publicitário", "de propaganda", "de mercado", "de negócios", "de troca", "lucrativo"],
    "comercialização": ["venda", "negociação", "transação", "distribuição", "marketing", "mercadejamento", "escoamento", "colocação no mercado", "venda em massa", "circulação"],
    "comércio": ["mercado", "negócio", "venda", "compra e venda", "atividade mercantil", "transação comercial", "intercâmbio", "varejo", "atacado", "empresa"],
    "comestíveis": ["alimentícios", "nutritivos", "ingeríveis", "comíveis", "próprios para consumo", "alimentares", "manjares", "víveres", "mantimentos", "guloseimas"],
    "cometerão": ["praticarão", "realizarão", "executarão", "efetuarão", "perpetrarão", "incidirão", "incorrerão", "farão", "consumarão", "desencadearão"],
    "cometido": ["praticado", "realizado", "executado", "efetuado", "perpetrado", "incidido", "incorridido", "feito", "consumado", "desencadeado"],
    "comichão": ["coceira", "prurido", "picada", "irritação cutânea", "formigamento", "esgueiramento", "sensação de picada", "começo de algo", "inquietação", "nervosismo"],
    "comicidade": ["humor", "graça", "divertimento", "engraçado", "hilário", "burlesco", "cômico", "palhaçada", "farsa", "sátira"],
    "cômico": ["engraçado", "divertido", "hilário", "burlesco", "satírico", "farsesco", "ridículo", "chistoso", "jocoso", "palhaço"],
    "comida": ["alimento", "manjar", "refeição", "víveres", "mantimentos", "iguaria", "prato", "nutrição", "sustento", "banquete"],
    "comigo": ["junto a mim", "em minha companhia", "para mim", "a meu lado", "conosco (em sentido figurado)", "em meu poder", "sob meus cuidados", "em minha opinião", "por minha causa", "para o meu bem"],
    "cominação": ["ameaça", "intimidação", "advertência", "sanção prevista", "pena estabelecida", "imposição", "prescrição", "determinação legal", "aviso solene", "ameaça de punição"],
    "cominar": ["impor pena", "aplicar sanção", "prescrever punição", "determinar penalidade", "ameaçar legalmente", "estipular castigo", "sentenciar", "taxar", "multar", "autuar"],
    "comiseração": ["piedade", "compaixão", "pena", "dó", "misericórdia", "humanidade", "indulgência", "sensibilidade", "solidariedade", "empatia"],
    "comissão": ["grupo de trabalho", "delegação", "encargo", "tarefa", "percentual", "taxa", "remuneração por venda", "corretagem", "representação", "autorização"],
    "comissionado": ["encarregado", "delegado", "autorizado", "designado", "nomeado", "contratado por comissão", "remunerado por vendas", "representante", "procurador", "agente"],
    "comissura": ["junção", "costura", "ligação", "ponto de encontro", "ângulo", "interseção", "fissura", "abertura", "união de bordas", "convergência"],
    "comitiva": ["cortejo", "séquito", "comitiva", "acompanhamento", "comitiva", "comitiva", "comitiva", "comitiva", "comitiva", "comitiva"],
    "como": ["de que modo", "de que maneira", "qual", "assim como", "tal qual", "conforme", "enquanto", "já que", "visto que", "a exemplo de"],
    "comoção": ["emoção forte", "perturbação", "abalo emocional", "sensibilidade", "exaltação", "turbação", "agitação", "êxtase", "arrebatamento", "impacto emocional"],
    "comodidade": ["conforto", "bem-estar", "facilidade", "conveniência", "praticidade", "acesso fácil", "ausência de incômodo", "moleza", "preguiça", "ociosidade"],
    "comodismo": ["inércia", "passividade", "preguiça", "indolência", "apatia", "falta de iniciativa", "acomodação", "estagnação", "resignação", "conformismo"],
    "cômodo": ["confortável", "agradável", "conveniente", "prático", "espaçoso", "folgado", "acessível", "desimpedido", "oportuno", "adequado"],
    "comorbidade": ["doenças associadas", "condições médicas coexistentes", "múltiplas patologias", "associação de doenças", "quadro clínico complexo", "doenças concomitantes", "patologias interligadas", "morbidade associada", "condições de saúde relacionadas", "complicações médicas"],
    "comover": ["emocionar", "sensibilizar", "tocar", "impressionar", "afetar", "perturbar", "abalroar emocionalmente", "despertar a sensibilidade", "mover o coração", "enternecer"],
    "compacto": ["denso", "apertado", "unido", "sólido", "macio", "reduzido", "pequeno", "portátil", "conciso", "resumido"],
    "compactuar": ["pactuar", "acordar", "concordar", "alinhar-se", "associar-se", "unir-se em acordo", "aderir a um pacto", "firmar compromisso", "entrar em conluio", "fazer aliança"],
    "compadecer": ["ter pena", "sentir compaixão", "condoer-se", "lastimar", "lamentar", "padecer junto", "solidarizar-se", "ter dó", "apiadar-se", "sensibilizar-se"],
    "compadre": ["padrinho de batismo ou casamento em relação aos pais do afilhado", "amigo íntimo", "vizinho", "colega", "parceiro", "confidente", "aliado", "testemunha", "participante", "interlocutor"],
    "compaixão": ["piedade", "dó", "pena", "misericórdia", "solidariedade", "empatia", "sensibilidade", "humanidade", "indulgência", "clemência"],
    "companheirismo": ["camaradagem", "solidariedade", "amizade", "lealdade", "união", "cooperação", "harmonia", "fraternidade", "confraternização", "espírito de equipe"],
    "companheiro": ["camarada", "amigo", "colega", "parceiro", "sócio", "consorte", "aliado", "cúmplice", "acompanhante", "camarada de trabalho"],
    "companhia": ["sociedade", "firma", "associação", "grupo", "parceria", "seguimento", "presença", "ajuda", "apoio", "comitiva"],
    "comparação": ["cotejo", "confronto", "paralelo", "semelhança", "analogia", "contraste", "distinção", "aproximação", "equiparação", "correlação"],
    "comparar": ["cotejar", "confrontar", "paralelar", "assemelhar", "contrastar", "distinguir", "aproximar", "equiparar", "correlacionar", "semelhar"],
    "comparecer": ["apresentar-se", "estar presente", "ir", "vir", "mostrar-se", "fazer-se presente", "assistir", "participar", "ocorrer", "aparecer"],
    "comparecerão": ["apresentar-se-ão", "estarão presentes", "irão", "virão", "mostrar-se-ão", "farão-se presentes", "assistirão", "participarão", "ocorrerão", "aparecerão"],
    "comparência": ["comparecimento", "presença", "ato de comparecer", "aparição", "presença física", "ato de apresentar-se", "assistência", "participação", "ocorrência", "manifestação"],
    "comparsa": ["cúmplice", "partícipe", "auxiliar", "ajudante", "colaborador", "figurante", "ator secundário", "manequim", "testemunha de fachada", "elemento de apoio"],
    "compartilhamento": ["divisão", "distribuição", "partilha", "socialização", "troca", "comunicação", "divulgação", "transferência", "intercâmbio", "repartição"],
    "compartilhar": ["dividir", "distribuir", "partilhar", "socializar", "trocar", "comunicar", "divulgar", "transferir", "intercambiar", "repartir"],
    "compassivo": ["piedoso", "misericordioso", "clemente", "benigno", "indulgente", "humano", "sensível", "solidário", "empático", "caridoso"],
    "compatibilidade": ["harmonia", "concordância", "adequação", "afinidade", "consonância", "encaixe", "adaptação", "coexistência", "afinidade", "congruência"],
    "compatível": ["harmônico", "concordante", "adequado", "afim", "consonante", "encaixável", "adaptável", "coexistente", "afinado", "congruente"],
    "compatrício": ["conterrâneo", "concidadão", "natural do mesmo país", "patrício", "nacional", "indígena", "habitante da mesma pátria", "cidadão da mesma nação", "conprovinciano", "conterrâneo"],
    "compatriota": ["conterrâneo", "concidadão", "natural do mesmo país", "patrício", "nacional", "indígena", "habitante da mesma pátria", "cidadão da mesma nação", "conprovinciano", "conterrâneo"],
    "compelido": ["forçado", "obrigado", "coagido", "constrangido", "induzido", "impelido", "levado a", "necessitado", "determinado", "instigado"],
    "compelir": ["forçar", "obrigar", "coagir", "constranger", "induzir", "impelir", "levar a", "necessitar", "determinar", "instigar"],
    "compêndio": ["resumo", "sinopse", "manual", "guia", "epítome", "sumário", "coletânea", "antologia", "repertório", "síntese"],
    "compenetrado": ["concentrado", "absorvido", "imerso", "atento", "focado", "dedicado", "aplicado", "consciente", "perspicaz", "intuitivo"],
    "compensação": ["indenização", "reparação", "ressarcimento", "recompensa", "equilíbrio", "contrabalanço", "satisfação", "remissão", "atenuação", "suprimento"],
    "compensar": ["indenizar", "reparar", "ressarcir", "recompensar", "equilibrar", "contrabalançar", "satisfazer", "remir", "atenuar", "suprir"],
    "competência": ["capacidade", "habilidade", "aptidão", "idoneidade", "qualificação", "atribuição", "jurisdição", "autoridade", "mérito", "eficácia"],
    "competente": ["capaz", "hábil", "apto", "idôneo", "qualificado", "eficiente", "destro", "experiente", "autorizado", "jurisdicionado"],
    "competição": ["disputa", "concorrência", "certame", "torneio", "prova", "justa", "lide", "peleja", "emulação", "rivalidade"],
    "compilação": ["reunião", "ajuntamento", "coletânea", "antologia", "repertório", "síntese", "aglomeração", "coleção", "inventário", "catálogo"],
    "compilado": ["reunido", "ajuntado", "coletado", "antologizado", "repertoriado", "sintetizado", "aglomerado", "colecionado", "inventariado", "catalogado"],
    "compilar": ["reunir", "ajuntar", "coletar", "antologizar", "repertoriar", "sintetizar", "aglomerar", "colecionar", "inventariar", "catalogar"],
    "complacência": ["leniência", "indulgência", "tolerância", "condescendência", "benevolência", "bondade", "suavidade", "paciência", "acatamento", "concordância"],
    "complacente": ["leniente", "indulgente", "tolerante", "condescendente", "benevolente", "bom", "suave", "paciente", "acatador", "concordante"],
    "compleição": ["aparência física", "porte", "estrutura corporal", "físico", "constituição", "formato do corpo", "aspecto", "figura", "talhe", "conformação"],
    "complementar": ["adicional", "suplementar", "extra", "subsidiário", "de reforço", "de apoio", "de acréscimo", "de preenchimento", "de conclusão", "integrador"],
    "complemento": ["adição", "suplemento", "extra", "reforço", "apoio", "acréscimo", "preenchimento", "conclusão", "integração", "apêndice"],
    "completado": ["acabado", "finalizado", "concluído", "terminado", "ultimado", "rematado", "aperfeiçoado", "integralizado", "totalizado", "preenchido"],
    "completo": ["inteiro", "total", "integral", "acabado", "finalizado", "concluído", "terminado", "ultimado", "rematado", "perfeito"],
    "completude": ["inteireza", "totalidade", "integralidade", "perfeição", "plenitude", "acabamento", "finalização", "conclusão", "ultimidade", "remate"],
    "complexa": ["complicada", "intrincada", "labiríntica", "sofisticada", "elaborada", "enredada", "multiforme", "diversificada", "heterogênea", "sutil"],
    "complexidade": ["dificuldade", "intriga", "labirinto", "sofisticação", "elaboração", "enredo", "multiplicidade", "diversidade", "heterogeneidade", "sutileza"],
    "complexo": ["complicado", "intrincado", "labiríntico", "sofisticado", "elaborado", "enredado", "multiforme", "diverso", "heterogêneo", "sutil"],
    "complicado": ["complexo", "intrincado", "difícil", "embaraçoso", "enredado", "problemático", "confuso", "obscuro", "sinuoso", "tortuoso"],
    "complô": ["conspiração", "intriga", "maquinação", "trama", "conluio", "conjuração", "cabala", "armação", "segredo", "plano secreto"],
    "compõe": ["constitui", "forma", "integra", "cria", "elabora", "redige", "estrutura", "organiza", "harmoniza", "mistura"],
    "componente": ["elemento", "parte", "integrante", "fator", "constituinte", "item", "pedaço", "segmento", "membro", "ingrediente"],
    "componentes": ["elementos", "partes", "integrantes", "fatores", "constituintes", "itens", "pedaços", "segmentos", "membros", "ingredientes"],
    "compor": ["constituir", "formar", "integrar", "criar", "elaborar", "redigir", "estruturar", "organizar", "harmonizar", "misturar"],
    "comporemos": ["constituiremos", "formaremos", "integraremos", "criaremos", "elaboraremos", "redigiremos", "estruturaremos", "organizaremos", "harmonizaremos", "misturaremos"],
    "comporta": ["permite", "admite", "tolera", "possibilita", "condiz", "adequa-se", "encaixa", "revela", "denota", "demonstra"],
    "comportamento": ["conduta", "procedimento", "atitude", "maneira de agir", "porte", "modos", "reação", "ação", "proceder", "conduta social"],
    "comportar": ["portar-se", "proceder", "agir", "conduzir-se", "reagir", "manter-se", "tolerar", "admitir", "permitir", "condizer"],
    "comportaremos": ["portar-nos-emos", "procederemos", "agiremos", "conduzir-nos-emos", "reagiremos", "manter-nos-emos", "toleraremos", "admitiremos", "permitiremos", "condizeremos"],
    "composição": ["estrutura", "formação", "constituição", "arranjo", "organização", "feitura", "obra", "criação", "redação", "mistura"],
    "compósito": ["misto", "híbrido", "combinado", "aglomerado", "misturado", "constituído de partes diversas", "não homogêneo", "complexo", "heterogêneo", "aglutinado"],
    "composto": ["formado", "constituído", "feito", "elaborado", "misturado", "combinado", "complexo", "híbrido", "aglomerado", "organizado"],
    "compostura": ["seriedade", "gravidade", "decência", "dignidade", "moderação", "respeito", "circunspeção", "sobriedade", "decoro", "equilíbrio"],
    "comprador": ["adquirente", "cliente", "consumidor", "freguês", "usuário", "contratante", "arrematante", "investidor", "sacador", "negociador"],
    "compraz": ["agrada", "satisfaz", "deleita", "apraza", "contenta", "diverte", "regozija", "anima", "alegra", "satisfaz"],
    "comprazer": ["agradar", "satisfazer", "deleitar", "aprazer", "contentar", "divertir", "regozijar", "animar", "alegrar", "satisfazer os desejos de"],
    "comprazo": ["agrado", "satisfação", "deleite", "prazer", "contentamento", "diversão", "regozijo", "animação", "alegria", "satisfação"],
    "compreender": ["entender", "captar", "perceber", "interpretar", "abarcar", "atingir", "discernir", "atingir a significação de", "assimilar", "apreender"],
    "compreender-se": ["entender-se", "fazer-se entender", "ser compreendido", "dar-se a entender", "entender um ao outro", "comunicar-se eficazmente", "ser claro", "explicar-se bem", "fazer-se claro", "ser inteligível"],
    "compreendessem": ["entendessem", "captassem", "percebessem", "interpretassem", "abarcassem", "atingissem", "discernissem", "assimilassem", "apreendessem", "atingissem a significação de"],
    "compreendiamos": ["entendíamos", "captávamos", "percebíamos", "interpretávamos", "abarcávamos", "atingíamos", "discerníamos", "assimilação", "apreendíamos", "atingíamos a significação de"],
    "compreendido": ["entendido", "captado", "percebido", "interpretado", "abarcado", "atingido", "discernido", "assimilado", "apreendido", "atingido a significação de"],
    "compreensão": ["entendimento", "captação", "percepção", "interpretação", "discernimento", "assimilação", "apreensão", "tolerância", "paciência", "benevolência"],
    "compreensível": ["entendível", "inteligível", "claro", "explícito", "fácil de entender", "acessível", "palpável", "evidente", "manifesto", "óbvio"],
    "compreensivo": ["tolerante", "paciente", "benevolente", "indulgente", "clemente", "sensível", "solidário", "empático", "atencioso", "considerado"],
    "comprida": ["longa", "extensa", "prolongada", "dilatada", "corrida", "alongada", "esticada", "imensa", "vasta", "demorada"],
    "comprido": ["longo", "extenso", "prolongado", "dilatado", "corrido", "alongado", "esticado", "imenso", "vasto", "demorado"],
    "comprimento": ["extensão", "longura", "tamanho", "dimensão longitudinal", "distância", "alcance", "prolongamento", "duração", "magnitude", "imensidão"],
    "comprobatório": ["probatório", "demonstrativo", "evidencial", "confirmador", "testemunhal", "documental", "de prova", "que comprova", "que atesta", "que evidencia"],
    "comprometer": ["obrigar", "vincular", "empenhar", "arriscar", "prejudicar", "deteriorar", "indispor", "envolver", "implicar", "comprometer-se"],
    "comprometido": ["obrigado", "vinculado", "empenhado", "arriscaçado", "prejudicado", "deteriorado", "indisposto", "envolvido", "implicado", "comprometido"],
    "comprometimento": ["dedicação", "empenho", "responsabilidade", "obrigação", "vínculo", "envolvimento", "adesão", "lealdade", "fidelidade", "compromisso"],
    "compromissado": ["comprometido", "obrigado", "vinculado", "empenhado", "responsável", "dedicado", "aplicado", "leal", "fiel", "envolvido"],
    "compromisso": ["obrigação", "vínculo", "acordo", "pacto", "promessa", "palavra dada", "responsabilidade", "empenho", "dedicação", "tarefa"],
    "compulsoriamente": ["obrigatoriamente", "forçosamente", "necessariamente", "inevitavelmente", "por obrigação", "por força de lei", "sem escolha", "inexoravelmente", "impreterivelmente", "coativamente"],
    "compulsório": ["obrigatório", "forçoso", "necessário", "imposto", "coercitivo", "mandatório", "regulamentar", "legal", "estatutário", "prescrito"],
    "compungido": ["arrependido", "contrito", "penitente", "remorso", "aflito", "triste", "magoado", "pesaroso", "humilhado", "consternado"],
    "compusemos": ["constituímos", "formamos", "integramos", "criamos", "elaboramos", "redigimos", "estruturamos", "organizamos", "harmonizamos", "misturamos"],
    "cômputo": ["cálculo", "conta", "avaliação", "estimativa", "total", "resultado", "apuração", "contagem", "computação", "mensuração"],
    "comum": ["usual", "frequente", "habitual", "vulgar", "ordinário", "público", "coletivo", "geral", "compartilhado", "corriqueiro"],
    "comumente": ["usualmente", "frequentemente", "habitualmente", "vulgarmente", "ordinariamente", "geralmente", "normalmente", "correntemente", "de modo comum", "em geral"],
    "comuna": ["município", "cidade", "aglomeração urbana", "coletividade", "comunidade", "autogestão", "sistema comunal", "experiência coletiva", "grupo social", "organização social"],
    "comungar": ["participar da comunhão", "receber a eucaristia", "unir-se espiritualmente", "compartilhar sentimentos", "identificar-se", "simpatizar", "concordar", "aderir", "participar", "associar-se"],
    "comunhão": ["eucaristia", "união espiritual", "harmonia", "concordância", "participação comum", "compartilhamento", "associação", "fraternidade", "intimidade", "estreitamento de laços"],
    "comunicação": ["transmissão", "informação", "notícia", "mensagem", "contato", "diálogo", "conversa", "intercâmbio", "aviso", "notificação"],
    "comunicar": ["informar", "notificar", "avisar", "transmitir", "participar", "dialogar", "conversar", "contactar", "revelar", "expressar"],
    "comunicar-se": ["falar", "dialogar", "conversar", "entrar em contato", "expressar-se", "fazer-se entender", "interagir", "trocar informações", "dar notícias", "estabelecer comunicação"],
    "comunicará": ["informará", "notificará", "avisará", "transmitirá", "participará", "dialogará", "conversará", "contactará", "revelará", "expressará"],
    "comunicável": ["transmissível", "informável", "notificável", "avisável", "participável", "dialogável", "conversável", "contactável", "revelável", "expressável"],
    "comunidade": ["coletividade", "grupo", "sociedade", "aglomeração", "povo", "nação", "conjunto de pessoas", "vizinhança", "meio social", "grupo com interesses comuns"],
    "comunismo": ["socialismo radical", "sistema político-econômico sem classes", "doutrina marxista-leninista", "igualitarismo social", "coletivismo", "propriedade comum dos meios de produção", "sociedade sem estado", "utopia socialista", "movimento revolucionário", "ideologia política"],
    "comutar": ["trocar", "permutar", "substituir", "alternar", "converter", "modificar", "transferir", "deslocar", "mudar", "transformar"],
    "concatenado": ["ligado", "unido", "encadeado", "conectado", "interligado", "sequencial", "seguido", "relacionado", "vinculado", "associado"],
    "concatenar": ["ligar", "unir", "encadear", "conectar", "interligar", "sequenciar", "seguir", "relacionar", "vincular", "associar"],
    "côncavo": ["curvo para dentro", "escavado", "oco", "inflexionado", "reentrante", "cavado", "deprimido", "afundado", "sinuoso para dentro", "em forma de concha"],
    "conceber": ["imaginar", "criar", "idealizar", "formular", "gerar", "engravidar", "compreender", "entender", "perceber", "captar"],
    "concebido": ["imaginado", "criado", "idealizado", "formulado", "gerado", "engravidado", "compreendido", "entendido", "percebido", "captado"],
    "concedente": ["outorgante", "cedente", "transferidor", "doador", "benfeitor", "aquele que concede", "que atribui", "que permite", "que autoriza", "que faculta"],
    "conceder": ["outorgar", "ceder", "transferir", "doar", "permitir", "autorizar", "facultar", "atribuir", "deferir", "aprovar"],
    "concedido": ["outorgado", "cedido", "transferido", "doado", "permitido", "autorizado", "facultado", "atribuído", "deferido", "aprovado"],
    "conceito": ["noção", "ideia", "definição", "significado", "entendimento", "compreensão", "opinião", "julgamento", "avaliação", "imagem"],
    "conceituado": ["renomado", "prestigiado", "famoso", "notável", "reconhecido", "bem avaliado", "de boa reputação", "ilustre", "eminente", "distinto"],
    "conceitual": ["teórico", "abstrato", "ideal", "intelectual", "mental", "imaginário", "especulativo", "filosófico", "doutrinário", "ideológico"],
    "conceituar": ["definir", "explicar o conceito de", "formular o conceito de", "interpretar", "caracterizar", "qualificar", "determinar o significado de", "elucidar", "esclarecer", "delimitar"],
    "concelho": ["município (Portugal)", "câmara municipal", "administração local", "autarquia", "território municipal", "comuna", "vila", "cidade", "distrito administrativo", "poder local"],
    "concentração": ["aglomeração", "reunião", "foco", "atenção", "intensidade", "densidade", "acumulação", "centralização", "aglutinação", "adensamento"],
    "concentrado": ["aglomerado", "reunido", "focado", "atento", "intenso", "denso", "acumulado", "centralizado", "aglutinado", "adensado"],
    "concentrar": ["aglomerar", "reunir", "focar", "atentar", "intensificar", "densificar", "acumular", "centralizar", "aglutinar", "adensar"],
    "concêntrico": ["com o mesmo centro", "centralizado", "em círculos com o mesmo ponto central", "axial", "radial", "comum ao centro", "que converge para o centro", "que irradia do centro", "de centro comum", "homocêntrico"],
    "concepção": ["ideia", "noção", "entendimento", "compreensão", "formação", "criação", "geração", "início", "começo", "projeto"],
    "concerne": ["diz respeito a", "refere-se a", "toca a", "interessa a", "relaciona-se com", "pertence a", "é sobre", "envolve", "afeta", "atinge"],
    "concernente": ["referente a", "relativo a", "pertinente a", "respeitante a", "tocante a", "interessante a", "relacionado com", "envolvendo", "afetando", "atingindo"],
    "concertar": ["ajustar", "harmonizar", "combinar", "acertar", "restaurar", "reparar", "afinar (instrumento)", "organizar", "planejar", "marcar encontro"],
    "concerto": ["espetáculo musical", "apresentação musical", "recital", "audição", "serenata", "harmonia", "acordo", "ajuste", "combinação", "concordância"],
    "concessão": ["outorga", "permissão", "autorização", "licença", "privilégio", "cessão", "transferência", "deferimento", "aprovação", "benefício"],
    "concessionária": ["empresa concessionária", "detentora de concessão", "exploradora de serviço público", "arrendatária", "licenciada", "autorizada", "permissionária", "empresa que opera sob concessão", "empresa beneficiada por concessão", "entidade outorgada"],
    "concessivo": ["que concede", "que permite", "que autoriza", "que licencia", "que outorga", "que cede", "que transfere", "que defere", "que aprova", "que beneficia"],
    "concessões": ["outorgas", "permissões", "autorizações", "licenças", "privilégios", "cessões", "transferências", "deferimentos", "aprovações", "benefícios"],
    "conchavo": ["acordo secreto", "combinação oculta", "intriga", "conluio", "trama", "maquinação", "panelinha", "segredo", "pacto secreto", "entendimento dissimulado"],
    "concidadão": ["compatriota", "conterrâneo", "natural da mesma cidade", "cidadão da mesma nação", "habitante da mesma cidade", "vizinho", "munícipe", "conprovinciano", "congenere", "confrade"],
    "conciliar": ["harmonizar", "ajustar", "compatibilizar", "reconciliar", "apaziguar", "resolver", "mediar", "arbitrar", "combinar", "unir"],
    "conciliável": ["harmonizável", "ajustável", "compatibilizável", "reconciliável", "apaziguável", "resolvível", "mediável", "arbitrável", "combinável", "unível"],
    "concisa": ["breve", "sucinta", "lacônica", "resumida", "sintética", "compacta", "sumária", "abreviada", "epigramática", "direta"],
    "concisão": ["brevidade", "sucintez", "laconismo", "resumo", "síntese", "compactação", "sumário", "abreviação", "epigrama", "direção"],
    "conciso": ["breve", "sucinto", "lacônico", "resumido", "sintético", "compacto", "sumário", "abreviado", "epigramático", "direto"],
    "conclamar": ["convocar", "chamar", "invocar", "exortar", "incitar", "estimular", "desafiar", "clamar", "reunir", "congregar"],
    "conclave": ["reunião secreta", "assembleia restrita", "encontro confidencial", "colégio cardinalício (para eleição papal)", "câmara secreta", "reunião privada", "encontro fechado", "assembleia privada", "concílio", "sínodo"],
    "concludente": ["conclusivo", "decisivo", "definitivo", "irrefutável", "inegável", "prova cabal", "que conclui", "que decide", "que finaliza", "que prova"],
    "concluído": ["finalizado", "terminado", "acabado", "ultimado", "rematado", "findo", "cerrado", "completado", "resolvido", "decidido"],
    "concluimento": ["conclusão", "finalização", "término", "acabamento", "ultimato", "remate", "fim", "completamento", "resolução", "decisão"],
    "concluímos": ["finalizamos", "terminamos", "acabamos", "ultimamos", "rematamos", "findamos", "cerramos", "completamos", "resolvemos", "decidimos"],
    "concluir": ["finalizar", "terminar", "acabar", "ultimar", "rematar", "findar", "cerrar", "completar", "resolver", "decidir"],
    "conclusão": ["final", "término", "acabamento", "ultimato", "remate", "fim", "fecho", "desfecho", "dedução", "inferência"],
    "concomitância": ["simultaneidade", "coincidência", "concorrência", "concomitamento", "presença simultânea", "ocorrência ao mesmo tempo", "simultaneidade de eventos", "coexistência", "justaposição temporal", "sincronia"],
    "concomitante": ["simultâneo", "coincidente", "concorrente", "concomitado", "que ocorre ao mesmo tempo", "que acompanha", "simultâneo", "justaposto temporalmente", "síncrono", "paralelo"],
    "concomitantemente": ["simultaneamente", "ao mesmo tempo", "conjuntamente", "em paralelo", "concomitantemente", "sincronicamente", "em simultâneo", "ao mesmo passo", "em uníssono temporal", "juntamente com"],
    "concordância": ["acordo", "aprovação", "consentimento", "anuência", "consonância", "harmonia", "conformidade", "adesão", "aceitação", "unanimidade"],
    "concordar": ["acatar", "aprovar", "consentir", "anuir", "harmonizar", "conformar-se", "aderir", "aceitar", "assentir", "estar de acordo"],
    "concordávamos": ["acatávamos", "aprovávamos", "consentíamos", "anuíamos", "harmonizávamos", "conformávamo-nos", "aderíamos", "aceitávamos", "assentíamos", "estávamos de acordo"],
    "concórdia": ["harmonia", "paz", "entendimento", "acordo", "unidade", "fraternidade", "boa vontade", "consenso", "afinidade", "solidariedade"],
    "concretizado": ["realizado", "efetuado", "materializado", "efetivado", "tornado real", "executado", "cumprido", "posto em prática", "corporificado", "palpável"],
    "concretizar": ["realizar", "efetuar", "materializar", "efetivar", "tornar real", "executar", "cumprir", "pôr em prática", "corporificar", "palpar"],
    "concreto": ["real", "efetivo", "material", "palpável", "tátil", "físico", "específico", "definido", "preciso", "sólido"],
    "concubina": ["amante", "amásia", "barriga de aluguel (obsoleto)", "segunda esposa (em algumas culturas)", "companheira", "concubina", "concubina", "concubina", "concubina", "concubina"],
    "concupiscência": ["luxúria", "lascívia", "volúpia", "sensualidade excessiva", "desejo carnal intenso", "libido", "apetite sexual desordenado", "erotismo", "ninfomania (feminino)", "satiromania (masculino)"],
    "condão": ["dom", "talento", "virtude", "poder mágico", "faculdade extraordinária", "atributo especial", "qualidade inata", "dádiva", "graça", "capacidade incomum"],
    "condecorado": ["agraciado", "premiado", "laureado", "distinguido", "honrado", "insigniado", "galardoado", "reconhecido", "homenageado", "titulado"],
    "condensado": ["resumido", "sinóptico", "abreviado", "compacto", "sumário", "epítome", "concentrado", "reduzido", "lacônico", "sintético"],
    "condensar": ["resumir", "abreviar", "compactar", "sumariar", "concentrar", "reduzir", "sintetizar", "epilogar", "estreitar", "adensar"],
    "condescendência": ["tolerância", "indulgência", "complacência", "benevolência", "bondade", "suavidade", "paciência", "arrogância (conforme o contexto)", "superioridade", "altivez"],
    "condescendente": ["tolerante", "indulgente", "complacente", "benevolente", "bom", "suave", "paciente", "arrogante (conforme o contexto)", "superior", "altivo"],
    "condição": ["estado", "situação", "termo", "requisito", "circunstância", "natureza", "índole", "qualidade", "posição social", "estado de saúde"],
    "condicionado": ["dependente", "sujeito a", "influenciado", "determinado", "habituado", "acostumado", "limitado", "restrito", "preparado", "treinado"],
    "condicional": ["hipotético", "incerto", "eventual", "sujeito a condição", "dependente de", "não absoluto", "contingente", "problemático", "duvidoso", "reservado"],
    "condicionamento": ["aprendizagem", "habitação", "adestramento", "preparação", "treinamento", "influência", "determinação", "controle", "adaptação", "acostumação"],
    "condicionar": ["influenciar", "determinar", "restringir", "limitar", "habituar", "acostumar", "preparar", "treinar", "sujeitar a condição", "depender de"],
    "condições": ["estados", "situações", "termos", "requisitos", "circunstâncias", "naturezas", "índoles", "qualidades", "posições sociais", "estados de saúde"],
    "condigamos": ["combinemos", "harmonizemos", "ajustemos", "correspondamos", "sejam adequados", "estejamos à altura", "mereçamos", "façamos jus", "estejamos em nível", "sejamos dignos"],
    "condiz": ["combina", "harmoniza", "ajusta-se", "corresponde", "é adequado", "está à altura", "merece", "faz jus", "está em nível", "é digno"],
    "condizente": ["compatível", "adequado", "próprio", "conveniente", "correspondente", "harmonioso", "congruente", "proporcional", "merecedor", "digno"],
    "condoído": ["compadecido", "penalizado", "misericordioso", "sensível", "solidário", "compassivo", "aflito", "triste", "magoado", "pesaroso"],
    "condolência": ["pesar", "luto", "sentimento", "comiseração", "pêsames", "conforto", "solidariedade na dor", "manifestação de tristeza", "apoio no sofrimento", "palavras de consolo"],
    "condolências": ["pêsames", "sentimentos", "pesar", "luto", "comiserações", "confortos", "solidariedades na dor", "manifestações de tristeza", "apoios no sofrimento", "palavras de consolo"],
    "conduta": ["comportamento", "procedimento", "atitude", "maneira de agir", "porte", "modos", "reação", "ação", "proceder", "conduta social"],
    "conduzido": ["guiado", "liderado", "dirigido", "orientado", "transportado", "levado", "encaminhado", "pilotado", "manejado", "administrado"],
    "conduzir": ["guiar", "liderar", "dirigir", "orientar", "transportar", "levar", "encaminhar", "pilotar", "manejar", "administrar"],
    "conectado": ["ligado", "unido", "interligado", "associado", "relacionado", "vinculado", "integrado", "em rede", "on-line", "comunicando-se"],
    "conectar-se": ["ligar-se", "unir-se", "interligar-se", "associar-se", "relacionar-se", "vincular-se", "integrar-se", "entrar na rede", "ficar on-line", "estabelecer comunicação"],
    "cônego": ["membro do cabido", "eclesiástico", "clérigo", "sacerdote", "religioso", "prelado", "dignitário eclesiástico", "canonista", "capelão", "vigário"],
    "conexão": ["ligação", "união", "interligação", "associação", "relação", "vínculo", "elo", "nexo", "elo de ligação", "comunicação"],
    "confecção": ["fabricação", "produção", "feitura", "elaboração", "criação", "manufatura", "feitura manual", "feitura industrial", "feitura artesanal", "feitura sob medida"],
    "confeccionar": ["fabricar", "produzir", "fazer", "elaborar", "criar", "manufaturar", "fazer manualmente", "fazer industrialmente", "fazer artesanalmente", "fazer sob medida"],
    "confeccionarão": ["fabricarão", "produzirão", "farão", "elaborarão", "criarão", "manufaturarão", "farão manualmente", "farão industrialmente", "farão artesanalmente", "farão sob medida"],
    "confeccionarem": ["fabricarem", "produzirem", "fizerem", "elaborarem", "criarem", "manufaturarem", "fizerem manualmente", "fizerem industrialmente", "fizerem artesanalmente", "fizerem sob medida"],
    "confeccionasse": ["fabricasse", "produzisse", "fizesse", "elaborasse", "criasse", "manufaturasse", "fizesse manualmente", "fizesse industrialmente", "fizesse artesanalmente", "fizesse sob medida"],
    "conferência": ["palestra", "seminário", "congresso", "reunião", "encontro", "debate", "verificação", "cotejo", "comparação", "consulta"],
    "conferir": ["verificar", "cotejar", "comparar", "consultar", "atribuir", "outorgar", "conceder", "dar", "presentear", "conceder título"],
    "confessar": ["admitir", "declarar", "revelar", "divulgar", "confiar", "desabafar", "reconhecer culpa", "declarar pecados", "testemunhar fé", "afirmar"],
    "confiança": ["fé", "crença", "segurança", "certeza", "convicção", "esperança", "otimismo", "fidelidade", "lealdade", "apoio"],
    "confiante": ["seguro", "certo", "convicto", "esperançoso", "otimista", "seguro de si", "acreditado", "crente", "fiel", "leal"],
    "confiar": ["acreditar", "crer", "depositar fé", "contar com", "depender de", "entregar-se a", "esperar", "ter certeza", "ter confiança", "apoiar-se"],
    "confiável": ["seguro", "fidedigno", "digno de confiança", "credível", "seguro", "leal", "fiel", "responsável", "sério", "íntegro"],
    "confidencial": ["secreto", "reservado", "privado", "íntimo", "sigiloso", "oculto", "discreto", "restrito", "particular", "incomunicável"],
    "confidente": ["íntimo", "amigo leal", "aquele a quem se confia segredos", "conselheiro", "depositário de segredos", "leal", "fiel", "seguro", "reservado", "discreto"],
    "configuração": ["formato", "estrutura", "disposição", "arranjo", "organização", "ajuste", "definição", "sistema", "modelo", "aparência"],
    "configurar": ["ajustar", "definir", "programar", "organizar", "estruturar", "dispor", "formatar", "estabelecer", "moldar", "ordenar"],
    "confinado": ["isolado", "recluso", "encerrado", "preso", "detido", "limitado", "restrito", "segregado", "claustrado", "encurralado"],
    "confinamento": ["isolamento", "reclusão", "encarceramento", "prisão", "detenção", "limitação", "restrição", "segregação", "clausura", "cerco"],
    "confirmar": ["ratificar", "assegurar", "comprovar", "validar", "atestar", "certificar", "firmar", "reforçar", "sustentar", "corroborar"],
    "conflito": ["luta", "combate", "guerra", "disputa", "desacordo", "desavença", "oposição", "rixa", "atrito", "embate"],
    "conflituosa": ["problemática", "contenciosa", "tumultuada", "agitada", "discordante", "desarmoniosa", "belicosa", "hostil", "争端的", "conflitiva"],
    "confluência": ["encontro", "junção", "convergência", "foz", "união de rios", "ajuntamento", "aglomeração", "coincidência", "interseção", "ponto de encontro"],
    "conformação": ["formato", "estrutura", "configuração", "disposição", "arranjo", "adaptação", "ajuste", "modelagem", "conformidade", "adequação"],
    "conformado": ["resignado", "submisso", "acomodado", "adaptado", "ajustado", "modelado", "habituado", "acostumado", "em conformidade", "de acordo"],
    "conformar": ["adaptar", "ajustar", "modelar", "habituar", "acostumar", "resignar-se", "submeter-se", "acomodar-se", "estar em conformidade", "estar de acordo"],
    "conforme": ["segundo", "de acordo com", "como", "tal qual", "em conformidade com", "em consonância com", "segundo o modelo de", "na forma de", "à semelhança de", "análogo a"],
    "conformidade": ["acordo", "concordância", "harmonia", "consonância", "adequação", "ajuste", "semelhança", "analogia", "regularidade", "observância"],
    "conformismo": ["acomodação", "resignação", "passividade", "submissão", "aceitação tácita", "falta de iniciativa", "conservadorismo", "manutenção do status quo", "adesão às normas", "acatamento sem questionamento"],
    "confortável": ["agradável", "cómodo", "aconchegante", "acolhedor", "aprazível", "satisfatório", "repousante", "fácil", "prático", "conveniente"],
    "conforto": ["bem-estar", "comodidade", "aconchego", "repouso", "alívio", "satisfação", "prazer", "facilidade", "conveniência", "apoio"],
    "confrade": ["membro de confraria", "irmão", "companheiro", "colega", "associado", "membro de irmandade", "membro de corporação", "camarada", "parceiro", "igual"],
    "confraria": ["irmandade", "associação", "corporação", "grêmio", "sociedade", "clube", "liga", "união", "agremiação", "comunidade"],
    "confraternização": ["celebração", "festa", "reunião fraterna", "convívio amigável", "estreitamento de laços", "harmonia", "solidariedade", "camaradagem", "congraçamento", "festividade"],
    "confraternizar": ["celebrar junto", "festejar em grupo", "reunir-se fraternalmente", "conviver amigavelmente", "estreitar laços", "harmonizar-se", "solidarizar-se", "congraçar-se", "fraternizar", "socializar"],
    "confrontar": ["encarar", "opor-se", "desafiar", "afrontar", "medir forças", "comparar", "cotejar", "contrastar", "defrontar", "colidir"],
    "confronto": ["enfrentamento", "oposição", "desafio", "afronta", "embate", "luta", "combate", "disputa", "comparação", "cotejo"],
    "confundido": ["baralhado", "misturado", "desorientado", "perplexo", "atônito", "pasmo", "equivocado", "enganado", "desconcertado", "perturbado"],
    "confundir": ["baralhar", "misturar", "desorientar", "perplexar", "atordoar", "pasmar", "equivocar", "enganar", "desconcertar", "perturbar"],
    "confusão": ["desordem", "caos", "tumulto", "bagunça", "mistura", "desorientação", "perplexidade", "equívoco", "engano", "perturbação"],
    "confuso": ["desordenado", "caótico", "tumultuado", "misturado", "desorientado", "perplexo", "atônito", "equivocado", "enganado", "perturbado"],
    "congênere": ["semelhante", "análogo", "afim", "parecido", "similar", "da mesma natureza", "do mesmo gênero", "congênero", "homólogo", "equivalente"],
    "congenérico": ["do mesmo gênero", "afim", "relacionado ao mesmo gênero", "taxonômico", "sistemático", "classificatório", "de mesma categoria", "de mesma espécie (em sentido lato)", "de mesma linhagem", "de mesma família (em sentido lato)"],
    "congeniar": ["simpatizar", "afinar-se", "entender-se bem", "dar-se bem", "harmonizar-se", "ter afinidade", "combinar", "relacionar-se bem", "aproximar-se", "fraternizar"],
    "congênito": ["inato", "hereditário", "de nascimento", "natural", "original", "primordial", "inerente", "próprio", "constitucional", "implantado desde o nascimento"],
    "conglomerado": ["aglomeração", "junção", "mistura", "conjunto", "aglutinamento", "associação", "federação", "complexo", "massa", "acumulação"],
    "congraçaria": ["agraciaría", "favorecería", "reconciliaría", "atrairía", "conquistaría", "ganharía a simpatia de", "tornar-se-ia querido por", "estabelecería boas relações com", "uniría", "harmonizaría"],
    "congratulação": ["parabéns", "felicitação", "cumprimento", "saudação", "elogio", "reconhecimento", "louvor", "agradecimento", "celebração", "votos de sucesso"],
    "congratulações": ["parabéns", "felicitações", "cumprimentos", "saudações", "elogios", "reconhecimentos", "louvores", "agradecimentos", "celebrações", "votos de sucesso"],
    "congratular": ["parabenizar", "felicitar", "cumprimentar", "saudar", "elogiar", "reconhecer", "louvar", "agradecer", "celebrar", "dar os parabéns"],
    "congratulo": ["parabenizo", "felicito", "cumprimento", "saúdo", "elogio", "reconheço", "louvo", "agradeço", "celebro", "dou os parabéns"],
    "congregação": ["assembleia", "reunião", "ajuntamento", "grupo", "comunidade religiosa", "confraria", "irmandade", "sinagoga", "igreja", "seita"],
    "congregar": ["reunir", "ajuntar", "aglomerar", "juntar", "convocar", "atrair", "unir", "associar", "federar", "agrupar"],
    "congruência": ["harmonia", "coerência", "concordância", "adequação", "pertinência", "consonância", "ajuste", "conformidade", "simetria", "proporção"],
    "congruente": ["harmonioso", "coerente", "concordante", "adequado", "pertinente", "consonante", "ajustado", "conforme", "simétrico", "proporcional"],
    "conhecer": ["saber", "ter ciência de", "estar ciente de", "reconhecer", "identificar", "distinguir", "familiarizar-se com", "ter experiência de", "conviver com", "ter contato com"],
    "conhecerão": ["saberão", "terão ciência de", "estarão cientes de", "reconhecerão", "identificarão", "distinguirão", "familiarizar-se-ão com", "terão experiência de", "conviverão com", "terão contato com"],
    "conhecíamos": ["sabíamos", "tínhamos ciência de", "estávamos cientes de", "reconhecíamos", "identificávamos", "distinguíamos", "familiarizávamo-nos com", "tínhamos experiência de", "convivíamos com", "tínhamos contato com"],
    "conhecimento": ["saber", "ciência", "informação", "notícia", "consciência", "noção", "entendimento", "compreensão", "experiência", "erudição"],
    "conivência": ["cumplicidade", "participação", "consentimento tácito", "anuência velada", "vista grossa", "tolerância culposa", "apoio indireto", "omissão conivente", "encobrimento", "colaboração passiva"],
    "conivente": ["cúmplice", "participante", "que consente tacitamente", "que anui veladamente", "que faz vista grossa", "que tolera culpavelmente", "que apoia indiretamente", "omisso conivente", "encobridor", "colaborador passivo"],
    "conjectura": ["suposição", "hipótese", "presunção", "palpite", "teoria", "especulação", "inferência", "dedução", "suposto", "crença"],
    "conjecturar": ["supor", "hipotetizar", "presumir", "palpitar", "teorizar", "especular", "inferir", "deduzir", "imaginar", "suspeitar"],
    "conjetura": ["suposição", "hipótese", "presunção", "palpite", "teoria", "especulação", "inferência", "dedução", "suposto", "crença"],
    "conjugação": ["flexão verbal", "variação verbal", "tabela de verbos", "união", "ligação", "combinação", "pareamento", "acasalamento", "junção", "emparelhamento"],
    "conjugado": ["flexionado (verbo)", "unido", "ligado", "combinado", "pareado", "acasalado", "junto", "emparelhado", "casado", "unido matrimonialmente"],
    "conjugar": ["flexionar (verbo)", "unir", "ligar", "combinar", "parear", "acasalar", "juntar", "emparelhar", "casar", "unir matrimonialmente"],
    "cônjuge": ["esposo", "esposa", "consorte", "parceiro matrimonial", "cônjuge", "cônjuge", "cônjuge", "cônjuge", "cônjuge", "cônjuge"],
    "conjunção": ["ligação", "união", "conexão", "elo", "nexo", "conexo", "adjunção", "acréscimo", "concordância", "convergência"],
    "conjunto": ["grupo", "aglomerado", "coleção", "reunião", "agrupamento", "totalidade", "sistema", "complexo", "série", "combinação"],
    "conjuntos": ["grupos", "aglomerados", "coleções", "reuniões", "agrupamentos", "totalidades", "sistemas", "complexos", "séries", "combinações"],
    "conjuntura": ["situação", "circunstância", "momento", "ocasião", "quadro", "estado", "condição", "contexto", "cenário", "fase"],
    "conjuração": ["conspiração", "intriga", "maquinação", "trama", "conluio", "cabala", "armação", "segredo", "plano secreto", "intentona"],
    "conjurar": ["conspirar", "tramar", "maquinar", "intrigar", "conluiar-se", "invocar", "suplicar", "implorar", "exorcizar", "afastar"],
    "conluio": ["acordo secreto", "combinação oculta", "intriga", "conspiração", "trama", "maquinação", "panelinha", "segredo", "pacto secreto", "entendimento dissimulado"],
    "conosco": ["com nós", "em nossa companhia", "para nós", "a nosso lado", "em nosso poder", "sob nossos cuidados", "em nossa opinião", "por nossa causa", "para o nosso bem", "juntamente conosco"],
    "conotação": ["significado implícito", "sentido figurado", "sugestão", "implicação", "ressonância", "tom", "nuance", "insinuação", "subentendido", "acepção secundária"],
    "conquanto": ["embora", "apesar de", "ainda que", "mesmo que", "posto que", "se bem que", "não obstante", "todavia", "contudo", "no entanto"],
    "conquista": ["vitória", "triunfo", "domínio", "posse", "aquisição", "obtenção", "ganho", "sucesso", "realização", "feito"],
    "conquistar": ["vencer", "triunfar", "dominar", "apoderar-se de", "adquirir", "obter", "ganhar", "atrair", "seduzir", "cativar"],
    "consagração": ["dedicação", "santificação", "bênção", "investidura", "reconhecimento", "glorificação", "homenagem", "canonização", "solenização", "ritualização"],
    "consagrado": ["dedicado", "santificado", "abençoado", "investido", "reconhecido", "glorificado", "homenageado", "canonizado", "solenizado", "ritualizado"],
    "consagrar": ["dedicar", "santificar", "abençoar", "investir", "reconhecer", "glorificar", "homenagear", "canonizar", "solenizar", "ritualizar"],
    "consciência": ["percepção", "noção", "discernimento", "juízo moral", "escrúpulo", "mente", "intelecto", "autoconsciência", "estado de vigília", "responsabilidade moral"],
    "consciencialização": ["ato de tornar consciente", "despertar da consciência", "tomada de consciência", "sensibilização", "esclarecimento", "informação", "educação para a consciência", "processo de conscientizar", "elevação da consciência", "desenvolvimento da consciência crítica"],
    "consciencioso": ["escrupuloso", "zeloso", "cuidadoso", "diligente", "meticuloso", "atento", "responsável", "assíduo", "dedicado", "aplicado"],
    "consciente": ["ciente", "informado", "sabedor", "percebido", "atento", "desperto", "lúcido", "sensível", "responsável", "advertido"],
    "conscientização": ["ato de tornar consciente", "despertar da consciência", "tomada de consciência", "sensibilização", "esclarecimento", "informação", "educação para a consciência", "processo de conscientizar", "elevação da consciência", "desenvolvimento da consciência crítica"],
    "conscientizar": ["tornar consciente", "despertar a consciência de", "sensibilizar", "esclarecer", "informar", "educar para a consciência", "alertar", "avisar", "advertir", "iluminar"],
    "cônscio": ["ciente", "informado", "sabedor", "consciente", "percebido", "atento", "desperto", "lúcido", "sensível", "responsável"],
    "conscrito": ["alistado", "recrutado", "incorporado", "militar", "soldado", "reservista", "convocado", "alistado militar", "recruta", "membro das forças armadas"],
    "consectário": ["consequente", "resultante", "derivado", "deduzido", "inferido", "inerente", "próprio", "natural", "lógico", "evidente"],
    "consecução": ["realização", "obtenção", "alcance", "atingimento", "efetivação", "cumprimento", "sucesso", "êxito", "implementação", "finalização"],
    "consecutivo": ["seguido", "sucessivo", "sequencial", "contínuo", "ininterrupto", "seguinte", "posterior", "em ordem", "linear", "progressivo"],
    "conseguimento": ["obtenção", "alcance", "atingimento", "realização", "sucesso", "êxito", "ganho", "aquisição", "conquista", "implementação"],
    "conseguinte": ["consequente", "resultante", "portanto", "assim", "logo", "destarte", "por isso", "em seguida", "posterior", "decorrente"],
    "conseguir": ["obter", "alcançar", "atingir", "realizar", "efetivar", "cumprir", "lograr", "ganhar", "adquirir", "conquistar"],
    "conselheiro": ["mentor", "orientador", "guia", "assessor", "consultor", "avisador", "instrutor", "diretor espiritual", "confidente", "auxiliar"],
    "conselho": ["opinião", "sugestão", "orientação", "aviso", "parecer", "recomendação", "exortação", "admoestação", "diretriz", "assembleia"],
    "consenso": ["acordo", "aprovação geral", "unanimidade", "concordância", "assentimento comum", "voto unânime", "opinião comum", "entendimento mútuo", "harmonia de opiniões", "aceitação geral"],
    "consensual": ["acordado", "aprovado por todos", "unânime", "concordante", "com assentimento comum", "de comum acordo", "pacífico", "não controverso", "aceito por todos", "sem oposição"],
    "consentâneo": ["concordante", "compatível", "conforme", "adequado", "harmonioso", "coerente", "análogo", "semelhante", "consoante", "de acordo"],
    "consente": ["permite", "autoriza", "aprova", "cede", "anuí", "deixa", "aceita", "concorda", "admite", "faculta"],
    "consentido": ["permitido", "autorizado", "aprovado", "cedido", "anuído", "deixado", "aceito", "concordado", "admitido", "facultado"],
    "consentimento": ["permissão", "autorização", "aprovação", "anuência", "aceitação", "acordo", "licença", "vontade", "assentimento", "beneplácito"],
    "consentir": ["permitir", "autorizar", "aprovar", "anuir", "aceitar", "concordar", "admitir", "deixar", "facultar", "tolerar"],
    "consentisse": ["permitisse", "autorizasse", "aprovasse", "anuísse", "aceitasse", "concordasse", "admitisse", "deixasse", "facultasse", "tolerasse"],
    "consequência": ["resultado", "efeito", "decorrência", "implicação", "sequela", "reverberação", "fruto", "corolário", "desfecho", "produto"],
    "consequências": ["resultados", "efeitos", "decorrências", "implicações", "sequelas", "reverberações", "frutos", "corolários", "desfechos", "produtos"],
    "consequente": ["resultante", "decorrente", "lógico", "coerente", "conclusivo", "seguinte", "posterior", "inferível", "dedutível", "natural"],
    "consequentemente": ["portanto", "assim", "logo", "destarte", "por isso", "em consequência", "resultantemente", "decorrentemente", "naturalmente", "logicamente"],
    "consertar": ["reparar", "arrumar", "restaurar", "recompor", "reabilitar", "reorganizar", "ajustar", "corrigir", "emendar", "revisar"],
    "conserto": ["reparo", "arrumação", "restauração", "recomposição", "reabilitação", "reorganização", "ajuste", "correção", "emenda", "revisão"],
    "conservador": ["tradicionalista", "preservacionista", "reacionário (em certo contexto)", "moderado", "cauteloso", "avesso a mudanças", "que mantém costumes", "que preserva valores", "que defende o status quo", "que resiste a inovações"],
    "conservar": ["preservar", "manter", "guardar", "proteger", "cuidar", "reter", "armazenar", "sustentar", "perpetuar", "assegurar a duração"],
    "conservaremos": ["preservaremos", "manteremos", "guardaremos", "protegeremos", "cuidaremos", "reteremos", "armazenaremos", "sustentaremos", "perpetuaremos", "asseguraremos a duração"],
    "conservo": ["preservo", "mantenho", "guardo", "protejo", "cuido", "retenho", "armazeno", "sustento", "perpetuo", "asseguro a duração"],
    "considera": ["avalia", "pondera", "examina", "analisa", "reflete sobre", "julga", "estima", "supõe", "acredita", "leva em conta"],
    "consideração": ["avaliação", "ponderação", "exame", "análise", "reflexão", "julgamento", "estima", "respeito", "atenção", "deferência"],
    "considerações": ["avaliações", "ponderações", "exames", "análises", "reflexões", "julgamentos", "estimas", "respeitos", "atenções", "deferências"],
    "considerada": ["avaliada", "ponderada", "examinada", "analisada", "refletida", "julgada", "estimada", "suposta", "acreditada", "levada em conta"],
    "considerado": ["avaliado", "ponderado", "examinado", "analisado", "refletido", "julgado", "estimado", "suposto", "acreditado", "levado em conta"],
    "considerando": ["avaliando", "ponderando", "examinando", "analisando", "refletindo", "julgando", "estimando", "supondo", "acreditando", "levando em conta"],
    "considerar": ["avaliar", "ponderar", "examinar", "analisar", "refletir sobre", "julgar", "estimar", "supor", "acreditar", "levar em conta"],
    "considerarão": ["avaliarão", "ponderarão", "examinarão", "analisarão", "refletirão sobre", "julgarão", "estimarão", "suporão", "acreditarão", "levarão em conta"],
    "considero": ["avalio", "pondero", "examino", "analiso", "reflito sobre", "julgo", "estimo", "suponho", "acredito", "levo em conta"],
    "consigamos": ["obtenhamos", "alcancemos", "atingamos", "realizemos", "efetivemos", "cumpramos", "logremos", "ganhemos", "adquiramos", "conquistemos"],
    "consignação": ["depósito", "entrega", "remessa", "envio", "destinação", "atribuição", "registro", "anotação", "lançamento", "averbação"],
    "consignado": ["depositado", "entregue", "remetido", "enviado", "destinado", "atribuído", "registrado", "anotado", "lançado", "averbado"],
    "consignar": ["depositar", "entregar", "remeter", "enviar", "destinar", "atribuir", "registrar", "anotar", "lançar", "averbar"],
    "consigo": ["com você/ele/ela", "em sua companhia", "para você/ele/ela", "a seu lado", "em seu poder", "sob seus cuidados", "em sua opinião", "por sua causa", "para o seu bem", "juntamente com você/ele/ela"],
    "consiste": ["reside", "está em", "baseia-se em", "compõe-se de", "constitui-se de", "depende de", "funda-se em", "radica em", "encerra-se em", "resume-se a"],
    "consistência": ["firmeza", "solidez", "estabilidade", "coesão", "densidade", "espessura", "persistência", "regularidade", "uniformidade", "coerência"],
    "consistente": ["firme", "sólido", "estável", "coesivo", "denso", "espesso", "persistente", "regular", "uniforme", "coerente"],
    "consisti": ["residi", "estive em", "baseei-me em", "compus-me de", "constituí-me de", "dependi de", "fundei-me em", "radiquei em", "encerrei-me em", "resumi-me a"],
    "consistíamos": ["residíamos", "estávamos em", "baseávamo-nos em", "compúnhamo-nos de", "constituíamo-nos de", "dependíamos de", "fundávamo-nos em", "radicávamos em", "encerrávamo-nos em", "resumíamo-nos a"],
    "consistir": ["residir", "estar em", "basear-se em", "compor-se de", "constituir-se de", "depender de", "fundar-se em", "radicar em", "encerrar-se em", "resumir-se a"],
    "consistório": ["reunião solene", "assembleia eclesiástica", "tribunal eclesiástico", "câmara municipal (obsoleto)", "conselho", "sínodo", "concílio", "junta", "congregação", "audiência papal"],
    "consoante": ["segundo", "de acordo com", "conforme", "em conformidade com", "em consonância com", "segundo o modelo de", "na forma de", "à semelhança de", "análogo a", "em harmonia com"],
    "consolação": ["conforto", "alívio", "lenitivo", "consolo", "amparo", "apoio", "refrigério", "suporte", "auxílio", "安慰"],
    "consolar": ["confortar", "aliviar", "lenir", "animar", "reconfortar", "amparar", "apoiar", "refrigerar", "suportar", "auxiliar"],
    "consolidação": ["fortalecimento", "afirmação", "estabilização", "solidificação", "reforço", "fixação", "integração", "unificação", "robustez", "cimentação"],
    "consolidado": ["fortalecido", "afirmado", "estabilizado", "solidificado", "reforçado", "fixado", "integrado", "unificado", "robusto", "cimentado"],
    "consolidar": ["fortalecer", "afirmar", "estabilizar", "solidificar", "reforçar", "fixar", "integrar", "unificar", "robustecer", "cimentar"],
    "consolo": ["conforto", "alívio", "lenitivo", "consolação", "amparo", "apoio", "refrigério", "suporte", "auxílio", "安慰"],
    "consome": ["gasta", "utiliza", "emprega", "destrói", "dissipa", "exauri", "ingere", "alimenta-se de", "absorve", "corrói"],
    "consonância": ["harmonia", "acordo", "concordância", "afinidade", "congruência", "coerência", "simultaneidade", "uníssono", "ressonância", "combinação agradável"],
    "consorte": ["cônjuge", "esposo", "esposa", "parceiro matrimonial", "companheiro(a)", "marido", "mulher", "par", "cônjuge real", "companheiro(a) de vida"],
    "conspícuo": ["notável", "ilustre", "eminente", "distinto", "célebre", "insigne", "prestigioso", "reconhecido", "evidente", "vistoso"],
    "conspiração": ["intriga", "maquinação", "trama", "conluio", "conjuração", "cabala", "armação", "segredo", "plano secreto", "intentona"],
    "conspirar": ["tramar", "maquinar", "intrigar", "conluiar-se", "conjurar", "urdir", "planejar secretamente", "complotar", "mancomunar-se", "secretar"],
    "conspurcar": ["profanar", "macular", "manchar", "sujar", "aviltar", "desonrar", "infamar", "vilipendiar", "poluir", "contaminar"],
    "consta": ["é sabido", "é notório", "é evidente", "está registrado", "acha-se escrito", "infere-se", "deduz-se", "parece", "segundo consta", "há notícia de"],
    "constância": ["firmeza", "persistência", "continuidade", "regularidade", "estabilidade", "assiduidade", "perseverança", "tenacidade", "solidez", "invariabilidade"],
    "constante": ["firme", "persistente", "contínuo", "regular", "estável", "assíduo", "perseverante", "tenaz", "sólido", "invariável"],
    "constantemente": ["continuamente", "sempre", "incessantemente", "permanentemente", "regularmente", "frequentemente", "ininterruptamente", "assiduamente", "tenazmente", "estavelmente"],
    "constar": ["ser sabido", "ser notório", "ser evidente", "estar registrado", "achar-se escrito", "inferir-se", "deduzir-se", "parecer", "segundo consta", "haver notícia de"],
    "constatação": ["verificação", "comprovação", "confirmação", "observação", "detecção", "percepção", "reconhecimento", "apuração", "averiguação", "descobrimento"],
    "constatado": ["verificado", "comprovado", "confirmado", "observado", "detectado", "percebido", "reconhecido", "apurado", "averiguado", "descoberto"],
    "constatar": ["verificar", "comprovar", "confirmar", "observar", "detectar", "perceber", "reconhecer", "apurar", "averiguar", "descobrir"],
    "constelação": ["aglomerado de estrelas", "grupo de estrelas", "estrelas agrupadas", "conjunto estelar", "formação estelar", "grupo de coisas brilhantes", "conjunto notável", "arranjo", "disposição", "sortimento"],
    "consternação": ["abatimento", "desânimo", "tristeza profunda", "aflição", "pesar", "desolação", "perturbação", "choque", "horror", "espanto"],
    "consternado": ["abatido", "desanimado", "triste", "aflito", "pesaroso", "desolado", "perturbado", "chocado", "horrorizado", "espantado"],
    "constipado": ["resfriado", "gripado", "acatarrado", "com coriza", "com congestão nasal", "indisposto", "mal de saúde", "com resfriado comum", "com gripe", "com obstrução nasal"],
    "constitui": ["forma", "compõe", "integra", "cria", "estabelece", "representa", "caracteriza", "equivale a", "consiste em", "é"],
    "constituição": ["formação", "estrutura", "organização", "criação", "estabelecimento", "lei fundamental", "carta magna", "regimento", "natureza", "índole"],
    "constituído": ["formado", "composto", "integrado", "criado", "estabelecido", "representado", "caracterizado", "equivalente a", "consistente em", "feito"],
    "constituinte": ["formador", "criador", "estabelecedor", "componente", "elemento essencial", "que constitui", "assembleia constituinte", "membro da constituinte", "eleitor", "votante"],
    "constituir": ["formar", "compor", "integrar", "criar", "estabelecer", "representar", "caracterizar", "equivaler a", "consistir em", "fazer"],
    "constituís": ["formas", "compões", "integras", "crias", "estabeleces", "representas", "caracterizas", "equivales a", "consistes em", "és"],
    "constitutivo": ["fundamental", "essencial", "básico", "formativo", "criador", "estabelecedor", "caracterizador", "integrante", "componente", "inerente"],
    "constrangedor": ["embaraçoso", "vexatório", "humilhante", "incômodo", "desconfortável", "tímido", "acanhado", "envergonhado", "que causa constrangimento", "que deixa sem jeito"],
    "constranger": ["embaraçar", "vexar", "humilhar", "incomodar", "desconfortar", "intimidar", "forçar", "obrigar", "coagir", "constranger-se"],
    "constrangido": ["embaraçado", "vexado", "humilhado", "incomodado", "desconfortável", "intimidado", "forçado", "obrigado", "coagido", "sem jeito"],
    "constrangimento": ["embaraço", "vexame", "humilhação", "incômodo", "desconforto", "timidez", "acanhamento", "vergonha", "inibição", "coação"],
    "constrição": ["estreitamento", "aperto", "compressão", "contração", "redução", "limitação", "restrição", "opressão", "aperto físico", "sensação de aperto"],
    "constrói": ["edifica", "levanta", "ergue", "faz", "cria", "elabora", "forma", "compõe", "estrutura", "estabelece"],
    "constróis": ["edificas", "levantas", "ergues", "fazes", "crias", "elaboras", "formas", "compões", "estruturas", "estabeleces"],
    "construção": ["edificação", "obra", "levantamento", "feitura", "criação", "elaboração", "formação", "composição", "estrutura", "estabelecimento"],
    "construída": ["edificada", "levantada", "feita", "criada", "elaborada", "formada", "composta", "estruturada", "estabelecida", "erguida"],
    "construir": ["edificar", "levantar", "erguer", "fazer", "criar", "elaborar", "formar", "compor", "estruturar", "estabelecer"],
    "construíssemos": ["edificássemos", "levantássemos", "fizéssemos", "criássemos", "elaborássemos", "formássemos", "compuséssemos", "estruturássemos", "estabelecêssemos", "erguêssemos"],
    "consubstanciado": ["incorporado", "materializado", "concretizado", "fundido", "unido essencialmente", "que se tornou substância de", "que assumiu forma concreta", "que se integrou", "que se tornou parte essencial", "que se manifestou"],
    "consubstanciar": ["incorporar", "materializar", "concretizar", "fundir", "unir essencialmente", "tornar-se substância de", "assumir forma concreta", "integrar-se", "tornar-se parte essencial", "manifestar-se"],
    "consuetudinário": ["costumeiro", "habitual", "tradicional", "arraigado", "usual", "rotineiro", "convencional", "segundo o costume", "de acordo com o hábito", "estabelecido pelo uso"],
    "cônsul": ["representante diplomático", "agente consular", "funcionário consular", "representante de interesses comerciais", "autoridade consular", "diplomata", "representante de seu país", "encarregado de negócios", "oficial consular", "representante oficial"],
    "consultado": ["interrogado", "pedido opinião a", "buscado aconselhamento de", "ouvido", "informado", "examinado", "visto", "procurado informação em", "pesquisado", "referenciado"],
    "consultar": ["interrogar", "pedir opinião a", "buscar aconselhamento de", "ouvir", "informar-se", "examinar", "ver", "procurar informação em", "pesquisar", "referenciar"],
    "consumação": ["realização", "efetivação", "cumprimento", "finalização", "término", "acabamento", "conclusão", "ato de consumir", "gasto", "exaustão"],
    "consumado": ["realizado", "efetivado", "cumprido", "finalizado", "terminado", "acabado", "concluído", "gasto", "exaurido", "completo"],
    "consumarão": ["realizarão", "efetivarão", "cumprirão", "finalizarão", "terminarão", "acabarão", "concluirão", "gastarão", "exaurirão", "completarão"],
    "consumido": ["gasto", "utilizado", "empregado", "destruído", "dissipado", "exaurido", "ingerido", "alimentado", "absorvido", "corroído"],
    "consumidor": ["cliente", "freguês", "usuário", "adquirente", "comprador", "demandante", "fruidor", "utilizador", "gastador", "aquele que consome"],
    "consumir": ["gastar", "utilizar", "empregar", "destruir", "dissipar", "exaurir", "ingerir", "alimentar-se de", "absorver", "corroer"],
    "consumo": ["gasto", "utilização", "emprego", "destruição", "dissipação", "exaurimento", "ingestão", "alimentação", "absorção", "corrosão"],
    "consumpção": ["consumo", "gasto", "utilização", "destruição", "dissipação", "exaurimento", "ingestão", "alimentação", "absorção", "corrosão"],
    "conta": ["cálculo", "operação matemática", "registro financeiro", "fatura", "relato", "narração", "importância", "responsabilidade", "consideração", "expectativa"],
    "contabilizar": ["registrar", "lançar", "apontar", "numerar", "calcular", "totalizar", "computar", "inventariar", "demonstrar financeiramente", "efetuar a contabilidade de"],
    "contactado": ["entrado em contato", "falado com", "comunicado com", "abordado", "avisado", "informado", "ligado para", "enviado mensagem para", "procurado", "acionado"],
    "contactar": ["entrar em contato", "falar com", "comunicar com", "abordar", "avisar", "informar", "ligar para", "enviar mensagem para", "procurar", "acionar"],
    "contaminação": ["infecção", "poluição", "impureza", "degradação", "irradiação", "vírus", "bactéria", "germes", "contágio", "transmissão de doença"],
    "contar": ["numerar", "calcular", "narrar", "relatar", "expor", "depender de", "confiar em", "levar em consideração", "incluir", "ter importância"],
    "contatar": ["entrar em contato", "falar com", "comunicar com", "abordar", "avisar", "informar", "ligar para", "enviar mensagem para", "procurar", "acionar"],
    "contato": ["comunicação", "interação", "relação", "toque", "encontro", "ligação", "conexão", "acesso", "proximidade", "comunicação interpessoal"],
    "contempla": ["observa", "admira", "aprecia", "medita sobre", "considera", "prevê", "inclui", "abrange", "visa", "objetiva"],
    "contemplado": ["observado", "admirado", "apreciado", "meditado sobre", "considerado", "previsto", "incluído", "abrangido", "visado", "agraciado"],
    "contemplar": ["observar", "admirar", "apreciar", "meditar sobre", "considerar", "prever", "incluir", "abranger", "visar", "agraciar"],
    "contemporânea": ["da mesma época", "atual", "moderna", "do tempo presente", "coeva", "simultânea", "da mesma geração", "do mesmo período histórico", "vigente", "corrente"],
    "contemporaneidade": ["atualidade", "modernidade", "simultaneidade", "coexistência", "mesma época", "tempo presente", "período atual", "era moderna", "vigência", "concorrência temporal"],
    "contemporâneo": ["da mesma época", "atual", "moderno", "do tempo presente", "coevo", "simultâneo", "da mesma geração", "do mesmo período histórico", "vigente", "corrente"],
    "contemporizar": ["adiar", "postergar", "prorrogar", "retardar", "dilatar", "ganhar tempo", "ser contemporâneo", "viver na mesma época", "adaptar-se ao tempo", "ser condescendente"],
    "contenção": ["retenção", "controle", "moderação", "restrição", "limitação", "repressão", "autocontrole", "sobriedade", "economia", "diminuição"],
    "contencioso": ["litigioso", "disputado", "controverso", "em litígio", "judicial", "em disputa judicial", "que envolve contenda", "que gera litígio", "争端的", "contestável"],
    "contenda": ["disputa", "litígio", "querela", "rixa", "desavença", "conflito", "debate", "polêmica", "altercação", "争论"],
    "contender": ["disputar", "lutar", "competir", "rivalizar", "opor-se", "bater-se", "querelar", "polemizar", "debater", "争论"],
    "contensão": ["retenção", "controle", "moderação", "restrição", "limitação", "repressão", "autocontrole", "sobriedade", "economia", "diminuição"],
    "contentamento": ["satisfação", "alegria", "prazer", "felicidade", "gozo", "deleite", "jubilo", "êxtase", "regozijo", "bem-estar"],
    "contente": ["satisfeito", "alegre", "feliz", "júbilo", "radiante", "exultante", "risonho", "bem-humorado", "agradado", "ledo"],
    "contento": ["satisfação", "alegria", "prazer", "felicidade", "gozo", "deleite", "júbilo", "êxtase", "regozijo", "bem-estar"],
    "conter": ["deter", "reprimir", "controlar", "limitar", "restringir", "moderar", "refrear", "dominar", "abranger", "incluir"],
    "conterá": ["deterá", "reprimirá", "controlará", "limitará", "restringirá", "moderará", "refreará", "dominará", "abrangerá", "incluirá"],
    "conterrâneo": ["compatriota", "concidadão", "natural do mesmo país", "patrício", "nacional", "indígena", "habitante da mesma pátria", "cidadão da mesma nação", "conprovinciano", "concitadino"],
    "contestação": ["impugnação", "objeção", "discordância", "oposição", "refutação", "negação", "protesto", "reclamação", "questionamento", "reivindicação"],
    "contestar": ["impugnar", "objetar", "discordar", "opor-se", "refutar", "negar", "protestar", "reclamar", "questionar", "reivindicar"],
    "conteste": ["impugne", "obiete", "discorde", "oponha-se", "refute", "negue", "proteste", "reclame", "questione", "reivindique"],
    "conteúdo": ["matéria", "assunto", "tema", "texto", "substância", "informação", "mensagem", "significado", "teor", "carga"],
    "contexto": ["circunstâncias", "situação", "conjuntura", "ambiente", "cenário", "quadro", "pano de fundo", "envolvimento", "meio", "teia de relações"],
    "contextualização": ["ato de contextualizar", "inserção no contexto", "situação no tempo e espaço", "apresentação do cenário", "colocação em perspectiva", "enquadramento", "historicização", "ambientalização", "integração ao meio", "compreensão situacional"],
    "contextualizar": ["inserir no contexto", "situar no tempo e espaço", "apresentar o cenário", "colocar em perspectiva", "enquadrar", "historicizar", "ambientalizar", "integrar ao meio", "compreender situacionalmente", "relacionar com o entorno"],
    "contextura": ["estrutura", "tecido", "trama", "disposição", "arranjo", "organização", "conexão", "interligação", "complexidade", "construção"],
    "contido": ["reprimido", "controlado", "moderado", "refreado", "dominado", "reservado", "tímido", "acanhado", "discreto", "limitado"],
    "contigo": ["com você", "em sua companhia", "para você", "a seu lado", "em seu poder", "sob seus cuidados", "em sua opinião", "por sua causa", "para o seu bem", "juntamente com você"],
    "contiguidade": ["proximidade", "vizinhança", "adjacência", "contato", "imediação", "vizinhidade", "proximidade física", "estar perto", "estar ao lado", "estar junto"],
    "contíguo": ["próximo", "vizinho", "adjacente", "contato", "imediato", "vicinal", "perto", "ao lado", "junto", "confinante"],
    "continente": ["extenso território", "grande massa de terra", "parte principal da terra", "terra firme", "parte continental", "Europa (por metonímia)", "África (por metonímia)", "América (por metonímia)", "Ásia (por metonímia)", "Oceania (por metonímia)"],
    "contingência": ["eventualidade", "imprevisto", "acaso", "fortuidade", "possibilidade", "risco", "incerteza", "circunstância imprevista", "situação eventual", "fato inesperado"],
    "contingenciamento": ["ato de contingenciar", "controle de gastos", "retenção de recursos", "limitação orçamentária", "medida de precaução financeira", "plano de contenção", "restrição de despesas", "gerenciamento de riscos financeiros", "economia forçada", "medida de austeridade"],
    "contingente": ["incerto", "eventual", "possível", "aleatório", "variável", "não essencial", "suplente", "grupo de pessoas", "parcela", "destacamento"],
    "continuação": ["prosseguimento", "seguimento", "sequência", "prolongamento", "extensão", "sucessão", "continuidade", "seguimento", "desenvolvimento", "prorrogação"],
    "continuamente": ["sem cessar", "ininterruptamente", "constantemente", "sempre", "seguidamente", "persistentemente", "de modo contínuo", "em seguida", "sem parar", "incessantemente"],
    "continuar": ["prosseguir", "seguir", "manter", "permanecer", "prolongar", "estender", "dar seguimento", "não parar", "persistir", "manter-se"],
    "continuarão": ["prosseguirão", "seguirão", "manterão", "permanecerão", "prolongarão", "estenderão", "darão seguimento", "não pararão", "persistirão", "manter-se-ão"],
    "continuidade": ["sequência", "prosseguimento", "seguimento", "permanência", "constância", "ininterrupção", "sucessão", "encadeamento", "prolongamento", "manutenção"],
    "contínuo": ["ininterrupto", "seguido", "constante", "permanente", "sequencial", "corrido", "direto", "prolongado", "incessante", "seguinte"],
    "continuum": ["continuidade", "escala contínua", "sequência ininterrupta", "espectro", "gradiente", "série contínua", "faixa contínua", "progressão gradual", "encadeamento sem fim", "sucessão ininterrupta"],
    "conto": ["narração breve", "história curta", "fábula", "apólogo", "narrativa concisa", "ficção curta", "relato breve", "anedota", "novela curta", "narrativa literária curta"],
    "contra": ["oposto a", "em oposição a", "ao contrário de", "em frente a", "junto a", "contrafeito", "falso", "em detrimento de", "em prejuízo de", "contra a vontade de"],
    "contrabaixo": ["instrumento musical de cordas grave", "baixo", "rabecão", "violone", "baixo acústico", "baixo de orquestra", "instrumento de cordas friccionadas", "instrumento de grande porte", "membro da família do violino", "instrumento fundamental na orquestra"],
    "contração": ["encolhimento", "diminuição", "redução", "aperto", "contração muscular", "abreviação", "elipse", "sinérese", "contração vocálica", "braquigrafia"],
    "contracapa": ["quarta capa", "capa traseira", "parte de trás do livro", "verso da capa", "última página da capa", "reverso da brochura", "parte posterior da sobrecapa", "parte de trás da lombada", "face oposta à capa frontal", "capa de trás"],
    "contradição": ["oposição", "incoerência", "antagonismo", "discrepância", "conflito", "negação", "incompatibilidade", "dissonância", "paradoxo", "refutação"],
    "contradições": ["oposições", "incoerências", "antagonismos", "discrepâncias", "conflitos", "negações", "incompatibilidades", "dissonâncias", "paradoxos", "refutações"],
    "contradito": ["negado", "refutado", "impugnado", "desmentido", "contestado", "oposto", "contrariado", "desautorizado", "invalidado", "rebatido"],
    "contraditório": ["incoerente", "antagônico", "discordante", "oposto", "conflituoso", "paradoxal", "incompatível", "dissonante", "que contradiz", "que refuta"],
    "contradizer": ["negar", "refutar", "impugnar", "desmentir", "contestar", "opor-se", "contrariar", "desautorizar", "invalidar", "rebater"],
    "contraído": ["encolhido", "diminuído", "reduzido", "apertado", "contraturado", "abreviado", "elidido", "sineresado", "comprimido", "afetado por contração"],
    "contrair": ["encolher", "diminuir", "reduzir", "apertar", "contraturar", "abreviar", "elidir", "sineresar", "comprimir", "adquirir (doença ou dívida)"],
    "contraparte": ["oponente", "parte contrária", "interlocutor", "antagonista", "parceiro em negociação", "lado oposto", "parte adversa", "outro envolvido", "respondente", "demandado"],
    "contrapartida": ["compensação", "retribuição", "recompensa", "restituição", "contraprestação", "benefício mútuo", "algo em troca", "equivalente", "reciprocidade", "compensação financeira"],
    "contraponto": ["oposição", "contraste", "ideia oposta", "argumento contrário", "elemento contrastante", "harmonia de vozes diferentes", "melodia contrastante", "ponto de vista oposto", "elemento de contraste", "ideia que se opõe a outra"],
    "contrapor": ["opor", "colocar em oposição", "comparar contrastando", "apresentar como contrário", "argumentar contra", "refutar", "impugnar", "confrontar", "desafiar", "antepor"],
    "contraposição": ["oposição", "contraste", "confronto", "antagonismo", "discrepância", "comparação contrastante", "apresentação como contrário", "refutação", "impugnação", "antítese"],
    "contraprestação": ["retribuição", "compensação", "recompensa", "contrapartida", "serviço em troca", "pagamento por serviço", "algo dado em troca", "equivalente", "remuneração", "indenização"],
    "contraproducente": ["ineficaz", "prejudicial", "que causa efeito contrário ao desejado", "inconveniente", "desvantajoso", "que atrapalha", "que dificulta", "que impede", "que prejudica o objetivo", "que reverte o resultado esperado"],
    "contraproposta": ["oferta alternativa", "proposta oposta", "sugestão contrária", "nova proposta em resposta", "oferta revisada", "proposta modificada", "alternativa à proposta inicial", "resposta com nova oferta", "sugestão diferente", "nova condição de negociação"],
    "contrariamente": ["ao contrário", "em oposição", "de modo oposto", "inversamente", "ao invés de", "em sentido contrário", "opostamente", "diversamente", "ao revés", "em contrapartida"],
    "contrário": ["oposto", "adverso", "antagônico", "discordante", "inverso", "oposto a", "ao contrário de", "em frente a", "prejudicial", "desfavorável"],
    "contrassenso": ["absurdo", "ilógico", "disparate", "incoerência", "absurdidade", "ilogicidade", "despropósito", "erro crasso", "falta de sentido", "coisa sem lógica"],
    "contraste": ["oposição", "diferença", "distinção", "realce", "ressalto", "confronto", "comparação", "dissonância", "divergência", "nitidez"],
    "contratação": ["admissão", "emprego", "designação", "nomeação", "ajuste", "pacto", "acordo", "convênio", "arrendamento", "locação"],
    "contratempo": ["imprevisto", "obstáculo", "dificuldade", "revés", "azar", "inconveniente", "complicação", "embaraço", "aborrecimento", "percalço"],
    "contravenção": ["infração", "transgressão", "violação", "delito menor", "falta administrativa", "irregularidade", "desobediência", "descumprimento", "ato ilícito de menor gravidade", "pequena infração penal"],
    "contribuição": ["auxílio", "ajuda", "participação", "quota", "parcela", "donativo", "oferta", "imposto", "tributo", "colaboração"],
    "contribuições": ["auxílios", "ajudas", "participações", "quotas", "parcelas", "donativos", "ofertas", "impostos", "tributos", "colaborações"],
    "contribuído": ["auxiliado", "ajudado", "participado", "doado", "ofertado", "imposto (tributo)", "colaborado", "concorrido", "influenciado", "desempenhado papel"],
    "contribuir": ["auxiliar", "ajudar", "participar", "doar", "ofertar", "tributar", "colaborar", "concorrer", "influenciar", "desempenhar papel"],
    "contrição": ["arrependimento", "remorso", "pesar", "culpa", "penitência", "aflição", "mágoa", "tristeza", "humilhação", "dor moral"],
    "contristado": ["triste", "aflito", "magoado", "pesaroso", "desolado", "abatido", "desanimado", "melancólico", "sombrio", "deprimido"],
    "contrito": ["arrependido", "remorso", "pesaroso", "culpado", "penitente", "aflito", "magoado", "triste", "humilhado", "compungido"],
    "controle": ["fiscalização", "gerenciamento", "comando", "direção", "domínio", "autoridade", "verificação", "supervisão", "regulação", "moderação"],
    "controversa": ["polêmica", "discutível", "contestada", "controvertida", "争端的", "debatível", "em disputa", "questionável", "争论的", "sujeita a controvérsia"],
    "controvérsia": ["polêmica", "discussão", "debate", "争论", "disputa", "divergência de opiniões", "questão debatida", "ponto de discórdia", "争端", "tema polêmico"],
    "controverso": ["polêmico", "discutível", "争论的", "contestável", "controvertido", "争端的", "debatível", "em disputa", "questionável", "sujeito a controvérsia"],
    "controverter": ["discutir", "polemizar", "debater", "争论", "contestar", "impugnar", "refutar", "questionar", "opor-se", "争端"],
    "contudo": ["todavia", "no entanto", "entretanto", "apesar disso", "não obstante", "ainda assim", "mesmo assim", "malgrado", "em contrapartida", "não obstante isso"],
    "contumaz": ["obstinado", "teimoso", "rebelde", "insistente", "reincidente", "habitual", "inveterado", "incorrigível", "que persiste no erro", "que não se dobra"],
    "contundência": ["força", "veemência", "impacto", "eficácia", "clareza", "energia", "poder de persuasão", "intensidade", "vigor", "solidez"],
    "contundente": ["forte", "veemente", "impactante", "eficaz", "claro", "energético", "persuasivo", "intenso", "vigoroso", "sólido"],
    "conturbado": ["agitado", "tumultuado", "perturbado", "confuso", "instável", "tempestuoso", "revolto", "inquieto", "desordenado", "atribulado"],
    "convalescença": ["restabelecimento", "recuperação", "melhora", "período de cura", "fase de recuperação", "melhoria da saúde", "saída da doença", "volta à saúde", "restauração da saúde", "período pós-doença"],
    "convalescente": ["em recuperação", "restabelecendo-se", "melhorando", "em fase de cura", "saindo da doença", "voltando à saúde", "em processo de recuperação", "em melhoria", "em restabelecimento", "pós-doente"],
    "convalescer": ["restabelecer-se", "recuperar-se", "melhorar", "curar-se", "sair da doença", "voltar à saúde", "entrar em recuperação", "melhorar de saúde", "restaurar a saúde", "sarar"],
    "convalidar": ["validar", "confirmar", "ratificar", "aprovar", "legalizar", "legitimar", "reconhecer", "firmar", "reforçar", "autenticar"],
    "convém": ["é conveniente", "é adequado", "é apropriado", "é oportuno", "é recomendável", "é bom", "é útil", "fica bem", "parece bom", "é do interesse de"],
    "convenção": ["acordo", "pacto", "tratado", "norma", "costume", "hábito", "assembleia", "congresso", "reunião", "convenção coletiva"],
    "convencer": ["persuadir", "induzir", "levar a crer", "demonstrar", "provar", "assegurar", "certificar", "influenciar", "mover", "ganhar para o seu lado"],
    "convencido": ["persuadido", "certo", "seguro", "convicto", "induzido", "influenciado", "que acredita", "que tem certeza", "que foi levado a crer", "que aceitou a ideia"],
    "convencional": ["usual", "comum", "habitual", "tradicional", "normal", "padrão", "estereotipado", "formal", "cerimonioso", "de acordo com os costumes"],
    "conveniência": ["oportunidade", "adequação", "utilidade", "praticidade", "comodidade", "interesse", "vantagem", "propriedade", "jeito", "facilidade"],
    "conveniente": ["oportuno", "adequado", "útil", "prático", "cômodo", "interessante", "vantajoso", "próprio", "apropriado", "favorável"],
    "convergem": ["confluem", "encontram-se", "unem-se", "dirigem-se para o mesmo ponto", "aproximam-se", "tendem para o mesmo objetivo", "coincidem", "concorrem", "reúnem-se", "focam-se"],
    "convergência": ["confluência", "encontro", "união", "aproximação", "tendência para o mesmo ponto", "coincidência", "concorrência", "reunião", "foco comum", "direção para o mesmo objetivo"],
    "convergente": ["confluente", "que se encontra", "que se une", "que se dirige para o mesmo ponto", "que se aproxima", "que tende para o mesmo objetivo", "coincidente", "concorrente", "que se reúne", "que se foca"],
    "convergir": ["confluir", "encontrar-se", "unir-se", "dirigir-se para o mesmo ponto", "aproximar-se", "tender para o mesmo objetivo", "coincidir", "concorrer", "reunir-se", "focar-se"],
    "conversa": ["diálogo", "bate-papo", "papo", "colóquio", "palestra", "entrevista", "depoimento", "comunicação verbal", "troca de palavras", "contato verbal"],
    "conversa fiada": ["bate-papo superficial", "papo furado", "conversa inútil", "palavras vazias", "fala sem conteúdo", "tagarelice", "blá-blá-blá", "conversa para passar o tempo", "assunto trivial", "futilidade verbal"],
    "conversão": ["transformação", "mudança", "alteração", "metamorfose", "transmutação", "mudança de religião", "mudança de moeda", "mudança de unidade", "mudança de sistema", "mudança de opinião"],
    "conversar": ["dialogar", "bater papo", "papear", "colocar conversa em dia", "trocar ideias", "comunicar verbalmente", "falar", "discutir", "entrevistar", "depor"],
    "converso": ["convertido", "transformado", "mudado", "alterado", "metamorfoseado", "transmutado", "que mudou de religião", "que mudou de moeda", "que mudou de unidade", "que mudou de sistema"],
    "converter": ["transformar", "mudar", "alterar", "metamorfosear", "transmutar", "mudar de religião", "mudar de moeda", "mudar de unidade", "mudar de sistema", "mudar de opinião"],
    "convescote": ["piquenique", "reunião campestre", "almoço ao ar livre", "festa campestre", "merenda ao ar livre", "reunião informal ao ar livre", "passeio com comida", "comilança ao ar livre", "banquete campestre", "celebração ao ar livre"],
    "convexo": ["curvo para fora", "arredondado para fora", "saliente", "protuberante", "abobadado", "globular", "arcuado para fora", "em forma de arco para fora", "que tem curvatura externa", "que se eleva no centro"],
    "convicção": ["certeza", "crença firme", "convencimento", "persuasão", "fé", "opinião formada", "credo", "princípio", "dogma", "tese"],
    "convicto": ["certo", "seguro", "persuadido", "convencido", "crente", "firme em suas opiniões", "que tem certeza", "que não duvida", "que acredita piamente", "que defende suas ideias com firmeza"],
    "conviesse": ["convidasse", "atraísse", "chamasse", "solicitasse", "incitasse", "estimulasse", "induzisse", "persuadisse", "atraísse para si", "tornasse agradável"],
    "convincente": ["persuasivo", "irrefutável", "inegável", "sólido", "fundamentado", "lógico", "coerente", "eficaz em convencer", "que persuade facilmente", "que gera convicção"],
    "convir": ["ser conveniente", "ser adequado", "ser apropriado", "ser oportuno", "ser do interesse de", "combinar", "harmonizar", "concordar", "ser compatível", "ajustar-se"],
    "convivência": ["coabitação", "vida em comum", "relações sociais", "interação", "harmonia", "familiaridade", "intimidade", "companhia", "socialização", "vida em grupo"],
    "conviver": ["coabitar", "viver junto", "relacionar-se socialmente", "interagir", "socializar", "familiarizar-se", "ter intimidade", "compartilhar a vida", "manter relações", "estar junto"],
    "convívio": ["coabitação", "vida em comum", "relações sociais", "interação", "harmonia", "familiaridade", "intimidade", "companhia", "socialização", "vida em grupo"],
    "cooperação": ["ajuda mútua", "colaboração", "auxílio", "trabalho em equipe", "esforço conjunto", "solidariedade", "parceria", "assistência", "apoio", "ação conjunta"],
    "cooperar": ["ajudar mutuamente", "colaborar", "auxiliar", "trabalhar em equipe", "unir esforços", "ser solidário", "participar em conjunto", "prestar assistência", "apoiar", "agir em conjunto"],
    "cooptar": ["atrair para um grupo", "recrutar", "integrar", "associar", "convidar a participar", "incluir", "admitir", "angariar membros", "agregar", "atrair para uma causa"],
    "coordenação": ["organização", "direção", "comando", "gerenciamento", "articulação", "integração", "harmonização", "sincronização", "controle", "planejamento"],
    "coordenado": ["organizado", "dirigido", "comandado", "gerenciado", "articulado", "integrado", "harmonizado", "sincronizado", "controlado", "planejado"],
    "coordenador": ["organizador", "diretor", "comandante", "gerente", "articulador", "integrador", "harmonizador", "supervisor", "responsável pela coordenação", "líder"],
    "copia": ["reprodução", "imitação", "transcrição", "cópia xerox", "segunda via", "plágio", "falsificação", "duplicata", "réplica", "traslado"],
    "copiosamente": ["abundantemente", "profusamente", "ricamente", "em grande quantidade", "generosamente", "fartamente", "largamente", "em profusão", "em abundância", "sem moderação"],
    "copular": ["unir-se sexualmente", "acasalar", "cruzar", "juntar-se para reprodução", "ter relações sexuais", "fazer sexo", "unir-se carnalmente", "conjungir-se", "cobrir (animal)", "montar (animal)"],
    "coquete": ["mulher que flerta", "mulher que busca admiração", "mulher charmosa", "mulher que usa de artifícios para atrair", "sedutora", "namoradeira", "mulher vaidosa", "mulher que gosta de ser admirada", "mulher que provoca", "mulher que atrai"],
    "cor": ["tonalidade", "pigmento", "matiz", "colorido", "tinta", "pintura", "aparência", "aspecto", "pretexto", "bandeira"],
    "coração": ["órgão vital", "peito", "íntimo", "sentimentos", "afeto", "amor", "paixão", "ânimo", "coragem", "essência"],
    "coragem": ["bravura", "valentia", "ousadia", "intrepidez", "determinação", "audácia", "denodo", "sangue-frio", "destemor", "heroísmo"],
    "corajoso": ["bravo", "valente", "ousado", "intrépido", "determinado", "audacioso", "denodado", "destemido", "heroico", "aguerrido"],
    "coral": ["relativo a corais", "de coral", "vermelho-alaranjado", "canto em grupo", "conjunto vocal", "coro", "música coral", "formação de corais marinhos", "recife de coral", "animal marinho"],
    "corar": ["avermelhar-se", "ruborizar", "enrubescer", "tingir de vermelho", "pintar", "colorir", "ficar vermelho", "mostrar vergonha", "cobrir de cor", "dar cor"],
    "cordato": ["pacífico", "tranquilo", "calmo", "sereno", "manso", "afável", "amigável", "gentil", "educado", "bem-comportado"],
    "cordel": ["barbante", "fio", "linha", "corda fina", "literatura de cordel", "folheto popular", "poesia popular impressa", "história em versos", "narrativa rimada", "livreto de feira"],
    "cordial": ["afetuoso", "amigável", "gentil", "simpático", "caloroso", "atencioso", "amável", "benévolo", "fraterno", "solícito"],
    "cordialidade": ["afeto", "amizade", "gentileza", "simpatia", "calor", "atenção", "amabilidade", "benevolência", "fraternidade", "solicitude"],
    "cordialmente": ["afetuosamente", "amigavelmente", "gentilmente", "simpaticamente", "calorosamente", "atenciosamente", "amavelmente", "benevolentemente", "fraternalmente", "solicitamente"],
    "corja": ["grupo de pessoas desprezíveis", "canalha", "turba", "malta", "horda", "bando", "gente baixa", "escória", "ralé", "quadrilha"],
    "corna": ["mulher traída", "mulher cujo marido é infiel", "mulher enganada", "mulher ludibriada", "mulher que sofreu adultério", "mulher traída pelo cônjuge", "mulher enganada pelo marido", "mulher vítima de infidelidade", "mulher com chifres (gíria)", "mulher que foi objeto de traição"],
    "coroer": ["roer", "gastar", "consumir", "destruir gradualmente", "deteriorar", "erosar", "desgastar", "minar", "carcomer", "desfazer"],
    "corolário": ["consequência lógica", "dedução", "inferência", "resultado", "efeito", "decorrência", "sequela", "fruto", "conclusão", "consequente"],
    "coronavírus": ["vírus da família Coronaviridae", "agente causador de doenças respiratórias", "vírus zoonótico", "vírus com genoma de RNA", "vírus com projeções em forma de coroa", "vírus causador da COVID-19", "vírus SARS-CoV-2", "vírus MERS-CoV", "vírus SARS-CoV", "patógeno respiratório"],
    "corpo": ["organismo", "físico", "matéria", "estrutura", "conjunto", "grupo", "sociedade", "corporação", "volume", "densidade"],
    "corpo social": ["sociedade", "comunidade", "grupo social", "conjunto de indivíduos", "tecido social", "estrutura social", "organização social", "corpo coletivo", "agremiação social", "entidade social"],
    "corporalizar": ["materializar", "concretizar", "incorporar", "personificar", "dar forma física a", "tornar corpóreo", "encarnar", "assumir forma física", "manifestar-se fisicamente", "tornar tangível"],
    "corporativo": ["empresarial", "comercial", "relativo a empresas", "institucional", "organizacional", "de negócios", "empresarial", "de companhias", "de corporações", "relativo ao mundo dos negócios"],
    "correção": ["emenda", "retificação", "reparo", "ajuste", "melhora", "exatidão", "precisão", "disciplina", "punição", "censura"],
    "corredor": ["passagem estreita", "galeria", "vão", "átrio", "corredor de ônibus", "faixa de rodagem", "via expressa", "atleta de corrida", "corredor de imóveis", "corredor ecológico"],
    "correferido": ["mencionado anteriormente", "referido acima", "já citado", "aludido", "dito antes", "supra mencionado", "previamente citado", "antes referido", "como já dito", "em referência anterior"],
    "correição": ["inspeção", "fiscalização", "verificação", "exame", "averiguação", "investigação", "sindicância", "revista", "controle", "auditoria"],
    "correlação": ["relação mútua", "interdependência", "ligação", "vínculo", "associação", "conexão", "interligação", "dependência", "proporcionalidade", "correspondência"],
    "correlacionar": ["relacionar mutuamente", "interligar", "associar", "conectar", "vincular", "interdepender", "proporcionar", "corresponder", "estabelecer relação", "mostrar ligação"],
    "correlato": ["relacionado", "análogo", "afim", "semelhante", "correspondente", "vinculado", "associado", "pertinente", "conexo", "ligado"],
    "correligionário": ["companheiro de partido", "membro do mesmo partido político", "colega de ideologia política", "partidário", "militante do mesmo partido", "eleitor do mesmo partido", "seguidor da mesma corrente política", "aliado político", "companheiro de luta política", "aderente ao mesmo partido"],
    "corrente": ["fluxo", "curso", "movimento", "tendência", "moda", "atual", "comum", "usual", "seguida", "elétrica"],
    "correr": ["deslocar-se rapidamente", "mover-se velozmente", "fugir", "apressar-se", "disputar corrida", "circular", "fluir", "decorrer", "propagar-se", "espalhar-se"],
    "correrão": ["deslocar-se-ão rapidamente", "mover-se-ão velozmente", "fugirão", "apressar-se-ão", "disputarão corrida", "circularão", "fluirão", "decorrerão", "propagar-se-ão", "espalhar-se-ão"],
    "correspondência": ["comunicação escrita", "cartas", "epístolas", "relação", "semelhança", "analogia", "concordância", "harmonia", "proporção", "equivalência"],
    "correspondente": ["semelhante", "análogo", "concordante", "harmonioso", "proporcional", "equivalente", "relativo a correspondência", "carteiro", "mensageiro", "jornalista"],
    "corresponder": ["ser semelhante", "ser análogo", "concordar", "harmonizar", "ser proporcional", "ser equivalente", "trocar correspondência", "comunicar-se por cartas", "responder", "retribuir"],
    "corretamente": ["de modo correto", "adequadamente", "apropriadamente", "exatamente", "precisamente", "certamente", "justamente", "retamente", "acertadamente", "sem erros"],
    "correto": ["certo", "adequado", "apropriado", "exato", "preciso", "justo", "reto", "acertado", "sem erros", "convencional"],
    "corrigir": ["emendar", "retificar", "reparar", "ajustar", "melhorar", "disciplinar", "punir", "censurar", "revisar", "acertar"],
    "corrija": ["emende", "retifique", "repare", "ajuste", "melhore", "discipline", "punir", "censurar", "revise", "acerte"],
    "corriqueiro": ["comum", "usual", "habitual", "ordinário", "trivial", "rotineiro", "frequente", "vulgar", "banal", "corrente"],
    "corroborado": ["confirmado", "ratificado", "comprovado", "sustentado", "apoiado", "reforçado", "testemunhado", "evidenciado", "atestado", "validado"],
    "corroborar": ["confirmar", "ratificar", "comprovar", "sustentar", "apoiar", "reforçar", "testemunhar", "evidenciar", "atestar", "validar"],
    "corromper": ["depravar", "viciar", "perverter", "desmoralizar", "subornar", "comprar (com dinheiro)", "deteriorar", "estragar", "apodrecer", "infectar"],
    "corromper-se": ["depravar-se", "viciar-se", "perverter-se", "desmoralizar-se", "deixar-se subornar", "deixar-se comprar", "deteriorar-se", "estragar-se", "apodrecer", "infectar-se"],
    "corrompido": ["depravado", "viciado", "pervertido", "desmoralizado", "subornado", "comprado", "deteriorado", "estragado", "apodrecido", "infectado"],
    "corrompidos": ["depravados", "viciados", "pervertidos", "desmoralizados", "subornados", "comprados", "deteriorados", "estragados", "apodrecidos", "infectados"],
    "corrosão": ["desgaste", "deterioração", "destruição gradual", "erosão", "oxidação", "desintegração", "decomposição", "carcomição", "consumo gradual", "ação destrutiva"],
    "corrupção": ["desonestidade", "ilegalidade", "fraude", "suborno", "propina", "peculato", "desvio de verbas", "tráfico de influência", "extorsão", "concussão"],
    "corrupto": ["desonesto", "ilegal", "fraudulento", "subornável", "propinador", "peculatório", "que desvia verbas", "que usa tráfico de influência", "extorsionário", "concussivo"],
    "corso": ["ataque marítimo", "pilhagem no mar", "guerra de corso", "navio corsário", "pirata autorizado", "passeio", "desfile", "cortejo", "carnaval", "desfile carnavalesco"],
    "cortante": ["afiado", "aguçado", "penetrante", "incisivo", "pungente", "mordaz", "sarcástico", "agressivo", "que corta facilmente", "que fere com palavras"],
    "cortejar": ["namorar", "galantear", "flertar", "fazer a corte a", "seduzir", "atrair", "conquistar", "bajular", "adular", "lisonjear"],
    "cortejo": ["sequência", "série", "procissão", "acompanhamento", "comitiva", "desfile", "namoro", "galanteio", "flerte", "ato de cortejar"],
    "cortês": ["gentil", "educado", "amável", "atencioso", "polido", "refinado", "cavalheiresco", "urbano", "bem-educado", "deferente"],
    "cortesia": ["gentileza", "educação", "amabilidade", "atenção", "polidez", "refinamento", "cavalheirismo", "urbanidade", "boa educação", "deferência"],
    "cós": ["cintura de roupa", "parte da roupa que envolve a cintura", "cinturão", "faixa da cintura", "parte superior da saia ou calça", "onde se prende o cinto", "altura da cintura", "medida da cintura", "linha da cintura", "parte da roupa na altura da cintura"],
    "coscuvilhice": ["fofoca", "mexerico", "bisbilhotice", "intriga", "boato", "murmúrio", "diz-que-diz", "leva e traz", "falação", "conversinha maliciosa"],
    "coser": ["costurar", "unir com linha e agulha", "remendar", "zurzir", "fazer costura", "pregar", "alinhavar", "pespontar", "bordar", "confeccionar"],
    "cósmico": ["relativo ao cosmos", "universal", "infinito", "vasto", "celestial", "astronômico", "do universo", "planetário", "estelar", "intergaláctico"],
    "cosmogonia": ["teoria sobre a origem do universo", "criação do cosmos", "mito da criação", "explicação da origem do mundo", "narrativa da criação", "gênese cósmica", "formação do universo", "origem do sistema solar", "história da criação", "cosmologia mítica"],
    "cosmopolita": ["cidadão do mundo", "que se sente em casa em qualquer lugar", "que tem cultura e visão amplas", "que conhece muitos lugares", "internacional", "universal", "mundial", "que transcende fronteiras", "que não se apega a nacionalismos", "que tem abertura para diversas culturas"],
    "cosmovisão": ["visão de mundo", "concepção do universo", "maneira de ver o mundo", "filosofia de vida", "sistema de crenças", "conjunto de valores", "perspectiva existencial", "compreensão da realidade", "interpretação do universo", "ótica cultural"],
    "costume": ["hábito", "prática", "uso", "maneira", "modo", "rotina", "tradição", "praxe", "rito", "cerimônia"],
    "costumeira": ["habitual", "usual", "comum", "ordinária", "rotineira", "frequente", "normal", "consuetudinária", "típica", "corriqueira"],
    "cota": ["parte", "porção", "quota", "parcela", "contribuição", "rateio", "limite", "número determinado", "percentual", "divisão"],
    "cotação": ["preço", "valor", "taxa", "avaliação", "estimativa", "preço de mercado", "valor de câmbio", "cálculo de preço", "fixação de valor", "indicação de preço"],
    "cotado": ["avaliado", "estimado", "precioso", "valorizado", "bem considerado", "famoso", "notório", "renomado", "que tem cotação", "que tem preço"],
    "cotejar": ["comparar", "confrontar", "conferir", "examinar", "analisar", "verificar", "aferir", "contrastar", "igualar", "assemelhar"],
    "cotejo": ["comparação", "confronto", "conferência", "exame", "análise", "verificação", "aferição", "contraste", "paralelo", "semelhança"],
    "cotidiano": ["diário", "usual", "habitual", "comum", "rotineiro", "corriqueiro", "todo dia", "do dia a dia", "diariamente", "normal"],
    "cotista": ["acionista", "sócio", "participante de cota", "investidor em cotas", "proprietário de cotas", "membro de consórcio", "beneficiário de cota", "detentor de quota", "integrante de grupo com cotas", "aquele que possui cotas"],
    "couraçar": ["revestir com couraça", "proteger com armadura", "blindar", "fortificar", "reforçar", "defender", "guarnecer", "munir", "preparar para a defesa", "tornar resistente"],
    "cousa": ["coisa", "objeto", "ente", "ser", "item", "artigo", "elemento", "matéria", "substância", "aquilo"],
    "cova": ["buraco", "sepultura", "túmulo", "jazigo", "fosso", "cavidade", "depressão", "buraco na terra", "lugar de descanso final", "escavação para enterrar"],
    "covarde": ["pusilânime", "medroso", "temeroso", "frouxo", "fraco", "acovardado", "poltrão", "amarelão", "que não tem coragem", "que foge do perigo"],
    "covardia": ["pusilanimidade", "medo", "temor", "frouxidão", "fraqueza", "acovardamento", "poltronice", "amarelismo", "falta de coragem", "ato de covarde"],
    "cover": ["versão musical", "interpretação de outra música", "regravação", "música cover", "música interpretada por outro artista", "releitura musical", "adaptação musical", "nova versão de música", "interpretação de canção alheia", "música de outro artista"],
    "covil": ["esconderijo de animais", "toca", "antro", "refúgio", "lugar secreto", "ninho", "abrigo", "local de reunião secreta", "lugar de malfeitores", "esconderijo de bandidos"],
    "coxo": ["manco", "aleijado", "que manqueja", "que anda com dificuldade", "que tem deficiência em uma perna", "que tem claudicação", "que sofre de coxalgia", "que tem problema de locomoção", "que anda torto", "que tem dificuldade para andar"],
    "cozer": ["cozinhar", "ferver", "assar", "estufar", "preparar alimentos pelo calor", "fazer cozimento", "aquecer no fogo", "escaldar", "guisar", "refogar"],
    "cozinha": ["local para cozinhar", "fogão", "forno", "preparo de alimentos", "culinária", "gastronomia", "arte de cozinhar", "conjunto de utensílios de cozinha", "tipo de culinária", "estilo de preparo"],
    "crápula": ["indivíduo desprezível", "canalha", "vilão", "homem sem caráter", "pessoa imoral", "sujeito abjeto", "infame", "desonesto", "indigno", "perverso"],
    "crasso": ["grosseiro", "rude", "ignorante", "burro", "tosco", "basto", "denso", "espesso", "evidente", "flagrante"],
    "cravado": ["fixado", "espetado", "cravado com pregos", "incrustado", "entalhado", "impresso", "gravado", "fixo", "fincado", "inserido"],
    "credenciamento": ["ato de credenciar", "autorização", "habilitação", "licença", "registro", "reconhecimento", "acreditação", "qualificação", "certificação", "homologação"],
    "credibilidade": ["confiabilidade", "confiança", "reputação", "conceito", "prestígio", "autoridade", "validade", "veracidade", "solidez", "garantia"],
    "creditado": ["acreditado", "confiado", "abonado", "autorizado", "qualificado", "reconhecido", "registrado como crédito", "lançado como crédito", "depositado", "atribuído"],
    "credo": ["conjunto de crenças", "doutrina", "fé", "religião", "princípios", "dogma", "confissão de fé", "conjunto de dogmas", "sistema de crenças religiosas", "juramento"],
    "credor": ["aquele a quem se deve", "quem tem crédito", "quem empresta", "financiador", "mutuante", "investidor", "depositário", "beneficiário de crédito", "aquele que concede crédito", "quem tem direito a receber"],
    "crédulo": ["ingênuo", "inocente", "facilmente enganado", "que acredita em tudo", "simples", "bobo", "otário", "que confia facilmente", "que se deixa iludir", "que não desconfia"],
    "crença": ["fé", "convicção", "acreditar", "opinião", "juízo", "dogma", "princípio", "doutrina", "religião", "confiança"],
    "crendice": ["superstição", "crença popular", "mito", "lenda", "fábula", "engano", "ilusão", "erro", "superstição popular", "crença sem fundamento científico"],
    "creonte": ["personagem da mitologia grega", "tirano", "soberbo", "autoritário", "inflexível", "cruel", "injusto", "opressor", "déspota", "governante tirânico"],
    "crepitar": ["estalidar", "estalar", "chispar", "fazer ruído seco e repetido", "fazer estalos", "chamejar com ruído", "arder com estalos", "fazer pequenos estalos", "ranger", "friccionar ruidosamente"],
    "crepúsculo": ["fim da tarde", "começo da noite", "lusco-fusco", "ocaso", "poente", "sol poente", "fim do dia", "transição entre o dia e a noite", "aurora (figurado)", "declínio"],
    "crer": ["acreditar", "ter fé", "confiar", "supor", "imaginar", "julgar", "pensar", "achar", "estar certo de", "convencer-se"],
    "crescença": ["crescimento", "aumento", "desenvolvimento", "incremento", "elevação", "expansão", "progresso", "ascensão", "medra", "aumento gradual"],
    "crescer": ["aumentar", "desenvolver-se", "medrar", "elevar-se", "expandir-se", "progredir", "ascender", "multiplicar-se", "intensificar-se", "agravar-se"],
    "crescimento": ["aumento", "desenvolvimento", "medra", "elevação", "expansão", "progresso", "ascensão", "incremento", "multiplicação", "intensificação"],
    "cretina": ["idiota", "imbecil", "estúpida", "tonta", "burra", "néscia", "obtusa", "mentecapta", "oligofrênica (obsoleto)", "pessoa de pouco juízo"],
    "cretino": ["idiota", "imbecil", "estúpido", "tonto", "burro", "nédio", "obtuso", "mentecapto", "oligofrênico (obsoleto)", "pessoa de pouco juízo"],
    "criação": ["ato de criar", "feitura", "produção", "invenção", "originalidade", "desenvolvimento", "educação", "formação", "estabelecimento", "universo"],
    "criada": ["serva", "empregada doméstica", "ajudante", "doméstica", "subordinada", "mulher que presta serviços domésticos", "criada-muda (móvel)", "produzida", "feita", "inventada"],
    "criança": ["menino", "menina", "infante", "pueril", "pequeno", "filho", "bebê", "inocente", "noviço", "jovem"],
    "criar": ["produzir", "inventar", "originar", "gerar", "desenvolver", "educar", "formar", "estabelecer", "fundar", "imaginar"],
    "criatividade": ["inventividade", "originalidade", "imaginação", "engenhosidade", "inovação", "recursos", "talento", "capacidade de criar", "poder de invenção", "faculdade criadora"],
    "criatura": ["ser vivo", "indivíduo", "pessoa", "ente", "produto da criação", "ser humano", "animal", "bicho", "feitura", "obra"],
    "crime": ["delito", "infração penal", "ato ilícito", "transgressão da lei", "ofensa à lei", "ação criminosa", "ato punível", "violação da norma penal", "atentado", "pecado (figurado)"],
    "crioulo": ["descendente de africanos nascido no Brasil", "negro brasileiro", "dialeto afro-brasileiro", "língua crioula", "relativo a crioulos", "originário da colônia", "nascido na colônia", "mestiço de negro com branco ou índio (obsoleto)", "cavalo crioulo", "galinha crioula"],
    "crisálida": ["pupa", "fase intermediária da metamorfose", "estado de transformação", "casulo", "estado latente", "estado de repouso", "embrião", "germinação", "início", "potencial"],
    "crise": ["instabilidade", "dificuldade", "problema grave", "momento crítico", "conjuntura desfavorável", "aperto", "emergência", "colapso", "falta", "escassez"],
    "cristão": ["seguidor de Cristo", "adepto do cristianismo", "relativo ao cristianismo", "que professa a fé em Cristo", "membro de igreja cristã", "que vive segundo os ensinamentos de Cristo", "que crê em Jesus Cristo", "que pertence ao cristianismo", "que pratica o cristianismo", "relativo aos cristãos"],
    "cristianismo": ["religião monoteísta centrada na vida e nos ensinamentos de Jesus Cristo", "fé em Cristo", "doutrina cristã", "conjunto de igrejas cristãs", "seguidores de Cristo", "crença em Jesus como Messias", "religião fundada por Jesus", "fé cristã", "conjunto de valores cristãos", "prática da fé em Cristo"],
    "cristo": ["Jesus Cristo", "Messias", "Salvador", "Filho de Deus", "Redentor", "Ungido", "Cordeiro de Deus", "Senhor", "Emanuel", "Verbo"],
    "cristocêntrico": ["que tem Cristo como centro", "focado em Cristo", "que coloca Cristo no centro de tudo", "que tem Jesus como principal referência", "que gira em torno de Cristo", "que considera Cristo fundamental", "que prioriza Cristo", "que fundamenta-se em Cristo", "que tem Cristo como eixo", "que orienta-se por Cristo"],
    "critério": ["norma", "padrão", "regra", "princípio", "base", "fundamento", "parâmetro", "medida", "modelo", "referência"],
    "criterioso": ["exigente", "rigoroso", "cuidadoso", "meticuloso", "atento", "ponderado", "seletivo", "discriminativo", "apurado", "escrupuloso"],
    "crítica": ["julgamento", "avaliação", "análise", "exame", "apreciação", "censura", "reprovação", "nota", "resenha", "ensaio"],
    "criticar": ["julgar", "avaliar", "analisar", "examinar", "apreciar", "censurar", "reprovar", "impugnar", "atacar verbalmente", "comentar"],
    "criticidade": ["capacidade de análise crítica", "poder de julgamento", "senso crítico", "tendência a criticar", "estado de crise", "gravidade", "severidade", "momento crucial", "importância fundamental", "estado de alerta"],
    "crível": ["acreditável", "plausível", "convincente", "verossímil", "confiável", "que merece crédito", "que parece verdadeiro", "que inspira confiança", "que se pode acreditar", "que tem probabilidade de ser verdade"],
    "crivo": ["peneira", "filtro", "instrumento de seleção", "prova", "exame rigoroso", "teste", "seleção", "escolha", "análise minuciosa", "instrumento para separar"],
    "crônica": ["relato de fatos em ordem cronológica", "narrativa de acontecimentos", "artigo jornalístico sobre temas cotidianos", "reportagem", "história", "registro", "narração histórica", "doença de longa duração", "persistente", "habitual"],
    "crônico": ["persistente", "duradouro", "habitual", "inveterado", "constante", "contínuo", "de longa duração", "arraigado", "profundo", "incurável (em certas doenças)"],
    "cronologia": ["ordem dos eventos no tempo", "sequência temporal", "linha do tempo", "registro de datas", "histórico", "relação de acontecimentos por data", "estudo do tempo", "ciência da datação", "organização temporal", "sucessão de fatos"],
    "cronoscópio": ["instrumento para medir intervalos de tempo muito pequenos", "medidor de tempo preciso", "cronômetro de alta precisão", "aparelho para medir frações de segundo", "instrumento para registrar tempos mínimos", "medidor de velocidade (obsoleto)", "instrumento científico de medição temporal", "registrador de instantes", "medidor de eventos rápidos", "aparelho de cronometragem exata"],
    "croqui": ["esboço", "rascunho", "desenho preliminar", "projeto inicial", "planta simplificada", "bosquejo", "delineamento rápido", "primeira versão", "esquema", "traçado inicial"],
    "crucial": ["decisivo", "fundamental", "essencial", "vital", "importante", "determinante", "crítico", "principal", "básico", "inevitável"],
    "cruel": ["desumano", "impiedoso", "sádico", "feroz", "atroz", "bárbaro", "implacável", "desalmado", "malvado", "tirano"],
    "cruz": ["símbolo cristão", "instrumento de crucificação", "prova", "sofrimento", "tribulação", "dificuldade", "emblema", "sinal de mais", "interseção", "encontro"],
    "cruzeiro": ["viagem marítima de lazer", "navio de passageiros", "antiga moeda brasileira", "constelação do Cruzeiro do Sul", "viagem turística marítima", "navegação de recreio", "embarcação de turismo", "moeda brasileira extinta", "símbolo astronômico", "grupo de estrelas"],
    "cubículo": ["pequeno compartimento", "cubículo de trabalho", "cabine", "box", "pequeno quarto", "espaço delimitado", "compartimento individual", "cela pequena", "escritório individual pequeno", "divisão em um espaço maior"],
    "cuidado": ["atenção", "zelo", "precaução", "cautela", "desvelo", "esmero", "proteção", "vigilância", "tratamento", "assistência"],
    "cuidar": ["zelar", "atender", "tratar", "proteger", "guardar", "vigiar", "assistir", "governar", "preocupar-se", "ter cuidado"],
    "cuincar": ["guinchar", "miar", "gritar finamente", "emitir som agudo", "piar", "uivar baixo", "choramingar", "gemer baixinho", "soluçar", "lamentar"],
    "cujo": ["de quem", "do qual", "da qual", "dos quais", "das quais", "a quem", "ao qual", "à qual", "aos quais", "às quais"],
    "culatra": ["parte traseira de arma de fogo", "extremidade posterior", "parte de trás", "fundo", "parte inferior", "parte oculta", "parte menos importante", "parte que não aparece", "parte que fica para trás", "parte de apoio"],
    "culminação": ["auge", "ápice", "ponto mais alto", "clímax", "culminância", "cimo", "culme", "ponto máximo", "auge", "ápice"],
    "culminância": ["auge", "ápice", "ponto mais alto", "clímax", "culminação", "cimo", "culme", "ponto máximo", "auge", "ápice"],
    "culminante": ["no auge", "no ápice", "no ponto mais alto", "clímax", "máximo", "superior", "excelente", "principal", "decisivo", "fundamental"],
    "culminar": ["atingir o ponto mais alto", "chegar ao auge", "atingir o clímax", "finalizar", "concluir", "terminar", "arrematar", "findar", "ultimar", "rematar"],
    "culpa": ["responsabilidade", "autoria", "delito", "pecado", "erro", "falha", "omissão", "descumprimento", "remorso", "pesar"],
    "cultivar": ["plantar", "lavrar", "arar", "semear", "criar", "desenvolver", "aprimorar", "educar", "promover", "incentivar"],
    "culto": ["cerimônia religiosa", "adoração", "veneração", "homenagem", "reverência", "instruído", "erudito", "refinado", "ilustrado", "sábio"],
    "cultuar": ["adorar", "venerar", "reverenciar", "homenagear", "prestar culto a", "idolatrar", "endeusar", "celebrar", "exaltar", "honrar"],
    "cultura": ["conjunto de costumes", "tradições", "crenças", "valores", "conhecimentos", "arte", "hábitos", "educação", "refinamento", "civilização"],
    "cume": ["topo", "pico", "ápice", "culminância", "cimo", "coroa", "acume", "ponto mais alto", "extremidade superior", "vértice"],
    "cumeeira": ["parte mais alta do telhado", "linha divisória do telhado", "crista do telhado", "viga mestra do telhado", "topo do telhado", "parte superior da cobertura", "linha de junção das águas do telhado", "elemento estrutural do telhado", "ponto culminante do telhado", "parte mais elevada da construção"],
    "cúmplice": ["participante de crime", "auxiliador de delito", "colaborador em ato ilícito", "conivente", "parceiro em crime", "associado em delito", "ajudante em transgressão", "coautor", "partícipe", "aliado em segredo"],
    "cumplicidade": ["participação em crime", "auxílio em delito", "colaboração em ato ilícito", "conivência", "parceria em crime", "associação em delito", "ajuda em transgressão", "coautoria", "participação", "aliança secreta"],
    "cumpram": ["executem", "realizem", "efetuem", "obedeçam", "sigam", "observem", "satisfaçam", "completem", "terminem", "concluam"],
    "cumprido": ["executado", "realizado", "efetuado", "obedecido", "seguido", "observado", "satisfeito", "completo", "terminado", "concluído"],
    "cumprimentar": ["saudar", "felicitar", "parabenizar", "reverenciar", "honrar", "saudar formalmente", "dar os parabéns", "prestar homenagem", "dirigir palavras de cortesia", "fazer uma saudação"],
    "cumprimento": ["saudação", "felicitação", "parabéns", "reverência", "homenagem", "ato de cumprimentar", "observância", "execução", "realização", "conclusão"],
    "cumprir": ["executar", "realizar", "efetuar", "obedecer", "seguir", "observar", "satisfazer", "completar", "terminar", "concluir"],
    "cumprisse": ["executasse", "realizasse", "efetuasse", "obedecesse", "seguisse", "observasse", "satisfizesse", "completasse", "terminasse", "concluísse"],
    "cumulativamente": ["em conjunto", "adicionalmente", "sucessivamente", "em acréscimo", "juntamente", "ao mesmo tempo", "em adição", "de forma acumulada", "em soma", "conjuntamente com outros"],
    "cumulativo": ["acumulado", "adicional", "sucessivo", "aditivo", "conjunto", "total", "em soma", "que se acumula", "que adiciona", "que se junta"],
    "cúmulo": ["auge", "ápice", "extremo", "ponto máximo", "colmo", "limite", "excesso", "grau máximo", "o pior", "o mais alto"],
    "cunhado": ["irmão do cônjuge", "marido da irmã", "parente por afinidade", "irmão por casamento", "meu cunhado", "seu cunhado", "nosso cunhado", "vosso cunhado", "deles cunhado", "delas cunhado"],
    "cunhar": ["fabricar moedas", "criar", "inventar", "formar", "marcar", "imprimir", "gravar", "selar", "caracterizar", "denominar"],
    "cunho": ["característica", "marca", "sinal", "tipo", "índole", "natureza", "estilo", "modelo", "forma", "aspecto"],
    "cupidez": ["ganância", "avareza", "ambição desmedida", "ânsia por riquezas", "cobiça", "interesse excessivo por dinheiro", "mesquinhez", "sovinice", "afã de lucro", "sede de bens materiais"],
    "cupincha": ["amigo íntimo", "camarada", "parceiro", "chegado", "protegido", "favorito", "pessoa influente", "pessoa bem relacionada", "pessoa que tem poder", "pessoa que usa de influência"],
    "cupom": ["vale", "tíquete", "bilhete", "comprovante", "recibo", "senha", "bônus", "desconto", "vale-desconto", "bilhete premiado"],
    "cúpula": ["topo arredondado", "abóbada", "zimbório", "direção", "chefia", "comando", "liderança", "elite", "nível mais alto", "ápice"],
    "curador": ["responsável legal", "tutor", "guardião", "administrador de bens", "protetor", "defensor", "zelador", "conservador", "restaurador", "especialista em arte"],
    "curiboca": ["mestiço de branco com índio", "caboclo", "mameluco", "descendente de branco e indígena", "filho de branco e índia", "indígena aculturado", "habitante da região amazônica", "pessoa de origem mista", "indivíduo com traços indígenas e europeus", "brasileiro com ascendência indígena e europeia"],
    "curiosidade": ["desejo de saber", "interesse", "inquietude", "indagação", "pergunta", "assunto estranho", "objeto raro", "peculiaridade", "singularidade", "novidade"],
    "curioso": ["interessado", "inquieto", "indagador", "investigador", "observador", "estranho", "peculiar", "singular", "raro", "original"],
    "currículo": ["histórico profissional", "resumo profissional", "experiência profissional", "formação acadêmica", "qualificações", "dados pessoais", "carta de apresentação", "perfil profissional", "vitae", "histórico escolar"],
    "cursando": ["frequentando curso", "estudando", "matriculado em", "inscrito em", "realizando curso", "fazendo curso", "assistindo aulas de", "participando de curso", "em processo de formação", "dedicando-se a um curso"],
    "curso": ["disciplina", "matéria", "cadeira", "estudo", "aprendizado", "duração", "trajeto", "direção", "fluxo", "andamento"],
    "curtição": ["diversão", "lazer", "prazer", "gozo", "aproveitamento", "desfrute", "momento agradável", "passatempo", "entretenimento", "relaxamento"],
    "curtir": ["apreciar", "gostar", "desfrutar", "aproveitar", "divertir-se", "deleitar-se", "achar agradável", "achar bom", "experimentar prazer", "relaxar"],
    "curumim": ["menino indígena", "criança indígena", "garoto indígena", "filho de índio", "pequeno índio", "menino nativo", "criança nativa", "garoto nativo", "filho de nativo", "pequeno nativo"],
    "custear": ["pagar as despesas de", "financiar", "subsidiar", "manter financeiramente", "arcar com os custos de", "prover os fundos para", "cobrir os gastos de", "sustentar financeiramente", "dar suporte financeiro a", "solventar"],
    "custódia": ["guarda", "proteção", "vigilância", "detenção", "prisão", "encarceramento", "segurança", "preservação", "responsabilidade de cuidado", "manutenção sob proteção"],
    "customizar": ["personalizar", "adaptar", "modificar", "ajustar às necessidades do cliente", "tornar único", "individualizar", "dar um toque pessoal", "fazer sob medida", "adequar", "formatar"],
    "cutâneo": ["relativo à pele", "da pele", "epidérmico", "dérmico", "hipodérmico", "superficial", "externo", "tegumentar", "dermatológico", "que afeta a pele"],
    "cútis": ["pele", "tez", "epiderme", "derma", "hipoderme", "superfície da pele", "revestimento do corpo", "camada externa da pele", "pele humana", "tecido cutâneo"],
    "da mesma maneira": ["igualmente", "assim como", "do mesmo modo", "tal qual", "análogamente", "similarmente", "de igual forma", "da mesma forma", "de jeito igual", "de modo idêntico"],
    "dado": ["concedido", "entregue", "ofertado", "fornecido", "informação", "fato", "elemento", "prova", "pressuposto", "azar"],
    "dados": ["informações", "fatos", "elementos", "provas", "pressupostos", "estatísticas", "números", "valores", "registros", "jogos de azar"],
    "daí": ["a seguir", "então", "e depois", "desse lugar", "desse ponto", "por isso", "portanto", "em consequência", "logo", "então", "daquele tempo", "desde então", "daquela situação"],
    "dama": ["mulher nobre", "senhora", "rainha (no jogo de damas)", "carta de baralho", "mulher elegante", "mulher distinta", "companheira", "parceira", "namorada", "esposa"],
    "danada": ["travessa", "maliciosa", "endiabrada", "furiosa", "irritada", "danificada", "estragada", "prejudicial", "nociva", "intensa"],
    "danado": ["travesso", "malicioso", "endiabrado", "furioso", "irritado", "danificado", "estragado", "prejudicial", "nocivo", "intenso"],
    "danar": ["irritar", "enfurecer", "enraivecer", "molestar", "prejudicar", "estragar", "danificar", "fazer mal", "causar dano", "tornar-se furioso"],
    "dança": ["bailado", "coreografia", "passos", "movimentos rítmicos", "festa dançante", "bailarico", "sarau", "folia", "divertimento", "entretenimento"],
    "dançar": ["bailar", "mover-se ritmicamente", "coreografar", "participar de dança", "frequentar bailes", "divertir-se dançando", "fazer passos de dança", "rebolar", "sapatear", "girar"],
    "danificados": ["estragados", "avariados", "prejudicados", "lesionados", "deteriorados", "avariados", "danosos", "nocivos", "corroídos", "afetados"],
    "dano": ["prejuízo", "estrago", "lesão", "avaria", "deterioração", "mal", "ferimento", "ofensa", "avaria", "detrimento"],
    "dantes": ["antes", "anteriormente", "previamente", "outrora", "no passado", "em tempos idos", "antigamente", "já", "antes disso", "precedente"],
    "dantesco": ["infernal", "horrível", "terrível", "macabro", "assustador", "grotesco", "sinistro", "pavoroso", "medonho", "atroz"],
    "daquele": ["desse", "dessa", "daquilo", "deles", "delas", "referente àquele", "pertencente àquele", "originário daquele", "próximo àquele (em tempo ou espaço)", "semelhante àquele"],
    "dar": ["conceder", "entregar", "ofertar", "fornecer", "doar", "presentear", "golpear", "bater", "atingir", "produzir"],
    "dar à sola": ["fugir", "escapulir", "pôr-se a correr", "evadir-se", "desaparecer", "sumir", "ir embora rapidamente", "picar a mula", "bater em retirada", "dar no pé"],
    "dará": ["concederá", "entregará", "ofertará", "fornecerá", "doará", "presenteará", "golpeará", "baterá", "atingirá", "produzirá"],
    "data": ["dia", "mês", "ano", "dia específico", "ocasião", "época", "tempo", "registro cronológico", "informação temporal", "ponto no tempo"],
    "data venia": ["com a devida permissão", "com o devido respeito", "salvo melhor juízo", "com licença", "permita-me discordar", "respeitosamente", "com a devida consideração", "se me permite a ousadia", "com a sua permissão", "com o devido acatamento"],
    "data-venia": ["com a devida permissão", "com o devido respeito", "salvo melhor juízo", "com licença", "permita-me discordar", "respeitosamente", "com a devida consideração", "se me permite a ousadia", "com a sua permissão", "com o devido acatamento"],
    "datado": ["com data", "registrado com data", "que tem data", "antigo", "velho", "obsoleto", "fora de moda", "ultrapassado", "com data especificada", "com data de validade"],
    "datashow": ["projetor multimídia", "aparelho de projeção", "projetor de vídeo", "equipamento de apresentação", "projetor digital", "aparelho para exibir imagens e vídeos", "projetor de slides e filmes", "ferramenta de apresentação visual", "projetor de computador", "dispositivo de projeção"],
    "dava": ["concedia", "entregava", "ofertava", "fornecia", "doava", "presenteava", "golpeava", "batia", "atingia", "produzia"],
    "de": ["preposição", "posse", "origem", "procedência", "matéria", "assunto", "tempo", "modo", "lugar", "causa"],
    "de acordo": ["conforme", "em conformidade", "segundo", "em consonância", "em harmonia", "de comum acordo", "com consentimento", "em concordância", "em sintonia", "em consonância com"],
    "de novo": ["outra vez", "novamente", "mais uma vez", "de outra feita", "recém", "recentemente", "de fresco", "de retorno", "de recomeço", "de reincidência"],
    "de primeira": ["excelente", "ótimo", "de alta qualidade", "superior", "de primeira classe", "de primeira mão", "inicialmente", "primeiramente", "de imediato", "logo de início"],
    "de repente": ["subitamente", "inesperadamente", "improvisadamente", "de súbito", "de chofre", "abruptamente", "repentinamente", "de improviso", "de inopino", "de surpresa"],
    "de tal maneira": ["assim", "dessa forma", "desse modo", "de tal jeito", "tão", "de maneira tão", "de forma tão", "de modo tão", "a ponto de", "de tal sorte"],
    "de-modo-nenhum": ["de jeito nenhum", "de maneira nenhuma", "em hipótese alguma", "jamais", "nunca", "de forma alguma", "nem pensar", "de modo algum", "em nenhum caso", "de maneira nenhuma"],
    "de-preferência": ["preferencialmente", "antes", "de bom grado", "de melhor vontade", "de melhor jeito", "de modo preferido", "de forma preferida", "de melhor maneira", "com preferência", "de melhor opção"],
    "de-repente": ["subitamente", "inesperadamente", "improvisadamente", "de súbito", "de chofre", "abruptamente", "repentinamente", "de improviso", "de inopino", "de surpresa"],
    "deambulação": ["ato de deambular", "vagar", "andar sem rumo", "passeio errante", "caminhada sem destino", "perambulação", "ambulatório", "movimento errático", "deslocamento sem objetivo", "ato de vaguear"],
    "deambular": ["vagar", "andar sem rumo", "passear errantemente", "caminhar sem destino", "perambular", "andarilhar", "errar", "mover-se sem objetivo", "vaguear", "ambulatório"],
    "debaixo": ["embaixo", "inferiormente", "sob", "na parte inferior", "abaixo", "em posição inferior", "sob a superfície", "na parte de baixo", "abaixo de", "inferior"],
    "debalde": ["em vão", "inutilmente", "sem sucesso", "frustradamente", "baldadamente", "sem resultado", "à toa", "debalho", "infrutiferamente", "sem efeito"],
    "debate": ["discussão", "polêmica", "controvérsia", "disputa", "altercação", "confronto de ideias", "exame crítico", "conflito de opiniões", "palestra", "mesa redonda"],
    "debater": ["discutir", "polemizar", "contender", "altercar", "examinar criticamente", "confrontar ideias", "disputar", "argumentar", "contestar", "analisar"],
    "débeis": ["fracos", "frágeis", "delicados", "enfraquecidos", "languidos", "esmorecidos", "vulneráveis", "tenues", "insignificantes", "pequenos"],
    "debelar": ["vencer", "superar", "derrotar", "subjugar", "eliminar", "extinguir", "erradicar", "suprimir", "dominar", "controlar"],
    "débil": ["fraco", "frágil", "delicado", "enfraquecido", "languido", "esmorecido", "vulnerável", "tenue", "insignificante", "pequeno"],
    "debilidade": ["fraqueza", "fragilidade", "delicadeza", "enfraquecimento", "languidez", "esmorecimento", "vulnerabilidade", "tenuidade", "insignificância", "pequenez"],
    "debilitado": ["enfraquecido", "esgotado", "languido", "abatido", "cansado", "extenuado", "invigorado", "desvitalizado", "indisposto", "fragilizado"],
    "debiloide": ["fraco de espírito", "mentalmente fraco", "tolo", "ingênuo", "simplório", "limitado intelectualmente", "com inteligência abaixo da média", "com retardo mental leve (termo obsoleto)", "com dificuldades de aprendizado", "com desenvolvimento intelectual lento"],
    "debitar": ["lançar a débito", "registrar como débito", "cobrar", "descontar", "imputar", "atribuir", "culpar", "responsabilizar", "onerar", "gravar"],
    "débito": ["dívida", "obrigação financeira", "conta a pagar", "saldo devedor", "encargo", "custo", "despesa", "lançamento a débito", "registro devedor", "débito automático"],
    "debochado": ["zombeteiro", "sarcastico", "irônico", "ridicularizador", "que faz deboche", "que zombaria", "que ironiza", "que ridiculariza", "que escarnece", "que menospreza"],
    "deboche": ["zombaria", "sarcasmo", "ironia", "ridicularização", "escárnio", "menosprezo", "gracejo ofensivo", "motejo", "burla", "chacota"],
    "debruçar": ["inclinar-se sobre", "pender sobre", "curvar-se sobre", "espiar", "observar atentamente", "dedicar-se a", "concentrar-se em", "voltar-se para", "interessar-se por", "atentar para"],
    "debulhar": ["separar o grão da casca", "desgranar", "malhar", "limpar grãos", "extrair o miolo", "analisar minuciosamente", "examinar em detalhes", "escrutinar", "investigar a fundo", "dissecar"],
    "debutar": ["estrear", "apresentar-se pela primeira vez", "fazer sua primeira aparição", "iniciar sua carreira", "entrar em cena", "começar publicamente", "fazer sua primeira apresentação pública", "lançar-se", "inaugurar sua participação", "mostrar-se pela primeira vez ao público"],
    "década": ["período de dez anos", "decênio", "dez anos consecutivos", "conjunto de dez anos", "intervalo de dez anos", "dezena de anos", "dez anos seguidos", "lustro (obsoleto)", "período decenal", "ciclo de dez anos"],
    "decadência": ["declínio", "deterioração", "degradação", "ruína", "ocaso", "declínio moral", "declínio físico", "declínio econômico", "declínio cultural", "declínio político"],
    "decadente": ["em declínio", "em deterioração", "em degradação", "em ruínas", "em ocaso", "em declínio moral", "em declínio físico", "em declínio econômico", "em declínio cultural", "em declínio político"],
    "decaído": ["em declínio", "deteriorado", "degradado", "em ruínas", "em ocaso", "moralmente em declínio", "fisicamente debilitado", "economicamente em crise", "culturalmente em retrocesso", "politicamente enfraquecido"],
    "decálogo": ["dez mandamentos", "conjunto de dez regras fundamentais", "princípios básicos", "normas essenciais", "regras de conduta", "mandamentos divinos", "preceitos morais", "código de ética", "dez preceitos", "dez princípios"],
    "decalque": ["transferência de imagem", "cópia por transferência", "estampa transferível", "adesivo", "transfer", "película transferível", "reprodução por contato", "impressão por decalque", "arte de decalcar", "processo de transferência de imagem"],
    "decano": ["membro mais antigo", "veterano", "o mais velho", "o mais experiente", "presidente honorário", "reitor em exercício (em algumas universidades)", "professor mais antigo", "membro sênior", "o mais graduado", "o mais experiente em sua área"],
    "decantar": ["verter cuidadosamente", "transferir líquido", "separar o sedimento", "purificar", "louvar", "elogiar", "exaltar", "celebrar", "glorificar", "apreciar"],
    "decência": ["decoro", "pudor", "recato", "moralidade", "honestidade", "respeito", "dignidade", "comportamento adequado", "modéstia", "propriedade"],
    "decênio": ["período de dez anos", "década", "dez anos consecutivos", "conjunto de dez anos", "intervalo de dez anos", "dezena de anos", "dez anos seguidos", "lustro (obsoleto)", "período decenal", "ciclo de dez anos"],
    "decente": ["decoroso", "pudico", "recatado", "moral", "honesto", "respeitoso", "digno", "bem-comportado", "modesto", "apropriado"],
    "decepção": ["desilusão", "frustração", "desapontamento", "contrariedade", "amargura", "pesar", "desengano", "desencanto", "descontentamento", "desgosto"],
    "decepcionado": ["desiludido", "frustrado", "desapontado", "contrariado", "amargo", "pesaroso", "desenganado", "desencantado", "descontente", "desgostoso"],
    "decepcionar": ["desiludir", "frustrar", "desapontar", "contrariar", "amargar", "pesar", "desenganar", "desencantar", "descontentar", "desgostar"],
    "decerto": ["certamente", "seguramente", "indubitavelmente", "sem dúvida", "com certeza", "inegavelmente", "incontestavelmente", "seguro", "certo", "firme"],
    "decida": ["determine", "resolva", "delibere", "estipule", "defina", "conclua", "opte", "escolha", "arbitre", "sentencie"],
    "decidido": ["determinado", "resolvido", "firme", "convicto", "seguro", "resoluto", "intenso", "forte", "ousado", "corajoso"],
    "decidir": ["determinar", "resolver", "deliberar", "estipular", "definir", "concluir", "optar", "escolher", "arbitrar", "sentenciar"],
    "decifrar": ["interpretar", "desvendar", "descobrir o significado", "ler código", "traduzir código", "resolver enigma", "compreender o obscuro", "deslindar", "elucidar", "interpretar símbolos"],
    "decifrasse": ["interpretasse", "desvendasse", "descobrisse o significado", "lesse código", "traduzisse código", "resolvesse enigma", "compreendesse o obscuro", "deslindasse", "elucidasse", "interpretasse símbolos"],
    "decisão": ["determinação", "resolução", "deliberação", "estipulação", "definição", "conclusão", "opção", "escolha", "arbitramento", "sentença"],
    "decisivo": ["determinante", "crucial", "fundamental", "essencial", "vital", "importante", "conclusivo", "final", "resolutivo", "inevitável"],
    "decisório": ["que decide", "determinante", "resolutivo", "conclusivo", "final", "que tem poder de decisão", "que estabelece o resultado", "que põe fim à questão", "que soluciona", "que arbitra"],
    "declamar": ["recitar", "proferir com entonação", "ler em voz alta com expressividade", "interpretar oralmente", "enunciar solenemente", "proclamar", "exprimir com veemência", "falar com eloquência", "ler poeticamente", "entonar"],
    "declaração": ["afirmação", "enunciação", "proclamação", "manifestação", "testemunho", "depoimento", "informação oficial", "comunicado", "revelação", "confissão"],
    "declarante": ["aquele que declara", "testemunha", "depoente", "informante", "manifestante", "proclamador", "enunciador", "afirmador", "comunicante", "revelador"],
    "declarar": ["afirmar", "enunciar", "proclamar", "manifestar", "testemunhar", "depor", "informar oficialmente", "comunicar", "revelar", "confessar"],
    "declinado": ["recusado", "rejeitado", "negado", "diminuído", "baixado", "enfraquecido", "deteriorado", "inclinado", "conjugado (verbo)", "flexionado (substantivo)"],
    "declinar": ["recusar", "rejeitar", "negar", "diminuir", "baixar", "enfraquecer", "deteriorar-se", "inclinar-se", "conjugar (verbo)", "flexionar (substantivo)"],
    "declínio": ["queda", "diminuição", "redução", "enfraquecimento", "deterioração", "ocaso", "baixa", "recessão", "retrocesso", "depreciação"],
    "declive": ["inclinação", "rampa", "ladeira", "descida", "pendente", "escarpa", "talude", "barranco", "costa", "encosta"],
    "declivoso": ["inclinado", "em declive", "íngreme", "pendente", "ladeirento", "escarpado", "barrancoso", "em rampa", "que desce", "com inclinação acentuada"],
    "decodificar": ["interpretar código", "traduzir código", "converter código", "descriptografar", "desvendar mensagem secreta", "ler código cifrado", "converter sinais em informação", "compreender linguagem codificada", "resolver código", "interpretar sinais"],
    "decompor": ["desfazer", "desintegrar", "separar em partes", "analisar detalhadamente", "apodrecer", "deteriorar-se", "corromper-se", "desmembrar", "fragmentar", "dissolver"],
    "decomposição": ["desintegração", "separação em partes", "análise detalhada", "apodrecimento", "deterioração", "corrupção", "desmembramento", "fragmentação", "dissolução", "putrefação"],
    "decorar": ["ornamentar", "enfeitar", "adornar", "embelezar", "memorizar", "aprender de cor", "fixar na memória", "gravar na lembrança", "lembrar-se", "reter na mente"],
    "decoro": ["decência", "pudor", "recato", "moralidade", "honestidade", "respeito", "dignidade", "comportamento adequado", "modéstia", "propriedade"],
    "decorre": ["resulta", "deriva", "procede", "origina-se", "advém", "segue-se", "consequência", "emanar", "fluir", "nascer de"],




    //D
    "doce": ["açucarado", "melado", "suave", "meigo", "agradável"],
    "difícil": ["complicado", "complexo", "árduo", "trabalhoso", "desafiador"],
    "decidido": ["resoluto", "determinado", "firme", "convicto", "seguro"],
    "delicado": ["sensível", "frágil", "suave", "sutil", "refinado"],
    "duro": ["rígido", "resistente", "firme", "áspero", "sólido"],
    "doente": ["enfermo", "adoentado", "enfraquecido", "indisposto", "convalescente"],
    "dócil": ["manso", "obediente", "submisso", "tranquilo", "pacífico"],
    "desonesto": ["mentiroso", "corrupto", "trapaceiro", "fraudulento", "enganador"],
    "divertido": ["engraçado", "alegre", "animado", "cômico", "descontraído"],
    "desorganizado": ["bagunçado", "confuso", "desordenado", "caótico", "impreciso"],
    "determinado": ["firme", "decidido", "resoluto", "convicto", "persistente"],
    "desatento": ["distraído", "negligente", "descuidado", "relapso", "inadvertido"],
    "discreto": ["reservado", "comedido", "moderado", "prudente", "contido"],
    "duvidoso": ["incerto", "questionável", "inseguro", "ambíguo", "suspeito"],
    "desesperado": ["aflito", "angustiado", "atormentado", "abatido", "inconsolável"],
    "decente": ["honesto", "digno", "respeitável", "íntegro", "honrado"],
    "desleixado": ["relaxado", "negligente", "descuidado", "desorganizado", "preguiçoso"],
    "diferente": ["diverso", "distinto", "variado", "desigual", "singular"],
    "direto": ["reto", "objetivo", "franco", "linear", "claro"],
    "duradouro": ["permanente", "constante", "estável", "prolongado", "longevo"],
    //E
    "elegante": ["chique", "requintado", "sofisticado", "fino", "distinto"],
    "esperto": ["inteligente", "astuto", "sagaz", "rápido", "habilidoso"],
    "estranho": ["esquisito", "inusitado", "peculiar", "bizarro", "excêntrico"],
    "eficiente": ["competente", "produtivo", "capaz", "eficaz", "útil"],
    "educado": ["cortês", "polido", "respeitoso", "gentil", "civilizado"],
    "enorme": ["grande", "gigante", "imensurável", "vasto", "gigantesco"],
    "esforçado": ["dedicado", "aplicado", "trabalhador", "empenhado", "persistente"],
    "esperançoso": ["otimista", "confiante", "positivo", "animado", "encorajado"],
    "especial": ["único", "diferenciado", "singular", "exclusivo", "notável"],
    "emocionado": ["comovido", "sensibilizado", "tocado", "sentido", "enternecido"],
    "egoísta": ["egocêntrico", "individualista", "interesseiro", "autocentrado", "narcisista"],
    "efêmero": ["passageiro", "temporário", "transitório", "momentâneo", "breve"],
    "entusiasmado": ["animado", "empolgado", "motivado", "exaltado", "alegre"],
    "exato": ["preciso", "correto", "rigoroso", "fiel", "pontual"],
    "estrito": ["rígido", "rigoroso", "limitado", "restrito", "severo"],
    "envergonhado": ["tímido", "acanhado", "constrangido", "sem graça", "embaraçado"],
    "exigente": ["rigoroso", "detalhista", "severo", "perfeccionista", "criterioso"],
    "elevado": ["alto", "superior", "nobre", "relevante", "grandioso"],
    "escuro": ["sombrio", "obscuro", "apagado", "nebuloso", "negruzco"],
    "essencial": ["fundamental", "necessário", "vital", "básico", "primordial"],
    //F
    "feliz": ["contente", "alegre", "satisfeito", "radiante", "jubiloso"],
    "forte": ["resistente", "robusto", "vigoroso", "potente", "valente"],
    "fácil": ["simples", "acessível", "compreensível", "descomplicado", "elementar"],
    "fraco": ["débil", "frágil", "vulnerável", "tenue", "insuficiente"],
    "famoso": ["conhecido", "célebre", "popular", "notório", "renomado"],
    "fiel": ["leal", "constante", "dedicado", "honesto", "íntegro"],
    "feio": ["desagradável", "horrível", "repulsivo", "esquisito", "deformado"],
    "fresco": ["frio", "gelado", "recente", "novo", "revigorante"],
    "falso": ["mentiroso", "enganoso", "impreciso", "hipócrita", "fraudulento"],
    "furioso": ["irritado", "enfurecido", "colérico", "bravo", "raivoso"],
    "firme": ["sólido", "resoluto", "seguro", "estável", "decidido"],
    "flexível": ["maleável", "adaptável", "ajustável", "versátil", "moldável"],
    "fantástico": ["incrível", "extraordinário", "espetacular", "maravilhoso", "sensacional"],
    "folgado": ["relaxado", "preguiçoso", "indolente", "acomodado", "despreocupado"],
    "formoso": ["bonito", "belo", "encantador", "gracioso", "atraente"],
    "farto": ["abundante", "cheio", "repleto", "saciado", "generoso"],
    "firmeza": ["estabilidade", "segurança", "constância", "resistência", "determinação"],
    "fácil": ["simples", "descomplicado", "claro", "básico", "elementar"],
    "frequente": ["constante", "repetido", "habitual", "comum", "recorrente"],
    "furto": ["roubo", "subtração", "assalto", "apropriação", "crime"],
    //G
    "grande": ["enorme", "gigante", "vasto", "extenso", "amplo"],
    "gentil": ["amável", "cordial", "educado", "atencioso", "afável"],
    "generoso": ["altruísta", "solidário", "caridoso", "benevolente", "bondoso"],
    "grosso": ["espesso", "robusto", "forte", "pesado", "rude"],
    "grato": ["agradecido", "reconhecido", "obrigado", "satisfeito", "contente"],
    "gostoso": ["saboroso", "delicioso", "apetitoso", "agradável", "prazeroso"],
    "glorioso": ["vitorioso", "triunfante", "honroso", "majestoso", "resplandecente"],
    "genuíno": ["autêntico", "verdadeiro", "real", "legítimo", "original"],
    "grave": ["sério", "crítico", "perigoso", "importante", "urgente"],
    "gelado": ["frio", "congelado", "gélido", "fresco", "refrigerado"],
    "gozador": ["brincalhão", "zombeteiro", "engraçado", "irreverente", "sarcástico"],
    "ganancioso": ["ambicioso", "avarento", "cobiçoso", "interesseiro", "egoísta"],
    "grosseiro": ["rude", "áspero", "mal-educado", "bruto", "descortês"],
    "glacial": ["gélido", "frio", "gelado", "polar", "árctico"],
    "gigante": ["enorme", "colossal", "imensurável", "vasto", "monstruoso"],
    "garboso": ["vistoso", "elegante", "formoso", "imponente", "aprumado"],
    "galante": ["cortês", "educado", "amável", "cavalheiro", "cordial"],
    "gritante": ["evidente", "marcante", "notório", "chocante", "ostensivo"],
    "gastador": ["esbanjador", "prodigal", "descontrolado", "dissipador", "imprudente"],
    "governável": ["controlável", "administrável", "dominável", "submisso", "disciplinado"],
    //H
    "honesto": ["íntegro", "justo", "sincero", "decente", "leal"],
    "humilde": ["modesto", "simples", "recatado", "despretensioso", "respeitoso"],
    "honrado": ["digno", "respeitável", "valoroso", "virtuoso", "ilustre"],
    "habilidoso": ["capaz", "competente", "ágil", "talentoso", "eficiente"],
    "horrível": ["terrível", "assustador", "medonho", "pavoroso", "repulsivo"],
    "heróico": ["valente", "corajoso", "bravo", "destemido", "nobre"],
    "hábil": ["esperto", "inteligente", "astuto", "ágil", "eficaz"],
    "honra": ["respeito", "dignidade", "glória", "prestígio", "valor"],
    "higiênico": ["limpo", "saudável", "sanitário", "asseado", "salubre"],
    "honestidade": ["retidão", "integridade", "decência", "lealdade", "transparência"],
    "hostil": ["agressivo", "antipático", "ríspido", "áspero", "inamistoso"],
    "hesitante": ["indeciso", "vacilante", "inseguro", "tímido", "relutante"],
    "habitual": ["frequente", "constante", "rotineiro", "comum", "regular"],
    "harmonioso": ["equilibrado", "agradável", "consonante", "suave", "simétrico"],
    "hipócrita": ["falso", "disfarçado", "enganador", "mentiroso", "duas caras"],
    "horrendo": ["horrível", "terrível", "assustador", "espantoso", "medonho"],
    "histórico": ["antigo", "memorável", "marcante", "lendário", "importante"],
    "humorístico": ["cômico", "engraçado", "divertido", "hilário", "sarcástico"],
    "honrando": ["valorizando", "respeitando", "prestigiando", "reconhecendo", "glorificando"],
    "harmonia": ["equilíbrio", "paz", "união", "consonância", "entendimento"],
    //I
    "inteligente": ["esperto", "sagaz", "perspicaz", "brilhante", "genial"],
    "importante": ["relevante", "significativo", "valioso", "essencial", "fundamental"],
    "interessante": ["curioso", "atraente", "cativante", "envolvente", "instigante"],
    "intenso": ["forte", "profundo", "vigoroso", "firme", "marcante"],
    "incrível": ["fantástico", "extraordinário", "surpreendente", "maravilhoso", "espetacular"],
    "ignorante": ["inculto", "desinformado", "analfabeto", "indouto", "burro"],
    "injusto": ["parcial", "desigual", "desonesto", "indevido", "errado"],
    "insistente": ["persistente", "perseverante", "teimoso", "obstinado", "determinado"],
    "incansável": ["persistente", "ativo", "tenaz", "constante", "vigoroso"],
    "imparcial": ["justo", "neutro", "equilibrado", "objetivo", "isento"],
    "inseguro": ["indeciso", "temeroso", "duvidoso", "vacilante", "medroso"],
    "ideal": ["perfeito", "adequado", "excelente", "apropriado", "ótimo"],
    "impossível": ["inviável", "inalcançável", "irrealizável", "inexecutável", "inconcebível"],
    "ilustre": ["famoso", "renomado", "respeitado", "célebre", "reconhecido"],
    "infeliz": ["triste", "abatido", "melancólico", "amargurado", "descontente"],
    "ingênuo": ["inocente", "puro", "simples", "crédulo", "desprevenido"],
    "imediato": ["rápido", "instantâneo", "urgente", "pronto", "instantâneo"],
    "invisível": ["imperceptível", "oculto", "encoberto", "indetectável", "transparente"],
    "ilógico": ["irracional", "incoerente", "absurdo", "sem sentido", "contraditório"],
    "imutável": ["inalterável", "constante", "firme", "permanente", "fixo"],
    //J
    "bom": ["justo", "honesto", "íntegro", "correto", "ético"],
    "jovem": ["novo", "adolescente", "juvenil", "imatura", "recentemente nascido"],
    "julgador": ["crítico", "analítico", "preconceituoso", "opinioso", "avaliador"],
    "jovial": ["alegre", "animado", "vibrante", "juvenil", "festivo"],
    "justo": ["honesto", "íntegro", "equilibrado", "imparcial", "correto"],
    "jogado": ["abandonado", "negligenciado", "desprezado", "desconsiderado", "esquecido"],
    "jardineiro": ["horticultor", "paisagista", "cultivador", "plantador", "agricultor"],
    "jovem": ["novo", "adolescente", "imaduro", "iniciante", "recentemente nascido"],
    "jaulado": ["aprisionado", "encarcerado", "confinado", "preso", "restrito"],
    "jovem": ["novo", "adolescente", "imatura", "inexperiente", "fresco"],
    "jurídico": ["legal", "judicial", "legítimo", "oficial", "forense"],
    //K
    "karaokê": ["cantoria", "diversão musical", "show de talentos", "evento musical", "atividade recreativa"],
    "kilograma": ["quilo", "peso", "unidade de medida", "peso em gramas", "unidade de massa"],
    "ketchup": ["molho de tomate", "condimento", "sauce", "molho agridoce", "molho para frituras"],
    "kiwi": ["fruta exótica", "fruta verde", "fruta de polpa", "fruta tropical", "fruta macia"],
    //L
    "lindo": ["bonito", "belo", "formoso", "atraente", "encantador"],
    "lento": ["devagar", "vagaroso", "tardio", "demorado", "morno"],
    "leve": ["suave", "delicado", "fácil", "flutuante", "leve"],
    "longe": ["distante", "afastado", "remoto", "distante", "longínquo"],
    "lucrativo": ["rentável", "vantajoso", "proveitoso", "frutífero", "beneficioso"],
    "lúgubre": ["sombrio", "sinistro", "macabro", "melancólico", "triste"],
    "leal": ["fiel", "honesto", "íntegro", "justo", "sincero"],
    "liso": ["suave", "lisinho", "achatado", "escorregadio", "sem rugas"],
    "luminoso": ["brilhante", "radiante", "iluminado", "resplandecente", "reluzente"],
    "lamentável": ["triste", "desolador", "deplorável", "patético", "miserável"],
    "liberal": ["progressista", "democrático", "tolerante", "aberto", "descomplicado"],
    "liso": ["sem dinheiro", "sem recursos", "pobre", "necessitado", "sem fundos"],
    "ligeiro": ["rápido", "ágil", "veloz", "célere", "despachado"],
    "lúdico": ["divertido", "brincalhão", "recreativo", "alegre", "jocoso"],
    "luxuoso": ["requintado", "sofisticado", "opulento", "esplêndido", "grandioso"],
    "limitado": ["restrito", "enxuto", "reduzido", "escasso", "restritivo"],
    "letal": ["mortal", "fatal", "perigoso", "destruidor", "letal"],
    "lento": ["vagaroso", "demorado", "tardio", "lento", "gradual"],
    //M
    "muito": ["bastante", "extremamente", "consideravelmente", "significativamente", "profundamente"],
    "mágico": ["encantado", "sobrenatural", "extraordinário", "maravilhoso", "incrível"],
    "maior": ["superior", "mais grande", "mais elevado", "mais alto", "mais importante"],
    "médico": ["doutor", "especialista", "profissional de saúde", "terapeuta", "clínico"],
    "manso": ["calmo", "tranquilo", "suave", "sereno", "pacífico"],
    "misterioso": ["enigmático", "misterioso", "esotérico", "oculto", "incompreensível"],
    "magnífico": ["grandioso", "esplêndido", "maravilhoso", "deslumbrante", "incrível"],
    "moderno": ["contemporâneo", "atual", "inovador", "recente", "avançado"],
    "meigo": ["amável", "carinhoso", "afetuoso", "gentil", "doce"],
    "muito": ["excessivamente", "enormemente", "demasiadamente", "altamente", "fortemente"],
    "maluco": ["louco", "insano", "pirado", "demente", "perturbado"],
    "maduro": ["crescido", "desenvolvido", "experiente", "sábio", "pronto"],
    "moreno": ["bronzear", "escuro", "queimado", "bronzeado", "da cor do bronze"],
    "membro": ["integrante", "parte", "elemento", "participante", "component"],
    "misterioso": ["enigmático", "oculto", "misterioso", "cifrado", "incompreensível"],
    "mergulhado": ["imerso", "submerso", "afundado", "afogado", "engolido"],
    "magnífico": ["impressionante", "esplêndido", "maravilhoso", "extraordinário", "deslumbrante"],
    //N
    "novo": ["recente", "inovador", "moderno", "atual", "fresco"],
    "natural": ["orgânico", "autêntico", "genuíno", "inato", "próprio"],
    "necessário": ["indispensável", "essencial", "importante", "fundamental", "vital"],
    "negativo": ["desfavorável", "ruim", "contrário", "desaprovado", "nocivo"],
    "nobre": ["ilustre", "digno", "honrado", "respeitável", "distinguir"],
    "notável": ["reconhecido", "importante", "destacado", "singular", "memorável"],
    "normal": ["comum", "habitual", "rotineiro", "regular", "usual"],
    "nervoso": ["ansioso", "agitado", "tenso", "irritado", "preocupado"],
    "nocivo": ["prejudicial", "danoso", "perigoso", "maléfico", "destrutivo"],
    "nítido": ["claro", "visível", "evidente", "luminoso", "definido"],
    "nacional": ["patriótico", "do país", "local", "internacional", "regional"],
    "neutro": ["imparcial", "objetivo", "equilibrado", "sem partido", "sem tendência"],
    "nevoeiro": ["névoa", "bruma", "neblina", "borrifo", "vapores"],
    "nunca": ["jamais", "nunca mais", "em hipótese alguma", "de forma alguma", "em nenhum momento"],
    "notório": ["conhecido", "célebre", "reconhecido", "famoso", "renomado"],
    "nervoso": ["agitado", "ansioso", "irritado", "preocupado", "tenso"],
    //O
    "obrigado": ["grato", "agradecido", "reconhecido", "obrigado", "reconhecido"],
    "obscuro": ["escuro", "sombrio", "difuso", "turbio", "nebuloso"],
    "ordenado": ["organizado", "arrumado", "metódico", "planejado", "arrumado"],
    "obstinado": ["determinado", "teimoso", "persistente", "insistente", "firme"],
    "original": ["autêntico", "genuíno", "único", "inédito", "verdadeiro"],
    "obeso": ["gordo", "pesado", "volumoso", "corpulento", "farto"],
    "ousado": ["corajoso", "audacioso", "valente", "arrojado", "destemido"],
    "ocioso": ["preguiçoso", "inativo", "vadio", "oportuno", "vago"],
    "optimista": ["positivo", "esperançoso", "confiante", "iludido", "animado"],
    "ouvido": ["auditivo", "sensitivo", "sonoro", "acústico", "capaz de ouvir"],
    "oculto": ["escondido", "disfarçado", "encoberto", "misterioso", "invisível"],
    "obrigatório": ["necessário", "imperativo", "exigido", "indispensável", "forçado"],
    "opcional": ["facultativo", "voluntário", "livre", "discricionário", "escolhido"],
    "opaco": ["sem brilho", "fosco", "escuro", "sem transparência", "matte"],
    "otimizado": ["melhorado", "aperfeiçoado", "refinado", "aperfeiçoado", "eficiente"],
    "orgânico": ["natural", "biológico", "ecológico", "vegetal", "vivo"],
    //P
    "próximo": ["perto", "adjacente", "contíguo", "imediato", "vizinho"],
    "positivo": ["favorável", "benéfico", "construtivo", "proficiente", "otimista"],
    "perfeito": ["impecável", "ideal", "excelente", "incrível", "completo"],
    "poderoso": ["forte", "influente", "fortificado", "impotente", "dominante"],
    "pobre": ["necessitado", "carente", "impecúrio", "desfavorecido", "em dificuldades"],
    "preciso": ["exato", "acurado", "detalhado", "exato", "específico"],
    "pesado": ["forte", "denso", "massivo", "robusto", "pesado"],
    "prazeroso": ["agradável", "delicioso", "encantador", "divertido", "satisfatório"],
    "pacífico": ["tranquilo", "calmo", "sereno", "harmonioso", "pacato"],
    "pungente": ["doloroso", "emocionante", "triste", "comovente", "agudo"],
    "prático": ["funcional", "útil", "eficaz", "objetivo", "direto"],
    "potente": ["forte", "poderoso", "intenso", "robusto", "energético"],
    "perigoso": ["arriscado", "risky", "ameaçador", "preocupante", "desafiador"],
    "paciente": ["calmo", "tolerante", "resiliente", "persistente", "controlado"],
    "procurado": ["desejado", "buscado", "cobiçado", "almejado", "ansiado"],
    "promissor": ["esperançoso", "potencial", "favorável", "perspectivo", "positivo"],
    "precioso": ["valioso", "importante", "inestimável", "raro", "singular"],
    "próprio": ["individual", "pertencente", "particular", "adequado", "autêntico"],
    "perturbador": ["inquietante", "desconcertante", "alarmante", "desagradável", "preocupante"],
    //Q
    "quieto": ["calmo", "tranquilo", "sereno", "silencioso", "pacífico"],
    "qualificado": ["habilitado", "competente", "capacitado", "experiente", "aptidão"],
    "quente": ["caloroso", "abrasador", "ardente", "intenso", "fervente"],
    "querido": ["amado", "estimado", "adorado", "precioso", "valioso"],
    "qualquer": ["indiferente", "qualquer um", "qualquer coisa", "qualquer pessoa", "qualquer tipo"],
    "químico": ["biológico", "elementar", "molecular", "químico", "composto"],
    "quantitativo": ["numérico", "medido", "mensurável", "contável", "numeroso"],
    "quebrado": ["deteriorado", "partido", "rompido", "dano", "rachado"],
    "quase": ["aproximadamente", "cerca de", "perto de", "meio que", "próximo de"],
    "qualificado": ["habilitado", "preparado", "capacitado", "especializado", "experiente"],
    "questionável": ["duvidoso", "contestado", "suspeito", "incerto", "ambíguo"],
    //R
    "rápido": ["ligeiro", "veloz", "celere", "imediato", "expedito"],
    "rico": ["abastado", "próspero", "opulento", "fortuna", "afluente"],
    "real": ["verdadeiro", "autêntico", "genuíno", "sincero", "concreto"],
    "ruim": ["mau", "desfavorável", "nocivo", "dano", "imprestável"],
    "respeitável": ["digno", "honrado", "ilustre", "reconhecido", "respeitoso"],
    "relevante": ["importante", "significativo", "notável", "fundamental", "substancial"],
    "rígido": ["duro", "severo", "estrito", "inflexível", "implacável"],
    "radiante": ["brilhante", "resplandecente", "luminoso", "radiante", "reluzente"],
    "raro": ["singular", "extraordinário", "incomum", "único", "excepcional"],
    "resistente": ["forte", "robusto", "duro", "resiliente", "inflexível"],
    "realista": ["prático", "objetivo", "factual", "racional", "equilibrado"],
    "reconhecido": ["respeitado", "distinguido", "reconhecível", "notável", "ilustre"],
    "reformado": ["modificado", "alterado", "renovado", "revigorado", "restaurado"],
    "repetido": ["frequente", "costumeiro", "reiterado", "habitual", "comum"],
    "risonho": ["sorridente", "alegre", "feliz", "animado", "contente"],
    "razoável": ["adequado", "satisfatório", "decente", "aceitável", "razoável"],
    "rancoroso": ["ressentido", "vingativo", "odiado", "amargo", "azedo"],
    //S
    "simples": ["básico", "elementar", "direto", "modesto", "descomplicado"],
    "seguro": ["protegido", "confiável", "estável", "sólido", "blindado"],
    "sincero": ["honesto", "genuíno", "verdadeiro", "franco", "autêntico"],
    "sensível": ["delicado", "emocional", "inteligente", "perceptivo", "receptivo"],
    "suave": ["delicado", "agradável", "suave", "morno", "ameno"],
    "sábio": ["inteligente", "erudito", "astuto", "conhecedor", "sagaz"],
    "sério": ["grave", "importante", "formal", "respeitável", "firme"],
    "simples": ["modesto", "comum", "básico", "elementar", "direto"],
    "sutil": ["delicado", "leve", "intenso", "subtil", "discreto"],
    "suficiente": ["adequado", "satisfatório", "bastante", "apto", "completo"],
    "severo": ["rígido", "estrito", "severo", "dificultoso", "rigoroso"],
    "safado": ["imoral", "desonesto", "vagabundo", "indigno", "sem vergonha"],
    "sensato": ["prudente", "racional", "equilibrado", "ponderado", "coerente"],
    "sucesso": ["vitória", "prosperidade", "realização", "glória", "triunfo"],
    "solidário": ["compreensivo", "empático", "generoso", "altruísta", "benevolente"],
    "simpático": ["amigável", "agradável", "encantador", "gentil", "cativante"],
    "sufocante": ["opressor", "intenso", "pesado", "insuportável", "incomodante"],
    //T
    "tímido": ["reservado", "introvertido", "medroso", "retraído", "apreensivo"],
    "tranquilo": ["calmo", "sereno", "pacífico", "plácido", "descontraído"],
    "terrível": ["horrível", "assustador", "pavoroso", "medonho", "tenso"],
    "tolerante": ["compreensivo", "flexível", "paciente", "aceitante", "respeitoso"],
    "triste": ["melancólico", "abatumado", "deprimido", "desolado", "desanimado"],
    "tenso": ["apertado", "intenso", "rigoroso", "desconfortável", "nervoso"],
    "tentador": ["atraente", "sedutor", "cativante", "invitante", "irresistível"],
    "típico": ["característico", "usual", "comum", "tradicional", "convencional"],
    "tão": ["tanto", "tão grande", "extremo", "muito", "absoluto"],
    "tolerante": ["flexível", "compreensivo", "paciente", "permissivo", "aceitante"],
    "transformador": ["revolucionário", "inovador", "radical", "mudante", "impactante"],
    "triunfante": ["vitorioso", "bem-sucedido", "conquistador", "glorioso", "bem-aventurado"],
    "teimoso": ["obstinado", "persistente", "insistente", "firme", "determinado"],
    "tranquilizador": ["calmante", "relaxante", "aliviador", "suavizante", "apaziguador"],
    "trágico": ["fatal", "lamentável", "desolador", "catastrófico", "desastroso"],
    //U
    "único": ["singular", "exclusivo", "especial", "inimitável", "irrepetível"],
    "usado": ["utilizado", "aproveitado", "exaurido", "exercido", "empregado"],
    "útil": ["prático", "eficaz", "funcional", "vantajoso", "proveitoso"],
    "urgente": ["imediato", "emergencial", "pressante", "crítico", "necessário"],
    "unido": ["coeso", "juntos", "solidário", "integrado", "harmonioso"],
    "único": ["irreplicável", "exclusivo", "singular", "inimitável", "autêntico"],
    "unilateral": ["individual", "isolado", "monolateral", "único", "exclusivo"],
    "universitário": ["acadêmico", "educacional", "cultural", "intelectual", "estudantil"],
    //V
    "verdadeiro": ["genuíno", "autêntico", "real", "sincero", "honesto"],
    "veloz": ["rápido", "ligeiro", "celere", "ágil", "expedito"],
    "vivo": ["ativo", "animado", "dinâmico", "efervescente", "dinâmico"],
    "vasto": ["extenso", "amplo", "grande", "abrangente", "profundo"],
    "vulnerável": ["exposto", "sensível", "fragilizado", "precarizado", "desprotegido"],
    "vazio": ["ocioso", "desabitado", "incompleto", "aberto", "nulo"],
    "valoroso": ["valente", "corajoso", "heróico", "digno", "honroso"],
    "visível": ["perceptível", "evidente", "claro", "manifeste", "notável"],
    "vigoroso": ["forte", "robusto", "energético", "intenso", "saudável"],
    "volúvel": ["instável", "incerto", "variável", "imprevisível", "volátil"],
    "vivo": ["dinâmico", "ativo", "vibrante", "efervescente", "intenso"],
    //W
    "web": ["rede", "internet", "mundo digital", "plataforma", "ambiente virtual"],
    "wellness": ["bem-estar", "saúde", "qualidade de vida", "equilíbrio", "higiene"],
    "workshop": ["oficina", "seminário", "treinamento", "curso", "evento educacional"],
    //X
    "xará": ["homônimo", "igual", "semelhante", "colega", "companheiro"],
    "xenofóbico": ["preconceituoso", "intolerante", "discriminatório", "racista", "excludente"],
    "xixi": ["urina", "micção", "peido", "vazio", "gasto"],
    //Y
    "yoga": ["meditação", "exercício mental", "prática de equilíbrio", "técnica de relaxamento", "disciplinamento espiritual"],
    "youtuber": ["criador de conteúdo", "influenciador digital", "produtor de vídeos", "vlogger", "streamer"],
    //Z
    "zeloso": ["cuidadoso", "atento", "diligente", "precavido", "dedicado"],
    "zangado": ["irritado", "aborrecido", "furioso", "enfurecido", "raivoso"],
    "zoológico": ["parque", "reservatório", "santuário de animais", "centro de preservação", "safári"],
    "zero": ["nulo", "vazio", "nada", "inexistente", "neutro"],
    "zumbido": ["ruído", "som", "barulho", "eco", "vibração"],
    "ziguezague": ["curva", "desvio", "deslocamento", "volta", "balanço"],
    "zéfiros": ["brisa", "vento suave", "ar", "ar fresco", "breeze"]
};
// Modificação 1: Adicionar um objeto para armazenar as substituições
let substituicoes = {};
// 1. Adicione esta variável global logo após a declaração do bancoDeSinonimos
let indiceSinonimos = {};
// 2. Adicione esta função para criar o índice invertido
function atualizarIndiceSinonimos() {
    indiceSinonimos = {};
    Object.keys(bancoDeSinonimos).forEach(palavraPrincipal => {
        bancoDeSinonimos[palavraPrincipal].forEach(sinonimo => {
            indiceSinonimos[sinonimo.toLowerCase()] = palavraPrincipal;
        });
    });
}

// Funções para importar e exportar o dicionário de sinônimos
function exportarSinonimos() {
    // Converter o banco de sinônimos para JSON e fazer download
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(bancoDeSinonimos));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "sinonimos.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importarSinonimos(evento) {
    const arquivo = evento.target.files[0];
    if (arquivo) {
        const leitor = new FileReader();
        leitor.onload = function (e) {
            try {
                const sinonimosImportados = JSON.parse(e.target.result);
                // Substituir ou mesclar com o banco existente
                Object.assign(bancoDeSinonimos, sinonimosImportados);
                alert('Sinônimos importados com sucesso!');
                // Limpar o input de arquivo
                document.getElementById('importarArquivo').value = '';
                // Atualizar qualquer interface que mostre os sinônimos
                atualizarListaSinonimos();
            } catch (erro) {
                alert('Erro ao importar sinônimos: ' + erro.message);
            }
        };
        leitor.readAsText(arquivo);
    }
}

// Funções para gerenciar sinônimos (adicionar, editar, excluir)
function adicionarSinonimo(palavra, sinonimos) {
    if (!palavra || palavra.trim() === '') {
        alert('Por favor, digite uma palavra válida.');
        return false;
    }

    const palavraLower = palavra.toLowerCase().trim();

    // Se a palavra já existe, alertar e não sobrescrever
    if (bancoDeSinonimos[palavraLower] && !confirm(`A palavra "${palavraLower}" já existe. Deseja substituir seus sinônimos?`)) {
        return false;
    }

    // Converter string de sinônimos em array se necessário
    let sinonimosArray = sinonimos;
    if (typeof sinonimos === 'string') {
        sinonimosArray = sinonimos.split(',').map(s => s.trim()).filter(s => s !== '');
    }

    if (!sinonimosArray || sinonimosArray.length === 0) {
        alert('Por favor, adicione pelo menos um sinônimo.');
        return false;
    }

    bancoDeSinonimos[palavraLower] = sinonimosArray;
    // ADICIONE ESTA LINHA
    atualizarIndiceSinonimos();
    return true;
}

function editarSinonimo(palavraAntiga, palavraNova, sinonimos) {
    const palavraAntigaLower = palavraAntiga.toLowerCase().trim();
    const palavraNovaLower = palavraNova.toLowerCase().trim();

    // Verificar se a palavra existe
    if (!bancoDeSinonimos[palavraAntigaLower]) {
        alert(`A palavra "${palavraAntigaLower}" não existe no dicionário.`);
        return false;
    }

    // Se a palavra nova for diferente da antiga e já existir
    if (palavraAntigaLower !== palavraNovaLower &&
        bancoDeSinonimos[palavraNovaLower] &&
        !confirm(`A palavra "${palavraNovaLower}" já existe. Deseja substituir seus sinônimos?`)) {
        return false;
    }

    // Converter string de sinônimos em array se necessário
    let sinonimosArray = sinonimos;
    if (typeof sinonimos === 'string') {
        sinonimosArray = sinonimos.split(',').map(s => s.trim()).filter(s => s !== '');
    }

    // Se a palavra nova for diferente da antiga, excluir a antiga e adicionar a nova
    if (palavraAntigaLower !== palavraNovaLower) {
        delete bancoDeSinonimos[palavraAntigaLower];
    }

    bancoDeSinonimos[palavraNovaLower] = sinonimosArray;
    // ADICIONE ESTA LINHA
    atualizarIndiceSinonimos();
    return true;
}

function excluirSinonimo(palavra) {
    const palavraLower = palavra.toLowerCase().trim();

    if (!bancoDeSinonimos[palavraLower]) {
        alert(`A palavra "${palavraLower}" não existe no dicionário.`);
        return false;
    }

    if (confirm(`Tem certeza que deseja excluir a palavra "${palavraLower}" e seus sinônimos?`)) {
        delete bancoDeSinonimos[palavraLower];
        // ADICIONE ESTA LINHA
        atualizarIndiceSinonimos();
        return true;
    }

    return false;
}

// Função para mostrar todos os sinônimos em uma interface de gerenciamento
function atualizarListaSinonimos() {
    const listaSinonimos = document.getElementById('listaSinonimos');
    if (!listaSinonimos) return;

    listaSinonimos.innerHTML = '';

    // Ordenar as palavras alfabeticamente
    const palavrasOrdenadas = Object.keys(bancoDeSinonimos).sort();

    palavrasOrdenadas.forEach(palavra => {
        const sinonimosTexto = bancoDeSinonimos[palavra].join(', ');

        const divPalavra = document.createElement('div');
        divPalavra.classList.add('item-sinonimo');
        divPalavra.innerHTML = `
            <div class="palavra-principal">${palavra}</div>
            <div class="sinonimos-lista">${sinonimosTexto}</div>
            <div class="acoes">
                <button class="editar-btn" data-palavra="${palavra}">Editar</button>
                <button class="excluir-btn" data-palavra="${palavra}">Excluir</button>
            </div>
        `;

        listaSinonimos.appendChild(divPalavra);
    });

    // Adicionar eventos aos botões
    document.querySelectorAll('.editar-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const palavra = this.dataset.palavra;
            iniciarEdicao(palavra);
        });
    });

    document.querySelectorAll('.excluir-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const palavra = this.dataset.palavra;
            if (excluirSinonimo(palavra)) {
                atualizarListaSinonimos();
            }
        });
    });
}

// Função para iniciar a edição de uma palavra
function iniciarEdicao(palavra) {
    const formEditar = document.getElementById('formSinonimos');
    const inputPalavra = document.getElementById('novaPalavra');
    const inputSinonimos = document.getElementById('novosSinonimos');
    const palavraAntigaInput = document.getElementById('palavraAntiga');

    if (!formEditar || !inputPalavra || !inputSinonimos) return;

    inputPalavra.value = palavra;
    inputSinonimos.value = bancoDeSinonimos[palavra].join(', ');

    if (palavraAntigaInput) {
        palavraAntigaInput.value = palavra;
    } else {
        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.id = 'palavraAntiga';
        hiddenInput.value = palavra;
        formEditar.appendChild(hiddenInput);
    }

    // Rolar até o formulário
    formEditar.scrollIntoView({ behavior: 'smooth' });
}

// Função para pesquisar sinônimos
// Modifique a função pesquisarSinonimos para pesquisa em tempo real e incluir botões
function pesquisarSinonimos(termoPesquisa) {
    const resultadosPesquisa = document.getElementById('resultadosPesquisa');
    if (!resultadosPesquisa) return;

    resultadosPesquisa.innerHTML = '';

    if (!termoPesquisa || termoPesquisa.trim() === '') {
        resultadosPesquisa.innerHTML = '<p>Digite um termo para pesquisar.</p>';
        return;
    }

    const termoPesquisaLower = termoPesquisa.toLowerCase().trim();

    // Objeto para armazenar resultados com níveis de relevância
    const resultados = {
        exatos: [], // Correspondências exatas (prioridade máxima)
        sinonimosExatos: [], // Termo é sinônimo exato de outra palavra
        inicioComTermo: [], // Palavras que começam com o termo
        contemTermo: [], // Palavras que contêm o termo em qualquer posição
        sinonimosContemTermo: [] // Sinônimos que contêm o termo
    };

    // Adicionar botão "Novo" fixo acima dos resultados
    const novoBotao = document.createElement('div');
    novoBotao.classList.add('novo-sinonimo-btn');
    novoBotao.innerHTML = '<button id="btnNovoSinonimo">+ Novo Sinônimo</button>';
    resultadosPesquisa.appendChild(novoBotao);

    // Limitador para evitar muitos resultados parciais
    const limiteResultadosParciais = 5;

    // 1. Pesquisa direta (palavra exata) - Maior prioridade
    if (bancoDeSinonimos[termoPesquisaLower]) {
        resultados.exatos.push({
            palavra: termoPesquisaLower,
            sinonimos: bancoDeSinonimos[termoPesquisaLower],
            info: null
        });
    }

    // 2. Verificar se é um sinônimo no índice - Segunda prioridade
    if (indiceSinonimos[termoPesquisaLower]) {
        const palavraPrincipal = indiceSinonimos[termoPesquisaLower];
        resultados.sinonimosExatos.push({
            palavra: palavraPrincipal,
            sinonimos: bancoDeSinonimos[palavraPrincipal],
            info: `Contém "${termoPesquisaLower}" como sinônimo`
        });
    }

    // 3. Pesquisa de palavras que começam com o termo - Terceira prioridade
    Object.keys(bancoDeSinonimos).forEach(palavra => {
        // Evitar duplicar resultados já encontrados
        if (palavra === termoPesquisaLower) return;

        if (palavra.startsWith(termoPesquisaLower)) {
            if (resultados.inicioComTermo.length < limiteResultadosParciais) {
                resultados.inicioComTermo.push({
                    palavra: palavra,
                    sinonimos: bancoDeSinonimos[palavra],
                    info: `Começa com "${termoPesquisaLower}"`
                });
            }
        }
        // 4. Palavras que contêm o termo em qualquer posição - Quarta prioridade
        else if (palavra.includes(termoPesquisaLower)) {
            if (resultados.contemTermo.length < limiteResultadosParciais) {
                resultados.contemTermo.push({
                    palavra: palavra,
                    sinonimos: bancoDeSinonimos[palavra],
                    info: `Contém "${termoPesquisaLower}"`
                });
            }
        }

        // 5. Pesquisar nos sinônimos - Quinta prioridade
        const sinonimos = bancoDeSinonimos[palavra];
        if (sinonimos.some(s => s.toLowerCase() === termoPesquisaLower)) {
            // Sinônimo exato já foi tratado pelo indiceSinonimos
            return;
        }

        // Verificar sinônimos que contêm o termo parcialmente
        const sinonimosQueContemTermo = sinonimos.filter(s =>
            s.toLowerCase().includes(termoPesquisaLower) &&
            s.toLowerCase() !== termoPesquisaLower
        );

        if (sinonimosQueContemTermo.length > 0 &&
            resultados.sinonimosContemTermo.length < limiteResultadosParciais) {
            resultados.sinonimosContemTermo.push({
                palavra: palavra,
                sinonimos: bancoDeSinonimos[palavra],
                info: `Contém "${termoPesquisaLower}" em sinônimos (${sinonimosQueContemTermo.join(', ')})`
            });
        }
    });

    // Função para renderizar os resultados na interface
    function renderizarResultados(lista, titulo = null) {
        if (lista.length === 0) return false;

        if (titulo) {
            const secaoTitulo = document.createElement('h4');
            secaoTitulo.className = 'resultado-secao-titulo';
            secaoTitulo.textContent = titulo;
            resultadosPesquisa.appendChild(secaoTitulo);
        }

        lista.forEach(item => {
            const divResultado = document.createElement('div');
            divResultado.classList.add('resultado-item');

            let infoHtml = '';
            if (item.info) {
                infoHtml = `<div class="info-resultado">${item.info}</div>`;
            }

            divResultado.innerHTML = `
                <div class="palavra-resultado">${item.palavra}</div>
                <div class="sinonimos-resultado">${item.sinonimos.join(', ')}</div>
                ${infoHtml}
                <div class="acoes-resultado">
                    <button class="editar-btn" data-palavra="${item.palavra}">Editar</button>
                    <button class="excluir-btn" data-palavra="${item.palavra}">Excluir</button>
                </div>
            `;
            resultadosPesquisa.appendChild(divResultado);
        });

        return true;
    }

    // Renderizar os resultados em ordem de relevância
    let encontrados = false;

    encontrados |= renderizarResultados(resultados.exatos, resultados.exatos.length > 0 ? "Correspondências Exatas" : null);
    encontrados |= renderizarResultados(resultados.sinonimosExatos, resultados.sinonimosExatos.length > 0 ? "Sinônimos Exatos" : null);
    encontrados |= renderizarResultados(resultados.inicioComTermo, resultados.inicioComTermo.length > 0 ? "Começam Com" : null);
    encontrados |= renderizarResultados(resultados.contemTermo, resultados.contemTermo.length > 0 ? "Contêm o Termo" : null);
    encontrados |= renderizarResultados(resultados.sinonimosContemTermo, resultados.sinonimosContemTermo.length > 0 ? "Sinônimos Contêm o Termo" : null);

    // Se não encontrou nada
    if (!encontrados) {
        resultadosPesquisa.innerHTML = '<div class="novo-sinonimo-btn"><button id="btnNovoSinonimo">+ Novo Sinônimo</button></div><p>Nenhum resultado encontrado.</p>';
    } else {
        // Se há muitos resultados, mostrar uma mensagem no topo
        const totalResultados =
            resultados.exatos.length +
            resultados.sinonimosExatos.length +
            resultados.inicioComTermo.length +
            resultados.contemTermo.length +
            resultados.sinonimosContemTermo.length;

        if (totalResultados > 5) {
            const mensagemTotal = document.createElement('div');
            mensagemTotal.className = 'resultados-info';
            mensagemTotal.textContent = `${totalResultados} resultados encontrados. Use termos mais específicos para refinar.`;
            resultadosPesquisa.insertBefore(mensagemTotal, resultadosPesquisa.children[1]);
        }
    }

    // Adicionar eventos aos botões de editar e excluir nos resultados
    adicionarEventosBotoes();
}

// Modificação da função quebrarTexto para detectar palavras compostas
function quebrarTexto(texto) {
    // Primeiro vamos identificar expressões compostas no banco de sinônimos
    const expressoes = Object.keys(bancoDeSinonimos)
        .filter(palavra => palavra.includes(' ') || palavra.includes('-'))
        .sort((a, b) => b.length - a.length); // Ordenar do maior para o menor para priorizar expressões mais longas

    // Array para armazenar os tokens resultantes
    let tokens = [];

    // Copiar o texto original para manipulação
    let textoRestante = texto;
    let indiceAtual = 0;

    while (textoRestante.length > 0) {
        let encontrou = false;

        // Verificar se temos uma expressão composta no início do texto restante
        for (const expressao of expressoes) {
            const expressaoLower = expressao.toLowerCase();
            const textoLower = textoRestante.toLowerCase();

            if (textoLower.startsWith(expressaoLower)) {
                // Verificar se a expressão é uma palavra completa (tem espaço ou pontuação depois)
                const finalExpressao = textoRestante.substring(expressao.length, expressao.length + 1);
                if (finalExpressao === '' || /[\s,.!?;:()—–-]/.test(finalExpressao)) {
                    // Encontramos uma expressão composta
                    const expressaoOriginal = textoRestante.substring(0, expressao.length);
                    tokens.push({
                        texto: expressaoOriginal,
                        tipo: 'palavra',
                        indice: indiceAtual,
                        composta: true
                    });

                    textoRestante = textoRestante.substring(expressao.length);
                    indiceAtual += expressao.length;
                    encontrou = true;
                    break;
                }
            }
        }

        // Se não encontrou expressão composta, processe normalmente
        if (!encontrou) {
            // Verificar se é um espaço ou pontuação
            if (/^[\s,.!?;:()—–-]/.test(textoRestante)) {
                const match = textoRestante.match(/^[\s,.!?;:()—–-]+/)[0];
                tokens.push({
                    texto: match,
                    tipo: 'separador',
                    indice: indiceAtual
                });

                textoRestante = textoRestante.substring(match.length);
                indiceAtual += match.length;
            } else {
                // É uma palavra comum
                const match = textoRestante.match(/^[^\s,.!?;:()—–-]+/)[0];
                tokens.push({
                    texto: match,
                    tipo: 'palavra',
                    indice: indiceAtual,
                    composta: false
                });

                textoRestante = textoRestante.substring(match.length);
                indiceAtual += match.length;
            }
        }
    }

    return tokens;
}

// Função para criar elementos HTML para sinônimos
// Função modificada para criar elementos HTML para sinônimos
function criarAreaSinonimos(texto) {
    // Armazenar as substituições no armazenamento local para persistência
    if (Object.keys(substituicoes).length > 0) {
        localStorage.setItem('textSubstituicoes', JSON.stringify(substituicoes));
    }

    // Recuperar substituições se existirem
    const substituicoesArmazenadas = localStorage.getItem('textSubstituicoes');
    if (substituicoesArmazenadas && Object.keys(substituicoes).length === 0) {
        substituicoes = JSON.parse(substituicoesArmazenadas);
    }

    const tokens = quebrarTexto(texto);
    const sinonimosArea = document.getElementById('sinonimosArea');
    sinonimosArea.innerHTML = '';

    // Limpar e usar o textoEntrada como área de resultado também
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Div para conter todas as palavras com sinônimos (mostradas diretamente)
    const palavrasContainer = document.createElement('div');
    palavrasContainer.className = 'palavras-container';
    sinonimosArea.appendChild(palavrasContainer);

    tokens.forEach((token, index) => {
        // Verificar se é uma palavra que pode ter sinônimos
        if (token.tipo === 'palavra') {
            const texto = token.texto;
            const palavraLower = texto.toLowerCase();
            const indiceOriginal = token.indice;

            // Adicionar a palavra ao resultado
            const spanPalavra = document.createElement('span');

            // Verificar se esta palavra ou expressão tinha uma substituição anterior
            const indexTexto = indiceOriginal.toString();
            if (substituicoes[indexTexto] && substituicoes[indexTexto].original === texto) {
                spanPalavra.textContent = substituicoes[indexTexto].substituido;
                spanPalavra.classList.add('palavra-original');
            } else {
                spanPalavra.textContent = texto;
            }

            spanPalavra.className = 'palavra';
            if (token.composta) {
                spanPalavra.classList.add('palavra-composta');
            }
            spanPalavra.dataset.original = texto;
            spanPalavra.dataset.index = indiceOriginal;
            spanPalavra.dataset.length = texto.length;

            // Evento de clique da palavra no resultado
            spanPalavra.addEventListener('click', function () {
                // Se a palavra foi substituída, voltar ao original
                if (this.classList.contains('palavra-original')) {
                    this.textContent = this.dataset.original;
                    this.classList.remove('palavra-original');

                    // Remover do objeto de substituições
                    delete substituicoes[this.dataset.index];

                    // Atualizar o armazenamento local após remover a substituição
                    localStorage.setItem('textSubstituicoes', JSON.stringify(substituicoes));

                    // Mostrar novamente a div de sinônimos para esta palavra
                    const divPalavra = document.querySelector(`.palavra-sinonimos[data-index="${this.dataset.index}"]`);
                    if (divPalavra) {
                        divPalavra.classList.remove('escondido');
                    }

                    atualizarResultadoFinal();
                } else {
                    // Se a palavra tem sinônimos, destacá-la e mostrar seus sinônimos
                    // Verificamos tanto palavras simples quanto compostas
                    if (bancoDeSinonimos[palavraLower] || (token.composta && bancoDeSinonimos[palavraLower])) {
                        // Limpar qualquer destaque anterior
                        document.querySelectorAll('.palavra').forEach(p => {
                            p.classList.remove('palavra-destacada');
                        });

                        // Destacar a palavra clicada
                        this.classList.add('palavra-destacada');

                        // Mostrar os sinônimos desta palavra
                        document.querySelectorAll('.palavra-sinonimos').forEach(div => {
                            div.classList.add('escondido');
                        });

                        const divPalavra = document.querySelector(`.palavra-sinonimos[data-index="${this.dataset.index}"]`);
                        if (divPalavra) {
                            divPalavra.classList.remove('escondido');
                            divPalavra.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    }
                }
            });

            resultado.appendChild(spanPalavra);

            // Verificar se temos sinônimos para esta palavra (diretamente ou como sinônimo de outra)
            let palavraPrincipal = palavraLower;
            let sinonimosParaMostrar = [];

            // Caso 1: A palavra está diretamente no banco de sinônimos
            if (bancoDeSinonimos[palavraLower]) {
                sinonimosParaMostrar = bancoDeSinonimos[palavraLower];
            }
            // Caso 2: A palavra é um sinônimo de outra palavra no banco
            else if (indiceSinonimos[palavraLower]) {
                palavraPrincipal = indiceSinonimos[palavraLower];
                // Filtrar a lista para remover a própria palavra
                sinonimosParaMostrar = bancoDeSinonimos[palavraPrincipal].filter(
                    s => s.toLowerCase() !== palavraLower
                );

                // Adicionar a palavra principal à lista de sinônimos se não for a mesma
                if (palavraPrincipal !== palavraLower) {
                    sinonimosParaMostrar.unshift(palavraPrincipal);
                }
            }

            // Se encontramos sinônimos para mostrar (por qualquer método)
            if (sinonimosParaMostrar.length > 0) {
                const divPalavra = document.createElement('div');
                divPalavra.innerHTML = `<strong>${texto}:</strong>`;
                divPalavra.className = 'palavra-sinonimos';
                divPalavra.dataset.index = indiceOriginal;
                divPalavra.dataset.palavraLower = palavraLower;

                // Verificar se a palavra já foi substituída
                if (substituicoes[indiceOriginal]) {
                    divPalavra.classList.add('escondido');
                }

                const divSinonimos = document.createElement('div');
                divSinonimos.className = 'sinonimos';

                sinonimosParaMostrar.forEach(sinonimo => {
                    const btnSinonimo = document.createElement('button');
                    btnSinonimo.textContent = sinonimo;
                    btnSinonimo.className = 'sinonimo-btn';
                    btnSinonimo.dataset.index = indiceOriginal;

                    // Função do botão de sinônimo
                    btnSinonimo.addEventListener('click', function () {
                        const indexPalavra = this.dataset.index;
                        const palavrasElements = document.querySelectorAll('.palavra');

                        // Encontrar a palavra com o índice correto
                        palavrasElements.forEach(p => {
                            if (p.dataset.index === indexPalavra) {
                                p.textContent = sinonimo;
                                p.classList.add('palavra-original');
                                p.classList.remove('palavra-destacada');

                                // Armazenar a substituição
                                substituicoes[indexPalavra] = {
                                    original: p.dataset.original,
                                    substituido: sinonimo
                                };

                                // Salvar as substituições no armazenamento local
                                localStorage.setItem('textSubstituicoes', JSON.stringify(substituicoes));

                                // Ocultar a div de sinônimos para esta palavra
                                const divPai = this.closest('div.palavra-sinonimos');
                                if (divPai) {
                                    divPai.classList.add('escondido');
                                }

                                atualizarResultadoFinal();
                            }
                        });
                    });

                    divSinonimos.appendChild(btnSinonimo);
                });

                divPalavra.appendChild(divSinonimos);
                palavrasContainer.appendChild(divPalavra);
            }
        } else {
            // Se for espaço ou pontuação, apenas adicionar ao resultado
            const spanPalavra = document.createElement('span');
            spanPalavra.textContent = token.texto;
            resultado.appendChild(spanPalavra);
        }
    });

    // Adicionar evento ao campo de pesquisa
    const filtroInput = document.getElementById('filtroSinonimos');
    if (filtroInput) {
        filtroInput.addEventListener('input', function () {
            const filtro = this.value.toLowerCase();

            // Se o filtro estiver vazio, ocultar todas as palavras com sinônimos
            if (!filtro) {
                document.querySelectorAll('.palavra-sinonimos').forEach(div => {
                    div.classList.add('escondido');
                });
                return;
            }

            // Mostrar apenas as palavras que contêm o filtro
            document.querySelectorAll('.palavra-sinonimos').forEach(div => {
                const palavraTexto = div.dataset.palavraLower;

                if (palavraTexto && palavraTexto.includes(filtro)) {
                    div.classList.remove('escondido');
                } else {
                    div.classList.add('escondido');
                }
            });
        });
    }

    // Adicionar um estilo destacado para a palavra clicada
    const style = document.createElement('style');
    style.textContent = `
        .palavra-destacada {
            background-color: #ffff99;
            border-radius: 3px;
            padding: 2px 4px;
            cursor: pointer;
        }
        .palavra {
            cursor: pointer;
        }
        .palavra-composta {
            border-bottom: 1px dotted #999;
        }
        .palavra-original {
            color: #0066cc;
            font-weight: bold;
            text-decoration: underline;
            cursor: pointer;
        }
        .escondido {
            display: none;
        }
        .pesquisa-sinonimos {
            margin-bottom: 15px;
        }
        .pesquisa-sinonimos input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-bottom: 5px;
        }
        .pesquisa-sinonimos small {
            color: #777;
            font-size: 0.8em;
        }
        .palavras-container {
            max-height: 300px;
            overflow-y: auto;
            border: 1px solid #eee;
            padding: 10px;
        }
    `;

    document.head.appendChild(style);
}


// Adicionar evento ao botão processar
document.getElementById('processar').addEventListener('click', function () {
    const texto = document.getElementById('textoEntrada').value;
    if (texto.trim() !== '') {
        criarAreaSinonimos(texto);
    } else {
        alert('Por favor, digite algum texto antes de processar.');
    }
});


// Modificação na função de processamento em tempo real
function processarEmTempoReal() {
    const textarea = document.getElementById('textoEntrada');
    const texto = textarea.value;

    if (texto.trim() === '') return;

    // Limpar e usar a área de resultado 
    const resultado = document.getElementById('resultado');
    if (!resultado) return;

    // Criar um span temporário para calcular a posição atual do cursor
    const cursorPos = textarea.selectionStart;

    // Processar o texto e destacar palavras com sinônimos disponíveis
    processarTextoInterativo(texto, cursorPos);
}

// Nova função para processar o texto de forma interativa
function processarTextoInterativo(texto, cursorPos) {
    // Primeiro, atualizamos o índice de sinônimos para garantir que estamos atuando com dados atualizados
    atualizarIndiceSinonimos();

    const tokens = quebrarTexto(texto);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Para rastrear qual token contém o cursor
    let tokenComCursor = null;
    let cursorPosicionado = 0;

    tokens.forEach((token, index) => {
        // Verificar se é uma palavra que pode ter sinônimos
        if (token.tipo === 'palavra') {
            const texto = token.texto;
            const palavraLower = texto.toLowerCase();
            const indiceOriginal = token.indice;

            // Verificar se o cursor está dentro deste token
            if (cursorPos >= token.indice && cursorPos <= token.indice + texto.length) {
                tokenComCursor = token;
                cursorPosicionado = cursorPos - token.indice;
            }

            // Criar o span para a palavra
            const spanPalavra = document.createElement('span');

            // Verificar se esta palavra tem sinônimos disponíveis
            const temSinonimos = bancoDeSinonimos[palavraLower] || indiceSinonimos[palavraLower];

            if (temSinonimos) {
                spanPalavra.classList.add('palavra-com-sinonimos');

                // Adicionar tooltip
                spanPalavra.title = 'Clique para ver sinônimos';

                // Adicionar evento para mostrar dropdown
                spanPalavra.addEventListener('click', function (e) {
                    mostrarDropdownSinonimos(this, palavraLower, e);
                });
            }

            // Verificar se já existe uma substituição para esta palavra
            const indexTexto = indiceOriginal.toString();
            if (substituicoes[indexTexto] && substituicoes[indexTexto].original === texto) {
                spanPalavra.textContent = substituicoes[indexTexto].substituido;
                spanPalavra.classList.add('palavra-original');
            } else {
                spanPalavra.textContent = texto;
            }

            spanPalavra.className += ' palavra';
            if (token.composta) {
                spanPalavra.classList.add('palavra-composta');
            }
            spanPalavra.dataset.original = texto;
            spanPalavra.dataset.index = indiceOriginal;

            resultado.appendChild(spanPalavra);
        } else {
            // Se for espaço ou pontuação, apenas adicionar ao resultado
            const spanSeparador = document.createElement('span');
            spanSeparador.textContent = token.texto;
            resultado.appendChild(spanSeparador);
        }
    });

    // Adicionar estilos para palavras com sinônimos disponíveis
    const style = document.createElement('style');
    if (!document.getElementById('estilos-interativos')) {
        style.id = 'estilos-interativos';
        style.textContent = `
            .palavra-com-sinonimos {
                border-bottom: 1px dashed #0066cc;
                cursor: pointer;
                position: relative;
            }
            .palavra-com-sinonimos:hover {
                background-color: #f0f7ff;
            }
            .dropdown-sinonimos {
                position: absolute;
                background-color: white;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                z-index: 1000;
                max-height: 200px;
                overflow-y: auto;
                width: auto;
                min-width: 150px;
            }
            .dropdown-sinonimos div {
                padding: 8px 12px;
                cursor: pointer;
            }
            .dropdown-sinonimos div:hover {
                background-color: #f0f7ff;
            }
            .dropdown-titulo {
                font-weight: bold;
                background-color: #f0f0f0;
                border-bottom: 1px solid #ccc;
            }
        `;
        document.head.appendChild(style);
    }
}

// Função para mostrar dropdown com sinônimos
function mostrarDropdownSinonimos(elemento, palavra, evento) {
    // Remover qualquer dropdown existente
    const dropdowns = document.querySelectorAll('.dropdown-sinonimos');
    dropdowns.forEach(dropdown => dropdown.remove());

    // Obter sinônimos disponíveis
    let sinonimos = [];
    let palavraPrincipal = palavra;

    // Caso 1: A palavra está diretamente no banco de sinônimos
    if (bancoDeSinonimos[palavra]) {
        sinonimos = bancoDeSinonimos[palavra];
    }
    // Caso 2: A palavra é um sinônimo de outra palavra no banco
    else if (indiceSinonimos[palavra]) {
        palavraPrincipal = indiceSinonimos[palavra];
        // Filtrar a lista para remover a própria palavra
        sinonimos = bancoDeSinonimos[palavraPrincipal].filter(
            s => s.toLowerCase() !== palavra
        );

        // Adicionar a palavra principal à lista de sinônimos se não for a mesma
        if (palavraPrincipal !== palavra) {
            sinonimos.unshift(palavraPrincipal);
        }
    }

    if (sinonimos.length === 0) return;

    // Criar o dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown-sinonimos';

    // Título do dropdown
    const titulo = document.createElement('div');
    titulo.className = 'dropdown-titulo';
    titulo.textContent = 'Sinônimos:';
    dropdown.appendChild(titulo);

    // Adicionar os sinônimos ao dropdown
    sinonimos.forEach(sinonimo => {
        const opcao = document.createElement('div');
        opcao.textContent = sinonimo;
        opcao.addEventListener('click', function () {
            substituirPalavra(elemento, sinonimo);
            dropdown.remove();
        });
        dropdown.appendChild(opcao);
    });

    // Posicionar o dropdown
    document.body.appendChild(dropdown);

    // Calcular posição baseada no elemento clicado
    const rect = elemento.getBoundingClientRect();
    dropdown.style.left = rect.left + 'px';
    dropdown.style.top = (rect.bottom + window.scrollY) + 'px';

    // Fechar o dropdown ao clicar fora dele
    document.addEventListener('click', function fecharDropdown(e) {
        if (!dropdown.contains(e.target) && e.target !== elemento) {
            dropdown.remove();
            document.removeEventListener('click', fecharDropdown);
        }
    });

    // Prevenir propagação para evitar que o dropdown feche imediatamente
    evento.stopPropagation();
}

// Função para substituir a palavra pelo sinônimo selecionado
function substituirPalavra(elemento, novoTexto) {
    const indice = elemento.dataset.index;
    const textoOriginal = elemento.dataset.original;

    // Atualizar o texto do elemento
    elemento.textContent = novoTexto;
    elemento.classList.add('palavra-original');

    // Armazenar a substituição
    substituicoes[indice] = {
        original: textoOriginal,
        substituido: novoTexto
    };

    // Salvar as substituições no armazenamento local
    localStorage.setItem('textSubstituicoes', JSON.stringify(substituicoes));

    // Atualizar o texto no textarea
    atualizarTextoEntrada();
}

// Função para atualizar o texto no textarea com as substituições feitas
function atualizarTextoEntrada() {
    const resultado = document.getElementById('resultado');
    const textarea = document.getElementById('textoEntrada');

    if (!resultado || !textarea) return;

    const textoFinal = Array.from(resultado.childNodes)
        .map(node => node.textContent)
        .join('');

    textarea.value = textoFinal;
}
// Função para atualizar o resultado final (usado para o botão de copiar)
function atualizarResultadoFinal() {
    const palavras = document.querySelectorAll('#resultado span');
    let textoFinal = '';
    palavras.forEach(p => {
        textoFinal += p.textContent;
    });
    return textoFinal;
}
// Função para copiar o resultado para a área de transferência
function copiarResultado() {
    const textoFinal = atualizarResultadoFinal();
    navigator.clipboard.writeText(textoFinal).then(() => {
        alert('Texto copiado com sucesso!');
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
}
// Adicionar eventos depois que o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
    // Atualizar o índice invertido para garantir que está funcionando corretamente
    atualizarIndiceSinonimos();
    // Adicionar eventos para a pesquisa em tempo real
    if (document.getElementById('termoPesquisa')) {
        document.getElementById('termoPesquisa').addEventListener('input', function () {
            // Debounce para evitar muitas pesquisas seguidas
            clearTimeout(this.tempoPesquisa);
            this.tempoPesquisa = setTimeout(() => {
                pesquisarSinonimos(this.value);
            }, 300); // Espera 300ms após o último input
        });
    }
    const textarea = document.getElementById('textoEntrada');

    if (textarea) {
        // Remover handler antigo se existir
        const oldHandler = textarea.onInput;
        if (oldHandler) {
            textarea.removeEventListener('input', oldHandler);
        }

        // Adicionar novo handler que processa o texto em tempo real
        textarea.addEventListener('input', function () {
            processarEmTempoReal();
        });

        // Chamada inicial para processar texto existente
        processarEmTempoReal();
    }
    // ADICIONE ESTA LINHA AQUI, como primeira instrução dentro da função
    atualizarIndiceSinonimos();
    // Adicionar evento de input para processamento em tempo real
    document.getElementById('textoEntrada').addEventListener('input', processarEmTempoReal);

    // Adicionar evento ao botão copiar
    document.getElementById('copiar').addEventListener('click', copiarResultado);

    // Manter o evento no botão processar (opcional, já que agora é em tempo real)
    document.getElementById('textoEntrada').addEventListener('input', processarEmTempoReal);
    document.getElementById('copiar').addEventListener('click', copiarResultado);
    document.getElementById('processar').addEventListener('click', function () {
        const texto = document.getElementById('textoEntrada').value;
        if (texto.trim() !== '') {
            criarAreaSinonimos(texto);
        } else {
            alert('Por favor, digite algum texto antes de processar.');
        }

    });
    // Adicionar novos event listeners para o gerenciador de sinônimos

    // Botões de exportar e importar
    if (document.getElementById('btnExportar')) {
        document.getElementById('btnExportar').addEventListener('click', exportarSinonimos);
    }

    if (document.getElementById('importarArquivo')) {
        document.getElementById('importarArquivo').addEventListener('change', importarSinonimos);
    }

    // Botão de pesquisa
    if (document.getElementById('btnPesquisar')) {
        document.getElementById('btnPesquisar').addEventListener('click', function () {
            const termo = document.getElementById('termoPesquisa').value;
            pesquisarSinonimos(termo);
        });
    }
    if (document.getElementById('termoPesquisa')) {
        // Remover o evento de keypress e adicionar evento de input para pesquisa em tempo real
        document.getElementById('termoPesquisa').removeEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                pesquisarSinonimos(this.value);
            }
        });

        document.getElementById('termoPesquisa').addEventListener('input', function () {
            pesquisarSinonimos(this.value);
        });
    }

    // Também pesquisar ao pressionar Enter
    if (document.getElementById('termoPesquisa')) {
        document.getElementById('termoPesquisa').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                pesquisarSinonimos(this.value);
            }
        });
    }

    // Botão salvar (adicionar/editar sinônimo)
    if (document.getElementById('btnSalvar')) {
        document.getElementById('btnSalvar').addEventListener('click', function () {
            const novaPalavra = document.getElementById('novaPalavra').value;
            const novosSinonimos = document.getElementById('novosSinonimos').value;
            const palavraAntigaInput = document.getElementById('palavraAntiga');

            let sucesso = false;

            if (palavraAntigaInput && palavraAntigaInput.value) {
                // Modo de edição
                sucesso = editarSinonimo(palavraAntigaInput.value, novaPalavra, novosSinonimos);
                if (sucesso) {
                    palavraAntigaInput.remove();
                }
            } else {
                // Modo de adição
                sucesso = adicionarSinonimo(novaPalavra, novosSinonimos);
            }

            if (sucesso) {
                document.getElementById('novaPalavra').value = '';
                document.getElementById('novosSinonimos').value = '';
                atualizarListaSinonimos();
            }
        });
    }

    // Botão cancelar edição
    if (document.getElementById('btnCancelar')) {
        document.getElementById('btnCancelar').addEventListener('click', function () {
            const palavraAntigaInput = document.getElementById('palavraAntiga');
            if (palavraAntigaInput) {
                palavraAntigaInput.remove();
            }

            document.getElementById('novaPalavra').value = '';
            document.getElementById('novosSinonimos').value = '';
        });
    }

    // Inicializar a lista de sinônimos
    atualizarListaSinonimos();
    // Inicializar o reconhecimento de voz
    iniciarReconhecimentoVoz();

});

// Função para adicionar eventos aos botões nos resultados da pesquisa
function adicionarEventosBotoes() {
    // Adicionar evento ao botão Novo Sinônimo
    document.getElementById('btnNovoSinonimo').addEventListener('click', function () {
        abrirModal('novo');
    });

    // Adicionar eventos aos botões de editar
    document.querySelectorAll('.editar-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const palavra = this.dataset.palavra;
            abrirModal('editar', palavra);
        });
    });

    // Adicionar eventos aos botões de excluir
    document.querySelectorAll('.excluir-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const palavra = this.dataset.palavra;
            if (excluirSinonimo(palavra)) {
                // Atualizar a pesquisa após excluir
                pesquisarSinonimos(document.getElementById('termoPesquisa').value);
            }
        });
    });
}

// Função para criar e gerenciar o modal
function abrirModal(modo, palavra = '') {
    // Criar o modal se ainda não existir
    let modal = document.getElementById('sinonimosModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'sinonimosModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-conteudo">
                <span class="fechar-modal">&times;</span>
                <h3 id="modalTitulo">Adicionar Sinônimo</h3>
                <form id="modalForm" class="form-sinonimos">
                    <div class="campo">
                        <label for="modalPalavra">Palavra:</label>
                        <input type="text" id="modalPalavra" placeholder="Digite uma palavra" required>
                    </div>
                    <div class="campo">
                        <label for="modalSinonimos">Sinônimos (separados por vírgula):</label>
                        <textarea id="modalSinonimos" placeholder="Digite os sinônimos separados por vírgula" required></textarea>
                    </div>
                    <input type="hidden" id="modalPalavraAntiga" value="">
                    <div class="acoes">
                        <button type="button" id="modalBtnSalvar">Salvar</button>
                        <button type="button" id="modalBtnCancelar">Cancelar</button>
                    </div>
                </form>
            </div>
        `;
        document.body.appendChild(modal);

        // Adicionar eventos ao modal
        document.querySelector('.fechar-modal').addEventListener('click', function () {
            modal.style.display = 'none';
        });

        document.getElementById('modalBtnCancelar').addEventListener('click', function () {
            modal.style.display = 'none';
        });

        document.getElementById('modalBtnSalvar').addEventListener('click', function () {
            const novaPalavra = document.getElementById('modalPalavra').value;
            const novosSinonimos = document.getElementById('modalSinonimos').value;
            const palavraAntiga = document.getElementById('modalPalavraAntiga').value;

            let sucesso = false;

            if (palavraAntiga) {
                // Modo de edição
                sucesso = editarSinonimo(palavraAntiga, novaPalavra, novosSinonimos);
            } else {
                // Modo de adição
                sucesso = adicionarSinonimo(novaPalavra, novosSinonimos);
            }

            if (sucesso) {
                modal.style.display = 'none';
                // Atualizar a pesquisa após salvar
                pesquisarSinonimos(document.getElementById('termoPesquisa').value);
            }
        });

        // Fechar o modal se clicar fora dele
        window.addEventListener('click', function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Configurar o modal de acordo com o modo
    if (modo === 'editar') {
        document.getElementById('modalTitulo').textContent = 'Editar Sinônimo';
        document.getElementById('modalPalavra').value = palavra;
        document.getElementById('modalSinonimos').value = bancoDeSinonimos[palavra].join(', ');
        document.getElementById('modalPalavraAntiga').value = palavra;
    } else {
        document.getElementById('modalTitulo').textContent = 'Adicionar Sinônimo';
        document.getElementById('modalPalavra').value = document.getElementById('termoPesquisa').value || '';
        document.getElementById('modalSinonimos').value = '';
        document.getElementById('modalPalavraAntiga').value = '';
    }

    // Exibir o modal
    modal.style.display = 'block';
}
// Função para controlar o reconhecimento de voz
function iniciarReconhecimentoVoz() {
    // Verificar se o navegador suporta reconhecimento de voz
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert('Seu navegador não suporta reconhecimento de voz. Tente usar Chrome ou Edge.');
        return;
    }

    // Criar instância do reconhecimento de voz
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // Configurar o reconhecimento
    recognition.lang = 'pt-BR'; // Configurar para português brasileiro
    recognition.continuous = false;
    recognition.interimResults = false; // Mudado para false para evitar resultados parciais

    const textoEntrada = document.getElementById('textoEntrada');
    const botaoMic = document.getElementById('botaoMic');

    // Variável para armazenar a posição atual do cursor
    let cursorPos = textoEntrada.selectionStart || textoEntrada.value.length;

    // Salvar a posição do cursor antes de iniciar o reconhecimento
    textoEntrada.addEventListener('click', () => {
        cursorPos = textoEntrada.selectionStart;
    });

    // Evento ao iniciar o reconhecimento
    recognition.onstart = () => {
        botaoMic.classList.add('ativo');
        botaoMic.innerHTML = '<i class="mic-icon-ativo"></i>'; // ícone de microfone ativo
    };

    // Evento para resultados finais apenas
    recognition.onresult = (event) => {
        // Pegar apenas o último resultado (resultado final)
        const transcript = event.results[0][0].transcript;

        // Inserir o texto na posição do cursor
        const valorAntes = textoEntrada.value.substring(0, cursorPos);
        const valorDepois = textoEntrada.value.substring(cursorPos);

        textoEntrada.value = valorAntes + transcript + valorDepois;

        // Atualizar a posição do cursor
        cursorPos += transcript.length;
        textoEntrada.selectionStart = cursorPos;
        textoEntrada.selectionEnd = cursorPos;

        // Disparar o evento input para processar em tempo real
        const inputEvent = new Event('input', {
            bubbles: true,
            cancelable: true,
        });
        textoEntrada.dispatchEvent(inputEvent);
    };

    // Evento ao finalizar o reconhecimento
    recognition.onend = () => {
        botaoMic.classList.remove('ativo');
        botaoMic.innerHTML = '<i class="mic-icon"></i>'; // ícone de microfone normal
    };

    // Evento de erro
    recognition.onerror = (event) => {
        console.error('Erro no reconhecimento de voz:', event.error);
        botaoMic.classList.remove('ativo');
        botaoMic.innerHTML = '<i class="mic-icon"></i>';

        if (event.error === 'not-allowed') {
            alert('Permissão de microfone negada. Por favor, permita o acesso ao microfone.');
        }
    };

    // Iniciar ou parar o reconhecimento ao clicar no botão
    botaoMic.addEventListener('click', () => {
        if (botaoMic.classList.contains('ativo')) {
            recognition.stop();
        } else {
            // Salvar a posição atual do cursor
            cursorPos = textoEntrada.selectionStart || textoEntrada.value.length;
            recognition.start();
        }
    });
}