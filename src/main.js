//入口
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'    //vuex
import router from './router'

createApp(App).use(router).use(store).mount('#app')
