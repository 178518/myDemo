import React from 'react'
import { render } from 'react-dom'
import ReactModule from '../../src'

const onClick = () => {
  console.log('AA')
}

const App = () => (
  <ReactModule onClick={onClick}>
    myDemo
  </ReactModule>
)
render(<App/>, document.getElementById('container'))
