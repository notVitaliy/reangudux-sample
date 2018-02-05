import * as angular from 'angular'
import { reangudux } from 'reangudux'

import { TodoNew } from './new'
import { todoList, TodoListItem } from './list'

angular.module('admin', ['ui.router', 'ngRedux']).run(($trace) => {
  $trace.enable('TRANSITION')
})

angular.module('admin').component('todoList', todoList)
angular.module('admin').component('todoListItem', reangudux(TodoListItem, ['item']))
angular.module('admin').component('todoNew', reangudux(TodoNew))
