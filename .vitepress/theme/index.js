import DefaultTheme from 'vitepress/theme'
import ApiCollapse from './components/ApiCollapse.vue'
import ApiRequest from './components/ApiRequest.vue'
import ApiResponse from './components/ApiResponse.vue'
import EventCollapse from './components/EventCollapse.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ApiCollapse', ApiCollapse)
    app.component('ApiRequest', ApiRequest)
    app.component('ApiResponse', ApiResponse)
    app.component('EventCollapse', EventCollapse)
  }
}