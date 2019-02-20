<template>
<div>
    <form class="mt-5 mb-5">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Email"
          >
          <div class="text-danger">{{User.KeyError}}</div>
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="inputPassword4"
            placeholder="Password"
          >
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input
          type="text"
          v-model="address"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        >
      </div>
      <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
        >
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity">
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip">
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
          <label class="form-check-label" for="gridCheck">Check me out</label>
        </div>
      </div>
      <button type="button" @click.prevent="registerUser" class="btn btn-primary">Sign in</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Register",
  props: {
    password: String,
    email: String,
    address: String
  },
  methods: {
    registerUser: function(event) {
      const User = {
        email: this.email,
        username: "HADIJA",
        password: this.password,
        location: this.password,
        role: "User"
      };
      this.$store.dispatch("register", User);
      console.log(User);
    }
  },
  computed: {
    ...mapState(["User"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
