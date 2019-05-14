<template>
  <div class="camp__prog">
    <div class="container">
      <p class="camp__prog-text">Насыщенная программа и дружная команда украсят путешествие и сделают его запоминающимся.</p>
      <p class="camp__prog-text">Регулярные тренировки, здоровое питание, активный отдых, яркие мероприятия и масса<br> развлечений на любой вкус на территории комплекса в течение всего срока пребывания. </p>
      <p class="camp__prog-text">Большая зелёная территория, песчаный пляж, солнце и море - как раз то,  что нужно для<br> качественного отдыха. Проведем время с пользой и удовольствием!</p>
      <div class="camp__prog-picture">
        <img src="~@/assets/camp_prog.jpg" class="camp__prog-img">
        <img src="~@/assets/camp_prog_mob.jpg" class="camp__prog-img_mob">
        <div class="camp__prog-quote">
          <p class="camp__prog-quote-text">Обширная программа<br> и незабываемые впечатления</p>
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
  &__prog {
    padding-top: rem(50px);
    padding-bottom: rem(100px);
    overflow: hidden;
    @include phones {
      padding-top: rem(35px);
    }
    .container {
      overflow: visible;
    }
    &-text {
      @include circe(light);
      font-size: rem(16px);
      line-height: rem(35px);
      margin-bottom: rem(37px);
      @include phones {
        margin-bottom: rem(25px);
      }
    }
    &-picture {
      position: relative;
      margin-left: rem(-308px);
      @include mac {
        margin-left: 0;
      }
      @include base {
        margin-left: rem(-308px);
      }
      @include phones {
        margin-left: rem(-15px);
      }
    }
    &-quote {
      position: absolute;
      right: 0;
      bottom: rem(50px);
      width: rem(462px);
      height: rem(327px);
      display: flex;
      align-items: center;
      padding-left: rem(38px);
      background: white;
      @include phones {
        padding-left: rem(30px);
        bottom: rem(-50px);
        width: rem(335px);
        height: rem(230px);
      }
      &-text {
        @include futura(heavy);
        font-size: rem(50px);
        line-height: rem(60px);
        @include phones {
          font-size: rem(35px);
          line-height: rem(45px);
        }
      }
    }
    &-img {
      @include phones {
        display: none;
      }
      &_mob {
        display: none;
        @include phones {
          display: block;
        }
      }
    }
  }
}
</style>
