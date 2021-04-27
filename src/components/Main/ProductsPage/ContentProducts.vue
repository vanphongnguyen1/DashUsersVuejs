<template>
  <div class="content-product">
    <div class="row">
      <ItemProduct />
      <ItemProduct />
      <ItemProduct />
      <ItemProduct />
      <ItemProduct />
      <ItemProduct />
      <ItemProduct />
      <ItemProduct />
    </div>
  </div>
</template>

<script>
import ItemProduct from './ItemProduct'

export default {
  data() {
    return {
      pageSize: 20,
      current: 4,
    };
  },

  components: {
    ItemProduct
  },

  watch: {
    pageSize(val) {
      console.log('pageSize', val);
    },
    current(val) {
      console.log('current', val);
    },
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    },
  }
}
</script>

<style lang="scss">
</style>
