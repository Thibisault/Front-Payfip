/** footer global path :"src/components/FooterGlobal.vue"
<template>
  <div class="all-page-footer">
    <div class="dark-banner">
      <div class="organise-footer-info">
        <div class="footer-section">
          <h4 class="menu-section-title">{{ translate('informations') }}</h4>
          <ul class="list-unstyled">
            <li><a href="#" @click="popupInfo('004')">{{ translate('yourQuestions') }}</a></li>
            <li><a href="#" @click="popupInfo('005')">{{ translate('computerSecurity') }}</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4 class="menu-section-title">{{ translate('serviceQuality') }}</h4>
          <ul class="list-unstyled">
            <li><a href="#" @click="popupInfo('006')">{{ translate('accessibility') }}</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4 class="menu-section-title">{{ translate('otherSites') }}</h4>
          <ul class="list-unstyled">
            <li><a href="http://www.collectivites-locales.gouv.fr/" target="_blank">{{ translate('localGovernment') }}</a></li>
            <li><a href="https://www.amendes.gouv.fr" target="_blank">{{ translate('fines') }}</a></li>
            <li><a href="https://timbres.impots.gouv.fr/" target="_blank">{{ translate('stampDuties') }}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script>
  import { defineComponent, computed } from 'vue';
  import { useLanguageStore } from '@/stores/languageStore';
  import { translations } from '@/traduction/FooterGlobalTraduction.ts';
  
  export default defineComponent({
    name: 'FooterGlobal',
    setup() {
      const languageStore = useLanguageStore();
  
      const translate = key => {
        return translations[languageStore.currentLanguage][key];
      };
  
      return {
        translate,
        popupInfo(templateName) {
          console.log("Ouvrir popup avec template:", templateName);
        },
      };
    },
  });
  </script>
  
  
  <style scoped>
  .all-page-footer {
    text-align: center;
    width: 80%;
    margin: auto;
    padding: 2vh 0; /* Réduit la hauteur du footer */
  }
  
  .organise-footer-info {
    display: flex;
    justify-content: space-around; /* Assure que les sections sont en ligne */
    align-items: center; /* Alignement vertical au centre */
    flex-wrap: wrap;
    width: 100%;
  }
  
  .footer-section {
  flex-basis: 30%; /* Ajustez cette valeur pour contrôler la largeur initiale des sections avant qu'elles ne passent à la ligne */
  padding: 0 1vw; /* Espacement horizontal pour ne pas que le texte soit trop compact */
  box-sizing: border-box; /* S'assure que le padding est inclus dans la largeur de l'élément */
  margin-bottom: 2vh; /* Espacement vertical entre les sections lorsqu'elles passent à la ligne */
}
  .menu-section-title {
    text-decoration: underline;
    margin-bottom: 5px; /* Réduit l'espace sous les titres */
    font-size: 1rem; /* Ajustement de la taille du texte pour compacité */
  }
  
  .list-unstyled {
    list-style: none;
    padding: 0;
    margin: 0; /* Supprime les marges pour compacter le texte */
    font-size: 0.9rem; /* Ajustement de la taille du texte des liens */
  }
  
  .list-unstyled li a {
    color: #fff;
    text-decoration: none;
    display: block; /* Assure que les liens prennent toute la largeur pour un meilleur clic */
  }
  
  .list-unstyled li a:hover {
    text-decoration: underline;
  }
  </style>
  