import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Grid } from '@material-ui/core';
import ChatListItem from '../../containers/ChatListItem/ChatListItem'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#2c3e50",
    height: "100vh",
    overflowY: "scroll",
    overflowX: "hidden",

    /* width */
    '&::-webkit-scrollbar ' :{
      width: '9px',
    },

    '&::-webkit-scrollbar-thumb' :{
      background: '#7f8c8d',
      borderRadius: 10,
      height: 30,
      maxHeight: 20,
    },

  }
}))

function ChatListComponent() {
  const classes = useStyles()
  return (
    <Box pl={1} pr={1} className={classes.root}>
        <Grid  container direction="column" style={{padding:0, margin: 0,}} wrap="nowrap">
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
        </Grid>
    </Box>
  );
}

export default ChatListComponent