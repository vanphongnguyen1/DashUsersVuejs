<template>
  <div class="created-user">
    <div class="box-flex">
      <h2 class="created-user__heading">Created User</h2>
    </div>
    <Form :url="getUrl"/>
  </div>
</template>

<script>
import Form from './Form'

export default {
  name: 'CreactUser',
  components: {
    Form,
  },

  computed: {
    getUrl () {
      const url = this.$route.path.split('/')
      return url[url.length - 1]
    }
  }
}
</script>

<style lang="scss">
  .created-user {
    width: 50%;

    &__heading {
      margin-bottom: 3rem;
      margin-left: 10rem;
    }
  }
</style>
