<template>
    <div>
        <div v-for="item in list">{{ item }}</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            list: [],
        }
    },

    created() {
        const vm = this;
        axios.get("https://api.hnpwa.com/v0/news/1.json")
        .then(function(response) {
            console.log(response);
            vm.list = response.data;
        })
        .catch(function(error) {
            console.log(error);
        })
    }
}
</script>

<style>

</style>
