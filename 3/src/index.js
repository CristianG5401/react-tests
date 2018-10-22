import '@babel/polyfill'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

// Libs
import React from 'react'
import ReactDOM from 'react-dom'

// Components
import App from './components/App/App'

ReactDOM.render(
  <App />,
  document.getElementById('main')
)
