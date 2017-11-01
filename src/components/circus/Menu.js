import React, { Component } from 'react';
import { Menu} from 'semantic-ui-react'

class MainMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu stackable fluid widths={3}>
        <Menu.Item
          name='about'
          className = 'about'
          active={activeItem === 'about'}
          href="#about"
          onClick={this.handleItemClick}
        >
          about
        </Menu.Item>

        <Menu.Item
          name='gallery'
          href="#gallery"
          active={activeItem === 'gallery'}
          onClick={this.handleItemClick}
        >
          gallery
        </Menu.Item>

        <Menu.Item
          name='connect'
          href="#connect"
          active={activeItem === 'connect'}
          onClick={this.handleItemClick}
        >
          connect
        </Menu.Item>
      </Menu>
    )
  }
}

export default MainMenu
