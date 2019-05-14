<template>
  <div class="form-body">
    <h2 class="form-heading">{{formTitle}}</h2>
    <form class="form-content" @submit.prevent='processForm()'>
      <div class="form-group">
        <input type="text" name='name' class="form-input" placeholder="Как к вам обращаться?" v-model='name' :class="{invalid: $v.name.$error}" @blur='$v.name.$touch()'>
        <span class="form-star">*</span>
      </div>
      <div class="form-group">
        <input name='phone' class="form-input" placeholder="8 (911) 11-111-11" v-model='phone' :class="{invalid: $v.phone.$error}" @blur='$v.phone.$touch()' v-mask="'9 (999) 99-999-99'">
        <span class="form-star">*</span>
      </div>
      <div class="error-box">
        <span v-if='$v.name.$error' class="error-item error-name">Имя должно быть длинное не менее 3 символов. </span>
        <span v-if='$v.phone.$error' class="error-item error-phone">Введите корректный номер телефона. </span>
        <span class="error-item error-required" v-if='!$v.phone.required && $v.$dirty || !$v.name.required && $v.$dirty'>Заполните обязательные поля. </span>
      </div>
      <button :disabled='$v.$invalid' type='submit' class="button button_green form-submit">
        <span class="form-submit-text">Отправить</span>
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { required, minLength } from 'vuelidate/lib/validators'
import AwesomeMask from 'awesome-mask'
import { mapState } from 'vuex'
import VueYandexMetrika from 'vue-yandex-metrika'

export default {
  props: [
    'formTitle',
    'formTheme'
  ],
  data () {
    return {
      name: '',
      phone: ''
    }
  },
  computed: {
    ...mapState(['modalType'])
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
      this.$metrika.reachGoal(this.$store.state.modalType)
      const form = document.querySelector('.form-content')
      const error = document.querySelector('.error-box')
      const input = document.querySelectorAll('.form-input')
      const formData = {
        name: this.name,
        phone: this.phone,
        theme: this.formTheme
      }
      form.reset()
      axios.post(`./post-feedback.php`, formData)
        .then(response => {
          form.reset()
          let self = this;
          setTimeout(function() {
            self.$modal.hide('tryschedule')
            self.$modal.hide('feedback')
            self.$modal.hide('tryprice')
            self.$modal.hide('tryabout')
            self.$modal.hide('tryadress')
            self.$modal.hide('tryheader')
            self.$modal.hide('try')
            self.$modal.hide('trymenu')
          }, 2000)
          input.forEach((el) => {
            el.classList.add('form-input_sent')
          })
          this.$metrika.reachGoal('forms_sent')
          error.insertAdjacentHTML('afterend', '<p class="response-message response-message_success">Благодарим за обращение. В ближайшее время мы Вам перезвоним</p>')
        })
        .catch(e => {
          input.forEach((el) => {
            el.classList.add('form-input_failed')
          })
          console.log(e)
          error.insertAdjacentHTML('afterend', '<p class="response-message response-message_failure">Произошла ошибка, заявка не отправлена</p>')
        })
    }
  },
  directives: {
    'mask': AwesomeMask
  }
}
</script>

<style lang="scss" scoped>
  .form {
    &-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      @include phones {
        padding: rem(20px) 0;
      }
    }
    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    &-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: rem(10px);
      position: relative;
      justify-content: center;
      @include phones {
        width: 100%;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
    &-heading {
      width: rem(330px);
      text-align: center;
      @include circe(light);
      font-size: rem(30px);
      line-height: rem(60px);
      margin-top: 0;
      @include phones {
        width: 95%;
        font-size: rem(20px);
        line-height: rem(40px);
      }
    }
    &-input {
      width: rem(330px);
      height: rem(70px);
      border: 1px solid #a6a6a6;
      @include circe(light);
      font-size: rem(16px);
      padding: 0 rem(30px);
      color: #333333;
      &::placeholder {
        color: #333333;
      }
      @include phones {
        width: 100%;
        height: rem(55px);
      }
      &.invalid {
        border: 1px solid #ef5350;
      }
      &_sent {
        border: 1px solid #03de50;
      }
      &_failed {
        border: 1px solid #ef5350;
      }
      /* &_phone {
        letter-spacing: 2px;
      } */
    }
    &-submit {
      width: rem(330px);
      height: rem(70px);
      @include phones {
        width: 100%;
        height: rem(55px);
      }
      &:disabled {
        background: #c4c4c4;
        border: 1px solid #02b541;
        pointer-events: none;
      }
      &-text {
        color: white;
        @include futura(demi);
        font-size: rem(16px);
        line-height: rem(35px);
        text-transform: uppercase;
      }
    }
  }
</style>
