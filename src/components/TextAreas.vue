<template>
    <div class="input-container">
        <div v-if="typeof firstIcon === 'string'" class="input-container-icon" id="icon1">
            <FontAwesome :string-icon="firstIcon" :is-spin="false"></FontAwesome>
        </div>
        <textarea :disabled="disabled" type="text" :rows="rows" class="input-container-input"
            :placeholder="placeholderString" autocomplete="nope" v-model="model"></textarea>
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
    placeholderString: string,
    disabled?: boolean,
    rows: number
}>()

const emits = defineEmits<{
    getValue: [value: string]
}>()

const model = defineModel<string>()

watch(model, (newValue) => {
    emits('getValue', newValue ?? '')
})
</script>