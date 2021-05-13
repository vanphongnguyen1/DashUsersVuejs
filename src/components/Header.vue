<template>
  <a-layout-header style="background: #fff; padding: 0" slot="header">
    <div class="header">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="handleClickIcon"
      />

      <div @click="setIsPopver">
        <Avarta name="phong"/>
        <PoPoverHeader :isPopover="isPopover"/>

        <span
          class="overflow-trasperent"
          @click="handleOnClickOverflow"
          v-if="isPopover"
        />

      </div>
    </div>
  </a-layout-header>
</template>
<script>

import { eventBus } from './EventBus'
import Avarta from './Avarta'
import PoPoverHeader from './PoPoverHeader'
export default {
  data() {
    return {
      isPopover: false
    }
  },
  props: {
    collapsed: Boolean
  },

  components: {
    Avarta,
    PoPoverHeader
  },

  methods: {
    handleClickIcon() {
      eventBus.$emit('isCollapsed', !this.collapsed);
    },

    setIsPopver () {
      this.isPopover = true
    },

    handleOnClickOverflow (e) {
      e.stopPropagation()
      this.isPopover = false

    }
  }
}
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header > div {
    display: inline-block;
    margin-right: 2rem;
    line-height: 1.8rem;
    position: relative;
    cursor: pointer;
  }

  .overflow-trasperent {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
