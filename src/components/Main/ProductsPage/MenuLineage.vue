<template>
  <div>
    <a-menu mode="vertical" @click="handleClick">
      <a-menu-item v-for="item in filterLineage" :key="item.id">
        {{ item.name }}
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [Number, String],
      default: ""
    }
  },

  computed: {
    dataLineage () {
      return this.$store.state.lineage.list
    },

    filterLineage () {
      return this.dataLineage.filter(item => item.groupId === this.id)
    }
  },

  methods: {
    handleClick(e) {
      console.log('click ', e);
    },
  }
}
</script>

<style lang="scss">
  .ant-menu {
    background: red;
    height: 100vh;
  }
</style>
