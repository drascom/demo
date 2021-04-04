<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{ store }}
    <first :prop1="customerProfile" :prop2="details.social"></first>
    <second :prop1="customerProfile" :prop2="details"></second>
  </div>
</template>

<script>
import ProfileComponent from "@/views/childs/index" //importing all child components
import commonJS from "@/store/core/common.js" //import common action module
import { mapGetters } from "vuex"
export default {
  name: "Home",
  data() {
    return {
      store: this.$store.state,
      id: "60583620656639035b000264",
      pages: [
        ["customers", "customers", "_id"],
        ["customer", "social", "customer_id._id"],
        ["customer", "social", "customer_id._id"],
        ["customer", "Visits", "customer_id._id"],
        ["customer", "deposits", "customer_id._id"],
        ["customer", "photos", "customer_id._id"],
        ["customer", "notes", "customer_id._id"],
        ["customer", "incomes", "customer_id._id"],
        ["customer", "expenses", "customer_id._id"]
      ]
    }
  },
  components: {
    ...ProfileComponent
  },
  beforeCreate() {
    if (!(this.$store && this.$store.state && this.$store.state.commonStore)) {
      this.$store.registerModule("commonStore", commonJS)
    }
  },
  computed: {
    ...mapGetters({
      details: "customer/customerDetails",
      getProfile: "customers/getOne"
    }),
    customerProfile() {
      return this.getProfile(this.id)
    }
  },
  methods: {
    handleRequestsList() {
      for (const page of this.pages) {
        this.handleRequest(page)
      }
    },
    handleRequest(tables) {
      const filter = tables[2] ? { [tables[2]]: this.id } : ""
      this.$store.dispatch("commonStore/getAllItems", {
        parent: tables[0],
        child: tables[1],
        data: { filter: { ...filter } }
      })
    }
  },
  mounted() {
    this.handleRequestsList()
  }
}
</script>
