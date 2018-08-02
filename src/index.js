import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './assets/index.css'

class ReactModule extends Component {
  render () {
    const {onClick} = this.props

    return <h1 onClick={onClick}>{this.props.children}</h1>
  }
}

ReactModule.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ReactModule
