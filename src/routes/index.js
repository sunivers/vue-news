import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../Views/NewsView.vue';
import AskView from '../Views/AskView.vue';
import JobsView from '../Views/JobsView.vue';

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
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        }
    ]
})