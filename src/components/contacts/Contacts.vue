<template>
  <div class="contacts">
    <div class="contacts-picture"></div>
    <div class="contacts-info">
      <h2 class="contacts-heading">Контакты</h2>
      <div class="contacts-info-content">
        <p class="contacts-text">Всегда рады принять ваш звонок и ответить<br> на все интересующие вопросы по ценам, формату<br> и условиям обучения в академии тенниса Kort 12</p>
        <span class="contacts-phone">8 915 104 4141</span>
        <span class="contacts-email">owltennis@mail.ru</span>
      </div>
      <div class="contacts-form">
        <p class="contacts-form-lead">Оставьте заявку на пробное занятие<br> в академии тенниса Kort 12</p>
        <form class='contacts-form-body' @submit.prevent="processForm">
          <div class='contacts-form-group'>
            <input class="contacts-form-input" name='name' v-model='name' :class="{invalid: $v.name.$error}" @blur='$v.name.$touch()' placeholder="Как к вам обращаться?">
            <div class="error-box">
              <span v-if='$v.name.$error' class="error-item error-name">Имя должно быть длинное не менее 3 символов. </span>
              <span class="error-item error-required" v-if='!$v.name.required && $v.$dirty'>Поле обязательно для заполнения</span>
            </div>
          </div>
          <div class='contacts-form-group'>
            <input class="contacts-form-input" type="phone" v-model='phone' :class="{invalid: $v.name.$error}" @blur='$v.phone.$touch()' v-mask="'9 (999) 99-999-99'" placeholder="8 (911) 11-111-11">
            <div class="error-box">
              <span v-if='$v.phone.$error' class="error-item error-phone">Введите корректный номер телефона. </span>
              <span class="error-item error-required" v-if='!$v.phone.required && $v.$dirty'>Поле обязательно для заполнения</span>
            </div>
          </div>
          <div class="contacts-form-radio">
            <span class='contacts-form-radio-text'>Для</span>
            <input class='contacts-form-group-radio' type="radio" name="age" id='kid' value="Ребенок" v-model="age" checked/>
            <label for="kid" class='contacts-form-group-label'>Ребёнка</label>
            <input class='contacts-form-group-radio' type="radio" name="age" id='adult' value="Взрослый" v-model="age">
            <label for="adult" class='contacts-form-group-label'>Взрослого</label>
          </div>
          <button :disabled='$v.$invalid' type='submit' class="button button_green contacts-form-button">
            <span class="contacts-form-button-text">Отправить</span>
          </button>
        </form>
      </div>
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
      age: 'Ребенок',
      theme: 'Контакты. Заявка на пробное занятие'
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
      const form = document.querySelector('.contacts-form-body')
      const radio = document.querySelector('.contacts-form-radio')
      const input = document.querySelectorAll('.contacts-form-input')
      const formData = {
        name: this.name,
        phone: this.phone,
        age: this.age,
        theme: this.theme
      }
      axios.post(`./post-contacts.php`, formData)
        .then(response => {
          input.forEach((el) => {
            el.classList.add('contacts-form-input_sent')
          })
          radio.insertAdjacentHTML('afterend', '<p class="response-message response-message_success">Благодарим за обращение. В ближайшее время мы Вам перезвоним</p>')
          this.$metrika.reachGoal('contacts_form_zan_send')
          this.$metrika.reachGoal('forms_sent')
          form.reset()
        })
        .catch(e => {
          console.log(e)
          input.forEach((el) => {
            el.classList.add('contacts-form-input_failed')
          })
          console.log(e)
          radio.insertAdjacentHTML('afterend', '<p class="response-message response-message_failure">Произошла ошибка, заявка не отправлена</p>')
        })
    }
  },
  directives: {
    'mask': AwesomeMask
  }
}
</script>

<style lang="scss" scoped>
  .contacts {
    width: 100%;
    height: 100%;
    display: flex;
    &-form {
      &-radio {
        display: flex;
        justify-content: center;
        margin-bottom: rem(15px);
        padding: 0 rem(20px);
        &-text {
          display: flex;
          align-items: center;
          @include circe(light);
          font-size: rem(16px);
          line-height: rem(40px);
          margin-right: rem(10px);
        }
      }
      &-group {
        &-radio {
          position: absolute;
          /* left: -9999em;
          top: -9999em; */
          visibility: hidden;
          &:last-of-type + label {
            margin-right: 0;
          }
          & + label {
            margin-right: rem(10px);
            cursor: pointer;
            @include futura(demi);
            font-size: rem(15px);
            line-height: rem(26px);
            text-transform: uppercase;
            padding: rem(5px) rem(15px) rem(6px) rem(15px);
            border: 1px solid transparent;
            border-radius: 1px;
          }
          &:checked + label {
            border: 1px solid #03de50;
          }
        }
      }
    }
    &-picture {
      width: 50%;
      height: 100%;
      background: url(~@/assets/contacts_image.jpg) center bottom no-repeat;
      @include mac {
        background: url(~@/assets/contacts_image_uhd.jpg) center bottom no-repeat;
      }
      @include base {
        background: url(~@/assets/contacts_image.jpg) center bottom no-repeat;
      }
      @include phones {
        display: none;
      }
    }
    &-info {
      width: 50%;
      @include phones {
        width: 100%;
      }
      &-content {
        margin-left: rem(60px);
        margin-bottom: rem(30px);
        @include phones {
          margin-left: rem(15px);
        }
      }
    }
    &-heading {
      @include futura(heavy);
      font-size: rem(55px);
      margin-left: rem(60px);
      margin-top: rem(15px);
      margin-bottom: rem(15px);
      @include phones {
        margin-left: rem(15px);
      }
    }
    &-text {
      @include circe(light);
      font-size: rem(15px);
      line-height: rem(25px);
      margin-bottom: rem(15px);
    }
    &-email {
      @include circe(light);
      font-size: rem(25px);
      display: block;
      color: #0d227d;
    }
    &-phone {
      @include circe(light);
      font-size: rem(35px);
      display: block;
      color: #0d227d;
      margin-bottom: rem(10px);
    }
    &-form {
      margin-left: rem(25px);
      padding: rem(30px) rem(30px) rem(30px) rem(35px);
      width: rem(395px);
      background: #f5f6fa;
      @include phones {
        margin-left: 0;
        width: 100%;
      }
      &-button {
        height: rem(70px);
        width: 100%;
        &:disabled {
          background: #c4c4c4;
          border: 1px solid #02b541;
          pointer-events: none;
        }
        &-text {
          @include futura(demi);
          text-transform: uppercase;
          color: white;
        }
      }
      &-lead {
        @include futura(demi);
        font-size: rem(15px);
        line-height: rem(26px);
        text-transform: uppercase;
        margin-bottom: rem(20px);
      }
      &-input {
        width: 100%;
        height: rem(60px);
        border: 1px solid #a6a6a6;
        margin-bottom: rem(12px);
        padding-left: rem(30px);
        @include circe(light);
        font-size: rem(16px);
        color: #333333;
        &_failed {
          border: 1px solid #ef5350;
        }
        &_sent {
          border: 1px solid #03de50;
        }
      }
      &-group {
        width: rem(330px);
        @include phones {
          width: 100%;
        }
        .error-box {
          width: 100%;
          margin-top: 0;
        }
      }
    }
  }
</style>
