import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/auth/Register.vue';
import Login from '../views/auth/Login.vue';
import CreatePost from '../views/CreatePost.vue';
import AllPosts from '../views/AllPosts.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/all-posts',
    name: 'All Posts',
    component: AllPosts,
  },
  {
    path: '/create-post',
    name: 'Create Post',
    component: CreatePost,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
