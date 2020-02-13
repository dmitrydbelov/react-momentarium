import React, { Component } from 'react'

import ExampleComponent from 'react-momentarium'
import moment from "moment"
import 'moment/locale/ru';
moment.locale("ru");


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
        Locale:{moment.locale()}
        <ExampleComponent moment={this.state.m} onChange={(m) => { this.setState({ m: m }) }} onSave={() => { }} />
      </div>
    )
  }
}
