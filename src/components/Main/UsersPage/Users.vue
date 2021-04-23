<template>
  <div class="users">
    <div v-if="isLoading !== 'success'">
      <Loading />
    </div>

    <div class="box-btn">
      <router-link to="/users/created">
        <Create />
      </router-link>
    </div>

    <BoxDeleteTable
      :activeClass="hasSelected ? 'activeBoxDelete' : ''"
      :handleDeleteUser="handleDeleteUser"
    >
      <span slot="length">
        {{ selectedRowKeys.length }}
      </span>
    </BoxDeleteTable>

    <a-table
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange
      }"
      :columns="columns"
      :data-source="getData"
      rowKey="id"
      :customRow="customRow"
    >
      <a slot="action" slot-scope="">Edit</a>
    </a-table>

    <Edit />
  </div>
</template>

<script>
import Loading from '../../Loading'
import BoxDeleteTable from '../../BoxDeleteTable'
import Create from '../../Btn/Create'
import Edit from './Edit'
// import { DELETE_API } from '../../API'
import { mapActions } from 'vuex'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Number Phone',
    dataIndex: 'phone',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Gender',
    dataIndex: 'gendersID',
  },
  {
    title: 'Roles',
    dataIndex: 'rolesID',
  },
  {
    title: 'Action',
    dataIndex: '',
    scopedSlots: { customRender: 'action' }
  }
];

const key = 'updatable'

export default {
  name: 'Users',

  created () {
    this.$store.dispatch('fetchUsers')
    this.$store.dispatch('fetchMale')
    this.$store.dispatch('fetchGenders')
  },

  data() {
    return {
      columns,
      selectedRowKeys: [],
      loading: false,
    };
  },

  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },

    getData () {
      return this.$store.state.users.listUsers
    },

    isLoading () {
      return this.$store.state.users.loading
    },
  },

  methods: {
    ...mapActions(['deleteUser']),
    start() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.selectedRowKeys = [];
      }, 1000);
    },

    error (text) {
      this.$message.error(text);
    },

    openMessage (text) {
      this.$message.loading({ content: 'Loading...', key })

      setTimeout(() => {
        this.$message.success({ content: text, key, duration: 2 })
      }, 1000);
    },

    async handleDeleteUser () {
      this.selectedRowKeys.forEach(id => {
        // DELETE_API(`users/${id}`)
        // this.$store.commit('deleteUser', id)
        this.deleteUser(id)
          .catch(rej => {
            this.error(rej.message)
          })

        return
      })

      this.openMessage('Delete Success !')
      this.selectedRowKeys = []
      await this.$store.dispatch('fetchUsers')
    },

    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys;
    },

    customRow (record) {
      return {
        on: {
          click: () => this.$store.commit('setEditUser', record)
        }
      };
    }
  },

  components: {
    Loading,
    BoxDeleteTable,
    Create,
    Edit
  }
};
</script>

<style lang="scss" scope>
  .users {
    position: relative;
    // z-index: 3;
  }

  .box-btn {
    margin: 2rem 0;
  }

  .ant-table-tbody > tr > td {
    cursor: pointer;
  }
</style>

<style lang="scss">
  .activeBoxDelete {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
</style>
