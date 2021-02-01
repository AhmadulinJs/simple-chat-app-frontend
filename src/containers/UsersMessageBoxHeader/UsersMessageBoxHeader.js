import React from "react";
import {
  AppBar,
  Box, Grid, IconButton, InputBase, Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#2c3e50",
  },
  userTitleText: {
    color: "#fff"
  }
}));

function UsersMessageBoxHeader(props) {
  const classes = useStyles();
  return (
    <Box pl={2} pr={2} pt={1} pb={1} className={classes.root}>
      <Grid item container direction="row" justify="space-between" wrap="nowrap">
        <Grid item container direction="column">
          <Grid item>
            <Typography className={classes.userTitleText} variant="body1">
              John doe
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="primary" variant="body2" style={{ color: "#bdc3c7", fontWeight: 300 }}>
              last seen recently
            </Typography>
          </Grid>
        </Grid>
        <Grid item container direction="row" justify="flex-end" spacing={1}>
          <Grid item>
            <IconButton color="primary">
              <MoreVertIcon style={{ color: "#fff" }} fontSize="small" />
            </IconButton>
          </Grid>

        </Grid>
      </Grid>
    </Box>
  );
}

export default UsersMessageBoxHeader;
