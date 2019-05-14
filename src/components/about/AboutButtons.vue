<template>
  <div class="about-buttons">
    <div class="container">
      <h2 class="about-buttons-heading">До встречи на корте!</h2>
      <div class="about-buttons-content">
        <router-link tag='div' to='/coaches' class="button button_hollow about-button">
          <span class="about-button-text">ТРЕНЕРСКИЙ СОСТАВ</span>
        </router-link>
        <router-link tag='div' to='/program/kids' class="button button_hollow about-button">
          <span class="about-button-text">ПРОГРАММЫ ОБУЧЕНИЯ</span>
        </router-link>
        <div @click='showTryAbout' class="button button_green about-button">
          <span class="about-button-text">ПОДАТЬ ЗАЯВКУ</span>
        </div>
      </div>
    </div>
    <modal :width="450" :height='"auto"' name='tryabout' @before-open="beforeOpen" @before-close="beforeClose">
      <div class="form">
        <div slot="top-right">
          <button class="close" @click="$modal.hide('tryabout')">
            <div class="close-line close-line_1"></div>
            <div class="close-line close-line_2"></div>
          </button>
        </div>
        <FeedbackModal formTheme='О компании. Подать заявку' formTitle='Подайте заявку на пробное занятие'></FeedbackModal>
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
    showTryAbout () {
      this.$metrika.reachGoal('about_modalopen_open')
      this.$metrika.reachGoal('forms_open')
      this.$modal.show('tryabout')
      this.$store.commit('SET_MODAL_TYPE', 'about_modalopen_send')
    },
    hideTryAbout () {
      this.$modal.hide('tryabout')
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
  .about {
    &-buttons {
      background: url(~@/assets/about_buttons_bg.png) top center no-repeat;
      @include mac {
        background: url(~@/assets/about_buttons_bg_uhd.jpg) top center no-repeat;
      }
      @include base {
        background: url(~@/assets/about_buttons_bg.png) top center no-repeat;
      }
      @include tablets {
        padding-bottom: rem(50px);
      }
      @include phones {
        background: url(~@/assets/about_buttons_bg_mob.png) top center no-repeat;
      }
      &-heading {
        margin-top: rem(120px);
        align-self: center;
        margin-bottom: rem(60px);
        @include circe(light);
        color: white;
        font-size: rem(30px);
        line-height: rem(60px);
        @include mac {
          margin-top: rem(60px);
        }
        @include base {
          margin-top: rem(120px);
        }
        @include tablets {
          margin-top: rem(90px);
        }
      }
      &-content {
        margin-bottom: rem(160px);
        display: flex;
        justify-content: space-between;
        align-self: center;
        width: 66%;
        @include mac {
          margin-bottom: rem(90px);
        }
        @include base {
          margin-bottom: rem(160px);
        }
        @include tablets {
          margin-bottom: rem(80px);
          flex-direction: column;
          width: 100%;
          align-items: center;
        }
      }
    }

    &-button {
      height: rem(78px);
      padding: 0 rem(50px);
      color: white;
      @include futura(demi);
      font-size: rem(15px);
      line-height: rem(26px);
      @include tablets {
        margin-bottom: rem(20px);
        width: 60%;
      }
      @include phones {
        padding: 0 rem(20px);
      }
    }
  }
</style>
