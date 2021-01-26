import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import DoneAllIcon from "@material-ui/icons/DoneAll";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "fit-content",
    color: "#eee",
  },
  messageBox: {
    backgroundColor: "rgb(44, 62, 80)",
    color: "#fff",
    borderRadius: "4px",
  },
  doneIconSizing: {
    fontSize: "18px",
    color: "#7f8c8d",
  },
}));

export default function ChatMessageBox(props) {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      direction="column"
      alignItems={props.position === "left" ? "flex-end" : "flex-start"}
    >
      <Grid className={classes.root}>
        <Box mb={1} ml={1} mr={1} mt={1}>
          <Grid item>
            <Box p={1.5} boxShadow={2} className={classes.messageBox}>
              <Grid
                container
                direction="row"
                wrap="nowrap"
                alignItems="flex-end"
                spacing={1}
              >
                <Grid item>
                  <Typography>{props.text}</Typography>
                </Grid>
                <Grid item>
                  {props.see ? (
                    <DoneAllIcon className={classes.doneIconSizing} />
                  ) : (
                    <DoneIcon className={classes.doneIconSizing} />
                  )}
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Typography variant="body2">{props.time}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
