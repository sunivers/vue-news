import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: {},
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        }
    },
    mutations: mutations,
    actions //축약형
});