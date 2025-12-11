import { createMemoryHistory, createRouter } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Dashboard from '../views/info/Dashboard.vue'
import Carent from '../views/projects/Carent.vue'
import Vending from '../views/projects/Vending.vue'

const routes = [
    {
        path: '/',
        component: Homepage,
        children: [
            {
                path: '',
                redirect: '/dashboard'
            },
            {
                path: '/dashboard',
                component: Dashboard
            },
            {
                path: '/carent',
                component: Carent
            },
            {
                path: '/vending',
                component: Vending
            }
        ]
    },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes
})