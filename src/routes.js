import Content from './components/index/Content.vue'
import CoachContent from './components/coach/CoachContent.vue'
import Schedule from './components/schedule/Schedule.vue'
import Prices from './components/prices/Prices.vue'
import Program from './components/program/Program.vue'
import ProgramKids from './components/program/ProgramKids.vue'
import ProgramAdults from './components/program/ProgramAdults.vue'
import ProgramTeam from './components/program/ProgramTeam.vue'
import Adress from './components/adress/Adress.vue'
import Contacts from './components/contacts/Contacts.vue'
import About from './components/about/About.vue'
import Camp from './components/camp/Camp.vue'
import Error from './components/errors/Error.vue'
import store from './store'

export const routes = [{
  path: '',
  component: Content,
  beforeEnter: (to, from, next) => {
    document.querySelector('body').classList.remove('body_folded')
    store.commit('RESET_FOLD')
    store.commit('CHANGE_HEADING', 'Летний лагерь в Болгарии')
    store.commit('CLOSE_MENU')
    next()
  }
},
{
  path: '/coaches',
  component: CoachContent,
  beforeEnter: (to, from, next) => {
    store.commit('SET_FOLD', 'coaches')
    store.commit('CHANGE_HEADING', 'Тренерский состав')
    store.commit('CLOSE_MENU')
    next()
  }
},
{
  path: '/schedule',
  component: Schedule,
  beforeEnter: (to, from, next) => {
    store.commit('SET_FOLD', 'schedule')
    store.commit('CHANGE_HEADING', 'Расписание')
    store.commit('CLOSE_MENU')
    /* store.commit('LOADING_END') */
    next()
  }
},
{
  path: '/prices',
  component: Prices,
  beforeEnter: (to, from, next) => {
    store.commit('SET_FOLD', 'prices')
    store.commit('CHANGE_HEADING', 'Стоимость')
    store.commit('CLOSE_MENU')
    next()
  }
},
{
  path: '/program',
  component: Program,
  beforeEnter: (to, from, next) => {
    store.commit('SET_FOLD', 'program')
    store.commit('CHANGE_HEADING', 'Программы')
    store.commit('CLOSE_MENU')
    next()
  },
  children: [
    {
      path: '/program/kids',
      component: ProgramKids,
      name: 'programKids',
      beforeEnter: (to, from, next) => {
        store.commit('CHANGE_PROGRAM_TAB', 'kids')
        store.commit('CLOSE_MENU')
        store.commit('CHANGE_HEADING', 'Дети')
        next()
      }
    },
    {
      path: '/program/adults',
      component: ProgramAdults,
      name: 'programAdults',
      beforeEnter: (to, from, next) => {
        store.commit('CHANGE_PROGRAM_TAB', 'adults')
        store.commit('CLOSE_MENU')
        store.commit('CHANGE_HEADING', 'Взрослые')
        next()
      }
    },
    {
      path: '/program/team',
      component: ProgramTeam,
      name: 'programTeam',
      beforeEnter: (to, from, next) => {
        store.commit('CHANGE_PROGRAM_TAB', 'team')
        store.commit('CLOSE_MENU')
        store.commit('CHANGE_HEADING', 'Тимбилдинг')
        next()
      }
    }
  ]
},
{
  path: '/contacts',
  component: Contacts,
  beforeEnter: (to, from, next) => {
    store.commit('SET_FOLD', 'contacts')
    store.commit('CHANGE_HEADING', 'Контакты')
    store.commit('CLOSE_MENU')
    next()
  }
},
{
  path: '/adress',
  component: Adress,
  beforeEnter: (to, from, next) => {
    store.commit('SET_FOLD', 'adress')
    store.commit('CHANGE_HEADING', 'Адрес')
    store.commit('CLOSE_MENU')
    next()
  }
},
{
  path: '/about',
  component: About,
  beforeEnter: (to, from, next) => {
    store.commit('SET_FOLD', 'about')
    store.commit('CHANGE_HEADING', 'Академия тенниса KORT 12')
    store.commit('CLOSE_MENU')
    next()
  }
},
{
  path: '/camp',
  component: Camp,
  beforeEnter: (to, from, next) => {
    store.commit('SET_FOLD', 'camp')
    store.commit('CLOSE_MENU')
    next()
  }
},
{
  path: '*',
  component: Error,
  beforeEnter: (to, from, next) => {
    store.commit('SET_FOLD', '404')
    store.commit('CLOSE_MENU')
    next()
  }
}
]
