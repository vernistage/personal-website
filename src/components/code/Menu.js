import React, { Component } from 'react';
import { Menu, Icon, Button } from 'semantic-ui-react'

class CodeMenu extends Component {
  state = { activeItem: 'About Sarah' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item header name='About' active={activeItem === 'About Sarah'} onClick={this.handleItemClick}  href="#bio"/>
          <Menu.Item name='Portfolio' active={activeItem === 'Portfolio'} onClick={this.handleItemClick} href="#portfolio"/>
          <Menu.Item name='Résumé' active={activeItem === 'Résumé'} onClick={this.handleItemClick} href='/resume'/>
          <Menu.Menu position='right'>
            <Menu.Item href='http://www.linkedin.com/in/sarahacolby' target='_blank'>
              <Button color='linkedin'>
                <Icon name='linkedin' /> LinkedIn
              </Button>
            </Menu.Item>
            <Menu.Item href='http://www.github.com/vernistage' target='_blank'>
              <Button color='google plus'>
                <Icon name='github' /> Github
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default CodeMenu
