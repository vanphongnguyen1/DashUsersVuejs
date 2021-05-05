<template>
  <div class="col-2">
    <div class="content-product__box">
      <div class="item-product">
        <div class="item-product__sale">
          <span class="item-product__sale--text">20%</span>
        </div>

        <img
          :src="item.images[0]"
          alt=""
          class="item-product__image"
        >

        <div class="item-product__info">
          <p class="item-product__info--name">{{ item.name }}</p>

          <div class="box-price">
            <span class="item-product__info--price-sale">{{ item.priceSale }}</span>
            <span class="item-product__info--price">{{ item.price}}</span>
          </div>
        </div>

        <div class="item-product__btn">
          <div class="item-product__show" @click="handleDelete">
            <span class="item-product__show--icon fas fa-trash" />
            <span class="item-product__show--text">Delete</span>
          </div>

          <router-link
            class="item-product__show"
            :to="{name: 'product-edit', params: {id: item.id}}"

          >
            <span class="item-product__show--icon fas fa-images" />
            <span class="item-product__show--text">Edit</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DELETE_API } from '../../../store/usersService'

const key = 'updatable'

export default {
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    dataImages () {
      return this.$store.state.images.list
    }
  },

  methods: {
    // handleClickEdit () {
    //   this.$store.commit('setEditProduct', this.item)
    // },

    async handleDelete () {
      const { item } = this

      DELETE_API(`products/${item.id}`)
      DELETE_API(`images/${item.imageId}`)
      DELETE_API(`typeProducts/${item.typeProductId}`)

      this.openMessage('Delete success!')

      await this.$store.dispatch('fetchImages')
      await this.$store.dispatch('fetchProducts')
      await this.$store.dispatch('fetchTypeProducts')
    },

    openMessage (text) {
      this.$message.loading({ content: 'Loading...', key })

      setTimeout(() => {
        this.$message.success({ content: text, key, duration: 2 })
      }, 1000);
    },
  }
}
</script>

<style lang="scss">
  .content-product {
    &__box {
      margin: 1.5rem 0;

      .item-product {
        position: relative;
        height: 25rem;
        overflow: hidden;
        border-radius: 0.5rem;
        cursor: pointer;

        &:hover {
          .item-product__image {
            transform: scale(1.1);
          }

          .item-product__info {
            transform: translateY(100%);
            opacity: 0;
            visibility: hidden;
          }

          .item-product__btn {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
        }

        &__sale {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 2;
          background: #f37777;

          &--text {
            padding: 0.7rem;
            display: block;
            font-size: 1.6rem;
            font-weight: 500;
            color: #fff;
          }
        }

        &__image {
          object-fit: cover;
          object-position: center;

          width: 100%;
          height: 100%;
          transition: all .3s ease-in-out;
        }

        &__info {
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;

          background: rgba(#000000, .2);
          padding: 0.5rem 2rem;

          transform: translateY(0);
          opacity: 1;
          visibility: visible;
          transition: all .3s ease-in-out;

          .box-price {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
          }

          &--name {
            font-size: 1.6rem;
            font-weight: 500;
            color: #fff;

            display: -webkit-inline-box;
            -webkit-line-clamp: 1;
            overflow: hidden;
            -webkit-box-orient: vertical;
          }

          &--price {
            font-size: 1.4rem;
            font-weight: 500;
            color: #f0f0f0;
            text-decoration: line-through;
          }

          &--price-sale {
            font-size: 1.6rem;
            font-weight: 500;
            color: #fff;
            margin-right: 0.5rem;
          }
        }

        &__btn {
          position: absolute;
          bottom: 0;
          left: 0;

          display: flex;
          justify-content: space-around;
          align-items: center;

          height: 6rem;
          width: 100%;
          background: rgba(#000000, .2);

          transform: translateY(100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease-in-out;
        }

        &__show {
          border: 1px solid #e8e8e8;
          padding: 5px;
          border-radius: 0.5rem;
          width: 48%;

          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease-in-out;
          cursor: pointer;

          &:hover {
            background: rgba(#fff, .3);
            border: none;

            .item-product__show--text,
            .item-product__show--icon {
              color: #000;
            }
          }

          &--icon {
            font-size: 2rem;
            margin-right: 0.5rem;
            color: #e8e8e8;
            transition: all 0.3s ease-in-out;
          }

          &--text {
            font-size: 1.5rem;
            font-weight: 700;
            color: #e8e8e8;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }
  }
</style>
