<template>
    <li class="show-customer__item">
      <div
        class="show-customer__link"
        @click="handleEditUser"
      >
        <div class="show-customer__link-box">
          <Avarta :name="name" :avarta="avarta" />

          <div class="show-content">
            <p class="show-content__user">
              {{ name }}
            </p>
          </div>
        </div>
      </div>
    </li>
</template>

<script>
import Avarta from '../../../../components/Avarta'
import { NAME_API } from '../../../../dataDefault'

export default {
  data() {
    return {
      nameAPI: NAME_API.users
    }
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    avarta: {
      type: String,
      default: ''
    },
    data: {
      type: Object
    }
  },

  components: {
    Avarta
  },

  methods: {
    async handleEditUser () {
      await this.$store.commit('setEditUser', this.data)
      this.$router.push(`${this.nameAPI}`)
    }
  }
}
</script>

<style lang="scss">
  @import '../../../../assets/scss/_mixin.scss';

  .show-customer,
  .show-comments {
    background: #fff;
    border: 1px solid #f1f1f1f1;
    border-radius: 0 0 1rem 1rem;
    position: relative;

    &::before,
    &::after {
      position: absolute;
      content: '';
      bottom: 100%;
      transform: translateY(-1px);

      z-index: 2;
      width: 7px;
      height: 8px;
      border-bottom: 1px solid #e0e0e3;
    }

    &::before {
      left: -1px;
      background: #fceaec;
      border-left: 1px solid #e0e0e3;
    }

    &::after {
      right: -1px;
      background: #fff;
      border-right: 1px solid #e0e0e3;
    }

    &__list {
      padding: 0.5rem 0;
    }

    &__item {
      list-style-type: none;
    }

    &__link {
      display: block;
      padding: 1rem 1.5rem;
      transition: all 0.3s ease-in-out;
      position: relative;

      &:hover {
        background-color: rgba(#000000, .04);
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
    }

    &__link-box{
      display: flex;
      align-items: center;

      .show-content {
        width: 80%;
        margin-left: 5px;

        &__text {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        &__name {
          font-size: 1.4rem;
          font-weight: 500;
        }
      }
    }

    &__all {
      display: block;
      color: #4f3cc9;
      padding: 1rem 0;
      text-align: center;

      font-size: 1.6rem;
      border-radius: 0 0 1rem 1rem;
      overflow: hidden;
      background-color: #e4dfdf42;

      font-weight: 500;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      position: relative;

      &:hover {
        background-color: rgba(#000000, .04);
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
    }
  }
</style>
