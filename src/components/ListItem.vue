<template>
    <div>
        <ul class="news-list">
            <li class="post" v-for="(item, i) in listItems" :key="i">
                <!-- 포인트 영역 -->
                <div class="points">{{ item.points || 0 }}</div>
                <div>
                    <!-- 제목 및 기타 정보 영역 -->
                    <p class=news-title>
                        <template v-if="item.domain">
                            <a :href="item.url" target="_blank">{{ item.title }}</a>
                        </template>
                        <template v-else>
                            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
                        </template>
                    </p>
                    <small class="other-info">{{ item.time_ago }} by 
                        <router-link v-if="item.user"
                        :to="`/user/${item.user}`" class="other-info">{{ item.user }}</router-link>
                        <a v-else
                        :href="item.url" class="other-info">{{ item.domain }}</a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created() {
        const name = this.$route.name;
        if(name === 'news') {
            this.$store.dispatch('FETCH_NEWS');
        } else if (name === 'ask') {
            this.$store.dispatch('FETCH_ASK');
        } else {
            this.$store.dispatch('FETCH_JOBS');
        }
    },
    computed: {
        listItems() {
            const name = this.$route.name;
            if(name === 'news') {
                return this.$store.state.news;
            } else if (name === 'ask') {
                return this.$store.state.ask;
            } else {
                return this.$store.state.jobs;
            }
        }
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
