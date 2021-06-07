<template>
  <div class="home">
    <h1>Wellcome to the Blog</h1>
    <p class="home-text">
      Here you will find exciting stories or can share some of your own
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
h1 {
  color: white;
  font-family: 'Limelight', cursive;
  font-size: 54px;
  padding: 20px 0;
}
.home-text {
  color: rgb(112, 11, 11);
  font-family: 'Limelight', cursive;
  font-size: 25px;
  font-weight: 700;
  padding: 40px 0;
  font-weight: 700;
  max-width: 30%;
  margin: auto;
}
</style>
