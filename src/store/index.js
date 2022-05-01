// Vue
import Vue from 'vue'
import Vuex from 'vuex'
import pathify from '@/plugins/vuex-pathify'

// Modules
import * as modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  plugins: [
    pathify.plugin,
  ],
  state: {
  getlicense: '資格を選択してください',
  // カレンダー試験日
  events: [
    {
      name: '会議',
      start: '2022-05-02', // 開始時刻
      end: '2022-05-02', // 終了時刻
      color: 'blue',
      timed: false, // 終日ならfalse
    },
  ],
  },
  mutations: {
    updateLicense (state, payload) {
      state.license = payload.license
},
    updateLicenseDate (state, payload) {
        state.events[payload.count].start = payload.licenseDate
        state.events[payload.count].end = payload.licenseDate
},
  },
})

store.subscribe(mutation => {
  if (!mutation.type.startsWith('user/')) return

  store.dispatch('user/update', mutation)
})

store.dispatch('app/init')

export default store

export const ROOT_DISPATCH = Object.freeze({ root: true })
