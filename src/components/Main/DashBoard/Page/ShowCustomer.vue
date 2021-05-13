<template>
  <div class="show-customer">
    <ul class="show-customer__list">
      <ItemCustommer
        :name="item.name"
        :avarta="item.avarta"
        :data="item"
        v-for="item in listUser"
        :key="item.id"
      />
    </ul>

    <router-link
      class="show-comments__all"
      :to="'/' + nameAPI"
    >
      Show All
    </router-link>
  </div>
</template>

<script>
import ItemCustommer from './ItemCustommer'
import { NAME_API } from '../../../../dataDefault'

export default {
  data() {
    return {
      nameAPI: NAME_API.users
    }
  },
  props: {
    listUser: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ItemCustommer
  },
}
</script>

<style lang="scss">
  .show-customer {
    .show-content {
      &__user {
        font-size: 1.6rem;
        font-weight: 500;
      }
    }
  }
</style>
