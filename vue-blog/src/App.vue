<template>
  <div id="app">
    <div id="nav">
      <p class="logo-title">The Blog</p>
      <div>
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link class="nav-item" to="/register">Register</router-link>
        <router-link class="nav-item" to="/login">Login</router-link>
        <router-link class="nav-item" to="/all-posts">All posts</router-link>
      </div>
    </div>

    <router-view />
    <main></main>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Limelight&display=swap');
.logo-title {
  font-family: 'Limelight', cursive;
  font-size: 34px;
}
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
  background: rgb(180, 86, 58);
  background: linear-gradient(
    90deg,
    rgba(180, 86, 58, 1) 0%,
    rgba(253, 29, 29, 1) 33%,
    rgba(253, 79, 43, 1) 46%,
    rgba(252, 176, 69, 1) 69%
  );
  height: 10%;
  color: white;
}
#nav div {
  margin-left: auto;
}
#nav a {
  font-weight: bold;
  color: white;
}

.nav-item {
  margin: 0 5px;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
  color: white;
}
#nav a.router-link-exact-active {
  color: #661c05;
}

@media screen and (min-width: 768px) {
  .logo-title {
    font-size: 45px;
  }
}
</style>
