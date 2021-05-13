<template>
  <div class="show-comments">
    <ul class="show-comments__list">
      <ItemComment
        :key="item.id"
        name="aaa"
        :comment="item.title"
        avarta="item.users.avarta"
        v-for="item in data"
      />
    </ul>

    <router-link class="show-comments__all" to="/">
      Show All
    </router-link>
  </div>
</template>

<script>
import ItemComment from './ItemComment'

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  components: {
    ItemComment
  }
}
</script>

<style lang="scss">

</style>
