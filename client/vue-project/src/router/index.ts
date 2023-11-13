import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import {useAuthStore} from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  console.log("to.meta.requiresAuth: " + to.meta.requiresAuth);
  console.log("!authStore.isAuthenticated: " + !authStore.isAuthenticated);
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    console.log("not login");
    next({ name: 'login' });
  } else {
    console.log("login");
    next();
  }
});


export default router