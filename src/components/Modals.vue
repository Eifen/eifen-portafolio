<template>
    <div class="modal-container" @click.self="changeStyle" :id="styleId">
        <div class="modal-container-content"
            :class="large ? 'modal-container-large' : (xLarge ? 'modal-container-xLarge' : undefined)">
            <div class="modal-container-content-header">
                <div class="header-text">
                    <slot name="modal-header"></slot>
                </div>
                <button type="button" class="header-close" @click="$emit('closeModal')"></button>
            </div>
            <div class="modal-container-content-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import clickCose from '../hooks/modal/clickClose';

defineEmits(['closeModal']);
defineProps<{
    large?: boolean,
    xLarge?: boolean
}>()

const { styleId, changeStyle } = clickCose()

//Handle
</script>