<template>
    <div class="homepage-container">
        <div class="homepage-container-header">
            <Header></Header>
        </div>
        <div class="homepage-container-aside">
            <Aside></Aside>
        </div>
        <div class="homepage-container-body">

            <Body></Body>
        </div>
        <div class="homepage-container-footer">
            <Footer></Footer>
        </div>
    </div>
</template>
<!-- SCRIPT -->
<script setup lang="ts">
import Header from './Header.vue';
import Body from './Body.vue';
import Footer from './Footer.vue';
import Aside from './Aside.vue';
</script>