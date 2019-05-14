<template>
  <div class="about-learn-wrap">
    <div class="about-learn">
      <div class="container">
        <div class="about-learn-content">
          <h2 class="about-learn-heading">Для детей и взрослых</h2>
          <p class="about-learn-text">Академия большого тенниса KORT 12 – это команда профессионалов, главной страстью которых остаётся спорт. Эти люди нашли свое призвание и готовы делиться знаниями с теми, кто также как и они «горят идеей» играть в большой теннис.</p>
        </div>
      </div>
    </div>
    <img src="~@/assets/learn_bg_mob.jpg" class="about-learn-img">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .about {
    &-learn {
      background: url(~@/assets/learn_bg.png) center center no-repeat;
      height: rem(900px);
      position: relative;
      display: flex;
      align-items: center;
      z-index: 2;
      @include mac {
        height: rem(630px);
         background: url(~@/assets/learn_bg_uhd.png) center center no-repeat;
      }
      @include base {
        background: url(~@/assets/learn_bg.png) center center no-repeat;
        height: rem(900px);
      }
      @include tablets {
        height: rem(600px);
      }
      @include phones {
        width: 100%;
        background: none;
        height: auto;
        margin-top: 0;
        margin-bottom: rem(80px);
      }
      &-wrap {
        overflow: hidden;
        margin-top: rem(-80px);
      }
      &-content {
        align-self: flex-end;
        background: white;
        width: rem(489px);
        height: rem(351px);
        padding: rem(30px) rem(55px);
        @include phones {
          width: 100%;
          height: auto;
          padding: rem(10px);
        }
      }
      &-heading {
        @include circe(light);
        font-size: rem(30px);
        line-height: rem(47px);
      }
      &-text {
        @include circe(light);
        font-size: rem(15px);
        line-height: rem(30px);
      }
      &-img {
        display: none;
        @include phones {
          display: block;
        }
      }
    }
  }
</style>
