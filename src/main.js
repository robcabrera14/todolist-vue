import { createApp } from 'vue';
import App from './App.vue';
import './main.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faTrash, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faTrash, faCheck, faPlus);

const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
