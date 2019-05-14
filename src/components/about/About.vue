<template>
  <div class="about">
    <AboutHero></AboutHero>
    <AboutLearn></AboutLearn>
    <AboutTonus></AboutTonus>
    <AboutTennis></AboutTennis>
    <AboutButtons></AboutButtons>
  </div>
</template>

<script>
import AboutHero from './AboutHero.vue'
import AboutLearn from './AboutLearn.vue'
import AboutTonus from './AboutTonus.vue'
import AboutTennis from './AboutTennis.vue'
import AboutButtons from './AboutButtons.vue'

export default {
  components: {
    AboutHero,
    AboutLearn,
    AboutTonus,
    AboutTennis,
    AboutButtons
  }
}
</script>

<style lang="scss" scoped>
</style>
