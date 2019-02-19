<template>
  <div>
    <input v-model.lazy="country" placeholder="Enter your country">
    <h2>{{country}}</h2>
    <label class="form-check-label">
      <input type="checkbox" value="beers" v-model="searchIndexes"/>
      Beers
    </label>
    <br>
    <label class="form-check-label">
      <input type="checkbox" value="soda" v-model="search"/>
      Sodas
    </label>
    <p></p>
    <label class="form-check-label">
      <input type="radio" value="beers" v-model="searchIndex"/>
      Beers
    </label>
    <br>
    <label class="form-check-label">
      <input type="radio" value="soda" v-model="searchIndex"/>
      Sodas
    </label>
    <br>
    <select v-model="selectedSearch">
        <option value="beers">Beers</option>
        <option value="soda">Soda</option>
        <option value="food">Food</option>
        <option value="milk">Milk</option>
    </select><br/>
    <small>selected: {{selectedSearch}}</small>
  </div>
</template>

<script>
export default {
  name: "Country",
  props: {
    isPowerSyntaxEnabled: false,
    country: String,
    searchIndex: 'beers',
    selectedSearch: ['food', 'beers']
  }
};
</script>
