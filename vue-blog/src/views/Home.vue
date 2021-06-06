<template>
  <div :style="backImage" class="home"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      backImage: {
        backgroundImage:
          'url(https://wildfreedesign.com/wp-content/uploads/2015/11/bigstock-Laptop-computer-and-coffee-in-86943893.jpg)',
      },
    };
  },
  components: {},
};
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
