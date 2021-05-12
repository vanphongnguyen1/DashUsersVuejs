<template>
  <div class="users">
    <div v-if="isLoading !== 'success'">
      <Loading />
    </div>

    <div class="box-create">
      <router-link :to="{name: pathName}">
        <BtnCreate />
      </router-link>
    </div>

    <BoxDeleteTable
      :activeClass="hasSelected ? 'activeBoxDelete' : ''"
      :handleDeleteUser="e => handleDeleteUser(e, selectedRowKeys)"
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

      <template slot="action" slot-scope="text, record">
        <div class="box-btn">
          <BtnEdit />

          <BtnDelete
            :handleDeleteUser="e => handleDeleteUser(e, [record.id])"
          />
        </div>
      </template>
    </a-table>

    <Edit />
  </div>
</template>

<script>
import Loading from '../../Loading'
import BoxDeleteTable from '../../BoxDeleteTable'
import BtnCreate from '../../Btn/BtnCreate'
import Edit from './Edit'
import BtnDelete from '../../Btn/BtnDelete'
import BtnEdit from '../../Btn/BtnEdit'
import { mapActions } from 'vuex'
import { DELETE_API } from '../../../store/usersService'
import { PATH_NAME_ROUTE } from '../../../dataDefault'

const { name } = PATH_NAME_ROUTE.users.children.created

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
    scopedSlots: { customRender: 'action' },
    width: '25rem',
    align: 'center'
  }
];

const key = 'updatable'

export default {
  name: 'users',

  data() {
    return {
      pathName: name,
      columns,
      selectedRowKeys: [],
      loading: false,
    }
  },

  components: {
    Loading,
    BoxDeleteTable,
    BtnCreate,
    Edit,
    BtnDelete,
    BtnEdit
  },

  created () {
    this.$store.dispatch('fetchUsers')
    this.$store.dispatch('fetchGenders')
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

    async handleDeleteUser (e, data) {
      e.stopPropagation()

      data.forEach(id => {
        DELETE_API(`users/${id}`)
          .catch(rej => {
            this.error(rej.message)
          })
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
          click: () => {
            this.$store.commit('setEditUser', record)
            this.selectedRowKeys = []
          },
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
  .users {
    position: relative;
  }

  .box-create {
    margin: 1rem 0;
    padding: 0.7rem 0;
  }

  .box-btn {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
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
