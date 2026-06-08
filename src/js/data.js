window.IAOrienta = window.IAOrienta || {};

window.IAOrienta.navItems = [
  { path: "#/", label: "Inicio", icon: "Inicio" },
  { path: "#/perfil", label: "Perfil", icon: "Perfil" },
  { path: "#/diagnostico", label: "Diagnostico", icon: "Necesidad" },
  { path: "#/recomendacion", label: "Recomendador", icon: "IA" },
  { path: "#/explorador", label: "Explorador", icon: "Apps" },
  { path: "#/prompts", label: "Prompts", icon: "Prompt" },
  { path: "#/aprendizaje", label: "Aprendizaje", icon: "Guia" },
  { path: "#/favoritos", label: "Favoritos", icon: "Guardado" }
];

window.IAOrienta.profiles = [
  "Estudiante",
  "Docente",
  "Profesional",
  "Emprendedor",
  "Administrativo",
  "Otro"
];

window.IAOrienta.needs = [
  { id: "redactar", label: "Redactar documentos", detail: "Ensayos, informes, correos y textos academicos." },
  { id: "investigar", label: "Investigar informacion", detail: "Explorar fuentes, comparar datos y sintetizar hallazgos." },
  { id: "presentaciones", label: "Crear presentaciones", detail: "Organizar ideas y convertirlas en diapositivas claras." },
  { id: "analizar", label: "Analizar informacion", detail: "Interpretar textos, tablas y resultados preliminares." },
  { id: "ideas", label: "Generar ideas", detail: "Desbloquear conceptos para proyectos y emprendimientos." },
  { id: "aprender", label: "Aprender un tema", detail: "Crear rutas de estudio y explicaciones paso a paso." }
];

window.IAOrienta.recommendations = {
  redactar: {
    main: "ChatGPT",
    alternatives: ["Claude", "Gemini"],
    reason: "Es versatil para estructurar, mejorar tono y adaptar documentos a audiencias academicas o profesionales.",
    prompt: "Actua como asesor de escritura academica. Ayudame a mejorar este texto manteniendo mis ideas principales."
  },
  investigar: {
    main: "Perplexity",
    alternatives: ["Gemini", "Consensus"],
    reason: "Ayuda a formular preguntas de investigacion, encontrar pistas iniciales y contrastar informacion de forma guiada.",
    prompt: "Resume los puntos clave sobre este tema y sugiere preguntas para profundizar con fuentes confiables."
  },
  presentaciones: {
    main: "Gamma",
    alternatives: ["Canva", "Microsoft Copilot"],
    reason: "Convierte ideas en una narrativa visual rapida, util para prototipos, clases y exposiciones.",
    prompt: "Transforma este esquema en una presentacion de 6 diapositivas con titulo, mensaje central y cierre."
  },
  analizar: {
    main: "ChatGPT",
    alternatives: ["Claude", "Julius AI"],
    reason: "Puede explicar patrones, ordenar hallazgos y proponer lecturas iniciales sin reemplazar la validacion humana.",
    prompt: "Analiza esta informacion, identifica patrones y senala posibles limitaciones antes de concluir."
  },
  ideas: {
    main: "ChatGPT",
    alternatives: ["Claude", "Miro AI"],
    reason: "Funciona bien para lluvia de ideas, variaciones, criterios de seleccion y exploracion de escenarios.",
    prompt: "Genera 10 ideas para este reto, clasificalas por impacto y facilidad, y recomienda las 3 mejores."
  },
  aprender: {
    main: "Khanmigo",
    alternatives: ["ChatGPT", "Gemini"],
    reason: "Permite aprender con explicaciones graduales, ejemplos y preguntas de seguimiento adaptadas al nivel del usuario.",
    prompt: "Explicame este tema desde cero, con ejemplos cotidianos, preguntas de practica y errores comunes."
  }
};

window.IAOrienta.tools = [
  { category: "Redaccion", name: "ChatGPT", description: "Apoyo para redactar, corregir y adaptar textos.", use: "Borradores, correos, informes" },
  { category: "Redaccion", name: "Claude", description: "Lectura extensa y mejora de documentos largos.", use: "Revision y sintesis" },
  { category: "Investigacion", name: "Perplexity", description: "Busqueda asistida para explorar temas y preguntas.", use: "Primer acercamiento a fuentes" },
  { category: "Investigacion", name: "Consensus", description: "Exploracion de evidencia academica en lenguaje claro.", use: "Preguntas de investigacion" },
  { category: "Diseno", name: "Canva", description: "Creacion visual de piezas, infografias y diapositivas.", use: "Materiales visuales" },
  { category: "Diseno", name: "Gamma", description: "Presentaciones generadas desde ideas o esquemas.", use: "Exposiciones rapidas" },
  { category: "Productividad", name: "Microsoft Copilot", description: "Asistencia para documentos, tablas y reuniones.", use: "Trabajo administrativo" },
  { category: "Productividad", name: "Notion AI", description: "Organizacion de notas, tareas y bases de conocimiento.", use: "Gestion personal" }
];

window.IAOrienta.prompts = [
  { category: "Estudio", title: "Tutor paso a paso", text: "Actua como tutor. Explicame [tema] con ejemplos simples, luego hazme 5 preguntas para comprobar mi comprension." },
  { category: "Trabajo", title: "Correo profesional", text: "Redacta un correo claro y cordial para [situacion]. Usa tono profesional y agrega un asunto breve." },
  { category: "Investigacion", title: "Mapa de fuentes", text: "Sugiere palabras clave, preguntas de busqueda y criterios para evaluar fuentes sobre [tema]." },
  { category: "Creatividad", title: "Ideas para proyecto", text: "Genera 12 ideas para [reto], agrupalas por categoria y recomienda una ruta para prototipar." }
];

window.IAOrienta.learningModules = [
  { title: "Introduccion a la IA", content: "La IA puede apoyar tareas cognitivas, pero sus respuestas deben revisarse y contextualizarse." },
  { title: "Que herramienta usar", content: "La mejor herramienta depende de la tarea: redactar, investigar, disenar, analizar o aprender." },
  { title: "Como crear prompts", content: "Un buen prompt incluye rol, contexto, tarea, formato esperado y criterios de calidad." },
  { title: "Validacion de respuestas", content: "Compara resultados, verifica fuentes y evita aceptar respuestas sin evidencia." },
  { title: "Riesgos y buenas practicas", content: "Protege datos sensibles, reconoce sesgos y declara el uso de IA cuando corresponda." }
];

window.IAOrienta.mockFavorites = [
  "Prompt: Tutor paso a paso",
  "Herramienta: ChatGPT para redaccion",
  "Modulo: Validacion de respuestas"
];

window.IAOrienta.mockHistory = [
  "Perfil seleccionado: Estudiante",
  "Necesidad consultada: Redactar documentos",
  "Exploracion: Herramientas de investigacion"
];
