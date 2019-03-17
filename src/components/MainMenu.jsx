// Menu.jsx
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';


class MainMenu extends Component {

    state = {}

    //handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        //const { activeItem } = this.state

      /*
            <Menu.Item 
              name='features'
              position='right'
              active={activeItem === 'features'}
              onClick={this.handleItemClick}
            >
              View Source
            </Menu.Item>
          </Menu>
      */


        return (
            <Menu stackable>
            <Menu.Item>
            <h1>ChooseForMe</h1>
            </Menu.Item>
            </Menu>
        );
      }
}

export default MainMenu;