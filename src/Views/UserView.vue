<template>
    <user-profile :info="userInfo">
        <div slot="username">{{ userInfo.id }}</div>
        <template slot="time">{{ userInfo.created }}</template>
        <div slot="karma">{{ userInfo.karma }}</div>
    </user-profile>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
    /* 
        템플릿 부분 텍스트를 깔끔하게 하기 위해 computed를 거치는 것은 Vue.js 공식 가이드에 나와 있는 방식이라고 한다.
        그러면 mapState나 mapGetter는 언제 사용해야 하는걸까?
        또한 computed가 created보다 앞에 나오도록 하는 것이 공식문서 스타일가이드에서 제안하는 방식이라고 한다.
    */
    
    created() {
        this.$store.dispatch('FETCH_USER', this.$route.params.id);
    },
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    },
    components: {
        UserProfile,
    }
}
</script>

<style>

</style>
