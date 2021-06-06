<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="name">Enter your name</label>
      <div class="input">
        <input type="email" id="name" v-model="name" required />
      </div>

      <label for="password">Password</label>
      <div class="input">
        <input type="password" id="password" v-model="passwordOne" required />
      </div>
      <label for="confirm-password">Confirm Password</label>
      <div class="input">
        <input
          type="password"
          id="confirm-password"
          v-model="passwordTwo"
          required
        />
      </div>

      <div class="submit">
        <b-button type="submit">Register</b-button>
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

        passwordOne: '',
        passwordTwo: '',
      },

      show: true,
    };
  },
  methods: {
    onSubmit() {
      if (this.passwordOne === this.passwordTwo) {
        const formData = {
          name: this.name,

          passwordOne: this.passwordOne,
          passwordTwo: this.passwordTwo,
        };

        console.log(formData);

        axios
          .post('http://167.99.138.67:1111/createaccount', {
            name: formData.name,

            passwordOne: formData.passwordOne,
            passwordTwo: formData.passwordTwo,
          })
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      } else {
        alert('Passwords do not match!');
      }
    },
    onReset() {
      // Reset our form values
      this.form.name = '';
      this.form.email = '';
      (this.form.passwordOne = ''),
        (this.form.passwordTwo = ''),
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
</style>
