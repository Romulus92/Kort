<template>
  <div class="coaches-hero">
    <div class="container">
      <h2 class="coaches-hero-heading">Тренерский<br>состав</h2>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.coaches {
  &-hero {
    height: rem(720px);
    background: url(~@/assets/coaches_hero_bg.jpg) center bottom no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @include mac {
      background: url(~@/assets/coaches_hero_bg_uhd.jpg) center bottom no-repeat;
      background-size: cover;
    }
    @include base {
      background: url(~@/assets/coaches_hero_bg.jpg) center bottom no-repeat;
      background-size: cover;
    }
    @include phones {
      height: rem(450px);
      background: url(~@/assets/coaches_hero_bg_mob.jpg) center bottom no-repeat;
    }
    &-heading {
      @include futura(heavy);
      font-size: rem(55px);
      line-height: rem(60px);
      padding-left: 65%;
      margin-bottom: rem(145px);
      @include phones {
        font-size: rem(35px);
        line-height: rem(40px);
        padding-left: 47%;
        margin-bottom: rem(50px);
      }
      @include iphones {
        padding-left: 40%;
        font-size: rem(30px);
      }
    }
  }
}
</style>
