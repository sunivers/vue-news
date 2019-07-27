<template>
    <div>
        <div v-for="(item, i) in fetchedAsk" :key="i">
            <p>
                <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
                <small>{{ item.time_ago }} by {{ item.user }}</small>
            </p>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
    computed: {
        //this.$store.state.ask 문자열 길이를 줄이기 위한 다양한 데이터 바인딩 방법.
        //개인적으로는 2번 방법을 픽. 왜냐하면 가장 공식적이고 역할에 맞는 방식인것 같다.
        //computed와 getters는 본래 계산된 속성을 사용하기 위해 존재하므로 단순히 리턴만 해주는 경우는 역할에 맞지 않는다. 

        // #3
        ...mapGetters({
            fetchedAsk: 'fetchedAsk',
        })

        // #2
        // ...mapState({
        //     ask: state => state.ask,
        // }),

        // #1
        // ask() {
        //     return this.$store.state.ask;
        // }
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>
