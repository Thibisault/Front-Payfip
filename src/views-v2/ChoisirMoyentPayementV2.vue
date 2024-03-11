<template>
  <div class="form-containerV2">
    <form @submit.prevent="submitForm">
      <h1>Choisir le moyen de paiement</h1>
      <div class="form-groupV2">
        <select v-model="selectedPaymentMethod" required>
          <option disabled value="">Veuillez choisir une option</option>
          <option value="carteBancaire">Carte Bancaire</option>
          <option value="virementBancaire">Virement Bancaire</option>
          <option value="prelevement">Prélèvement</option>
        </select>
      </div>
      <button type="submit">Suivant</button>
    </form>
  </div>
</template>

  <script>
  export default {
    props: {
      initialData: Object
    },
    data() {
      return {
        selectedPaymentMethod: '',
      };
    },
    created() {
      if (this.initialData && this.initialData.paymentMethod) {
        this.selectedPaymentMethod = this.initialData.paymentMethod;
      }
    },
    methods: {
      submitForm() {
        // Émettre l'événement avec le nom du prochain composant et les données du formulaire
        this.$emit('formSubmitted', 'ProOuParticulierV2', { paymentMethod: this.selectedPaymentMethod });
      },
    },
  };
  </script>

<style scoped>
.form-containerV2 {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f3e3; /* Crème */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center; /* Centrer le texte à l'intérieur du conteneur */
  font-family: 'Poppins', sans-serif; /* Utiliser Poppins ou une police similaire pour un look moderne */
}

h1 {
  margin-bottom: 20px;
  font-size: 1.5rem; /* Ajuster la taille de la police si nécessaire */
}

.form-groupV2 label, .form-groupV2 input, select {
  display: block; /* Assure que les éléments s'affichent en bloc */
  margin: auto; /* Centre les éléments */
  width: 90%; /* Ajuster la largeur si nécessaire */
  text-align: left; /* Aligner le texte des labels et inputs à gauche */
}

input[type="text"], input[type="number"], select {
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-family: 'Poppins', sans-serif; /* Utiliser une police moderne pour les inputs */
}

button {
  width: 50%; /* Ajuster la largeur du bouton */
  background-color: #7fdbda; /* Bleu doux */
  color: white;
  padding: 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1.2rem; /* Ajuster la taille de la police du bouton */
}

button:hover {
  background-color: #a2d5f2; /* Bleu ciel clair */
}

/* Styles pour les inputs radio et leurs labels */
input[type="radio"] + label {
  cursor: pointer; /* Change le curseur */
  padding-left: 5px; /* Espace entre le radio bouton et le label */
}

/* Ajuster le style des radio boutons pour un alignement vertical et espace */
.form-groupV2 > div {
  margin-bottom: 10px; /* Espace entre les options */
}
</style>
