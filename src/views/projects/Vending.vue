<template>
    <Layouts>
        <template #body>
            <Cards>
                <template #image><img src="/images/vending.png" alt="vending"></img></template>
                <template #title>Vending</template>
                <template #default>
                    Aplicación que simula la ejecución de una máquina expendedora. Se hizo uso de una API pública para
                    su desarrollo, consumiendo su contenido a través de axios.
                    <span>
                        <FontAwesome string-icon="fa-solid fa-clock"></FontAwesome>
                        <b>Tiempo de elaboración:</b> 2 días
                    </span>
                    <span>
                        <FontAwesome string-icon="fa-solid fa-upload"></FontAwesome>
                        <b>Fecha de publicación:</b> 10/12/2025
                    </span>
                    <span>
                        <FontAwesome string-icon="fa-solid fa-link"></FontAwesome>
                        <b>Enlace: </b>
                        <a href="https://eifen-vending-machine.vercel.app/"
                            target="_blank">https://eifen-vending-machine.vercel.app/</a>
                    </span>
                </template>
            </Cards>
        </template>
        <template #aside>
            <div class="project-aside">
                <div class="project-aside-tecnos">
                    <span class="project-aside-title">Tecnologías</span>
                    <span>
                        <b>Vending:</b>
                        <img src="/images/nodejs.svg" alt="nodejs"></img>
                        <img src="/images/typescript.svg" alt="typescript"></img>
                        <img src="/images/vue.svg" alt="vue"></img>
                    </span>
                </div>
                <div class="project-aside-content">
                    <span class="project-aside-title">Repositorios</span>
                    <span>
                        <img src="/images/github.svg" alt="github"></img>
                        <b>Vending:</b> <a href="https://github.com/Eifen/eifen-vending-machine" target="_blank">Vending
                            Machine</a>
                    </span>
                    <span class="project-aside-title">Objetivos</span>
                    <span><b>Vending:</b> Modularización y Herencia con VUE, consumo de API</span>
                </div>
            </div>
        </template>
    </Layouts>
</template>
<script setup lang="ts">
import Layouts from '../../components/Layouts.vue';
import FontAwesome from '../../components/FontAwesome.vue';
import Cards from '../../components/Cards.vue';

</script>