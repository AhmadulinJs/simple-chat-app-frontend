import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar, Box, Divider, Grid, Typography, Badge } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';


const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    '&:hover': {
      backgroundColor: "rgb(35 54 73)"
    }
  },
  Avatarlarge: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  firstNameText: {
    display: "-webkit-box",
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical'
  },

  linkItem: {
    textDecoration: "none",
    color: "#fff",

    '&:hover': {
      textDecoration: "none"
    }
  },
  onlineTextStyle: {
    color: "#27ae60",
  },

}));

function ChatListItem(props) {
  const classes = useStyles()
  return (
    <Grid item className={classes.root}>
      <Link href="#" className={classes.linkItem}>
        <Box p={1.5}>
          <Grid wrap="nowrap" container container direction="row" wrap="nowrap" justif="center" alignItems="center" spacing={1}>
            <Box mr={1}>
              <Grid>
                {props.online ? <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant="dot"
                >
                  <Avatar src={props.userPhotoUrl} className={classes.Avatarlarge} />
                </StyledBadge>
                  : <Avatar src={props.userPhotoUrl} className={classes.Avatarlarge} />}
              </Grid>
            </Box>
            <Grid item xs={9} container direction="column" justify="center" >
              <Grid item>
                <Typography className={classes.firstNameText} variant="body1">
                  {props.firstName} {props.lastName}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.firstNameText}>
                  {props.lastCamingMssg}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={3} container direction="column" justify="flex-end" alignItems="flex-end">
              <Grid item>
                {props.unreadMessagesCount && props.unreadMessagesCount !== "0" ?
                  <Box mr={1}>
                    <Badge badgeContent={props.unreadMessagesCount} color="primary" />
                  </Box>
                  : null}
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Divider style={{ background: "#535c68" }} />
      </Link>

    </Grid>
  );
}

export default ChatListItem