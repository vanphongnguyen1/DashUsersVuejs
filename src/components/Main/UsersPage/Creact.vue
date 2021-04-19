<template>
  <div class="user-form">
    <Form />
  </div>
</template>

<script>
import Form from './Form'

export default {
  name: 'CreactUser',
  components: {
    Form,
  },

  created () {
    this.$store.dispatch('fetchMale')
    this.$store.dispatch('fetchGenders')
  }
}
</script>

<style lang="">

</style>
