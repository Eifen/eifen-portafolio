<template>
    <span>
        <FontAwesomeIcon :icon="stringIcon" :spin="iSpin" :shake="iShake" :bounce="iBounce"></FontAwesomeIcon>
    </span>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressCard, faBarsProgress, faBusinessTime, faClock, faFile, faLink, faMailForward, faMessage, faUpload, faUser } from '@fortawesome/free-solid-svg-icons';

library.add([
    faUser,
    faFile,
    faBusinessTime,
    faAddressCard,
    faMailForward,
    faMessage,
    faUpload,
    faClock,
    faBarsProgress,
    faLink
])


defineProps<{
    stringIcon: string,
    iSpin?: boolean,
    iShake?: boolean,
    iBounce?: boolean
}>()
</script>