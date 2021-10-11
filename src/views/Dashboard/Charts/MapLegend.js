import React from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// @mui/material components
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
 
const values = ["3.0", "5.0", "7.0", "10.0+"];
 
const useStyles = makeStyles(styles);

export default function MapLegend() {
    const classes = useStyles();

    return (
        <div className={classes.mapLegend}>
            <Box className={classes.mapLegendGrad} color="#848484" p={2}>
                
            </Box>
            <List className={classes.mapLegendValueList}>
                {values.map( (value) => 
                    (
                        
                        <ListItem className={classes.mapLegendValueListItem} key={value[0]}>{value}</ListItem>
                    )
                )}
            </List>
        </div>
    );
}
