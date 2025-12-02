import { createApp } from 'vue'
import './assets/less/index.less'
import Main from './main.vue'
import { router } from './router/router'


const app = createApp(Main)

app.use(router)
app.mount('#main')
