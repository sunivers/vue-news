<template>
    <div>
        <ul class="news-list">
            <li class="post" v-for="(item, i) in this.$store.state.jobs" :key="i">
                <div>
                    <p class=news-title>
                        <a :href="item.url">{{ item.title }}</a>
                    </p>
                    <small class="other-info">{{ item.time_ago }} by 
                        <a :href="item.url" class="other-info">{{ item.domain }}</a>
                    </small>
                </div>
            </li>
        </ul>
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

<style scoped>
.news-list {
    margin: 0;
    padding: 0;
}
.post {
    list-style: none;
    display: flex;
    align-items: center;
    background-color: #fff;
    margin: 5px;
    padding: 20px 10px;
    border: 1px solid #eee;
}
.points {
    width: 70px;
    text-align: center;
    color: #42b883;
}
.news-title {
    margin: 0;
}
.other-info {
    color: #828282;
}
</style>
