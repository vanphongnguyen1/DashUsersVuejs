<template >
 <div class="dashboard">
      <div class="dashboard__row">
        <div class="dashboard__box box-md-5 box-sm-12">
          <div class="dashboard__row">
            <p >{{this.$store.state.users.loading}}</p>
            <router-link class="box-half" to='/'>
              <RootPaper
                icon="far fa-dollar-sign"
                title="Monthly Revenue"
                :data="this.sumIntoMeny(isCancelled)"
              />
            </router-link>

            <router-link class="box-half" to='/'>
              <RootPaper
                icon="fas fa-shopping-cart"
                title="New Orders"
                :data="this.filterOrders(isPendding).length"
              />
            </router-link>
          </div>

          <!-- {
            dataPendingOrdersLength
            ? <PendingOrder data={dataPendingOrders}/>
            : ''
          } -->

          <PendingOrder :data="this.filterOrders(isPendding)"/>
        </div>


          <div class="dashboard__box box-md-7">
            <div class="dashboard__row">
              <div class="dashboard__box">
                <div class="box-big">
                  <router-link to='/' class="link-page">

                    <RootPaper
                      icon="fas fa-comment-alt-lines"
                      title="New Comments"
                    />
                  </router-link>

                  <!-- {
                    dataPendingCommentsLength
                      ? <ShowComments data={dataPendingComments}/>
                      : ''
                  } -->
                </div>
              </div>

              <div class="dashboard__box">
                <div class="box-big">
                  <router-link to='/' class="link-page">

                    <RootPaper
                      icon="fas fa-users-medical"
                      title="Customers"
                      :data="getListUser.length"
                    />
                  </router-link>

                  <!-- {
                    dataUsers.length
                      ? <ShowCustomers data={dataUsers}/>
                      : ''
                  } -->
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
</template>

<script>
import RootPaper from './RootPaper'
import PendingOrder from './PendingOrder'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isPendding: null,
      isCancelled: null,
    }
  },

  components: {
    RootPaper,
    PendingOrder
  },

  computed: {
    ...mapGetters([
      'filterOrders',
      'getListUser',
      'sumIntoMeny'
    ])
  },

  created() {
    this.$store.dispatch('fetchOrders')
    this.$store.dispatch('fetchUsers')

    this.$store.dispatch('fetchStatus')
    .then(data => {
      data.forEach(item => {
        if (item.name === 'pendding') {
          this.isPendding = item.id
        }
        if (item.name === 'cancelled') {
          this.isCancelled = item.id
        }
      })
    })
  },
}
</script>

<style lang="scss">
.dashboard {
  margin-top: 3rem;

  &__row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__box {
    width: calc(50% - 0.5rem);
  }

  .box-half {
    width: calc(50% - 0.5rem);
    display: block;
  }
  .box-big {
    width: 100%;
  }

  .link-page{
    display: block;
  }
}
</style>
