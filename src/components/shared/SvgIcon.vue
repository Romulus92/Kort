<template>
  <svg :class="className" xmlns="http://www.w3.org/2000/svg">
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',

  props: {
    name: {
      type: String,
      required: true
    },

    title: {
      type: String,
      default: null
    }
  },

  computed: {
    iconPath () {
      return require(`@/assets/icons/${this.name}.svg`).default.url
    },

    className () {
      return 'svg-icon svg-icon--' + this.name
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  fill: currentColor;
  height: 24px;
  width: 24px;

  &--logo {
    margin-left: 7.3%;
    fill: white;
    min-height: rem(47px);
    min-width: rem(193px);
    height: rem(47px);
    width: rem(193px);
    margin-bottom: rem(8px);
    @include macbookair {
      min-height: rem(37px);
      min-width: rem(153px);
      height: rem(37px);
      width: rem(153px);
      margin-left: 15%;
    }
    @include tablets {
      min-height: rem(31px);
      min-width: rem(127px);
      height: rem(31px);
      width: rem(127px);
    }
    @include phones {
      min-height: rem(24px);
      min-width: rem(96px);
      height: rem(24px);
      width: rem(96px);
      margin-left: 10%;
    }
  }

  &--rechi {
    width: rem(95px);
    height: rem(37px);
    margin-right: rem(17px);
    color: #0d227d;
    @include phones {
      color: white;
    }
  }

  &--inst {
    width: rem(19px);
    height: rem(19px);
    fill: #41464e;
    transition: fill 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      fill: #02b541;
    }
    @include phones {
      fill: white;
    }
  }

  &--vk {
    width: rem(19px);
    height: rem(19px);
    fill: #41464e;
    transition: fill 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      fill: #02b541;
    }
    @include phones {
      fill: white;
    }
  }

  &--hat {
    fill: #0d227d;
    width: rem(36px);
    height: rem(24px);
    margin-right: rem(10px);
  }
}
</style>
