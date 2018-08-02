import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './assets/index.css'

class ReactModule extends Component {
  render () {
    const {onClick, onClick2} = this.props

    return <div>
      <h1 onClick={onClick}>{this.props.children}</h1>
      <h2 onClick={onClick2}>demo</h2>
    </div>
  }
}

ReactModule.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ReactModule
