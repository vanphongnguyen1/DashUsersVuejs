<template>
  <div class="pending-order">
    <h2 class="pending-order__heading">
      Pending Orders
    </h2>

    <ul class="pending-order__list">
      <ItemOrderPending :data="item" :key="item.id" v-for="item in data"/>
    </ul>
  </div>
</template>

<script>
import ItemOrderPending from './ItemOrderPending'
export default {
  props: {
    data: {
      type: Array,
    }
  },

  components: {
    ItemOrderPending
  }
}
</script>

<style lang="scss">
  .pending-order {
    margin: 1.5rem 0;
    background: #fff;
    border: 1px solid #e0e0e3;
    border-radius: 1rem;
    overflow: hidden;

    &__heading {
      font-size: 2.5rem;
      font-weight: 400;
      padding: 2rem 1.5rem;
    }

    &__list {
      padding: 1rem 0;
    }

    &__item {
      list-style-type: none;
    }

    &__link {
      display: block;
      padding: 0.5rem 1.5rem;
      transition: all 0.3s ease-in-out;
      position: relative;

      &:hover {
        text-decoration: none;
        background-color: rgba( #000000, .04);
      }

      &:active::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 100%;
        background: rgba(#000000, 0.2);
      }

      .info-order {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__user {
          display: flex;
          align-items: center;
        }

        &__detail {
          padding: 0.5rem;

          &--date {
            display: block;
          }

          &--customer {
            color: #757575;
            display: block;
            text-transform: capitalize;
          }
        }

        &__meny {
          font-size: 1.5rem;
        }
      }
    }
  }
</style>
