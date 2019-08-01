import bus from '../utils/bus.js';

export default {
    // 재사용할 컴포넌트 옵션
    created() {
        // 이벤트 버스는 주로 라이프사이클 훅 안에 정의한다.
        bus.$emit('start:spinner');
        this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
            bus.$emit('end:spinner');
        })
        .catch((error) => console.log(error));
    }
}