<template>
    <div>
        <section>
            <!-- 질문 상세 정보 -->
            <div class="user-container">
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-description">
                    <router-link :to="`/user/${fetchedItem.user}`" class="name">{{ fetchedItem.user }}</router-link>
                    <div class="time">{{ fetchedItem.time_ago }}</div>
                </div>
            </div>
            <h2>{{ fetchedItem.title }}</h2>
            <div v-html="fetchedItem.content"></div>
        </section>
        <section>
            <!-- 질문 댓글 -->
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['fetchedItem'])
    },
    created() {
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemId);
    },
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 10px;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;
}
.name {
    font-size: 1.2rem;
}
.time {
    font-size: 0.85rem;
}
</style>
