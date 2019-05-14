<template>
  <div class="about-tennis">
    <div class="container">
      <img src="~@/assets/about_tennis.png" class="about-tennis-img">
      <img src="~@/assets/about_tennis_mob.jpg" class="about-tennis-img_mob">
      <p class="about-tennis-text">это не только спорт. Это азарт. Игра,<br> с миллионами последователей по всему миру. <br> Хобби, которое становится частью жизни. </p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.about {
  &-tennis {
    padding-bottom: rem(80px);
    &-img {
      margin-top: rem(75px);
      @include mac {
        margin-top: rem(30px);
        width: inherit;
      }
      @include base {
        margin-top: rem(75px);
      }
      @include tablets {
        width: 100%;
      }
      @include phones {
        display: none;
      }
      &_mob {
        display: none;
        margin-bottom: rem(15px);
        @include phones {
          width: 100%;
          display: block;
        }
      }
    }
    &-text {
      color: #333333;
      font-size: rem(20px);
      line-height: rem(40px);
      @include circe(light);
      width: 50%;
      align-self: flex-end;
      margin-top: rem(-150px);
      margin-bottom: rem(80px);
      @include tablets {
        margin-top: rem(-100px);
        margin-bottom: 0;
      }
      @include phones {
        margin-top: 0;
        width: 100%;
        font-size: rem(15px);
        br {
          display: none;
        }
      }
    }
  }
}
</style>
