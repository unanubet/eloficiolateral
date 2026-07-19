const rules = [
  {
    id: 'localizar',
    title: 'Localizar información explícita',
    description: 'El ítem parece pedir identificar datos, hechos o afirmaciones que aparecen directamente en el texto.',
    keywords: [
      'segun la lectura', 'segun el texto', 'segun el articulo', 'segun el fragmento',
      'de acuerdo con el texto', 'de acuerdo con la lectura', 'que dice el texto',
      'cual es una de las funciones', 'ademas del efecto', 'que factor influye',
      'una de las tareas que forma parte', 'que labores puede', 'de que manera se produce',
      'a que sistema', 'que pelicula tenia', 'cuales son las tareas', 'que entidad reconoce',
      'que posibilito', 'a diferencia de', 'que indicador considera', 'cual es una de las caracteristicas',
      'caracteristica de la etapa', 'que descubrio', 'segun la opinion de', 'a que se refiere',
      'que elementos', 'uno de los ejemplos', 'segun la emisora', 'segun el emisor',
      'segun lo propuesto por', 'segun el narrador', 'segun la narradora'
    ],
    patterns: [
      /\bque afirma\b/, /\ba diferencia de\b/,
      /\bcaracteristicas? de la etapa\b/, /\ba que se refiere\b/, /\bsegun la opinion de\b/,
      /\bsegun (la|el|lo) (emisora|emisor|narrador\w*|propuesto)\b/
    ]
  },
  {
    id: 'inferir',
    title: 'Inferir información implícita',
    description: 'El ítem parece pedir deducir ideas, causas o consecuencias que no están dichas literalmente en el texto.',
    keywords: [
      'se infiere', 'se puede inferir', 'se deduce', 'se desprende', 'se puede concluir',
      'se considera irrefutable', 'que provoco', 'cual fue la consecuencia', 'que factores provocan',
      'que ocurre con', 'cual es el efecto', 'que elemento favoreceria', 'que efecto tuvo'
    ],
    patterns: [
      /\bse (puede )?infiere\b/, /\bse deduce\b/, /\bse desprende\b/, /\bconsecuencia\b/, /\bprovoco\b/,
      /\bcual es el efecto\b/, /\bfavoreceria\b/
    ]
  },
  {
    id: 'analizar',
    title: 'Analizar relaciones entre textos o elementos',
    description: 'El ítem parece pedir establecer relaciones, comparaciones o diferencias entre textos, párrafos o elementos.',
    keywords: [
      'relacion se establece', 'como se relacionan', 'similitud', 'que diferencia',
      'se asemejaba', 'en relacion con los parrafos', 'que relacion existe', 'contrasta', 'compara',
      'se diferencian', 'se asocia a', 'aspecto comun', 'se relaciona con', 'como se construye',
      'relacion entre el', 'relacion entre los', 'relacion establecida'
    ],
    patterns: [
      /\brelacion(es)? se establece\b/, /\bcomo se relacionan\b/, /\bsimilitud\b/, /\bque diferencia\b/, /\bse asemejaba\b/,
      /\brelacion entre\b/, /\bse diferencian\b/, /\bse asocia a\b/, /\baspecto comun\b/, /\bse relaciona\b/,
      /\brelacion\w* establecid\w*\b/
    ]
  },
  {
    id: 'sintetizar',
    title: 'Sintetizar tema e idea principal',
    description: 'El ítem parece pedir extraer el tema central o la idea principal de un texto o fragmento.',
    keywords: [
      'idea principal', 'sintetiza el contenido', 'tema central', 'pregunta sintetiza',
      'sintetiza el siguiente', 'idea mas importante', 'sintesis del parrafo', 'representa el sentido',
      'sintesis de la informacion'
    ],
    patterns: [
      /\bidea principal\b/, /\bsintetiza\b/, /\btema central\b/, /\bsintesis\b/, /\brepresenta el sentido\b/
    ]
  },
  {
    id: 'interpretar',
    title: 'Interpretar función del texto o de un recurso',
    description: 'El ítem parece pedir identificar la función, finalidad o propósito de un texto, párrafo o recurso dentro de él.',
    keywords: [
      'que funcion cumple', 'cual es la funcion', 'con que finalidad', 'con que proposito',
      'que proposito tiene', 'para que se menciona', 'cual es el proposito',
      'que criterio utiliza', 'que recurso utiliza', 'que representa la mencion',
      'que aporta la informacion', 'que informacion nueva agrega', 'que concepto se define',
      'por que es relevante', 'para que se cita', 'que representa', 'se vincula',
      'valida la relevancia', 'que implica', 'de que manera se organiza', 'con que intencion',
      'para que se compara', 'que efecto busca lograr', 'en que consiste', 'por que se dice que',
      'que problema intenta resolver', 'que funcion tienen', 'a que se refiere el',
      'uno de los propositos', 'resultar util', 'senala la importancia'
    ],
    patterns: [
      /\bfuncion cumpl\w*\b/, /\bla funcion del\b/, /\bcon que finalidad\b/,
      /\bcon que proposito\b/, /\bpara que se menciona\b/, /\bcual es el proposito\b/,
      /\bque recurso utiliza\b/, /\bpara que se cita\b/, /\bque implica\b/,
      /\bcomo se organiza\b/, /\bcon que intencion\b/, /\bpara que se compara\b/,
      /\ben que consiste\b/, /\bque problema intenta resolver\b/, /\bfuncion tien\w*\b/
    ]
  },
  {
    id: 'evaluar',
    title: 'Evaluar con juicios fundamentados',
    description: 'El ítem parece pedir escoger un juicio (adjetivo) sobre un elemento del texto, fundamentado en este.',
    keywords: [
      'que perspectiva adopta', 'cual es el tono', 'que actitud', 'que caracteristica se puede atribuir',
      'actitud del narrador', 'que actitud asume', 'que actitud tiene', 'cual es la actitud',
      'que postura asume', 'como es la reaccion', 'poco confiable', 'es confiable', 'que testimonio es',
      'le atribuye'
    ],
    patterns: [
      /\bque perspectiva adopta\b/, /\bcual es el tono\b/, /\bque actitud\b/, /\bque caracteristica se puede atribuir\b/,
      /\bactitud (del|de la|asume|tiene)\b/, /\bque postura asume\b/, /\bcomo es la reaccion\b/, /\b(poco|es) confiable\b/,
      /\ble atribuye\b/
    ]
  },
  {
    id: 'aplicar',
    title: 'Aplicar el texto a una situación externa',
    description: 'El ítem parece plantear una voz, un caso o una situación externa al texto (una persona que opina, una institución que actúa) y pedir conectarla con lo leído.',
    keywords: [
      'afirma que', 'considera que', 'opina que', 'se fundamenta esta', 'permite fundamentar',
      'permite justificar esta', 'en el contexto de', 'ha decidido', 'se le solicita',
      'a que accion se asocia esta iniciativa', 'esta iniciativa', 'que informacion requerida',
      'un lector considera', 'una lectora afirma', 'un estudiante afirma', 'una estudiante afirma'
    ],
    patterns: [
      /\b(afirma|considera|opina) que\b/, /\bse fundamenta esta\b/, /\bpermite fundamentar\b/,
      /\bpermite justificar esta\b/, /\ben el contexto de\b/, /\besta iniciativa\b/
    ]
  }
];

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function clasificar(texto) {
  const limpio = normalizar(texto);

  if (!limpio) {
    return {
      title: 'Sin enunciado',
      description: 'Pega un texto breve para que la herramienta pueda analizarlo.',
      signals: [],
      confidence: 0
    };
  }

  const resultados = rules.map((regla) => {
    let score = 0;
    const signals = [];

    regla.keywords.forEach((keyword) => {
      if (limpio.includes(keyword)) {
        score += 1.2;
        signals.push(keyword);
      }
    });

    regla.patterns.forEach((pattern) => {
      if (pattern.test(limpio)) {
        score += 1.8;
      }
    });

    return {
      ...regla,
      score,
      signals: signals.slice(0, 4)
    };
  });

  const mejor = resultados.slice().sort((a, b) => b.score - a.score)[0];
  const segundo = resultados.slice().sort((a, b) => b.score - a.score)[1];

  const confidence = mejor.score > 0
    ? Math.min(95, Math.round((mejor.score / Math.max(2, mejor.score + (segundo?.score || 0))) * 100))
    : 0;

  if (mejor.score < 1.1) {
    return {
      title: 'Clasificación tentativa',
      description: 'No hay pistas suficientes para apostar por una habilidad concreta. Prueba con un enunciado más específico o con palabras clave del tipo “se infiere”, “qué función cumple”, “idea principal” o “según el texto”.',
      signals: [],
      confidence: 35
    };
  }

  return {
    title: mejor.title,
    description: mejor.description,
    signals: mejor.signals,
    confidence,
    fallback: null
  };
}

function renderResultado(resultado) {
  const contenedor = document.getElementById('resultadoContenido');
  const bloque = document.getElementById('resultado');

  if (!resultado) {
    bloque.classList.remove('visible');
    return;
  }

  bloque.classList.add('visible');
  const signalsMarkup = resultado.signals.length
    ? `<div class="pill-list">${resultado.signals.slice(0, 5).map((signal) => `<span class="pill">${signal}</span>`).join('')}</div>`
    : '<p class="resultado-texto">No se detectaron señales muy claras.</p>';

  contenedor.innerHTML = `
    <div class="resultado-badge">Propuesta de clasificación</div>
    <h2 class="resultado-titulo">${resultado.title}</h2>
    <p class="resultado-texto">${resultado.description}</p>
    <p class="resultado-texto"><strong>Confianza:</strong> ${resultado.confidence}%</p>
    ${signalsMarkup}
    ${resultado.fallback ? `<p class="nota">${resultado.fallback}</p>` : ''}
  `;
}

function iniciar() {
  const input = document.getElementById('itemInput');
  const boton = document.getElementById('clasificarBtn');
  const limpiar = document.getElementById('limpiarBtn');

  boton.addEventListener('click', () => {
    renderResultado(clasificar(input.value));
  });

  limpiar.addEventListener('click', () => {
    input.value = '';
    document.getElementById('resultado').classList.remove('visible');
    document.getElementById('resultadoContenido').innerHTML = '';
    input.focus();
  });

  input.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      renderResultado(clasificar(input.value));
    }
  });
}

window.addEventListener('DOMContentLoaded', iniciar);
