<template>
  <div class="camp__schedule">
    <div class="container">
      <div class="camp__schedule-content">
        <div class="camp__schedule-item">
          <span class="camp__schedule-week">2 недели</span>
          <span class="camp__schedule-day">с 24 июня по 08 июля 2019 г.</span>
          <img src='~@/assets/camp_schedule1.jpg' class="camp__schedule-img">
          <img src='~@/assets/camp_schedule1_mob.jpg' class="camp__schedule-img_mob">
        </div>
        <div class="camp__schedule-item">
          <span class="camp__schedule-week">3 недели</span>
          <span class="camp__schedule-day">с 17 июня по 08 июля 2019 г.</span>
          <img src="~@/assets/camp_schedule2.jpg" class="camp__schedule-img">
          <img src='~@/assets/camp_schedule2_mob.jpg' class="camp__schedule-img_mob">
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
  &__schedule {
    background: #f5f6fa;
    padding: rem(55px) 0 rem(70px) 0;
    &-content {
      display: flex;
      justify-content: center;
      @include tablets {
        flex-direction: column;
      }
    }
    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      &:first-of-type {
        margin-right: rem(28px);
        @include tablets {
          margin-right: 0;
          margin-bottom: rem(30px);
        }
      }
    }
    &-week {
      @include circe(light);
      font-size: rem(30px);
      line-height: rem(48px);
    }
    &-day {
      @include circe(light);
      font-size: rem(15px);
      line-height: rem(30px);
      margin-bottom: rem(15px);
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
        @include iphones {
          width: 95%;
        }
      }
    }
  }
}
</style>
