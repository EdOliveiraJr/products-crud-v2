import ToastService from 'primevue/toastservice';
import router from '../../src/config/router';
import PrimeVue from 'primevue/config';


const plugins = [
  router,
  ToastService,
  PrimeVue,
];

export default plugins;