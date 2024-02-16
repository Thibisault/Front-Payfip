import { createRouter, createWebHistory } from 'vue-router';
import VuePrincipal from '../views/VuePrincipal.vue';
import SelectionCollectivite from '../views/SelectionCollectivite.vue';

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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
