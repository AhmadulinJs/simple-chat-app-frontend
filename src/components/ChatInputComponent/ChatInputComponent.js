import React from "react";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  TextField,
} from "@material-ui/core";
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
  uploadInput: {
    display: "none",
  }
}));

function ChatInputComponent() {
  const classes = useStyles();

  return (
    <Box className={classes.root} pb={1} width="100%">
      <Box mb={1}>
        <Divider style={{ backgroundColor: "#7f8c8d" }} />
      </Box>

      <Box pl={2} pr={2}>
        <form>
          <Grid
            item
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={1}
            wrap="nowrap"
          >
            {/* FILE UPLOAD BTN */}
            <Grid item>
              <input className={classes.uploadInput} id="icon-button-file" type="file" />
              <label htmlFor="icon-button-file">
                <IconButton
                  aria-label="upload-file"
                  component="span"
                  color="primary"
                >
                  <InsertDriveFileIcon className={classes.emojiBtn} />
                </IconButton>
              </label>
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
          </form>
      </Box>
    </Box>
  );
}

export default ChatInputComponent;
