<template>
 <button class="btn--created">
   <span class="btn--icon fas fa-plus" />
   Create
 </button>
</template>
<script>
export default {

}
</script>
<style lang="scss">
  @import '../../assets/scss/_mixin.scss';

.btn{

  &--created {
    @include btn-mixin;

    background: #f0f2f5;

    width: auto;
    display: flex;
    align-items: center;

    &:hover {
      background: #d0d3d6;
    }
  }

  &--icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
}
</style>
