<template>
  <div class="error">
    <div class="error-picture">
      <img src="~@/assets/broken.png" class="error-img">
    </div>
    <div class="error-content">
      <div class="error-info">
        <h2 class="error-heading">404</h2>
        <span class="error-lead">Что-то пошло не так</span>
        <router-link tag="div" to='/' class="button button_deepblue error-button error-button_main">
          <span class="error-button-text">на главную</span>
        </router-link>
        <router-link tag='div' to='/contacts' class="button button_blue error-button">
          <span class="error-button-text">контакты</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.error {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  @include tablets {
    height: 100%;
  }
  &-picture {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    height: 93%;
    align-items: center;
    position: relative;
    @include tablets {
      display: none;
    }
  }
  &-img {
    height: rem(752px);
    margin-right: rem(50px);
  }
  &-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #f5f5fa;
    position: relative;
    @include tablets {
      width: 100%;
      align-items: center;
      background: none;
    }
    &:after {
      content: "";
      position: absolute;
      width: 100px;
      top: -10%;
      bottom: -10%;
      left: -20px;
      background: #f5f5fa;
      border-radius: 50%;
      @include tablets {
        display: none;
      }
    }
  }
  &-info {
    margin-left: rem(100px);
    width: rem(276px);
    display: flex;
    flex-direction: column;
    align-items: center;
    @include tablets {
      margin-left: 0;
    }
  }
  &-heading {
    @include futura(heavy);
    font-size: rem(150px);
    color: #23e54c;
    margin: 0;
    align-self: flex-start;
    @include tablets {
      align-self: center;
    }
    @include phones {
      font-size: rem(120px);
    }
  }
  &-lead {
    @include futura(demi);
    font-size: rem(15px);
    line-height: rem(26px);
    text-transform: uppercase;
    margin-bottom: rem(60px);
    @include phones {
      margin-bottom: rem(20px);
    }
  }
  &-button {
    height: rem(82px);
    border: 1px solid #0d227d;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: rem(40px);
    &_main {
      border: none;
    }
    @include phones {
      margin-bottom: rem(20px);
    }
    &-text {
      color:#0d227d;
      @include futura(demi);
      font-size: rem(15px);
      line-height: rem(26px);
      text-transform: uppercase;
      z-index: 3;
    }
  }
}
</style>
