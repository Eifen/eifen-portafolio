<template>
    <div class="aside-container">
        <div class="aside-container-items">
            <div class="aside-container-items-icon">
                <a href="https://github.com/Eifen" target="_blank"><img src="/images/github.svg" alt="github"></a>
            </div>
            <div class="aside-container-items-text">
                <span><a href="https://github.com/Eifen" target="_blank">Eifen Github</a></span>
                <span>
                    <a id="sub" href="https://github.com/Eifen/eifen-portafolio" target="_blank">
                        <FontAwesome string-icon="fa-solid fa-business-time"></FontAwesome>
                        Repository
                    </a>
                </span>
            </div>
            <div class="aside-container-items-separation"></div>
        </div>
        <div class="aside-container-items">
            <div class="aside-container-items-icon" @click="redirect('/carent').redirectTo()">
                <img src="/images/logo-carent-menu.png" alt="logo-carent-menu">
            </div>
            <div class="aside-container-items-text" @click="redirect('/carent').redirectTo()">
                <span>Proyecto 1</span>
                <span>CARENT</span>
            </div>
        </div>
        <!-- PROXIMOS PROYECTOS -->
    </div>
</template>
<script setup lang="ts">
import FontAwesome from '../components/FontAwesome.vue';

//Hooks
import redirect from '../hooks/redirects';
</script>