import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faRoad as fasRoad } from '@fortawesome/free-solid-svg-icons'
import { faDroplet as fasDroplet } from '@fortawesome/free-solid-svg-icons'
import { faVideo as fasVideo } from '@fortawesome/free-solid-svg-icons'
import { faGoogle as fabGoogle } from '@fortawesome/free-brands-svg-icons'
import { faGear as fasGear } from '@fortawesome/free-solid-svg-icons'
import { faBuilding as fasBuilding } from '@fortawesome/free-solid-svg-icons'
import { faChartColumn as fasChartColumn } from '@fortawesome/free-solid-svg-icons'

library.add(fasRoad, fasVideo, fasDroplet, fabGoogle, fasGear, fasBuilding, fasChartColumn)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

