<template>
  <div class="orders">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane
        :tab="item.name.toUpperCase()"
        v-for="item in getTabs"
        :key="item.id"
      >
        <TableOrders :id="item.id"/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import TableOrders from './TableOrders'

export default {
  data() {
    return {

    }
  },

  components: {
    TableOrders,
  },

  computed: {
    getTabs () {
      return this.$store.state.status.list
    }
  },

  methods: {
    callback (key) {
      console.log('aaa', key);
    }
  },

  created () {
    this.$store.dispatch('fetchOrders')
    this.$store.dispatch('fetchStatus')
    this.$store.dispatch('fetchUsers')
  }
}
</script>
<style lang="scss" scoped>
  .orders {
    position: relative;

    .ant-tabs {
      padding-top: 6rem;
    }
  }

</style>
