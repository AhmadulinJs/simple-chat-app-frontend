import React from "react";
import {
  Box, Grid, IconButton, InputBase,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    '&:placeholder': {
      fontWeight: 400,
      color: "red"
    }
  },
  customInputStyle: {
    color: "#fff",
    fontSize: "14px",
    background: "#30465c",
    borderRadius: theme.spacing(.5),
    border: "none",
    padding: theme.spacing(.5),
    fontWeight: 400,
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),

    "& ::-webkit-input-placeholder": {
      color: "#fff !important",
      fontWeight: 300,
    }

  }
}));

function UsersHeader(props) {
  const classes = useStyles();
  return (
    <Box width="100%" pt={1} pb={.5} className={classes.root}>
      <Grid container direction="row" justify="space-around" alignItems="center" wrap="nowrap">
        <Grid item>
          <Box>
            <IconButton color="primary">
              <MenuIcon style={{ color: "#fff" }} />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box mr={1} className={classes.root}>
            <InputBase className={classes.customInputStyle} margin="none" fullWidth placeholder="Search" size="small" variant="outlined" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UsersHeader;
