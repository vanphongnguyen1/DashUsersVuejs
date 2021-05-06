<template>
  <a-layout-sider
    v-model="collapsed"
    :trigger="null"
    collapsible
    slot="menu"
  >
    <div class="logo" />

    <a-menu
      theme="dark"
      mode="inline"
      :default-selected-keys="['1']"
    >
      <a-menu-item
        :key="item.id"
        v-for="item in dataNavbar"
      >
        <router-link
          :to="'/' + item.title.toLowerCase()"
          active-class="router-link-exact-active"
        >
          <span class="menu__list--icon" :class="item.icon"></span>

          <span v-if="!collapsed">
            {{ item.title }}
          </span>
        </router-link>
      </a-menu-item>

    </a-menu>
  </a-layout-sider>
</template>
<script>
export default {
  props: {
    collapsed: Boolean
  },

  computed: {
    dataNavbar () {
      return this.$store.state.navbar.list
    }
  },

  created () {
    this.$store.dispatch('fetchNavbar')
  }
}
</script>
<style lang="scss">
  .router-link {
    display: block;
  }

  .menu {
    &__list {
      &--icon {
        margin-right: 0.5rem;
        width: 2rem;
      }
    }
  }
</style>
