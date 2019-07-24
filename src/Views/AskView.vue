<template>
    <div>
        <div v-for="(item, i) in fetchedAsk" :key="i">{{ item.title }}</div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
    computed: {
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

        // fetchAskList()
        // .then(response => {
        //     this.list = response.data;
        // })
        // .catch(error => {
        //     console.log(error);
        // })
    }
}
</script>

<style>

</style>
