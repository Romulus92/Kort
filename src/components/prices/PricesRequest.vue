<template>
  <div class="price-request">
    <div class="container">
      <div class="price-request-content">
        <div class="price-request-left">
          <p class="price-request-text">Академия предоставляет аренду современного оборудования, если у вас нет собственной ракетки или мячей, поэтому вы можете рассчитывать на полный комплекс оказываемых услуг.</p>
          <div @click='showTryPrice' class="button button_bluetrans price-request-button">
            <span class="price-request-button-text">подать заявку</span>
          </div>
        </div>
        <div class="price-request-right">
          <p class="price-request-text">Точную стоимость обучения, аренды кортов и индивидуальных занятий с профессиональным тренером поможет определить наш администратор по телефону.</p>
          <span class="price-request-phone">8915 104 4141</span>
        </div>
      </div>
    </div>
    <modal :width="450" :height='"auto"' name='tryprice' @before-open="beforeOpen" @before-close="beforeClose">
      <div class="form">
        <div slot="top-right">
          <button class="close" @click="$modal.hide('tryprice')">
            <div class="close-line close-line_1"></div>
            <div class="close-line close-line_2"></div>
          </button>
        </div>
        <FeedbackModal formTheme='Цены. Заявка на пробное занятие' formTitle='Оставьте заявку на пробное занятие'></FeedbackModal>
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
  methods: {
    showTryPrice () {
      this.$metrika.reachGoal('prices_modalform_open')
      this.$metrika.reachGoal('forms_open')
      this.$modal.show('tryprice')
      this.$store.commit('SET_MODAL_TYPE', 'prices_modalform_send')
    },
    hideTryPrice () {
      this.$modal.hide('tryprice')
    },
    beforeOpen (event) {
      document.body.classList.add('body_modalopen')
    },
    beforeClose (event) {
      document.body.classList.remove('body_modalopen')
      this.$store.commit('SET_MODAL_TYPE', '')
    }
  }
}
</script>

<style lang="scss" scoped>
  .price {
    &-request {
      margin-bottom: rem(200px);
      @include phones {
        margin-bottom: rem(70px);
      }
      &-button {
        width: rem(229px);
        height: rem(78px);
        @include tablets {
          z-index: 2;
        }
        &-text {
          color: #001d7f;
          @include futura(demi);
          font-size: rem(15px);
          text-transform: uppercase;
        }
      }
      &-text {
        @include circe(light);
        font-size: rem(15px);
        line-height: rem(30px);
      }
      &-content {
        display: flex;
        justify-content: space-between;
        @include phones {
          flex-direction: column-reverse;
          padding: 0 rem(20px);
        }
      }
      &-left {
        width: rem(535px);
        height: rem(322px);
        padding: rem(45px) rem(70px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 4px solid #23e54c;
        background: url(~@/assets/prices_request_bg.jpg) right bottom no-repeat;
        @include tablets {
          width: 68%;
          padding: rem(30px) rem(55px);
        }
        @include phones {
          width: 100%;
          background: url(~@/assets/prices_request_bg_mob.jpg) right bottom no-repeat;
          background-size: 27%;
          padding: rem(35px) rem(15px);
        }
        @include iphones {
          background: none;
          height: rem(350px);
        }
      }
      &-right {
        padding-top: rem(45px);
        width: rem(443px);
        padding-right: rem(85px);
        @include tablets {
          width: 32%;
          padding-top: rem(25px);
          padding-left: 0;
          margin-left: rem(50px);
          padding-right: 0;
        }
        @include phones {
          width: 100%;
          margin-left: 0;
        }
      }
      &-phone {
        @include circe(light);
        font-size: rem(30px);
        line-height: rem(60px);
        color: #001d7f;
      }
    }
  }
</style>
