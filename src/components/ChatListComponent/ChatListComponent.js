import React from "react";
import { Box, Grid } from "@material-ui/core";
import ChatListItem from "../../containers/ChatListItem/ChatListItem";
import { makeStyles } from "@material-ui/core/styles";
import UsersHeader from '../../containers/UsersHeader/UsersHeader'

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#2c3e50",
    height: "100vh",
    overflowY: "auto",
    overflowX: "hidden",
    boxShadow: "1px 0px 10px -2px #000000",
    position: "relavite",

    "&::-webkit-scrollbar ": {
      width: "3px",
    },

    "&::-webkit-scrollbar-thumb": {
      background: "#7f8c8d",
      borderRadius: 10,
      height: 30,
      maxHeight: 20,
    },
  },
}));

function ChatListComponent() {
  const classes = useStyles();
  return (
    <Box pr={0} className={classes.root}>
      <Grid item>
        <UsersHeader />
      </Grid>
      <Grid
        container
        direction="column"
        style={{ padding: 0, margin: 0 }}
        wrap="nowrap"
      >
        {/* USERS HEADER */}

        <ChatListItem
          userPhotoUrl="https://www.rirc.ru/img/work.png"
          online={true}
          firstName="John"
          lastName="Doe"
          unreadMessagesCount="5"
          lastCamingMssg="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <ChatListItem
          userPhotoUrl="https://d2npcyp2owaeo8.cloudfront.net/images/resume/5a357edc509c6-people.png"
          online={false}
          firstName="John"
          lastName="Doe"
          unreadMessagesCount="24"
          lastCamingMssg="Typesetting industry."
        />
        <ChatListItem
          userPhotoUrl="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
          online={false}
          firstName="John"
          lastName="Doe"
          unreadMessagesCount="7"
          lastCamingMssg="Dummy text of the printing and typesetting industry."
        />
        <ChatListItem
          userPhotoUrl="https://www.freelancejob.ru/upload/131/5092087670389.png"
          online={true}
          firstName="John"
          lastName="Doe"
          unreadMessagesCount="0"
          lastCamingMssg=""
        />
      </Grid>
    </Box>
  );
}

export default ChatListComponent;
