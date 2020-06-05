# react-momentarium

> React datetime picker powered by momentjs

[![NPM](https://img.shields.io/npm/v/react-momentarium.svg)](https://www.npmjs.com/package/react-momentarium) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-momentarium
```

## Usage

```jsx
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
        <ExampleComponent moment={this.state.m} onChange={(m) => { this.setState({ m: m }) }} onSave={() => { }} >...</ExampleComponent>
      </div>
    )
  }
}
```

## License

MIT © [dmitrydbelov](https://github.com/dmitrydbelov)
