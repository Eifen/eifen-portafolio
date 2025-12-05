<template>
    <div class="services">
        <div class="services-aside">
            <div class="services-aside-title">Enfoque</div>
            <div class="services-aside-info">
                <span>
                    <FontAwesome string-icon="fa-solid fa-check"></FontAwesome>
                    Disponible para consultoria y nuevos proyectos
                </span>
                <span>
                    Si te interesan mis servicios, hablemos de tu proyecto durante 30 minutos. Revisa mis horarios y
                    agendemos una cita
                </span>
                <a href="https://calendly.com/csjuegosonline" target="_blank">
                    <button type="button">
                        <FontAwesome string-icon="fa-solid fa-calendar"></FontAwesome> Revisar agenda
                        <img src="/images/calendly.svg" alt="calendly"></img>
                    </button>
                </a>
            </div>
            <div class="services-aside-title">Fortalezas</div>
            <div class="services-aside-info">
                <ul>
                    <li>APIs y Microservicios con NestJS</li>
                    <li>Refactorización de Código en Typescript o Laravel</li>
                    <li>Escalabilidad y responsividad con TypeScript</li>
                    <li>Soluciones Frontend Reactivas</li>
                </ul>
            </div>
            <div class="services-aside-title">FAQ's</div>
            <div class="services-aside-info">
                <ul>
                    <li><b>¿Cuál es tu tárifa por hora?:</b> Varía según el proyecto y el alcance; la consulta por
                        estimación es gratuita.</li>
                </ul>
            </div>
        </div>
        <div class="services-body">b</div>
        <div class="services-footer">
            <span>
                Al usar nuestra plataforma, agendar una cita, o adqquirir un servicio, usted está de acuerdo con
                nuestros
                <a href="/Terms-and-Conditions.pdf" target="_blank">Terminos y Condiciones</a>
            </span>
            <span>&copy; 2025 Carlos Navas. Todos los derechos reservados.</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import FontAwesome from '../../components/FontAwesome.vue';


</script>