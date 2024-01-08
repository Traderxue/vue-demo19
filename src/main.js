import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vant from 'vant';
import 'vant/lib/index.css';
import nutui from "@nutui/nutui-bingo";
import "@nutui/nutui-bingo/dist/style.css";


const app = createApp(App)

app.use(nutui)

app.use(vant)

app.use(createPinia())
app.use(router)

app.mount('#app')
