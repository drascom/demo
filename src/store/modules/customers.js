/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = () => {
    return {
        items: [],
        total: ""
    }
}
const getters = {
    AllCustomers: (state) => {
        return state.items
    },
    ActiveCustomers: (state) => {
        return state.items.filter((item) => {
            return item.status === true
        })
    },
    getOne: (state) => (id) => {
        return state.items.find((item) => item._id === id)
    }
}
const actions = {}
const mutations = {
    SET_ITEMS(state, payload) {
        state.items = payload.respData
        state.total = payload.respData.length
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}