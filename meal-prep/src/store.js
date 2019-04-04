import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    apiUrl: 'https://api.edaman.com/search'
  },
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    }
  },
  actions: {
    async getRecipes({ state, commit }, plan) {
      try {
          let response = await axios.get(`${state.apiUrl}`, {
              params: {
                  q: plan,
                  app_id: '3708b270',
                  app_key: '8d522e81c0f51e27137865893544b865',
                  from: 0,
                  to: 9
              }
          });
          commit('setRecipes', response.data.hits);
      } catch (error) {
          commit('setRecipes', []);
      }
    }
  }
});
