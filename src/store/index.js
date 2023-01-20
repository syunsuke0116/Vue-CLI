import { createStore } from 'vuex'

export default createStore({
  state: {
    memos: []
  },
  getters: {
  },
  mutations: {
    save (state, NewMemo) {
      state.memos.unshift(NewMemo)
    }
  },
  actions: {
  },
  modules: {
  }
})
