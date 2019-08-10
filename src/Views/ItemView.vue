<template>
    <div>
        <section>
            <!-- 질문자 상세 정보 -->
            <user-profile :info="fetchedItem">
                <router-link slot="username" :to="`/user/${fetchedItem.user}`">
                {{ fetchedItem.user }}
                </router-link>
                <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
            </user-profile>
            <!-- 질문 내용 -->
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
        // const itemId = this.$route.params.id;
        // this.$store.dispatch('FETCH_ITEM', itemId);
    },
    components: {
        UserProfile,
    }
}
</script>

<style>

</style>
