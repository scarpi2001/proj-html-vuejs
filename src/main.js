import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faRoad as fasRoad } from '@fortawesome/free-solid-svg-icons'
import { faDroplet as fasDroplet } from '@fortawesome/free-solid-svg-icons'
import { faVideo as fasVideo } from '@fortawesome/free-solid-svg-icons'

library.add(fasRoad, fasVideo, fasDroplet)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

