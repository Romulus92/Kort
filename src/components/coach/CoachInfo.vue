<template>
  <div class="coaches-info">
    <div class="container">
      <div class="coaches-row">
        <div class="coaches-photo">
          <img src="~@/assets/coaches_info_img.jpg" class="coaches-photo-img">
        </div>
        <div class="coaches-trainer">
          <h2 class="coaches-trainer-heading">Тренер</h2>
          <p class="coaches-trainer-text">это проводник между желаниями<br> и возможностями спортсмена. Его задача –<br> раскрыть потенциал, научить основам большого <br>спорта и составить грамотную программу <br>обучения для достижения больших результатов.</p>
        </div>
      </div>
      <div class="coaches-row">
        <div class="coaches-family">
          <p class="coaches-family-text">
            <span class="coaches-family-text_bold">Теннисисты</span>
             – одна<br> большая семья<br> и их любовь – <span class="coaches-family-text_bold">игра</span>
          </p>
        </div>
        <div class="coaches-like">
          <p class="coaches-like-text">Наши тренера сделают всё, чтобы вы по-настоящему полюбили этот спорт!</p>
          <ul class="coaches-like-list">
            <li class="coaches-like-item">
              <div class="coaches-like-dot"></div>
              <p class="coaches-like-item-text">Зарядят энтузиазмом и поверят в ваши силы.</p>
            </li>
            <li class="coaches-like-item">
              <div class="coaches-like-dot"></div>
              <p class="coaches-like-item-text">Научат корректно пользоваться оборудованием и сведут к минимуму вероятность травм.</p>
            </li>
            <li class="coaches-like-item">
              <div class="coaches-like-dot"></div>
              <p class="coaches-like-item-text">Подберут оптимальную интенсивность тренировок и сделают игру интересной.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .coaches {
    &-info {
      overflow: hidden;
      margin-top: rem(100px);
      margin-bottom: rem(190px);
      @include tablets {
        margin-bottom: rem(50px);
      }
      .container {
        overflow: visible;
      }
    }
    &-row {
      display: flex;
      @include phones {
        flex-direction: column;
      }
    }
    &-photo {
      margin-left: rem(-145px);
      @include mac {
        margin-left: rem(120px);
      }
      @include base {
        margin-left: rem(-145px);
      }
      @include phones {
        width: 110%;
        margin-left: rem(-20px);
      }
      &-img {
        @include tablets {
          width: 100%;
        }
      }
    }
    &-trainer {
      margin-left: rem(65px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      @include tablets {
        width: 60%;
      }
      @include phones {
        width: 100%;
        margin-left: rem(18px);
      }
      &-heading {
        @include circe(light);
        font-size: rem(30px);
        line-height: rem(47px);
      }
      &-text {
        font-size: rem(15px);
        line-height: rem(30px);
        @include circe(light);
        @include tablets {
          br {
            display: none;
          }
        }
      }
    }
    &-family {
      width: 45.5%;
      height: rem(483px);
      border: 4px solid #23e54c;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: rem(-50px);
      @include tablets {
        width: 80%;
        height: rem(350px);
      }
      @include phones {
        width: 100%;
        margin: rem(30px) 0;
      }
      @include iphones {
        padding: rem(10px);
      }
      &-text {
        @include circe(light);
        font-size: rem(35px);
        line-height: rem(50px);
        @include iphones {
          br {
            display: none;
          }
        }
        &_bold {
          @include circe(bold);
        }
      }
    }
    &-like {
      margin-left: rem(50px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-right: rem(150px);
      @include tablets {
        padding-right: 0;
      }
      @include phones {
        margin-left: rem(18px);
      }
      &-text {
        @include circe(light);
        font-size: rem(15px);
        line-height: rem(30px);
      }
      &-list {
        list-style: none;
        padding: 0;
      }
      &-dot {
        width: rem(4px);
        height: rem(4px);
        background: #23e54c;
        border-radius: 50%;
        margin-top: rem(12px);
        margin-right: rem(20px);
      }
      &-item {
        @include circe(light);
        font-size: rem(15px);
        line-height: rem(30px);
        display: flex;
      }
    }
  }
</style>
