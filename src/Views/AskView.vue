<template>
    <div>
        <div v-for="(item, i) in list" :key="i">{{ item }}</div>
    </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
    data() {
        return {
            list: [],
        }
    },
    created() {
        fetchAskList()
        .then(response => {
            console.log(response);
            this.list = response.data;
        })
        .catch(error => {
            console.log(error);
        })
    }
}
</script>

<style>

</style>
