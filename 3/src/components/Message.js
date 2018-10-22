import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ match }) => (
  <h2>
    {'Mensaje ' + match.params.text}
  </h2>
)

Message.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  })
}

export default Message
