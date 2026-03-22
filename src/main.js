import { createApp } from 'vue'
import App from './../App.vue'

// Import required modules from Font Awesome.
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './resources/css/main.css'

// Add the far and fas icons to the library.
library.add(far, fas);

const app = createApp(App)

// Register font-awesome-icon components globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
