import { createRouter, createWebHistory } from 'vue-router';
import VuePrincipal from '../views/VuePrincipal.vue';
import SelectionCollectivite from '../views/SelectionCollectivite.vue';
import SelectionFacture from '@/views/SelectionFacture.vue';
import ProOuParticulier from '@/views/ProOuParticulier.vue';
import ChoisirMoyenPayement from '@/views/ChoisirMoyenPayement.vue';

// Version 2
import MainView from '@/views-v2/MainView.vue';
import SelectionCollectiviteV2 from '../views-v2/SelectionCollectiviteV2.vue';
import SelectionFactureV2 from '../views-v2/SelectionFactureV2.vue';
import ProOuParticulierV2 from '../views-v2/ProOuParticulierV2.vue';
import ChoisirMoyentPayementV2 from '../views-v2/ChoisirMoyentPayementV2.vue';




const routes = [
  {
    path: '/',
    name: 'VuePrincipal',
    component: VuePrincipal,
  },
  {
    path: '/collectivite',
    name: 'SelectionCollectivite',
    component: SelectionCollectivite,
  },
  {
    path: '/facture',
    name: 'SelectionFacture',
    component: SelectionFacture,
  },
  {
    path: '/proOuParticulier',
    name: 'ProOuParticulier',
    component: ProOuParticulier,
  },
  {
    path: '/choisirMoyenPayement/:userType',
    name: 'ChoisirMoyenPayement',
    component: ChoisirMoyenPayement,
  },

  // Version 2 
  {
    path: '/main-view',
    name: 'MainView',
    component: MainView,
  },
  {
    path: '/collectiviteV2',
    name: 'SelectionCollectiviteV2',
    component: SelectionCollectiviteV2,
  },
  {
    path: '/factureV2',
    name: 'SelectionFactureV2',
    component: SelectionFactureV2,
  },
  {
    path: '/proOuParticulierV2',
    name: 'ProOuParticulierV2',
    component: ProOuParticulierV2,
  },
  {
    path: '/ChoisirMoyentPayementV2/:userType',
    name: 'ChoisirMoyentPayementV2',
    component: ChoisirMoyentPayementV2,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
