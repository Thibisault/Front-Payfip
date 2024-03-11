
<template>
  <div class="form-containerV2">
    <form @submit.prevent="submitForm">
      <h1>Choisir le moyen de paiement</h1>
      <div class="form-groupV2">
        <label for="collectiviteInput">Numéro collectivite :</label>
        <input type="text" id="collectiviteInput" v-model="collectiviteInput" required placeholder="Nom de la collectivité" >
      </div>
      <button type="submit">Soumettre</button>
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
        collectiviteInput: '',
      };
    },

    created() {
    if (this.initialData && this.initialData.userInput) {
        this.collectiviteInput = this.initialData.userInput;
      }
    },

    methods: {
      submitForm() {
        this.$emit('formSubmitted', 'SelectionFactureV2', { userInput: this.collectiviteInput });
      },
    },
  };
  </script>

<style scoped>

h1 {
  margin-bottom: 20px;
  font-size: 1.5rem; /* Ajuster la taille de la police si nécessaire */
}

.form-containerV2 {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7); /* Fond noir transparent */
  border-radius: 10px;
  color: white; /* Texte blanc pour contraster avec le fond sombre */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Ombre douce pour un effet de profondeur */
  text-align: center; /* Centrage du texte */
  font-family: 'Poppins', sans-serif; /* Police moderne */
}

input[type="text"], input[type="number"], select {
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-family: 'Poppins', sans-serif; /* Utiliser une police moderne pour les inputs */
  font-size: 1rem; /* Ajuster la taille de la police du bouton */
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
