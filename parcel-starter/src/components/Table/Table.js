// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types' // ES

// Components
import Header from './Header'
import Body from './Body'

class Table extends Component {
  render () {
    const { characterData } = this.props

    return (
      <table>
        <Header />
        <Body characterData={characterData}/>
      </table>
    )
  }
}

Table.propTypes = {
  characterData: PropTypes.array.isRequired
}

export default Table
