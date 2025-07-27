import { createApp } from 'vue'

import '@aws-amplify/ui-vue/styles.css'

import { registerPlugins } from '@/plugins'
import App from './App.vue'
import './config/amplify'
import 'unfonts.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
