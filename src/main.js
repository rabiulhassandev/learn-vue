import { createApp } from 'vue'
import App from './App.vue'
import Test from './components/Test.vue'


const app = createApp(App)

app.component('test', Test)
app.mount('#app')
