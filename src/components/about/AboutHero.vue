<template>
  <div class="about-hero">
    <div class="about-hero-city"></div>
    <h2 class="about-hero-heading">Большой теннис<br> в Москве</h2>
    <img src="~@/assets/about_hero_img.png" class="about-hero-img">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .about {
    &-hero {
      overflow: hidden;
      height: rem(990px);
      background: #0d227d;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      @include mac {
        height: rem(760px);
      }
      @include base {
        height: rem(990px);
      }
      @include tablets {
        height: rem(750px);
      }
      @include phones {
        height: rem(525px);
      }
      &:after {
        content: "";
        position: absolute;
        height: 80px;
        left: -10%;
        right: -10%;
        border-radius: 50%;
        bottom: -25px;
        background: #fff;
        @include phones {
          display: none;
        }
      }
      &-city {
        position: absolute;
        top: rem(-87px);
        background: url(~@/assets/city.png) center top no-repeat;
        background-position-y: rem(-150px);
        height: 100%;
        width: 100%;
        @include mac {
          background: url(~@/assets/city_uhd.jpg) center top no-repeat;
        }
        @include base {
          background: url(~@/assets/city.png) center top no-repeat;
        }
        @include phones {
          background: url(~@/assets/city_mob.jpg) center top no-repeat;
          top: 0;
        }
        /* background-position-y: 200px; */
      }
      &-heading {
        margin-top: rem(100px);
        margin-bottom: rem(120px);
        color: white;
        text-align: center;
        @include futura(demi);
        font-size: rem(55px);
        z-index: 2;
        @include mac {
          margin-top: rem(40px);
          margin-bottom: rem(55px)
        }
        @include base {
          margin-top: rem(100px);
          margin-bottom: rem(120px);
        }
        @include tablets {
          margin-top: rem(50px);
          margin-bottom: rem(50px);
        }
        @include phones {
          font-size: rem(35px);
          line-height: rem(40px);
        }
      }
      &-img {
        width: rem(950px);
        z-index: 2;
        @include tablets {
          width: 80%;
          margin-top: rem(30px);
        }
        @include phones {
          display: none;
        }
      }
    }
  }
</style>
