/* eslint-disable no-undef,comma-dangle */

import React from 'react'
import ReactModule from '../src/index'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

const setup = () => {
  const props = {
    onClick: jest.fn(),
  }

  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<ReactModule {...props}>myDemo</ReactModule>)

  return {
    props,
    wrapper,
  }
}

describe('ReactModule', () => {
  const {props, wrapper} = setup()

  // 通过 input 是否存在来判断 Todo组件是否被渲染
  it('ReactModule should  render', () => {
    // .find(selector) 是 Enzyme shallow Rendering 提供的语法, 用于查找节点
    // 详细用法见 Enzyme 文档 http://airbnb.io/enzyme/docs/api/shallow.html
    expect(wrapper.find('h1').exists())
  })

  // 当点击 单选按钮，onClick 方法应该被调用
  it('click, onClick called', () => {
    const mockEvent = {
      key: 'Click',
    }

    wrapper.find('h1').simulate('click', mockEvent)
    expect(props.onClick).toBeCalled()
  })
})
