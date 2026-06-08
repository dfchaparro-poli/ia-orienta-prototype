window.IAOrienta = window.IAOrienta || {};

window.IAOrienta.navItems = [
  { path: "#/", label: "Inicio", icon: "home" },
  { path: "#/perfil", label: "Perfil", icon: "user" },
  { path: "#/diagnostico", label: "Diagnóstico", icon: "checklist" },
  { path: "#/recomendacion", label: "Recomendador", icon: "spark" },
  { path: "#/explorador", label: "Explorador", icon: "grid" },
  { path: "#/prompts", label: "Prompts", icon: "file" },
  { path: "#/aprendizaje", label: "Aprendizaje", icon: "book" },
  { path: "#/favoritos", label: "Favoritos", icon: "heart" }
];

window.IAOrienta.learningHighlights = [
  { title: "Qué es la IA", content: "Comprenderás que la IA reconoce patrones, genera respuestas probables y necesita criterio humano." },
  { title: "Cómo elegir una herramienta", content: "Aprenderás a vincular tarea, contexto, privacidad y formato antes de seleccionar una opción." },
  { title: "Cómo crear buenos prompts", content: "Practicarás instrucciones con objetivo, contexto, rol, formato y criterios de calidad." },
  { title: "Cómo validar respuestas", content: "Revisarás fuentes, compararás resultados y detectarás afirmaciones que requieren verificación." },
  { title: "Riesgos y buenas prácticas", content: "Identificarás sesgos, errores, privacidad y uso responsable en entornos académicos." }
];

window.IAOrienta.literacyCapsules = [
  "La IA puede equivocarse: valida antes de entregar o decidir.",
  "No compartas datos personales, contraseñas ni información sensible.",
  "Una herramienta de IA apoya tu criterio; no lo reemplaza.",
  "Pide fuentes, revisa fechas y contrasta información crítica."
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
    does: "Ayuda a generar borradores, ordenar ideas, ajustar tono y convertir notas sueltas en textos más claros.",
    when: "Úsala cuando ya tienes una intención o material inicial y necesitas mejorar estructura, claridad o estilo.",
    limitations: "Puede inventar datos, simplificar demasiado o cambiar el sentido si no revisas el resultado final.",
    prompt: "Actúa como asesor de escritura académica. Ayúdame a mejorar este texto manteniendo mis ideas principales."
  },
  investigar: {
    main: "Perplexity",
    alternatives: ["Gemini", "Consensus"],
    reason: "Ayuda a formular preguntas de investigación, encontrar pistas iniciales y contrastar información de forma guiada.",
    does: "Organiza búsquedas, sugiere rutas de exploración y facilita un primer mapa de fuentes o conceptos.",
    when: "Úsala al iniciar una investigación, para delimitar un tema o encontrar términos de búsqueda relevantes.",
    limitations: "No reemplaza la lectura de fuentes originales ni la evaluación de confiabilidad académica.",
    prompt: "Resume los puntos clave sobre este tema y sugiere preguntas para profundizar con fuentes confiables."
  },
  presentaciones: {
    main: "Gamma",
    alternatives: ["Canva", "Microsoft Copilot"],
    reason: "Convierte ideas en una narrativa visual rápida, útil para prototipos, clases y exposiciones.",
    does: "Transforma esquemas en secuencias de diapositivas con títulos, bloques de contenido y estructura visual.",
    when: "Úsala para preparar una primera versión de presentación, especialmente si necesitas organizar una historia.",
    limitations: "El diseño y los datos deben revisarse para evitar diapositivas genéricas, errores o exceso de texto.",
    prompt: "Transforma este esquema en una presentación de 6 diapositivas con título, mensaje central y cierre."
  },
  analizar: {
    main: "ChatGPT",
    alternatives: ["Claude", "Julius AI"],
    reason: "Puede explicar patrones, ordenar hallazgos y proponer lecturas iniciales sin reemplazar la validación humana.",
    does: "Resume información, compara elementos, identifica patrones preliminares y plantea posibles interpretaciones.",
    when: "Úsala para explorar datos o textos antes de hacer una conclusión formal o una entrega académica.",
    limitations: "Puede confundir correlaciones, omitir matices o concluir sin evidencia suficiente.",
    prompt: "Analiza esta información, identifica patrones y señala posibles limitaciones antes de concluir."
  },
  ideas: {
    main: "ChatGPT",
    alternatives: ["Claude", "Miro AI"],
    reason: "Funciona bien para lluvia de ideas, variaciones, criterios de selección y exploración de escenarios.",
    does: "Genera alternativas, clasifica opciones y ayuda a convertir retos amplios en posibilidades comparables.",
    when: "Úsala al inicio de un proyecto, emprendimiento o actividad creativa para ampliar el campo de opciones.",
    limitations: "Las ideas pueden ser comunes o poco viables si no incluyes contexto, restricciones y público objetivo.",
    prompt: "Genera 10 ideas para este reto, clasifícalas por impacto y facilidad, y recomienda las 3 mejores."
  },
  aprender: {
    main: "Khanmigo",
    alternatives: ["ChatGPT", "Gemini"],
    reason: "Permite aprender con explicaciones graduales, ejemplos y preguntas de seguimiento adaptadas al nivel del usuario.",
    does: "Acompaña explicaciones paso a paso, propone ejercicios y permite practicar con retroalimentación guiada.",
    when: "Úsala para estudiar un tema nuevo, repasar conceptos o pedir ejemplos adaptados a tu nivel.",
    limitations: "Debe complementarse con materiales del curso, bibliografía y revisión docente cuando sea necesario.",
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
  {
    category: "Estudio",
    title: "Tutor paso a paso",
    text: "Actúa como tutor académico. Explícame [tema] desde cero, usando un lenguaje claro para mi nivel. Divide la explicación en 4 partes: concepto principal, ejemplo cotidiano, error común y ejercicio corto. Al final, hazme 5 preguntas para comprobar mi comprensión y espera mis respuestas antes de corregirme.",
    why: {
      objective: "Aprender un tema con acompañamiento gradual.",
      context: "Define rol, nivel, estructura y momento de retroalimentación.",
      result: "Explicación organizada con práctica y verificación de comprensión."
    }
  },
  {
    category: "Trabajo",
    title: "Correo profesional",
    text: "Redacta un correo profesional para [situación]. Considera que el destinatario es [persona o área] y que mi objetivo es [objetivo]. Usa un tono claro, respetuoso y directo. Incluye un asunto breve, un primer párrafo con contexto, una solicitud concreta, una fecha límite si aplica y un cierre cordial.",
    why: {
      objective: "Comunicar una solicitud con claridad y tono adecuado.",
      context: "Incluye destinatario, intención, tono y componentes del mensaje.",
      result: "Correo editable con asunto, contexto, solicitud y cierre."
    }
  },
  {
    category: "Investigación",
    title: "Mapa de fuentes",
    text: "Ayúdame a investigar [tema]. Propón palabras clave en español e inglés, preguntas de búsqueda, tipos de fuentes recomendadas y criterios para evaluar confiabilidad. Luego organiza una ruta de investigación en 5 pasos e indica qué información debería verificar antes de usarla en un trabajo académico.",
    why: {
      objective: "Iniciar una investigación con criterios de confiabilidad.",
      context: "Pide palabras clave, preguntas, tipos de fuentes y verificación.",
      result: "Ruta inicial de búsqueda con puntos críticos para validar."
    }
  },
  {
    category: "Creatividad",
    title: "Ideas para proyecto",
    text: "Genera 12 ideas para resolver [reto] en un contexto académico o de emprendimiento. Para cada idea, incluye público objetivo, beneficio principal, recursos necesarios y posible riesgo. Después clasifícalas por impacto y facilidad de implementación, y recomienda las 3 mejores para prototipar primero.",
    why: {
      objective: "Explorar alternativas para un reto académico o emprendedor.",
      context: "Indica cantidad, público, beneficio, recursos, riesgo y criterios.",
      result: "Ideas comparables y priorizadas para elegir un primer prototipo."
    }
  }
];

window.IAOrienta.learningModules = [
  {
    title: "Introducción a la IA",
    content: "La IA es un conjunto de sistemas que identifican patrones y generan respuestas a partir de datos. Puede redactar, resumir, clasificar, explicar y proponer ideas. No comprende como una persona, no garantiza verdad y puede producir respuestas incorrectas si el contexto es pobre."
  },
  {
    title: "Selección de herramientas",
    content: "Usa ChatGPT para escritura, aprendizaje y lluvia de ideas; Claude para textos largos y revisión cuidadosa; Gemini para integración con búsqueda y ecosistema Google; Canva AI para piezas visuales, presentaciones e infografías. La tarea debe guiar la elección."
  },
  {
    title: "Creación de prompts",
    content: "Un prompt es una instrucción para orientar la respuesta de la IA. Un buen prompt incluye objetivo, contexto, rol, formato esperado y criterios. Un prompt deficiente es ambiguo, no dice para quién es la respuesta y no define cómo evaluar calidad."
  },
  {
    title: "Validación de respuestas",
    content: "Verifica fuentes, fechas y datos críticos. Compara con materiales del curso o fuentes confiables. No confíes ciegamente en respuestas convincentes: pide evidencia y revisa afirmaciones antes de usarlas."
  },
  {
    title: "Riesgos y buenas prácticas",
    content: "La IA puede reproducir sesgos, inventar información o exponer privacidad si compartes datos sensibles. Úsala de forma responsable, reconoce cuándo la empleaste y conserva tu criterio humano en decisiones importantes."
  }
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
