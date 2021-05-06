export const PRODUCTEDIT = 'product-edit'
export const PRODUCTCREATED = 'product-created'

export const PATH_NAME_ROUTE = {
  dashbroad: 'dashbroad',

  products: {
    path: 'products',
    name: 'products',

    children: {
      created: {
        path: 'created',
        name: 'product-created',
      },
      edit: {
        path: ':id/edit',
        name: 'product-edit'
      }
    }
  },

  users: {
    path: 'users',
    name: 'users',

    children: {
      created: {
        path: 'created',
        name: 'creact-user',
      }
    }
  },

  orders: {
    path: 'orders',
    name: 'orders',

    children: {
      created: {
        path: 'created',
        name: 'order-created',
      },
      edit: {
        path: ':id/edit',
        name: 'order-edit'
      }
    }
  },
  slide: 'slide'
}
