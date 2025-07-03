import { createApp } from 'vue'
import App from './App.vue'
import Test from './components/Test.vue'
import BaseSlotsLayout from './BaseSlotsLayout.vue'
import LifeCycle from './LifeCycle.vue'
import ComposibleApp from './ComposibleApp.vue'


// const app = createApp(App)
// const app = createApp(BaseSlotsLayout)
// const app = createApp(LifeCycle)
const app = createApp(ComposibleApp)

app.component('test', Test)
app.mount('#app')
