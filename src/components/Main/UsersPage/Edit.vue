<template >
  <div>
    <div class="edit-user" :class="{showEdit: getIsUser}">
      <div class="box-flex">
        <h2 class="edit-user__heading">Form Edit User</h2>
        <span
          class="edit-user__icon fas fa-times"
          @click="closeOverlay"
        />
      </div>

      <Form />

    </div>

    <div
      class="overlay"
      :class="{showEdit: getIsUser}"
      @click="closeOverlay"
    />
  </div>
</template>

<script>
import Form from './Form'

export default {
  data () {
    return {

    }
  },

  components: {
    Form
  },

  computed: {
    getIsUser () {
      return this.$store.state.users.dataEdit.isUser
    },

    getDataEdit () {
      return this.$store.state.users.dataEdit.user
    }
  },

  methods: {
    closeOverlay () {
      this.$store.commit('setDefaultEditUser')
    }
  }
}
</script>

<style lang="scss" scoped>
  .edit-user {
    width: 35%;
    height: 100vh;
    background: #fff;
    padding: 3rem 2rem;

    position: fixed;
    top: 0;
    right: 0;
    z-index: 5;

    transform: translateX(100%);
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease-in-out;

    .box-flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 3rem;
    }

    &__heading {
      padding: 1rem 0;
    }

    &__icon {
      background: #b2b2b2;
      border-radius: 50%;
      width: 3.5rem;
      height: 3.5rem;

      line-height: 3.5rem;
      text-align: center;
      font-size: 2rem;
      color: #fff;
      cursor: pointer;
      transition: all .3s ease-in-out;

      &:hover {
        background: #706f6f;
      }
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
    background: rgba(0, 0, 0, 0.3);

    transition: all .2s ease-in-out;
    transform: translateX(100%);
    opacity: 0;
    visibility: hidden;
  }

  .showEdit {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
</style>
