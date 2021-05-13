<template>
  <div>
    <li class="pending-order__item">
      <router-link
        class="pending-order__link"
        :to="'/' + nameAPI + '/' + data.id + '/' + edit"
      >
        <div class="info-order">
          <div class="info-order__user">
            <!-- <Avarta avarta={data.avarta} :name="nameUser" /> -->
            <Avarta avarta="" :name="nameUser" />

            <div class="info-order__detail">
              <span class="info-order__detail--date">
                <!-- { dateTime(data.created) } -->
                20-5-2021
              </span>

              <span class="info-order__detail--customer">
                <!-- { data.name }, mua { data.products.length } sản phẩm -->
                {{ nameUser }}, mua 10 sản phẩm
              </span>
            </div>
          </div>

          <div class="info-order__meny">{{ data.intoMeny }}</div>
        </div>
      </router-link>
    </li>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Avarta from '../../../Avarta'
import { EDIT, NAME_API } from '../../../../dataDefault'

export default {
  data() {
    return {
      nameUser: '',
      edit: EDIT,
      nameAPI: NAME_API.orders
    }
  },
  props: {
    data: {
      type: Object
    }
  },

  components: {
    Avarta
  },

  computed: {
    ...mapGetters([
      'getUser'
    ])
  },

  created () {
      console.log('mounted', this.data.userId);

    const user = this.getUser(this.data.userId)

  // console.log('mounasadted', user)
    this.nameUser = user.name
  }
}
</script>

<style lang="scss">

</style>
