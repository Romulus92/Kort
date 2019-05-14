<template>
  <div class="price-reg">
    <div class="container">
      <h2 class="price-reg-heading">Регулярное обучение в академии</h2>
      <div class="price-reg-info">
        <div class="price-reg-buttons">
          <div class="button button_trans price-reg-button" @click="activetab=1" :class="[ activetab === 1 ? 'price-reg-button_active' : '' ]">
            <span class="price-reg-button-text">2 раза в неделю</span>
          </div>
          <div class="button button_trans price-reg-button" @click="activetab=2" :class="[ activetab === 2 ? 'price-reg-button_active' : '' ]">
            <span class="price-reg-button-text">3 раза в неделю</span>
          </div>
        </div>
        <p class="price-reg-text">Хотите узнать цены на занятия большим теннисом в Москве? Просто выберите желаемое количество тренировок в неделю и ознакомьтесь со стоимостью абонемента на 1 месяц. </p>
      </div>
      <transition name="price-fade" mode="out-in">
        <div class="price-reg-tab" v-if="activetab === 1" key=1>
          <img src="~@/assets/prices_reg_graph2.jpg" class="price-reg-tab-img">
          <div class="price-reg-tab-stats">
            <div class="price-reg-tab-stats-item">
              <span class="price-reg-tab-stats-name">8 занятий</span>
            </div>
            <div class="price-reg-tab-stats-item">
              <span class="price-reg-tab-stats-name">период:</span>
              <span class="price-reg-tab-stats-text">1 месяц</span>
            </div>
            <div class="price-reg-tab-stats-item">
              <span class="price-reg-tab-stats-name">Стоимость<br>обучения: </span>
              <span class="price-reg-tab-stats-text"><span class="price-reg-tab-stats-text_bold">7 500 ₽</span></span>
            </div>
          </div>
        </div>
        <div class="price-reg-tab" v-if="activetab === 2" key=2>
          <img src="~@/assets/prices_reg_graph.jpg" class="price-reg-tab-img">
          <div class="price-reg-tab-stats">
            <div class="price-reg-tab-stats-item">
              <span class="price-reg-tab-stats-name">12 занятий</span>
            </div>
            <div class="price-reg-tab-stats-item">
              <span class="price-reg-tab-stats-name">период:</span>
              <span class="price-reg-tab-stats-text">1 месяц</span>
            </div>
            <div class="price-reg-tab-stats-item">
              <span class="price-reg-tab-stats-name">Стоимость<br>обучения: </span>
              <span class="price-reg-tab-stats-text"><span class="price-reg-tab-stats-text_bold">10 000 ₽</span></span>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="price-reg-tab_mob">
      <div class="price-reg-buttons">
        <div class="button button_trans price-reg-button" @click="activetab=1" :class="[ activetab === 1 ? 'price-reg-button_active' : '' ]">
          <span class="price-reg-button-text">2 раза в неделю</span>
        </div>
        <div class="button button_trans price-reg-button" @click="activetab=2" :class="[ activetab === 2 ? 'price-reg-button_active' : '' ]">
          <span class="price-reg-button-text">3 раза в неделю</span>
        </div>
      </div>
      <div class="price-reg-tab_mob-content">
        <transition name="reg-tab-mob" mode="out-in">
          <div class="price-reg-tab_mob-item" v-if="activetab === 1" key=1>
            <div class="price-reg-tab_mob-info">
              <div class="price-reg-tab_mob-amount">
                <img src="~@/assets/ball.svg" class="price-reg-tab_mob-icon">
                <span class="price-reg-tab_mob-text">12 занятий</span>
              </div>
              <div class="price-reg-tab_mob-time">
                <img src="~@/assets/calendar.svg" class="price-reg-tab_mob-icon">
                <span class="price-reg-tab_mob-text">1 месяц</span>
              </div>
            </div>
            <div class="price-reg-tab_mob-price">
              <span class="price-reg-tab_mob-price-number">10 000 ₽</span>
            </div>
          </div>
          <div class="price-reg-tab_mob-item" v-if="activetab === 2" key=1>
            <div class="price-reg-tab_mob-info">
              <div class="price-reg-tab_mob-amount">
                <img src="~@/assets/ball.svg" class="price-reg-tab_mob-icon">
                <span class="price-reg-tab_mob-text">8 занятий</span>
              </div>
              <div class="price-reg-tab_mob-time">
                <img src="~@/assets/calendar.svg" class="price-reg-tab_mob-icon">
                <span class="price-reg-tab_mob-text">1 месяц</span>
              </div>
            </div>
            <div class="price-reg-tab_mob-price">
              <span class="price-reg-tab_mob-price-number">7 500 ₽</span>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activetab: 1
    }
  }
}
</script>

<style lang="scss" scoped>
  .price-fade {
    &-enter {
      opacity: 0;
    }
    &-leave-to {
      transform: translateX(20%);
      opacity: 0;
    }
    &-enter-to {
      opacity: 1;
    }
    &-leave {
      transform: translateX(0%);
      opacity: 0;
    }
    &-enter-active {
      transition: all 1s ease-in-out;
    }
    &-leave-active {
      transition: all 1s ease-in-out;
    }
  }
  .reg-tab-mob {
    &-enter {
      opacity: 0;
    }
    &-leave-to {
      opacity: 0;
    }
    &-enter-to {
      opacity: 1;
    }
    &-leave {
      opacity: 0;
    }
    &-enter-active {
      transition: all 0.5s ease-in-out;
    }
    &-leave-active {
      transition: all 0.5s ease-in-out;
    }
  }
  .price {
    &-reg {
      margin-bottom: rem(50px);
      overflow: hidden;
      @include tablets {
        margin-bottom: rem(50px);
      }
      .container {
        overflow: visible;
      }
      &-heading {
        @include circe(light);
        font-size: rem(30px);
        line-height: rem(60px);
        z-index: 2;
        @include phones {
          padding: 0 rem(20px);
        }
        @include iphones {
          font-size: rem(25px);
          line-height: rem(45px);
        }
      }
      &-info {
        display: flex;
        justify-content: space-between;
        z-index: 2;
        @include phones {
          flex-direction: column-reverse;
          padding: 0 rem(20px);
          .price-reg-buttons {
            display: none;
          }
        } 
      }
      &-text {
        width: 38%;
        font-size: rem(15px);
        line-height: rem(30px);
        @include circe(light);
        @include phones {
          width: 100%;
          margin-bottom: rem(20px);
        }
      }
      &-buttons {
        display: flex;
        width: rem(410px);
        justify-content: space-between;
        @include phones {
          width: 100%;
        }
      }
      &-button {
        width: rem(200px);
        height: rem(70px);
        &-text {
          @include futura(demi);
          text-transform: uppercase;
        }
        &_active {
          background: #03de50;
          color: white;
        }
        @include phones {
          width: rem(167px);
          height: rem(60px);
        }
      }
      &-tab {
        height: rem(700px);
        margin-top: rem(-150px);
        position: relative;
        @include tablets {
          height: rem(550px);
        }
        @include phones {
          display: none;
        }
        &-img {
          position: absolute;
          top: rem(70px);
          left: 0;
          width: rem(1240px);
          margin-left: rem(-43px);
          z-index: 1;
          @include tablets {
            width: 100%;
            margin-left: 0;
          }
          @include phones {
            display: none;
          }
        }
        &-stats {
          margin-top: rem(200px);
          padding: rem(12px) rem(33px);
          position: relative;
          z-index: 2;
          border-left: 3px solid #23e54c;
          @include phones {
            display: none;
          }
          &-item {
            display: flex;
            flex-direction: column;
            margin-bottom: rem(30px);
            &:last-of-type {
              margin-bottom: 0;
            }
          }
          &-name {
            @include futura(demi);
            font-size: rem(15px);
            text-transform: uppercase;
            margin-bottom: rem(12px);
          }
          &-text {
            @include circe(light);
            font-size: rem(16px);
            &_bold {
              @include circe(bold);
            }
          }
        }
        &_mob {
          padding: rem(20px) rem(35px);
          background: #f5f6f8;
          display: none;
          @include phones {
            display: block;
          }
          &-content {
            margin-top: rem(20px);
            display: flex;
          }
          &-item {
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
          }
          &-info {
            display: flex;
            width: 100%;
            justify-content: center;
            margin-bottom: rem(25px);
          }
          &-amount {
            display: flex;
            align-items: center;
            margin-right: rem(45px);
          }
          &-time {
            display: flex;
            align-items: center;
          }
          &-price {
            width: rem(167px);
            height: rem(60px);
            background: #e9ebf0;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            &-number {
              @include circe(bold);
              font-size: rem(20px);
              text-transform: uppercase;
              color: #0d227d;
            }
          }
          &-icon {
            width: rem(22px);
            height: rem(22px);
            margin-right: rem(10px);
          }
          &-text {
            @include circe(light);
            font-size: rem(20px);
            @include iphones {
              font-size: rem(16px);
            }
          }
        }
      }
    }
  }
</style>
