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
                </div>
                <div class="item-header-info">
                    <div class="item-header-info-avatar" ref="avatar-grow">
                        <img src="/images/selfie-carlos.webp" alt="carlos selfie" class="item-header-info-avatar-image">
                    </div>
                    <div class="item-header-info-message">
                        <div class="item-header-info-message-pointUp"></div>
                        <div class="item-header-info-message-pointDown"></div>
                        <div class="item-header-info-message-text">Software Engineering. 5+ Years
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-container-item-header2">
            <div class="about-container-item-header2-title">Eifen</div>
            <div class="about-container-item-header2-sTitle">
                <a href="www.linkedin.com/in/eifen" target="_blank">
                    <div class="icon">
                        <img src="/images/linkedin.svg" alt="linkedin">
                    </div>
                    <div class="info">Carlos Salazar</div>
                </a>
            </div>
        </div>
        <div class="about-container-item-mail">
            <button type="button" @click="corregir()">
                <FontAwesome string-icon="fa-solid fa-message"></FontAwesome>
                Contactame
            </button>
        </div>
        <div class="about-container-item">d</div>
        <div class="about-container-item">f</div>
        <div class="about-container-item">g</div>
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
        closeAbout.value.style.overflow = 'auto'
    } else if (newValue === false && closeAbout.value !== null) {
        closeAbout.value.classList.remove('about-container-show')
        closeAbout.value.classList.add('about-container')
        closeAbout.value.style.overflow = 'hidden'
    }
})

watch(direction, (newDir) => {
    if (newDir === 'right') emit('closeAbout')
})

function corregir() {
    alert('Recuerda hacer el modal de contacto')
}
</script>