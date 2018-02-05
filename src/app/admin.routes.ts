import * as angular from 'angular'

angular.module('admin').config(($stateProvider, $urlServiceProvider, $locationProvider) => {
  $urlServiceProvider.rules.otherwise({ state: 'admin.todo-new' })
  $locationProvider.html5Mode(true)

  $stateProvider.state('admin', {
    views: {
      '@': {
        template: `
          <div class="app-container">
            <div class="sidenav-container">
              <admin-sidenav></admin-sidenav>
            </div>
            <div class="content">
              <div ui-view="content"></div>
            </div>
          </div>
        `,
      },
    },
  })

  $stateProvider.state('admin.todo-new', {
    url: '/new',
    views: {
      content: {
        component: 'todoNew',
      },
    },
  })

  $stateProvider.state('admin.todo-all', {
    url: '/all',
    resolve: {
      list: ($ngRedux) => {
        const state = $ngRedux.getState()
        return state.list
      },
      filter: () => 'all',
    },
    views: {
      content: {
        component: 'todoList',
      },
    },
  })

  $stateProvider.state('admin.todo-active', {
    url: '/active',
    resolve: {
      list: ($ngRedux) => {
        const state = $ngRedux.getState()
        return state.list.filter((item) => item.status === 'active')
      },
      filter: () => 'active',
    },
    views: {
      content: {
        component: 'todoList',
      },
    },
  })

  $stateProvider.state('admin.todo-complete', {
    url: '/complete',
    resolve: {
      list: ($ngRedux) => {
        const state = $ngRedux.getState()
        return state.list.filter((item) => item.status === 'complete')
      },
      filter: () => 'complete',
    },
    views: {
      content: {
        component: 'todoList',
      },
    },
  })
})
