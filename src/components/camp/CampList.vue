<template>
  <div class="container">
    <div class="camp__list">
      <div class="camp__list-row">
        <CampItem heading='Перелёт' text='авиабилеты по направлениям Москва – Варна – Москва'></CampItem>
        <CampItem heading='Проживание' text='размещение в 2х или 3х местных номерах'></CampItem>
        <CampItem heading='Питание' text='полноценные завтраки, обеды и ужины по системе «Всё включено»'></CampItem>
      </div>
      <div class="camp__list-line"></div>
      <div class="camp__list-row">
        <CampItem heading='Трансфер' text='сопровождение по маршруту: аэропорт – отель – аэропорт'></CampItem>
        <CampItem heading='Услуги' text='бассейны, детские площадки, настольные игры и зажигательная анимация'></CampItem>
        <CampItem heading='Страхование' text='медицинский полис на весь срок пребывания'></CampItem>
      </div>
      <div class="camp__list-line"></div>
      <div class="camp__list-row">
        <CampItem heading='Организация' text='организация отдыха и управление процессом, соблюдение дисциплины и безопасности '></CampItem>
      </div>    
    </div>  
    <div class="camp__list camp__list_mob">
      <div class="camp__list-row">
        <CampItem heading='Перелёт' text='авиабилеты по направлениям Москва – Варна – Москва'></CampItem>
        <CampItem heading='Проживание' text='размещение в 2х или 3х местных номерах'></CampItem>
      </div>
      <div class="camp__list-line"></div>
      <div class="camp__list-row">
        <CampItem heading='Питание' text='полноценные завтраки, обеды и ужины по системе «Всё включено»'></CampItem>
        <CampItem heading='Услуги' text='бассейны, детские площадки, настольные игры и зажигательная анимация'></CampItem>
      </div>
      <div class="camp__list-line"></div>
      <div class="camp__list-row">
        <CampItem heading='Страхование' text='медицинский полис на весь срок пребывания'></CampItem>
        <CampItem heading='Организация' text='организация отдыха и управление процессом, соблюдение дисциплины и безопасности '></CampItem>
      </div>    
    </div> 
  </div>
</template>

<script>
import CampItem from './CampItem'
export default {
  components: {
    CampItem
  }
}
</script>

<style lang="scss" scoped>
  .camp {
    &__list {
      width: 73%;
      margin-left: rem(173px);
      @include netbooks {
        margin-left: rem(100px);
      }
      @include phones {
        display: none;
      }
      @include tablets {
        width: 100%;
        margin-left: 0;
      }
      &_mob {
        display: none;
        @include phones {
          display: block;
        }
      }
      &-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: rem(35px);
        &:last-of-type {
          justify-content: center;
          @include phones {
            justify-content: space-between;
          }
        }
      }
      &-line {
        height: rem(1px);
        width: 100%;
        background-color: #e8e8e8;
        margin-bottom: rem(35px);
      }
    }
  }
</style>
