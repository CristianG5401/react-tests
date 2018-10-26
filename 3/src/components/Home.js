import React from 'react'
import axios from 'axios'
export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    axios.get(`https://localhost:1112/reports`)
      .then(res => {
        console.log('test data', res)
      })
  }

  render () {
    return (
      <h2>
        {'Home'}
      </h2>
    )
  }
}
