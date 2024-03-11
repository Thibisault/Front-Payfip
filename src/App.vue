<script setup lang="ts">
import HeaderGlobal from './components/HeaderGlobal.vue'
import FooterGlobal from './components/FooterGlobal.vue';

</script>

<template>
  <div class="App-vue-all">

    <div class="header-global-App-vue">
      <HeaderGlobal/> 
    </div>
    


    <div class="vue-principal-app-vue">
      <router-view class="vue-principal-app-vue"></router-view>
    </div>

    <div class="footer-global-App-vue">
      <FooterGlobal/> 
    </div>

  </div>
</template>

<style scoped>
.App-vue-all {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  position: absolute;
}

.header-global-App-vue, .footer-global-App-vue {
  display: flex;
  justify-content: center; /* Centre les éléments horizontalement dans le conteneur */
  align-items: center; 
  width: 100vw;
}

.vue-principal-app-vue {
  flex-grow: 1; /* Prend tout l'espace disponible */
  width: 100wh;
  background-color: #f5f5f5; /* Couleur de fond sobre */
}

.header-global-App-vue {
  display: flex;
  justify-content: center; /* Centre les éléments horizontalement */
  align-items: center; /* Alignement vertical */
  width: 100vw; /* Prend toute la largeur de la fenêtre */

}

.footer-global-App-vue {
  background-color: #f5f5f5;
}


</style>