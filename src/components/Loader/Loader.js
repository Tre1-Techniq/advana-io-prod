//import React from "react";
import React from "react";
import { motion } from "framer-motion";

import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5,
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: "easeOut",
            }
        }
    }
}

const useStyles = makeStyles(styles);

const Loader = () => {
    const classes = useStyles();

    return (
        <>
        <motion.div className={classes.loader}
            variants={loaderVariants}
            animate="animationOne"
        >
            
        </motion.div>
        </>
    )
}

export default Loader;
