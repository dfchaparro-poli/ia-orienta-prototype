window.IAOrienta = window.IAOrienta || {};

window.IAOrienta.navItems = [
  { path: "#/", label: "Inicio" },
  { path: "#/perfil", label: "Perfil" },
  { path: "#/diagnostico", label: "Diagnóstico" },
  { path: "#/recomendacion", label: "Recomendador" },
  { path: "#/explorador", label: "Explorador" },
  { path: "#/prompts", label: "Prompts" },
  { path: "#/aprendizaje", label: "Aprendizaje" },
  { path: "#/favoritos", label: "Favoritos" }
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
  { id: "redactar", label: "Redactar documentos", detail: "Ensayos, informes, correos y textos académicos." },
  { id: "investigar", label: "Investigar información", detail: "Explorar fuentes, comparar datos y sintetizar hallazgos." },
  { id: "presentaciones", label: "Crear presentaciones", detail: "Organizar ideas y convertirlas en diapositivas claras." },
  { id: "analizar", label: "Analizar información", detail: "Interpretar textos, tablas y resultados preliminares." },
  { id: "ideas", label: "Generar ideas", detail: "Desbloquear conceptos para proyectos y emprendimientos." },
  { id: "aprender", label: "Aprender un tema", detail: "Crear rutas de estudio y explicaciones paso a paso." }
];

window.IAOrienta.recommendations = {
  redactar: {
    main: "ChatGPT",
    alternatives: ["Claude", "Gemini"],
    reason: "Es versátil para estructurar, mejorar tono y adaptar documentos a audiencias académicas o profesionales.",
    prompt: "Actúa como asesor de escritura académica. Ayúdame a mejorar este texto manteniendo mis ideas principales."
  },
  investigar: {
    main: "Perplexity",
    alternatives: ["Gemini", "Consensus"],
    reason: "Ayuda a formular preguntas de investigación, encontrar pistas iniciales y contrastar información de forma guiada.",
    prompt: "Resume los puntos clave sobre este tema y sugiere preguntas para profundizar con fuentes confiables."
  },
  presentaciones: {
    main: "Gamma",
    alternatives: ["Canva", "Microsoft Copilot"],
    reason: "Convierte ideas en una narrativa visual rápida, útil para prototipos, clases y exposiciones.",
    prompt: "Transforma este esquema en una presentación de 6 diapositivas con título, mensaje central y cierre."
  },
  analizar: {
    main: "ChatGPT",
    alternatives: ["Claude", "Julius AI"],
    reason: "Puede explicar patrones, ordenar hallazgos y proponer lecturas iniciales sin reemplazar la validación humana.",
    prompt: "Analiza esta información, identifica patrones y señala posibles limitaciones antes de concluir."
  },
  ideas: {
    main: "ChatGPT",
    alternatives: ["Claude", "Miro AI"],
    reason: "Funciona bien para lluvia de ideas, variaciones, criterios de selección y exploración de escenarios.",
    prompt: "Genera 10 ideas para este reto, clasifícalas por impacto y facilidad, y recomienda las 3 mejores."
  },
  aprender: {
    main: "Khanmigo",
    alternatives: ["ChatGPT", "Gemini"],
    reason: "Permite aprender con explicaciones graduales, ejemplos y preguntas de seguimiento adaptadas al nivel del usuario.",
    prompt: "Explícame este tema desde cero, con ejemplos cotidianos, preguntas de práctica y errores comunes."
  }
};

window.IAOrienta.tools = [
  { category: "Redacción", name: "ChatGPT", description: "Apoyo para redactar, corregir y adaptar textos.", use: "Borradores, correos, informes" },
  { category: "Redacción", name: "Claude", description: "Lectura extensa y mejora de documentos largos.", use: "Revisión y síntesis" },
  { category: "Investigación", name: "Perplexity", description: "Búsqueda asistida para explorar temas y preguntas.", use: "Primer acercamiento a fuentes" },
  { category: "Investigación", name: "Consensus", description: "Exploración de evidencia académica en lenguaje claro.", use: "Preguntas de investigación" },
  { category: "Diseño", name: "Canva", description: "Creación visual de piezas, infografías y diapositivas.", use: "Materiales visuales" },
  { category: "Diseño", name: "Gamma", description: "Presentaciones generadas desde ideas o esquemas.", use: "Exposiciones rápidas" },
  { category: "Productividad", name: "Microsoft Copilot", description: "Asistencia para documentos, tablas y reuniones.", use: "Trabajo administrativo" },
  { category: "Productividad", name: "Notion AI", description: "Organización de notas, tareas y bases de conocimiento.", use: "Gestión personal" }
];

window.IAOrienta.prompts = [
  { category: "Estudio", title: "Tutor paso a paso", text: "Actúa como tutor académico. Explícame [tema] desde cero, usando un lenguaje claro para mi nivel. Divide la explicación en 4 partes: concepto principal, ejemplo cotidiano, error común y ejercicio corto. Al final, hazme 5 preguntas para comprobar mi comprensión y espera mis respuestas antes de corregirme." },
  { category: "Trabajo", title: "Correo profesional", text: "Redacta un correo profesional para [situación]. Considera que el destinatario es [persona o área] y que mi objetivo es [objetivo]. Usa un tono claro, respetuoso y directo. Incluye un asunto breve, un primer párrafo con contexto, una solicitud concreta, una fecha límite si aplica y un cierre cordial." },
  { category: "Investigación", title: "Mapa de fuentes", text: "Ayúdame a investigar [tema]. Propón palabras clave en español e inglés, preguntas de búsqueda, tipos de fuentes recomendadas y criterios para evaluar confiabilidad. Luego organiza una ruta de investigación en 5 pasos e indica qué información debería verificar antes de usarla en un trabajo académico." },
  { category: "Creatividad", title: "Ideas para proyecto", text: "Genera 12 ideas para resolver [reto] en un contexto académico o de emprendimiento. Para cada idea, incluye público objetivo, beneficio principal, recursos necesarios y posible riesgo. Después clasifícalas por impacto y facilidad de implementación, y recomienda las 3 mejores para prototipar primero." }
];

window.IAOrienta.learningModules = [
  { title: "Introducción a la IA", content: "La IA puede apoyar tareas cognitivas, pero sus respuestas deben revisarse y contextualizarse." },
  { title: "Qué herramienta usar", content: "La mejor herramienta depende de la tarea: redactar, investigar, diseñar, analizar o aprender." },
  { title: "Cómo crear prompts", content: "Un buen prompt incluye rol, contexto, tarea, formato esperado y criterios de calidad." },
  { title: "Validación de respuestas", content: "Compara resultados, verifica fuentes y evita aceptar respuestas sin evidencia." },
  { title: "Riesgos y buenas prácticas", content: "Protege datos sensibles, reconoce sesgos y declara el uso de IA cuando corresponda." }
];

window.IAOrienta.mockFavorites = [
  "Prompt: Tutor paso a paso",
  "Herramienta: ChatGPT para redacción",
  "Módulo: Validación de respuestas"
];

window.IAOrienta.mockHistory = [
  "Perfil seleccionado: Estudiante",
  "Necesidad consultada: Redactar documentos",
  "Exploración: Herramientas de investigación"
];
