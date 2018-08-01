import React from 'react'
import { render } from 'react-dom'
import ReactModule from '../../src'

const App = () => (
  <ReactModule>
    myDemo
  </ReactModule>
)
render(<App />, document.getElementById('container'))
