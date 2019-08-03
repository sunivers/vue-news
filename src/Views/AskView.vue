<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import ListMixin from '../mixins/ListMixin.js';

export default {
    components: {
        ListItem,
    },
    created() {
        console.log('created');
    },
    mounted() {
        console.log('mounted');
    }
    // mixins: [ListMixin],
}
</script>

