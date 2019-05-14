<template>
  <div class="camp__hotel">
    <div class="container">
      <div class="camp__hotel-content">
        <div class="camp__hotel-left">
          <div class="camp__hotel-picture">
            <img src="~@/assets/camp_hotel.jpg" class="camp__hotel-img">
            <img src="~@/assets/camp_hotel_mob.jpg" class="camp__hotel-img_mob">
            <a href="https://www.tez-tour.com/hotel.html?id=7003511" class="camp__hotel-caption">Курортный комплекс Албена, ORCHIDEA HOTEL</a>
          </div>
          <div class="camp__hotel-figure"></div>
        </div>
        <div class="camp__hotel-right">
          <h2 class="camp__hotel-heading">Болгария</h2>
          <p class="camp__hotel-text">Насыщенная программа и дружная команда украсят путешествие и сделают его запоминающимся.</p>
          <p class="camp__hotel-text">Регулярные тренировки, здоровое питание, активный отдых, яркие мероприятия и масса развлечений на любой вкус на территории комплекса в течение всего срока пребывания. </p>
          <p class="camp__hotel-text">Большая зелёная территория, песчаный пляж, солнце и море - как раз то, что нужно для качественного отдыха. Проведем время с пользой и удовольствием!</p>
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
  .camp {
    &__hotel {
      padding-top: rem(130px);
      padding-bottom: rem(80px);
      overflow: hidden;
      @include tablets {
        padding-top: rem(50px);
      }
      @include phones {
        padding-bottom: rem(30px);
      }
      .container {
        overflow: visible;
      }
      &-left {
        margin-left: rem(-229px);
        position: relative;
        margin-right: rem(180px);
        @include mac {
          margin-left: 0;
        }
        @include base {
          margin-left: rem(-229px);
        }
        @include macbookair {
          margin-left: rem(-115px);
        }
        @include bignotebooks {
          margin-right: rem(90px);
        }
        @include tablets {
          margin: 0;
        }
      }
      &-content {
        display: flex;
        @include tablets {
          flex-direction: column;
        }
      }
      &-figure {
        width: rem(783px);
        height: rem(434px);
        background: #f5f6fa;
        position: absolute;
        top: rem(80px);
        left: rem(-85px);
        @include mac {
          width: rem(650px);
          height: rem(350px);
        }
        @include base {
          width: rem(783px);
          height: rem(434px);
        }
        @include tablets {
          left: 0;
        }
        @include phones {
          top: rem(64px);
          height: rem(350px);
        }
      }
      &-picture {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &-img {
        position: relative;
        z-index: 2;
        margin-bottom: rem(24px);
        @include phones {
          display: none;
        }
        &_mob {
          display: none;
          position: relative;
          z-index: 2;
          margin-left: rem(-80px);
          @include phones {
            display: block
          }
        }
      }
      &-caption {
        position: relative;
        z-index: 2;
        @include futura(lightobl);
        font-size: rem(16px);
        line-height: rem(37px);
        text-decoration: underline;
        font-weight: 600;
      }
      &-heading {
        margin: rem(55px) 0;
        @include futura(heavy);
        font-size: rem(50px);
        line-height: rem(60px);
        color: #191919;
        @include tablets {
          margin: rem(30px) 0;
        }
      }
      &-text {
        @include circe(light);
        font-size: rem(16px);
        line-height: rem(35px);
        color: #333333;
        margin-bottom: rem(40px);
        @include tablets {
          margin-bottom: rem(25px);
        }
      }
    }
  }
</style>
