import { createApp } from 'vue'
import './style.css'
import 'vue3-carousel/dist/carousel.css'
import App from './App.vue'
import router from './router.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
