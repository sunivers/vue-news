<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';

export default {
    components: {
        ListItem,
    },
    created() {
        // 이벤트 버스는 주로 라이프사이클 훅 안에 정의한다.
        bus.$emit('start:spinner');
        setTimeout(() => {
            this.$store.dispatch('FETCH_NEWS')
            .then(() => {
                bus.$emit('end:spinner');
            })
            .catch((error) => console.log(error));
        }, 3000);
    }
}
</script>

