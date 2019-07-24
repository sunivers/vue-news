<template>
    <div>
        <div v-for="(item, i) in this.$store.state.news" :key="i">{{ item.title }}</div>
    </div>
</template>

<script>


export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');

        // fetchNewsList()
        // .then(response => {
        //     console.log(response);
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
