<template>
  <div class="menu" :class="{menu_open: menuOpen}">
    <div class="menu-content">
      <button @click='showTryMenu' class="button button_hollow menu-button menu-button_tablet">
        <span class="menu-button-text">Пробное занятие</span>
      </button>
      <div class="menu-block">
        <div class="menu-left">
          <div class="menu-item" @click='checkRoute($event)'>
            <router-link to="/program/adults" class="menu-link">Взрослые</router-link>
          </div>
          <div class="menu-item" @click='checkRoute($event)'>
            <router-link to="/program/kids" class="menu-link">Дети</router-link>
          </div>
        </div>
        <div class="menu-right">
          <div class="menu-item" @click='checkRoute($event)'>
            <router-link to="/about" class="menu-link">Академия KORT 12</router-link>
          </div>
          <div class="menu-item" @click='checkRoute($event)'>
            <router-link to="/camp" class="menu-link">Летний лагерь</router-link>
          </div>
        </div>
      </div>
      <div class="menu-block">
        <div class="menu-left">
          <div class="menu-item" @click='checkRoute($event)'>
            <router-link to="/schedule" class="menu-link">Расписание</router-link>
          </div>
          <div class="menu-item" @click='checkRoute($event)'>
            <router-link to="/prices" class="menu-link">Цены</router-link>
          </div>
        </div>
        <div class="menu-right">
          <div class="menu-item" @click='checkRoute($event)'>
            <router-link to="/coaches" class="menu-link">Тренерский состав</router-link>
          </div>
          <div class="menu-item" @click='checkRoute($event)'>
            <router-link to="/program/team" class="menu-link">Тимбилдинг</router-link>
          </div>
        </div>
      </div>
      <div class="menu-block">
        <div class="menu-left">
          <div class="menu-item" @click='checkRoute($event)'>
            <router-link to="/adress" class="menu-link">Адреса кортов</router-link>
          </div>
          <div class="menu-item" @click='checkRoute($event)'>
            <router-link to="/contacts" class="menu-link">Контакты</router-link>
          </div>
        </div>
        <!-- <div class="menu-contacts">
          <span class="menu-phone">8915 104 4141</span>
          <span class="menu-email">owltennis@mail.ru</span>
        </div>-->
        <button @click='showTryMenu' class="button button_hollow menu-button menu-button">
          <span class="menu-button-text">Пробное занятие</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import FeedbackModal from "../shared/FeedbackModal"
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    FeedbackModal
  },
  computed: {
    ...mapState(['menuOpen'])
  },
  methods: {
    toggleMenu () {
      this.$store.state.commit('TOGGLE_MENU')
    },
    showTryMenu () {
      this.$metrika.reachGoal('menu_modalform_open')
      this.$metrika.reachGoal('forms_open')
      this.$modal.show('trymenu');
      this.$store.commit('SET_MODAL_TYPE', 'menu_modalform_send')
    },
    hideTryMenu () {
      this.$modal.hide('trymenu');
      this.$store.commit('SET_MODAL_TYPE', '')
    },
    checkRoute (e) {
      if (e.target.classList.contains('router-link-exact-active')) {
        this.$store.state.menuOpen = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: #0d227d;
  z-index: 10;
  transition: all 0.5s ease-in-out;
  /* padding-top: 15%; */
  padding-right: 15%;
  transform: translateX(-100%);
  display: flex;
  justify-content: center;
  flex-direction: column;

  @include macbookair {
    padding-right: 10%;
  }

  @include phones {
    width: 100%;
  }

  &-content {
    display: flex;
    flex-direction: column;
    height: 40%;
    justify-content: space-between;
    
    @include tablets {
      margin-top: rem(100px);
      height: 80%;
      justify-content: space-between;
    }

    @include phones {
      height: initial;
      margin-top: 0;
    }
  }

  &_open {
    padding-left: 8.3%;
    transform: translateX(0%);
    @include tablets {
      padding: 5%;
    }
  }
  &-item {
    display: flex;
    margin-bottom: rem(20px);
    position: relative;
    &:last-of-type {
      margin-bottom: 0;
    }
    &-picture {
      position: absolute;
      left: rem(-27px);
      width: rem(27px);
      height: rem(29px);
    }
    &-img {
      width: 100%;
      height: 100%;
    }
  }
  &-link {
    color: white;
    @include circe(light);
    font-size: rem(25px);
    border-bottom: 2px solid white;
    margin-left: rem(13px);
    @include macbookair {
      font-size: rem(24px);
    }
    @include bignotebooks {
      font-size: rem(22px);
    }
    @include notebooks {
      font-size: rem(20px);
    }
    @include netbooks {
      font-size: rem(18px);
    }
    @include tablets {
      font-size: rem(20px);
      margin-left: 0;
    }
    @include phones {
      font-size: rem(18px);
      border-width: 1px;
    }
    @include iphones {
      font-size: rem(16px);
    }
  }
  &-block {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8%;
    @include tablets {
      flex-direction: column;
      height: 25%;
      margin-bottom: 0;
    }
    @include phones {
      height: initial;
      flex-direction: row;
      align-items: center;
      margin-bottom: 15%;
    }
    &:last-of-type {
      margin-bottom: 0;
    }

    /* @include tablets {
        flex-direction: column;
      } */
  }
  &-contacts {
    width: rem(495px);
    height: rem(65px);
    @include circe(light);
    color: white;
    font-size: rem(25px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: rem(3px);
    border: 1px solid #6078dd;
    margin-top: 15%;
    margin-left: rem(-27px);
    @include netbooks {
      width: rem(400px);
      font-size: rem(22px);
    }

    @include phones {
      flex-direction: column;
      width: rem(200px);
      height: rem(90px);
      margin-top: 0;
    }
    /* @include tablets {
        width: 300px;
        flex-direction: column;
        border: 0;
        align-items: flex-start;
        margin-left: 0;
        margin-bottom: rem(50px);
      } */
  }
  &-button {
    display: none;
    width: rem(200px);
    height: rem(70px);
    color: white;
    @include futura(demi);
    font-size: rem(15px);
    text-transform: uppercase;

    @include tablets {
      display: none;
    }

    @include phones {
      display: flex;
      @include futura(book);
      width: rem(150px);
      height: 97%;
      font-size: rem(14px);
      display: flex;
      border-color: white;
    }

    &_tablet {
      display: none;
      @include tablets {
        display: flex;
      }
      @include phones {
        display: none;
      }
    }

    
  }
}
</style>
