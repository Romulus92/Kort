<template>
  <div class="camp__list-item">
    <div class="camp__list-item-header">
      <span class="camp__list-item-heading">{{heading}}</span>
      <img src="~@/assets/plus.svg" class="camp__list-item-icon">
    </div>
    <p class="camp__list-item-text">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    text: String
  }
}
</script>

<style lang="scss" scoped>
  .camp {
    &__list {
      &-item {
        width: 29%;
        @include phones {
          width: 48%;
        }
        &-header {
          display: flex;
          align-items: center;
        }
        &-heading {
          font-size: rem(30px);
          line-height: rem(48px);
          @include circe(light);
          margin-right: rem(12px);
          @include phones {
            font-size: rem(22px);
          }
          @include iphones {
            font-size: rem(18px);
          }
        }
        &-text {
          font-size: rem(15px);
          line-height: rem(30px);
          @include circe(light);
        }
        &-icon {
          width: rem(25px);
          height: rem(25px);
        }
      }
    }
  }
</style>
