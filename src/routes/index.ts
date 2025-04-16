import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
// 定义路由
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login',
        component: () => import('@/layout/Index.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home/Index.vue')
            },
            {
                path: '/setting',
                name: 'setting',
                component: () => import('@/views/setting/Index.vue')
            },
            {
                path: '/pre-sale',
                name: 'pre-sale',
                component: () => import('@/views/pre-sale/Index.vue')
            },
            {
                path: '/batch-airdrop',
                name: 'batch-airdrop',
                component: () => import('@/views/batch-airdrop/Index.vue')
            },
            {
                path: '/application',
                name: 'application',
                component: () => import('@/views/application/Index.vue')
            },
            {
                path: '/polymeric-airdrop',
                name: 'polymeric-airdrop',
                component: () => import('@/views/polymeric-airdrop/Index.vue')
            },
            {
                path: '/pledge',
                name: 'pledge',
                component: () => import('@/views/pledge/Index.vue')
            },
            {
                path: '/swiper',
                name: 'swiper',
                component: () => import('@/views/swiper/Index.vue')
            },{
                path: '/notice',
                name: 'notice',
                component: () => import('@/views/notice/Index.vue')
            },
            {
                path: '/main-airdrop',
                name: 'main-airdrop',
                component: () => import('@/views/main-airdrop/Index.vue')
            },
        ]
    }
];

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;