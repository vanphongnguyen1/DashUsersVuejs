<template>
  <div class="info-products__item">
    <p class="title__width info-products__item--name">
      {{ product.name }}
    </p>
    <p class="title__width info-products__item--price">
      {{ product.price }}
    </p>

    <div class="title__width box-count">
      <a-input-number :min="1" :max="10" :value="product.count" @change="handleOnchangeCount"/>
    </div>

    <p class="title__width info-products__item--total-price">
      {{product.totalPrice}}
    </p>

    <a-button type="danger" class="title__width">
      Delete
    </a-button>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object
    }
  },

  methods: {
    handleOnchangeCount(value) {
      this.$emit('handleOnchangeCount', {value, id: this.product.id})
    }
  },
}
</script>
<style lang="scss">

  .info-products {
    margin-bottom: 3rem;

    &__item {
      display: flex;
      align-items: center;
      padding: 0.5rem 0;
      border-bottom: 1px solid #f1f1f1;

      &--name,
      &--price,
      &--total-price {
        padding: 0 1rem;
        font-weight: 500;
        // width: 20%;
      }
    }

    .box-count {
      // width: 20%;
      padding: 0 1rem;
    }
  }
</style>
