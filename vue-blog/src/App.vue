<template>
  <div :style="backImage" id="app">
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
    return {
      backImage: {
        backgroundImage:
          'url(https://wildfreedesign.com/wp-content/uploads/2015/11/bigstock-Laptop-computer-and-coffee-in-86943893.jpg)',
      },
    };
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
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
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
  height: 20vh;
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
