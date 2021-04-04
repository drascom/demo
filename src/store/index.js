import Vue from "vue"
import Vuex from "vuex"

import custom from "@/store/modules"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    modules: {...custom }
})