<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Evaluación del reporte en vigilancia comunitaria',
      titulo: 'Cuestionario',
      introduccion:
        '<strong>Objetivo:</strong> comprobar la comprensión general sobre los conceptos y procesos relacionados con el reporte en la Vigilancia Basada en Comunidad, promoviendo el fortalecimiento de los conocimientos fundamentales para la identificación y comunicación de situaciones de interés en salud pública.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'El formato individual es un instrumento para reportar una situación que afecta a diversas personas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'El reporte negativo, lejos de indicar ausencia de acción, sirve para validar la ausencia de situaciones preocupantes y mantener la trazabilidad del sistema.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'La Vigilancia Basada en Comunidad solo reconoce como señales los eventos confirmados por laboratorios clínicos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'El reporte dentro de la Vigilancia Basada en Comunidad debe incluir variables de tiempo, lugar y persona para que sea epidemiológicamente relevante.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Tanto miembros de la comunidad como agentes comunitarios pueden detectar y comunicar situaciones de interés en salud pública para su análisis y respuesta.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'La respuesta institucional solo es necesaria ante la confirmación de brotes o muertes; para otras situaciones, no es necesaria.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué caracteriza a un reporte negativo en el contexto de la Vigilancia Basada en Comunidad?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presencia de casos sospechosos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Validación de la ausencia de eventos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Requiere acción e intervención inmediata.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Activación de rutas de respuesta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes es un ejemplo de situación ambiental a reportar según la VBC?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Accidente vehicular.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Vertederos de basura y contaminación del agua.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Celebración comunitaria.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Entrega de ayudas humanitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué instrumento puede usarse para reportar situaciones de interés en salud pública desde la comunidad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Carteles informativos.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Formularios individuales y colectivos, aplicaciones móviles.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Folletos impresos.', esCorrecta: false },
            { id: 'd', texto: 'Redes sociales.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Quiénes son considerados agentes comunitarios en la Vigilancia Basada en Comunidad?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Miembros capacitados de la comunidad que identifican y reportan señales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Funcionarios de las entidades gubernamentales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Personal médico especializado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usuarios de redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿En qué tipo de comunidades es especialmente relevante implementar la Vigilancia Basada en Comunidad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente en zonas urbanas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sólo en hospitales grandes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'En áreas rurales, comunidades étnicas y zonas vulnerables.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'En empresas privadas.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Quién es responsable de coordinar la Vigilancia Basada en Comunidad en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ministerio de Agricultura.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Instituto Nacional de Salud.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Cruz Roja Internacional.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Ministerios municipales de cultura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué tipo de formato puede utilizarse para realizar reportes dentro de la Vigilancia Basada en Comunidad?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Formulario estructurado, semiestructurado o narrativo.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Resume curricular.', esCorrecta: false },
            { id: 'c', texto: 'Hoja de vida laboral.', esCorrecta: false },
            { id: 'd', texto: 'Certificado de residencia.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿A través de qué canales pueden los agentes comunitarios comunicar situaciones de interés en salud pública?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exclusivamente por correo postal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aplicaciones móviles, plataformas <em>web</em> y llamadas telefónicas.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Por televisión nacional.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Solo con cita previa en centros de salud.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿A qué se refiere una “situación de interés en salud pública”?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'A cualquier evento con impacto potencial en la salud colectiva que requiere vigilancia sistemática.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'A campañas masivas de educación ambiental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'A la atención médica particular en hospitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'A actividades recreativas comunitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál de los siguientes no es una situación de interés en salud pública?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Contaminación del agua.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Brote de enfermedad transmisible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumento de roedores en un barrio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Juegos culturales juveniles.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Las muertes comunitarias pueden considerarse situaciones de interés en salud pública cuando:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son espontáneas en adultos mayores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tienen causas relacionadas con eventos bajo vigilancia y podrían indicar un conglomerado o riesgo para la colectividad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ocurren en hospitales privados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suceden por causas naturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'El registro oportuno de situaciones de interés en salud pública permite:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar la participación deportiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tomar decisiones para prevenir y controlar riesgos colectivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar la oferta educativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar campañas de publicidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Un ejemplo de conglomerado reportable en salud pública sería:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Grupo de niños con síntomas similares en el mismo colegio durante una semana.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Comunidad celebrando un evento religioso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumento de ventas en mercados locales.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Festividad popular.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Por qué es necesaria la actualización periódica del listado de situaciones de interés de salud pública?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque las comunidades cambian de gustos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para responder a nuevas amenazas, necesidades epidemiológicas y mejorar la prevención y control.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para aumentar los registros estadísticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para facilitar eventos culturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
