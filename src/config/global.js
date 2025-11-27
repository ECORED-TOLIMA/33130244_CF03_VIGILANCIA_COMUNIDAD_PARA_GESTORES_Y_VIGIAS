export default {
  global: {
    componenteFormativo: 'Reporte de situaciones de interés en salud pública',
    descripcionCurso:
      'En este componente formativo se revisarán aspectos de la Vigilancia Basada en Comunidad (VBC), relacionados con el reporte de situaciones de interés en salud pública, mediante agentes comunitarios, quienes comunican eventos o señales según protocolos establecidos. El reporte puede ser positivo o negativo e incorpora información de tiempo, lugar y persona, permitiendo la trazabilidad y gestión eficaz del riesgo sanitario.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Importancia del reporte en la Estrategia de Vigilancia Basada en Comunidad (VBC)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Reporte',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de reportes',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Reportes por tipo de vigilancia',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tipos de información',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Flujo y canales para la recepción de la información',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Actores que realizan el reporte',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo:
              'Aplicativo de la Red de Vigilancia Epidemiológica Comunitaria',
            hash: 't_1_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_XX_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        '1. Importancia del reporte en la Estrategia de Vigilancia Basada en Comunidad (VBC)',
      referencia:
        'Organización Mundial de las Salud / Organización Panamericana de la Salud. (2017). <em>Módulos de principios de epidemiología para el control de enfermedades (MOPECE).</em>',
      tipo: 'Documento',
      link:
        'https://iris.paho.org/bitstream/handle/10665.2/55842/9789275319802_spa.pdf',
    },
    {
      tema:
        '1. Importancia del reporte en la Estrategia de Vigilancia Basada en Comunidad (VBC)',
      referencia:
        'Instituto Nacional de Salud. (2025). <em>Caja de herramientas para la gestión del riesgo colectivo en brotes, epidemias y eventos de interés en salud pública. Etapa 1.2. Sistema de alerta temprana: Vigilancia Basada en Comunidad- fases de implementación.</em>',
      tipo: 'Manual',
      link:
        'https://www.ins.gov.co/Noticias/revcom/Etapa%201.2.%20Sistema%20de%20alerta%20temprana%20vigilancia%20basada%20en%20comunidad,%20fases%20de%20implementaci%C3%B3n%20caja.pdf',
    },
    {
      tema:
        '1. Importancia del reporte en la Estrategia de Vigilancia Basada en Comunidad (VBC)',
      referencia:
        'Instituto Nacional de Salud. (2025). <em>Lineamientos para la Vigilancia Basada en la Comunidad.</em>',
      tipo: 'Documento',
      link:
        'https://www.ins.gov.co/Noticias/revcom/Lineamientos%20para%20la%20Vigilancia%20Basada%20en%20Comunidad%202025.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agentes comunitarios',
      significado:
        'miembros capacitados de la comunidad responsables de identificar y reportar señales.',
    },
    {
      termino: 'Canales de comunicación',
      significado:
        'medios para enviar información del reporte: aplicación móvil, <em>web</em>, mensajes de texto, WhatsApp, llamadas, radio - comunicación, emisoras comunitarias y voz a voz.',
    },
    {
      termino: 'Centralización/articulación de datos',
      significado:
        'integración de los reportes de VBC en plataformas como SIVIGILA y SAT, facilitando la toma de decisión coordinada.',
    },
    {
      termino: 'Conglomerados',
      significado:
        'conjunto atípico de casos similares que ocurren en el mismo lugar y tiempo, perceptibles por la comunidad.',
    },
    {
      termino: 'Factores ambientales',
      significado:
        'circunstancias del entorno como contaminación, plagas, desastres naturales, que puedan incidir en la salud pública.',
    },
    {
      termino: 'Instrumentos de reporte',
      significado:
        'formularios individuales y colectivos, cápsulas comunitarias, formatos estructurados y semiestructurado.',
    },
    {
      termino: 'Reporte',
      significado:
        'comunicación sistemática de eventos, situaciones o señales a la entidad de salud para su análisis y respuesta.',
    },
    {
      termino: 'Muertes en comunidad',
      significado:
        'defunciones asociadas a situaciones de interés, como posible señal de alerta.',
    },
    {
      termino: 'Sistema de Alerta Temprana (SAT)',
      significado:
        'subsistema que recibe, valida y activa rutas de respuesta institucional ante señales reportadas.',
    },
    {
      termino: 'Situaciones de interés en salud pública',
      significado:
        'conjunto de eventos, factores o señales susceptibles de convertirse en eventos relevantes para la salud comunitaria.',
    },
    {
      termino: 'Tiempo, lugar y persona',
      significado:
        'variables fundamentales en el reporte que definen cuándo, dónde y a quién afecta la situación.',
    },
    {
      termino: 'Tipos de reporte',
      significado:
        'clasificación entre reporte positivo (presencia de casos/eventos) y negativo (ausencia de eventos/situaciones).',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'seguimiento del reporte desde la identificación y registro hasta el cierre del caso o evento.',
    },
    {
      termino: 'Vigilancia activa y pasiva',
      significado:
        'modalidades en que los agentes buscan activamente casos/eventos o esperan que la comunidad los reporte espontáneamente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Federación Internacional de Sociedades de la Cruz Roja y de la Media Luna Roja. (2019). <em>Vigilancia Basada en la Comunidad. Herramienta de evaluación</em> (pp. 53–54).',
    },
    {
      referencia:
        'ICONOI. Soluciones tecnológicas personalizadas. (2025). <em>Manual de usuario Vigilancia Basada en Comunidad (VBC).</em>',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2023). <em>Caja de herramientas para la gestión del riesgo colectivo en brotes, epidemias y eventos de interés en salud pública. Etapa 1. Sistema de alerta temprana: identificación del riesgo en salud pública.</em>',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2023). <em>Caja de herramientas para la gestión del riesgo colectivo en brotes, epidemias y eventos de interés en salud pública. Etapa 1.2. Sistema de alerta temprana: Vigilancia basada en Comunidad - Fases de Implementación.</em>',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2024). <em>Propuesta Herramienta de Gestión de la Información de Vigilancia Basada en Comunidad.</em>',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2025). <em>Lineamientos para la Vigilancia Basada en la Comunidad.</em>',
      link:
        'https://www.ins.gov.co/Noticias/revcom/Lineamientos%20para%20la%20Vigilancia%20Basada%20en%20Comunidad%202025.pdf',
    },
    {
      referencia: 'Instituto Nacional de Salud. (2006). <em>SIVIGILA.</em>',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2006, 09 de octubre). Decreto 3518 de 2006. Por el cual se crea y reglamenta el Sistema de Vigilancia en Salud Pública y se dictan otras disposiciones.',
      link:
        'https://normograma.supersalud.gov.co/compilacion/docs/decreto_3518_2006.htm',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016, 06 de mayo). Decreto 780 De 2016. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/decreto-780-unico-modificado-2016.pdf',
    },
    {
      referencia:
        'Paz Tovar, C., León Arce, M., Van Brussel, E., Torres Díaz, A., Pérez Vázquez, F., Flores Ramírez, R., García Sepúlveda, C. A., Comas García, C. A., Espinosa Reyes, G., Mendoza Pérez, K., Carrizales Yanes, L. & Díaz Barriga, F. (2022). Revista de Salud Ambiental. Sistema de Vigilancia Integrada para Comunidades Contaminadas: una fuerza de tarea para riesgos sindémicos de salud. <em>Revista de Salud Ambiental, 22.</em>',
      link: 'https://www.ojs.diffundit.com/index.php/rsa/article/view/1143',
    },
    {
      referencia:
        'Rueda Cortés, N. Y. (2019). <em>Requerimientos de usuario para el prototipo de una aplicación móvil para la vigilancia epidemiológica comunitaria en albergues en situación de emergencia o desastre en Bogotá.</em> Universidad Católica de Manizales.',
    },
    {
      referencia:
        'Tufiño Aguilar, A. A., Angamarca-Iguago, J., Hualpa, A. N., Arcos-Villacís, N., Simancas-Racines, D. & Escobar-Naranjo, M. (2023). Impacto de la vigilancia basada en eventos a nivel comunitario en países de bajos y medianos ingresos: un resumen estructurado de evidencia con metodología FRISBEE. <em>PRF Práctica Familiar Rural, 8</em>(3).',
      link:
        'https://practicafamiliarrural.org/pfr/article/download/291/415?inline=1',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED) ',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Paola Cataño Mora',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Luz Dary Quintero Torres',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Gina M. Morales S',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Fabian Nicolas Moreno Anzola',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Diego Felipe López Ávila',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Diana Alexandra Moreno Santamaria',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'María Elena Tamayo Bustamante',
          cargo: 'Asesora metodológica',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital ',
        },
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Asesora metodológica',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital ',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
