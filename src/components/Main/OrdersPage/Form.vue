<template>
  <div class="form-edit">
    <a-form
      :form="form"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 16 }"
      @submit="handleSubmit"
    >
      <div class="info-custommer">
        <h3 class="heading">Thông tin khách hàng</h3>

        <a-form-item
          label="Name"
        >
          <a-input
            v-decorator="[
              'name',
              {
                initialValue: dataUser.name,
                rules: [{ required: true, message: 'Please input your name' }]
              },
            ]"
            placeholder="Please input your name"
          />
        </a-form-item>

        <a-form-item
          label="Number Phone"
        >
          <a-input-number
            v-decorator="[
              'phone',
              {
                initialValue: dataUser.phone,
                rules: [{ required: true, message: 'Please input your number phone' }]
              },
            ]"
            placeholder="Please input your name"
          />
        </a-form-item>

        <a-form-item
          label="Address"
        >
          <a-input
            v-decorator="[
              'address',
              {
                initialValue: dataUser.address,
                rules: [{ required: true, message: 'Please input your address' }]
              },
            ]"
            placeholder="Please input your name"
          />
        </a-form-item>

        <a-form-item label="Status">
          <a-select
            v-decorator="[
              'statusId',
              {
                initialValue: dataOrder.statusId,
                rules: [{ required: true, message: 'Please select your Status!' }]
              },
            ]"
            placeholder="Select a option and change input text above"
          >
            <a-select-option
              :value="item.id"
              v-for="item in getDataStatus"
              :key="item.id"
            >
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="Transport">
          <a-select
            v-decorator="[
              'transportId',
              {
                initialValue: dataOrder.transportId,
                rules: [{ required: true, message: 'Please select your Transport!' }]
              },
            ]"
            placeholder="Select a option and change input text above"
            @change="handleSelectChangeTransport"
          >
            <a-select-option
              :value="item.id"
              v-for="item in getDataTransport"
              :key="item.id"
            >
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="Payment">
          <a-select
            v-decorator="[
              'paymentId',
              {
                initialValue: dataOrder.paymentId,
                rules: [{ required: true, message: 'Please select your payment!' }]
              },
            ]"
            placeholder="Select a option and change input text above"
            @change="handleSelectChangePayment"
          >
            <a-select-option
              :value="item.id"
              v-for="item in getDataPayment"
              :key="item.id"
            >
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </div>

      <div class="info-products">
        <h3 class="heading">Thông tin sản phẩm</h3>

        <ul class="info-products__item title__list">
          <li class="title__width title__text">Name</li>
          <li class="title__width title__text">Price</li>

          <li class="title__width title__text">Count</li>

          <li class="title__width title__text">Total Price</li>

          <li class="title__width title__text">Action</li>
        </ul>

        <ItemProductOrder
          @handleOnchangeCount="handleOnchangeCount"
          v-for="item in dataProducts"
          :key="item.id"
          :product="item"
          @handleDeleteProduct="handleDeleteProduct"
        />
      </div>

      <div class="info-order">
        <h3 class="heading">Thông tin đơn hàng</h3>

        <ul class="info-order__list">
          <ItemInfoOrder
            title="Total Count"
            :data="dataOrder.totalCount"
          />

          <ItemInfoOrder
            title="Total Price"
            :data="dataOrder.totalPrice"
          />

          <ItemInfoOrder
            title="Transport"
            :data="dataOrder.priceTrasport"
          />

          <ItemInfoOrder
            title="payment"
            :data="dataOrder.namePayment"
          />

          <ItemInfoOrder
            title="intoMeny"
            :data="dataOrder.intoMeny"
          />
        </ul>
      </div>

      <div>
        <a-button type="primary" block class="btn--save" @click="handleSubmit">
          Save
        </a-button>
      </div>
    </a-form>
  </div>
</template>

<script>
import ItemProductOrder from './ItemProductOrder'
import ItemInfoOrder from './ItemInfoOrder'
import { PUT_API } from '../../../store/usersService'

const key = 'updatable'

export default {
  data() {
    return {
      form: this.$form.createForm(this, { name: 'dynamic_rule' }),
      dataUser: {},
      dataProducts: [],
      dataOrder: {},
    }
  },

  components: {
    ItemProductOrder,
    ItemInfoOrder
  },

  computed: {
    getDataStatus () {
      return this.$store.state.status.list
    },
    getDataTransport () {
      return this.$store.state.transports.list
    },
    getDataPayment () {
      return this.$store.state.payments.list
    },

    getPath () {
      return this.$route.params.id
    }
  },

  methods: {
    handleSelectChangeTransport(value) {
      const newData = this.getDataTransport.find(item => item.id === value)
      this.dataOrder.priceTrasport = newData.price
      this.dataOrder.intoMeny = this.dataOrder.intoMeny + newData.price
    },

    handleSelectChangePayment(value) {
      const newData = this.getDataPayment.find(item => item.id === value)
      this.dataOrder.namePayment = newData.name
    },

    handleSubmit(e) {
      e.preventDefault()

      this.form.validateFields(async (err, values) => {
        if (err) {
          this.error('Hãy điền đầy đủ thông tin form !')
          return
        }

        if (!err) {
          console.log('aaaa', values);
          console.log('121212', this.dataProducts);
          console.log('121212', this.dataOrder);
          this.dataProducts.forEach(item => {
            PUT_API(`productDetailOrders/${item.id}`, {
              count: item.count,
              totalPrice: item.totalPrice,
              productId: item.productId
            })

            PUT_API(`users/${this.dataOrder.userId}`, {
              ...this.dataUser,
              name: values.name,
              address: values.address,
              phone: values.phone,
            })

            PUT_API(`orders/${this.dataOrder.id}`, {
              ...this.dataOrder,
              paymentId: values.paymentId,
              statusId: values.statusId,
              phostatusIdne: values.statusId,
            })
          })

          this.openMessage('Edit Success !')
        }
      })
    },

    handleOnchangeCount(data) {
      let totalCount = 0
      let totalPrice = 0

      this.dataProducts.map(item => {
        if (item.id === data.id) {
          item.count = data.value
          item.totalPrice = data.value * item.price
        }

        totalCount += item.count
        totalPrice += item.totalPrice

        return item
      })

      this.dataOrder.totalCount = totalCount
      this.dataOrder.totalPrice = totalPrice

      this.dataOrder.intoMeny = totalPrice + this.dataOrder.priceTrasport
    },

    handleDeleteProduct(id) {
      const filterProduct = this.dataProducts.filter(item => item.id === id)
      this.dataProducts = filterProduct
    },

    openMessage (text) {
      this.$message.loading({ content: 'Loading...', key })

      setTimeout(() => {
        this.$message.success({ content: text, key, duration: 2 })
      }, 1000);
    },

    error (text) {
      this.$message.error(text)
    },
  },

  created() {
    this.$store.dispatch('fetchStatus')
    this.$store.dispatch('fetchTransports')
    this.$store.dispatch('fetchPayments')

    this.$store.dispatch('fetchOrder', this.getPath)
    .then(data => {
      this.dataOrder = data

      this.$store.dispatch('fetchUser', data.userId)
      .then(data => {
        this.dataUser = data
      })

      this.$store.dispatch('fetchSumProductOrder', data.id)
      .then(data => {

        data.forEach(item => {
          this.$store.dispatch('fetchProductDetailOrder', item.productDetailOrderId)
          .then(res => {

            this.$store.dispatch('fetchProduct', res.productId)
            .then(data => {
              this.dataProducts.push({
                ...data,
                ...res
              })
            })
          })
        })
      })
    })
  },
}
</script>

<style lang="scss">
  .heading {
    font-size: 1.8rem;
    font-weight: 700;
    padding: 0.5rem 0;
    margin-bottom: 1.5rem;
  }

  .form-edit {
    width: 50%;
    margin: 0 auto;
  }

  .info-custommer {
    margin-bottom: 1rem;
  }

  .title {
    &__list {
      padding: 0.5rem 0;
    }

    &__width {
      width: 21%;
      padding: 0 1rem;

      &:last-child {
        width: 15%;
      }
    }

    &__text {
      list-style: none;
      font-size: 1.6rem;
      font-weight: 500;
    }
  }

  .info-order {
    &__item {
      list-style: none;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;

      &--name {
        font-size: 1.6rem;
        font-weight: 500;
      }
    }
  }

  .btn--save.btn--save {
    height: 4rem;
    font-weight: 500;
    font-size: 1.6rem;
    margin-top: 2rem;
  }
</style>
