<template>
  <div class="product-item">
    <img
      :src="item"
      class="product-item__image"
    />

    <div class="product-item__icon">
      <span
        class="product-item__icon--eye far fa-eye"
        @click="handleView"
      />

      <span
        class="product-item__icon--delete far fa-trash"
        @click="handleDeleteImage"
      />
    </div>

    <a-modal
      :visible="visible"
      @cancel="handleCancel"
    >
      <div class="box-view">
        <img
          :src="item"
          class="box-view__image"
        />
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },

  props: {
    item: {
      type: String
    },
    handleDeleteImage: {
      type: Function,
      default: () => {}
    }
  },

  methods: {
    handleView () {
      this.visible = true
    },
    handleCancel () {
      console.log('Clicked cancel button');
      this.visible = false;
    },
  }
}
</script>

<style lang="scss">
  .ant-modal-footer {
    display: none;
  }
  .ant-modal-body.ant-modal-body {
    padding: 10px;
  }

  .product-item {
    object-fit: contain;
    position: relative;

    border: 1px solid #ccc;
    margin: 0.3rem;
    overflow: hidden;

    &__image{
      width: 11rem;
      height: 12rem;
    }

    &__icon {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(#000000, .3);

      justify-content: center;
      align-items: center;
      display: flex;

      transform: translateY(60%);
      transition: all .3s ease-in-out;
      opacity: 0;
      visibility: hidden;

      &--eye,
      &--delete {
        font-size: 1.4rem;
        color: #e0e0e0;
        padding: 0.5rem;
        margin: 0 0.3rem;

        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
          color: #fbfbfb;
        }
      }
    }

    &:hover .product-item__icon {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
      z-index: 2;
    }
  }
</style>
