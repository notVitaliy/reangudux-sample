import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Component } from 'react'

import { addTodo } from '../store/list'

export class TodoNew extends Component<{
  addTodo: Function
}> {
  state: { name: string }

  static propTypes = {
    addTodo: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = { name: '' }
  }

  render() {
    return (
      <div>
        <div>This is react!!!</div>
        <input type="text" value={this.state.name} onChange={this.updateName} />
        <button onClick={this.add}>Save</button>
      </div>
    )
  }

  updateName = (event) => {
    const { value: name } = event.target
    this.setState({ name })
  }

  add = () => {
    this.props.addTodo(this.state.name)
    this.setState({ name: '' })
  }

  static methods() {
    return {
      addTodo,
    }
  }
}
