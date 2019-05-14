<template>
  <div>
    <div class="prices-hero">
      <div class="container">
        <h2 class="prices-heading">Стоимость<br> занятий</h2>
        <span class="prices-lead">абонементы<br> и разовые занятия</span>
      </div>
    </div>
    <div class="prices-info">
      <div class="container">
        <div class="prices-info-picture">
          <img src="~@/assets/prices_hero_img.jpg" class="prices-info-img">
          <img src="~@/assets/prices_hero_img_mob.jpg" class="prices-info-img_mob">
        </div>
        <div class="prices-info-content">
          <h2 class="prices-info-heading">Вместе веселее</h2>
          <p class="prices-info-text">Постоянные занятия с друзьями - не только украсят ваш привычный образ жизни, но и существенно снизят расходы на обучение в академии большого тенниса KORT 12.</p>
          <p class="prices-info-text">При групповых посещениях стоимость рассчитывается со скидкой.</p>
          <div class="prices-lesson">
            <img src="~@/assets/seat.svg" class="prices-lesson-img">
            <div class="prices-lesson-info">
              <span class="prices-lesson-heading">Частный урок в <span class="prices-lesson-heading_bold">KORT—12<br> 3 000 ₽</span> / час</span>
              <span class="prices-lesson-lead">стоимость корта включена</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .prices {
    &-hero {
      width: 100%;
      height: rem(725px);
      background: url(~@/assets/prices_hero_bg.jpg) center bottom no-repeat;
      display: flex;
      align-items: center;
      .container {
        margin-bottom: rem(70px);
      }
      @include mac {
        height: rem(500px);
        background: url(~@/assets/prices_hero_bg_uhd.jpg) center bottom no-repeat;
      }
      @include base {
        height: rem(725px);
        background: url(~@/assets/prices_hero_bg.jpg) center bottom no-repeat;
      }
      @include phones {
        height: rem(445px);
        background: url(~@/assets/prices_hero_bg_mob.jpg) center bottom no-repeat;
        align-items: flex-end;
      }
    }
    &-heading {
      color: white;
      font-size: rem(70px);
      line-height: rem(75px);
      @include futura(demi);
      margin: 0;
      margin-bottom: rem(20px);
      @include phones {
        font-size: rem(35px);
        line-height: rem(40px);
      }
    }
    &-lead {
      color: white;
      @include circe(light);
      font-size: rem(25px);
      line-height: rem(30px);
      @include phones {
        font-size: rem(20px);
        line-height: rem(25px);
      }
      br {
        display: none;
        @include phones {
          display: block;
        }
      }
    }
    &-info {
      padding-top: rem(90px);
      margin-bottom: rem(180px);
      display: flex;
      flex-direction: row;
      align-items: center;
      .container {
        flex-direction: row;
        @include phones {
          width: 100%;
          flex-direction: column-reverse;
        }
      }
      @include tablets {
        margin-bottom: rem(50px);
      }
      @include phones {
        flex-direction: column-reverse;
        padding-top: rem(40px);
      }

      &-heading {
        @include circe(light);
        font-size: rem(30px);
        line-height: rem(60px);
        align-self: flex-start;
        margin-top: 0;
      }
      &-text {
        @include circe(light);
        font-size: rem(15px);
        line-height: rem(30px);
        margin-bottom: rem(30px);
      }
      &-picture {
        width: 68%;
        @include tablets {
          width: 50%;
        }
        @include phones {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
      &-img {
        @include tablets {
          width: 100%;
        }
        @include phones {
          display: none;
        }
        &_mob {
          display: none;
          @include phones {
            display: block;
          }
        }
      }
      &-content {
        width: 32%;
        .container {
          display: block;
        }
        @include tablets {
          width: 50%;
          margin-left: rem(50px);
        }
        @include phones {
          width: 95%;
          margin-left: 0;
          align-self: center;
          margin-bottom: rem(35px);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 rem(20px);
        }
      }
    }
    &-lesson {
      width: rem(350px);
      height: rem(102px);
      border: 1px solid #23e54c;
      border-left: none;
      border-radius: 1px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      @include mac {
        border: 2px solid #23e54c;
        border-left: 0;
      }
      @include phones {
        margin-top: rem(20px);
      }
      @include iphones {
        width: 100%;
      }
      &-img {
        position: absolute;
        top: rem(-5px);
        left: 0;
        width: rem(50px);
        height: rem(107px);
      }
      &-info {
        margin-right: rem(45px);
        @include iphones {
          margin-right: rem(10px);
        }
      }
      &-heading {
        @include futura(book);
        font-size: rem(20px);
        line-height: rem(27px);
        display: block;
        color: #0d227d;
        @include iphones {
          font-size: rem(16px);
        }
        &_bold {
          @include futura(demi);
        }
      }
      &-lead {
        @include circe(light);
        font-size: rem(13px);
        line-height: rem(30px);
        color: #797979;  
      }
    }
  }
</style>
