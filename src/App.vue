<script setup lang="ts">
import HeaderGlobal from './components/HeaderGlobal.vue'

</script>

<template>
  <div class="App-vue-all">
    <div class="header-global-App-vue">
      <HeaderGlobal/> 
    </div>

    <div class="vue-principal-app-vue">
      <router-view class="vue-principal-app-vue"></router-view>
    </div>
  </div>
</template>

<style scoped>
.header-global-App-vue {
  width: 100%;
  /* Assurez-vous que le padding-bottom est approprié pour votre mise en page */
  padding-bottom: 5vh;
}

.App-vue-all {
  display: flex;
  flex-direction: column; 
  height: 100vh;
  width: 100%;
  overflow: hidden; /* Empêche le débordement si le contenu est trop long */
}

.vue-principal-app-vue {
  flex-grow: 1; /* Prend tout l'espace disponible */
  width: 100%;
  overflow: auto; /* Permet de scroller à l'intérieur si le contenu dépasse la hauteur disponible */
  background-color: #f5f5f5; /* Couleur de fond sobre */
}
</style>