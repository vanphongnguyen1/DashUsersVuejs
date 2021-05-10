<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <Menu :collapsed="collapsed"/>
    </a-layout-sider>

    <a-layout>
      <Header :collapsed="collapsed">
        <slot slot="header" />
      </Header>

      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >

      <transition name="slide-hidden">
        <router-view />
      </transition>

      </a-layout-content>
    </a-layout>
  </a-layout>

  <!-- <div>
    <ApiVuejs />
  </div> -->
</template>

<script>
import Header from './components/Header'
import Menu from './components/Menu'
import { eventBus } from './components/EventBus'
// import ApiVuejs from './components/ApiVuejs'

export default {
  data() {
    return {
      collapsed: false,
    };
  },

  components: {
    Header,
    Menu,
    // ApiVuejs,
  },

  mounted () {
    eventBus.$on('isCollapsed', data => this.collapsed = data)
  }
}

</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.ant-layout-sider {
  height: 100vh;
}
</style>
