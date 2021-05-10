<template>
  <a-table
    :rowSelection="{
      selectedRowKeys: selectedRowKeys,
      onChange: onSelectChange,
    }"
    :columns="columns"
    :data-source="newData"
    :scroll="{ x: 1600 }"
    rowKey="id"
    :customRow="customRow"
  >
    <p slot="action" slot-scope="text, record">
      <a-button type="primary" @click="(e) => handleEditOrder(e, record)">
        Edit
      </a-button>
    </p>
  </a-table>
</template>

<script>
import { mapGetters } from 'vuex'
import { PATH_NAME_ROUTE } from '../../../dataDefault'

const { name } = PATH_NAME_ROUTE.orders.children.edit
const columns = [
  {
    title: 'UserName',
    width: 200,
    dataIndex: 'name',
    fixed: 'left'
  },
  {
    title: 'NumberPhone',
    width: 200,
    dataIndex: 'phone',
  },
  {
    title: 'Address',
    width: 500,
    dataIndex: 'address',
  },
  {
    title: 'Email',
    width: 300,
    dataIndex: 'email',
  },
  {
    title: 'totalCount',
    width: 150,
    dataIndex: 'totalCount',
  },
  {
    title: 'totalPrice',
    dataIndex: 'totalPrice',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    scopedSlots: { customRender: 'action' },
  },
]

export default {
  data() {
    return {
      pathName: name,
      columns,
      selectedRows: [],
      selectedRowKeys: []
    }
  },

  props: {
    id: {
      type: Number,
      default: 0
    }
  },

  computed: {
    ...mapGetters([
      'filterOrders',
      'getListUser'
    ]),

    newData () {
      const dataOrders = this.filterOrders(this.id)

      return dataOrders.map(order => {
        const user = this.getListUser.find(item => item.id === order.userId)

        return {
          ...user,
          ...order
        }
      })
    }
  },

  methods: {
    handleEditOrder(e, record) {
      e.stopPropagation()

      this.$router.push({
        name: this.pathName,
        params: {id : record.id}
      })
    },

    customRow(record) {
      return {
        on: {
          click: () => {
            const currentIndex = this.selectedRows.findIndex(
              (item) => item.id === record.id
            )

            if (currentIndex > -1) {
              this.selectedRows.splice(currentIndex, 1)
              this.selectedRowKeys.splice(currentIndex, 1)
              this.selectedRows = [...this.selectedRows]
              this.selectedRowKeys = [...this.selectedRowKeys]

            } else {
              this.selectedRows = [...this.selectedRows, record]
              this.selectedRowKeys = [...this.selectedRowKeys, record.id]
            }
          },
        }
      }
    },

    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys;
      this.selectedRows = selectedRows;
    },
  }
}
</script>
