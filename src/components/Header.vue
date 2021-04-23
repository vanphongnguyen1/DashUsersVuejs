<template>
  <a-layout-header style="background: #fff; padding: 0" slot="header">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="handleClickIcon"
    />
  </a-layout-header>
</template>
<script>
import { eventBus } from './EventBus'
export default {
  props: {
    collapsed: Boolean
  },

  methods: {
    handleClickIcon() {
      eventBus.$emit('isCollapsed', !this.collapsed);
    }
  }
}
</script>
