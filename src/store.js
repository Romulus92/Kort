import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isFolded: false,
    campHeading: 'Летний лагерь в Болгарии',
    page: 'main',
    menuOpen: false,
    activeProg: 'kids',
    loading: true,
    modalOpen: false,
    modalType: ''
  },
  mutations: {
    TOGGLE_MENU (state) {
      state.menuOpen = !state.menuOpen
    },
    CLOSE_MENU (state) {
      state.menuOpen = false
    },
    SET_FOLD (state, payload) {
      state.isFolded = true
      state.page = payload
    },
    RESET_FOLD (state) {
      state.isFolded = false
      state.page = 'main'
    },
    CHANGE_HEADING (state, payload) {
      state.campHeading = payload
    },
    CHANGE_PROGRAM_TAB (state, payload) {
      state.activeProg = payload
    },
    LOADING_END (state) {
      state.loading = false
    },
    SET_MODAL_TYPE (state, payload) {
      state.modalType = payload
    }
  }
})
