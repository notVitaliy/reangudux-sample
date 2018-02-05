import { finTodo, delTodo } from '../store/list'
import { IComponentOptions } from 'angular'

class ListController {
  public list: any[]
  public filter: string

  constructor($ngRedux, $scope) {
    const unsubscribe = $ngRedux.connect(this.mapStateToThis, { finTodo, delTodo })($scope.$ctrl)
    $scope.$on('$destroy', unsubscribe)
  }

  mapStateToThis = (state) => {
    const list =
      this.filter === 'all' ? state.list : state.list.filter((item) => item.status === this.filter)
    return {
      list,
    }
  }
}

export const todoList: IComponentOptions = {
  bindings: {
    list: '<',
    filter: '<',
  },
  controller: ListController,
  template: `<div>
    <span>This is an angular list.</span>
    <div ng-repeat="item in $ctrl.list">
      <todo-list-item item="item"></todo-list-item>
    </div>
  </div>`,
}
