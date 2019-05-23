import React from "react";
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

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
    selectedIndex: 0,
    open: false
  };

  handleAddFormOpen = () => {
    this.setState({ open: false });
    this.setState({ open: true });
    this.setState({ anchorEl: null });
  };
  handleAddFormClose = () => {
    this.setState({ open: false });
  };

  handleAddFormCloseAndSubmit = (name, id, address) => {
    this.setState({ open: false });
    //this.props.setRestaurant();
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index, name, id, address) => {
    this.setState({ selectedIndex: index, anchorEl: null });
    this.props.setRestaurant(name, id, address);
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

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
          {restaurants.length > 0 &&
            restaurants.map((restaurant, index) => (
              <MenuItem
                key={restaurant.name}
                selected={index === this.state.selectedIndex}
                onClick={event =>
                  this.handleMenuItemClick(
                    event,
                    index,
                    restaurant.name,
                    restaurant.id,
                    restaurant.address
                  )
                }
              >
                {restaurant.name}
              </MenuItem>
            ))}
          <MenuItem onClick={this.handleAddFormOpen}>Add Restaurant</MenuItem>
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
