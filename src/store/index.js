import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        }
    },
    actions: {
        //context.commit을 destructuring(구조 분해 할당)하여 commit값만 가져온다.
        FETCH_NEWS({ commit }) {
            fetchNewsList()
            //위와 마찬가지로 response.data를 구조 분해 할당하여 data값만 가져온다.
            .then(({ data }) => {
                commit('SET_NEWS', data);
            })
            .catch(error => {
                console.log(error);
            })
        },
        FETCH_JOBS(context) {
            fetchJobsList()
            .then(response => context.commit('SET_JOBS', response.data))
            .catch(error => console.log(error))
        },
        FETCH_ASK(context) {
            fetchAskList()
            .then(response => context.commit('SET_ASK', response.data))
            .catch(error => console.log(error))
        }
    }
});