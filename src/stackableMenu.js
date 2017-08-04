import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu stackable fluid widths={3}>
        <Menu.Item
          name='thoughts'
          active={activeItem === 'thoughts'}
          onClick={this.handleItemClick}
        >
          musings
        </Menu.Item>

        <Menu.Item
          name='gallery'
          active={activeItem === 'gallery'}
          onClick={this.handleItemClick}
        >
          gallery
        </Menu.Item>

        <Menu.Item
          name='connect'
          active={activeItem === 'connect'}
          onClick={this.handleItemClick}
        >
          connect
        </Menu.Item>
      </Menu>
    )
  }
}
