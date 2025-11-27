<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Importancia del reporte en la Estrategia de Vigilancia Basada en Comunidad (VBC)

    .row.justify-content-center.mb-5
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img-01.png', alt='Imagen decorativa')
    
    p.mb-4 La Vigilancia Basada en Comunidad (VBC) identifica señales que deben ser valoradas y verificadas por un actor de la vigilancia basada en indicadores, según los protocolos de vigilancia en salud publica vigentes y como parte de un sistema de alerta temprana del modelo de gestión de riesgo en salud pública (identificación, análisis, valoración y modificación), de manera que se pueda monitorear la trazabilidad de la gestión realizada con cada señal identificada hasta su cierre (Instituto Nacional de Salud, 2025).

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-02.png', alt='Imagen decorativa')
      .col-lg-7.mb-lg-0(data-aos="fade-left")
        p La necesidad de un sistema de recolección de situaciones de interés en salud pública surge porque la VBC depende de información oportuna, confiable y sistematizada para que los agentes comunitarios, en articulación con las entidades territoriales de salud, puedan identificar y reportar señales tempranas que influyen directamente en la prevención y control de eventos de interés en salud pública. Hoy en día, la gestión es manual, lenta y propensa a errores, lo que limita su capacidad de respuesta rápida y efectiva (Instituto Nacional de Salud, 2024).
        .cajon.cajon.color-primario.p-4
          p.mb-0 Por lo anterior, se requiere velar por la oportunidad y velocidad en la respuesta; al contar con un sistema automatizado, se reducirían los retrasos en la captura, validación y análisis de las señales, permitiendo intervenciones rápidas antes de que los eventos se conviertan en brotes de difícil control.

    .row.justify-content-center.mb-4
      .col-lg-9.order-lg-1.order-2.mb-lg-0.mb-4
        .bg-color-1.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img-03.svg', alt='')
            .col-lg
              .p-3
                p Un sistema de recolección disminuye la probabilidad de errores en el procesamiento, debido a que la recolección manual de datos es susceptible a inconsistencias. El sistema garantizaría estandarización de la información y trazabilidad desde la fuente comunitaria (vigías y gestores) hasta los sistemas nacionales(Instituto Nacional de Salud, 2006).
        p De igual manera, la centralización y articulación de datos, permite integrar los reportes de la VBC al SIVIGILA y al SAT, se asegura una única fuente de información consolidada, mejorando la coordinación entre niveles municipal, departamental y nacional para la coordinación de acciones con la comunidad. También, se fortalece la participación comunitaria porque los agentes comunitarios tendrán una herramienta accesible, sencilla y confiable para notificar, recibir retroalimentación y mejorar su rol en la vigilancia. Esto, favorece la motivación y la eficacia de la estrategia.
      .col-lg-3.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src="@/assets/curso/temas/tema1/img-04.png", data-aos="zoom-in")

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#FFC025")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-05.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Contar con una herramienta de recolección fomenta la optimización de recursos humanos y logísticos, reduciendo los tiempos de gestión administrativa y se liberan capacidades para las funciones analíticas y operativas de salud pública. Además, permite la visibilidad y seguimiento en tiempo real, para que el sistema pueda construir tableros de control, flujos de casos y reportes automáticos que fortalezcan la toma de decisiones, la rendición de cuentas y la transparencia del proceso.

    .row.justify-content-center.mb-4
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img-06.svg', alt='Imagen decorativa')
      .col-9
        p.mb-0(data-aos="fade-left") La promoción de un instrumento de captura garantiza que exista la adaptabilidad a diversos contextos debido a la multiplicidad de los canales de comunicación como los móvil, #[em web, offline] y canales alternativos entre los que pueden ser #[em chatbot, WhatsApp], formularios #[em web], se garantiza que incluso comunidades rurales o aisladas puedan reportar sin barreras de conectividad.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario-medio.p-4
          p.mb-0 Finalmente, la creación de herramientas que permitan mejorar la captura de datos para el sistema de vigilancia está respaldado en el marco del Decreto 3518 de 2006 y el Decreto 780 de 2016, que reglamentan el Sistema de Vigilancia en Salud Pública, fortaleciendo las obligaciones de los niveles territoriales con el INS y mejorando su articulación.

    p La implementación de una herramienta de captura en la vigilancia basada en comunidad beneficia la detección temprana de los casos, síndromes, brotes y otras situaciones con mayor precisión y veracidad mejorando la acción intersectorial. Además, cuando existe un conocimiento temprano de las situaciones cabe la posibilidad que se reduzca el riego de morbilidad y mortalidad. La existencia de una comunicación bidireccional fomenta la confianza y efectividad del proceso de la VBC e incluso fomenta la preparación a la respuesta en el caso de emergencias sanitarias y amenazas de enfermedades reemergentes (Instituto Nacional de Salud, 2024).

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1. Reporte 

    .bg-full-width.bg-color-2
      .px-4.px-md-5
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema1/img-07.png', alt='Imagen decorativa')
          .col-lg-7.mb-lg-0(data-aos="fade-left")
            p(style="color:#000") El reporte dentro de la vigilancia basada en comunidad es una herramienta clave para detectar eventos o situaciones de interés en salud pública, permitiendo una respuesta oportuna por parte de las autoridades y la comunidad. Este proceso está definido por varios componentes esenciales: su definición, sus características (tiempo, lugar y persona) y la diversidad de tipos, incluyendo los reportes negativos y otros específicos. Asimismo, se refiere a la comunicación sistemática de eventos, situaciones o señales de interés en salud pública identificadas por miembros de la misma comunidad, denominados agentes comunitarios. Es el mecanismo por el cual se trasladan observaciones o sospechas desde el entorno comunitario hacia el sistema de salud para su análisis y eventual acción de control y prevención (Instituto Nacional de Salud, 2023).
            .row
              .col-auto.d-none.d-lg-block.order-lg-1.order-2.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img-08.svg' alt="Imagen decorativa")
              .col-lg-10.col-12.mb-3.order-lg-2.order-2.mb-lg-0
                p(style="color:#000") Una situación de interés en salud pública es un conjunto de posibles eventos o factores relacionados con un evento de interés en salud pública, del cual se requiere definir algunas características que corresponden a: 

        .row.justify-content-center.mb-4
          .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/img-09.svg' alt="Imagen decorativa")
              .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FFDD8B;")
                h4.text-center.mt-5(style="color:#12263F") Quienes está afectando
                p.text-center.mb-0(style="color:#12263F") Personas, animales, entre otros. 
          .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/img-10.svg' alt="Imagen decorativa")
              .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FFDD8B;")
                h4.text-center.mt-5(style="color:#12263F") Dónde ocurre la situación
                p.text-center.mb-0(style="color:#12263F") Departamento, municipio, barrio, vereda, corregimiento, comunidad.
          .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/img-11.svg' alt="Imagen decorativa")
              .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FFDD8B;")
                h4.text-center.mt-5(style="color:#12263F") Cuándo sucedió o está sucediendo
                p.text-center.mb-0(style="color:#12263F") Hora, día, mes, año.

    p Estas situaciones pueden ser detectadas por la comunidad, convirtiéndose en señales que requieren verificación (Paz Tovar et al., 2022).
    p.mb-4 Las características del reporte abordan el tiempo, lugar y persona, con el objeto de que este sea efectivo y a continuación se explica cada una: 

    .row.justify-content-center.mb-0
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA.mb-4(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
          .row(titulo="Tiempo")
            .col-lg-12.order-lg-1.order-2
              p.mb-0 Especifica cuándo ocurrió o se detectó la situación. Esto puede implicar días, semanas o períodos específicos en los cuales se observó el evento, lo que facilita la vigilancia de tendencias y la identificación de brotes o cambios inusuales en la ocurrencia.
          .row(titulo="Lugar")
            .col-lg-12.order-lg-1.order-2
              p.mb-0 Detalla el área geográfica, la comunidad, el barrio, el municipio o la institución donde surge el evento. Esta información es esencial para la focalización de intervenciones y la gestión territorial de la salud pública.
          .row(titulo="Persona")
            .col-lg-12.order-lg-1.order-2
              p.mb-0 Describe quién está afectado. Puede involucrar características sociodemográficas como edad, sexo, ocupación, grupo étnico o condición vulnerable, permitiendo identificar poblaciones en riesgo y personalizar la respuesta sanitaria.

      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img-12.png' alt="Imagen decorativa")

    .row.justify-content-center
      .col-xl-10
        .cajon.cajon.color-primario.row.align-items-center.m-0.style___box_1.p-4(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema1/img-13.svg', alt='').m-auto
          .col-xl
            p.mb-0 Cuando el reporte contiene estas tres variables cobra importancia epidemiológica siendo útil para la toma de decisiones (Instituto Nacional de Salud, 2023).
    
    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2. Tipos de reportes
    
    p.mb-4 De acuerdo con lo establecido por el Instituto Nacional de salud (2023), el reporte en la vigilancia basada en comunidad es un mecanismo flexible, estructurado y esencial para la identificación, seguimiento y control de las situaciones de interés en salud pública, con la probabilidad de convertirse en eventos de interés en salud pública, con características precisas y modalidades diversas que garantizan una gestión integral y participativa.

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .cajon.cajon.C01.px-4.py-4
          .row.justify-content-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/tema1/img-14.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") La vigilancia basada en comunidad contempla distintos tipos de reportes adaptables al momento, contexto y modalidad de implementación, los cuales se pueden realizar mediante formatos estructurados o resúmenes comunitarios de situación conocidos como cápsulas. Los tipos de reportes abordan dos: positivos y negativos, que en epidemiología comunitaria tienen propósitos y significados distintos y se diferencian principalmente por la presencia o ausencia de eventos de interés en salud pública detectados en la comunidad.

    p.mb-4.text-center A continuación, se explican estos dos reportes: 

    TabsC.color-acento-botones.mb-4(data-aos="flip-up")
      .py-3.py-md-4(titulo="Reporte positivo")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/img-15.png', alt='Imagen decorativa')
          .col-lg-6.order-lg-2.order-2
            p Comunican la presencia de casos sospechosos, conglomerados, muertes no atendidas por el sistema de salud, signos y síntomas compatibles con eventos bajo vigilancia o factores ambientales de riesgo (ejemplo: brotes de enfermedades, aumento de vectores, contaminación del agua).
            p.mb-0 Un reporte positivo implica que se ha detectado y comunicado la presencia de casos, conglomerados, muertes, síntomas compatibles con enfermedades bajo vigilancia o factores ambientales de riesgo en la comunidad. Estos reportes son fundamentales para la acción porque permiten iniciar procesos de verificación, investigación epidemiológica y atención, además alerta a las autoridades de la necesidad de evaluar y responder ante potenciales brotes o eventos de interés en salud pública insumos para la activación de rutas de respuestas y gestión del riesgo local.
      .py-3.py-md-4(titulo="Reporte negativo")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/img-16.png', alt='Imagen decorativa')
          .col-lg-6.order-lg-2.order-2
            p Se refiere al reporte en el cual no se detectan casos ni eventos de interés en salud pública, pero sirve como evidencia de la ausencia de situaciones preocupantes en determinadas áreas o períodos. Es fundamental para validar la efectividad de las intervenciones y mantener la trazabilidad del sistema.
            p.mb-0 El reporte negativo no debe verse como una ausencia de acción, sino como una parte vital del sistema, ya que permite documentar los territorios donde no se presentan eventos y mantiene activa la vigilancia, lo que ayuda a evaluar la cobertura, efectividad y evolución de la vigilancia en salud pública. Asimismo, la diversidad de reportes asegura que distintos eventos, factores y grupos poblacionales sean considerados en la alerta temprana y la respuesta sanitaria, siendo esto útil para la planificación de la respuesta requerida (Instituto Nacional de Salud, 2023).
    
    p.mb-4.text-center Basado en la anterior información y para ejemplificar cada reporte, se plantea la siguiente tabla:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1.
          span  #[i Características del reporte positivo y negativo]
        .tabla-a.color-acento-contenido
          table
            caption Fuente: Instituto Nacional de Salud (2023) 
            thead
              tr(data-aos="fade-right")
                th(style="width: 33.33%; background-color: #30DF8E;") Característica
                th(style="width: 33.33%; background-color: #30DF8E;") Reporte positivo
                th(style="width: 33.33%; background-color: #30DF8E;") Reporte negativo
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") #[b Contenido]
                td(style="background-color: #F6F6F6;") Caso, brotes, muertes, factores potencialmente.
                td(style="background-color: #F6F6F6;") Ausencia de casos / eventos.
              tr(data-aos="fade-right")
                td #[b Utilidad]
                td Activación de respuesta y control.
                td Validación de ausencia, mantenimiento de vigilancia.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") #[b Frecuencia]
                td(style="background-color: #F6F6F6;") Variable, según presencia de riesgos.
                td(style="background-color: #F6F6F6;") Permite seguimiento regular, incluso donde no hay casos.
              tr(data-aos="fade-right")
                td #[b Implicación]
                td Requiere acción o intervención.
                td Aporta a la trazabilidad y evaluación de la cobertura.
        
    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3. Reportes por tipo de vigilancia

    p.mb-4 Los reportes pueden ser realizados bajo modalidades: 

    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .tarjeta--container.row.mb-4
          .col-xl.col-md-6.tarjeta.color-primario.p-5(style="background-color:#FFC025")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-17.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Pasivas
            p.mb-0 Cuando el agente comunitario espera el reporte espontáneo de la comunidad. 
          .col-xl.col-md-6.tarjeta.color-secundario.p-5(style="background-color:#FA9757")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-18.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Activas
            p.mb-0 Cuando el agente busca activamente casos, realiza mediciones, encuestas o visitas domiciliarias. 

    .row.justify-content-center.mb-4
      .col-xl-10
        .cajon.cajon.color-primario.row.align-items-center.m-0.style___box_1.p-4(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema1/img-19.svg', alt='').m-auto
          .col-xl
            p.mb-0 Además, existen distintos formatos: estructurados (formularios oficiales), semiestructurados o narrativos, según la capacidad y contexto de la comunidad (Instituto Nacional de Salud, 2023).
    
    .row.mb-4.ms-0
      .col-auto.bg-titulo1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Reportes según la fuente del reporte
    
    p.mb-4 Los reportes según la fuente pueden ser: 

    .row.justify-content-center(data-aos="flip-up")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img-20.svg", alt="alt").img90.m-auto
          h4.text-center Participativo
          p.text-center.mb-0 Hecho directamente por cualquier miembro de la comunidad.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img-21.svg", alt="alt").img90.m-auto
          h4.text-center Mediante sensores
          p.text-center.mb-0 Personas designadas que recogen y reportan casos.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img-22.svg", alt="alt").img90.m-auto
          h4.text-center Centinela
          p.text-center.mb-0 Instituciones que vigilan dentro de comunidades cerradas.

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4. Tipos de información

    p.mb-4 Según el Instituto Nacional de Salud (2023), los tipos de información que aborda la vigilancia basada en comunidad corresponde a las situaciones de interés en salud pública, las cuales son: 

    .row.justify-content-center
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones.especial(data-aos="zoom-in")
          .row.mb-0(numero="1" titulo="Factores ambientales, fenómenos naturales y sociales")(data-aos="fade-left")
            .col-12
              p Situaciones ambientales que podrían contribuir a generar casos de eventos de interés en salud pública, como: 
            .col-12
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta(style="color: #30DF8E; font-size: 2rem")
                    | Contaminación del agua para consumo humano o de cuerpos de agua.
                  li.mb-0
                    i.lista-ul__vineta(style="color: #30DF8E; font-size: 2rem")
                    | Vertederos de basura.
                  li.mb-0
                    i.lista-ul__vineta(style="color: #30DF8E; font-size: 2rem")
                    | Aumento de roedores o insectos vectores.
                  li.mb-0
                    i.lista-ul__vineta(style="color: #30DF8E; font-size: 2rem")
                    | Desastres naturales
            .col-12.mb-0
              figure
                img(src='@/assets/curso/temas/tema1/img-23.png', alt='Imagen decorativa')
          .row.mb-0(numero="2" titulo="Situaciones en animales")
            .col-12
              p Casos individuales o colectivos de enfermedad o muerte en animales silvestres (aves, monos, peces, etc.), animales de producción o de compañía. Estas situaciones pueden representar señales de epizootias o tener un potencial impacto en la relación humano-animal.
            .col-12.mb-0
              figure
                img(src='@/assets/curso/temas/tema1/img-24.png', alt='Imagen decorativa')
          .row.mb-0(numero="3" titulo="Síndromes")
            .col-12
              p Conjuntos de síntomas o signos que podrían ser una señal de un evento de interés en salud pública. Ejemplos: 
            .col-12
              .tarjeta.tarjeta--blanca.p-4.mb-4
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta(style="color: #30DF8E; font-size: 2rem")
                    | Síndrome febril exantemático (como brotes en la piel).
                  li.mb-0
                    i.lista-ul__vineta(style="color: #30DF8E; font-size: 2rem")
                    | Síndrome febril ictérico (coloración amarillenta de la piel y mucosas).
                  li.mb-0
                    i.lista-ul__vineta(style="color: #30DF8E; font-size: 2rem")
                    | Síndrome respiratorio.
                  li.mb-0
                    i.lista-ul__vineta(style="color: #30DF8E; font-size: 2rem")
                    | Síndrome neurológico.
                  li.mb-0
                    i.lista-ul__vineta(style="color: #30DF8E; font-size: 2rem")
                    | Síndrome diarreico.
              p Estos síndromes facilitan la detección temprana de enfermedades como sarampión, fiebre amarilla u otras afecciones emergentes o reemergentes, según el contexto.
            .col-12.mb-0
              figure
                img(src='@/assets/curso/temas/tema1/img-25.png', alt='Imagen decorativa')
          .row.mb-0(numero="4" titulo="Casos específicos")
            .col-12
              p Personas con cuadros clínicos que cumplen con la definición de caso probable o sospechoso de un evento de interés en salud pública, según los protocolos de vigilancia basada en indicadores (eventos predefinidos), para los cuales los agentes comunitarios han sido entrenados. 
            .col-12.mb-0
              figure
                img(src='@/assets/curso/temas/tema1/img-26.png', alt='Imagen decorativa')
          .row.mb-0(numero="5" titulo="Muertes en comunidad")
            .col-12
              p Defunciones que podrían estar asociadas a una situación de interés en salud pública. Estas muertes también pueden ser señales de la aparición o avance de conglomerados dentro de la comunidad.
            .col-12.mb-0
              figure
                img(src='@/assets/curso/temas/tema1/img-27.png', alt='Imagen decorativa')
          .row.mb-0(numero="6" titulo="Conglomerados")
            .col-12
              p Grupos de casos con síntomas similares que ocurren en el mismo período (días o semanas) y lugar, percibidos por la comunidad como comportamientos atípicos o inusuales (Instituto Nacional de Salud, 2023).
            .col-12.mb-0
              figure
                img(src='@/assets/curso/temas/tema1/img-28.png', alt='Imagen decorativa')

    Separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.5. Flujo y canales para la recepción de la información 

    p.mb-4 El flujo de información inicia con la identificación de la señal por parte de los vigías y gestores comunitarios, quienes realizan el reporte de la situación de interés en salud pública en los formatos establecidos para la situación individual y colectiva, posteriormente, el reporte se realiza a la entidad que lidera el proceso en el territorio. Esta señal debe ingresar luego al sistema de alerta temprana territorial, para ser verificada. 

    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .cajon.cajon.color-secundario-medio.p-4.mb-4
          p.mb-0 La verificación de la señal consiste en revisar y comprobar la información reportada por los vigías y gestores comunitarios, actividad a cargo de la entidad territorial; para esto, la entidad debe contar con herramientas que permitan confirmar la información reportada. 
        p(style="color:#000") Confirmada la señal, la entidad territorial activa la respuesta requerida con base en las entidades gubernamentales y no gubernamentales presenten en el territorio y que den respuesta a la señal reportada. Cuando la señal corresponde al sector salud, la repuesta se vincula al área específica para la situación de interés en salud pública, para que el proceso de atención en salud sea intramural o extramural, en caso contrario se direcciona a la entidad competente para la respuesta.
      .col-lg-5.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img-29.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-9.order-2
        .bg-color-1.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img-42.svg', alt='')
            .col-lg
              .p-3
                h4.titulo-1 Ejemplo
                p.mb-0 Contaminación de un río, la competencia es de la Corporación Autónoma Regional, en el caso que se presenten personas enfermas, la respuesta será del sector salud. Cuando la magnitud de la situación supere el despliegue de la respuesta municipal o departamental se acudirá al apoyo nacional.
        p Las señales recibidas desde la comunidad deben contar con una respuesta institucional o una orientación para la autogestión, a su vez, se debe garantizar la comunicación de las acciones realizadas por la entidad a los vigías y gestores comunitarios, para fortalecer la comunicación entre la comunidad y la entidad generando la confianza a la REVCOM y su comunidad frente a la gestión por parte de las entidades.
      .col-lg-3.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img-41.png', alt='Imagen decorativa')

    .row.no-gutters.align-items-center.mb-4.style___box_1.m-0(data-aos="zoom-in")
      .col-xl-auto.px-0
        figure.d-none.d-xl-block
          img.img-hero(src='@/assets/curso/temas/tema1/img-30.png', alt='').m-auto
      .col-xl.px-0
        .d-flex.align-items-start
          img.icon-inline.d-none.d-lg-block.me-3(src='@/assets/curso/temas/tema1/img-31.svg' alt="Imagen decorativa")
        p.mb-0 En el caso que el reporte sea negativo (ausencia de la situación de interés en salud pública), la entidad territorial es la encargada de orientar a los vigías y gestores del porqué la señal presentada fue negativa; asimismo, es una forma de hacer monitoreo de estos casos para contar con la cobertura y funcionamiento de las redes. Para esto, se recomienda que exista una comunicación semanal con los agentes comunitarios que son parte de la REVCOM, con el objeto de validar la existencia o no de situaciones de interés en salud pública que ocurran en las comunidades (Instituto Nacional de Salud, 2023).

    p.mb-4.text-center De acuerdo a lo anterior, a continuación, se relaciona la estructura de este flujo:

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <em>Flujo y elementos del reporte de vigilancia basada en comunidad</em>    

        .row.justify-content-center
          .col-lg-12.col-10.mb-4
            figure.desktop
              img(src='@/assets/curso/temas/tema1/figura-1-1vv.svg', alt='La figura 1 relaciona el flujo y los elementos del reporte de vigilancia basada en comunidad. Inicia con la comunidad, donde se identifican aspectos como el lugar donde ocurre el evento, el número de personas afectadas, sus características y el tiempo de ocurrencia. También se incluye una breve descripción del evento o situación de interés en salud pública. Estos datos conforman los elementos del reporte comunitario, que son recogidos por vigías y gestores comunitarios.')
              figcaption Fuente: Instituto Nacional de Salud (2023)
            figure.movil
              img(src='@/assets/curso/temas/tema1/figura-1-2vv.svg', alt='La figura 1 relaciona el flujo y los elementos del reporte de vigilancia basada en comunidad. Inicia con la comunidad, donde se identifican aspectos como el lugar donde ocurre el evento, el número de personas afectadas, sus características y el tiempo de ocurrencia. También se incluye una breve descripción del evento o situación de interés en salud pública. Estos datos conforman los elementos del reporte comunitario, que son recogidos por vigías y gestores comunitarios.')

    .row.mb-4.ms-0
      .col-auto.bg-titulo1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Instrumentos de reporte

    p Para realizar el reporte de las situaciones de interés, actualmente se dispone de dos formatos de reporte a manera de ejemplo; una de ellas corresponde a las situaciones de reporte individual y otra a la de reporte colectivo; estas fichas pueden ser implementadas por las entidades territoriales o pueden ser diseñadas por la entidad territorial, según la posibilidad; aunque, guardando los parámetros que se dan para la obtención de datos requeridos. 
    p.mb-4 A continuación, puede descargar cada uno de estos formatos y así poder analizarlos:

    .bg-c1.px-md-5.px-4.mb-0
      .row.justify-content-center
        .col-lg-6.col-sm-10.mb-4(data-aos="fade-right")
          .tarjeta.tarjeta--gris2.p-3.mb-4
            .row.justify-content-around.align-items-center
              .col-lg-2.col-4.mb-lg-0.mb-4
                img(src="@/assets/curso/temas/tema1/img-43.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1(style="color:#12263F") Formato individual
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexos_Ficha_de_reporte_individual.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download
        .col-lg-6.col-sm-10.mb-4(data-aos="fade-left")
          .tarjeta.tarjeta--gris2.p-3.mb-4
            .row.justify-content-around.align-items-center
              .col-lg-2.col-4.mb-lg-0.mb-4
                img(src="@/assets/curso/temas/tema1/img-44.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1(style="color:#12263F") Formato colectivo
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexos_Ficha_de_reporte_colectivo.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download

      .row.justify-content-center.mb-4
        .col-lg-5.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema1/img-32.png', alt='Imagen decorativa')
        .col-lg-7.mb-lg-0(data-aos="fade-left")
          p El reporte comunitario debe contar con los siguientes elementos: el lugar donde ocurre la situación de interés en salud pública (departamento, municipio, vereda, corregimiento, barrio, casa, otro); número de personas afectadas con sus características (ciclo vital, edad, sexo, grupo étnico, otros) y la temporalidad de la situación de interés en salud pública (horas o días desde la ocurrencia de la situación) y la descripción del hecho ocurrido (Federación Internacional de Sociedades de la Cruz Roja y de la Media Luna Roja, 2019).
          p Asimismo, cuando el reporte corresponde a una persona este debe hacerse en el formato de ficha de situación en salud pública individual. Estos instrumentos pueden ser dispuestos en diversas herramientas de captura dentro de las cuales están los formularios de Google Form, Microsoft, entre otros; aplicativos como el RedCap o Epicollect (Instituto Nacional de Salud, 2023).

      .row.mb-4.ms-0
        .col-auto.bg-titulo1(data-aos="fade-left")
          .row.align-items-center
            .col-auto.px-0
              figure
                img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
            .col
              h3.mb-0 Canales de comunicación

      p.mb-4 Los canales de reporte a emplear dependen de lo establecido en la REVCOM y la institucionalidad, con base en las facilidades de conexión en el territorio entre las redes y las instituciones. Estos pueden ser diversos según los medios tecnológicos (aplicaciones móviles, plataformas #[em web, bots]), mensajería celular, llamadas telefónicas, radio - comunicación, emisoras comunitarias y voz a voz. 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-33.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Los reportes recibidos mediante estos canales deben cumplir con los criterios establecidos que contienen los formatos tanto para el reporte individual y el reporte colectivo. En cuanto, a la comunicación esta puede ser directa (mediante agentes comunitarios) o institucional (a través de organizaciones colaboradoras, comités de vigilancia, redes territoriales y grupos sectoriales) mediante las herramientas de captura definidas en cada territorio (Paz Tovar et al., 2022).

    Separador

    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.6. Actores que realizan el reporte

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img-34.png', alt='Imagen decorativa')

    p.mb-4 Los actores involucrados en la comunicación de las situaciones de interés en salud pública son la REVCOM: integrada por agentes seleccionados por la comunidad y conectados con las instituciones territoriales encargadas de la vigilancia, facilitando la movilidad de la información y la gestión coordinada de la respuesta. Estos agentes pueden pertenecer a comunidades rurales, urbanas, grupos especiales, alojamientos temporales y poblaciones cautivas, ampliando la cobertura y adaptando los canales según el contexto territorial (Tufiño et al., 2023).

    .row.justify-content-center
      .col-xl-10
        .cajon.cajon.color-primario.row.align-items-center.m-0.style___box_1.p-4(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema1/img-35.svg', alt='').m-auto
          .col-xl
            p.mb-0 El sistema de flujo y canales garantiza que la información relevante circule de manera segura, oportuna y bidireccional entre la comunidad y las instituciones sanitarias, fortaleciendo la capacidad de respuesta epidemiológica a nivel local y nacional (Instituto Nacional de Salud, 2023).

    Separador

    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.7. Aplicativo de la Red de Vigilancia Epidemiológica Comunitaria

    .row.no-gutters.align-items-center.mb-4.style___box_1.m-0(data-aos="zoom-in")
      .col-xl-auto.px-0
        figure.d-none.d-xl-block
          img.img-hero(src='@/assets/curso/temas/tema1/img-36.png', alt='').m-auto
      .col-xl.px-0
        .d-flex.align-items-start
          img.icon-inline.d-none.d-lg-block.me-3(src='@/assets/curso/temas/tema1/img-37.svg' alt="Imagen decorativa")
        p.mb-0 El aplicativo de captura para Vigilancia Basada en Comunidad (VBC) es una herramienta digital diseñada para facilitar el registro, gestión y análisis de eventos de salud detectados y reportados por la comunidad, promoviendo una vigilancia oportuna y participativa. Desarrollada bajo una plataforma #[em web] que permite a ciudadanos, líderes comunitarios y profesionales de la salud registrar situaciones que representen un riesgo colectivo, tales como brotes, eventos ambientales, condiciones sanitarias deficientes, entre otros. Su finalidad es fortalecer la respuesta de las autoridades sanitarias descentralizando y dinamizando la vigilancia con la participación directa de la comunidad (Rueda Cortés, 2019).

    .tarjeta.tarjeta--gris2.p-3.mb-4
      .row.justify-content-around
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-38.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color:#12263F") Ingreso aplicativo VBC
              p Acceda al siguiente documento y conozca toda la estructura del aplicativo de la Vigilancia Basada en Comunidad.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Ingreso_aplicativo_VBC.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .row.mb-4.ms-0
      .col-auto.bg-titulo1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Reporte en estado #[em online] y #[em offline]

    p.mb-4 Cuando no se cuenta con acceso a internet el reporte es posible realizarlo teniendo en cuenta los siguientes exploradores, de acuerdo a lo expuesto por ICONOI (2025):  

    .row.justify-content-center.mb-4
      .col-lg-6.order-lg-1.order-2
        LineaTiempoD.color-acento-botones.especial(data-aos="fade-down")
          .row(numero="1" titulo="Chrome")
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/tema1/img-45.svg").m-auto
            .col-xl
              p.mb-0 De la versión 70+ en adelante, la versión más actualizada es la 134. Permite instalación es escritorio y en versiones móviles.
          .row(numero="2" titulo="Edge")
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/tema1/img-46.svg").m-auto
            .col-xl
              p.mb-0 De la versión 79 en adelante, la versión más actualizada es la 135. Permite instalación es escritorio y en versiones móviles.
          .row(numero="3" titulo="Safari")
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/tema1/img-47.svg").m-auto
            .col-xl
              p.mb-0 De la versión 11.3 a la 18.x. No permite la instalación es escritorio, en versión móvil sí.
          .row(numero="4" titulo="Firefox")
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/tema1/img-48.svg").m-auto
            .col-xl
              p.mb-0 De la versión 79 en adelante, la versión más actualizada es la 136. No permite la instalación es escritorio, ni en versión móvil.
          .row(numero="5" titulo="Opera")
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/tema1/img-49.svg").m-auto
            .col-xl
              p.mb-0 De la versión 64 en adelante, la versión más actualizada es la 117. Permite instalación es escritorio y en versiones móviles.
      .col-lg-4.order-lg-2.order-1.mb-3.col-md-8.col-10
        figure(data-aos="fade-down") 
          img(src='@/assets/curso/temas/tema1/img-39.svg', alt='Imagen decorativa')

    .tarjeta.tarjeta--gris2.p-3.mb-4
      .row.justify-content-around
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-40.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color:#12263F") Instalación VBC
              p Ingrese al siguiente documento y conozca el proceso que tiene que ver con la instalación del aplicativo de la Vigilancia Basada en Comunidad, tanto para computador como dispositivos móviles.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Instalcion_aplicativo_VBC.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Tema1',
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
