<template>
    <div ref="closeAbout">
        <div class="about-container-item-header">
            <div class="item-header">
                <img src="/images/portada.gif" alt="portada about" class="item-header-image">
                <div class="item-header-icons">
                    <div class="item-header-icons-icon">
                        <a href="https://laravel.com/" target="_blank"><img src="/images/laravel.svg" alt="laravel"></a>
                    </div>
                    <div class="item-header-icons-icon">
                        <a href="https://www.typescriptlang.org/" target="_blank"><img src="/images/typescript.svg"
                                alt="typescript"></a>
                    </div>
                    <div class="item-header-icons-icon">
                        <a href="https://nestjs.com/" target="_blank"><img src="/images/nestjs.svg" alt="nestjs"></a>
                    </div>
                    <div class="item-header-icons-icon" @click="emit('closeAbout')">
                        <img src="/images/close.svg" alt="close">
                    </div>
                </div>
                <div class="item-header-info">
                    <div class="item-header-info-avatar" ref="avatar-grow">
                        <img src="/images/selfie-carlos.webp" alt="carlos selfie" class="item-header-info-avatar-image">
                    </div>
                    <div class="item-header-info-message">
                        <div class="item-header-info-message-pointUp"></div>
                        <div class="item-header-info-message-pointDown"></div>
                        <div class="item-header-info-message-text">Software Engineering. 4+ Years
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-container-item-header2">
            <div class="about-container-item-header2-title">Carlos Navas</div>
            <div class="about-container-item-header2-sTitle">
                <a href="https://linkedin.com/in/eifen" target="_blank">
                    <div class="icon">
                        <img src="/images/linkedin.svg" alt="linkedin">
                    </div>
                    <div class="info">Enlace a Linkedin</div>
                </a>
            </div>
        </div>
        <div class="about-container-item-mail">
            <button type="button" @click="$emit('openModal')">
                <FontAwesome string-icon="fa-solid fa-message"></FontAwesome>
                Contactame
            </button>
        </div>
        <div class="about-container-item-body">
            <div class="item-body">
                <div class="item-body-header">Sobre mí</div>
                <div class="item-body-content">
                    Desarrollador Full Stack con más de 4 años de experiencia en el ciclo de vida completo del
                    desarrollo de software. Habilidad demostrada en la construcción de sistemas robustos, desde el
                    frontend hasta
                    el backend, utilizando un profundo conocimiento de TypeScript, NestJS, Laravel, Python, Vue.js y
                    MySQL. Busco un rol donde mis habilidades puedan contribuir a la creación de productos
                    innovadores y de alta calidad.
                </div>
            </div>
        </div>
        <div class="about-container-item-body">
            <div class="item-body">
                <div class="item-body-header">Conocimiento Técnico</div>
                <div class="item-body-content">
                    Se presenta un resumen de las tecnologías con las que he trabajado, cuya profundidad se demuestra
                    en los proyectos detallados en el panel de la izquierda y en esta misma página.
                </div>
                <div class="item-body-tecnologies">
                    <div class="item-body-tecnologies-info">
                        <img src="/images/laravel.svg" alt="laravel">
                        <span>Laravel: 3+ años</span>
                    </div>
                    <div class="item-body-tecnologies-info">
                        <img src="/images/nestjs.svg" alt="nestjs">
                        <span>NestJS: 3+ años</span>
                    </div>
                    <div class="item-body-tecnologies-info">
                        <img src="/images/nodejs.svg" alt="nodejs">
                        <span>NodeJS: 4+ años</span>
                    </div>
                    <div class="item-body-tecnologies-info">
                        <img src="/images/php.svg" alt="php">
                        <span>PHP Vanilla: 3+ años</span>
                    </div>
                    <div class="item-body-tecnologies-info">
                        <img src="/images/typescript.svg" alt="typescript">
                        <span>Typescript: 4+ años</span>
                    </div>
                    <div class="item-body-tecnologies-info">
                        <img src="/images/vue.svg" alt="vue">
                        <span>VueJS: 3+ años</span>
                    </div>
                    <div class="item-body-tecnologies-info">
                        <img src="/images/python.svg" alt="python">
                        <span>Python: 2+ años</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-container-item-footer">
            <img src="/images/gmail.svg" alt="gmail">
            <span>carlosnavased@gmail.com</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useSwipe } from '@vueuse/core'
import FontAwesome from '../../components/FontAwesome.vue';

const props = defineProps<{
    animate: boolean
}>()

const emit = defineEmits<{
    closeAbout: []
    openModal: []
}>()

const closeAbout = ref<HTMLDivElement | null>(null)
const { direction } = useSwipe(closeAbout)

onMounted(() => {
    if (closeAbout.value !== null) closeAbout.value.classList.add('about-container')
})

watch(() => props.animate, (newValue) => {
    console.log('hola')
    if (newValue === true && closeAbout.value !== null) {
        closeAbout.value.classList.remove('about-container')
        closeAbout.value.classList.add('about-container-show')
    } else if (newValue === false && closeAbout.value !== null) {
        closeAbout.value.classList.remove('about-container-show')
        closeAbout.value.classList.add('about-container')
    }
})

watch(direction, (newDir) => {
    if (newDir === 'right') emit('closeAbout')
})

</script>