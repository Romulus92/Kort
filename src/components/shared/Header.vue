<template>
  <div
    :class="[{kort__header_folded: isFolded}, [page === 'program' ? 'kort__header_prog' : ''], [page === 'about' ? 'kort__header_prog' : ''], [page === '404' ? 'kort__header_404' : ''], [page === 'contacts' ? 'kort__header_prog' : '']]"
    class="kort__header"
  >
    <div
      class="card kort__head"
      :class="{kort__head_menuopen: menuOpen}"
    >
      <div class="kort__head-bg"></div>
      <div class="kort__head-content">
        <div
          @click="toggleMenu"
          class="kort__head_burger"
        >
          <div class="kort__head_burger-content">
            <div
              class="kort__head_burger_line"
              :class="[{kort__head_burger_line_menuclosed: !menuOpen}, {kort__head_burger_line_menuopen: menuOpen}]"
            ></div>
            <div
              class="kort__head_burger_line"
              :class="[{kort__head_burger_line_menuclosed: !menuOpen}, {kort__head_burger_line_menuopen: menuOpen}]"
            ></div>
            <div
              class="kort__head_burger_line"
              :class="[{kort__head_burger_line_menuclosed: !menuOpen}, {kort__head_burger_line_menuopen: menuOpen}]"
            ></div>
          </div>
        </div>
        <div class="kort__head-wrap">
          <router-link
            class="kort__head-logo"
            to="/"
          >
            <!-- <svg-icon title="logo" name="logo"></svg-icon> -->
            <svg
              class='svg-icon--logo'
              version="1.1"
              id="Слой_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 1329.1 318"
              style="enable-background:new 0 0 1329.1 318;"
              xml:space="preserve"
            >
              <path
                class="st0"
                d="M407.8,197.7c6.3-7.5,11.9-15.5,16.6-24c4.7-8.5,8.4-17.4,11.1-26.5c2.6-9.1,4.1-18.5,4.2-27.8
                c0.1-9.2-1.4-18.4-4.8-26.5c-3.3-8.1-8.6-15-15.4-19.8c-3.4-2.4-7.2-4.3-11.2-5.6c-2-0.7-4.1-1.2-6.2-1.7c-2.1-0.5-4.2-0.7-6.3-0.9
                c-8.3-0.6-16.2,1.3-23.6,5.7c-1.8,1.1-3.6,2.3-5.4,3.7c-1.8,1.3-3.5,2.8-5.2,4.3c-3.4,3.1-6.6,6.5-9.8,10.1
                c-3.2,3.6-6.2,7.4-9.3,11.3c-3.1,3.9-6.1,7.9-9.1,11.9c-6.1,8.1-12.2,16.2-18.9,24.1c-3.4,3.9-6.9,7.8-10.6,11.4
                c-3.7,3.7-7.6,7.2-11.8,10.4c-4.2,3.2-8.7,6.1-13.4,8.5c-4.8,2.4-10,4.3-15.5,5c-2.7,0.4-5.6,0.4-8.3,0.1c-2.8-0.3-5.5-1-8.1-2
                c-4.2-1.7-8-4.1-11.2-7c17.6,43.1,59.9,73.5,109.3,73.5c6.5,0,12.9-0.5,19.2-1.6C380.5,224.5,395.6,212.2,407.8,197.7z"
              />
              <path
                class="st0"
                d="M344.7,0c-65.2,0-118,52.8-118,118c0,12,1.8,23.6,5.1,34.5c1.5,1.6,3,3.1,4.7,4.5c3.7,3.1,7.7,5.6,12.1,7
                c4.3,1.4,8.9,1.5,13.4,0.6c4.5-0.9,8.8-2.8,12.9-5.1c4.1-2.4,8-5.3,11.6-8.4c3.6-3.2,7-6.6,10.2-10.3c3.2-3.7,6.2-7.6,9.1-11.5
                c5.8-8,11-16.4,16.4-25c2.7-4.3,5.4-8.6,8.2-12.9c2.9-4.3,5.8-8.5,9-12.7c1.6-2.1,3.3-4.2,5-6.2c1.8-2,3.6-4,5.5-6
                c3.9-3.9,8.2-7.6,13.1-10.7c4.9-3.1,10.4-5.6,16.3-7.1c2.9-0.8,5.9-1.2,8.9-1.5c3-0.2,6-0.3,8.9,0c5.9,0.5,11.5,1.8,17,3.7
                c5.5,2,10.8,4.8,15.5,8.2c9.6,7.1,16.6,17.1,20.5,27.8c2,5.3,3.3,10.9,4,16.4c0.8,5.5,0.9,11,0.7,16.5c-0.6,10.9-2.8,21.5-6.4,31.6
                c-3.5,10-8.3,19.5-14.1,28.3c-5.8,8.8-12.5,16.9-19.8,24.2c-11.8,11.5-25.2,21.1-39.7,28.3c50.6-13.3,87.9-59.4,87.9-114.1
                C462.7,52.8,409.9,0,344.7,0z"
              />
              <ellipse
                class="st1"
                cx="345.5"
                cy="310.9"
                rx="67"
                ry="7.3"
              />
              <path
                class="st0"
                d="M131.3,318l-67-103.1V318H0V84.6h64.3V183L126,84.6h74.6l-74.8,113.1L207.6,318H131.3z"
              />
              <path
                class="st0"
                d="M583.5,246.6h-23.3V318h-64.3V84.6H597c50.3,0,86.8,33.8,86.8,82.6c0,28.7-14,52.1-37.1,65.9l46.4,84.9h-71.8
                L583.5,246.6z M560.2,192.4h29.4c18,0,28.3-10.8,28.3-25.4s-10.3-25.3-28.3-25.3h-29.4V192.4z"
              />
              <path
                class="st0"
                d="M915.1,142.5h-63.4V318h-64.6V142.5h-63.4V84.6h191.4V142.5z"
              />
              <g>
                <g>
                  <path
                    class="st0"
                    d="M1111.4,84.7V318h-62.9V137.6h-34.6V84.7H1111.4z"
                  />
                  <path
                    class="st0"
                    d="M1329.1,262.7V318h-173.6v-14.2c93.9-110.7,106.8-128.6,106.8-148.7c0-12.7-8.3-21.1-20.3-21.1
                    c-13.1,0-21.1,8.8-21.1,22.9v4.5h-61.7v-4.3c0-47.2,30.9-78.4,82-78.4c49.5,0,83.7,30.4,83.7,74.2c0,29.4-10.9,51.9-60.8,109.7
                    H1329.1z"
                  />
                </g>
              </g>
            </svg>
          </router-link>
          <div class="kort__head-heading">
            <router-link
              tag="span"
              to="/about"
              class="kort__head-heading-text"
            >Академия тенниса</router-link>
          </div>
          <div
            @click="showTryHeader"
            class="button button_hollow kort__head-button"
          >
            <span class="kort__head-button-text">Пробное занятие</span>
          </div>
        </div>
      </div>
    </div>
    <router-link
      tag="div"
      to="/camp"
      :class="[{kort__camp_folded: isFolded},[page === 'program' ? 'kort__camp_prog' : ''], [page === 'about' ? 'kort__camp_about' : ''], [page === 'coaches' ? 'kort__camp_coach' : ''], [page === 'camp' ? 'kort__camp_summer' : ''], [page === 'prices' ? 'kort__camp_prices' : ''], [page === 'schedule' ? 'kort__camp_schedule' : ''], [page === 'adress' ? 'kort__camp_adress' : ''], [page === 'contacts' ? 'kort__camp_contacts' : '']]"
      class="card card_clickable kort__camp card_hover"
    >
      <div class="card__bg kort__camp-bg"></div>
      <transition name="back-button">
        <router-link
          v-if="isFolded"
          to="/"
          class="kort__back"
        >
          <span class="kort__back-text">назад</span>
          <div class="kort__back-arrow"></div>
        </router-link>
      </transition>
      <h2
        :class="{kort__camp_heading_folded: isFolded}"
        class="kort__camp_heading"
      >{{ campHeading }}</h2>
    </router-link>
    <modal
      :width="450"
      :height='"auto"'
      name='tryheader'
      @before-close="beforeClose"
    >
      <div class="form">
        <div slot="top-right">
          <button
            class="close"
            @click="$modal.hide('tryheader')"
          >
            <div class="close-line close-line_1"></div>
            <div class="close-line close-line_2"></div>
          </button>
        </div>
        <FeedbackModal formTheme='Меню. Пробное занятие' formTitle='Оставьте заявку на пробное занятие'></FeedbackModal>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FeedbackModal from '../shared/FeedbackModal'

export default {
  name: 'Header',
  computed: {
    ...mapState(['campHeading', 'isFolded', 'page', 'menuOpen'])
  },
  components: {
    FeedbackModal
  },
  methods: {
    toggleMenu () {
      this.$store.commit('TOGGLE_MENU')
    },
    showTryHeader () {
      this.$metrika.reachGoal('menu_modalform_open')
      this.$metrika.reachGoal('forms_open')
      this.$modal.show('tryheader')
      this.$store.commit('SET_MODAL_TYPE', 'menu_modalform_send')
    },
    hideTryHeader () {
      this.$modal.hide('tryheader')
    },
    beforeClose () {
      this.$store.commit('SET_MODAL_TYPE', '')
    }
  },
  watch: {
    menuOpen: function (newVal) {
      var className = 'body_menuopen'
      var htmlClass = 'html_menuopen'
      if (newVal) {
        document.body.classList.add(className)
        document.documentElement.classList.add(htmlClass)
      } else {
        document.body.classList.remove(className)
        document.documentElement.classList.remove(htmlClass)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.kort {
  &__header {
    display: flex;
    margin-bottom: rem(7px);
    height: rem(125px);
    transition: height 1.5s ease-in-out, margin 0.5s ease-in-out;
    /* transition-delay: .5s; */
    z-index: 10;
    /* @include mac {
      height: rem(215px);
    } */
    @include tablets {
      height: rem(193px);
    }
    @include phones {
      position: sticky;
      top: 0;
      left: 0;
      height: rem(57px);
    }

    &_sticky {
      position: sticky;
      top: 0;
      left: 0;
    }

    &_folded {
      margin-bottom: 0;
      height: rem(75px);
      /* @include mac {
        height: rem(115px);
      } */
      @include tablets {
        height: rem(95px);
      }
      @include phones {
        height: rem(57px);
      }
      .card {
        border-radius: 0;
      }
      .kort__back {
        border-radius: 0;
      }
      .kort__camp-bg {
        border-radius: 0;
      }
      .kort__head {
        margin-right: 0;
        width: 50%;
      }
      .kort__camp {
        width: 50%;
        &:hover {
          .kort__camp-bg {
            transform: scale(1);
          }
        }
      }
      .kort__head-wrap {
        @include tablets {
          padding: 1.2% 0;
        }
      }
    }

    &_prog {
      margin-bottom: 0;

      .kort__head {
        margin-right: 0;
      }
    }

    &_404 {
      margin-bottom: 0;
      .kort__camp {
        display: none;
      }
      .kort__head-content {
        width: 50%;
        @include tablets {
          width: 100%;
        }
      }
    }
  }
  &__head {
    background: #0d227d;
    /* padding: 0 rem(64px) 0 0; */
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    flex: 1;
    margin-right: rem(7px);
    position: relative;
    @include phones {
      border-radius: 0;
      margin-right: 0;
      margin-bottom: 0;
      padding: 0;
    }
    &:hover {
      .kort__head-bg {
        opacity: 1;
      }
    }
    &_menuopen {
      &:hover {
        .kort__head-bg {
          opacity: 0;
        }
      }
      .kort__head-heading {
        display: none;
      }
      .kort__head-button {
        display: flex;
        @include tablets {
          display: none;
        }
      }
      .kort__head-wrap {
        justify-content: flex-start;
      }
    }
    &-wrap {
      display: flex;
      align-items: center;
      width: 100%;
      @include tablets {
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        padding: 8% 0;
        justify-content: space-around;
        margin-left: 10%;
      }
      @include phones {
        flex-direction: row;
        padding: 0;
        align-items: center;
        height: initial;
        width: 80%;
        margin-left: 3%;
      }
    }
    &-logo {
      margin-left: 5%;
      margin-right: 10%;
      z-index: 2;
      @include tablets {
        margin-left: 0;
        margin-right: 0;
      }
      @include phones {
        margin-right: rem(20px);
        display: flex;
        align-items: center;
      }
    }
    &-content {
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;
    }
    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      background-image: linear-gradient(
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.12) 70%,
        rgba(255, 255, 255, 0.23922) 100%
      );
    }
    &_burger {
      width: rem(109px);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: #0c1f70;
      justify-content: center;
      align-items: center;
      z-index: 2;
      @include phones {
        width: 14%;
      }
      &:hover {
        .kort__head_burger_line {
          width: 100%;
        }
      }
      &-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: rem(25px);
        width: rem(39px);
        transition: all 0.5s;
        cursor: pointer;
        position: relative;
      }

      &_line {
        height: 1px;
        background: white;
        position: absolute;

        &_menuclosed {
          transition-timing-function: ease-in-out;
          transition-duration: 0.5s;
          transition-property: transform, width, top, opacity;
          transition-delay: 0s, 0s, 0.5s, 0.5s;
          &:nth-of-type(1) {
            width: 100%;
            top: 0;
          }

          &:nth-of-type(2) {
            top: 50%;
            width: 64%;
          }

          &:nth-of-type(3) {
            width: 33%;
            top: 100%;
          }
        }

        &_menuopen {
          transition-timing-function: ease-in-out;
          transition-duration: 0.5s;
          transition-property: transform, width, top, opacity;
          transition-delay: 0.5s, 0s, 0s, 0s;
          &:nth-of-type(1) {
            transform: rotate(45deg);
            top: 50%;
            width: 100%;
          }
          &:nth-of-type(2) {
            opacity: 0;
          }
          &:nth-of-type(3) {
            transform: rotate(-45deg);
            width: 100%;
            top: 50%;
          }
        }
      }
    }

    &-button {
      display: none;
      width: rem(200px);
      height: rem(60px);
      margin-left: 15%;
      @include tablets {
        display: none;
      }
      &-text {
        color: white;
        text-transform: uppercase;
        @include futura(demi);
        font-size: rem(15px);
        line-height: rem(26px);
      }
    }

    &-heading {
      @include futura(book);
      font-size: rem(26px);
      margin-left: 13.5%;
      text-transform: uppercase;
      color: white;
      position: relative;
      z-index: 3;
      display: block;
      cursor: pointer;

      span {
        border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
      }

      /* @include mac {
        font-size: rem(38px);
      } */

      @include middlescreen {
        margin-left: 7.5%;
      }

      @include bignotebooks {
        font-size: rem(24px);
      }

      @include tablets {
        margin-left: 0;
        font-size: rem(22px);
      }
      @include phones {
        font-size: rem(18px);
      }
      @include iphones {
        font-size: rem(15px);
      }
    }
  }

  &__camp {
    background-size: cover;
    /* padding: 0 rem(32px); */
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    flex: 1;
    @include phones {
      display: none;
    }
    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      background: url(~@/assets/camp_bg.jpg) center center no-repeat;
      background-size: cover;
      transition: height 1.5s ease-in-out;
      /* transition-delay: 1.5s; */
      border-radius: rem(3px);
      transition: background-image 0.5s ease-in-out;
      transition: transform 1.5s ease-in-out;
      @include mac {
        background: url(~@/assets/camp_bg_uhd.jpg) center center no-repeat;
        background-size: cover;
      }
      @include base {
        background: url(~@/assets/camp_bg.jpg) center center no-repeat;
        background-size: cover;
      } 
      @include tablets {
        background: url(~@/assets/camp_bg_tab.jpg) center center no-repeat;
      }
    }

    

    &_folded {
      /* padding: 0; */
      .kort__camp-bg {
        background: url(~@/assets/camp_bg.jpg) center center no-repeat;
        background-size: cover;
      }
      @include mac {
        background: url(~@/assets/camp_bg_uhd.jpg) center center no-repeat;
        background-size: cover;
      }
      @include base {
        background: url(~@/assets/camp_bg.jpg) center center no-repeat;
        background-size: cover;
      } 
      @include tablets {
        background: url(~@/assets/camp_bg_tab.jpg) center center no-repeat;
      }
    }

    &_about {
      .kort__camp-bg {
        background: url(~@/assets/about_header_bg.jpg) center center no-repeat;
        background-size: cover;
        @include mac {
          background: url(~@/assets/about_header_bg_uhd.jpg) center center no-repeat;
          background-size: cover;
        }
        @include base {
          background: url(~@/assets/about_header_bg.jpg) center center no-repeat;
          background-size: cover;
        }
      }
    }

    &_adress {
      .kort__camp-bg {
        background: url(~@/assets/adress_header_bg.jpg) center center no-repeat;
        background-size: cover;
        @include mac {
          background: url(~@/assets/adress_header_bg_uhd.jpg) center center no-repeat;
          background-size: cover;
        }
        @include base {
          background: url(~@/assets/adress_header_bg.jpg) center center no-repeat;
          background-size: cover;
        }
      }
    }

    &_prog {
      .kort__camp-bg {
        background: url(~@/assets/prog_kids_header_bg.jpg) center center
          no-repeat;
        background-size: cover;
        @include mac {
          background: url(~@/assets/prog_header_bg_uhd.jpg) center center no-repeat;
          background-size: cover;
        }
        @include base {
          background: url(~@/assets/prog_kids_header_bg.jpg) center center
          no-repeat;
          background-size: cover;
        }
      }
    }

    &_prices {
      .kort__camp-bg {
        background: url(~@/assets/prices_header_bg.jpg) center center no-repeat;
        background-size: cover;
        @include mac {
          background: url(~@/assets/prices_header_bg_uhd.jpg) center center no-repeat;
          background-size: cover;
        }
        @include base {
          background: url(~@/assets/prices_header_bg.jpg) center center no-repeat;
          background-size: cover;
        }
      }
    }

    &_schedule {
      .kort__camp-bg {
        background: url(~@/assets/schedule_header_bg.jpg) center center
          no-repeat;
        background-size: cover;
        @include mac {
          background: url(~@/assets/schedule_header_bg_uhd.jpg) center center no-repeat;
          background-size: cover;
        }
        @include base {
          background: url(~@/assets/schedule_header_bg.jpg) center center
          no-repeat;
          background-size: cover;
        }
      }
    }

    &_coach {
      .kort__camp-bg {
        background: url(~@/assets/coaches_header_bg.jpg) center center no-repeat;
        background-size: cover;
        @include mac {
          background: url(~@/assets/coaches_header_bg_uhd.jpg) center center no-repeat;
          background-size: cover;
        }
        @include base {
          background: url(~@/assets/coaches_header_bg.jpg) center center no-repeat;
          background-size: cover;
        }
      }
    }

    &_contacts {
      .kort__camp-bg {
        background: url(~@/assets/contacts_header_bg.jpg) center center no-repeat;
        background-size: cover;
        @include mac {
          background: url(~@/assets/contacts_header_bg_uhd.jpg) center center no-repeat;
          background-size: cover;
        }
        @include base {
          background: url(~@/assets/contacts_header_bg.jpg) center center no-repeat;
          background-size: cover;
        }
      }
    }

    &_heading {
      @include futura(book);
      font-size: rem(30px);
      /* transition: all 0.5s ease-in-out 0.9s; */
      transition-property: color, padding;
      transition-delay: 0s, 0.9s;
      transition-duration: 0.5s;
      padding-left: rem(30px);
      color: #41454e;
      /* @include mac {
        padding-left: rem(38px);
        font-size: rem(42px);
      } */

      &_folded {
        transition: all 0.5s ease-in-out;
        padding-left: rem(120px);
        /* @include mac {
          padding-left: rem(200px);
        } */
      }
    }
  }

  &__back {
    width: 9.4%;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    background: #03de50;
    border-radius: rem(3px);
    position: absolute;
    left: 0;
    top: 0;
    transition: opacity 0.5s ease-in-out;
    transition-delay: 1.5s;
    cursor: pointer;
    @include tablets {
      width: 17%;
    }

    &:hover {
      .kort__back-text {
        margin-top: 30%;
        margin-bottom: rem(10px);
      }
    }

    &_folded {
      opacity: 1;
      .kort__back-text {
        opacity: 1;
      }
      .kort__back-arrow {
        opacity: 1;
      }
    }

    &-text {
      @include futura(book);
      font-size: rem(19px);
      line-height: rem(26px);
      color: #41464e;
      margin-bottom: rem(5px);
      margin-top: 25%;
      transition: all 0.5s ease-in-out;
      /* @include mac {
        font-size: rem(26px);
        line-height: rem(32px);
      } */
    }

    &-arrow {
      width: 0px;
      height: 0px;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-top: 7px solid #41464e;
    }
  }
}

.back-button {
  &-enter,
  &-leave-to {
    transform: translateY(-200%);
    opacity: 0;
  }

  &-enter-to,
  &-leave {
    transform: translateY(0%);
    opacity: 1;
  }

  &-enter-active,
  &-leave-active {
    transition: all 1.5s ease-in-out;
  }
}
</style>
