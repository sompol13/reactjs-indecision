import React, { Component } from 'react'
import Option from './Option'

export default class Options extends Component {

  render () {
    console.log(this.props.options)
    return (
      <div>
        <div className="widget-header">
          <h3 className="widget-header__title">Your Options</h3>
          <button
            className="button button--link"
            onClick={this.props.handleRemoveAll}
          >
            Remove All
          </button>
        </div>

        {this.props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
        {
          this.props.options.map((option, index) => (
            <Option
              key={option}
              text={option}
              count={index + 1}
              handleRemoveAll={this.props.handleRemoveAll}
            />
          ))
        }
      </div>
    )
  }
}
