<template>
    <div>
        <div v-for="(item, i) in this.$store.state.ask" :key="i">{{ item.title }}</div>
    </div>
</template>

<script>
export default {
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
