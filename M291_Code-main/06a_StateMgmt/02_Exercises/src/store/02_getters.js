import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    vorname: "Active",
    nachname: "Fitness",
    strasse: "Schaffhauserstrasse 55",
    ort: "8180 Bülach",
    jahr: "1. bis 4. Lehrjahr"
  },
  getters: {
    trainer(state) {
      return `${state.vorname} ${state.nachname}`;
    },
    trainerEmail(state) {
      return `${state.vorname}.${state.nachname}@bülach.com`.toLowerCase();
    },
    jobPosition(state) {
      return `${state.strasse} in ${state.ort} `;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
