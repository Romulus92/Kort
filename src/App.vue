<template>
  <div
    class='app'
    @click='closeBurger($event)'
    :class='[{app_folded: this.$store.state.isFolded}, {app_menuopen: this.$store.state.menuOpen} ]'
  >
    <transition name='load' mode="out-in">
      <div class="kort__loader" v-if="loading === true" key='loader'>
        <img src="~@/assets/preloader.gif" class="kort__loader-img">
      </div>
    </transition>
    <div
      class='kort__grid'
      :class="[[this.$store.state.page === '404' ? 'kort__grid_404' : '']]"
      key='grid'
    >
      <Menu></Menu>
      <Header></Header>
      <div
        class="kort__content"
        :class='{kort__content_folded: this.$store.state.isFolded}'
      >
        <transition
          name="content-trans"
          mode="out-in"
          v-on:after-enter="afterEnter"
          v-on:before-enter="beforeEnter"
          v-on:before-leave='beforeLeave'
        >
          <router-view></router-view>
        </transition>
      </div>
      <Footer></Footer>
    </div>
    <modal
      :width="450"
      :height='"auto"'
      name='trymenu'
    >
      <div class="form">
        <div slot="top-right">
          <button
            class="close"
            @click="$modal.hide('trymenu')"
          >
            <div class="close-line close-line_1"></div>
            <div class="close-line close-line_2"></div>
          </button>
        </div>
        <FeedbackModal formTheme='Меню. Пробное занятие' formTitle='Оставьте заявку на пробное занятие!'></FeedbackModal>
      </div>
    </modal>
  </div>
</template>

<script>
import Menu from './components/shared/Menu.vue'
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
import FeedbackModal from './components/shared/FeedbackModal'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Menu,
    FeedbackModal
  },
  data () {
    return {
      scrolled: false
    }
  },
  computed: {
    ...mapState(['isFolded', 'menuOpen', 'modalOpen', 'page', 'loading'])
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 0 && this.isFolded) {
        document.body.classList.add('body_folded')
      }
    },
    closeBurger (e) {
      if (
        !e.target.classList.contains('menu_open') &&
        !e.target.classList.contains('kort__head_burger') &&
        !e.target.classList.contains('kort__head_burger-content') &&
        !e.target.classList.contains('kort__head_burger_line')
      ) {
        this.$store.commit('CLOSE_MENU')
      }
    },
    showTryMenu () {
      this.$modal.show('trymenu')
    },
    hideTryMenu () {
      this.$modal.hide('trymenu')
    },
    beforeEnter (el) {
      if (this.isFolded) {
        document.querySelector('.kort__grid').classList.add('kort__grid_folded')
        document.querySelector('.kort__info').classList.add('kort__info_folded')
      } else {
        document.querySelector('.kort__grid').classList.remove('kort__grid_folded')
      }
    },
    afterEnter (el) {
      if (this.isFolded) {
        document.querySelector('.kort__grid').classList.add('kort__grid_folded')
        document.querySelector('.kort__header').classList.add('kort__header_sticky')
      } else {
        document.querySelector('.kort__grid').classList.remove('kort__grid_folded')
        document.querySelector('.kort__header').classList.remove('kort__header_sticky')
      }
    },
    beforeLeave (el) {
      if (!this.isFolded) {
        document.querySelector('.kort__info').classList.remove('kort__info_folded')
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted () {
    if (this.isFolded) {
      document.querySelector('.kort__grid').classList.add('kort__grid_folded')
      document.querySelector('.kort__header').classList.add('kort__header_sticky')
      document.querySelector('.kort__info').classList.add('kort__info_folded')
    }
    window.addEventListener('load', () => {
      this.$store.commit('LOADING_END')
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang='scss'>
* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100vh;
  position: relative;
  margin: 0;
}

body {
  min-height: 100%;
}

textarea {
  resize: none;
}

.body_folded {
  height: auto;
}

.body_menuopen {
  overflow: hidden;
  .kort__camp {
    pointer-events: none;
  }
  .kort__footer {
    pointer-events: none;
  }
  .kort__content {
    pointer-events: none;
  }
}

.body_modalopen {
  overflow: hidden;
}

h1 {
  margin: 0;
}

p {
  margin: 0;
}

*:focus {
  outline: none;
}

a {
  text-decoration: none;
  color: initial;
}

a:visited {
  color: black;
}

.container {
  position: relative;
  width: 100%;
  max-width: rem(1170px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @include bignotebooks {
    width: 95%;
  }
}

h2 {
  box-sizing: border-box;
}

@keyframes fadeInOut {
  0% {
    opacity: 100%;
  }

  20% {
    opacity: 0%;
  }

  100% {
    opacity: 100%;
  }
}

html {
  font-size: 16px;
  @include ultrawide {
    font-size: 28px;
  }
  @include mac {
    font-size: 20px;
  }
  @include base {
    font-size: 16px;
  }
  @include vpheight {
    font-size: 14px;
  }
  @include vpheightavg {
    font-size: 13px;
  }
  @include notebooks {
    font-size: 15px;
  }
  @include tablets {
    font-size: 16px;
  }
  @include phones {
    font-size: 16px;
  }
}

.app {
  width: 100%;
  height: 100%;
}

//content transition

/* .content-trans {
  &-enter,
  &-leave-to {
    transform: translateY(-200%);
    opacity: 0;
    @include phones {
      transform: translateY(0);
    }
  }

  &-enter-to,
  &-leave {
    transform: translateY(0%);
    opacity: 1;
  }

  &-enter-active,
  &-leave-active {
    transition: all 1s ease-in-out;
  }
} */

.content-trans {
  &-enter {
    opacity: 0;
  }

  &-enter-to {
    opacity: 1;
  }

  &-leave-to {
    opacity: 0;
  }

  &-leave {
    opacity: 1;
  }

  &-enter-active,
  &-leave-active {
    transition: all 1s ease-in-out;
  }
}

.load {
  &-enter {
    opacity: 0;
  }

  &-enter-to {
    opacity: 1;
  }

  &-leave-to {
    opacity: 0;
  }

  &-leave {
    opacity: 1;
  }

  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease-in-out;
  }
}

.button {
  background: none;
  border-radius: 3px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: rem(15px);
  position: relative;
  cursor: pointer;

  span {
    transition: color 0.5s ease-in-out;
    z-index: 2;
    text-align: center;
  }
  &:hover {
    span {
      color: white;
    }
  }

  &:after {
    position: absolute;
    content: "";
    height: 0;
    left: 0;
    top: 0;
    width: 100%;
    transition: height 0.5s ease-in-out;
  }

  &_deepblue {
    background: #0d227d;
    border: none;
    transition: all 0.5s ease-in-out;
    span.error-button-text {
      color: white;
    }
    &:hover {
      box-shadow: inset 0px 0px 10px 3px rgba(255, 255, 255, 0.4);
    }
  }

  &_blue {
    &:after {
      background: #0d227d;
    }
    &:hover {
      &:after {
        height: 100%;
      }
    }
  }

  &_trans {
    border: 1px solid #d0d0d2;
    &:after {
      background: #03de50;
    }
    &:hover {
      &:after {
        height: 100%;
      }
    }
  }

  &_bluetrans {
    border: 1px solid #6078dd;
    &:after {
      background: #6078dd;
    }
    &:hover {
      &:after {
        height: 100%;
      }
    }
  }

  &_hollow {
    border: 1px solid #6078dd;
    &:after {
      background: #314390;
      height: 100%;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
    &:hover {
      &:after {
        opacity: 1;
      }
    }
  }

  &_green {
    background: #23e54c;
    border: 1px solid #02b541;
    &:after {
      background: #02b541;
      height: 100%;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
    &:hover {
      &:after {
        opacity: 1;
      }
    }
  }

  &_grey {
    background: #f5f6fa;
    border: 1px solid #d0d0d2;
    &:after {
      background: #f5f6fa;
    }
    &:hover {
      box-shadow: inset 0px 0px 10px 3px rgba(13, 34, 125, 0.14);
      &:after {
        opacity: 1;
      }
    }
    &:hover {
      span {
        color: black;
      }
    }
  }
}

.response-message {
  @include circe(light);
  font-size: rem(14px);
  line-height: rem(23px);
  text-align: center;
  margin-bottom: rem(20px);
  @include phones {
    width: 90%;
  }
  &_success {
    color: #02b541;
  }
  &_failure {
    color: #ef5350;
  }
}

.kort {
  &__loader {
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
  &__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    /* &_folded {
      margin-bottom: rem(75px);
    } */
  }
  &__grid {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    @include phones {
      height: auto;
    }
    &_folded {
      overflow: visible;
    }
    &_404 {
      height: 100vh;
      @include tablets {
        .kort__header {
          height: 6%;
        }
        .kort__content {
          height: 94%;
        }
      }
      @include phones {
        .kort__header {
          height: 12%;
        }
        .kort__content {
          height: 88%;
        }
      }
    }
  }

  &__lead {
    color: #41454e;
    @include futura(book);
    font-size: rem(30px);
    margin-left: rem(37px);
    position: relative;
    z-index: 2;

    /* @include mac {
      font-size: rem(42px);
    } */

    &_white {
      color: white;
    }

    &_bottom {
      display: flex;
      align-items: flex-end;
    }
  }
}

.card {
  box-sizing: border-box;
  display: flex;
  border-radius: rem(3px);
  position: relative;
  @include phones {
    width: 100%;
    margin-bottom: 8px;
  }
  &__bg {
    position: absolute;
    height: 100%;
    width: 100%;
    transition: transform 1.5s ease-in-out;
  }
  &_clickable {
    cursor: pointer;
    overflow: hidden;
  }
  &_hover {
    &:hover {
      .card__bg {
        transform: scale(1.1);
      }
    }
  }
}

.baloon {
  &__heading {
    color: #0d227d;
    @include futura(demi);
    font-size: rem(13px);
    line-height: rem(26px);
    text-transform: uppercase;
  }
  &__name {
    @include circe(bold);
    font-size: rem(15px);
    line-height: rem(26px);
  }
  &__text {
    @include circe(light);
    font-size: rem(15px);
    line-height: rem(26px);
  }
}

.ymaps-2-1-73-balloon__layout {
  border: 1px solid #57f444;
}
.ymaps-2-1-73-balloon__tail:after {
  border: 1px solid #57f444;
}
.ymaps-2-1-73-ground-pane {
  filter: grayscale(100%);
}

.error {
  &-box {
    margin-top: rem(10px);
    margin-bottom: rem(10px);
    width: rem(401px);
    display: flex;
    flex-direction: column;
    align-items: center;
    @include phones {
      width: 100%;
    }
  }
  &-item {
    color: #ef5350;
    @include circe(light);
    font-size: rem(14px);
    line-height: rem(23px);
    text-align: center;
  }
}

.close {
  position: absolute;
  right: 22px;
  top: 22px;
  width: 22px;
  height: 22px;
  border: none;
  background: none;
  cursor: pointer;
  &-line {
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    background: #172b82;
    &_1 {
      right: 10px;
      transform: rotate(45deg);
    }
    &_2 {
      right: 10px;
      transform: rotate(-45deg);
    }
  }
}

.form {
  padding: rem(40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f6fa;
  position: relative;
  &-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }
  &-star {
    position: absolute;
    right: 20px;
    top: 27px;
    color: #9a9393;
    font-weight: 200;
    text-align: center;
    font-size: rem(16px);
    @include iphones {
      top: 21px;
    }
  }
  @include phones {
    padding: rem(20px);
  }
}

.v--modal {
  width: rem(450px) !important;
  @include phones {
    width: 85% !important;
    margin: 0 auto;
  }
}

.svg-icon {
  fill: currentColor;
  height: 24px;
  width: 24px;

  &--logo {
    margin-left: 7.3%;
    fill: white;
    min-height: rem(47px);
    min-width: rem(193px);
    height: rem(47px);
    width: rem(193px);
    margin-bottom: rem(8px);
    @include macbookair {
      min-height: rem(37px);
      min-width: rem(153px);
      height: rem(37px);
      width: rem(153px);
      margin-left: 0;
    }
    @include tablets {
      min-height: rem(25px);
      min-width: rem(115px);
      height: rem(25px);
      width: rem(115px);
    }
    @include phones {
      min-height: rem(24px);
      min-width: rem(96px);
      height: rem(24px);
      width: rem(96px);
      margin-left: 10%;
    }
  }

  &--rechi {
    width: rem(95px);
    height: rem(37px);
    margin-right: rem(17px);
    fill: #0d227d;
    /* @include mac {
      width: rem(150px);
      height: rem(55px);
    } */
    @include phones {
      color: white;
    }
  }

  &--inst {
    width: rem(19px);
    height: rem(19px);
    fill: #41464e;
    transition: fill 0.3s ease-in-out;
    cursor: pointer;
    /* @include mac {
      width: rem(28px);
      height: rem(28px);
    } */
    &:hover {
      fill: #02b541;
    }
    @include phones {
      fill: white;
    }
  }

  &--vk {
    width: rem(19px);
    height: rem(19px);
    fill: #41464e;
    transition: fill 0.3s ease-in-out;
    cursor: pointer;
    /* @include mac {
      width: rem(36px);
      height: rem(36px);
    } */
    &:hover {
      fill: #02b541;
    }
    @include phones {
      fill: white;
    }
  }

  &--hat {
    fill: #0d227d;
    width: rem(36px);
    height: rem(24px);
    margin-right: rem(10px);
  }
}

.camp .prog-form {
  .prog-form-content {
    @include phones {
      background: none;
    }
  }
  .prog-form-heading {
    @include phones {
      margin-bottom: rem(35px);
      text-align: left;
      width: 90%;
      font-size: rem(25px);
    }
  }
  .prog-form-body {
    @include phones {
      background: #f5f6fa;
      padding: rem(25px) 0;
    }
  }
  .prog-form-input-group {
    @include phones {
      margin-bottom: 0;
    }
  }
  .prog-form-button-wrap {
    @include phones {
      width: 100%;
    }
  }
}
</style>
