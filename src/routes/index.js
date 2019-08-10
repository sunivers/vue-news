import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../Views/NewsView.vue';
import AskView from '../Views/AskView.vue';
import JobsView from '../Views/JobsView.vue';
import ItemView from '../Views/ItemView.vue';
import UserView from '../Views/UserView.vue';
import createListView from '../Views/CreateListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => console.log(error));
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => console.log(error));
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => console.log(error));
            }
        },
        {
            path: '/item/:id',
            component: ItemView,
            beforeEnter: async (to, from, next) => {
                bus.$emit('start:spinner');
                const itemId = to.params.id;
                const response = await store.dispatch('FETCH_ITEM', itemId);
                bus.$emit('end:spinner');
                next();
            }
        },
        {
            path: '/user/:id',
            component: UserView,
        }
    ]
})