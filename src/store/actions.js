import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserData, fetchItemData, fetchList } from '../api/index.js';

export default {
    //context.commit을 destructuring(구조 분해 할당)하여 commit값만 가져온다.
    async FETCH_NEWS({ commit }) {
        const response = await fetchNewsList();
        commit('SET_NEWS', response.data);
        return response;
    },
    async FETCH_JOBS({ commit }) {
        const response = await fetchJobsList();
        commit('SET_JOBS', response.data);
        return response;
    },
    async FETCH_ASK({ commit }) {
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
    },
    async FETCH_USER({commit}, username) {
        const response = await fetchUserData(username);
        commit('SET_USER', response.data);
        return response;
    },
    async FETCH_ITEM({commit}, id) {
        const response = await fetchItemData(id);
        commit('SET_ITEM', response.data);
        return response;
    },

    // promise
    // FETCH_LIST({commit}, pageName) {
    //     // Promise 객체를 반드시 반환해주어야 이어서 동작하는 코드를 순서에 맞게 동기적으로 작동시킬 수 있다.
    //     return fetchList(pageName)
    //     .then(response => {
    //         commit('SET_LIST', response.data);
    //         return response;
    //     })
    //     .catch(error => console.log(error));
    // },

    //async
    async FETCH_LIST({commit}, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    }
}