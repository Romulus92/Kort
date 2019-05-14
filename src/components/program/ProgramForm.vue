<template>
  <div class="prog-form">
    <div class="container">
      <div class="prog-form-content">
        <h2 class="prog-form-heading">{{formTitle}}</h2>
        <form class="prog-form-body" @submit.prevent='processForm'>
          <div class='prog-form-input-group'>
            <div class="form-group">
              <input type="text" name='name' v-model='name' :class="{invalid: $v.name.$error}" @blur='$v.name.$touch()' placeholder="Как к вам обращаться?" class="prog-form-input">
              <span class='form-star'>*</span>
            </div>
            <div class="error-box">
              <span v-if='$v.name.$error' class="error-item error-name">Имя должно быть длинное не менее 3 символов. </span>
              <span class="error-item error-required" v-if='!$v.name.required && $v.$dirty'>Поле обязательно для заполнения</span>
            </div>
          </div>
          <div class='prog-form-input-group'>
            <div class="form-group">
              <input name='phone' type="phone" class="prog-form-input" v-model='phone' :class="{invalid: $v.phone.$error}" @blur='$v.phone.$touch()' v-mask="'9 (999) 99-999-99'" placeholder="8 (911) 11-111-11">
              <span class='form-star'>*</span>
            </div>
            <div class="error-box">
              <span v-if='$v.phone.$error' class="error-item error-phone">Введите корректный номер телефона. </span>
              <span class="error-item error-required" v-if='!$v.phone.required && $v.$dirty'>Поле обязательно для заполнения</span>
            </div>
          </div>
          <div class="prog-form-button-wrap">
            <button :disabled='$v.$invalid' class='button button_green prog-form-button' type="submit">
              <span class="prog-form-button-text">Отправить</span>
            </button>
          </div>
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
  props: {
    formTitle: String,
    formName: String,
    formTheme: String
  },
  data () {
    return {
      name: '',
      phone: ''
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
      const form = document.querySelector('.prog-form-body')
      const button = document.querySelector('.prog-form-button')
      const input = document.querySelectorAll('.prog-form-input')
      const formData = {
        name: this.name,
        phone: this.phone,
        theme: this.formTheme
      }
      axios.post(`../post-camp.php`, formData)
        .then(response => {
          this.$metrika.reachGoal(this.formName)
          this.$metrika.reachGoal('forms_sent')
          form.reset()
          input.forEach((el) => {
            el.classList.add('prog-form-input_sent')
          })
          button.insertAdjacentHTML('afterend', '<p class="response-message response-message_success">Благодарим за обращение. В ближайшее время мы Вам перезвоним</p>')
        })
        .catch(e => {
          input.forEach((el) => {
            el.classList.add('prog-form-input_failed')
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
    &-form {
      .container {
        width: 100%;
      }
      @include phones {
        width: 100%;
      }
      &-heading {
        font-size: rem(30px);
        line-height: rem(60px);
        @include circe(light);
        margin: 0;
        margin-bottom: rem(20px);
        max-width: rem(650px);
        text-align: center;
        @include phones {
          width: 80%;
          text-align: center;
          font-size: rem(25px);
          line-height: rem(35px);
        }
      }
      &-content {
        background: #f5f6fa;
        height: rem(311px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @include tablets {
          height: auto;
          padding: rem(30px);
        }
        @include phones {
          padding: rem(20px) 0;
        }
      }
      &-body {
        display: flex;
        justify-content: space-between;
        width: 86.7%;
        @include tablets {
          flex-direction: column;
          align-items: center;
          margin-bottom: rem(20px);
        }
        @include phones {
          width: 100%;
        }
      }
      &-input {
        width: 100%;
        height: rem(70px);
        border: 1px solid #a6a6a6;
        @include circe(light);
        font-size: rem(16px);
        padding: 0 rem(30px);
        &.invalid {
          border: 1px solid #ef5350;
        }
        &_sent {
          border: 1px solid #03de50;
        }
        &_failed {
          border: 1px solid #ef5350;
        }
        &-group {
          width: rem(330px);
          display: flex;
          flex-direction: column;
          align-items: center;
          .form-group {
            width: 100%;
            @include netbooks {
              width: 90%;
            }
            @include phones {
              width: 100%;
            }
          }
          @include tablets {
            margin-bottom: rem(20px);
            width: 60%;
          }
          @include phones {
            width: 90%;
          }
        }
      }
      &-button {
        width: rem(330px);
        height: rem(70px);
        margin-bottom: rem(20px);
        &-wrap {
          width: rem(330px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
          font-size: rem(16px);
          color: white;
          text-transform: uppercase;
        }
      }
    }
  }
</style>
