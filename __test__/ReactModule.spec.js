/* eslint-disable no-undef */

import React from 'react'
import ReactModule from '../src/index'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<ReactModule>myDemo</ReactModule>)

  return {
    wrapper,
  }
}

describe('ReactModule', () => {
  const {wrapper} = setup()

  // 通过 input 是否存在来判断 Todo组件是否被渲染
  it('ReactModule should  render', () => {
    // .find(selector) 是 Enzyme shallow Rendering 提供的语法, 用于查找节点
    // 详细用法见 Enzyme 文档 http://airbnb.io/enzyme/docs/api/shallow.html
    expect(wrapper.find('h1').exists())
  })
})
