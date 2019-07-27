import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserData, fetchItemData } from '../api/index.js';

export default {
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
    },
    FETCH_USER({commit}, username) {
        fetchUserData(username)
        .then(({data}) => commit('SET_USER', data))
        .catch(error => console.log(error));
    },
    FETCH_ITEM({commit}, id) {
        fetchItemData(id)
        .then(response => commit('SET_ITEM', response.data))
        .catch(error => console.log(error));
    }
}