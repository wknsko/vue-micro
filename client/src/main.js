import { createApp, } from 'vue';
import App from './App.vue';
import feather from 'feather-icons';
import router from './router'



createApp(App).use(router).provide('feather', feather).mount('#app')