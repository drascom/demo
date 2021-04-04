/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = () => {
    return {
        items: []
    }
}
const getters = {
    customerDetails: (state) => {
        return state
    }
}
const actions = {}
const mutations = {
    SET_ITEMS(state, payload) {
        state[payload.field] = {
            items: payload.respData,
            total: payload.respData.length
        }
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}