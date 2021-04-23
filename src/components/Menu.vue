<template>
  <a-layout-sider
    v-model="collapsed"
    :trigger="null"
    collapsible
    slot="menu"
  >
    <div class="logo" />

    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-menu-item key="1">
        <router-link class="router-link" to="/users">
          <a-icon type="user" />
          <span>
            Users
          </span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="2">
        <router-link class="router-link" to="/aaa">
          <a-icon type="video-camera" />
          <span>
            Nav2
          </span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="3">
        <router-link class="router-link" to="/aaa">
          <a-icon type="upload" />

          <span>
            Nav2
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
  }
}
</script>
<style lang="scss">
  .router-link {
    display: block;
  }
</style>
