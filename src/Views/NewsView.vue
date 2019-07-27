<template>
    <div>
        <ul class="news-list">
            <li class="post" v-for="(item, i) in this.$store.state.news" :key="i">
                <div class="points">{{ item.points }}</div>
                <div>
                    <p class=news-title>
                        <a :href="item.url">{{ item.title }}</a>
                    </p>
                    <small class="other-info">{{ item.time_ago }} by 
                        <router-link :to="`/user/${item.user}`" class="other-info">{{ item.user }}</router-link>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
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
