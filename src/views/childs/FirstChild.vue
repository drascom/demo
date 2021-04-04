<template>
  <div>
    <first :propA="prop1"></first>
    <second :propB="prop2.social" :propC="prop2.notes"></second>
    <third :propB="prop2.incomes" :propC="prop2.expenses"></third>
  </div>
</template>

<script>
import innercomponents from "@/views/childs/grandchilds/index" //importing all child components

export default {
  props: ["prop1", "prop2"],
  components: {
    ...innercomponents
  }
}
</script>

<style lang="scss" scoped></style>
