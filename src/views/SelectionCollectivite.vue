/** selection collectivite vue. Path :"src/views/SelectionCollectivite.vue" */
<template>
  <div class="page-container">
    <div class="banner-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <div class="dark-banner">
            <label for="publicStructureId"><h1>{{ translate('publicStructureIdentifier') }}</h1></label>
            <input type="text" id="publicStructureId" v-model="publicStructureId" required :placeholder="translate('publicStructureIdPlaceholder')" class="focus-animation">
            <div class="form-actions-validate-cancel-form"> 
            <button class="validate-button" type="submit">{{ translate('validate') }}</button>
            <button class="cancel-button" type="button" @click="cancel">{{ translate('cancel') }}</button>
          </div>
          </div>
        </div>
      </form>
    </div>
    <div class="text-explication">
    <p>{{ translate('instruction') }}</p>
  </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useLanguageStore } from '@/stores/languageStore';
import { translations } from '@/traduction/SelectionCollectiviteTraduction.ts';

export default defineComponent({
  name: 'SelectionCollectivite',
  setup() {
    const languageStore = useLanguageStore();
    const translate = key => translations[languageStore.currentLanguage][key];

    // Validation personalisé pour traduire le message d'erreur en anglais si la page est en anglais
    const setCustomValidityMessage = () => {
      const input = document.getElementById("publicStructureId");
      if (input) {
        input.oninvalid = function(event) {
          event.target.setCustomValidity(translate('requiredFieldError'));
        };
        input.oninput = function(event) {
          event.target.setCustomValidity('');
        };
      }
    };

    return {
      translate,
      publicStructureId: '',
      submitForm() {
        console.log("Formulaire soumis avec l'identifiant:", this.publicStructureId);
        this.$router.push({ name: 'SelectionFacture' });
      },
      cancel() {
        this.$router.go(-1);
      },
      setCustomValidityMessage,
    };
  },
  mounted() {
    this.setCustomValidityMessage();
  },
});

</script>

<style scoped>
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
</style>
