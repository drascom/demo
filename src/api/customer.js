import api from "@/plugins/axios"

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
    }
}