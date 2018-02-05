import * as angular from 'angular'
import rootReducer from './store/reducers'
import thunk from 'redux-thunk'

angular.module('admin').config(($ngReduxProvider) => {
  $ngReduxProvider.createStoreWith(rootReducer, [thunk])
})
