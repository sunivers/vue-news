<template>
    <div>
        <div v-for="(item, i) in list" :key="i">{{ item }}</div>
    </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
    data() {
        return {
            list: [],
        }
    },

    created() {
        fetchNewsList()
        .then(response => {
            console.log(response);
            this.list = response.data;
        })
        .catch(function(error) {
            console.log(error);
        })
    }
}
</script>

<style>

</style>
