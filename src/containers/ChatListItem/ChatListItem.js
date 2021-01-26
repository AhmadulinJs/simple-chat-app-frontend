import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar, Box, Divider, Fab, Grid,Typography,Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
      color: "#fff",

      '&:hover': {
          backgroundColor: "rgb(35 54 73)"
    }
  },
  Avatarlarge : {
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
  onlineTextStyle :{
      color: "#27ae60",
  }

}));

function ChatListItem() {
    const classes = useStyles()
  return (
    <Grid item className={classes.root}>
        <Link href="#" className={classes.linkItem}>
        <Box p={1.5} >
            <Grid wrap="nowrap" container container direction="row" wrap="nowrap" justif="center" alignItems="center" spacing={1}>
                <Box mr={1}>
                    <Grid >
                        <Avatar src="https://www.rirc.ru/img/work.png" className={classes.Avatarlarge} />
                    </Grid>
                </Box>
                <Grid item xs={9} container direction="column" justify="center" >
                    <Grid item>
                        <Typography className={classes.firstNameText} variant="body1">Jont doe </Typography>
                    </Grid>
                    <Grid item>
                    <Typography variant="body2" className={classes.firstNameText} >Lorem Ipsum is simply dummy text of the printing and typesetting industry</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={3} container direction="column" justify="space-between" alignItems="flex-end">
                <Grid item>
                    <Typography variant="body2" className={classes.onlineTextStyle} noWrap>
                    • online
                    </Typography>
                </Grid>
                <Grid item>
                    <Badge badgeContent={5} color="primary"/>
                </Grid>
                </Grid>
            </Grid>
        </Box>
        <Divider style={{background: "#535c68"}} />
        </Link>

    </Grid>
  );
}

export default ChatListItem