<template>
  <div class="main-containerV2">
    <div class="responses">
      <p v-for="(value, key) in responses" :key="key" @click="navigateToComponent(key)" class="response-item">
        {{ getLabelForKey(key) }}: {{ value }}
      </p>
    </div>
    <component
      :is="currentComponent"
      @formSubmitted="handleFormSubmitted"
      :initialData="getInitialDataForComponent(currentComponent)"
      class="component-wrapper"
    ></component>

  </div>
</template>

<script>
import SelectionCollectiviteV2 from './SelectionCollectiviteV2.vue';
import SelectionFactureV2 from './SelectionFactureV2.vue';
import ProOuParticulierV2 from './ProOuParticulierV2.vue';
import ChoisirMoyentPayementV2 from './ChoisirMoyentPayementV2.vue';

export default {
  data() {
    return {
      currentComponent: 'SelectionCollectiviteV2',
      responses: {},
    };
  },
  methods: {
    getLabelForKey(key) {
      const labels = {
        userInput: 'Collectivité',
        invoiceNumber: 'Référence facture',
        invoiceAmount: 'Montant facture',
        paymentMethod: 'Moyen de paiement',
        userType: 'Profil',
      };
      return labels[key] || key;
    },

    handleFormSubmitted(nextComponentName, formData) {
  // Mise à jour des réponses avec les données soumises pour le composant actuel
    const isDataChanged = Object.entries(formData).some(([key, value]) => this.responses[key] !== value);
    if (isDataChanged) {

    // Si les données ont changé, mettre à jour les réponses
    this.responses = { ...this.responses, ...formData };

    // Identifier la position du composant actuel dans la séquence
    const sequence = ['SelectionCollectiviteV2', 'SelectionFactureV2', 'ChoisirMoyentPayementV2', 'ProOuParticulierV2'];
    const currentIndex = sequence.indexOf(this.currentComponent);

    // Supprimer les réponses des composants qui suivent dans la séquence
    for (let i = currentIndex + 1; i < sequence.length; i++) {
      const componentKey = this.getKeyForComponent(sequence[i]);
      if (componentKey) {
        // Suppression des données associées au composant dans les réponses
        delete this.responses[componentKey];
      }
    }

    // Passer au composant suivant
    this.currentComponent = nextComponentName;
    // Définir les données initiales pour le prochain composant
    this.initialData = this.getInitialDataForComponent(nextComponentName);
  } else {
    // Si les données n'ont pas changé, simplement naviguer au composant suivant sans modification
    this.currentComponent = nextComponentName;
    this.initialData = this.getInitialDataForComponent(nextComponentName);
    }
  },

    navigateToComponent(key) {
      const componentMap = {
        userInput: 'SelectionCollectiviteV2',
        invoiceNumber: 'SelectionFactureV2',
        invoiceAmount: 'SelectionFactureV2',
        paymentMethod: 'ChoisirMoyentPayementV2',
        userType: 'ProOuParticulierV2',
      };
      this.currentComponent = componentMap[key];
    },

    getKeyForComponent(componentName) {
   const keyMap = {
    'SelectionCollectiviteV2': 'userInput',
    'SelectionFactureV2': ['invoiceNumber', 'invoiceAmount'], // Notez que cela peut être un tableau
    'ProOuParticulierV2': 'userType',
    'ChoisirMoyentPayementV2': 'paymentMethod',
    };
    return keyMap[componentName];
    },


    getInitialDataForComponent(componentName) {
      // Ici, retournez les données initiales spécifiques pour le composant basé sur `componentName`
      switch (componentName) {
        case 'SelectionCollectiviteV2':
          return { userInput: this.responses.userInput };
        case 'SelectionFactureV2':
          return {
            invoiceNumber: this.responses.invoiceNumber,
            invoiceAmount: this.responses.invoiceAmount,
          };
        case 'ProOuParticulierV2':
          return { userType: this.responses.userType };
        case 'ChoisirMoyentPayementV2':
          return { paymentMethod: this.responses.paymentMethod };
        default:
          return {};
      }
    },
  },

  components: {
    SelectionCollectiviteV2,
    SelectionFactureV2,
    ProOuParticulierV2,
    ChoisirMoyentPayementV2,
  },
};
</script>

<style scoped>
.main-containerV2 {
  background-image: url('@/assets/d27.webp'); /* Chemin à ajuster si nécessaire D13 / D18 / D21 / D27 */
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
  
}

.responses {
  display: flex;
  flex-wrap: wrap; /* Permet aux éléments de passer à la ligne si nécessaire */
  margin-bottom: 20px;
  justify-content: space-around; /* Distribue l'espace autour des éléments */
}

.response-item {
  font-size: 0.9rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.7); /* Fond noir transparent */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  color: #ffffff;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex-grow: 1; /* Permet aux éléments de grandir pour remplir l'espace */
  text-align: center; /* Centre le texte à l'intérieur de chaque élément */
  min-width: 120px; /* Définit une largeur minimale pour chaque élément */
}


.response-item:hover {
  background-color: #a2d5f2; /* Bleu ciel clair */
}

.component-wrapper {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7); /* Fond noir transparent */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 20px; /* Ajoute un espace entre les composants et les réponses */
}

/* Ajouter des styles supplémentaires pour les boutons, les inputs, etc., ici */
button {
  background-color: #ff6b6b; /* Corail */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #ff8c8c; /* Corail clair */
}

input, select {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
