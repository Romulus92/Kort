<template>
  <div class="about-tonus">
    <div class="container">
      <div class="about-tonus-wrap">
        <div class="about-tonus-content">
          <h2 class="about-tonus-heading">Всегда в форме</h2>
          <p class="about-tonus-text">Несмотря на насыщенную жизнь мы продолжаем развиваться и искать наиболее удачные комбинации в обучении начинающих теннисистов. Систематические выезды на соревнования, спортивный летний лагерь для детей и периодическая оценка спортивных результатов каждого ученика – создают условия для максимального вовлечения в процесс обучения на длительный срок.</p>
          <div class="about-tonus-quote">
            <p class="about-tonus-quote-text">Мы остаёмся демократичными в цене, но продолжаем показывать высокие результаты наших учеников, потому что прежде всего — это любимое </p>
          </div>
        </div>
        <div class="about-tonus-hero">
          <img src="~@/assets/about_tonus_bg.png" class="about-tonus-bg">
          <img src="~@/assets/about_tonus_bg_uhd.jpg" class="about-tonus-bg_uhd">
          <img src="~@/assets/about_ball.png" class="about-tonus-ball" v-waypoint="{ active: true, callback: onWaypoint }">
        </div>
      </div>
      <div class="about-tonus-list">
        <div class="about-tonus-item">
          <img src="~@/assets/coordination.svg" class="about-tonus-img">
          <div class="about-tonus-info">
            <span class="about-tonus-info-heading">Развиваем</span>
            <span class="about-tonus-info-text">координацию</span>
          </div>
        </div>
        <div class="about-tonus-item">
          <img src="~@/assets/strength.svg" class="about-tonus-img">
          <div class="about-tonus-info">
            <span class="about-tonus-info-heading">Прокачиваем</span>
            <span class="about-tonus-info-text">силу</span>
          </div>
        </div>
        <div class="about-tonus-item">
          <img src="~@/assets/endurance.svg" class="about-tonus-img">
          <div class="about-tonus-info">
            <span class="about-tonus-info-heading">Тренируем</span>
            <span class="about-tonus-info-text">выносливость</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onWaypoint ({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN && direction === this.$waypointMap.DIRECTION_TOP) {
        document.querySelector('.about-tonus-ball').classList.add('about-tonus-ball_active')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  &-tonus {
    margin-top: rem(-40px);
    overflow: hidden;
    padding-bottom: rem(135px);
    @include mac {
      padding-bottom: rem(60px);
    }
    @include base {
      padding-bottom: rem(190px);
    }
    @include tablets {
      padding-bottom: rem(50px);
    }
    @include phones {
      margin-top: 0;
    }
    .container {
      overflow: visible;
    }
    &-wrap {
      display: flex;
    }
    &-content {
      width: 38%;
      margin-bottom: rem(250px);
      @include mac {
        margin-bottom: rem(100px);
      }
      @include tablets {
        margin-bottom: rem(130px);
        width: 45%;
      }
      @include phones {
        width: 100%;
        margin-bottom: rem(50px);
      }
    }
    &-hero {
      width: 62%;
      position: relative;
      @include tablets {
        width: 55%;
      }
      @include phones {
        display: none;
      }
    }
    &-heading {
      margin-top: rem(250px);
      @include futura(heavy);
      font-size: rem(55px);
      color: #23e54c;
      @include phones {
        margin-top: rem(50px);
        font-size: rem(35px);
      }
    }
    &-text {
      @include circe(light);
      font-size: rem(15px);
      line-height: rem(30px);
      margin-bottom: rem(50px);
      @include tablets {
        br {
          display: none;
        }
      }
      span {
        @include circe(bold);
        font-size: rem(15px);
        line-height: rem(30px);
      }
    }
    &-bg {
      position: absolute;
      right: rem(-375px);
      top: 0;
      @include mac {
        display: none;
      }
      @include base {
        display: block;
      }
      @include vpheight {
        right: rem(-700px);
      }
      &_uhd {
        position: absolute;
        top: rem(-5px);
        right: rem(-225px);
        display: none;
        @include mac {
          display: block;
        }
        @include base {
          display: none;
        }
      }
      @include tablets {
        right: initial;
      }
    }
    &-ball {
      position: relative;
      margin-top: rem(330px);
      margin-left: rem(400px);
      transition: transform 1.5s ease-in-out;
      z-index: 2;
      @include vpheight {
        margin-left: rem(620px);
      }
      &_active {
        transform: translateX(-300px) translateY(200px);
      }
    }
    &-quote {
      margin-left: rem(30px);
      padding: rem(25px) rem(20px) rem(25px) rem(35px);
      background: #f7f7f7;
      border-left: 2px solid #0d227d;
      @include phones {
        margin-left: rem(10px);
      }
      &-text {
        @include circe(light);
        font-size: rem(15px);
        line-height: rem(30px);
        color: #454545;
      }
    }
    &-list {
      display: flex;
      justify-content: space-between;
      @include vpheight {
        padding-top: rem(200px);
      }
      @include phones {
        padding-top: 0;
        flex-direction: column;
      }
    }
    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: rem(40px);
      @include tablets {
        width: 33%;
      }
      @include phones {
        width: 100%;
      }
      &:last-of-type {
        margin-bottom: rem(40px);
        @include tablets {
          margin-bottom: rem(40px);
        }
      }
    }
    &-info {
      display: flex;
      flex-direction: column;
      &-heading {
        @include futura(book);
        font-size: rem(35px);
        line-height: rem(37px);
        @include tablets {
          font-size: rem(22px);
          line-height: rem(28px);
        }
      }
      &-text {
        @include futura(book);
        font-size: rem(18px);
        line-height: rem(26px);
      }
    }
    &-img {
      width: rem(100px);
      height: rem(100px);
      margin-right: rem(25px);
      @include phones {
        width: rem(70px);
        height: rem(70px);
      }
    }
  }
}
</style>
