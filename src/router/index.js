import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Login from '@/views/Login.vue';
import Contact from '@/views/Contact.vue';
import ResetPassword from '@/views/ResetPassword.vue';
import AppLayout from '@/layouts/AppLayout';
import PublicLayout from '@/layouts/PublicLayout';

const routes = [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          component: Home,
        },
      ],
    },
    {
        path: '/About',
        component: AppLayout,
        children: [
          {
            path: '',
            component: About,
          },
        ],
      },
    {
      path: '/Login',
      component: PublicLayout,
      children: [
        {
          path: '',
          component: Login,
        },
      ],
    },
    {
        path: '/Contact',
        component: PublicLayout,
        children: [
          {
            path: '',
            component: Contact,
          },
        ],
      },
      {
        path: '/reset-password',
        component: PublicLayout,
        children: [
          {
            path: '',
            component:ResetPassword,
          },
        ],
      }
  ];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    base: process.env.BASE_URL,
    routes
})

export default router;