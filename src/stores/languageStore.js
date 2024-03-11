/** Fichier de configuration des langues. Path :"src/stores/languageStore.js" */
import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: 'fr',
  }),
  actions: {
    setLanguage(newLang) {
      this.currentLanguage = newLang;
    },
  },
});
