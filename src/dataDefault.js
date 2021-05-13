export const PRODUCTEDIT = 'product-edit'
export const PRODUCTCREATED = 'product-created'
export const EDIT = 'edit'
export const CREAT = 'creat'

export const NAME_API = {
  dashboard: 'dashboard',
  products: 'products',
  users: 'users',
  orders: 'orders',
  slider: 'slider'
}

export const PATH_NAME_ROUTE = {
  dashboard: {
    path: NAME_API.dashboard,
    name: NAME_API.dashboard
  },

  products: {
    path: NAME_API.products,
    name: NAME_API.products,

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
    path: NAME_API.users,
    name: NAME_API.users,

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
    path: NAME_API.orders,
    name: NAME_API.orders,

    children: {
      edit: {
        path: ':id/edit',
        name: 'order-edit'
      }
    }
  },
  slider: 'slider'
}
