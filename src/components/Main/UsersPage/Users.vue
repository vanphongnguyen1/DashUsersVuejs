<template>
  <div class="users">
    <div v-if="isLoading !== 'success'">
      <Loading />
    </div>

    <BoxDeleteTable
      :activeClass="hasSelected ? 'activeBoxDelete' : ''"
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
    >
      <a slot="action" slot-scope="">Edit</a>
    </a-table>
  </div>
</template>

<script>
import Loading from '../../Loading'
import BoxDeleteTable from '../../BoxDeleteTable'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
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


export default {
  name: 'Users',

  created () {
    this.$store.dispatch('fetchUsers')
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
    start() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.selectedRowKeys = [];
      }, 1000);
    },

    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys;
    },
  },

  components: {
    Loading,
    BoxDeleteTable
  }
};
</script>

<style lang="scss" scope>
  .users {
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
    z-index: 3;
  }
</style>

<style lang="scss">
  .activeBoxDelete {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
</style>
