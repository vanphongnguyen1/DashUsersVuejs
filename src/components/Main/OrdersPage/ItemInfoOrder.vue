<template>
  <li class="info-order__item">
    <span class="info-order__item--name">{{ title }}</span>
    <span class="info-order__item--name">{{ data }}</span>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: [
        String, Number
      ],
      default: ''
    }
  }
}
</script>

<style lang="">

</style>
