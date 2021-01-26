import React from "react";
import ReactDom from "react-dom";
import { Box, Divider, Grid, IconButton, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// ICONS
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import NearMeIcon from "@material-ui/icons/NearMe";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(30, 39, 46,.98)",
    bottom: 0,
  },
  emojiBtn: {
    fontSize: "30px",
    color: "#7f8c8d",
  },
  customStyleTextField: {
    color: "#fff",
    width: "100%",
  },
}));

function ChatInputComponent() {
  const classes = useStyles();

  return (
    <Box className={classes.root} pb={1} width="100%">
      <Box mb={1}>
        <Divider style={{ backgroundColor: "#7f8c8d" }} />
      </Box>

      <Box pl={2} pr={2}>
        <Grid
          item
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          spacing={1}
          wrap="nowrap"
        >
          <Grid item>
            <IconButton color="primary">
              <InsertDriveFileIcon className={classes.emojiBtn} />
            </IconButton>
          </Grid>

          <Grid item xs={10}>
            <TextField
              placeholder="Write a message.."
              style={{ color: "#fff" }}
              fullWidth
              InputProps={{
                className: classes.customStyleTextField,
              }}
            />
          </Grid>
          <Grid item>
            <IconButton color="primary">
              <InsertEmoticonIcon className={classes.emojiBtn} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary">
              <NearMeIcon className={classes.emojiBtn} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ChatInputComponent;
