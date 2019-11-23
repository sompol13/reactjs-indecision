import React, { Component } from 'react'

export default class Option extends Component {
  render () {
    return (
      <div className="option">
        <p className="option__text">{this.props.count}. {this.props.text}</p>
      </div>
    )
  }
}
