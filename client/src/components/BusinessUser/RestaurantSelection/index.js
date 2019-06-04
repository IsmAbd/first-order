import React, { useState } from "react";
import { Query } from "react-apollo";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { setRestaurant } from "../../../actions/restaurantActions";
import MenuItems from "./MenuItems";

//Just for testing
const restaurants = [
  {
    name: "Mc Donalds",
    id: "1",
    address: "WhatEver"
  },
  {
    name: "Burger King",
    id: "2",
    address: "Wer das liest ist doof"
  }
];


export default function RestaurantSelection() {

  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [open, setOpen] = useState(false)

  
  const handleAddFormOpen = () => {
    setAnchorEl(null)
    setOpen(true)
  };
  const handleAddFormClose = () => {
    setOpen(false)
  };

 const  handleAddFormCloseAndSubmit = (name, id, address) => {
    setOpen(false)
    //this.props.setRestaurant();
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  };

  const handleMenuItemClick = (event, index, name, id, address) => {
    setSelectedIndex(index)
    setAnchorEl(null)

    //this.props.setRestaurant(name, id, address);
  };

 const handleClose = () => {
    setAnchorEl(null)
  };
  
  return (
    <div>
      <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {restaurants[this.state.selectedIndex].name}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItems />
        </Menu>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleAddFormClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleAddFormCloseAndSubmit} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  )
}


class SimpleMenu extends React.Component {


  render() {
    

    return (
      <div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authUser: state.sessionState.authUser
  };
}

export default connect(
  mapStateToProps,
  { setRestaurant }
)(SimpleMenu);
