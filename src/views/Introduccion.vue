<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-9.order-2
        .tarjeta.tarjeta--BGC01.p-4.mb-4
          p.mb-0 Hay que recordar que la Vigilancia Basada en Comunidad (VBC) constituye una estrategia fundamental dentro del sistema de salud pública, ya que permite identificar y reportar situaciones de interés a partir de señales detectadas directamente en los territorios por los agentes comunitarios. Este enfoque promueve una alerta temprana y fortalece la gestión del riesgo en salud al integrar a la comunidad en la identificación, análisis y comunicación de situaciones de interés en salud pública que pueden impactar la salud colectiva, garantizando así la trazabilidad de la información hasta su verificación y cierre.
        p.mb-0 El reporte dentro de la VBC es el principal mecanismo de comunicación entre la comunidad y las autoridades sanitarias, facilitando la detección de eventos oportunos, el seguimiento de factores de riesgo y la implementación de medidas preventivas y de control. Para que el reporte sea epidemiológicamente útil, debe describir de manera clara tres aspectos esenciales:  
      .col-lg-3.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/introduccion/img-01.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/introduccion/img-02.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FFDD8B;")
            h4.text-center.mt-5(style="color:#12263F") Tiempo
            p.text-center.mb-0(style="color:#12263F") Cuando ocurre la situación.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/introduccion/img-03.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FFDD8B;")
            h4.text-center.mt-5(style="color:#12263F") Lugar
            p.text-center.mb-0(style="color:#12263F") Dónde se presenta.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/introduccion/img-04.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FFDD8B;")
            h4.text-center.mt-5(style="color:#12263F") Personas afectadas
            p.text-center.mb-0(style="color:#12263F") Quiénes participan o sufren el evento.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.col-12
        .d-flex.flex-wrap.align-items-center.tarjeta01
          .imagen-01
            figure.mb-0
              img(src='@/assets/curso/temas/introduccion/img-05.svg' alt='Imagen decorativa' class='img-fluid')
          
          .contenido-tarjeta01.p-4
            p.mb-0(data-aos="fade-down") Lo anterior asegura que la respuesta institucional sea oportuna y precisa.

    p.mb-4.text-center La diversidad de reportes, ya sean: 

    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .tarjeta--container.row.mb-4
          .col-xl.col-md-6.tarjeta.color-primario.p-5(style="background-color:#FFC025")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/introduccion/img-06.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Positivos
            p.mb-0 Cuando se identifican casos, muertes, conglomerados o señales de riesgo.
          .col-xl.col-md-6.tarjeta.color-secundario.p-5(style="background-color:#FA9757")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/introduccion/img-07.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Negativos
            p.mb-0 Cuando no se detectan eventos, pero se valida la ausencia de riesgo.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.col-12
        .d-flex.flex-wrap.align-items-center.tarjeta02
          .imagen-02
            figure.mb-0
              img(src='@/assets/curso/temas/introduccion/img-08.svg' alt='Imagen decorativa' class='img-fluid')
          
          .contenido-tarjeta02.p-4
            p.mb-0(data-aos="fade-down") Permite que el sistema funcione de manera continua y participativa.

    p De esta manera, la VBC no solo fortalece la detección de eventos en salud pública, sino que también asegura la cobertura, efectividad y sostenibilidad de la vigilancia epidemiológica, fomentando la confianza y la corresponsabilidad entre la comunidad y las instituciones.
    p.mb-4 Para finalizar esta introducción temática, es importante que acceda al siguiente video y conozca lo que se impartirá en el componente formativo:

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
