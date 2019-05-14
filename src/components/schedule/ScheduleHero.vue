<template>
  <div class="schedule-hero">
    <div class="container">
      <div class="schedule-hero-content">

        <h2 class="schedule-hero-heading">Время пришло!</h2>
        <p class="schedule-hero-text">Начните своё обучение вне зависимости от возраста и уровня физподготовки. Сделайте шаг на пути к большому спорту и получите массу новых эмоций на одном из наших кортов.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .schedule {
    &-hero {
      background: url(~@/assets/schedule_hero.jpg) center bottom no-repeat;
      height: rem(800px);
      margin-bottom: rem(115px);
      @include mac {
        background: url(~@/assets/schedule_hero_uhd.jpg) center bottom no-repeat;
        height: rem(530px);
      }
      @include base {
        background: url(~@/assets/schedule_hero.jpg) center bottom no-repeat;
        height: rem(800px);
      }
      @include phones {
        height: rem(720px);
        background: url(~@/assets/schedule_hero_mob.jpg) center top no-repeat;
        margin-bottom: rem(50px);
      }
      .container {
        height: 100%;
      }
      &-content {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        @include tablets {
          justify-content: flex-start;
          padding-top: rem(100px);
        }
        @include phones {
          justify-content: space-between;
          align-items: center;
          padding-top: 0;
          width: 100%;
        }
      }
      &-heading {
        @include futura(heavy);
        font-size: rem(55px);
        @include phones {
          font-size: rem(35px);
          color: white;
          margin-top: rem(65px);
        }
      }
      &-text {
        @include circe(light);
        font-size: rem(15px);
        line-height: rem(30px);
        width: 100%;
      }
    }
  }
</style>
