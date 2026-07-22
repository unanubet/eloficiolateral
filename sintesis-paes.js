// Ejercicios de síntesis (tema e idea principal) — Nivel 1
// Cada texto tiene una respuesta modelo (tema/idea principal) y una paráfrasis
// de esa misma respuesta, escrita con otras palabras. El chequeo automático saca
// las palabras clave comparando ambas versiones: así los "sinónimos aceptados"
// salen de una reformulación real, no de una lista inventada palabra por palabra.
// No es IA — es coincidencia de palabras normalizadas, igual que clasificador-paes.js.

const NIVEL1 = [
  {
    id: 1,
    fuente: 'Artículo de divulgación. Fuente: National Geographic.',
    contenido: `El cambio climático y sus efectos en el medioambiente alteran abruptamente el equilibrio de la vida en la Tierra. De hecho, los estragos causados en las últimas cuatro décadas han puesto en serio peligro, cuando no los han aniquilado por completo, la vida de numerosas especies, causando una brecha preocupante en la supervivencia de la vida salvaje y obligando a numerosos animales a adaptarse para sobrevivir ante la adversidad.`,
    tema: 'El cambio climático.',
    temaParafraseo: 'El calentamiento global y sus consecuencias en el planeta.',
    ideaPrincipal: 'Los efectos perjudiciales del cambio climático sobre el equilibrio de la vida en la Tierra.',
    ideaParafraseo: 'El calentamiento global está dañando gravemente el equilibrio de los ecosistemas y pone en riesgo a muchas especies.'
  },
  {
    id: 2,
    fuente: 'Fuente: es.scribd.com/document/414543433/Linfocitos-Plasmocitos-y-Otras-Celulas.',
    contenido: `Los linfocitos son los glóbulos blancos o leucocitos de menor tamaño en el sistema sanguíneo (entre 9 y 18 μm), aunque en cantidad son casi el 40% del total de la célula blanca. Hacen un trabajo arduo y de gran valor, pues son quienes detectan a los antígenos enemigos y se arriesgan a pelear contra cualquier invasor que esté dañando las defensas del organismo.

Esta célula es localizada en el sistema linfático y el torrente sanguíneo, tiene ciertos receptores de antígenos, por lo cual la eliminación de los mismos es un trabajo que pueden hacer con mayor facilidad. Existen dos grandes grupos de linfocitos que se desplazan en tres vertientes. Estos hacen un trabajo en conjunto para poder lograr el propósito de la célula, eliminar a los anticuerpos que dañan al sistema inmunológico. Los grupos son grandes y pequeños; se dividen entre células NK, linfocitos B y linfocitos T.`,
    tema: 'Los linfocitos.',
    temaParafraseo: 'Los glóbulos blancos encargados de defender el cuerpo.',
    ideaPrincipal: 'Los linfocitos y sus funciones en el organismo.',
    ideaParafraseo: 'Estas células cumplen un rol clave detectando y combatiendo a los agentes que dañan el sistema inmunológico.'
  },
  {
    id: 3,
    fuente: 'Fuente: Egipto al Descubierto, Ramsés II.',
    contenido: `Ramsés II (1290-1224 a. C.), hijo del gran faraón Seti I, fue el tercer faraón de la dinastía XIX. Es quizás el faraón más importante de toda la historia de Egipto. Su mandato fue famoso por la victoria que, según fuentes egipcias, obtuvo sobre las tropas hititas en la localidad de Kadesh. Ramsés II ordenó representar la Batalla de Kadesh en muchos lugares. Para dejar patente su poder, hizo erigir siete templos a modo de señal de propiedad. Fundó una nueva capital Pi-Ramsés.

Tuvo un reinado largo, sobre los 67 años. Se casó varias veces y tenía muchas mujeres en su harén, las cuales probaba antes de admitirlas en su harén. Pero la reina y la que más amaba fue Nefertari, a la cual le construyó un templo. Tuvo más de 100 hijos. Usurpó monumentos y estatuas de sus predecesores e inició una persecución contra el recuerdo de Hatshepsut y los faraones amarnienses.`,
    tema: 'Ramsés II.',
    temaParafraseo: 'El faraón egipcio Ramsés Segundo.',
    ideaPrincipal: 'Ramsés II, vida y reinado.',
    ideaParafraseo: 'Un repaso a la vida personal y al largo gobierno de este faraón.'
  },
  {
    id: 4,
    fuente: 'Artículo escrito por Rodolfo Hoffman, incluido en el libro Los hijos del bosque. Publicado en 1997.',
    contenido: `El FLAMENCO, ave soberbia, algo estrambótica, de gran largura de cuello y patas, se la encuentra a lo largo de todo el territorio de Chile, especialmente donde hay lagunas de aguas salobres, igual si es en la alta cordillera o a la orilla del mar. Sus nidos son altos, sólidos, compuestos de barro seco y fibras vegetales, donde ella pone siempre un solo huevo. Cuando duermen, presenciamos un milagro de equilibrio y estabilidad, pues descansan el cuello sobre los lomos, pliegan una de sus dos larguísimas patas, la que desaparece bajo las plumas ventrales, y se sostienen tranquilamente en la otra. Como para ganarse la vida en un circo. Pero no. Prefieren vivir libres de aplausos, a 4.000 metros de altura, filtrando barrito nutriente con su pico especialmente adaptado.`,
    tema: 'El flamenco.',
    temaParafraseo: 'El ave conocida como flamenco.',
    ideaPrincipal: 'El hábitat y características diferenciadoras del flamenco.',
    ideaParafraseo: 'Dónde vive esta ave y qué rasgos la distinguen de otras especies.'
  },
  {
    id: 5,
    fuente: 'Artículo publicado por el DEMRE en el año 2003.',
    contenido: `El hombre siempre ha atribuido un significado a los colores, significado que es múltiple, porque está ligado a hechos de carácter social, institucional, religioso y moral, y es resultado de la asociación constante entre las sensaciones y los sentimientos humanos.`,
    tema: 'El significado de los colores.',
    temaParafraseo: 'Por qué los colores tienen un significado para las personas.',
    ideaPrincipal: 'El significado de los colores está determinado por múltiples factores.',
    ideaParafraseo: 'Distintos factores sociales, religiosos y morales explican por qué asociamos un sentido a cada color.'
  },
  {
    id: 6,
    fuente: 'Fragmento del ensayo El consumo me consume, escrito por Tomás Moulián, publicado en 1998.',
    contenido: `Los mall lindan con la obscenidad. Se constata la lógica capitalista del despilfarro. Se ve cómo se malgastan recursos sin considerar la miseria de millones, sin tomar en cuenta los efectos de producir un estímulo y el deseo de consumir, en personas que no pueden satisfacer ese impulso. La obscenidad consiste en escenificar esa agobiante abundancia a pocos miles de metros de la miseria, en exhibirla ante los ojos de los parias sin dinero ni crédito, que peregrinan hacia esos templos para mirar, pero sin poder adquirir.`,
    tema: 'Los malls.',
    temaParafraseo: 'Los centros comerciales.',
    ideaPrincipal: 'Los malls lindan con la obscenidad.',
    ideaParafraseo: 'Estos espacios exhiben un consumo excesivo frente a la pobreza de quienes no pueden comprar.'
  },
  {
    id: 7,
    fuente: 'Artículo de divulgación, escrito por Tsien, Tsuen Hsuin, publicado en 1972.',
    contenido: `Sabido es que el papel fue inventado en China unos cien años antes de nuestra era y que se difundió por todo el mundo durante la Edad Media. Los chinos emplearon por primera vez la técnica de la impresión con caracteres de madera en el siglo VII y VIII, y los tipos móviles unos 400 años antes que Gutenberg. También el uso de la tinta china se remonta a la más antigua civilización de ese pueblo. Gracias a tales técnicas resultó posible producir múltiples ejemplares de un volumen paginado y dar a las obras escritas una amplia difusión.`,
    tema: 'La reproducción masiva del libro.',
    temaParafraseo: 'Cómo se llegó a imprimir libros en grandes cantidades.',
    ideaPrincipal: 'La reproducción masiva del libro fue posible gracias al desarrollo de varias técnicas.',
    ideaParafraseo: 'Distintos inventos chinos, como el papel y la tinta, permitieron producir muchos ejemplares de un mismo texto.'
  },
  {
    id: 8,
    fuente: 'Fragmento de una editorial elaborada por el diario El País, publicada en 2014.',
    contenido: `Lejos de ser un horripilante caso aislado, la muerte, en Rosario, de un ladrón de 18 años pateado por unos vecinos ha tenido un efecto contagio en otras ciudades de Argentina. En las dos semanas transcurridas desde aquel linchamiento, 13 delincuentes han sido apaleados en plena calle.

La inseguridad es la primera preocupación de muchos argentinos. Aumentan los homicidios y el narcotráfico, y los robos son una epidemia. La población está hastiada de la impunidad. Pero esta oleada de barbarie revela que algo más profundo se está rompiendo en esa sociedad. Las noticias de linchamientos en América Latina llegan sobre todo de zonas rurales de Guatemala, Bolivia y México, como una práctica no desterrada de la llamada justicia comunitaria. Que en las urbes argentinas empiece a replicarse debería hacer reaccionar rápidamente a las autoridades y a las fuerzas sociales.`,
    tema: 'Los linchamientos.',
    temaParafraseo: 'La violencia colectiva contra delincuentes.',
    ideaPrincipal: 'Los linchamientos constituyen un problema que debería hacer reaccionar a las autoridades.',
    ideaParafraseo: 'Este tipo de violencia se está expandiendo y exige una respuesta urgente de parte del Estado.'
  },
  {
    id: 9,
    fuente: 'Artículo publicado por el DEMRE el año 2005.',
    contenido: `Los turistas contienen la respiración cuando se encuentran ante la pirámide de Cheops que se levanta al sureste de El Cairo (Egipto). Su estructura es gigantesca, tan alta como un edificio de 140 pisos y ocupa una superficie de casi 5 ha. Está compuesta de millones de grandes bloques de piedra, de 2'5 toneladas de peso, que tuvieron que ser cortados, desbastados, transportados y colocados en la estructura con gran precisión. Los únicos medios mecánicos con que contaban los constructores egipcios fueron la palanca y el rodillo, pues todavía no conocían la polea.`,
    tema: 'La pirámide de Keops.',
    temaParafraseo: 'La gran pirámide egipcia.',
    ideaPrincipal: 'La pirámide de Keops, una construcción magnífica.',
    ideaParafraseo: 'Una obra de ingeniería impresionante, construida con medios muy rudimentarios.'
  },
  {
    id: 10,
    fuente: 'Fragmento de leyenda recogida por Oreste Plath en la versión de Luis Urzúa, integrada en el libro Geografía del mito y la leyenda chilenos. Publicado en 1983.',
    contenido: `Desde el puerto de Arica hacia el interior, cerca de una localidad llamada Putre, hay un lugar llamado las termas del Jurasi. En dichas termas, las aguas alcanzan hasta los 40 grados centígrados. Y como las aguas tan calientes no son tan habituales en la naturaleza, los habitantes de la región inventaron su propia leyenda que explica esto. Reza dicha leyenda que hace muchos años, probablemente en tiempos prehispánicos claro está, gobernaba la región una ñusta (una princesa, en romance). La ñusta en cuestión se las arregló para aprender el secreto de unas fuentes de aguas temperadas, bañándose en las cuales era posible obtener la eterna juventud, y como consecuencia lógica, prácticamente la inmortalidad. La ñusta contrajo entonces varios matrimonios sucesivos, conservándose joven mientras cada marido se hacía viejo y era enterrado (y sustituido por el siguiente, claro). Los maridos parece que eran tontos, porque ninguno llegó a descubrir que algo raro pasaba con su mujercita, pero así es como está la leyenda, y así es como en Siglos Curiosos la transmitimos.`,
    tema: 'Las termas de Jurasi.',
    temaParafraseo: 'Las aguas termales cercanas a Putre.',
    ideaPrincipal: 'Las termas de Jurasi poseen un origen legendario.',
    ideaParafraseo: 'Una leyenda sobre una princesa explica por qué estas aguas son tan calientes.'
  },
  {
    id: 11,
    fuente: 'Artículo de divulgación escrito por Antoni Virgili, publicado por la revista National Geographic en el año 2017.',
    contenido: `A mediados del siglo XIV, entre 1346 y 1347, estalló la mayor epidemia de peste de la historia de Europa, tan solo comparable con la que asoló el continente en tiempos del emperador Justiniano (siglos VI-VII). Desde entonces la peste negra se convirtió en una inseparable compañera de viaje de la población europea, hasta su último brote a principios del siglo XVIII. Sin embargo, el mal jamás se volvió a manifestar con la virulencia de 1346-1353, cuando impregnó la conciencia y la conducta de las gentes, lo que no es de extrañar. Por entonces había otras enfermedades endémicas que azotaban constantemente a la población, como la disentería, la gripe, el sarampión y la lepra, la más temida.

Pero la peste tuvo un impacto pavoroso: por un lado, era un huésped inesperado, desconocido y fatal, del cual se ignoraba tanto su origen como su terapia; por otro lado, afectaba a todos, sin distinguir apenas entre pobres y ricos. Quizá por esto último, porque afectaba a los mendigos, pero no se detenía ante los reyes, tuvo tanto eco en las fuentes escritas, en las que encontramos descripciones tan exageradas como apocalípticas.`,
    tema: 'La peste negra.',
    temaParafraseo: 'La gran epidemia medieval.',
    ideaPrincipal: 'El impacto de la peste negra en Europa.',
    ideaParafraseo: 'Esta enfermedad marcó profundamente a la población europea por su letalidad y su alcance.'
  },
  {
    id: 12,
    fuente: 'Fragmento del texto escrito por Joan Huizinga, El otoño de la Edad Media. Citado en DEMRE 2008.',
    contenido: `"El pueblo que no sabe ver su propio destino y los acontecimientos de aquel tiempo de otro modo que, como una sucesión continua de mala administración y rapacidad, guerras y latrocinios, carestía, miseria y pestilencia. Las formas crónicas que solía tomar la guerra, la continua agitación de las ciudades y el campo por toda clase de gente peligrosa, la eterna amenaza de un procedimiento judicial duro y poco digno de confianza y, además de todo esto, la opresión del temor a las penas del infierno, del terror a los diablos y a las brujas, daban pábulo a un sentimiento de inseguridad general, que era muy adecuado para teñir de negro el fondo de la vida, no tan solo del pueblo, también el de la nobleza y el de las magistraturas".`,
    tema: 'La Edad Media.',
    temaParafraseo: 'El período histórico medieval.',
    ideaPrincipal: 'La Edad Media, un período crítico.',
    ideaParafraseo: 'Una época marcada por la guerra, la inseguridad y el miedo constante.'
  }
];

// Palabras que no aportan como palabra clave (artículos, preposiciones, etc.)
const STOPWORDS = new Set([
  'el', 'la', 'los', 'las', 'de', 'del', 'al', 'en', 'y', 'a', 'que', 'su', 'sus',
  'un', 'una', 'unos', 'unas', 'con', 'por', 'para', 'es', 'son', 'lo', 'se',
  'como', 'mas', 'muy', 'sobre', 'este', 'esta', 'estos', 'estas', 'ese', 'esa',
  'esos', 'esas', 'o', 'u', 'e', 'ni', 'sin', 'entre', 'hacia', 'desde', 'hay',
  'ha', 'han', 'fue', 'ser', 'estar', 'tan', 'solo', 'asi', 'tambien', 'pero',
  'porque', 'cuando', 'donde', 'cual', 'cuales', 'les', 'le', 'me', 'mi', 'tu',
  'ya', 'no', 'si', 'texto', 'fragmento', 'sobre',
  'muchas', 'muchos', 'otras', 'otros', 'distintos', 'distintas', 'cada',
  'quienes', 'parte', 'tipo', 'frente', 'tanto', 'dentro', 'fuera', 'ademas',
  'tras', 'luego', 'antes', 'mismo', 'misma', 'varias', 'varios', 'siempre',
  'algo', 'alguna', 'algunas', 'alguno', 'algunos', 'general', 'generales',
  'personas', 'persona', 'poco', 'pocos', 'pocas', 'cierto', 'ciertos',
  'cierta', 'ciertas', 'forma', 'formas', 'manera', 'maneras', 'entonces', 'gran'
]);

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Saca las palabras clave comparando la respuesta modelo con su paráfrasis:
// solo quedan palabras con contenido (sin stopwords, largo >= 4).
function extraerPalabrasClave(...frases) {
  const set = new Set();
  frases.forEach((frase) => {
    normalizar(frase).split(' ').forEach((palabra) => {
      if (palabra.length >= 4 && !STOPWORDS.has(palabra)) {
        set.add(palabra);
      }
    });
  });
  return set;
}

// Prepara los grupos de cada ejercicio: grupoTema (a partir de tema + su paráfrasis)
// y grupoIdea (a partir de idea principal + su paráfrasis, sin repetir las palabras
// ya cubiertas por grupoTema).
NIVEL1.forEach((ej) => {
  const palabrasTema = extraerPalabrasClave(ej.tema, ej.temaParafraseo);
  const palabrasIdea = extraerPalabrasClave(ej.ideaPrincipal, ej.ideaParafraseo);
  palabrasTema.forEach((p) => palabrasIdea.delete(p));

  ej.grupoTema = { hint: 'el concepto clave (de qué se habla)', keywords: [...palabrasTema] };
  ej.grupoIdea = { hint: 'lo que se dice sobre ese concepto', keywords: [...palabrasIdea] };
});

function grupoCumplido(grupo, textoNormalizado) {
  return grupo.keywords.some((k) => textoNormalizado.includes(k));
}

let indiceActual = 0;
const revisados = new Set();

function renderEjercicio() {
  const ej = NIVEL1[indiceActual];
  document.getElementById('progresoTexto').textContent = `Texto ${indiceActual + 1} de ${NIVEL1.length}`;
  document.getElementById('fuenteTexto').textContent = ej.fuente;
  document.getElementById('contenidoTexto').textContent = ej.contenido;
  document.getElementById('temaInput').value = '';
  document.getElementById('ideaInput').value = '';
  document.getElementById('feedbackTema').innerHTML = '';
  document.getElementById('feedbackIdea').innerHTML = '';
  document.getElementById('modeloBox').classList.remove('visible');
  document.getElementById('modeloBox').innerHTML = '';
  document.getElementById('btnAnterior').disabled = indiceActual === 0;
  document.getElementById('btnSiguiente').disabled = indiceActual === NIVEL1.length - 1;
  renderPuntos();
}

function renderPuntos() {
  const cont = document.getElementById('puntosProgreso');
  cont.innerHTML = NIVEL1.map((_, i) => {
    const clases = ['punto'];
    if (i === indiceActual) clases.push('activo');
    if (revisados.has(i)) clases.push('revisado');
    return `<span class="${clases.join(' ')}"></span>`;
  }).join('');
}

function feedbackHtml(cumplidos, grupos) {
  return grupos.map((g, i) => {
    const ok = cumplidos[i];
    return `<div class="chequeo-item ${ok ? 'ok' : 'falta'}">
      <span class="chequeo-icono">${ok ? '✅' : '⚠️'}</span>
      <span>${ok ? 'Mencionas ' + g.hint + '.' : 'Todavía no detecto ' + g.hint + '.'}</span>
    </div>`;
  }).join('');
}

function revisarRespuestas() {
  const ej = NIVEL1[indiceActual];
  const temaTexto = normalizar(document.getElementById('temaInput').value);
  const ideaTexto = normalizar(document.getElementById('ideaInput').value);

  if (!temaTexto) {
    document.getElementById('feedbackTema').innerHTML = '<p class="nota">Escribe primero tu respuesta.</p>';
  } else {
    const cumpleTema = grupoCumplido(ej.grupoTema, temaTexto);
    document.getElementById('feedbackTema').innerHTML = feedbackHtml([cumpleTema], [ej.grupoTema]);
  }

  if (!ideaTexto) {
    document.getElementById('feedbackIdea').innerHTML = '<p class="nota">Escribe primero tu respuesta.</p>';
  } else {
    const grupos = [ej.grupoTema, ej.grupoIdea];
    const cumplidos = grupos.map((g) => grupoCumplido(g, ideaTexto));
    document.getElementById('feedbackIdea').innerHTML = feedbackHtml(cumplidos, grupos);
  }

  if (temaTexto && ideaTexto) {
    revisados.add(indiceActual);
    renderPuntos();
  }
}

function mostrarModelo() {
  const ej = NIVEL1[indiceActual];
  const box = document.getElementById('modeloBox');
  box.innerHTML = `
    <div class="resultado-badge">Respuesta modelo</div>
    <p class="resultado-texto"><strong>Tema:</strong> ${ej.tema}</p>
    <p class="resultado-texto"><strong>Idea principal:</strong> ${ej.ideaPrincipal}</p>
  `;
  box.classList.add('visible');
}

function iniciar() {
  renderEjercicio();

  document.getElementById('btnRevisar').addEventListener('click', revisarRespuestas);
  document.getElementById('btnModelo').addEventListener('click', mostrarModelo);

  document.getElementById('btnAnterior').addEventListener('click', () => {
    if (indiceActual > 0) {
      indiceActual -= 1;
      renderEjercicio();
    }
  });

  document.getElementById('btnSiguiente').addEventListener('click', () => {
    if (indiceActual < NIVEL1.length - 1) {
      indiceActual += 1;
      renderEjercicio();
    }
  });
}

document.addEventListener('DOMContentLoaded', iniciar);
