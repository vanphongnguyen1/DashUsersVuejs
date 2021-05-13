<template>
  <li class="show-comments__item">
    <router-link
      class="show-comments__link"
      to={TITLE_MENU.COMMENTS}
    >
      <div class="show-comments__link-box">
        <Avarta avarta="avarta" name="name" />

        <div class="show-content">
          <p class="show-content__name">{{ name || 'name'}}</p>

          <p class="show-content__text">{{ comment }}</p>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
import Avarta from '../../../Avarta'

export default {
  props: {
    comment: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    avarta: {
      type: String,
      default: ''
    },

  },
  components: {
    Avarta
  }
}
</script>

<style lang="scss">

</style>
