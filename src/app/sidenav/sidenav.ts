import * as angular from 'angular'

angular.module('admin').component('adminSidenav', {
  controller: function() {
    this.links = [
      { state: 'admin.todo-new', name: 'New Todo (React)' },
      { state: 'admin.todo-all', name: 'All (Angular)' },
      { state: 'admin.todo-active', name: 'Active (Angular)' },
      { state: 'admin.todo-complete', name: 'Complete (Angular)' },
    ]
  },
  template: `
    <div>SIDE NAV (ui-router)</div>
    <ul>
      <li ng-repeat="link in $ctrl.links">
        <a ui-sref="{{ link.state }}">{{ link.name }}</a>
      </li>
    </ul>
  `,
})
