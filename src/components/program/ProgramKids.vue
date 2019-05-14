<template>
  <div class="prog-kids" id="prog-kids">
    <div class="container">
      <div class="prog-kids-academy">
        <div class="prog-kids-info">
          <h2 class="prog-kids-info-heading">Академия тенниса Kort–12</h2>
          <p class="prog-kids-info-text">Академия тенниса Kort-12 станет отличным хобби для вашего ребенка. Большой теннис совмещает в себе игровые моменты и азарт, а значит, сможет увлечь юного спортсмена и сделать уроки желанными и веселыми.</p>
          <p class="prog-kids-info-text">Маленький теннисист найдет единомышленников и заведет новые знакомства с целеустремленными и амбициозными детьми, получив массу удовольствия от общения и игрового соперничества.</p>
        </div>
        <div class="prog-kids-picture">
          <img src="~@/assets/prog_kids1.jpg" class="prog-kids-img">
          <div class="prog-kids-rect"></div>
        </div>
      </div>
      <div class="prog-kids-quote">
        <p class="prog-kids-quote-text">Игровой спорт - это хорошая физическая нагрузка, необходимая для<br> гармоничного развития внешнего и внутреннего «я».</p>
      </div>
      <div class="prog-kids-pro">
        <img src="~@/assets/prog_kids2.jpg" class="prog-kids-pro-img">
        <img src="~@/assets/prog_kids2_mob.jpg" class="prog-kids-pro-img_mob">
        <div class="prog-kids-pro-info">
          <p class="prog-kids-pro-info-text">От любителя до профессионала</p>
        </div>
      </div>
      <div class="prog-kids-info">
        <p class="prog-kids-info-text">Почему мы рекомендуем теннис для подрастающего поколения? Все просто! Большой теннис развивает координацию, формирует сильные мышцы и красивый силуэт. Занятия подходят как для мальчиков, которые смогут вложить в урок свой энтузиазм и энергию, так и для девочек, которым важно получить физическую нагрузку для гармоничной фигуры и правильной осанки.</p>
        <p class="prog-kids-info-text">Обучение в небольших группах среди учеников одного возраста, заметно сокращает период адаптации и повышает эффективность занятий. Уроки проводят квалифицированные инструкторы, имеющие опыт общения с детьми: они способные не только научить игре, но и увлечь ребенка спортом. Тренера строго соблюдают все правила безопасности и следят за исправностью оборудования.</p>
      </div>
      <div class="prog-kids-quote">
        <p class="prog-kids-quote-text">Большой теннис для детей — это не только инвестиция в здоровье ребенка,<br> но и увлекательное хобби на всю жизнь.</p>
      </div>
    </div>
    <div class="prog-kids-camp" id='camp'>
      <h2 class="prog-kids-camp-heading">Летний лагерь с KORT–12</h2>
      <span class="prog-kids-camp-lead">Устройте ребенку лучшие каникулы</span>
      <form class="prog-kids-form" @submit.prevent='processForm'>
        <div class="prog-kids-input-group">
          <div class="form-group">
            <input type="text" name='name' v-model='name' class="prog-kids-input" :class="{invalid: $v.name.$error}" @blur='$v.name.$touch()' placeholder="Как к вам обращаться?">
            <span class="form-star">*</span>
          </div>
          <div class="error-box">
            <span v-if='$v.name.$error' class="error-item error-name">Имя должно быть длинное не менее 3 символов. </span>
            <span class="error-item error-required" v-if='!$v.name.required && $v.$dirty'>Поле обязательно для заполнения</span>
          </div>
        </div>
        <div class="prog-kids-input-group">
          <div class='form-group'>
            <input name='phone' type="phone" v-model='phone' class="prog-kids-input" :class="{invalid: $v.name.$error}" @blur='$v.phone.$touch()' v-mask="'9 (999) 99-999-99'" placeholder="8 (911) 11-111-11">
            <span class="form-star">*</span>
          </div>
          <div class="error-box">
            <span v-if='$v.phone.$error' class="error-item error-phone">Введите корректный номер телефона. </span>
            <span class="error-item error-required" v-if='!$v.phone.required && $v.$dirty'>Поле обязательно для заполнения</span>
          </div>
        </div>
        <div class="prog-kids-camp-button-wrap">
          <button :disabled='$v.$invalid' type="submit" class="button button_green prog-kids-camp-button">
            <span class="prog-kids-camp-button-text">отправить</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { required, minLength } from 'vuelidate/lib/validators'
import AwesomeMask from 'awesome-mask'

export default {
  data () {
    return {
      name: '',
      phone: '',
      theme: 'Программы. Дети, лагерь'
    }
  },
  validations: {
    name: {
      required,
      minLen: minLength(3)
    },
    phone: {
      required,
      rusPhone: value => {
        if (typeof value === 'undefined' || value === null || value === '') {
          return true
        }
        return /^(7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{2}[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}$/.test(value)
      }
    }
  },
  methods: {
    processForm () {
      const form = document.querySelector('.prog-kids-form')
      const button = document.querySelector('.prog-kids-camp-button')
      const input = document.querySelectorAll('.prog-kids-input')
      const formData = {
        name: this.name,
        phone: this.phone,
        theme: this.theme
      }
      axios.post(`../post-feedback.php`, formData)
        .then(response => {
          this.$metrika.reachGoal('kids_form_camp_send')
          this.$metrika.reachGoal('forms_sent')
          form.reset()
          input.forEach((el) => {
            el.classList.add('prog-kids-input_sent')
          })
          button.insertAdjacentHTML('afterend', '<p class="response-message response-message_success">Благодарим за обращение. В ближайшее время мы Вам перезвоним</p>')
        })
        .catch(e => {
          input.forEach((el) => {
            el.classList.add('prog-kids-input_failed')
          })
          button.insertAdjacentHTML('afterend', '<p class="response-message response-message_failure">Произошла ошибка, заявка не отправлена</p>')
        })
    }
  },
  directives: {
    'mask': AwesomeMask
  }
}
</script>

<style lang="scss" scoped>
.prog {
  &-kids {
    padding-top: rem(110px);
    overflow: hidden;
    @include phones {
      padding-top: 0;
    }
    .container {
      overflow: visible;
    }
    &-academy {
      display: flex;
      margin-bottom: rem(50px);
      @include phones {
        flex-direction: column;
      }
      .prog-kids-info {
        @include tablets {
          width: 50%;
          padding-left: 0;
        }
        @include phones {
          width: 100%;
        }
      }
    }
    &-info {
      width: 58%;
      padding-left: rem(135px);
      padding-right: rem(40px);
      @include tablets {
        width: 100%;
        padding: 0;
      }
      @include phones {
        width: 100%;
      }
      &-heading {
        font-size: rem(50px);
        line-height: rem(60px);
        @include futura(heavy);
      }
      &-text {
        @include circe(light);
        font-size: rem(15px);
        line-height: rem(35px);
        margin-bottom: rem(45px);
        color: #333333;
        @include phones {
          margin-bottom: rem(20px);
        }
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
    &-picture {
      width: 42%;
      position: relative;
      @include tablets {
        width: 50%;
        margin-left: rem(50px);
      }
      @include phones {
        width: 100%;
        margin-left: rem(-20px);
      }
    }
    &-img {
      margin-left: rem(80px);
      position: relative;
      z-index: 2;
      @include mac {
        width: 100%;
      }
      @include tablets {
        width: 110%;
        margin-left: 0;
        margin-top: rem(30px);
      }
    }
    &-rect {
      width: rem(858px);
      height: rem(435px);
      background: #f5f6fa;
      position: absolute;
      bottom: 0;
      left: 0;
      @include tablets {
        top: 0;
        bottom: initial;
        margin-left: rem(40px);
      }
      @include phones {
        display: none;
      }
    }
    &-quote {
      display: flex;
      align-items: center;
      border-left: 4px solid #23e54c;
      height: rem(110px);
      padding-left: rem(35px);
      margin-bottom: rem(90px);
      @include tablets {
        margin-top: rem(30px);
        margin-bottom: rem(30px);
      }
      @include phones {
        height: auto;
        margin-top: rem(30px);
        margin-bottom: rem(30px);
      }
      &-text {
        @include futura(lightobl);
        font-size: rem(28px);
        line-height: rem(37px);
        br {
          @include phones {
            display: none;
          }
        }
        @include phones {
          font-size: rem(24px);
          line-height: rem(32px);
        }
      }
    }
    &-pro {
      position: relative;
      margin-bottom: rem(55px);
      &-img {
        margin-left: rem(-240px);
        @include mac {
          width: 100%;
        }
        @include tablets {
          width: 100%;
          margin-left: 0;
        }
        @include phones {
          display: none;
        }
        &_mob {
          display: none;
          margin-left: rem(-20px);
          @include phones {
            display: block;
          }
        }
      }
      &-info {
        width: rem(515px);
        height: rem(215px);
        padding: rem(50px) 0 0 rem(55px);
        position: absolute;
        right: 0;
        top: rem(420px);
        background: white;
        @include mac {
          top: rem(300px);
        }
        @include base {
          top: rem(420px);
        }
        @include tablets {
          width: rem(300px);
          height: rem(130px);
          padding: rem(20px) 0 0 rem(20px);
          top: initial;
          bottom: 0;
        }
        @include phones {
          top: 0;
          bottom: initial;
          left: 0;
          padding: rem(35px) 0 0 rem(20px);
        }
        &-text {
          @include futura(heavy);
          font-size: rem(50px);
          left: rem(60px);
          @include tablets {
            font-size: rem(34px);
            line-height: rem(40px);
          }
          @include phones {
            font-size: rem(32px);
            line-height: rem(40px);
          }
        }
      }
    }
    &-camp {
      height: rem(720px);
      background: url(~@/assets/prog_kids_camp.jpg) center center no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;
      @include mac {
        height: rem(550px);
        background: url(~@/assets/prog_kids_camp_uhd.jpg) center center no-repeat;
      }
      @include base {
        height: rem(720px);
        background: url(~@/assets/prog_kids_camp.jpg) center center no-repeat;
      }
      &-heading {
        @include futura(heavy);
        font-size: rem(50px);
        line-height: rem(60px);
        color: white;
        text-align: center;
        margin-top: rem(70px);
        margin-bottom: rem(10px);
      }
      &-lead {
        @include circe(light);
        font-size: rem(20px);
        line-height: rem(60px);
        color: white;
        margin-bottom: rem(50px);
      }
      &-button {
        width: rem(330px);
        height: rem(70px);
        margin-bottom: rem(20px);
        &-wrap {
          width: rem(330px);
        }
        &:disabled {
          background: #c4c4c4;
          border: 1px solid #02b541;
          pointer-events: none;
        }
        @include tablets {
          width: 60%;
        }
        @include phones {
          width: 90%;
        }
        &-text {
          @include futura(demi);
          font-size: rem(15px);
          line-height: rem(26px);
          color: white;
          text-transform: uppercase;
        }
      }
    }
    &-form {
      display: flex;
      width: rem(1015px);
      justify-content: space-between;
      @include tablets {
        width: 100%;
        flex-direction: column;
        align-items: center;
      }
    }
    &-input {
      width: 100%;
      height: rem(70px);
      border: 1px solid white;
      background: rgba($color: #fff, $alpha: 0.1);
      @include circe(light);
      font-size: rem(18px);
      line-height: rem(40px);
      padding: 0 rem(30px);
      color: white;
      &_sent {
        border: 1px solid #03de50;
      }
      &_failed {
        border: 1px solid #ef5350;
      }
      &.invalid {
        background: rgba($color: #e14141, $alpha: 0.1);
        border: 1px solid #ef5350;
      }
      &-group {
        width: rem(330px);
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        .error-box {
          width: 100%;
          .error-item {
            color: #ef9a9a;
          }
        }
        @include tablets {
          width: 60%;
          margin-bottom: rem(20px);
        }
        @include phones {
          width: 90%;
          margin-bottom: rem(10px);
        }
      }
      
      &::placeholder {
        color: white;
      }
    }
  }
}
</style>
