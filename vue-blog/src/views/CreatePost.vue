<template>
  <div class="create-post">
    <di id="logout-btn">
      <b-button @click="onLogOut()" type="submit">Log out</b-button>
    </di>

    <h3>Share your brilliant story with the world</h3>
    <form @submit.prevent="onSubmit">
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Share your story.."
        rows="3"
        max-rows="10"
      ></b-form-textarea>
      <div><b-button type="submit">Share</b-button></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreatePost',
  methods: {
    onLogOut() {
      if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
        this.$router.push('/login');
      }
    },
  },
};
</script>

<style scoped>
h3 {
  font-family: 'Limelight', cursive;
  color: white;
}
form {
  margin: 10px auto;
  max-width: 60%;
}
button {
  margin: 10px 0;
  background-color: #661c05;
  border: #661c05;
}
button:hover {
  background-color: rgb(206, 94, 19);
  border: rgb(206, 94, 19);
}
#logout-btn {
  align-self: right;
  width: 30%;
  margin-right: auto;
}
</style>
