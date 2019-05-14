<template>
  <div class="container">
    <div class="camp__day">
      <h2 class="camp__day-heading">Как будем проводить время?</h2>
      <p class="camp__day-text" >Распорядок дня летнего лагеря <span class="camp__day-text_bold">KORT 12</span> соответствует правильному режиму<br> и направлен на поддержание отличного самочувствия и поиск новых, ярких впечатлений.</p>
      <ul class="camp__day-list" v-waypoint="{ active: true, callback: onWaypoint }">
        <li class="camp__day-item">
          <img src="~@/assets/check.svg" class="camp__day-icon">
          <span class="camp__day-time">7<sup>30</sup></span>
          <span class="camp__day-info">Подъем</span>
        </li>
        <div class="camp__day-line"></div>
        <li class="camp__day-item">
          <img src="~@/assets/check.svg" class="camp__day-icon">
          <span class="camp__day-time">7<sup>30</sup>—8<sup>00</sup></span>
          <span class="camp__day-info">Завтрак</span>
        </li>
        <div class="camp__day-line"></div>
        <li class="camp__day-item">
          <img src="~@/assets/check.svg" class="camp__day-icon">
          <span class="camp__day-time">8<sup>00</sup>—9<sup>00</sup></span>
          <span class="camp__day-info">Общая физическая подготовка</span>
        </li>
        <div class="camp__day-line"></div>
        <li class="camp__day-item">
          <img src="~@/assets/check.svg" class="camp__day-icon">
          <span class="camp__day-time">9<sup>30</sup>—11<sup>00</sup></span>
          <span class="camp__day-info">Первая тренировка</span>
        </li>
        <div class="camp__day-line"></div>
        <li class="camp__day-item">
          <img src="~@/assets/check.svg" class="camp__day-icon">
          <span class="camp__day-time">11<sup>00</sup>—12<sup>30</sup></span>
          <span class="camp__day-info">Отдых, пляж</span>
        </li>
        <div class="camp__day-line"></div>
        <li class="camp__day-item">
          <img src="~@/assets/check.svg" class="camp__day-icon">
          <span class="camp__day-time">13<sup>00</sup>—14<sup>00</sup></span>
          <span class="camp__day-info">Обед</span>
        </li>
        <div class="camp__day-line"></div>
        <li class="camp__day-item">
          <img src="~@/assets/check.svg" class="camp__day-icon">
          <span class="camp__day-time">14<sup>00</sup>—17<sup>00</sup></span>
          <span class="camp__day-info">Отдых, пляж, подготовка к вечерним мероприятиям</span>
        </li>
        <div class="camp__day-line"></div>
        <li class="camp__day-item">
          <img src="~@/assets/check.svg" class="camp__day-icon">
          <span class="camp__day-time">17<sup>00</sup>—19<sup>00</sup></span>
          <span class="camp__day-info">Вторая тренировка</span>
        </li>
        <div class="camp__day-line"></div>
        <li class="camp__day-item">
          <img src="~@/assets/check.svg" class="camp__day-icon">
          <span class="camp__day-time">19<sup>30</sup>—20<sup>30</sup></span>
          <span class="camp__day-info">Ужин</span>
        </li>
        <div class="camp__day-line"></div>
        <li class="camp__day-item">
          <img src="~@/assets/check.svg" class="camp__day-icon">
          <span class="camp__day-time">21<sup>00</sup></span>
          <span class="camp__day-info">Отдых, игры, анимации</span>
        </li>
        <div class="camp__day-line"></div>
        <li class="camp__day-item">
          <img src="~@/assets/check.svg" class="camp__day-icon">
          <span class="camp__day-time">22<sup>00</sup></span>
          <span class="camp__day-info">Отбой</span>
        </li>
      </ul>
    </div>
    <div class="camp__day-quote">
      <p class="camp__day-quote-text">Мы закладываем правильные привычки и корректируем образ жизни наших<br> гостей так, чтобы они захотели его продолжить и за пределами летнего лагеря!</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onWaypoint ({ going, direction }) {
      const items = document.querySelectorAll('.camp__day-item')
      const delay = 100
      if (direction === "top" && going === "in") {
        items.forEach(function(item, index) {
          setTimeout(function() {
            item.classList.add('camp__day-item_active') 
          }, delay * index)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .camp {
    &__day {
      margin-left: rem(137px);
      margin-bottom: rem(70px);
      @include tablets {
        display: flex;
        flex-direction: column;
        margin-left: 0;
        margin-bottom: rem(30px);
      }
      &-heading {
        @include futura(heavy);
        font-size: rem(50px);
        line-height: rem(60px);
        @include phones {
          font-size: rem(35px);
          line-height: rem(40px);
        }
      }
      &-text {
        @include circe(light);
        font-size: rem(16px);
        line-height: rem(35px);
        @include phones {
          font-size: rem(15px);
          line-height: rem(30px);
        }
        &_bold {
          @include circe(bold);
        }
      }
      &-list {
        list-style: none;
        width: rem(570px);
        padding: 0;
        @include tablets {
          align-self: center;
        }
        @include phones {
          width: 95%;
        }
      }
      &-item {
        display: flex;
        align-items: center;
        &_active {
          .camp__day-icon {
            transform: rotateY(0deg);
          }
        }
      }
      &-icon {
        width: rem(26px);
        height: rem(26px);
        margin-right: rem(23px);
        transform: rotateY(90deg);
        transition: transform 0.5s ease-in-out;
        @include phones {
          display: none;
        }
      }
      &-time {
        @include circe(regular);
        font-size: rem(20px);
        line-height: rem(42px);
        width: rem(90px);
        margin-right: rem(44px);
        @include iphones {
          font-size: rem(16px);
        }
      }
      &-info {
        @include circe(light);
        font-size: rem(15px);
        line-height: rem(42px);
        @include phones {
          width: rem(200px);
        }
      }
      &-line {
        height: rem(1px);
        width: rem(525px);
        margin-left: rem(45px);
        background: #e8e8e8;
      }
      &-quote {
        border-left: 4px solid #23e54c;
        padding: rem(15px) rem(35px);
        margin-bottom: rem(173px);
        @include tablets {
          margin-bottom: rem(50px);
          br {
            display: none;
          }
        }
        &-text {
          font-size: rem(28px);
          line-height: rem(37px);
          @include futura(lightobl);
          @include phones {
            font-size: rem(24px);
          }
        }
      }
    }
  }
</style>
