<template>
  <div>
    <form @submit.prevent="onSubmit">
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
          if (localStorage.getItem('user')) {
            this.$router.push('/create-post');
          } else {
            console.log('Unauthorized');
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
  max-width: 50%;
  margin: 20px auto;
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
</style>
