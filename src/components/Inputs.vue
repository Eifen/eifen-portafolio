<template>
    <div class="input-container">
        <div v-if="typeof firstIcon === 'string'" class="input-container-icon" id="icon1">
            <FontAwesome v-if="firstIcon.includes('fa-solid')" :string-icon="firstIcon"></FontAwesome>
            <span v-else>{{ firstIcon }}</span>
        </div>
        <input :disabled="disabled" :type="type" class="input-container-input" aria-label="carentInput"
            :placeholder="placeholderString" :class="!secondIcon ? (firstIcon ? 'input-border' : 'no-icon') : undefined"
            v-model="model" />
        <div v-if="secondIcon" class="input-container-icon" id="icon2">
            <slot name="second-icon"></slot>
        </div>
    </div>
    <div class="input-container-error">
        <slot name="input-error"></slot>
    </div>
</template>
<script setup lang="ts">
import { watch } from 'vue';
import FontAwesome from './FontAwesome.vue';

defineProps<{
    firstIcon?: string,
    secondIcon?: boolean,
    placeholderString: string,
    type: string,
    disabled?: boolean,
}>()

const emits = defineEmits<{
    getValue: [value: string]
}>()

const model = defineModel<string>()

watch(model, (newValue) => {
    emits('getValue', newValue ?? '')
})
</script>