<template>
  <div>
    <form @submit.prevent="onSubmit">
      <p class="msg">{{ message }}</p>
      <h5>Allready have an account?</h5>
      <label for="name">Enter your name</label>
      <div class="input">
        <input type="email" id="name" v-model="name" required />
      </div>
      <label for="password">Password</label>
      <div class="input">
        <input type="password" id="password" v-model="password" required />
      </div>

      <div class="submit">
        <b-button type="submit">Login</b-button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      form: {
        name: '',
        password: '',
      },
      message: '',

      show: true,
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        name: this.name,
        password: this.password,
      };
      console.log(formData);
      // const secretKey = JSON.parse(localStorage.getItem('user')).secretKey;
      axios
        .post('http://167.99.138.67:1111/login', formData)
        .then((res) => {
          localStorage.setItem(
            'user',
            JSON.stringify({ name: this.name, secretKey: res.data.secretKey })
          );

          if (res.data.success) {
            this.$router.push('/create-post');
          } else {
            this.message = res.data.message;
          }
        })
        .catch((err) => console.log(err));
    },
    onReset() {
      // event.preventDefault();
      // Reset our form values
      this.form.email = '';
      (this.form.password = ''),
        // Trick to reset/clear native browser form validation state
        (this.show = false);
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style scoped>
form {
  max-width: 400px;
  margin: 20px auto;
  padding: 10px;
  border-radius: 15px;
  background-color: white;
}
input {
  max-width: 400px;
  margin: 10px auto;
  border-radius: 5px;
  border: 1px solid grey;
}
button {
  background-color: #661c05;
  border: #661c05;
}
button:hover {
  background-color: rgb(206, 94, 19);
  border: rgb(206, 94, 19);
}
h5 {
  font-family: 'Limelight', cursive;
}
.msg {
  background-color: rgb(230, 128, 61);
  border-radius: 5px;
  margin: 10px auto;
  max-width: 200px;
  color: white;
  font-weight: 600;
}
</style>
