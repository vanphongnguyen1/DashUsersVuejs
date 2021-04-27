<template>
  <button class="btn--edit">Edit</button>
</template>
<script>
export default {

}
</script>
<style lang="scss">
  @import '../../assets/scss/_mixin.scss';

  .btn--edit {
    @include btn-mixin;

    color: #fff;
    background: #65aef1;

    &:hover {
      background: #1888ef;
    }
  }
</style>
