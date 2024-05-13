import PrimeVue from 'primevue/config';
import router from '@/router/index';
import service from '@/service/index';
import ToastService from 'primevue/toastservice';
import api from '@/plugins/axios';

const plugins = [
  api,
  PrimeVue,
  router,
  service,
  ToastService,
];

export default plugins;