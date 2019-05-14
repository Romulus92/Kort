<template>
  <div class="prog">
    <ProgramHero></ProgramHero>
    <ProgramTabs></ProgramTabs>
    <div id="prog-wrap">
      <transition name="program-tabs" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import ProgramHero from './ProgramHero.vue'
import ProgramTabs from './ProgramTabs.vue'

export default {
  components: {
    ProgramHero,
    ProgramTabs
  }
}
</script>

<style lang="scss" scoped>
.program-tabs {
  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter-to,
  &-leave {
    opacity: 1;
  }

  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease-in-out;
  }
}
</style>
