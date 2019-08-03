import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserData, fetchItemData, fetchList } from '../api/index.js';

export default {
    //context.commit을 destructuring(구조 분해 할당)하여 commit값만 가져온다.
    FETCH_NEWS({ commit }) {
        return fetchNewsList()
        .then(response => {
            commit('SET_NEWS', response.data);
            return response;
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_JOBS(context) {
        return fetchJobsList()
        .then(response => {
            context.commit('SET_JOBS', response.data);
            return response;
        })
        .catch(error => console.log(error))
    },
    FETCH_ASK(context) {
        return fetchAskList()
        .then(response => context.commit('SET_ASK', response.data))
        .catch(error => console.log(error))
    },
    FETCH_USER({commit}, username) {
        return fetchUserData(username)
        .then(({data}) => commit('SET_USER', data))
        .catch(error => console.log(error));
    },
    FETCH_ITEM({commit}, id) {
        return fetchItemData(id)
        .then(response => commit('SET_ITEM', response.data))
        .catch(error => console.log(error));
    },
    FETCH_LIST({commit}, pageName) {
        // Promise 객체를 반드시 반환해주어야 이어서 동작하는 코드를 순서에 맞게 동기적으로 작동시킬 수 있다.
        return fetchList(pageName)
        .then(response => {
            commit('SET_LIST', response.data);
            return response;
        })
        .catch(error => console.log(error));
    }
}