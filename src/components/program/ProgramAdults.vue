<template>
  <div class="prog-adults" id='prog-adults'>
    <div class="container">
      <div class="prog-adults-row prog-adults-row_1">
        <div class="prog-adults-picture">
          <div class="prog-adults-rect"></div>
          <img src="~@/assets/prog_adults1.jpg" class="prog-adults-image">
          <img src="~@/assets/prog_adults1_mob.jpg" class="prog-adults-image_mob">
        </div>
        <div class="prog-adults-info">
          <h2 class="prog-adults-heading">Для всех поколений</h2>
          <p class="prog-adults-text">Ищете альтернативу скучным занятиям фитнесом в тесном зале? Добро пожаловать в большой теннис! Эта игра позволяет сжечь лишение калории и получить необходимую физическую нагрузку, наслаждаясь динамикой этой захватывающей игры.</p>
          <p class="prog-adults-text">Большой теннис имеет миллионы последователей среди людей самых разных возрастов и профессий по всему миру. Ведь это не просто спорт, а настоящее сражение, которое разворачивается на корте между соперниками. Это энергичная, яркая и эмоциональная игра с высоким накалом страстей.</p>
        </div>
      </div>
      <h2 class="prog-adults-heading">Здесь каждый<br> найдёт своё место</h2>
      <div class="prog-adults-row prog-adults-row_2">
        <div class="prog-adults-info">
          <p class="prog-adults-text">Каждая тренировка проходит при участии профессионального инструктора: индивидуально или в небольших группах, что позволяет обеспечить максимальную отдачу от регулярных занятий. Для многих учеников большой теннис становится любимым хобби.</p>
          <p class="prog-adults-text">Тренировки могут проводиться для компании друзей или единомышленников. Групповые занятия значительно сэкономят средства и будут полезны новичкам, ведь общение с другими учениками поможет быстрее отработать удар и почувствовать ракетку.</p>
        </div>
        <div class="prog-adults-picture">
          <img src="~@/assets/prog_adults2.jpg" class="prog-adults-image">
          <img src="~@/assets/prog_adults2_mob.jpg" class="prog-adults-image_mob">
        </div>
      </div>
    </div>
    <ProgramForm formTheme='Программы. Взрослые' formTitle="Запишитесь на пробное занятие со скидкой!" formName='adults_form_zan_send'></ProgramForm>
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
    &-adults {
      overflow: hidden;
      margin-bottom: rem(120px);
      @include phones {
        margin-bottom: rem(20px);
      }
      .container {
        overflow: visible;
      }
      &-image {
        position: relative;
        z-index: 2;
        @include mac {
          width: 70%;
        }
        @include tablets {
          width: 100%;
          margin-left: rem(-40px);
        }
        @include phones {
          display: none;
        }
        &_mob {
          display: none;
          @include phones {
            display: block;
            margin-left: rem(-15px);
          }
        }
      }
      &-row {
        display: flex;
        &_1 {
          padding-top: rem(75px);
          position: relative;
          margin-top: rem(100px);
          
          @include phones {
            margin-top: 0;
            padding-top: rem(30px);
            margin-bottom: rem(70px);
            flex-direction: column-reverse;
          }
          .prog-adults-picture {
            width: 56%;
            @include tablets {
              width: 50%;
            }
            @include phones {
              width: 100%;
            }
          }
          .prog-adults-info {
            width: 34%;
            @include tablets {
              width: 50%;
            }
            @include phones {
              width: 100%;
            }
          }
          .prog-adults-heading {
            margin-left: 0;
          }
        }
        &_2 {
          flex-direction: row;
          margin-bottom: rem(70px);
          @include phones {
            flex-direction: column;
            margin-bottom: rem(20px);
          }
          .prog-adults-heading {
            @include tablets {
              margin-left: 0;
            }
          }
          .prog-adults-picture {
            width: 52%;
            @include tablets {
              width: 45%;
            }
            @include phones {
              width: 100%;
            }
            .prog-adults-heading {
              margin-left: rem(90px);
              @include tablets {
                margin-left: 0;
              }
            }
          }
          .prog-adults-image {
            width: initial;
            @include mac {
              margin-left: 100px;
            }
            @include base {
              margin-left: 0;
            }
          }
          .prog-adults-info {
            width: 48%;
            padding-left: rem(120px);
            padding-right: rem(60px);
            @include tablets {
              width: 55%;
              padding-left: rem(20px);
            }
            @include phones {
              width: 100%;
              padding: rem(20px) 0;
            }
          }
          .prog-adults-text {
            @include phones {
              &:last-of-type {
                margin-bottom: 0;
              }
            }
          }
        }
      }
      &-rect {
        width: rem(764px);
        height: rem(610px);
        background: #f5f6fa;
        position: absolute;
        margin-left: rem(-375px);
        left: 0;
        top: rem(25px);
        z-index: 1;
        @include tablets {
          width: rem(650px);
          height: rem(580px);
        }
        @include phones {
          display: none;
        }
      }
      &-heading {
        font-size: rem(50px);
        line-height: rem(60px);
        @include futura(heavy);
        margin: 0;
        margin-bottom: rem(50px);
        margin-left: 56%;
        @include tablets {
          margin-left: 2%;
        }
        @include phones {
          font-size: rem(35px);
          line-height: rem(40px);
          margin-bottom: rem(30px);
          margin-left: 0;
        }
      }
      &-text {
        @include circe(light);
        font-size: rem(16px);
        line-height: rem(35px);
        margin-bottom: rem(50px);
      }
    }
  }
</style>
