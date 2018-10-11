import './main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

class Toggle extends React.Component {
  constructor (props) {
    super(props)
    this.state = { estaActivado: true }
    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this)
  }

  /**
   * Esta funcion se encarga de manejar el evento onClick
   *
   * @param {*} variableExtra Esta variable contiene cualquier cosa que se envie en el evento ej: si es un boton de eliminar
   * puedo enviar el id de la fila que quiero eliminar
   * @param {*} e Contiene informacion del evento
   * @memberof Toggle
   */
  handleClick (variableExtra, e) {
    console.log('variable Extra', variableExtra)

    this.setState((state) => ({
      estaActivado: !state.estaActivado
    }))
  }

  render () {
    return (
      <button onClick={this.handleClick.bind(this, 'perro')}>
        {this.state.estaActivado ? 'Encendido' : 'Apagado'}
      </button>
    )
  }
}

ReactDOM.render(
  <Toggle />,
  document.querySelector('#toggle')
)

/** +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ **/

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
