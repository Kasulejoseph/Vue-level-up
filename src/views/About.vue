<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Country country="uganda"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Country from "@/components/Country";

export default {
  name: "about",
  components: {
    Country
  }
};
</script>

