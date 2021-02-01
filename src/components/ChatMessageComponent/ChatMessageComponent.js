import React from "react";
import { Box, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChatMessageBox from "../../containers/ChatMessageBox/ChatMessageBox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyItems: "flex-end",
    alignItems: "flex-end",
    flexDirection: "column",
    // justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(30, 39, 46,.96)",
    position: "relative",
    overflowY: "auto",
    overflowX: "hidden",

    "&::-webkit-scrollbar ": {
      width: "3px",
    },

    // '&::-webkit-scrollbar-track ': {
    //         background: 'rgba(30, 39, 46,.96)',
    // },

    "&::-webkit-scrollbar-thumb": {
      background: "#7f8c8d",
      borderRadius: 10,
      height: 30,
      maxHeight: 20,
    },

    "&::before": {
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      content: '" "',
      display: "block",
      opacity: "100%",
      position: "fixed",
      backgroundSize: "contain",
      backgroundImage:
        "url(https://previews.123rf.com/images/aldanna/aldanna1502/aldanna150200028/36427424-mobile-apps-pattern-with-music-chat-gallery-speaking-bubble-email-magnifying-glass-shopping-search-n.jpg)",
      backgroundRepeat: "repeat",
      backgroundPosition: "center",
      zIndex: -10,
    },
  },
}));

function ChatMessageComponent() {
  const classes = useStyles();

  return (
    <Box className={classes.root} >

      {/* MESSAGE */}
      <ChatMessageBox
        text="lorem ipsom"
        position="left"
        see={true}
        time="13:27"
      />
      <ChatMessageBox
        text="hello john"
        position="right"
        see={true}
        time="14:46"
      />
      <ChatMessageBox
        text="hello john"
        position="right"
        see={false}
        time="14:46"
      />
      <ChatMessageBox
        text="hello john"
        position="right"
        see={false}
        time="14:46"
      />
      <ChatMessageBox
        text="hello john"
        position="right"
        see={false}
        time="14:46"
      />
      <ChatMessageBox
        text="hello john"
        position="right"
        see={false}
        time="14:46"
      />
      <ChatMessageBox
        text="hello john"
        position="right"
        see={false}
        time="14:46"
      />
      <ChatMessageBox
        text="hello john"
        position="right"
        see={false}
        time="14:46"
      />
      <ChatMessageBox
        text="hello john"
        position="right"
        see={false}
        time="14:46"
      /> <ChatMessageBox
        text="hello john"
        position="right"
        see={false}
        time="14:46"
      /> <ChatMessageBox
        text="hello john"
        position="right"
        see={false}
        time="14:46"
      />
    </Box>
  );
}

export default ChatMessageComponent;
