<template>
  <div class="adress">
    <div class="adress-info">
      <div class="adress-info-content">
        <h2 class="adress-info-heading">Выбери свой<br> корт для игры</h2>
        <p class="adress-info-text">Хотите заниматься большим теннисом в Сокольниках? Приглашаем на наши корты, расположенные на Большой Тихоновской улице.</p>
        <p class="adress-info-text">Площадки полностью обустроены и оборудованы всем необходимым для безопасных и комфортных тренировок.</p>
        <div class="adress-info-wrap">
          <div class="adress-info-stadiums">
            <div class="adress-info-stadiums-buttons">
              <div class="button button_green-border adress-info-stadiums-button" @click="changeHeading(1)" :class="[ activetab === 1 ? 'adress-info-stadiums-button_active' : '' ]">
                <span>Стадион «Связист»</span>
              </div>
              <div class="button button_green-border adress-info-stadiums-button" @click="changeHeading(2)" :class="[ activetab === 2 ? 'adress-info-stadiums-button_active' : '' ]">
                <span>Другой стадион</span>
              </div>
            </div>
          </div>
          <div v-if="activetab === 1" class="adress-info-list">
            <div class="adress-info-items">
              <div class="adress-info-item">
                <div class="adress-info-item-picture">
                  <img src="~@/assets/kort_closed.svg" class="adress-info-item-img adress-info-item-img_closed">
                </div>
                <span class="adress-info-item-text">Закрытый корт:</span>
                <span class="adress-info-item-number">3</span>
              </div>
              <div class="adress-info-item">
                <div class="adress-info-item-picture">
                  <img src="~@/assets/kort_open.svg" class="adress-info-item-img">
                </div>
                <span class="adress-info-item-text">Открытый корт:</span>
                <span class="adress-info-item-number">6</span>
              </div>
              <div class="adress-info-item">
                <div class="adress-info-item-picture">
                  <img src="~@/assets/grunt.svg" class="adress-info-item-img">
                </div>
                <span class="adress-info-item-text">Покрытие:</span>
                <span class="adress-info-item-number">грунт</span>
              </div>
            </div>
            <div class="adress-info-place">
              <p class="adress-info-place-text">ул. Большая<br> Тихоновская, д. 14</p>
              <div class="adress-info-metro">
                <img src='~@/assets/baloon.png' class="adress-info-metro-img">
                <img src='~@/assets/pin.svg' class="adress-info-metro-img adress-info-metro-img_pin">
                <span class="adress-info-metro-text">Сокольники</span>
              </div>
            </div>
          </div>
          <div v-if="activetab === 2" class="adress-info-list">
            <div class="adress-info-items">
              <div class="adress-info-item">
                <div class="adress-info-item-picture">
                  <img src="~@/assets/kort_closed.svg" class="adress-info-item-img adress-info-item-img_closed">
                </div>
                <span class="adress-info-item-text">Закрытый корт:</span>
                <span class="adress-info-item-number">-</span>
              </div>
              <div class="adress-info-item">
                <div class="adress-info-item-picture">
                  <img src="~@/assets/kort_open.svg" class="adress-info-item-img">
                </div>
                <span class="adress-info-item-text">Открытый корт:</span>
                <span class="adress-info-item-number">-</span>
              </div>
              <div class="adress-info-item">
                <div class="adress-info-item-picture">
                  <img src="~@/assets/grunt.svg" class="adress-info-item-img">
                </div>
                <span class="adress-info-item-text">Покрытие:</span>
                <span class="adress-info-item-number">-</span>
              </div>
            </div>
            <div class="adress-info-place">
              <p class="adress-info-place-text">ул. Сокольнический<br> Вал, 28с1</p>
              <div class="adress-info-metro">
                <img src='~@/assets/baloon.png' class="adress-info-metro-img">
                <img src='~@/assets/pin.svg' class="adress-info-metro-img adress-info-metro-img_pin">
                <span class="adress-info-metro-text">Сокольники</span>
              </div>
            </div>
          </div>
          <div @click='showTryAdress' class="button button_green adress-info-application">
            <span>Оставьте заявку на пробное занятие!</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="activetab === 1" class="adress-map">
      <yandex-map
      :coords="[55.8059,37.6854]"
      zoom=16
      style="width: 100%; height: 100%;"
      >
        <ymap-marker
          marker-id='stadium2'
          marker-type="placemark"
          :coords="coords2"
          :icon="{
              layout: 'default#image',
              imageHref: 'img/pin.svg',
              imageSize: [300, 170],
              imageOffset: [-150, -170]
          }">
        </ymap-marker>
        <ymap-marker
          marker-id='stadium1'
          marker-type="placemark"
          :coords="coords1"
          :icon="{
              layout: 'default#image',
              imageHref: 'img/pin.svg',
              imageSize: [300, 170],
              imageOffset: [-150, -170]
          }">
        </ymap-marker>
      </yandex-map>
    </div>
    <div v-if="activetab === 2" class="adress-map">
      <yandex-map
      :coords="[55.7911, 37.6671]"
      zoom=16
      style="width: 100%; height: 100%;"
      >
        <ymap-marker
          marker-id='stadium2'
          marker-type="placemark"
          :coords="coords2"
          :icon="{
              layout: 'default#image',
              imageHref: 'img/pin.svg',
              imageSize: [300, 170],
              imageOffset: [-150, -170]
          }">
        </ymap-marker>
        <ymap-marker
          marker-id='stadium1'
          marker-type="placemark"
          :coords="coords1"
          :icon="{
              layout: 'default#image',
              imageHref: 'img/pin.svg',
              imageSize: [300, 170],
              imageOffset: [-150, -170]
          }">
        </ymap-marker>
      </yandex-map>
    </div>
    <modal :width="450" :height='"auto"' name='tryadress' @before-open="beforeOpen" @before-close="beforeClose">
      <div class="form">
        <div slot="top-right">
          <button class="close" @click="$modal.hide('tryadress')">
            <div class="close-line close-line_1"></div>
            <div class="close-line close-line_2"></div>
          </button>
        </div>
        <FeedbackModal formTheme='Адреса. Пробное занятие' formTitle='Оставьте заявку на пробное занятие'></FeedbackModal>
      </div>
    </modal>
  </div>
</template>

<script>
import FeedbackModal from '../shared/FeedbackModal'

export default {
  components: {
    FeedbackModal
  },
  data () {
    return {
      activetab: 1,
      stadiumHeading: 'Cтадион «Связист»',
      coords1: [55.7911, 37.6671],
      coords2: [55.8061, 37.6855]
    }
  },
  methods: {
    showTryAdress () {
      this.$modal.show('tryadress')
      this.$metrika.reachGoal('adress_modalform_open')
      this.$metrika.reachGoal('forms_open')
      this.$store.commit('SET_MODAL_TYPE', 'adress_modalform_send')
    },
    hideTryAdress () {
      this.$modal.hide('tryadress')
    },
    beforeOpen (event) {
      document.body.classList.add('body_modalopen')
    },
    beforeClose (event) {
      document.body.classList.remove('body_modalopen')
      this.$store.commit('SET_MODAL_TYPE', '')
    },
    changeHeading (tab) {
      this.activetab = tab
      if (tab === 1) {
        this.stadiumHeading = 'Cтадион «Связист»'
      } else if (tab === 2) {
        this.stadiumHeading = 'Другой стадион'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .adress {
    height: 100%;
    display: flex;
    overflow: hidden;
    @include phones {
      flex-direction: column;
    }
    &-info {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      padding-right: rem(125px);
      height: 100%;
      @include bignotebooks {
        padding-right: rem(80px);
      }
      @include notebooks {
        padding-left: rem(20px);
        padding-right: rem(40px);
      }
      @include tablets {
        width: 58.6%;
        padding-right: 0;
        padding: 0 rem(30px);
      }
      @include phones {
        width: 100%;
      }
      &-wrap {
        display: flex;
        flex-direction: column;
        @include phones {
          flex-direction: column-reverse;
        }
      }
      &-stadiums {
        margin-bottom: rem(40px);
        @include vpheight {
          margin-bottom: rem(20px);
        }
        &-heading {
          @include circe(light);
          font-size: rem(25px);
          line-height: rem(47px);
        }
        &-buttons {
          display: flex;
        }
        &-button {
          height: 80px;
          background: #f5f6fa;
          border: 1px solid #d0d0d2;
          margin-bottom: rem(8px);
          width: 50%;
          &:last-of-type {
            margin-left: rem(8px);
            margin-bottom: 0;
          }
          &:hover {
            span {
              color: black;
            }
          }
          &_active {
            border: 1px solid #23e54c;
            box-shadow: 0px 0px 5.5px 5.5px rgba(35, 229, 76, 0.14) inset;
          }
          span {
            @include futura(heavy);
            text-transform: uppercase;
          }
        }
      }
      &-list {
        display: flex;
        margin-bottom: rem(20px);
        @include tablets {
          flex-direction: column;
        }
        @include phones {
          margin-top: rem(20px);
        }
      }
      &-items {
        margin-right: 20%;
      }
      &-place {
        &-text {
          color: #333333;
          font-size: rem(20px);
          line-height: rem(30px);
          @include circe(light);
          margin-bottom: rem(20px);
          br {
            @include tablets {
              display: none;
            }
          }
        }
      }
      &-metro {
        &-text {
          @include futura(demi);
          font-size: rem(13px);
          line-height: rem(26px);
          color: #0d227d;
          text-transform: uppercase;
          @include tablets {
            font-size: rem(20px);
          }
          @include phones {
            font-size: rem(16px);
          }
        }
        &-img {
          width: rem(24px);
          height: rem(17px);
          margin-right: rem(14px);
          &_pin {
            display: none;
          }
        }
      }
      &-item {
        display: flex;
        align-items: flex-end;
        margin-bottom: rem(20px);
        &-picture {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          width: rem(37px);
          height: rem(27px);
        }
        &-text {
          @include circe(bold);
          font-size: rem(15px);
          margin-right: rem(5px);
          @include tablets {
            margin-left: rem(10px);
            font-size: rem(20px);
          }
          @include phones {
            font-size: rem(16px);
          }
        }
        &-number {
          @include circe(light);
          font-size: rem(15px);
          @include tablets {
            font-size: rem(20px);
          }
          @include phones {
            font-size: rem(16px);
          }
        }
        &-img {
          width: rem(24px);
          height: rem(17px);
          &_closed {
            width: rem(37px);
            height: rem(27px);
          }
        }
      }
      &-application {
        height: 80px;
        span {
          color: white;
          @include futura(heavy);
          text-transform: uppercase;
        }
      }
      &-content {
        width: rem(465px);
      }
      &-heading {
        @include futura(heavy);
        font-size: rem(45px);
        line-height: rem(50px);
        margin-bottom: rem(45px);
        @include tablets {
          margin-bottom: rem(25px);
          margin-top: rem(25px);
        }
        @include vpheight {
          margin-top: rem(20px);
          margin-bottom: rem(40px);
        }
      }
      &-text {
        @include circe(light);
        font-size: rem(15px);
        line-height: rem(30px);
        margin-bottom: rem(35px);
        @include tablets {
          margin-bottom: rem(20px);
        }
        @include vpheight {
          margin-bottom: rem(25px);
        }
        &:last-of-type {
          margin-bottom: rem(45px);
          @include vpheight {
            margin-bottom: rem(15px);
          }
        }
      }
    }
    &-map {
      width: 50%;
      background: #1c358d;
      &_active {
        display: block;
      }
      @include tablets {
        width: 41.4%;
      }
      @include phones {
        width: 100%;
        height: rem(395px);
      }
    }
  }
</style>
