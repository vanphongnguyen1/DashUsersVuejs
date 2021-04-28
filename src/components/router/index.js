import Users from '../Main/UsersPage/Users.vue'
import Creact from '../Main/UsersPage/Creact.vue'
import Products from '../Main/ProductsPage/Products.vue'
import CreactEditProduct from '../Main/ProductsPage/CreactEditProduct.vue'

export const routes = [
  {
    path: '/',
    redirect: '/users',
    component: Users,
    children: [
      {
        path: 'users',
        component: Users,
        name: 'users',
      }
    ]
  },
  {
    path: '/users/created',
    component: Creact,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/products/created',
    component: CreactEditProduct,
  }
]
