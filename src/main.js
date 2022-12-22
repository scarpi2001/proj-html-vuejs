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
import { faDollarSign as fasDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faAnglesLeft as fasAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import { faAnglesRight as fasAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF as fasFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter as fasTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram as fasInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube as fasYoutube } from '@fortawesome/free-brands-svg-icons'




library.add(fasRoad, fasVideo, fasDroplet, fabGoogle, fasGear, fasBuilding, fasChartColumn, fasDollarSign, fasAnglesLeft, fasAnglesRight, fasFacebookF, fasTwitter, fasInstagram, fasYoutube)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

