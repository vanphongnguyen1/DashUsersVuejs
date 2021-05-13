<template>
  <div>
    <div class="content-product" v-if="defaultDataPagination.length">
      <div class="row">
        <ItemProduct
          v-for="item in defaultDataPagination"
          :key="item.id"
          :item="item"
        />
      </div>

      <div class="flex justify-center">
        <a-pagination
          :default-current="1"
          :total="filterProducts.length"
          @change="onShowSizeChange"
          :page-size="pageSize"
        />
      </div>
    </div>

    <div class="content-product" v-if="defaultDataPagination.length <= 0">
      <div class="box-create">
        <p class="fab fa-optin-monster not-data__icon" />

        <router-link
          :to="{name: pathCreated}">
          <BtnCreate />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ItemProduct from './ItemProduct'
import { PATH_NAME_ROUTE } from '../../../dataDefault'
import BtnCreate from '../../Btn/BtnCreate'

const { name } = PATH_NAME_ROUTE.products.children.created

export default {
  data() {
    return {
      page: 1,
      pageSize: 4,
      pathCreated: name,
    }
  },

  props: {
    id: {
      type: [Number, String]
    }
  },

  computed: {
    getLineage () {
      return this.$store.state.products.lineageProduct
    },

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

      if (this.getLineage > 0) {
        return newData.filter(item => item.lineageId === this.getLineage)
      }
      return newData
    },

    defaultDataPagination () {
      const defaule = this.page * this.pageSize
      return this.filterProducts.slice(defaule - this.pageSize, defaule)
    }
  },

  methods: {
    onShowSizeChange(page, pageSize) {
      this.page = page
      this.pageSize = pageSize
    }
  },

  components: {
    ItemProduct,
    BtnCreate
  },
}
</script>

<style lang="scss" scoped>
  .flex {
    display: flex;
  }
  .justify-center {
    justify-content: center;
  }
  .box-create {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    min-height: 20rem;
  }

  .not-data__icon {
    font-size: 13rem;
    margin: 3rem 0;
  }
</style>
