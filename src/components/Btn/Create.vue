<template>
 <button class="btn btn--created">
   <span class="btn--icon fas fa-plus" />
   Create
 </button>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.btn {
    border: none;
    padding: 0.7rem 1.5rem;

    cursor: pointer;
    transition: all .3s ease-in-out;
    position: relative;

  &--created {
    font-size: 1.6rem;
    font-weight: 700;
    background: #f0f2f5;

    &:hover {
      background: #d0d3d6;
    }

    &:active::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(#000000, 0.2);
    }
  }

  &--icon {
    font-size: 1.5rem;
  }
}
</style>
