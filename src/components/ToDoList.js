import React, { useState, useEffect } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import DeleteIcon from '@material-ui/icons/Clear';

function ToDoList() {

  const [allItems, setAllItems] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    console.info('updating remaining tasks')
    const remainingNumOfTasks = allItems.length - checked.length
    document.title = `${remainingNumOfTasks} remaining tasks`;
  }, [allItems.length, checked.length])

  useEffect(() => {
    console.info('Loaded Page');
    document.title = 'Get It Done!'
  }, [])

  const handleToggleCheckbox = (itemIndex) => {
    const currentIndex = checked.indexOf(itemIndex);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(itemIndex)
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  }

  const editItemText = (event, index) => {
    const { target } = event;
    const { value } = target;
    const newItems = [...allItems]

    newItems[index] = value;

    setAllItems(newItems)
  }

  const addItem = () => {
    const newItems = [...allItems];
    newItems.push('')

    setAllItems(newItems)
  }

  const deleteItem = (index) => {
    const updatedItems = [...allItems];

    updatedItems.splice(index, 1)

    setAllItems(updatedItems)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">To Do List</Typography>
        </Toolbar>
      </AppBar>
      <List>
        {
          allItems.map((item, index) =>
            <ListItem>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(index) !== -1}
                  onClick={() => handleToggleCheckbox(index)}
                />
              </ListItemIcon>
              <TextField
                fullWidth
                value={item}
                onChange={e => editItemText(e, index)}
                placeholder="Enter new task..."
                InputProps={{
                  endAdornment: (
                    <IconButton
                      style={{ padding: 3 }}
                      onClick={() => deleteItem(index)}
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
          <Button onClick={addItem} variant="contained">
            Add Item
          </Button>
        </ListItem>
      </List>
    </>
  )
}

export default ToDoList
