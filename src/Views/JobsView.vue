<template>
    <div>
        <div v-for="(item, i) in this.$store.state.jobs" :key="i">{{ item.title }}</div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_JOBS');

        // fetchJobsList()
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
