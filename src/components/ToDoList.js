import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Clear';


export default class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allItems: [],
      checked: [],
    }

    this.handleToggleCheckbox = this.handleToggleCheckbox.bind(this);
    this.editItemText = this.editItemText.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidUpdate() {
    const { allItems, checked } = this.state;
    const remainingNumOfTasks = allItems.length - checked.length
    document.title = `${remainingNumOfTasks} remaining tasks`;
  }

  handleToggleCheckbox(itemIndex) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(itemIndex);
    const newChecked = [...checked];

    console.log({ itemIndex, checked, currentIndex, newChecked });

    if (currentIndex === -1) {
      newChecked.push(itemIndex)
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    })
  }

  editItemText = (event, index) => {
    const { allItems } = this.state;
    const { target } = event;
    const { value } = target;
    const newItems = [...allItems]

    newItems[index] = value;

    this.setState({
      allItems: newItems
    })
  }

  addItem() {
    const { allItems } = this.state;
    const newItems = [...allItems];
    newItems.push('')

    console.log({ allItems, newItems });

    return this.setState({
      allItems: newItems
    }, () => console.log('state', this.state))
  }

  deleteItem(index) {
    const { allItems } = this.state;
    const updatedItems = [...allItems];

    updatedItems.splice(index, 1)

    this.setState({
      allItems: updatedItems
    })
  }

  render() {
    const { allItems, checked } = this.state;
    console.log('state', this.state)
    return (
      <List>
        {
          allItems.map((item, index) =>
            <ListItem>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(index) !== -1}
                  onClick={() => this.handleToggleCheckbox(index)}
                />
              </ListItemIcon>
              <TextField
                fullWidth
                value={item}
                onChange={e => this.editItemText(e, index)}
                placeholder="Enter new task..."
                InputProps={{
                  endAdornment: (
                    <IconButton
                      style={{ padding: 3 }}
                      onClick={() => this.deleteItem(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )
                }}
              />
            </ListItem>
          )
        }
        <ListItem>
          <Button onClick={this.addItem}>
            Add Item
          </Button>
        </ListItem>
      </List>
    )
  }
}
