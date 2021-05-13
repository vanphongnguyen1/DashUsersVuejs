<template>
  <span>
    <span class="avarta" v-if="avarta">
      <img :src="ava" alt="s" class="avarta__img" />
    </span>

    <span class="avarta" v-else>
      <span class="avarta__text">{{ fristChar.toUpperCase() }}</span>
    </span>
  </span>
</template>
<script>
export default {
  props: {
    avarta: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
  },

  computed: {
    fristChar () {
      return this.name.slice(0,1)
    }
  }
}
</script>

<style lang="scss">
.avarta {
  display: inline-block;
  border: 1px solid #e6e3e3;
  border-radius: 50%;
  text-align: center;

  width: 3.5rem;
  height: 3.5rem;
  line-height: 3rem;
  margin-right: 0.5rem;

  overflow: hidden;

  &__text {
    font-size: 1.7rem;
    margin-right: 1rem;
    font-weight: 700;

    color: #999;
    width: 100%;
    display: block;
  }

  &__img {
    color: transparent;
    width: 100%;
    height: 100%;
    text-align: center;
  }
}
</style>
