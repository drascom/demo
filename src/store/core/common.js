import apiModule from "@/api/index.js"


// initial actions
const actions = {
    async getAllItems({ commit }, payload) {
        return new Promise((resolve, reject) => {
            apiModule[payload.parent]
                .all(payload)
                .then((res) => {
                    const newPayload = { field: payload.child, respData: res.data }
                    commit(`${payload.parent}/SET_ITEMS`, newPayload, { root: true })
                    return res
                })
                .catch((error) => {})
        })
    },
}

export default {
    namespaced: true,
    actions
}