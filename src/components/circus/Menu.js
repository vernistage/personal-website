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
          name='video'
          href="#video"
          active={activeItem === 'video'}
          onClick={this.handleItemClick}
        >
          video
        </Menu.Item>
      </Menu>
    )
  }
}

export default MainMenu
