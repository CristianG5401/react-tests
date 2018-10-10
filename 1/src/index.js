import './main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

/* ************************************* Component using JSX ************************************** */
class LikeButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = { liked: false }
  }

  render () {
    if (this.state.liked) {
      return 'You liked this.'
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    )
  }
}

const domContainer = document.querySelector('#like_button_container_jsx')
ReactDOM.render(<LikeButton />, domContainer)
/* *************************************************************************** */

/* ************************************* Component without JSX ************************************** */

const e = React.createElement

class LikeButtonNoJsx extends React.Component {
  constructor (props) {
    super(props)
    this.state = { liked: false }
  }

  render () {
    if (this.state.liked) {
      return 'You liked this 2.'
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like 2'
    )
  }
}

const domContainer2 = document.querySelector('#like_button_container')
ReactDOM.render(e(LikeButtonNoJsx), domContainer2)
