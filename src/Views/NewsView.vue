<template>
    <div>
        <div v-for="(item, i) in this.$store.state.news" :key="i">
            <p>
                <a :href="item.url">{{ item.title }}</a>
                <small>{{ item.time_ago }} by 
                    <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
                </small>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

</style>
