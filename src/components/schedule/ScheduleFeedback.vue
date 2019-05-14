<template>
  <div class="schedule-feedback">
    <div class="container">
      <div class="schedule-feedback-content">
        <h2 class="schedule-feedback-heading">Включайся в игру!</h2>
        <p class="schedule-feedback-text">Оставьте заявку на первое посещение академии KORT 12 с нашей командой или закажите обратный звонок, чтобы уточнить все интересующие вас вопросы. Мы свяжемся с вами в ближайшее время. </p>
        <div class="schedule-feedback-buttons">
          <div @click='showTrySchedule' class="button button_green schedule-feedback-button">
            <span class="schedule-feedback-button-text">Пробное занятие</span>
          </div>
          <div @click='showFeedback' class="button button_hollow schedule-feedback-button">
            <span class="schedule-feedback-button-text">обратный звонок</span>
          </div>
        </div>
      </div>
    </div>
    <modal :width="450" :height='"auto"' name='tryschedule' @before-open="beforeOpen" @before-close="beforeClose">
      <div class="form">
        <div slot="top-right">
          <button class="close" @click="$modal.hide('tryschedule')">
            <div class="close-line close-line_1"></div>
            <div class="close-line close-line_2"></div>
          </button>
        </div>
        <FeedbackModal formTheme='Расписание Пробное занятие' formTitle='Запишитесь на пробное занятие со скидкой'></FeedbackModal>
      </div>
    </modal>
    <modal :width="450" :height='"auto"' name='feedback' @before-open="beforeOpen" @before-close="beforeClose">
      <div class="form">
        <div slot="top-right">
          <button class="close" @click="$modal.hide('feedback')">
            <div class="close-line close-line_1"></div>
            <div class="close-line close-line_2"></div>
          </button>
        </div>
        <FeedbackModal formTheme='Расписание Обратный звонок' formTitle='Закажите обратный звонок'></FeedbackModal>
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
    showTrySchedule () {
      this.$metrika.reachGoal('rasp_modalform_zan_open')
      this.$metrika.reachGoal('forms_open')
      this.$modal.show('tryschedule')
      this.$store.commit('SET_MODAL_TYPE', 'rasp_modalform_zan_send')
    },
    hideTrySchedule () {
      this.$modal.hide('tryschedule')
    },
    showFeedback () {
      this.$metrika.reachGoal('rasp_modalform_call_open')
      this.$metrika.reachGoal('forms_open')
      this.$modal.show('feedback')
      this.$store.commit('SET_MODAL_TYPE', 'rasp_modalform_call_send')
    },
    hideFeedback () {
      this.$modal.hide('feedback')
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
  .schedule {
    &-feedback {
      height: rem(620px);
      background: url(~@/assets/schedule_feedback_bg.jpg) center center no-repeat;
      padding-top: rem(110px);
      @include mac {
        height: rem(500px);
        padding-top: rem(55px);
        background: url(~@/assets/schedule_feedback_bg_uhd.jpg) center center no-repeat;
      }
      @include base {
        height: rem(620px);
        background: url(~@/assets/schedule_feedback_bg.jpg) center center no-repeat;
        padding-top: rem(110px);
      }
      @include tablets {
        background: url(~@/assets/schedule_feedback_bg.jpg) top center no-repeat;
      }
      &-content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &-heading {
        color: white;
        @include circe(light);
        font-size: rem(30px);
        line-height: rem(60px);
      }
      &-text {
        color: white;
        text-align: center;
        width: rem(390px);
        @include circe(light);
        font-size: rem(15px);
        line-height: rem(25px);
        margin-bottom: rem(55px);
        @include phones {
          width: 100%;
        }
      }
      &-buttons {
        display: flex;
        width: rem(475px);
        justify-content: space-between;
        @include phones {
          width: 100%;
          flex-direction: column;
          align-items: center;
        }
      }
      &-button {
        width: rem(229px);
        height: rem(78px);
        margin-bottom: rem(15px);
        &-text {
          @include futura(demi);
          text-transform: uppercase;
          font-size: rem(15px);
          line-height: rem(26px);
          color: white;
        }
      }
    }
  }
</style>
