import React from 'react'
import ReactDom from 'react-dom'
import {Box, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ChatMessageBox from '../../containers/ChatMessageBox/ChatMessageBox'
import ChatInputComponent from '../ChatInputComponent/ChatInputComponent'

const useStyles = makeStyles((theme) => ({
  root: {
      display: "flex",
      justifyItems: "flex-end",
      alignItems: "flex-end",
      flexDirection: "column",
      justifyContent: "flex-end",
      width: "100%",
    //   height: "100%",
      backgroundColor: 'rgba(30, 39, 46,.96)',
      position: "relative",

      overflowY: "auto",
      overflowX: "hidden",


      '&::before':{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            content: '" "',
            display: 'block',
            opacity: '100%',
            position: 'fixed',
            backgroundSize: 'contain',
            backgroundImage: 'url(https://previews.123rf.com/images/aldanna/aldanna1502/aldanna150200028/36427424-mobile-apps-pattern-with-music-chat-gallery-speaking-bubble-email-magnifying-glass-shopping-search-n.jpg)',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            zIndex: -10
  },
  
}
}));

function ChatMessageComponent() {
    const classes = useStyles()

    return (
        <Box  className={classes.root} >
                {/* MSS BOX  */}
            <Grid item container direction="column" alignItems="flex-end">
                    <ChatMessageBox />
            </Grid>
                {/* MSS BOX  */}
            <Grid item container direction="column" alignItems="flex-start">
                    <ChatMessageBox />
            </Grid>
                {/* MSS BOX  */}
            <Grid item container direction="column" alignItems="flex-start">
                    <ChatMessageBox />
            </Grid>

            <Grid item container direction="column" alignItems="flex-start">
                    <ChatMessageBox />
            </Grid><Grid item container direction="column" alignItems="flex-start">
                    <ChatMessageBox />
            </Grid><Grid item container direction="column" alignItems="flex-start">
                    <ChatMessageBox />
            </Grid><Grid item container direction="column" alignItems="flex-start">
                    <ChatMessageBox />
            </Grid><Grid item container direction="column" alignItems="flex-start">
                    <ChatMessageBox />
            </Grid><Grid item container direction="column" alignItems="flex-start">
                    <ChatMessageBox />
            </Grid><Grid item container direction="column" alignItems="flex-start">
                    <ChatMessageBox />
            </Grid><Grid item container direction="column" alignItems="flex-start">
                    <ChatMessageBox />
            </Grid><Grid item container direction="column" alignItems="flex-start">
                    <ChatMessageBox />
            </Grid>
            <Grid item container direction="column" alignItems="flex-end">
                    <ChatMessageBox />
            </Grid>
            <Grid item container direction="column" alignItems="flex-end">
                    <ChatMessageBox />
            </Grid>
            
        </Box>
    )
}

export default ChatMessageComponent