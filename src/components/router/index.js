import Users from '../Main/UsersPage/Users.vue'
import RootUsers from '../Main/UsersPage'
import RootProducts from '../Main/ProductsPage'
import Creact from '../Main/UsersPage/Creact.vue'
import Products from '../Main/ProductsPage/Products.vue'
import CreactEditProduct from '../Main/ProductsPage/CreactEditProduct.vue'
import { PATH_NAME_ROUTE } from '../../dataDefault'

const { users, products } = PATH_NAME_ROUTE

export const routes = [
  // {
  //   path: '/',
  //   redirect: '/users',
  //   component: RooteUsers,
  // },
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
  }
]
