<template>
  <div class="schedule">
    <ScheduleHero></ScheduleHero>
    <ScheduleTable></ScheduleTable>
    <ScheduleFeedback></ScheduleFeedback>
  </div>
</template>

<script>
import ScheduleHero from './ScheduleHero'
import ScheduleTable from './ScheduleTable'
import ScheduleFeedback from './ScheduleFeedback'

export default {
  name: 'Schedule',
  components: {
    ScheduleHero,
    ScheduleTable,
    ScheduleFeedback
  }
}
</script>

<style lang="scss" scoped>
</style>
