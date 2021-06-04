<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.userName"
          placeholder="Enter username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-group-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Create password:"
        label-for="input-3"
      >
        <b-form-input
          id="input-group-3"
          v-model="form.password"
          type="password"
          placeholder="Create password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Repeat the password:"
        label-for="input-4"
      >
        <b-form-input
          id="input-group-4"
          v-model="form.password2"
          type="password"
          placeholder="Reapeat the password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        userName: '',
        email: '',
        password: '',
        password2: '',
      },

      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.userName = '';
      this.form.email = '';
      (this.form.password = ''),
        (this.form.password2 = ''),
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
  margin: auto;
}
input {
  width: 400px;
  margin: 5px auto;
}
</style>
