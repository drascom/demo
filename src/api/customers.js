import api from "axios"

const END_POINT = "https://ederra.com.tr/cockpit/api/collections"
export default {
    async all(payload) {
        const params = {
            sort: {
                _created: -1
            },
            ...payload.data,
            limit: null,
            // skip: 0,
            populate: 1,
            simple: 1
        }
        return api.post(`${END_POINT}/get/${payload.child}`, params)
    },
    async save(payload) {
        return api
            .post(`${END_POINT}/save/${payload.child}`, payload)
            .then((res) => {
                return res
            })
    },
    async deleteItem(payload) {
        const params = { filter: { _id: payload._id } }
        return api
            .post(`${END_POINT}/remove/${payload.child}`, params)
            .then((res) => {
                return res
            })
    }
}