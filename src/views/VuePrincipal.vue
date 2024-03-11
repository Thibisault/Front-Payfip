/** vue principal vue. Path :"src/views/VuePrincipal.vue" */
<template>
  <div class="page-container">
    <div class="banner-container">
      <div class="dark-banner">
        <h1>{{ translate('paymentSiteTitle') }}</h1>
        <div class="info-banner">
          <p>{{ translate('publicFinancesIntro') }}</p>
        </div>
      </div>
    </div>
    <div class="text-explication">
      <p>{{ translate('payfipDescription') }}</p>
      <p>{{ translate('faq') }}</p>
    </div>
    <div>
      <button @click="navigateToCollectivite" class="focus-animation">
        <h3>{{ translate('payPublicBillsButton') }}</h3>
      </button>
      <button @click="navigateToV2" class="focus-animation">V2</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useLanguageStore } from '@/stores/languageStore';
import { translations } from '@/traduction/VuePrincipalTraduction.ts';
export default defineComponent({
  name: 'VuePrincipal',
  setup() {
    const languageStore = useLanguageStore();
    const translate = key => {
      return translations[languageStore.currentLanguage][key];
    };

    return {
      translate,
      navigateToCollectivite() {
        this.$router.push({ name: 'SelectionCollectivite' });
      },
      navigateToV2() {
        this.$router.push({ name: 'MainView' });
      },
    };
  },
});
</script>
  
  <style scoped>

p {
    font-size: 1.2em; /* Augmentation de la taille pour l'importance */
    font-weight: 700;
}

h1 {
  font-family: 'Poppins', sans-serif; /* Utilisation de Poppins pour une cohérence avec le reste du design */
  color: var(--vt-c-white); /* Texte blanc pour le titre pour contraster avec le fond sombre */
  text-align: center; /* Centrage du titre dans le conteneur */
  font-size: 2em; /* Augmentation de la taille pour l'importance */
  font-weight: 600; /* Poids de la police pour un impact visuel */
  margin: 0 0 20px; /* Espacement au-dessous du titre pour séparer du contenu suivant */
  padding: 0; /* Pas de padding supplémentaire autour du titre */
  line-height: 1.2; /* Ajustement de l'espacement entre les lignes pour une meilleure lisibilité */
}



.info-banner {
  background-color: rgba(255, 255, 255, 0.80); /* Blanc avec 80% d'opacité pour un léger effet de transparence */
  color: var(--vt-c-black); /* Assurez-vous que cette couleur est définie dans vos variables CSS ou remplacez-la par une valeur hexadécimale directe */
  padding: 15px;
  border-radius: 5px; /* Bordures arrondies pour l'info-banner */
  margin-top: 15px; /* Espacement entre le titre et l'info-banner */
  width: 100%; /* Utilise toute la largeur disponible dans le dark-banner */
  box-sizing: border-box; /* S'assure que le padding et la bordure sont inclus dans la largeur totale */
  text-align: center; /* Centre le texte à l'intérieur */
}

button {
  background-color: var(--vt-c-indigo);
  color: var(--vt-c-white);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
  font-family: 'Poppins', sans-serif;
  position: relative; /* Ajout pour la gestion de l'effet de 'levitation' */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Ombre initiale légère pour un effet subtil */
}

button:hover, button:focus {
  background-color: var(--color-border-hover);
  transform: translateY(-2px) scale(1.05); /* L'élément 'ressort' légèrement et s'agrandit */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* Ombre plus prononcée pour accentuer l'effet */
}

.navigation-link { /* boutton V1 et v2*/
  margin: 20px 0;
  display: flex;
  align-items: center;
}
/* Cible le premier router-link dans .navigation-link pour appliquer la marge à droite */
.navigation-link > a:first-of-type { /* boutton V1 et v2*/
  margin-right: 2vh;
}
  </style>
  
  
  