import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../Views/NewsView.vue';
import AskView from '../Views/AskView.vue';
import JobsView from '../Views/JobsView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
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