/** header global path :"src/components/HeaderGlobal.vue"
<template>
    <header class="header-global">
        <div @click="navigateToPrincipal" class="logo-container">
            <img src="@/assets/bloc-marque.svg" alt="Logo France" class="logo logo-fr" />
            <img src="@/assets/PayFIp_logotype.jpg" alt="Logo PayFIP" class="logo logo-payfip" />
        </div>
  
      <div class="spacer-header-global">

      </div>
      <div class="right-section-header-global">
      <img src="@/assets/flag_FR.gif" alt="Drapeau France" class="flag flag-fr" />
      <img src="@/assets/flag_EN.gif" alt="Drapeau Angleterre" class="flag flag-en" />
      <img src="@/assets/temp_logo_payfip.jpg" alt="Logo PayFIP Temporaire" class="logo logo-payfip-temp" />
    </div>
    </header>
  </template>
  
  
  <script>
  export default {
    name: 'HeaderGlobal',
    methods: {
      navigateToPrincipal() {
        this.$router.push({ name: 'VuePrincipal' });
      },
      setLanguageToFrench() {
        // Logique pour définir la langue en français
      },
      setLanguageToEnglish() {
        // Logique pour définir la langue en anglais
      },
    },
  };
  </script>
  
  
  <style scoped>

  .right-section-header-global{
    display: flex;
    align-items: flex-end; /* Aligner les éléments par le bas */
  }

.logo-container {
  display: flex;
  cursor: pointer;
}

.logo-container:hover, .logo-container:active {
  outline: 2px solid #ccc; /* Changez la couleur selon votre design */
  transform: scale(1.05); /* Légère augmentation de taille */
  transition: transform 0.2s ease-in-out;
}

.logo-container:hover, .logo-container:active, .flag:hover, .flag:active {
  transform: scale(1.05); /* Ajustement pour l'effet de zoom */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Ombre portée ajoutée */
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

  .header-global {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Assure un espacement uniforme */
    width: 100%; /* Prend toute la largeur */
    padding-top:  8vh;
    padding-left: 25vh;
    padding-right: 30vh;
  }
  
  .flag {
  height: 3vh; /* Ajustez si nécessaire pour l'alignement */
  cursor: pointer;
  margin-right: 1vh; /* Crée un écart entre les drapeaux */
}

.flag:hover, .flag:active {
  transform: scale(1.1); /* Légère augmentation de taille pour l'effet de survol */
  transition: transform 0.2s ease-in-out;
}
  .logo {
    height: 10vh; /* Taille des logos ajustée */
  }
  
  .logo-fr {
    height: 15vh; /* Taille spécifique pour le logo-fr */
  }
  
  .logo-payfip {
    height: 7vh; /* Taille spécifique pour le logo-payfip */
  }
  
  .logo-payfip-temp {
    height: 10vh; /* Taille ajustée pour le logo PayFIP temporaire */
  }
  </style>
  
  