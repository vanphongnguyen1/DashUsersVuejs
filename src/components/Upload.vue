<template>
  <div class="box-file">
    <div v-if="fileList.length" class="box-file__images">
      <ItemImage
        v-for="(item, index) in fileList"
        :key="index"
        :item="item"
        :index="index"
        :handleDeleteImage="() => handleDeleteImage(index)"
      />
    </div>

    <input
      type="file"
      name="files"
      id="files"
      @change="handleUpload"
      multiple
    />

    <label
      for="files"
      class="group__title label-file"
    >
      <span class="label-file__icon fas fa-plus" />
      <span class="label-file__text">
        Upload
      </span>
    </label>
  </div>
</template>

<script>
import ItemImage from './ItemImage'
export default {
  data() {
    return {

    }
  },

  props: {
    fileList: Array,
    contentEditor: String,

    handleUpload: {
      type: Function,
      default: () => {}
    },
    handleDeleteImage: {
      type: Function,
      default: () => {}
    }
  },

  created() {
    console.log('aaa', this.fileList);
  },

  methods: {
    onChange() {

    }
  },

  components: {
    ItemImage
  }
}
</script>

<style lang="scss">
.box-file {
  display: flex;
  flex-wrap: wrap;
  background: red;

  padding: 2rem;
  width: 100%;
  min-height: 15rem;
  background-color: #F5F5F5;

  &__images {
    display: flex;
    flex-wrap: wrap;
  }

  input[type=file] {
    display: none !important;
  }

  .group {
    &__title{
      font-size: 1.6rem;
      font-weight: 500;
      margin-left: 0.5rem;
    }
  }

  .label-file {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 11rem;
    height: 12rem;
    margin: 0.3rem;

    font-size: 1.6rem;
    font-weight: 500;

    border: 1px dashed #ccc;
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      border: 1px dashed #4F3CC9;
    }

    &:hover .label-file__icon {
      color: #4F3CC9;
    }

    &__text {
      display: block;
      text-align: center;
      font-size: 1.4rem;
      font-weight: 400;
      margin-top: 1.5rem;
    }

    &__icon {
      display: block;
      font-size: 1.4rem;
      color: #b3b2b2;
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
