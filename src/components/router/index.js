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
    name: 'products',
    component: Products,
    // children: [
    //   {
    //     path: 'created',
    //     name: 'created',
    //     component: CreactEditProduct,
    //   }
    // ]
  },
  {
    path: '/products-edit/:id',
    name: 'product-edit',
    component: CreactEditProduct,
  },
  {
    path: '/products-created',
    name: 'product-created',
    component: CreactEditProduct,
  },
]
