import React from 'react'
import './App.css'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      options: [
        'Left Side',
        'Right Side'
      ]
    }

    this.handleRemoveAll = this.handleRemoveAll.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  // Why they need redux <Options/> cannot access app.state.options to remove all items.
  // Need to pass this function to <Options/> via props can execute it onClick attribute.
  handleRemoveAll () {
    this.setState({
      options: []
    })
  }

  handlePick () {
    const randomPosition = Math.floor(Math.random() * this.state.options.length)
    const pickedOption = this.state.options[randomPosition]
    alert(pickedOption)
  }

  handleAddOption (newOption) {
    // Validation <AddOption/> form here
    if (!newOption) {
      return 'Enter valid value to add item.'
    } else if (this.state.options.indexOf(newOption) > -1) {
      return 'This option already exists.'
    }

    this.state.options.push(newOption)
    this.setState({
      options: this.state.options
    })
  }

  render () {
    const appName = 'Indecision'
    const appDesc = 'Put your life in the hands of a computer.'

    return (
      <div className="App">
        <Header title={appName} subtitle={appDesc} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleRemoveAll={this.handleRemoveAll}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
      </div>
    )
  }
}
