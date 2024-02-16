/** selection collectivite vue. Path :"src/views/SelectionCollectivite.vue" */
<template>
    <div class="page-container">
      <div class="form-container">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <div class="dark-banner">
              <label for="publicStructureId"><h1>Identifiant structure publique</h1></label>
              <input type="text" id="publicStructureId" v-model="publicStructureId" required placeholder="Veuillez renseigner l'identifiant structure publique ici">
              <div class="form-actions">
              <button type="submit">Valider</button>
              <button type="button" @click="cancel">Annuler</button>
            </div>
            </div>
          </div>
        </form>
      </div>
      <p>* Saisir l'identifiant structure publique précisé sur votre avis des sommes à payer, votre facture ou votre titre de perception.</p>
    </div>
</template>

  
  <script>
  export default {
    data() {
      return {
        publicStructureId: '',
      };
    },
    methods: {
      submitForm() {
        console.log("Formulaire soumis avec l'identifiant:", this.publicStructureId);
        // Redirection après la soumission du formulaire, si nécessaire
      },
      cancel() {
        this.$router.go(-1); // Retour à la vue précédente
      },
    },
  };
  </script>
  
<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto; /* Ajuste la hauteur en fonction du contenu */
  padding: 1vh;
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

p {
    font-size: 1.2em; /* Augmentation de la taille pour l'importance */
    font-weight: 700;
    margin-top: 2vh;
    margin-bottom: 5vh;
}

.dark-banner {
  background-color: rgb(0, 0, 0, 0.7); /* Noir avec 50% d'opacité */
  padding: 3vh;
  border-radius: 10px; /* Bordures arrondies pour adoucir les coins */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Ombre légère pour un effet de profondeur */
  margin: 20px 0; /* Ajoute de l'espace autour du bandeau */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centre les éléments à l'intérieur verticalement */
  justify-content: center; /* Centre les éléments à l'intérieur horizontalement */
}

.form-container {
  background-image: url('@/assets/d13.webp'); /* Chemin à ajuster si nécessaire */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ombre discrète pour le relief */
  background-color: #ffffff; /* Fond blanc pour le contraste et la clarté */
  width: 100%;
  max-width: 80%;
  padding: 5vh;
  position: relative;
  overflow: hidden;
}

.form-group label {
  color: #333; /* Couleur de texte sobre */
  display: block;
  margin-bottom: 0.5em;
}

.form-group input {
  width: 100%;
  padding: 10px;
  margin-bottom: 1em;
  border: 1px solid #ccc; /* Bordure discrète pour les champs de saisie */
  border-radius: 4px; /* Légères bordures arrondies pour les champs de saisie */
  background-color: #fafafa; /* Fond légèrement gris pour les champs de saisie */
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 5vh;
}

.form-actions button {
  background-color: #4d3808; /* Couleur verte sobre pour le bouton Valider */
  color: white; /* Texte blanc pour contraste */
  border: none;
  padding: 10px 20px;
  margin-left: 10px; /* Espacement entre les boutons */
  border-radius: 4px; /* Bordures arrondies pour les boutons */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-actions button:hover {
  background-color: #45a049; /* Assombrissement au survol */
}

.form-actions button[type="button"] {
  background-color: #0e2743; /* Couleur rouge sobre pour le bouton Annuler */
}

.form-actions button[type="button"]:hover {
  background-color: #d32f2f; /* Assombrissement au survol */
}
</style>
