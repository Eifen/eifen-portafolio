<template>
    <Layouts>
        <template #body>
            <Cards>
                <template #image><img src="/images/logo-carent-menu-expandido.png"
                        alt="logo-carent-menu-expandido"></img></template>
                <template #title><a href="/images/grafica-horas.png" target="_blank">Gráfica de
                        rentabilidad</a></template>
                <template #default>
                    El Sistema de Cargabilidad y Rentabilidad (CARENT) fue concebido con el objetivo de automatizar
                    los procesos de auditoría de la firma Marquéz, Perdomo & Asociados (Crowe en Venezuela). Su
                    desarrollo se originó debido a la ineficiencia operativa que implicaba gestionar el control
                    integral de estos procesos mediante hojas de cálculo. CARENT se estructura en tres entornos
                    distintos, diseñados para regular la gestión de cada proceso clave de la firma y para generar, a
                    partir de ellos, reportes estratégicos de cargabilidad y rentabilidad.
                </template>
            </Cards>
            <Cards>
                <template #image><img src="/images/logo-carent.png" alt="logo-carent"></img></template>
                <template #title><a href="/images/carga-horas.png" target="_blank">Imagen Carga de Horas</a></template>
                <template #default>
                    Para garantizar un acceso a la información rápido y preciso, la arquitectura se centró en la
                    implementación constante de una API REST desarrollada con NestJS como módulo principal. Esta
                    primera solución permitió la automatización completa de la recopilación y visualización de datos
                    de rendimiento, logrando una reducción del 40% en el tiempo de generación de informes.
                    Posteriormente, la implementación de la Experiencia de Usuario (UX) se orientó principalmente a
                    optimizar la carga de horas del personal y a la generación ágil de gráficas detalladas de
                    cargabilidad.
                </template>
            </Cards>
            <div class="project-body">
                <div class="project-body-link">
                    <FontAwesome string-icon="fa-solid fa-link"></FontAwesome> <a href="https://carent.crowe.com.ve/"
                        target="_blank">https://carent.crowe.com.ve</a>
                </div>
            </div>
        </template>
        <template #aside>
            <div class="project-aside">
                <div class="project-aside-content">
                    <span class="project-aside-title">Proyecto</span>
                    <span>
                        <FontAwesome string-icon="fa-solid fa-upload"></FontAwesome>
                        <b>Fecha de publicación:</b> 13/02/2023
                    </span>
                    <span>
                        <FontAwesome string-icon="fa-solid fa-clock"></FontAwesome>
                        <b>Tiempo de elaboración:</b> 6 meses
                    </span>
                    <span>
                        <FontAwesome string-icon="fa-solid fa-business-time"></FontAwesome>
                        <b>Tipo de proyecto:</b> Empresa
                    </span>
                    <span>
                        <FontAwesome string-icon="fa-solid fa-bars-progress"></FontAwesome>
                        <b>Status:</b> Activo. Uso constante por <a href="https://www.crowe.com/ve/"
                            target="_blank">Crowe en Venezuela</a>
                    </span>
                </div>
                <div class="project-aside-tecnos">
                    <span class="project-aside-title">Tecnologías</span>
                    <span>
                        <b>API:</b>
                        <img src="/images/nestjs.svg" alt="nestjs"></img>
                    </span>
                    <span>
                        <b>Modulo de Auditoria:</b>
                        <img src="/images/laravel.svg" alt="laravel"></img>
                        <img src="/images/vue.svg" alt="vue"></img>
                        <img src="/images/php.svg" alt="php"></img>
                    </span>
                    <span>
                        <b>Modulo de Evaluaciones:</b>
                        <img src="/images/nodejs.svg" alt="nodejs"></img>
                        <img src="/images/typescript.svg" alt="typescript"></img>
                        <img src="/images/vue.svg" alt="vue"></img>
                        <img src="/images/vitejs.svg" alt="vitejs"></img>
                    </span>
                </div>
                <div class="project-aside-content">
                    <span class="project-aside-title">Repositorios</span>
                    <span>
                        <img src="/images/github.svg" alt="github"></img>
                        <b>API:</b> <a href="https://github.com/Eifen/carent-api" target="_blank">Carent API</a>
                    </span>
                    <span>
                        <img src="/images/github.svg" alt="github"></img>
                        <b>Modulo Auditoria:</b> <a href="https://github.com/Eifen/Carent2" target="_blank">Carent</a>
                    </span>
                    <span>
                        <img src="/images/github.svg" alt="github"></img>
                        <b>Modulo Evaluaciones:</b> <a href="https://github.com/Eifen/carent-front"
                            target="_blank">Carent Front</a>
                    </span>
                    <span class="project-aside-title">Funcionalidades</span>
                    <span><b>Modulo Auditoria:</b> Visualización de Reportes, Gestión de Métricas</span>
                    <span><b>Modulo Evaluacion:</b> Carga y Gestión de Horas del Personal</span>
                    <span><b>Modulo Api:</b> Lógica de Negocio Central, Orquestación de Datos y Cálculos de
                        Rentabilidad.</span>
                </div>
            </div>
        </template>
    </Layouts>
</template>
<script setup lang="ts">
import Layouts from '../../components/Layouts.vue';
import FontAwesome from '../../components/FontAwesome.vue';
import Cards from '../../components/Cards.vue';

</script>