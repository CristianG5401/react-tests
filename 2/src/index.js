import './main.scss'

// Libs
import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

// Components
import Toggle from './components/Toggle'
import LikeButton from './components/LikeButton'
import LoginControl from './components/conditional_rendering/LoginControl'
import Calculator from './components/lifting_state_up/Calculator'

ReactDOM.render(
  <Calculator />,
  document.getElementById('calculator')
)

/** +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ **/

ReactDOM.render(
  <LoginControl />,
  document.getElementById('login_control')
)

/** +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ **/

ReactDOM.render(
  <Toggle />,
  document.querySelector('#toggle')
)

/** +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ **/

const domContainer = document.querySelector('#like_button_container_jsx')
ReactDOM.render(<LikeButton />, domContainer)
