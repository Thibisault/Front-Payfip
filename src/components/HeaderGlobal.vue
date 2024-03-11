/** header global path :"src/components/HeaderGlobal.vue"
<template>
  <header class="header-global">
    <div class="header-top">
      <div @click="navigateToPrincipal" class="logo-container-left-section">
        <img src="@/assets/bloc-marque.svg" alt="Logo France" class="logo logo-fr" />
        <img src="@/assets/PayFIp_logotype.jpg" alt="Logo PayFIP" class="logo logo-payfip" />
      </div>

      <NavigationButtons/>
      <div class="right-section-header-global">
        <div class="bloc-flag">
        <img src="@/assets/flag_FR.gif" alt="Drapeau France" class="flag flag-fr" @click="setLanguageToFrench" />
        <img src="@/assets/flag_EN.gif" alt="Drapeau Angleterre" class="flag flag-en" @click="setLanguageToEnglish" />
      </div>
        <img src="@/assets/temp_logo_payfip.jpg" alt="Logo PayFIP Temporaire" class="logo logo-payfip-temp" />
      </div>
    </div>


    <div class="language-toggle">
    </div>
  </header>

</template>
  
<script>

import { defineComponent, computed, ref, watch  } from 'vue';
import { useLanguageStore } from '@/stores/languageStore';

import NavigationButtons from '@/components/NavigationButtons.vue';


export default defineComponent({
  name: 'HeaderGlobal',

components:{
 NavigationButtons
},

  setup() {
    const languageStore = useLanguageStore();
    const isEnglish = ref(languageStore.currentLanguage === 'en');


    // Définition des méthodes pour changer la langue
    const setLanguageToFrench = () => {
      languageStore.setLanguage('fr');
      isEnglish.value = false;
    };
    const setLanguageToEnglish = () => {
      languageStore.setLanguage('en');
      isEnglish.value = true;
    };

    // Basculer la langue et mettre à jour le style du bouton et le texte
    const toggleLanguage = () => {
      if (isEnglish.value) {
        setLanguageToFrench();
      } else {
        setLanguageToEnglish();
      }
    };

    // Style du bouton et texte en fonction de la langue actuelle
    const languageButtonStyle = computed(() => {
  if (isEnglish.value) {
    // Effet de brillance pour le drapeau du Royaume-Uni
    return {
      backgroundImage: 'linear-gradient(to right, #00247D, #FFFFFF, #CF142B)',
      color: 'black',
      fontWeight: 'bold',
      fontSize: '1rem',
      cursor: 'pointer',
    };
  } else {
    // Effet de lumière pour le drapeau français
    return {
      backgroundImage: 'linear-gradient(to right, #0055A4, #FFFFFF, #EF4135)',
      color: 'black',
      fontWeight: 'bold',
      fontSize: '1rem',
      cursor: 'pointer',
    };
  }
  
});

    const languageButtonText = computed(() => {
      return isEnglish.value ? 'Traduire en Français' : 'Translate in English';
    });

    return {setLanguageToFrench, setLanguageToEnglish, toggleLanguage, languageButtonStyle, languageButtonText };
  },

  methods: {
    navigateToPrincipal() {
      this.$router.push({ name: 'VuePrincipal' });
    }
  }
});
</script>
 
<style scoped>
.logo-container-left-section, .right-section-header-global {
  display: flex;
  align-items: center;
  justify-content: center;
}

  .right-section-header-global{
    align-items: flex-end; /* Aligner les éléments par le bas */
  }

.logo-container-left-section {
  cursor: pointer;
}

.logo-container-left-section:hover, .logo-container-left-section:active {
  transform: scale(1.005); /* Légère augmentation pour un effet subtil */
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  outline: none; /* Supprimer l'outline pour une apparence moins agressive */
}

.flag:hover, .flag:active {
  transform: scale(1.1); /* Ajustement pour l'effet de zoom */
  box-shadow: 0 0.1vh 2vh rgba(0, 123, 255, 0.5); /* Ombre portée bleutée */
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.bloc-flag{
  margin-right: 1.5vh;
}

.header-global {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Assure un espacement uniforme */
  width: 80vw; /* Prend toute la largeur */
  padding-top: 1vw; /* Ajoute un peu d'espace autour du header basé sur la largeur de la fenêtre */
  padding-left: 1vw;
  padding-right: 1vw;
  flex-wrap: wrap; /* Permet aux éléments de passer à la ligne sur des écrans plus petits */
}

.header-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

  .logo, .flag {
    max-height: auto; 
    min-height: auto; 
    max-width: auto; 
    min-width: auto; 
}

.flag {
  cursor: pointer;
  margin-right: 1vh;
  width: 2vw; /* Ajuste la largeur pour réduire la taille globale */
  height: 1.2vw; /* Ajuste la hauteur pour maintenir le ratio d'aspect */
  object-fit: cover; /* Assure que l'image couvre la zone sans distorsion */
  object-position: center; /* Centre l'image dans son conteneur */
}

.logo-fr {
  max-width: 15vw;
  min-width: 4vw;
  max-height: 10vh; 
}

.logo-payfip {
  max-width: 10vw;
  min-width: 3vw;
  max-height: 8vh;
}

.logo-payfip-temp {
  max-width: 12vw;
  min-width: 3.5vw;
  max-height: 8vh;
}

.language-toggle {
  padding-top: 1vh;
  padding-bottom: 1vh;
  width: 100%;
  height: 5vh;
}

.language-toggle button {
  width: 100%;
  height: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.language-toggle button:hover {
  background-color: #0056b3;
}
  </style>
  
  