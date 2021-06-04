<template>
  <div id="app">
    <div id="nav">
      <div><img class="logo" :src="Logo" alt="" /></div>
      <router-link class="nav-item" to="/">Home</router-link>
      <router-link class="nav-item" to="/about">About</router-link>
      <router-link class="nav-item" to="/register">Register</router-link>
      <router-link class="nav-item" to="/login">Login</router-link>
      <router-link class="nav-item" to="/all-posts">All posts</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import Logo from './assets/logo-sample.png';
export default {
  data() {
    return {
      Logo: Logo,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  margin: auto;
  text-align: left;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.nav-item {
  margin: 0 5px;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: #2b0daf;
}
.logo {
  max-width: 30%;
  height: 20%;
}
</style>
