<template>
    <div>
        <FontAwesomeIcon :icon="stringIcon" :spin="iSpin" :shake="iShake" :bounce="iBounce"></FontAwesomeIcon>
    </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressCard, faBusinessTime, faFile, faMailForward, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';

library.add([
    faUser,
    faFile,
    faBusinessTime,
    faAddressCard,
    faMailForward,
    faMessage
])


defineProps<{
    stringIcon: string,
    iSpin?: boolean,
    iShake?: boolean,
    iBounce?: boolean
}>()
</script>