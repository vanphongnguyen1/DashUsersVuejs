<template>
  <div class="products">
    <div class="box-create">
      <router-link
        :to="{name: pathCreated}">
        <BtnCreate />
      </router-link>
    </div>

    <a-tabs default-active-key="1" @change="callback" >
      <a-tab-pane
        :tab="item.name"
        v-for="item in dataGroup"
        :key="item.id"
      >
        <div class="products__tab-content">
          <div class="row">
            <div class="col-2">
              <MenuLineage :id="item.id" />
            </div>

            <div class="col-10">
              <ContentProducts :id="item.id" />
            </div>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import MenuLineage from './MenuLineage'
import ContentProducts from './ContentProducts'
import BtnCreate from '../../Btn/BtnCreate'
import { PATH_NAME_ROUTE } from '../../../dataDefault'

const { name } = PATH_NAME_ROUTE.products.children.created

export default {
  data() {
    return {
      pathCreated: name
    }
  },

  components: {
    MenuLineage,
    ContentProducts,
    BtnCreate
  },

  computed: {
    dataGroup () {
      return this.$store.state.group.list
    }
  },

  methods: {
    callback() {
      this.$store.dispatch('dataLineageProduct', 0)
    },
  },

  created () {
    this.$store.dispatch('fetchGroup')
    this.$store.dispatch('fetchLineage')
    this.$store.dispatch('fetchImages')
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchTypeProducts')
  },
}
</script>

<style lang="scss">
  .box-create {
    margin: 2rem 0;
  }
</style>
