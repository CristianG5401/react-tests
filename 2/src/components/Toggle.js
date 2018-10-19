import React from 'react'

export default class Toggle extends React.Component {
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
    // setState cambia el estado de forma asincronica, por lo q si requiere saber el valor actual del
    // 'state' se envia una funcion como parametro que recibe el state, entonces agrego 'estaActivado'
    // entre corchetes para deconstruir el objeto state y sacar directamente la variable
    this.setState(({ estaActivado }) => ({
      estaActivado: !estaActivado
    }))
  }

  render () {
    return (
      // This binding is necessary to make `this` work in the callback
      // despues de enviar el contexto, tambien puedo enviar cualquier variable desde el evento
      <button onClick={this.handleClick.bind(this, 'perro')}>
        {this.state.estaActivado ? 'Encendido' : 'Apagado'}
      </button>
    )
  }
}
