<template>
  <div class="hello">
    {{this.$store.state.test}}
    <br>
    <h1>{{ msg }}</h1>
    <div class="card">
      <div class="list-group-item" v-for="(item, index) in posts" :key="index">
        <span class="card-body">{{item.title}}</span>
      </div>
    </div>
    <div>{{p}}</div>
    <form action>
      <input v-model="query" type="search" value>
      <button type="button" @click.prevent="executeSearch">Search</button>
    </form>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
    query: String,
    password: String,
    email: String,
    address: String
  },
  methods: {
    executeSearch: function(event) {
      if (!this.query) {
        alert("please enter details");
      } else {
        alert("user: " + this.query + " " + "event: " + event.target.innerText);
        this.$store.dispatch("to_post", this.query);
      }
    }
  },
  computed: {
    ...mapState(["posts", "p"])
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
