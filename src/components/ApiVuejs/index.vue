<template>
  <div>
    <div class="container">

      <div class="row">
        <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <h1>Alooooooooooooooooooo</h1>
          <p>{{ text | to-uppercase | toLowerCase }}</p>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <h1>Filter Products</h1>
            <input type="text" class="form-control" v-model="filterProduct">

            <div class="card">
              <div class="card-body">
                <ul>
                  <li v-for="(product, index) in filteredProduct" :key="index">
                    {{ product }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      text: 'HeLLO',
      products: ['1', '2', '3', '5'],
      filterProduct: ''
    }
  },

  computed: {
    filteredProduct () {
      return this.products.filter(item => item.match(this.filterProduct))
    }
  },

  filters: {
    toLowerCase (text) {
      return text.toLowerCase()
    }
  }
}
</script>
<style>

</style>
