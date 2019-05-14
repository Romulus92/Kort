<template>
  <div class="schedule-table">
    <div class="container">
      <div class="schedule-content">
        <div class="schedule-tabs">
          <div class="schedule-tabs-item" @click='activetab = 1' :class="[activetab === 1 ? 'schedule-tabs-item_active' : '']">
            <h2 class="schedule-tabs-heading">Детские группы</h2>
            <div class="schedule-tabs-stats">
              <div class="schedule-tabs-stats-item">
                <img src="~@/assets/people.svg" class="schedule-tabs-stats-img">
                <span class="schedule-tabs-stats-text">до 5-7 человек</span>
              </div>
              <div class="schedule-tabs-stats-item">
                <img src="~@/assets/racket.svg" class="schedule-tabs-stats-img">
                <span class="schedule-tabs-stats-text">2-3 раза в неделю</span>
              </div>
            </div>
          </div>
          <div class="schedule-tabs-item" @click='activetab = 2' :class="[activetab === 2 ? 'schedule-tabs-item_active' : '']">
            <h2 class="schedule-tabs-heading">Взрослые группы</h2>
            <div class="schedule-tabs-stats">
              <div class="schedule-tabs-stats-item">
                <img src="~@/assets/people.svg" class="schedule-tabs-stats-img">
                <span class="schedule-tabs-stats-text">до 5 человек</span>
              </div>
              <div class="schedule-tabs-stats-item">
                <img src="~@/assets/racket.svg" class="schedule-tabs-stats-img">
                <span class="schedule-tabs-stats-text">2-3 раза в неделю</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if='activetab === 1' class="schedule-table-kids">
          <div class="schedule-table-item" @click='activeKids=1' :class="activeKids === 1 ? 'schedule-table-item_active' : ''">
            <div class="schedule-table-item-header">
              <div class="schedule-table-item-heading">
                <span class="schedule-table-item-heading-text">Первый год</span>
                <div class="schedule-table-item-heading-arrow"></div>
              </div>
              <span class="schedule-table-item-cost"><span class='schedule-table-item-cost_bold'>7 500 ₽</span> / мес.</span>
            </div>
            <div class="schedule-table-item-line"></div>
            <div class="schedule-table-item-content">
              <div class="schedule-table-item-group">
                <div class="schedule-table-item-info">
                  <span class="schedule-table-item-number">Группа №1</span>
                  <span class="schedule-table-item-age">дети 4–5 лет</span>
                </div>
                <div class="schedule-table-item-time">
                  <span class="schedule-table-item-time-text">вт, чт 18—19<sup>00</sup></span>
                </div>
              </div>
              <div class="schedule-table-item-group">
                <div class="schedule-table-item-info">
                  <span class="schedule-table-item-number">Группа №2</span>
                  <span class="schedule-table-item-age">дети 7–10 лет</span>
                </div>
                <div class="schedule-table-item-time">
                  <span class="schedule-table-item-time-text">вт, чт 17—18<sup>00</sup></span>
                </div>
              </div>
            </div>
          </div>
          <div class="schedule-table-item" @click='activeKids=2' :class="activeKids === 2 ? 'schedule-table-item_active' : ''">
            <div class="schedule-table-item-header">
              <div class="schedule-table-item-heading">
                <span class="schedule-table-item-heading-text">Второй год</span>
                <div class="schedule-table-item-heading-arrow"></div>
              </div>
              <span class="schedule-table-item-cost"><span class='schedule-table-item-cost_bold'>7 500 -<br> 10 000 ₽</span> / мес.</span>
            </div>
            <div class="schedule-table-item-line"></div>
            <div class="schedule-table-item-content">
              <div class="schedule-table-item-group">
                <div class="schedule-table-item-info">
                  <span class="schedule-table-item-number">Группа №2</span>
                  <span class="schedule-table-item-age">дети 5–6 лет</span>
                </div>
                <div class="schedule-table-item-time">
                  <span class="schedule-table-item-time-text">вт 18—19<sup>00</sup> чт 19—20<sup>00</sup> сб</span>
                </div>
              </div>
            </div>
          </div>
          <div class="schedule-table-item" @click='activeKids=3' :class="activeKids === 3 ? 'schedule-table-item_active' : ''">
            <div class="schedule-table-item-header">
              <div class="schedule-table-item-heading">
                <span class="schedule-table-item-heading-text">Третий год</span>
                <div class="schedule-table-item-heading-arrow"></div>
              </div>
              <span class="schedule-table-item-cost"><span class='schedule-table-item-cost_bold'>7 500 -<br> 10 000 ₽</span> / мес.</span>
            </div>
            <div class="schedule-table-item-line"></div>
            <div class="schedule-table-item-content">
              <div class="schedule-table-item-group">
                <div class="schedule-table-item-info">
                  <span class="schedule-table-item-number">Группа №2</span>
                  <span class="schedule-table-item-age">дети 7–9 лет</span>
                </div>
                <div class="schedule-table-item-time">
                  <span class="schedule-table-item-time-text">пн, ср, пт 17—18<sup>30</sup> сб-игровой час</span>
                </div>
              </div>
              <div class="schedule-table-item-group">
                <div class="schedule-table-item-info">
                  <span class="schedule-table-item-number">Группа №3</span>
                  <span class="schedule-table-item-age">дети 9–11 лет</span>
                </div>
                <div class="schedule-table-item-time">
                  <span class="schedule-table-item-time-text">пн, ср, пт 18<sup>30</sup>—20<sup>00</sup></span>
                </div>
              </div>
            </div>
          </div>
          <div class="schedule-table-line"></div>
          <div class="schedule-metro">
            <div class="schedule-metro-content">
              <div class="schedule-metro-picture">
                <img src="~@/assets/metro.png" class="schedule-metro-img">
              </div>
              <div class="schedule-metro-info">
                <span class="schedule-metro-station">Сокольники</span>
                <p class="schedule-metro-adress">Москва, ул. Сокольнический вал, 28с1</p>
              </div>
            </div>
          </div>
        </div>
        <div v-if='activetab === 2' class="schedule-table-adults">
          <div class="schedule-table-item schedule-table-item_active">
            <div class="schedule-table-item-header">
              <div class="schedule-table-item-heading">
                <span class="schedule-table-item-heading-text">Стоимость обучения</span>
              </div>
              <span class="schedule-table-item-cost"><span class='schedule-table-item-cost_bold'>8 000 ₽</span> / мес.</span>
            </div>
            <div class="schedule-table-item-line"></div>
            <div class="schedule-table-item-content">
              <div class="schedule-table-item-group">
                <div class="schedule-table-item-info">
                  <span class="schedule-table-item-number">Группа №1</span>
                </div>
                <div class="schedule-table-item-time">
                  <span class="schedule-table-item-time-text">пн, ср 21—22<sup>00</sup></span>
                </div>
              </div>
              <div class="schedule-table-item-group">
                <div class="schedule-table-item-info">
                  <span class="schedule-table-item-number">Группа №2</span>
                </div>
                <div class="schedule-table-item-time">
                  <span class="schedule-table-item-time-text">пн, ср 22—23<sup>00</sup></span>
                </div>
              </div>
            </div>
          </div>
          <div class="schedule-table-line"></div>
          <div class="schedule-metro">
            <div class="schedule-metro-content">
              <div class="schedule-metro-picture">
                <img src="~@/assets/metro.png" class="schedule-metro-img">
              </div>
              <div class="schedule-metro-info">
                <span class="schedule-metro-station">Сокольники</span>
                <p class="schedule-metro-adress">Москва, ул. Большая Тихоновская, <br>д. 14, стадион «Связист»</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activetab: 1,
      activeKids: 1,
      activeAdults: 1
    }
  }
}
</script>

<style lang="scss" scoped>
  .schedule {
    &-content {
      padding: 0 rem(105px);
      @include tablets {
        padding: 0;
      }
    }
    &-table {
      margin-bottom: rem(100px);
      @include tablets {
        margin-bottom: rem(50px);
      }
      &-item {
        width: 100%;
        height: rem(90px);
        max-height: rem(90px);
        padding: 0 rem(40px);
        border: 1px solid #e8e8e8;
        border-radius: 3px;
        transition: max-height 0.5s ease-in-out;
        margin-bottom: rem(13px);
        overflow: hidden;
        cursor: pointer;
        @include phones {
          padding: 0 rem(15px);
        }
        &_active {
          border: 1px solid #23e54c;
          height: auto;
          max-height: rem(300px);
          .schedule-table-item-heading-arrow {
            transform: rotate(180deg);
          }
          .schedule-table-item-heading {
            border: none;
          }
        }
        &-content {
          display: flex;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: rem(99px);
          width: rem(740px);
          @include tablets {
            width: 100%;
          }
          @include phones {
            height: auto;
            padding: rem(20px) 0;
            flex-direction: column;
            align-items: flex-start;
          }
        }
        &-line {
          height: 1px;
          width: 100%;
          background: #e1e3e5;
        }
        &-group {
          display: flex;
          justify-content: space-between;
          align-items: center;
          @include tablets {
            justify-content: flex-start;
            width: 50%;
            margin-right: rem(20px);
            &:last-of-type {
              margin-right: 0;
            }
          }
          @include phones {
            margin-right: 0;
            margin-bottom: rem(20px);
            width: 100%;
            &:last-of-type {
              margin-bottom: 0;
            }
          }
        }
        &-info {
          display: flex;
          flex-direction: column;
          margin-right: rem(20px);
        }
        &-header {
          height: rem(90px);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        &-heading {
          display: flex;
          align-items: center;
          border-bottom: 1px dashed #0d227d;
          &-text {
            color: #0d227d;
            @include futura(demi);
            font-size: rem(15px);
            line-height: rem(26px);
            text-transform: uppercase;
            margin-right: rem(15px);
          }
          &-arrow {
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 6px solid #0d227d;
            transition: transform 0.5s ease-in-out;
          }
        }
        &-cost {
          @include circe(light);
          font-size: rem(20px);
          color: #6f6f6f;
          br {
            display: none;
          }
          @include phones {
            br {
              display: block;
            }
          }
          &_bold {
            @include circe(extrabold);
          }
        }
        &-number {
          @include futura(demi);
          font-size: rem(15px);
          line-height: rem(26px);
          text-transform: uppercase;
        }
        &-age {
          @include circe(light);
          font-size: rem(15px);
          line-height: rem(24px);
        }
        &-time {
          height: rem(48px);
          background: #f2f4f6;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 rem(10px);
          @include tablets {
            max-width: 50%;
            padding: rem(10px) rem(10px);
            height: auto;
          }
          &-text {
            @include circe(light);
            font-size: rem(18px);
            left: rem(60px);
          }
        }
      }
      &-line {
        height: rem(4px);
        background: #d0d0d2;
      }
    }
    &-metro {
      display: flex;
      justify-content: center;
      margin-top: rem(34px);
      &-content {
        display: flex;
      }
      &-station {
        @include futura(demi);
        color: #555555;
        font-size: rem(13px);
        line-height: rem(26px);
        text-transform: uppercase;
      }
      &-adress {
        @include circe(light);
        font-size: rem(13px);
        line-height: rem(24px);
      }
      &-picture {
        display: flex;
        align-items: flex-start;
        margin-right: rem(18px);
      }
    }
    &-tabs {
      display: flex;
      margin-bottom: rem(25px);
      &-stats {
        display: flex;
        @include phones {
          flex-direction: column;
        }
        &-item {
          display: flex;
          align-items: center;
          &:first-of-type {
            margin-right: rem(28px);
          }
        }
        &-img {
          margin-right: rem(8px);
        }
      }
      &-item {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: rem(130px);
        justify-content: center;
        background: #f5f6fa;
        border: 1px solid #d0d0d2;
        border-radius: 3px;
        cursor: pointer;
        transition: box-shadow 0.3s ease-in-out;
        &:hover {
          box-shadow: inset 0px 0px 19px 6px rgba(13,34,125,0.14);
        }
        &_active {
          background: #0d227d;
          border: 1px solid #0d227d;
          .schedule-tabs-stats-text {
            color: white;
          }
          .schedule-tabs-heading {
            color: white;
          }
        }
      }
      &-heading {
        margin: 0;
        margin-bottom: rem(20px);
        @include circe(light);
        font-size: rem(30px);
        color: #0d227d;
        @include phones {
          font-size: rem(20px);
        }
        @include iphones {
          font-size: rem(18px);
        }
      }
      &-stats {
        &-img {
          width: rem(22px);
          height: rem(22px);
        }
        &-text {
          font-size: rem(15px);
          line-height: rem(30px);
          @include circe(light);
          color: #0d227d;
          @include iphones {
            font-size: rem(14px);
          }
        }

      }
    }
  }
</style>
