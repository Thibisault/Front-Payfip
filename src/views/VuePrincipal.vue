/** vue principal vue. Path :"src/views/VuePrincipal.vue" */
<template>
    <div class="page-container">
      <div class="banner-container">
        <div class="dark-banner">
        <h1>SITE DE TÉLÉPAIEMENT DE LA DGFIP</h1>
        <div class="info-banner">
            <p>La Direction Générale des Finances Publiques met à votre disposition ce site pour faciliter le paiement des créances publiques</p>
        </div>
      </div>
      </div>
      <div class="text-explication">
      <p>PayFiP vous permet de payer vos factures publiques (hors impôts) 24h/24, 7j/7 , en toute sécurité</p>
      <p>Des réponses à vos questions</p>
      </div>
      <button @click="navigateToCollectivite"><h3>PAYER VOS FACTURES PUBLIQUES</h3></button>
    </div>
  </template>
  
  <script>
export default {
  methods: {
    navigateToCollectivite() {
      this.$router.push({ name: 'SelectionCollectivite' });
    },
  },
};
  </script>
  
  <style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto; /* Ajuste la hauteur en fonction du contenu */
  padding: 1vh;
  width: 100%; /* Permet au conteneur de page de s'étendre sur toute la largeur */
}

.dark-banner {
  background-color: rgb(0, 0, 0, 0.7); /* Noir avec 50% d'opacité */
  padding: 5vh;
  border-radius: 10px; /* Bordures arrondies pour adoucir les coins */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Ombre légère pour un effet de profondeur */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centre les éléments à l'intérieur verticalement */
  justify-content: center; /* Centre les éléments à l'intérieur horizontalement */
}

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

.text-explication{
    margin-top: 2vh;
    margin-bottom: 5vh;
}

.banner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/d13.webp'); /* Chemin à ajuster si nécessaire */
  background-size: cover; /* Couvre la totalité du conteneur sans déformer l'image */
  background-position: center; /* Centre l'image dans le conteneur */
  padding: 5vh;
  border-radius: 10px; /* Bordures arrondies pour le bandeau */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 80%;
  position: relative; /* Nécessaire pour le clipping de l'arrière-plan */
  overflow: hidden; /* Assure que l'arrière-plan reste dans les bordures arrondies */
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

.info-banner img {
  max-width: 100%; /* Assure que l'image ne dépasse pas la largeur du bandeau */
  height: auto; /* Maintient l'aspect ratio de l'image */
  border-radius: 8px; /* Optionnel: arrondit les coins de l'image comme le bandeau */
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


  </style>
  
  
  