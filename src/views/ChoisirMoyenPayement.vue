/** Choisir Moyen Payement vue. Path :"src/views/ChoisirMoyenPayement.vue" */
<template>
    <div class="choisir-moyen-paiement-container">
        <div class="banner-container">
        <div class="dark-banner">
      <h2>{{ translate('titreChoisirMoyentPaiement') }}</h2>
      <div class="buttons-container">
        <button @click="selectPaymentMethod('carteBancaire')" class="payment-btn carte">{{ translate('carteBancaire') }}</button>
        <button @click="selectPaymentMethod('virementBancaire')" class="payment-btn virement">{{ translate('virementBancaire') }}</button>
        <button @click="selectPaymentMethod('prelevement')" class="payment-btn prelevement">{{ translate('prelevement') }}</button>
      </div>
    </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, computed } from 'vue';
  import { useLanguageStore } from '@/stores/languageStore';
  import { translations } from '@/traduction/ChoisirMoyenPayementTraduction';

  export default defineComponent({
    name: 'ChoisirMoyenPaiement',
    setup() {
      const languageStore = useLanguageStore();
      
      const translate = (key) => {
        const currentLang = languageStore.currentLanguage;
        return translations[currentLang][key] || key;
      };

      const selectPaymentMethod = (method) => {
        console.log("Méthode de paiement sélectionnée :", method);
      };
      
      return {
        translate,
        selectPaymentMethod,
      };
    },
  });
  </script>
  
  <style scoped>
  .choisir-moyen-paiement-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  .buttons-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .payment-btn {
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    transition: background-color 0.3s ease;
  }
  
  .carte {
    background-color: #007bff;
  }
  
  .virement {
    background-color: #28a745;
  }
  
  .prelevement {
    background-color: #dc3545;
  }
  
  .payment-btn:hover {
    opacity: 0.9;
  }
  </style>
  

