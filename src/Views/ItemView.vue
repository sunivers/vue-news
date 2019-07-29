<template>
    <div>
        <section>
            <!-- 질문자 상세 정보 -->
            <user-profile :info="fetchedItem">
                <div slot="username">{{ fetchedItem.user }}</div>
                <template slot="time">{{ fetchedItem.time_ago }}</template>
            </user-profile>
            <!-- <div class="user-container">
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-description">
                    <router-link :to="`/user/${fetchedItem.user}`" class="name">{{ fetchedItem.user }}</router-link>
                    <div class="time">{{ fetchedItem.time_ago }}</div>
                </div>
            </div> -->
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
import UserProfile from '../components/UserProfile.vue';

export default {
    computed: {
        ...mapGetters(['fetchedItem'])
    },
    created() {
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemId);
    },
    components: {
        UserProfile,
    }
}
</script>

<style>

</style>
