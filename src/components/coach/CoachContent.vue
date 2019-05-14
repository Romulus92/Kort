<template>
  <div class="coaches">
    <CoachHero></CoachHero>
    <CoachTabs></CoachTabs>
    <CoachInfo></CoachInfo>
    <CoachForm></CoachForm>
    <CoachQuote></CoachQuote>
  </div>
</template>

<script>
import CoachHero from './CoachHero.vue'
import CoachTabs from './CoachTabs.vue'
import CoachInfo from './CoachInfo.vue'
import CoachForm from './CoachForm.vue'
import CoachQuote from './CoachQuote.vue'

export default {
  components: {
    CoachHero,
    CoachTabs,
    CoachInfo,
    CoachForm,
    CoachQuote
  }
}
</script>

<style lang="scss" scoped>
.coaches {
  .container {
    overflow: hidden;
  }
}
</style>
