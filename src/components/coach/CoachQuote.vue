<template>
  <div class="coaches-quote">
    <div class="container">
      <parallax-container class="coaches-ball">
        <parallax-element class='coaches-ball-element' :parallaxStrength="50" :type="'translation'">
          <img src="~@/assets/coaches_ball1.png" class="coaches-ball-img coaches-ball-img_1">
          <img src="~@/assets/coaches_ball2.png" class="coaches-ball-img coaches-ball-img_2">
        </parallax-element>
      </parallax-container>
      <div class="coaches-quote-content">
        <img src="~@/assets/quote-left.png" class="coaches-quote-img-left">
        <p class="coaches-quote-text">Нам не важен твой возраст. <br>Не важно, как ты выглядишь <br>и в какой ты форме. <br><span class="coaches-quote-text_bold">Важно то, чего хочешь ты.</span></p>
        <img src="~@/assets/quote-right.png" class="coaches-quote-img-right">
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.coaches {
  &-quote {
    height: rem(630px);
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    @include phones {
      padding: rem(60px) 0;
      height: auto;
    }
    .container {
      justify-content: center;
      align-items: center;
      overflow: visible;
    }
    &-content {
      position: relative;
      width: rem(640px);
      @include phones {
        width: 100%;
      }
    }
    &-text {
      color: #0d227d;
      @include futura(light);
      font-size: rem(55px);
      line-height: rem(65px);
      text-align: center;
      position: relative;
      @include phones {
        font-size: rem(35px);
        line-height: rem(45px);
        padding: rem(15px) rem(18px);
        text-align: left;
        br {
          display: none;
        }
      }
      &_bold {
        @include futura(demi);
      }
    }
    &-img {
      &-left {
        position: absolute;
        left: rem(-55px);
        top: rem(-17px);
        @include phones {
          position: relative;
          top: 0;
          left: 0;
        }
      }

      &-right {
        position: absolute;
        bottom: rem(-17px);
        right: rem(-55px);
        @include phones {
          position: relative;
          top: 0;
          left: 0;
        }
      }
    }
  }
  &-ball {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    @include phones {
      display: none;
    }
    &-element {
      width: 100%;
      height: 100%;
    }
    &-img {
      position: absolute;
      &_1 {
        right: 0;
        top: rem(-50px);
      }
      &_2 {
        bottom: rem(20px);
        left: rem(90px);
      }
    }
  }
}
</style>
