<template>
  <div class="content-product">
    <div class="row" v-if="filterProducts.length">
      <ItemProduct v-for="item in filterProducts" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import ItemProduct from './ItemProduct'

export default {
  data() {
    return {

    }
  },

  props: {
    id: {
      type: [Number, String]
    }
  },

  computed: {
    filterProducts () {
      const newData = []
      const dataImages = this.$store.state.images.list
      const dataProduct = this.$store.state.products.list.filter(item => item.groupId === this.id)

      dataProduct.forEach(item => {
        dataImages.find(image => {
          if (item.imageId === image.id) {
            newData.push({
              ...item,
              images: image.files
            })
          }
        })
      })

      return newData
    }
  },

  components: {
    ItemProduct
  },
}
</script>

<style lang="scss">
</style>
