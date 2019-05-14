<template>
  <div class="prog-team" id='prog-team'>
    <div class="prog-team-block">
      <div class="container">
        <h2 class="prog-team-heading">Тактика в спорте,<br> стратегия в работе</h2>
        <p class="prog-team-text">Желаете, чтобы сотрудники стали еще эффективнее?<br> Укрепите свою команду приятной игрой в большой теннис.</p>
      </div>
    </div>
    <div class="prog-team-adv">
      <div class="container">
        <div class="prog-team-adv-item">
          <div class="prog-team-adv-picture">
            <img src="~@/assets/victory.svg" class="prog-team-adv-img">
          </div>
          <span class="prog-team-adv-text">Движение<br> к новым победам</span>
        </div>
        <div class="prog-team-adv-item">
          <div class="prog-team-adv-picture">
            <img src="~@/assets/fairplay.svg" class="prog-team-adv-img">
          </div>
          <span class="prog-team-adv-text">Честная борьба<br> с коллегами</span>
        </div>
        <div class="prog-team-adv-item">
          <div class="prog-team-adv-picture">
            <img src="~@/assets/competition.svg" class="prog-team-adv-img prog-team-adv-img_comp">
          </div>
          <span class="prog-team-adv-text">Соревновательный<br> дух</span>
        </div>
        <div class="prog-team-adv-item">
          <div class="prog-team-adv-picture">
            <img src="~@/assets/teambuilding.svg" class="prog-team-adv-img">
          </div>
          <span class="prog-team-adv-text">Командо–<br>образование</span>
        </div>
        <div class="prog-team-adv-item">
          <div class="prog-team-adv-picture">
            <img src="~@/assets/talent.svg" class="prog-team-adv-img">
          </div>
          <span class="prog-team-adv-text">Проявление<br> внутренних талантов</span>
        </div>
      </div>
    </div>
    <div class="prog-team-block">
      <div class="container">
        <h2 class="prog-team-lead">Корпоративный спорт</h2>
        <div class="prog-team-info">
          <p class="prog-team-text">это новый тренд в вопросах единения коллектива и повышения его лояльности. Спортивная игра помогает сплочению команды, выявляется команда «лидеров», коммуникация между игроками возрастает в несколько раз. В процессе игры происходит укрепление имиджа компании, внутренних и внешних корпоративных связей.</p>
          <p class="prog-team-text">Установление дружеских внерабочих отношений через игровой спорт; Выявление неформальных лидеров и укрепление позиций управленческого персонала; Корпоративный спорт, как социально-ответственный механизм компании, проявляющей заботу о сотрудниках.</p>
        </div>
      </div>
    </div>
    <div class="prog-team-hero">
      <div class="container">
        <img src="~@/assets/prog_team1.jpg" class="prog-team-hero-picture">
        <img src="~@/assets/prog_team1_mob.jpg" class="prog-team-hero-picture_mob">
        <div class="prog-team-hero-quote">
          <p class="prog-team-hero-quote-text">Спортивный<br> корпоратив–<br>полезная<br>инвестиции <br>в коллектив</p>
        </div>
      </div>
    </div>
    <div class="prog-team-block prog-team-block_last">
      <div class="container">
        <p class="prog-team-text">Корпоративное мероприятие на теннисном корте – знаменательное событие в жизни каждой компании. Его основная цель — сплочение коллектива для выработки командного духа. В условиях спортивной борьбы – проявляются истинные качества человека. Достигая высоких результатов в спорте, сотрудники компаний проявляют лидерские качества и на производстве. Как раз то, что нужно.</p>
      </div>
    </div>
    <ProgramForm formTheme='Программы. Тимбилдинг' formTitle='Оставьте заявку на обратный звонок и узнайте подробности' formName='teambuilding_form_call_send'></ProgramForm>
  </div>
</template>

<script>
import ProgramForm from './ProgramForm'

export default {
  components: {
    ProgramForm
  }
}
</script>

<style lang="scss" scoped>
.prog {
  &-team {
    margin-top: rem(45px);
    margin-bottom: 150px;
    overflow: hidden;
    @include phones {
      margin-bottom: 0;
    }
    .container {
      overflow: visible;
    }
    &-block {
      padding-left: rem(137px);
      @include tablets {
        padding-left: rem(85px);
      }
      @include phones {
        padding-left: 0;
      }
      &_last {
        margin-bottom: rem(110px);
        @include tablets {
          margin-bottom: rem(50px);
        }
      }
    }
    &-heading {
      @include futura(heavy);
      font-size: rem(50px);
      @include phones {
        font-size: rem(35px);
        line-height: rem(40px);
        br {
          display: none;
        }
      }
    }
    &-text {
      font-size: rem(16px);
      line-height: rem(35px);
      @include circe(light);
      padding: 0 rem(65px);
      @include tablets {
        margin-bottom: rem(20px);
      }
      @include phones {
        padding: 0;
      }
    }
    &-lead {
      @include circe(light);
      font-size: rem(30px);
      line-height: rem(47px);
    }
    &-info {
      display: flex;
      justify-content: space-between;
      @include tablets {
        flex-direction: column;
      }
      .prog-team-text {
        width: 47%;
        @include tablets {
          width: 100%;
        }
      }
    }
    &-adv {
      display: flex;
      flex-wrap: wrap;
      width: rem(1340px);
      background: #fafbff;
      padding: rem(50px) rem(85px);
      margin-left: rem(-85px);
      margin-top: rem(50px);
      margin: rem(50px) auto;
      .container {
        flex-direction: row;
        flex-wrap: wrap;
      }
      @include tablets {
        margin-left: 0;
        width: 100%;
      }
      @include phones {
        padding: rem(20px);
      }
      &-item {
        display: flex;
        width: 33.3%;
        @include tablets {
          width: 50%;
        }
        @include phones {
          width: 100%;
        }
      }
      &-text {
        display: flex;
        align-items: center;
        @include futura(book);
        font-size: rem(21px);
      }
      &-picture {
        width: rem(137px);
        height: rem(137px);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &-img {
        width: 70%;
        height: 70%;
        &_comp {
          width: 80%;
        }
      }
    }
    &-hero {
      margin-top: rem(100px);
      position: relative;
      margin-bottom: rem(60px);
      @include phones {
        margin-top: rem(30px);
        margin-bottom: rem(80px);
      }
      .container {
        @include phones {
          width: 100%;
        }
      }
      &-picture {
        padding-left: rem(137px);
        @include mac {
          width: 100%;
        }
        @include tablets {
          padding-left: rem(85px);
          width: 100%;
        }
        @include phones {
          display: none;
        }
        &_mob {
          display: none;
          @include phones {
            width: 100%;
            display: block;
          }
        }
      }
      &-quote {
        position: absolute;
        bottom: rem(50px);
        height: rem(362px);
        padding: rem(40px) rem(60px);
        background: white;
        margin-left: rem(-60px);
        @include tablets {
          height: rem(250px);
        }

        @include phones {
          padding: rem(20px) rem(30px);
          margin-left: 0;
          display: flex;
          align-items: center;
          bottom: rem(-70px);
          left: rem(12px);
        }

        &-text {
          @include futura(heavy);
          font-size: rem(50px);
          line-height: rem(60px);
          @include tablets {
            font-size: rem(30px);
            line-height: rem(35px);
          }
        }
      }
    }
  }
}
</style>
