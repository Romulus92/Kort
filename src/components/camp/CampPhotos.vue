<template>
  <div class="camp__photos">
    <div class="container">
      <div class="camp__photos-content">
        <img src="~@/assets/camp_photo1.jpg" class="camp__photos-item">
        <img src="~@/assets/camp_photo2.jpg" class="camp__photos-item">
        <img src="~@/assets/camp_photo3.jpg" class="camp__photos-item">
        <img src="~@/assets/camp_photo_mob.jpg" class="camp__photos-item_mob">
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
    &__photos {
      padding-top: 40px;
      overflow: hidden;
      .container {
        overflow: visible;
      }
      &-content {
        width: rem(1509px);
        display: flex;
        justify-content: space-between;
        margin-left: rem(-170px);
        @include mac {
          width: rem(1250px);
          margin-left: 0;
        }
        @include base {
          width: rem(1509px);
          margin-left: rem(-170px);
        }
        @include phones {
          margin-left: rem(-20px);
        }
      }
      &-item {
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
