<template>
    <div class="cards">
        <div class="cards-image">
            <slot name="image"></slot>
        </div>
        <div class="cards-title">
            <slot name="title"></slot>
        </div>
        <div class="cards-info">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>