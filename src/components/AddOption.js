import React, { Component } from 'react'

export default class AddOption extends Component {

  constructor (props) {
    super(props)
    this.state = {
      value: '',
      error: undefined
    }

    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  handleAddOption (e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    this.setState({
      value: '',
      error: error
    })
  }

  render () {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" value={this.state.value} onChange={this.handleChange} />
          <button className="button" type="submit">Add Option</button>
        </form>
      </div>
    )
  }
}
