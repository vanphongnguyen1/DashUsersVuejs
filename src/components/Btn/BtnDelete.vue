<template>
  <button class="btn--delete" @click="handleDeleteUser">
    Delete
  </button>
</template>

<script>
export default {
  props: {
    handleDeleteUser: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/scss/_mixin.scss';

  .btn--delete {
    @include btn-mixin;

    background: #e85757;
    color: #fff;

    &:hover {
      background: #ea2424;
    }
  }
</style>
