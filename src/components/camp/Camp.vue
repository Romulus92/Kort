<template>
  <div class="camp">
    <CampHero></CampHero>
    <CampHotel></CampHotel>
    <CampSchedule></CampSchedule>
    <CampProg></CampProg>
    <CampList></CampList>
    <CampPhotos></CampPhotos>
    <CampDay></CampDay>
    <ProgramForm formTheme='Летний лагерь, отдельная страница. Оставьте заявку' formTitle="Оставьте контактные данные, чтобы мы могли вам перезвонить и рассказать подробности" formName='camp_form_zan_send'></ProgramForm>
  </div>
</template>

<script>
import CampHero from './CampHero'
import CampHotel from './CampHotel'
import CampSchedule from './CampSchedule'
import CampProg from './CampProg'
import CampList from './CampList'
import CampPhotos from './CampPhotos'
import CampDay from './CampDay'
import ProgramForm from '../program/ProgramForm'

export default {
  components: {
    CampHero,
    CampHotel,
    CampSchedule,
    CampProg,
    CampList,
    CampPhotos,
    CampDay,
    ProgramForm
  }
}
</script>

<style lang="scss" scoped>
  .camp {
    margin-bottom: rem(100px);
    @include phones {
      margin-bottom: rem(60px);
    }
  }
</style>
