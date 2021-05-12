import Users from '../Main/UsersPage/Users.vue'
import RootUsers from '../Main/UsersPage'
import RootProducts from '../Main/ProductsPage'
import RootOrders from '../Main/OrdersPage'
import DashBoard from '../Main/DashBoard/Page'
import Form from '../Main/OrdersPage/Form.vue'
import Creact from '../Main/UsersPage/Creact.vue'
import Edit from '../Main/UsersPage/Edit.vue'
import Products from '../Main/ProductsPage/Products.vue'
import CreactEditProduct from '../Main/ProductsPage/CreactEditProduct.vue'
import Orders from '../Main/OrdersPage/Orders.vue'
import { PATH_NAME_ROUTE } from '../../dataDefault'

const { users, products, orders, dashboard } = PATH_NAME_ROUTE

export const routes = [
  {
    path: '/',
    redirect: `/${dashboard.path}`,
  },
  {
    path: `/${dashboard.path}`,
    name: dashboard.name,
    component: DashBoard,
  },
  {
    path: `/${users.path}`,
    component: RootUsers,
    children: [
      {
        path: '',
        component: Users,
        name: users.name,
      },
      {
        path: users.children.created.path,
        component: Creact,
        name: users.children.created.name
      },
      {
        path: users.children.edit.path,
        component: Edit,
        name: users.children.edit.name
      },
    ]
  },

  {
    path: `/${products.path}`,
    component: RootProducts,
    children: [
      {
        path: '',
        name: products.name,
        component: Products,
      },
      {
        path: products.children.created.path,
        name: products.children.created.name,
        component: CreactEditProduct,
      },
      {
        path: products.children.edit.path,
        name: products.children.edit.name,
        component: CreactEditProduct,
      },
    ]
  },

  {
    path: `/${orders.path}`,
    component: RootOrders,
    children: [
      {
        path: '',
        name: orders.name,
        component: Orders,
      },
      {
        path: orders.children.edit.path,
        name: orders.children.edit.name,
        component: Form,
      },
      // {
      //   path: products.children.edit.path,
      //   name: products.children.edit.name,
      //   component: CreactEditProduct,
      // },
    ]
  }


]
