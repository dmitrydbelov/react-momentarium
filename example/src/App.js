import React, { Component } from 'react'

import ExampleComponent from 'react-momentarium'

import moment from 'moment'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      m: moment()
    }
  }
  render() {
    return (
      <div style={{ margin: "auto" }}>
        <ExampleComponent moment={this.state.m} onChange={() => { }} />
      </div>
    )
  }
}
