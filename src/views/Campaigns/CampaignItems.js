// node modules
import React from 'react';

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/ icons
import InfoIcon from '@material-ui/icons/Info';

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

// data
import campaigns from "./campaign-items";

// Styles
import styles from "../../assets/jss/material-kit-react/views/campaignGrid";

const useStyles = makeStyles(styles);

const CampaignItems = () => {
    const classes = useStyles();

    return (
        <GridContainer>
            {campaigns.map(campaign => (
                <GridItem key={campaign.id} xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt={campaign.alt}
                                height="140"
                                image={campaign.image}
                                title={campaign.title}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {campaign.title}
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {campaign.subtitle}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton size="medium" color="primary" aria-label="More Information">
                                <InfoIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </GridItem>
            ))}
        </GridContainer>
    )
};

CampaignItems.propTypes = {
    items: PropTypes.array,
};

export default CampaignItems

