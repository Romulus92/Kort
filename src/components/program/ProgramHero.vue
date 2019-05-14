<template>
  <div class="prog-hero" v-waypoint="{ active: true, callback: onWaypoint }">
    <div class="container">
      <div class="prog-hero-content">
        <div class="prog-info">
          <h2 class="prog-heading">Программы тренировок</h2>
          <p class="prog-lead">для детей и взрослых</p>
        </div>
        <div class="prog-hero-picture">
          <img src="~@/assets/prog_hero_bg.png" class="prog-hero-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onWaypoint ({ going, direction }) {
      if (going === this.$waypointMap.GOING_OUT && direction === this.$waypointMap.DIRECTION_TOP) {
        document.querySelector('.prog_tabs').classList.add('prog_tabs_sticky')
      } else if (going === this.$waypointMap.GOING_IN && direction === this.$waypointMap.DIRECTION_BOTTOM) {
        document.querySelector('.prog_tabs').classList.remove('prog_tabs_sticky')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .prog {
    &-hero {
      height: rem(690px);
      background: #0d227d;
      overflow-x: hidden;
      @include mac {
        height: rem(550px);
      }
      @include base {
        height: rem(690px);
      }
      @include phones {
        height: rem(490px);
        background: url(~@/assets/prog_hero_bg_mob.jpg) center bottom no-repeat;
      }
      &-content {
        display: flex;
      }
      &-picture {
        margin-top: rem(120px);
        margin-left: rem(50px);
        width: 55%;
        @include phones {
          display: none;
        }
      }
      &-img {
        @include mac {
          width: 100%;
        }
      }
      .container {
        overflow: visible;
      }
    }
    &-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 45%;
      @include phones {
        width: 50%;
      }
    }
    &-heading {
      @include futura(heavy);
      font-size: rem(55px);
      line-height: rem(65px);
      color: white;
      margin-bottom: rem(20px);
      @include phones {
        font-size: rem(35px);
        line-height: rem(40px);
      }
    }
    &-lead {
      @include circe(light);
      font-size: rem(15px);
      line-height: rem(30px);
      color: white;
      @include phones {
        font-size: rem(20px);
      }
    }
  }
</style>
