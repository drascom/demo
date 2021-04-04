/* eslint-disable no-unused-vars */
import Vue from "vue"
import axios from "axios"
import store from "@/store/index.js"

axios.defaults.baseURL = "process.env.VUE_APP_API_URL"
axios.defaults.headers.common["Accept-Language"] =
    JSON.parse(localStorage.getItem("locale")) || "en"
axios.defaults.headers.common["Content-Type"] = "application/json"
axios.defaults.headers.common["Cockpit-Token"] =
    "02addf09176edcfd28734398683fa3"

export default axios