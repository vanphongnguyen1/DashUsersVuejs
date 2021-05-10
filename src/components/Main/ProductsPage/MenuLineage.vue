<template>
  <div>
    <ul class="menu-lineage">
      <li
        class="menu-lineage__item"
        :key="0"
        @click="() => handleClick(0)"
        :class="getLineage === 0 ? 'menu-lineage__item-selected': ''"
      >
        <p class="menu-lineage__item--text">
          Show All
        </p>

      </li>

      <li
        class="menu-lineage__item"
        v-for="item in filterLineage"
        :key="item.id"
        @click="() => handleClick(item.id)"
        :class="getLineage === item.id ? 'menu-lineage__item-selected': ''"
      >
        <p class="menu-lineage__item--text">
          {{ item.name }}
        </p>
      </li>
    </ul>
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
    },

    getLineage () {
      return this.$store.state.products.lineageProduct
    }
  },

  methods: {
    handleClick(id) {
      this.$store.dispatch('dataLineageProduct',id)
    },
  }
}
</script>

<style lang="scss">
  .ant-menu {
    background: red;
    height: 100vh;
  }

  .menu-lineage {
    &__item {
      margin-bottom: 2px;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        background: #f1f1f1;
      }

      &--text {
        font-size: 1.4rem;
        font-weight: 500;
        padding: 1rem;
      }
    }

    &__item-selected {
      color: #1890ff;
      background: #e4f4fd;
    }
  }
</style>
