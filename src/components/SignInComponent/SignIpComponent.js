import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, TextField, Link, Grid, Box, Typography, Container} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor :"rgba(30, 39, 46,.96)",
    width: "100%",
    minHeight: "100vh",
    color: "#fff",


    '& .MuiFormLabel-root' :{
      color: "#fff"
    },
    '&> .MuiInputBase-root, .MuiInput-root, .MuiInput-underline ' : {
      borderColor: "red",
      color: "#fff",
      
      '&::before': {
        borderColor: "#fff"
      }
    },

       
    '&> .MuiFormLabel-root .MuiInputLabel-root .MuiInputLabel-formControl .MuiInputLabel-animated' :{
      '&> ..MuiFormLabel-root' :{
        color: "red"
      }
    }


    
  },
  paper: {    
    paddingTop: theme.spacing(8),
    // marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),

    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));

export default function SignIpComponent() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          </form>
        </div>
      </Container>
    </Box>
  );
}