<template>
  <div :style="backImage" class="main">
    <div class="wrapper" v-for="article in articles" :key="article.id">
      <h6><i class="far fa-user-circle"></i> {{ article.username }}</h6>

      <h3>{{ article.title }}</h3>
      <img :src="article.image" alt="" />
    </div>
    <h1>All posts</h1>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'AllPosts',

  components: {},

  data: () => ({
    articles: [],
    backImage: {
      backgroundImage:
        'url(https://wildfreedesign.com/wp-content/uploads/2015/11/bigstock-Laptop-computer-and-coffee-in-86943893.jpg)',
    },
  }),
  mounted() {
    axios
      .get('http://167.99.138.67:1111/getallposts')
      .then((res) => {
        console.log(res.data.data);
        this.articles = res.data.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>
<style scoped>
h1 {
  font-family: 'Limelight', cursive;
  color: white;
  max-width: 60%;
}
h6 {
  font-weight: 8;
}
img {
  width: 600px;
  height: 450px;
}
.wrapper {
  background-color: white;
  height: 100vh;
  width: 60vw;
  margin: auto;
}
main {
  max-width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
