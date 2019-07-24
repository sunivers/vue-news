<template>
    <div>
        <div v-for="(item, i) in this.$store.state.jobs" :key="i">
            <p>
                <a :href="item.url">{{ item.title }}</a>
                <small>{{ item.time_ago }}, {{ item.domain }}</small>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>

<style>

</style>
