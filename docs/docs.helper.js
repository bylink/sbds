/**
 * This is Vue Design System’s JS helper file for docs.
 * You can add more things if/when needed.
 */
import Vue from "vue"
import WebFontLoader from "../src/utils/webFontLoader" // eslint-disable-line no-unused-vars
import statusLabels from "./utils/statusLabels"
import activeNav from "./utils/activeNav"
import VueLazyload from "vue-lazyload"
import VModal from "vue-js-modal"
import filterSearch from "./utils/filterSearch"
import "codemirror/mode/jsx/jsx"

Vue.config.productionTip = false
Vue.mixin(statusLabels)
Vue.use(VueLazyload)
Vue.use(VModal)

document.addEventListener("DOMContentLoaded", () => {
  filterSearch.methods.init()
  activeNav.methods.init()
})

window.addEventListener("hashchange", () => {
  filterSearch.methods.init()
  activeNav.methods.init()
})
