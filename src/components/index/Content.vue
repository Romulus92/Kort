<template>
  <div class="kort__main">
    <div class="kort__main-mobile">
      <router-link
        tag="div"
        to="/program/adults"
        class="card card_clickable kort__adults card_hover"
      >
        <div class="card__bg kort__adults-bg"></div>
        <h2 class="kort__lead">Взрослые</h2>
      </router-link>
      <router-link tag="div" to="/program/kids" class="card card_clickable kort__kids card_hover">
        <div class="card__bg kort__kids-bg"></div>
        <h2 class="kort__lead">Дети</h2>
      </router-link>
      <router-link tag="div" to="/schedule" class="card card_clickable kort__schedule">
        <img src="~@/assets/schedule_whistle.png" class="kort__schedule-whistle">
        <h2 class="kort__lead">Расписание</h2>
      </router-link>
      <router-link tag="div" to="/prices" class="card card_clickable kort__costs">
        <img src="~@/assets/costs_hand.png" class="kort__costs-hand">
        <img src="~@/assets/costs_backhand.png" class="kort__costs-backhand">
        <img src="~@/assets/costs_ball.png" class="kort__costs-ball">
        <h2 class="kort__lead">Цены</h2>
      </router-link>
      <router-link tag="div" to="/coaches" class="card card_clickable kort__coaches card_hover">
        <div class="card__bg kort__coaches-bg"></div>
        <h2 class="kort__lead kort__lead_white kort__lead_bottom">Тренерский
          <br>состав
        </h2>
      </router-link>
      <router-link tag="div" to="/program/team" class="card card_clickable kort__teams card_hover">
        <div class="card__bg kort__teams-bg"></div>
        <h2 class="kort__lead kort__lead_white kort__lead_bottom">Тимбилдинг</h2>
      </router-link>
      <router-link tag="div" :to="{name:'programKids', hash:'#camp'}" class="card card_clickable kort__campcard">
        <h2 class="kort__lead">Летний лагерь</h2>
      </router-link>
      <router-link tag="div" to="/adress" class="card card_clickable kort__adresscard">
        <h2 class="kort__lead">Адреса</h2>
      </router-link>
      <router-link tag="div" to="/contacts" class="card card_clickable kort__contactscard">
        <h2 class="kort__lead">Контакты</h2>
      </router-link>
    </div>
    <div class="kort__main-row">
      <router-link
        tag="div"
        to="/program/adults"
        class="card card_clickable kort__adults card_hover"
      >
        <div class="card__bg kort__adults-bg"></div>
        <h2 class="kort__lead">Взрослые</h2>
      </router-link>
    </div>
    <div class="kort__main-row kort__main-row_double">
      <router-link tag="div" to="/schedule" class="card card_clickable kort__schedule">
        <img src="~@/assets/schedule_whistle.png" class="kort__schedule-whistle">
        <h2 class="kort__lead">Расписание</h2>
      </router-link>
      <router-link tag="div" to="/coaches" class="card card_clickable kort__coaches card_hover">
        <div class="card__bg kort__coaches-bg"></div>
        <h2 class="kort__lead kort__lead_white kort__lead_bottom">Тренерский
          <br>состав
        </h2>
      </router-link>
    </div>
    <div class="kort__main-row kort__main-row_double">
      <router-link tag="div" to="/prices" class="card card_clickable kort__costs">
        <img src="~@/assets/costs_hand.png" class="kort__costs-hand">
        <img src="~@/assets/costs_backhand.png" class="kort__costs-backhand">
        <img src="~@/assets/costs_ball.png" class="kort__costs-ball">
        <h2 class="kort__lead">Цены</h2>
      </router-link>
      <router-link tag="div" to="/program/team" class="card card_clickable kort__teams card_hover">
        <div class="card__bg kort__teams-bg"></div>
        <h2 class="kort__lead kort__lead_white kort__lead_bottom">Тимбилдинг</h2>
      </router-link>
    </div>
    <div class="kort__main-row kort__main-row_kids">
      <router-link tag="div" to="/program/kids" class="card card_clickable kort__kids card_hover">
        <div class="card__bg kort__kids-bg"></div>
        <h2 class="kort__lead">Дети</h2>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Content',
  computed: {
    isFolded () {
      return this.$store.state.isFolded
    }
  }
}
</script>

<style lang="scss" scoped>
.kort {
  &__main {
    height: 100%;
    display: flex;
    @include phones {
      display: block;
    }

    /* display: grid;
    grid-gap: rem(7px);
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: 1fr 26.5% 26.5% 1fr;
    grid-template-areas:
      "adults schedule costs kids"
      "adults schedule costs kids"
      "adults schedule costs kids"
      "adults coaches teams kids"
      "adults coaches teams kids"
      "adults coaches teams kids";
    @include phones {
      grid-template-rows: repeat(2, 200px) repeat(7, 100px);
      grid-template-columns: 1fr;
      grid-template-areas:
        "adults"
        "kids"
        "schedule"
        "costs"
        "coaches"
        "teams"
        "camp"
        "adress"
        "contacts"
    } */

    &-mobile {
      display: none;
      height: auto;
      flex-direction: column;
      width: 100%;
      @include phones {
        display: flex;
      }
    }

    &-row {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 23.5%;
      margin-right: 7px;
      @include phones {
        display: none;
      }
      .card {
        margin-bottom: 7px;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
      &_double {
        width: 26.5%;
      }
      &_kids {
        margin-right: 0;
      }
    }
  }

  &__adults {
    grid-area: adults;
    background-size: cover;
    height: 100%;
    @include phones {
      height: rem(200px);
    }
    &-bg {
      background: url(~@/assets/adults_bg.jpg) center center no-repeat;
      background-size: cover;
      @include mac {
        background: url(~@/assets/adults_bg_uhd.jpg) center center no-repeat;
        background-size: cover;
      }
      @include base {
        background: url(~@/assets/adults_bg.jpg) center center no-repeat;
        background-size: cover;
      }
      @include tablets {
        background: url(~@/assets/adults_bg_tab.jpg) center center no-repeat;
      }
      @include phones {
        background: url(~@/assets/adults_bg_mob.jpg) center center no-repeat;
      }
    }
  }

  &__kids {
    grid-area: kids;
    background-size: cover;
    height: 100%;
    @include phones {
      height: rem(200px);
    }
    &-img {
      object-fit: cover;
    }
    &-bg {
      background: url(~@/assets/kids_bg.jpg) center center no-repeat;
      background-size: cover;
      @include mac {
        background: url(~@/assets/kids_bg_uhd.jpg) center center no-repeat;
        background-size: cover;
      }
      @include base {
        background: url(~@/assets/kids_bg.jpg) center center no-repeat;
        background-size: cover;
      }
      @include tablets {
        background: url(~@/assets/kids_bg_tab.jpg) center center no-repeat;
      }
      @include phones {
        background: url(~@/assets/kids_bg_mob.jpg) center center no-repeat;
      }
    }
  }

  &__schedule {
    grid-area: schedule;
    background: url(~@/assets/schedule_bg.jpg) center center no-repeat;
    background-size: cover;
    position: relative;
    height: 50%;
    @include phones {
      height: rem(120px);
    }
    &:hover {
      .kort__schedule-whistle {
        top: 0;
        /* animation-play-state: running;  */
      }
    }
    &-whistle {
      position: absolute;
      top: -20%;
      left: 38%;
      width: rem(65px);
      height: rem(280px);
      /* animation: whistle 2s ease-in-out; */
      /* animation-play-state: paused;  */
      transition: top 1.5s ease-in-out;
      @include tablets {
        display: none;
      }
    }
    @include tablets {
      background: url(~@/assets/schedule_bg_tab.jpg) center center no-repeat;
    }
    @include phones {
      background: url(~@/assets/schedule_bg_mob.jpg) center center no-repeat;
    }
  }

  &__costs {
    grid-area: costs;
    background: url(~@/assets/costs_bg.jpg) center center no-repeat;
    background-size: cover;
    position: relative;
    height: 50%;
    @include phones {
      height: rem(120px);
    }
    &:hover {
      .kort__costs-ball {
        top: 30%;
      }
    }
    &-ball {
      position: absolute;
      top: -7%;
      right: 15%;
      width: rem(140px);
      height: rem(140px);
      z-index: 2;
      transition: top 2s ease-in-out;
      @include tablets {
        display: none;
      }
    }
    &-hand {
      position: absolute;
      right: 12.5%;
      bottom: 0;
      width: rem(230px);
      height: rem(245px);
      z-index: 3;
      @include tablets {
        display: none;
      }
    }
    &-backhand {
      position: absolute;
      right: 11%;
      bottom: 0;
      width: rem(230px);
      height: rem(240px);
      z-index: 1;
      @include tablets {
        display: none;
      }
    }
    @include tablets {
      background: url(~@/assets/costs_bg_tab.jpg) center center no-repeat;
    }
    @include phones {
      background: url(~@/assets/costs_bg_mob.jpg) center center no-repeat;
    }
  }

  &__coaches {
    grid-area: coaches;
    background-size: cover;
    height: 50%;
    @include phones {
      height: rem(120px);
    }
    &-bg {
      background: url(~@/assets/coaches_bg.jpg) center center no-repeat;
      background-size: cover;
      @include mac {
        background: url(~@/assets/coaches_bg_uhd.jpg) center center no-repeat;
        background-size: cover;
      }
      @include base {
        background: url(~@/assets/coaches_bg.jpg) center center no-repeat;
        background-size: cover;
      }
      @include tablets {
        background: url(~@/assets/coaches_bg_tab.jpg) center center no-repeat;
      }
      @include phones {
        background: url(~@/assets/coaches_bg_mob.jpg) center center no-repeat;
      }
    }
  }

  &__teams {
    grid-area: teams;
    background-size: cover;
    height: 50%;
    @include phones {
      height: rem(120px);
    }
    &-bg {
      background: url(~@/assets/teams_bg.jpg) center center no-repeat;
      background-size: cover;
      @include mac {
        background: url(~@/assets/teams_bg_uhd.jpg) center center no-repeat;
        background-size: cover;
      }
      @include base {
        background: url(~@/assets/teams_bg.jpg) center center no-repeat;
        background-size: cover;
      }
      @include tablets {
        background: url(~@/assets/teams_bg_tab.jpg) center center no-repeat;
      }
      @include phones {
        background: url(~@/assets/teams_bg_mob.jpg) center center no-repeat;
      }
    }
  }

  &__campcard {
    display: none;
    grid-area: camp;
    background: url(~@/assets/camp_bg_mob.jpg) center center no-repeat;
    background-size: cover;
    height: rem(120px);
    @include phones {
      display: block;
    }
  }
  &__adresscard {
    display: none;
    grid-area: adress;
    background: url(~@/assets/adress_bg_mob.jpg) center center no-repeat;
    background-size: cover;
    height: rem(120px);
    @include phones {
      display: block;
    }
  }
  &__contactscard {
    display: none;
    grid-area: contacts;
    background: url(~@/assets/contacts_bg_mob.jpg) center center no-repeat;
    background-size: cover;
    height: rem(120px);
    @include phones {
      display: block;
    }
  }
}

/* @keyframes whistle {
  0% {
    top: 0;
  }
  30% {
    top: -20%;
  }
  45% {
    top: -10%;
  }
  60% {
    top: -20%;
  }
  100% {
    top: 0;
  }
} */
</style>
