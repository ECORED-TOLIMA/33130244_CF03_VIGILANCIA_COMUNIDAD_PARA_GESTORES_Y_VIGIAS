<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo aborda de manera integral el proceso de reporte dentro de la Vigilancia Basada en Comunidad (VBC), entendido como el conjunto de acciones mediante las cuales se comunica y documenta la información sobre situaciones de interés en salud pública. Resalta la importancia de contar con mecanismos claros y coordinados que faciliten el flujo de información entre la comunidad y las instituciones de salud, garantizando una comunicación ágil, confiable y oportuna.
    p Se enfatiza el papel del reporte como un vínculo esencial entre la observación comunitaria y la respuesta institucional, permitiendo que los datos recolectados sirvan para orientar decisiones y acciones preventivas. Además, se destaca la relevancia de los actores que intervienen en este proceso y la necesidad de contar con herramientas tecnológicas y procedimientos adecuados para el registro, la transmisión y el seguimiento de la información, incluso en contextos con limitaciones de conectividad.
    p.mb-4 En conjunto, esta temática promueve una comprensión amplia del reporte como un elemento clave de la vigilancia en salud pública, que articula la participación comunitaria con los sistemas de información y contribuye a fortalecer la detección temprana y la respuesta ante eventos que afectan el bienestar colectivo.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis del componente formativo Reporte de situaciones de interés en salud pública, presenta el desarrollo de contenidos orientados a comprender el proceso mediante el cual se comunican, registran y transmiten los eventos identificados en la comunidad. Se revisan los diferentes tipos de reportes y fuentes de información que alimentan el sistema de vigilancia, así como los canales y flujos que garantizan su adecuada recepción y análisis, así no se tenga conexión a internet. También se abordan los actores responsables del reporte y los procesos para acceder al aplicativo de la Red de Vigilancia Epidemiológica Comunitaria.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
