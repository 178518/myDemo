import React, { Component } from 'react'
import './assets/index.css'

class ReactModule extends Component {
  render () {
    return <h1>{this.props.children}</h1>
  }
}

export default ReactModule
