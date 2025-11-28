<template>
    <div ref="closeAbout">
        <div class="about-container-item">
            <div class="about-container-item-header">
                <div class="item-header">
                    <div class="item-header-title">iconos</div>
                    <div class="item-header-info">
                        <div class="item-header-info-avatar">avatar</div>
                        <div class="item-header-message">mensaje</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-container-item">b</div>
        <div class="about-container-item">c</div>
        <div class="about-container-item">d</div>
        <div class="about-container-item">f</div>
        <div class="about-container-item">g</div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useSwipe } from '@vueuse/core'

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
</script>