export const PRODUCTEDIT = 'product-edit'
export const PRODUCTCREATED = 'product-created'

export const PATH_NAME_ROUTE = {
  dashboard: {
    path: 'dashboard',
    name: 'dashboard'
  },

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
      },
      edit: {
        path: ':id/edit',
        name: 'edit-user',
      },
    }
  },

  orders: {
    path: 'orders',
    name: 'orders',

    children: {
      edit: {
        path: ':id/edit',
        name: 'order-edit'
      }
    }
  },
  slide: 'slide'
}
