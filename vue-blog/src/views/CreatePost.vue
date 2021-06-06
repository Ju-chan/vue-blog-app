<template>
  <div class="create-post">
    <h3>Share your brilliant story with the world</h3>
    <form @submit.prevent="onSubmit">
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <div><b-button type="submit">Share</b-button></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreatePost',
};
</script>

<style scoped>
h3 {
  font-family: 'Limelight', cursive;
}
form {
  margin: 10px 0;
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
</style>
