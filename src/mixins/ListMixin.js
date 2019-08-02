import bus from '../utils/bus.js';

export default {
    // 재사용할 컴포넌트 옵션
    created() {
        // 이벤트 버스는 주로 라이프사이클 훅 안에 정의한다.
        bus.$emit('start:spinner');
        // dispatch로 실행되는 actions내 함수에서 반드시 Promise 객체를 반환해 줘야 한다.
        // 그렇지 않으면 아래 .then 이후의 코드가 비동기로 실행되기 때문에 순서가 맞지 않는다.
        this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
            console.log(5);
            bus.$emit('end:spinner');
        })
        .catch((error) => console.log(error));
    }
}