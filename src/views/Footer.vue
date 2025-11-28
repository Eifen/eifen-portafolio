<template>
    <div class="footer-container">
        <div class="footer-container-item" @mouseover="setBounce(1)" @touchstart="setBounce(1)" @mouseout="setBounce(0)"
            @touchend="setBounce(0)">
            <div class="footer-container-item-icon">
                <FontAwesome string-icon="fa-solid fa-business-time" :i-bounce="bounceIs === 1"></FontAwesome>
            </div>
            <div class="footer-container-item-title">Servicios</div>
        </div>
        <div class="footer-container-item" @mouseover="setBounce(2)" @touchstart="setBounce(2)" @mouseout="setBounce(0)"
            @touchend="setBounce(0)" @click="download()">
            <div class="footer-container-item-icon">
                <FontAwesome string-icon="fa-solid fa-file" :i-bounce="bounceIs === 2"></FontAwesome>
            </div>
            <div class="footer-container-item-title">Descargar CV (PDF)</div>
        </div>
        <div class="footer-container-item" @mouseover="setBounce(3)" @touchstart="setBounce(3)" @mouseout="setBounce(0)"
            @touchend="setBounce(0)" @click.stop="animateAbout()">
            <div class="footer-container-item-icon">
                <FontAwesome string-icon="fa-solid fa-address-card" :i-bounce="bounceIs === 3"></FontAwesome>
            </div>
            <div class="footer-container-item-title">About me</div>
        </div>
        <AboutMe :animate="aboutFlag"></AboutMe>
    </div>
</template>
<script setup lang="ts">
import { ref, type Ref } from 'vue';
import FontAwesome from '../components/FontAwesome.vue';
import AboutMe from './info/AboutMe.vue';

const bounceIs = ref<number>(0)
const aboutFlag = ref<boolean>(false)

const setBounce = (type: number) => { bounceIs.value = type }
const animateAbout = () => { aboutFlag.value = !aboutFlag.value }

defineEmits<{
    ref: [value: Ref<HTMLDivElement | null>]
}>()

//Handles

function download() {
    const a = document.createElement('a')
    a.href = './Carlos_Eduardo_Navas_Salazar.pdf'
    a.download = 'Carlos_Eduardo_Navas_Salazar.pdf'
    a.style.display = 'none'
    //Creamos y borramos
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
</script>