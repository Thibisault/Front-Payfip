/** Navigation Buttons path :"src/components/NavigationButtons.vue"
<template>
    <div class="navigation-buttons">
      <button @click="goToPrev" :disabled="isFirstRoute">Précédent</button>
      <button @click="goToNext" :disabled="isLastRoute">Suivant</button>
    </div>
  </template>
  
  <script>
  import { computed, defineComponent } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  
  export default defineComponent({
    name: 'NavigationButtons',
    setup() {
      const router = useRouter();
      const route = useRoute();
  
      // Définir l'ordre des routes selon votre configuration de routes
      const routeOrder = ['VuePrincipal', 'SelectionCollectivite', 'SelectionFacture', 'ProOuParticulier', 'ChoisirMoyenPayement'];
  
      // Trouver l'index de la route actuelle
      const currentIndex = computed(() => routeOrder.indexOf(route.name));
  
      // Vérifier si la route actuelle est la première ou la dernière
      const isFirstRoute = computed(() => currentIndex.value === 0);
      const isLastRoute = computed(() => currentIndex.value === routeOrder.length - 1);
  
      // Naviguer à la route précédente
      const goToPrev = () => {
        if (!isFirstRoute.value) {
          router.push({ name: routeOrder[currentIndex.value - 1] });
        }
      };
  
    // Naviguer à la route suivante
    const goToNext = () => {
    if (!isLastRoute.value) {
        // Vérifier si la route suivante est "ChoisirMoyenPayement"
        if (routeOrder[currentIndex.value + 1] === 'ChoisirMoyenPayement') {
        // Fournir un paramètre userType par défaut ou basé sur une logique spécifique
        const userType = 'pro'; // ou 'particulier', dépendant de la logique de votre application
        router.push({ name: 'ChoisirMoyenPayement', params: { userType } });
        } else {
        router.push({ name: routeOrder[currentIndex.value + 1] });
        }
    }
    };

  
      return { goToPrev, goToNext, isFirstRoute, isLastRoute };
    },
  });
  </script>
  
  <style scoped>
  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin: 1vh;
  }
  button {
    padding: 1vh;
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  </style>
  