<template>
  <div class="prices">
    <PricesHero></PricesHero>
    <PricesReg></PricesReg>
    <PricesRequest></PricesRequest>
  </div>
</template>

<script>
import PricesHero from './PricesHero.vue'
import PricesReg from './PricesReg.vue'
import PricesRequest from './PricesRequest.vue'

export default {
  components: {
    PricesHero,
    PricesReg,
    PricesRequest
  }
}
</script>

<style lang="scss" scoped>
</style>
