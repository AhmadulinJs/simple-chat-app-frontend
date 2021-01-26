import React from 'react'
import ReactDom from 'react-dom'
import {Box, Grid, Typography} from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';

import {makeStyles} from '@material-ui/core/styles'

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
        color: "#7f8c8d"
    }
}))

export default function ChatMessageBox() {
    const classes = useStyles();

    return (
        <Grid className={classes.root} xs={10}>
            <Box mb={1} ml={1} mr={1} mt={1}>
                <Grid item >
                    <Box p={1.5} boxShadow={2} className={classes.messageBox}>
                        <Grid container direction="row" wrap="nowrap" alignItems="flex-end" spacing={1}>

                        <Grid item>
                            <Typography> 
                                hello i will play with you 
                            </Typography>
                        </Grid>
                        <Grid item>
                                {/* SEND DONE ICON */}
                                {/* <DoneIcon className={classes.doneIconSizing} /> */}
                                
                                {/* ALL DONE ICON */}
                                <DoneAllIcon className={classes.doneIconSizing} />
                        </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Typography variant="body2">
                    13:09
                </Typography>
            </Box>
        </Grid>
    )
}