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
    />
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
];


export default {
  name: 'Users',

  created () {
    this.$store.dispatch('fetchUsers')
  },

  data() {
    return {
      columns,
      selectedRowKeys: [], // Check here to configure the default column
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
      // ajax request after empty completing
      setTimeout(() => {
        this.loading = false;
        this.selectedRowKeys = [];
      }, 1000);
    },

    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
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
