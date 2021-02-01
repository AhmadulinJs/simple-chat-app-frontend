import React from "react";
import {
  Box,
  Grid,
  SwipeableDrawer,
  Hidden,
  IconButton,
  AppBar,
} from "@material-ui/core";
import ChatListComponent from "../ChatListComponent/ChatListComponent";
import ChatMessageComponent from "../ChatMessageComponent/ChatMessageComponent";
import ChatInputComponent from "../ChatInputComponent/ChatInputComponent";
import clsx from "clsx";
import MenuIcon from '@material-ui/icons/Menu';
import UsersMessageBoxHeader from '../../containers/UsersMessageBoxHeader/UsersMessageBoxHeader'


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  test: {
    height: "100%",
  },
  gridItem: {
    // paddingTop: 50,
    height: "100%",
    maxHeight: "calc(100vh - 131px)",
  },

  listCustomSizing: {
    zIndex: 1111,
    minWidth: "355px",
    maxWidth: "355px",

    [theme.breakpoints.down("md")]: {
      maxWidth: "285px",
      minWidth: "285px",
    },
  },
}));

function ChatAppComonents() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      style={{ maxWidth: "350px" }}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ChatListComponent />
    </div>
  );
  return (
    <Box>
      <Grid
        container
        direction="row"
        wrap="nowrap"
        style={{ minHeight: "100vh" }}
      >
        <Hidden mdUp>
          <Grid
            container
            justify="center"
            style={{
              maxWidth: "65px",
              minWidth: "65px",
              background: "#2c3e50",
              boxShadow: "0px 0px 11px -4px #000000",
              zIndex: 1111
            }}
          >
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Box mt={1}>
                  <IconButton
                    style={{ color: "#fff" }}
                    onClick={toggleDrawer(anchor, true)}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid className={classes.listCustomSizing}>
            <ChatListComponent />
          </Grid>
        </Hidden>
        <Grid container direction="column" justify="flex-end" wrap="nowrap">
          {/* Meesage header */}
          <Grid item style={{ position: "sticky", boxShadow: `0px 0px 11px -4px #000000`, zIndex: 111 }}>
            <UsersMessageBoxHeader />
          </Grid>
          <Grid item className={classes.gridItem}>


            <ChatMessageComponent />

          </Grid>

          {/* CHAT INPUT */}
          <ChatInputComponent />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ChatAppComonents;
