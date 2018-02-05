import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Component } from 'react'

import { finTodo, delTodo } from '../store/list'

export class TodoListItem extends Component<{
  item: {
    id: number
    name: string
    status: 'active' | 'complete'
  }
  finTodo: Function
  delTodo: Function
}> {
  state: { name: string }

  static propTypes = {
    item: PropTypes.object,
    finTodo: PropTypes.func,
    delTodo: PropTypes.func,
  }

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <span>{this.props.item.name}</span>
        <button onClick={this.fin}>Complete</button>
        <button onClick={this.del}>Remove</button>
        <span>(This is a React list item)</span>
      </div>
    )
  }

  fin = () => {
    this.props.finTodo(this.props.item.id)
  }

  del = () => {
    this.props.delTodo(this.props.item.id)
  }

  static methods() {
    return {
      finTodo,
      delTodo,
    }
  }
}
