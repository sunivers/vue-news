<template>
    <div>
        <div v-for="(item, i) in list" :key="i">{{ item.title }}</div>
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
