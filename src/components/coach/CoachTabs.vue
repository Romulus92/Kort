<template>
  <div class="coaches-wrap">
    <div class="coaches-choice">
      <div @click="activetab=1" :class="[ activetab === 1 ? 'coaches-choice-item_active' : '' ]" class="coaches-choice-item">
        <span class="coaches-choice-name">Полякова Дарья</span>
      </div>
      <div @click="activetab=2" :class="[ activetab === 2 ? 'coaches-choice-item_active' : '' ]" class="coaches-choice-item">
        <span class="coaches-choice-name">Служителева Яна</span>
      </div>
      <div @click="activetab=3" :class="[ activetab === 3 ? 'coaches-choice-item_active' : '' ]" class="coaches-choice-item">
        <span class="coaches-choice-name">Конова Ксения</span>
      </div>
      <div @click="activetab=4" :class="[ activetab === 4 ? 'coaches-choice-item_active' : '' ]" class="coaches-choice-item">
        <span class="coaches-choice-name">Бондаренко Инна</span>
      </div>
    </div>
    <div class="coaches-char">
      <div class="container">
        <div class="coaches-tabs">
          <transition name='coaches-trans' mode="out-in">
            <div v-if="activetab === 1" class="coaches_item" key=1>
              <div class="coaches_item-left">
                <div class="coaches_item-name">
                  <span class="coaches_item-name-last">Полякова</span>
                  <span class="coaches_item-name-first">Дарья Александровна</span>
                </div>
                <div class="coaches_item-occup">
                  <span class="coaches_item-occup-text">старший тренер, 1989 г.р.</span>
                </div>
                <div class="coaches_item-photo-popup">
                  <span class="coaches_item-photo-popup-text">посмотреть фото</span>
                </div>
                <div class="coaches_item-info">
                  <div class="coaches_item-info-group">
                    <img src="~@/assets/ball.svg" class="coaches_item-info-img">
                    <span class="coaches_item-info-text">играет с 9 лет</span>
                  </div>
                  <div class="coaches_item-info-group">
                    <img src="~@/assets/experience.svg" class="coaches_item-info-img">
                    <span class="coaches_item-info-text">тренирует 12 лет</span>
                  </div>
                  <div class="coaches_item-info-group">
                    <img src="~@/assets/calendar.svg" class="coaches_item-info-img">
                    <span class="coaches_item-info-text">старший тренер, 1989 г.р.</span>
                  </div>
                </div>
                <div class="coaches_item_uni" :class='{coaches_item_uni_active: uniBodyActive}'>
                  <div class="coaches_item_uni-header" @click='uniBodyActive = !uniBodyActive'>
                    <img src='~@/assets/hat.svg' class='svg-icon--hat'>
                    <div class="coaches_item_uni-info">
                      <span class="coaches_item_uni-text">Высшее образование </span>
                      <div class="coaches_item_uni-arrow"></div>
                    </div>
                  </div>
                  <div class="coaches_item_uni_body">
                    <span class="coaches_item_uni-name">Финансовая академия при Правительстве РФ</span>
                    <span class="coaches_item_uni-name">Российский государственный университет физической культуры, спорта и туризма.</span>
                    <div class="coaches_item_uni-list">
                      <span class="coaches_item_uni-regard">Участница международного турнира ITF</span>
                      <span class="coaches_item_uni-regard">Участница международного турнира WTA</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="coaches_item-right">
                <img src="~@/assets/bondarenko.png" class="coaches_item-photo">
              </div>
            </div>
            <div v-if="activetab === 2" class="coaches_item" key=2>
              <div class="coaches_item-left">
                <div class="coaches_item-name">
                  <span class="coaches_item-name-last">Служителева</span>
                  <span class="coaches_item-name-first">Яна Андреевна</span>
                </div>
                <div class="coaches_item-occup">
                  <span class="coaches_item-occup-text">тренер, 1994 г.р</span>
                </div>
                <div class="coaches_item-photo-popup">
                  <span class="coaches_item-photo-popup-text">посмотреть фото</span>
                </div>
                <div class="coaches_item-info">
                  <div class="coaches_item-info-group">
                    <img src="~@/assets/ball.svg" class="coaches_item-info-img">
                    <span class="coaches_item-info-text">играет с 5 лет</span>
                  </div>
                  <div class="coaches_item-info-group">
                    <img src="~@/assets/experience.svg" class="coaches_item-info-img">
                    <span class="coaches_item-info-text">тренирует 1,5 года</span>
                  </div>
                  <div class="coaches_item-info-group">
                    <img src="~@/assets/calendar.svg" class="coaches_item-info-img">
                    <span class="coaches_item-info-text">тренер, 1994 г.р</span>
                  </div>
                </div>
                <div class="coaches_item_uni" :class='{coaches_item_uni_active: uniBodyActive}'>
                  <div class="coaches_item_uni-header" @click='uniBodyActive = !uniBodyActive'>
                    <img src='~@/assets/hat.svg' class='svg-icon--hat'>
                    <div class="coaches_item_uni-info">
                      <span class="coaches_item_uni-text">Высшее образование </span>
                      <div class="coaches_item_uni-arrow"></div>
                    </div>
                  </div>
                  <div class="coaches_item_uni_body">
                    <span class="coaches_item_uni-name">Белорусский государственный университет физической культуры</span>
                    <div class="coaches_item_uni-list">
                      <span class="coaches_item_uni-regard">Чемпионка России в парном разряде среди юниоров до 16 лет (2009 г.)</span>
                      <span class="coaches_item_uni-regard">Многократная чемпионка турниров ITF (3,4,5) парном разряде.</span>
                      <span class="coaches_item_uni-regard">Чемпионка России в командном первенстве до 16 лет (2010 г.)</span>
                      <span class="coaches_item_uni-regard">Чемпионка Беларуси в парном разряде среди женщин (2013 г.)</span>
                      <span class="coaches_item_uni-regard">Член сборной Краснодарского края 2006-2012 г.</span>
                      <span class="coaches_item_uni-regard">Чемпионка первенства Краснодарского края среди женщин (2008 г.)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="coaches_item-right">
                <img src="~@/assets/bondarenko.png" class="coaches_item-photo">
              </div>
            </div>
            <div v-if="activetab === 3" class="coaches_item" key=3>
              <div class="coaches_item-left">
                <div class="coaches_item-name">
                  <span class="coaches_item-name-last">Конова</span>
                  <span class="coaches_item-name-first">Ксения Андреевна</span>
                </div>
                <div class="coaches_item-occup">
                  <span class="coaches_item-occup-text">тренер, мастер спорта, 1994 г.р.</span>
                </div>
                <div class="coaches_item-photo-popup">
                  <span class="coaches_item-photo-popup-text">посмотреть фото</span>
                </div>
                <div class="coaches_item-info">
                  <div class="coaches_item-info-group">
                    <img src="~@/assets/ball.svg" class="coaches_item-info-img">
                    <span class="coaches_item-info-text">играет с 9 лет</span>
                  </div>
                  <div class="coaches_item-info-group">
                    <img src="~@/assets/experience.svg" class="coaches_item-info-img">
                    <span class="coaches_item-info-text">тренирует 4 года</span>
                  </div>
                  <div class="coaches_item-info-group">
                    <img src="~@/assets/calendar.svg" class="coaches_item-info-img">
                    <span class="coaches_item-info-text">тренер, мастер спорта, 1994 г.р.</span>
                  </div>
                </div>
                <div class="coaches_item_uni" :class='{coaches_item_uni_active: uniBodyActive}'>
                  <div class="coaches_item_uni-header" @click='uniBodyActive = !uniBodyActive'>
                    <img src='~@/assets/hat.svg' class='svg-icon--hat'>
                    <div class="coaches_item_uni-info">
                      <span class="coaches_item_uni-text">Высшее образование </span>
                      <div class="coaches_item_uni-arrow"></div>
                    </div>
                  </div>
                  <div class="coaches_item_uni_body">
                    <span class="coaches_item_uni-name">студентка Московского государственного университета<br> экономики, статистики и информатики, факультет "Менеджмент в спорте"</span>
                    <div class="coaches_item_uni-list">
                      <span class="coaches_item_uni-regard">Участница международного турнира ITF</span>
                      <span class="coaches_item_uni-regard">Участница международного турнира WTA</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="coaches_item-right">
                <img src="~@/assets/bondarenko.png" class="coaches_item-photo">
              </div>
            </div>
            <div v-if="activetab === 4" class="coaches_item" key=4>
              <div class="coaches_item-left">
                <div class="coaches_item-name">
                  <span class="coaches_item-name-last">Бондаренко</span>
                  <span class="coaches_item-name-first">Инна Сергеевна</span>
                </div>
                <div class="coaches_item-occup">
                  <span class="coaches_item-occup-text">тренер, кандидат в мастера спорта, 1994 г.р.</span>
                </div>
                <div class="coaches_item-photo-popup">
                  <span class="coaches_item-photo-popup-text">посмотреть фото</span>
                </div>
                <div class="coaches_item-info">
                  <div class="coaches_item-info-group">
                    <img src="~@/assets/ball.svg" class="coaches_item-info-img">
                    <span class="coaches_item-info-text">играет с 6 лет</span>
                  </div>
                  <div class="coaches_item-info-group">
                    <img src="~@/assets/experience.svg" class="coaches_item-info-img">
                    <span class="coaches_item-info-text">тренирует 3 года</span>
                  </div>
                  <div class="coaches_item-info-group">
                    <img src="~@/assets/calendar.svg" class="coaches_item-info-img">
                    <span class="coaches_item-info-text">тренер, кандидат в мастера спорта, 1994 г.р.</span>
                  </div>
                </div>
                <div class="coaches_item_uni" :class='{coaches_item_uni_active: uniBodyActive}'>
                  <div class="coaches_item_uni-header" @click='uniBodyActive = !uniBodyActive'>
                    <img src='~@/assets/hat.svg' class='svg-icon--hat'>
                    <div class="coaches_item_uni-info">
                      <span class="coaches_item_uni-text">Высшее образование </span>
                      <div class="coaches_item_uni-arrow"></div>
                    </div>
                  </div>
                  <div class="coaches_item_uni_body">
                    <span class="coaches_item_uni-name">Студентка университета физического воспитания<br> Таврического национального университета им. В.И.Вернадского</span>
                    <div class="coaches_item_uni-list">
                      <span class="coaches_item_uni-regard">Участница международного турнира ITF</span>
                      <span class="coaches_item_uni-regard">Участница международного турнира WTA</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="coaches_item-right">
                <img src="~@/assets/bondarenko.png" class="coaches_item-photo">
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '../shared/SvgIcon.vue'

export default {
  components: {
    SvgIcon
  },
  data () {
    return {
      uniBodyActive: false,
      activetab: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.coaches {
  &-char {
    height: rem(800px);
    overflow: hidden;
    /* @include mac {
      height: rem(550px);
    } */

    @include tablets {
      height: rem(690px);
    }

    @include phones {
      height: auto;
    }

    .container {
      overflow: visible;
    }
  }

  &-tabs {
    margin-top: rem(90px);
    @include phones {
      width: 100%;
      margin-top: rem(45px);
    }
  }

  &-choice {
    justify-content: center;
    margin-top: rem(-20px);
    display: flex;
    @include phones {
      flex-direction: column;
      align-items: center;
    }
    &-item {
      padding: rem(38px);
      background: #0d227d;
      @include phones {
        width: 66.6%;
        padding: rem(20px);
        text-align: center;
      }
      cursor: pointer;
      &_active {
        background: #23e54c;
        .coaches-choice-name {
          color: black;
        }
      }
    }
    &-name {
      @include futura(book);
      color: white;
      font-size: rem(20px);
    }
  }

  &_item {
    display: flex;
    @include phones {
      width: 100%;
    }

    &-right {
      position: absolute;
      right: rem(-150px);
      transition: all 0.5s ease-in-out;
      transition-delay: 0.45s;
      @include tablets {
        right: rem(-400px);
      }
    }

    &-left {
      margin-left: rem(120px);
      @include tablets {
        margin: 0;
      }
      @include phones {
        width: 100%;
      }
    }

    &-photo {
      width: 80%;
      @include phones {
        display: none;
      }
    }

    &-occup {
      padding: rem(8px) rem(13px);
      border: 1px solid #0d227d;
      border-radius: 3px;
      display: inline-flex;
      margin-bottom: rem(20px);
      transition: all 0.5s ease-in-out;
      @include phones {
        display: none;
      }
      &-text {
        @include circe(light);
        font-size: rem(16px);
      }
    }

    &-photo-popup {
      padding: rem(8px) rem(13px);
      border: 1px solid #0d227d;
      border-radius: 3px;
      display: inline-flex;
      margin-bottom: rem(20px);
      transition: all 0.5s ease-in-out ;
      display: none;
      @include phones {
        display: inline-flex;
      }
      &-text {
        @include circe(light);
        font-size: rem(16px);
      }
    }

    &-name {
      display: flex;
      flex-direction: column;
      margin-bottom: rem(8px);
      transition: all 0.5s ease-in-out;
      &-last {
        color: #0d227d;
        @include futura(light);
        font-size: rem(90px);
        @include phones {
          font-size: rem(40px);
        }
      }
      &-first {
        @include futura(light);
        font-size: rem(45px);
        line-height: rem(65px);
        color: #0d227d;
        @include phones {
          font-size: rem(40px);
        }
      }
    }

    &-info {
      display: flex;
      margin-bottom: rem(40px);
      transition: all 0.5s ease-in-out;
      @include phones {
        flex-wrap: wrap;
      }
      &-group {
        display: flex;
        align-items: center;
        margin-right: rem(30px);
        &:last-of-type {
          display: none;
          @include phones {
            display: flex;
          }
        }
      }
      &-img {
        width: rem(22px);
        height: rem(22px);
        margin-right: rem(8px);
      }
      &-text {
        @include circe(light);
        font-size: rem(16px);
        line-height: rem(40px);
      }
    }

    &_uni {
      transition: all 0.5s ease-in-out 0.3s;
      &_active {
        .coaches_item_uni-arrow {
          transform: rotate(180deg);
        }
        .coaches_item_uni_body {
          max-height: 250px;
          @include phones {
            max-height: 300px;
          }
        }
      }
      &-header {
        display: flex;
        align-items: center;
        margin-bottom: rem(25px);
        cursor: pointer;
      }
      &-name {
        @include circe(bold);
        font-size: rem(15px);
        line-height: rem(30px);
        color: #323232;
        display: block;
        margin-bottom: rem(20px);
      }
      &-list {
        width: rem(520px);
        display: flex;
        flex-wrap: wrap;
        @include phones {
          width: 100%;
        }
      }
      &_body {
        max-height: 0;
        height: 250px;
        overflow: hidden;
        transition: max-height 0.5s ease-in-out;
        @include phones {
          height: 300px;
        }
      }
      &-regard {
        display: block;
        width: 32%;
        margin-bottom: rem(20px);
        font-size: rem(13px);
        line-height: rem(20px);
        @include circe(light);
        margin-right: 2%;
        @include phones {
          width: 48%;
          &:nth-of-type(2n) {
            @include phones {
              margin-right: 0;
            }
          }
        }
        &:nth-of-type(3n) {
          margin-right: 0;
          @include phones {
            margin-right: 2%;
          }
        }
      }
      &-info {
        border-bottom: 1px dashed #0d227d;
        display: flex;
        align-items: center;
      }
      &-text {
        color: #0d227d;
        @include futura(demi);
        font-size: rem(15px);
        text-transform: uppercase;
        margin-right: rem(10px);
      }
      &-arrow {
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #0d227d;
        transition: transform 0.5s ease-in-out;
      }
    }
  }
}

.coaches-trans {
  &-enter,
  &-leave-to {
    .coaches_item-name {
      transform: translateX(-1000px);
    }
    .coaches_item-occup {
      transform: translateX(-1000px);
    }
    .coaches_item-info {
      transform: translateX(-1000px);
    }
    .coaches_item_uni {
      transform: translateX(-1000px);
    }
    .coaches_item-right {
      transform: translateX(1000px);
    }
    .coaches_item-photo-popup {
      transform: translateX(-1000px);
    }
  }

  &-enter-to,
  &-leave {
    .coaches_item-name {
      transform: translateX(0);
    }
    .coaches_item-occup {
      transform: translateX(0)
    }
    .coaches_item-info {
      transform: translateX(0);
    }
    .coaches_item_uni {
      transform: translateX(0);
    }
    .coaches_item-right {
      transform: translateX(0);
    }
    .coaches_item-photo-popup {
      transform: translateX(0);
    }
  }

  &-enter-active,
  &-leave-active {
    transition: all 0.95s ease-in-out;
  }
}
</style>
