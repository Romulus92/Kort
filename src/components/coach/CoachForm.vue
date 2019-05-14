<template>
  <div class="coaches-form">
    <div class="coaches-form-content">
      <h2 class="coaches-form-heading">Хотите стать частью команды?</h2>
      <form class="coaches-form-body" @submit.prevent="processForm">
        <div class="coaches-form-radio">
          <input class='coaches-form-group-radio' type="radio" name="role" id='play' value="Обучение" v-model="role" checked />
          <label for="play" class='coaches-form-group-label'>Обучение</label>
          <input class='coaches-form-group-radio' type="radio" name="role" id='work' value="Вакансии" v-model="role">
          <label for="work" class='coaches-form-group-label'>Вакансии</label>
        </div>
        <p class="coaches-form-paragraph">Сделайте главный шаг на пути к обучению и заполните форму. Мы Вам перезвоним</p>
        <div class="coaches-form-input-group">
          <input class="coaches-form-input" :class="{invalid: $v.name.$error}" name="name" @blur='$v.name.$touch()' type="text" placeholder="Имя и фамилия" v-model="name">
          <span class="form-star">*</span>
        </div>
        <div class="coaches-form-input-group">
          <input class="coaches-form-input" :class="{invalid: $v.phone.$error}" name="phone" v-mask="'9 (999) 99-999-99'" @blur='$v.phone.$touch()' type="phone" placeholder="8 (911) 11-111-11" v-model="phone">
          <span class="form-star">*</span>
        </div>
        <textarea class="coaches-form-comment" name="comment" cols="30" rows="10" placeholder="Комментарий" v-model="comment"></textarea>
        <div class="error-box">
          <span v-if='$v.name.$error' class="error-item error-name">Имя должно быть длинное не менее 3 символов. </span>
          <span v-if='$v.phone.$error' class="error-item error-phone">Введите корректный номер телефона. </span>
          <span class="error-item error-required" v-if='!$v.phone.required && $v.$dirty || !$v.name.required && $v.$dirty'>Заполните обязательные поля. </span>
        </div>
        <button class="coaches-form-button" :disabled='$v.$invalid' type="submit">Подать заявку</button>
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
      comment: '',
      role: 'Обучение',
      errors: '',
      theme: 'Тренерский состав'
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
      const form = document.querySelector('.coaches-form-body')
      const error = document.querySelector('.error-box')
      const input = document.querySelectorAll('.coaches-form-input')
      const formData = {
        name: this.name,
        phone: this.phone,
        comment: this.comment,
        role: this.role,
        theme: this.theme
      }
      axios.post(`./post.php`, formData)
        .then(response => {
          input.forEach((el) => {
            el.classList.add('coaches-form-input_sent')
          })
          error.insertAdjacentHTML('afterend', '<p class="response-message response-message_success">Благодарим за обращение. В ближайшее время мы Вам перезвоним</p>')
          this.$metrika.reachGoal('tren_form_send')
          this.$metrika.reachGoal('forms_sent')
          console.log(response)
          form.reset()
          
        })
        .catch(e => {
          input.forEach((el) => {
            el.classList.add('coaches-form-input_failed')
          })
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
  .coaches {
    &-form {
      height: rem(963px);
      background: url(~@/assets/coaches_form.jpg) center center no-repeat;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      @include mac {
        background: url(~@/assets/coaches_form_uhd.jpg) center center no-repeat;
        background-size: cover;
      }
      @include base {
        background: url(~@/assets/coaches_form.jpg) center center no-repeat;
        background-size: cover;
      }
      @include phones {
        background: none;
        height: auto;
      }
      &-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: white;
        width: rem(580px);
        /* height: rem(765px); */
        @include phones {
          background: url(~@/assets/coaches_form_mob.jpg) center center no-repeat;
          background-size: cover;
        }
        form {
          display: flex;
          flex-direction: column;
        }
      }
      &-paragraph {
        @include circe(light);
        font-size: rem(15px);
        line-height: rem(25px);
        width: rem(401px);
        text-align: center;
        margin-bottom: rem(20px);
        @include phones {
          width: 90%;
          color: white;
        }
      }
      &-heading {
        @include circe(light);
        margin-top: rem(60px);
        margin-bottom: rem(30px);
        font-size: rem(30px);
        line-height: rem(59px);
        @include phones {
          color: white;
          width: 70%;
          text-align: center;
          line-height: rem(35px);
        }
      }
      &-info {
        margin-top: rem(20px);
        @include circe(light);
        font-size: rem(15px);
        line-height: rem(30px);
        color: #575757;
        text-align: center;
        @include phones {
          color: white;
        }
      }
      &-radio {
        display: flex;
        justify-content: center;
        margin-bottom: rem(15px);
      }
      &-group {
        &-radio {
          position: absolute;
          /* left: -9999em;
          top: -9999em; */
          visibility: hidden;
          & + label {
            margin-right: rem(10px);
            cursor: pointer;
            @include futura(demi);
            font-size: rem(15px);
            line-height: rem(26px);
            text-transform: uppercase;
            padding: rem(8px) rem(25px) rem(10px) rem(25px);
            border: 1px solid transparent;
            border-radius: 1px;
            @include phones {
              color: white;
            }
          }
          &:checked + label {
            border: 1px solid #03de50;
            @include phones {
              background: #03de50;
            }
          }
        }
      }
      &-input {
        width: 100%;
        height: rem(84px);
        border: 1px solid #d0d0d0;
        padding: rem(40px) rem(32px);
        @include circe(light);
        font-size: rem(16px);
        line-height: rem(40px);
        color: #333333;
        &-group {
          margin-bottom: rem(18px);
          width: rem(401px);
          position: relative;
          display: flex;
          align-items: center;
          @include phones {
            width: 90%;
          }
        }
        &_failed {
          border: 1px solid #ef5350;
        }
        &_sent {
          border: 1px solid #03de50;
        }
        &.invalid {
          border: 1px solid #ef5350;
        }
        @include phones {
          width: 100%;
          height: rem(55px);
          padding: 0 rem(32px);
        }
      }
      &-comment {
        width: rem(401px);
        height: rem(137px);
        border: 1px solid #d0d0d0;
        padding: rem(20px) rem(32px);
        @include circe(light);
        font-size: rem(16px);
        @include phones {
          width: 90%;
        }
      }
      &-button {
        width: rem(188px);
        height: rem(64px);
        background: #03de50;
        color: white;
        text-transform: uppercase;
        border: none;
        border-radius: rem(3px);
        cursor: pointer;
        &:disabled {
          background: #c4c4c4;
          border: 1px solid #03de50;
          cursor: not-allowed;
        }
        @include futura(book);
        font-size: rem(16px);
        line-height: rem(35px);
        align-self: center;
        margin-top: rem(20px);
      }
      &-link {
        @include phones {
          color: white;
          border-bottom: 1px solid white;
        }
      }
      &-body {
        padding: 0 rem(30px) rem(40px) rem(30px);
        @include phones {
          width: 100%;
          padding: 0 0 rem(30px) 0;
          align-items: center;
        }
        .error-item {
          color:#ef9a9a;
        }
      }
    }
  }
</style>
