<template>
  <div class="box-delete-table" :class="activeClass">
    <p class="box-delete-table__text">
      <slot name="length" /> Selected Item
    </p>

    <button class="btn--delete" @click="handleDeleteUser">
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: 'BoxDeleteTable',

  props: {
    activeClass: {
      type: String,
      default: ''
    },
    handleDeleteUser: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scope>
  .box-delete-table {
    display: flex;
    justify-content: space-between;

    align-items: center;
    background: #f0f2f5;

    position: absolute;
    top: 0;

    width: 100%;
    height: 6rem;
    padding: 0 3rem;

    transform: translateY(100%);
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease-in-out;

    &__text {
      font-size: 1.6;
    }

    .btn--delete {
      position: relative;
      color: #444;
      background: #f5c6c6;

      padding: 0.5rem 2rem;
      font-size: 1.6rem;
      font-weight: 600;

      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: #efb7b7;
      }

      &:active::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 100%;
        background: #f3adad;
      }
    }
  }
</style>
