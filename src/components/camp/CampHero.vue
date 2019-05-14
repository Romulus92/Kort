<template>
  <div class="camp__hero">
    <div class="container">
      <h2 class="camp__hero-heading">Летний лагерь<br> для детей<br> в Болгарии!</h2>
      <p class="camp__hero-lead">Приглашаем детей возраста 6-15 лет в летний спортивный<br> лагерь Болгарии на берегу Чёрного моря.</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .camp {
    &__hero {
      height: rem(826px);
      background: url(~@/assets/camp_hero_bg.jpg) center center no-repeat;
      display: flex;
      align-items: flex-end;
      padding-bottom: rem(150px);
      @include mac {
        height: rem(650px);
      }
      @include base {
        height: rem(826px);
      }
      @include tablets {
        padding-bottom: rem(50px);
        height: rem(545px);
        background: url(~@/assets/camp_hero_bg_mob.jpg) center center no-repeat;
      }
      @include phones {
        padding-bottom: rem(20px);
      }
      &-heading {
        @include futura(heavy);
        font-size: rem(55px);
        line-height: rem(62px);
        color: #191919;
        @include phones {
          font-size: rem(35px);
          line-height: rem(40px);
          br {
            display: none;
          }
        }
      }
      &-lead {
        @include circe(light);
        font-size: rem(15px);
        line-height: rem(30px);
        color: #333333;
        @include phones {
          br {
            display: none;
          }
        }
      }
    }
  }
</style>
