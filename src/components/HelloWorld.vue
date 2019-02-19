<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form action>
      <input v-model="query" type="search" value>
      <button type="button" @click.prevent="executeSearch">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    query: ""
  },
  methods: {
    executeSearch: function(event) {
      if (!this.query) {
        alert("please enter details");
      }
      else{
      alert("user: " + this.query + " " + "event: " + event.target.innerText);
      }
    }
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
