<template>
    <div class="services-body-title">Servicios</div>
    <Cards>
        <template #image>
            <img src="/images/api.svg" alt="api">
        </template>
        <template #title>API's</template>
        <template #default>
            <span>
                Diseño e implementación de API's RESTFul y gRPC. Se busca la creación de microservicios para garantizar
                escalabilidad.
            </span>
            <span>
                <b>Beneficios:</b> Alto rendimiento, seguridad de datos y fácil integración en diversos
                entornos.
            </span>
            <span><b>Tecnologías a utilizar:</b> NestJS, NodeJS, TypeScript.</span>
            <span><b>Tiempo de elaboración:</b> 1 — 3 meses.</span>
        </template>
    </Cards>
    <Cards>
        <template #image>
            <img src="/images/rebuilding.png" alt="rebuilding">
        </template>
        <template #title>Optimización</template>
        <template #default>
            <span>
                Consultoría y refactorización de esquemas legacy a frameworks más modernos (Laravel, NodeJS) o más
                robustos (Typescript). Reestructuración de bases de datos MySQL y PostgreSQL. Se busca optimizar el
                rendimiento de las búsquedas y la integridad de los datos.
            </span>
            <span>
                <b>Beneficios:</b> Entornos más optimizados, reducción de carga de componentes, mejora en la rapidez de
                consultas, posicionamiento SEO.
            </span>
            <span><b>Tecnologías a utilizar:</b> Laravel, NodeJS, Typescript, MySQL, PostgreSQL.</span>
            <span><b>Tiempo de elaboración:</b> Mínimo 2 meses.</span>
        </template>
    </Cards>
    <Cards>
        <template #image>
            <img src="/images/spa.png" alt="spa">
        </template>
        <template #title>Single Page App</template>
        <template #default>
            <span>
                Desarrollo frontend de aplicaciones de una sola página (SPA) y la implementación de layouts
                interactivos y de alto rendimiento usando VueJS. La prioridad es la experiencia de usuario (UX),
                asegurando una accesibilidad desde cualquier dispositivo utilizando el esquema mobile first
            </span>
            <span>
                <b>Beneficios:</b> Tiempos de carga rápidos, compatibilidad con cualquier dispositivo, escalabilidad, y
                experiencia de usuario fluida y reactiva.
            </span>
            <span><b>Tecnologías a utilizar:</b> VueJS, Typescript.</span>
            <span><b>Tiempo de elaboración:</b> Mínimo 2 meses.</span>
        </template>
    </Cards>
    <Cards>
        <template #image>
            <img src="/images/auditor.png" alt="auditor">
        </template>
        <template #title>Auditorías</template>
        <template #default>
            <span>
                Análisis preciso y profundo de código base existente (enfocado en PHP, NodeJS y Typescript) buscando
                identificar vulnerabilidades, problemas de diseño, baja escalabilidad, fallas en el rendimiento, entre
                otras variantes. Entrega de feedback detallado en busca de implementar los cambios detectados.
            </span>
            <span><b>Beneficios:</b> Eliminación de vulnerabilidades, menor tiempo de inactividad, agilidad en el
                desarrollo</span>
            <span><b>Tecnologías a utilizar:</b> PHP, NodeJS, Typescript.</span>
            <span><b>Tiempo de elaboración:</b>Variable de acuerdo a la profundidad del análisis</span>
        </template>
    </Cards>
    <Cards>
        <template #image>
            <img src="/images/automatization.png" alt="automatization">
        </template>
        <template #title>Automatización</template>
        <template #default>
            <span>
                Diseño e implementación de procesos automatizados a través de scripts, bots de scraping, o creación de
                herramientas que optimicen procesos empresariales repetitivos.
            </span>
            <span><b>Beneficios:</b> Integridad de datos, ahorro de tiempo de trabajo, retornos de inversión
                altos</span>
            <span><b>Tecnologías a utilizar:</b> Python y NodeJS.</span>
            <span><b>Tiempo de elaboración:</b>1 mes — 3 meses.</span>
        </template>
    </Cards>
    <Cards>
        <template #image>
            <img src="/images/contrato.png" alt="contrato">
        </template>
        <template #title>Integración</template>
        <template #default>
            <span>
                Integración temporal o a largo plazo en equipos de desarrollo existentes o en creación. Se provee
                experiencia como Full stack en los diferentes espacios de desarrollo que aqui se presentan para la
                ejecución acelerada de <i>features críticas.</i>
            </span>
            <span><b>Beneficios:</b> Incorporación inmediata de un full stack que aumentará la capacidad de entrega y
                reducirá la sobrecarga del equipo interno.</span>
            <span><b>Tecnologías a utilizar:</b> Definidas según el stack del cliente (Ej: VueJS, NestJS, Laravel,
                Python, etc.).</span>
            <span><b>Tiempo de elaboración:</b>Variable (Según el alcance del contrato).</span>
        </template>
    </Cards>
</template>
<script setup lang="ts">
import Cards from '../../components/Cards.vue';

</script>