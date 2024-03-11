/** vue principal vue. Path :"src/views/SelectionFacture.vue" */
<template>
  <div class="page-container">
    <div class="banner-container">
      <div class="dark-banner">
          <h1>{{ translate('invoiceInformation') }}</h1>
          <form @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group">
                <label for="invoiceReference">{{ translate('invoiceReference') }}</label>
                <input type="text" id="invoiceReference" v-model="invoiceReference" required :placeholder="translate('invoiceReferencePlaceholder')" class="focus-animation">
              </div>
              <div class="form-group">
                <label for="invoiceAmount">{{ translate('invoiceAmount') }}</label>
                <input type="number" id="invoiceAmount" v-model="invoiceAmount" required :placeholder="translate('invoiceAmountPlaceholder')" class="focus-animation">
              </div>
            </div>
            <div class="form-actions-validate-cancel-form">
              <button class="validate-button" type="submit">{{ translate('validate') }}</button>
              <button class="cancel-button" type="button" @click="cancel">{{ translate('cancel') }}</button>
            </div>
          </form>
      </div>
    </div>
    <div class="text-explication">
      <p>{{ translate('instruction') }}</p>
    </div>
  </div>
</template>

  
  <script>
  import { defineComponent, computed } from 'vue';
  import { useLanguageStore } from '@/stores/languageStore';
  import { translations } from '@/traduction/SelectionFactureTraduction.ts';
  
  export default defineComponent({
  name: 'SelectionFacture',
  setup() {
    const languageStore = useLanguageStore();
  
    const translate = key => {
      return translations[languageStore.currentLanguage][key];
    };
  
    return {
      translate,
      invoiceReference: '',
      invoiceAmount: '',
      submitForm() {
        console.log("Référence facture:", this.invoiceReference, "Montant facture:", this.invoiceAmount);
        this.$router.push({ name: 'ProOuParticulier' });
      },
      cancel() {
        this.$router.go(-1);
      },
    };
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
  </style>
  