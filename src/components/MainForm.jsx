// MainForm.jsx
import React, { Component } from 'react';
import { List, Form, Header, Button, Segment } from 'semantic-ui-react';



class MainForm extends Component {

    state = {
        result: "",
        viewShowButton: false,
        item: "",
        items: []
    }

    handleChangeItem = event => {
        this.setState({ item: event.target.value })
    }

    handleAddItem = event => {
        
        // const data = new FormData(event.target);

        const { item, items } = this.state;

        event.preventDefault();

        const input = { item };

        const keys = Object.keys(this.state.items);
        let i = keys.length;
        let inputExists = false;

        for(let j=0; j < i; j++)
            if(input.item === this.state.items[keys[j]].item) {
                inputExists = true;
            }

        if(input.item !== "" && !inputExists) {
            const updatedItems = [...items, input];
            this.setState({ items: updatedItems, item: "", viewShowButton: true })
        }
  
    }


    handleDeleteItem = itemId => {
        const { items } = this.state;
        const deletedItemId = itemId;
        const updatedItems = items.filter(i => i.item !== deletedItemId)

        var stillShowButton = true;

        if(updatedItems.length < 1)
            stillShowButton = false;

        this.setState({ items: updatedItems, viewShowButton: stillShowButton, result:"" });
    }

    handleSetResult = () => {
        // const { items } = this.state;

        const keys = Object.keys(this.state.items);
        let i = keys.length;
        const j = Math.floor(Math.random() * i);
        
        this.setState({result: this.state.items[keys[j]].item})
        
    }

    handleResetState = () => {
        this.setState({ items: [], item: "", viewShowButton: false, result: "" })
    }

    /*
            <Input 
            action={{ color: 'teal', labelPosition: 'right', icon: 'add', content: 'Add' }}
            placeholder='Enter Item'
            onChange={this.handleChangeItem}
            onAction={console.log(22)}
            value={item}
            />
    */


    /*

            <Form onSubmit={this.handleAddItem}>
          <Form.Group>
            <Form.Input
              placeholder='Name'
              name='item'
              value={item}
              onChange={this.handleChangeItem}
            />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>

    */

    render() {

        const { items, item } = this.state;

        return (

        <div className="mainDiv"> 

        <Header size='large'>Enter all the choices and come to a random conclusion!</Header>

        <Form className="ui center aligned grid" onSubmit={this.handleAddItem}>
          <Form.Group>
            <Form.Input
              placeholder='Option'
              name='item'
              value={item}
              onChange={this.handleChangeItem}
              color='#A7B8C4'
            />
            <Form.Button secondary content='Add' />
          </Form.Group>
        </Form>

            {/* Items list */}

            <div style={{marginTop: '2em', marginBottom: '2em'}}>
                {items.map(item => (
                    <div key={item.item}
                    className="">
                        <List link>
                        <List.Item floated="left" as='a'>{item.item}
                        <Button className="deleteButton" onClick={() => this.handleDeleteItem(item.item)}>
                            <span>&times;</span>
                            </Button> </List.Item>
                        </List>
                    </div>
                ))}
            </div>
            
            {
                this.state.viewShowButton ? <Button secondary onClick={() => this.handleSetResult()}>Random Choice</Button> : ""
            }

            {
                this.state.viewShowButton ? <Button secondary onClick={() => this.handleResetState()}>Reset</Button> : ""
            }

            {
                this.state.result ?  <Segment key="large" size="large">The random choice is: <strong>{this.state.result}</strong></Segment> : ""
            }




            </div>

            
        );
      }
}

export default MainForm;