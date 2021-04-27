<template>
  <div class="box-delete-table" :class="activeClass">
    <p class="box-delete-table__text">
      <slot name="length" /> Selected Item
    </p>

    <!-- <button class="btn--delete" @click="handleDeleteUser">
      Delete
    </button> -->
    <BtnDelete :handleDeleteUser="handleDeleteUser" />
  </div>
</template>

<script>
import BtnDelete from './Btn/BtnDelete'
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
  },

  components: {
    BtnDelete
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
    padding: 0 1.6rem;

    transform: translateY(100%);
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease-in-out;

    &__text {
      font-size: 1.6;
    }
  }
</style>
