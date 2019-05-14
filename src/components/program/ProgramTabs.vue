<template>
  <div class="prog_tabs">
    <div class="container">
      <div class="prog_tabs-content">
        <div class="prog_tabs_activebar" :class="[[this.$store.state.activeProg ==='kids' ? 'prog_tabs_activebar_kids' : ''],[this.$store.state.activeProg ==='adults' ? 'prog_tabs_activebar_adults' : ''], this.$store.state.activeProg ==='team' ? 'prog_tabs_activebar_team' : '']"></div>
        <div class="prog_tabs-line"></div>
        <router-link :to="{name:'programKids', hash:'#prog-wrap'}" tag='div' class="prog_tabs-item">
          <div class="prog_tabs-picture">
            <img src="~@/assets/kids.svg" class="prog_tabs-img">
          </div>
          <div class="prog_tabs-item-text">Дети</div>
        </router-link>
        <div class="prog_tabs-line"></div>
        <router-link :to="{name:'programAdults', hash:'#prog-wrap'}" tag='div' class="prog_tabs-item">
          <div class="prog_tabs-picture">
            <img src="~@/assets/adults.svg" class="prog_tabs-img">
          </div>
          <div class="prog_tabs-item-text">Взрослые</div>
        </router-link>
        <div class="prog_tabs-line"></div>
        <router-link :to="{name:'programTeam', hash:'#prog-wrap'}" tag='div' class="prog_tabs-item">
          <div class="prog_tabs-picture">
            <img src="~@/assets/teams.svg" class="prog_tabs-img">
          </div>
          <div class="prog_tabs-item-text">Тимбилдинг</div>
        </router-link>
        <div class="prog_tabs-line"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
  .prog {
    &_tabs {
      height: rem(77px);
      border: 1px solid #d0d0d2;
      width: 100%;
      background: #f5f6fa;
      position: sticky;
      top: rem(75px);
      left: 0;
      z-index: 3;
      transition: height 0.3s ease-in-out;
      .container {
        width: 100%;
      }
      @include tablets {
        top: 95px;
      }
      @include phones {
        top: 57px;
        height: rem(45px);
      }
      &_sticky {
        height: rem(53px);
        .prog_tabs-picture {
          display: none;
        }
        @include phones {
          height: rem(45px);
        }
      }
      &_activebar {
        position: absolute;
        /* margin-left: 2px; */
        bottom: 0;
        background: #23e54c;
        height: 3px;
        width: 33.3%;
        transition: all 0.5s ease-in-out;
        &_kids {
          left: 0;
        }
        &_adults {
          left: 33.3%;
        }
        &_team {
          left: 66.7%;
        }
      }
      .container {
        height: 100%;
      }
      &-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
      }
      &-item {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: -1px;
        position: relative;
        z-index: 2;
        cursor: pointer;
        &_active {
          border-bottom: 3px solid #23e54c;
        }
        &-text {
          @include futura(demi);
          font-size: rem(15px);
          line-height: rem(26px);
          text-transform: uppercase;
          @include phones {
            font-size: rem(13px);
          }
        }
      }
      &-line {
        width: 1px;
        height: 50px;
        background: #e3e3e6;
      }
      &-picture {
        display: flex;
        align-items: center;
        justify-content: center;
        width: rem(33px);
        height: rem(33px);
        @include phones {
          display: none;
        }
      }
      &-img {
        width: 100%;
        height: 100%;
        margin-right: rem(15px);
      }
    }
  }
</style>
