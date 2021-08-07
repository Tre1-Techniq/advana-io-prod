// node modules
import React, { useState } from 'react';

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
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";


// @material-ui/ icons
import InfoIcon from '@material-ui/icons/Info';
import RefreshIcon from '@material-ui/icons/Refresh';

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

// Styles
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";
import styles from "../../assets/jss/material-kit-react/views/campaignGridStyle";

const useStyles = makeStyles(styles);

const CampaignItems = ({campaigns}) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [campaign, setCampaign] = useState({});
    const [visible, setVisible] = useState(6);

    const handleOpen = (campaign) => {
        setCampaign(campaign);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const showMoreItems = () => {
        setVisible(prevValue => prevValue + 3);

        const pageBottom = document.querySelector("#gridWrapper")

        setTimeout(() => pageBottom.scrollIntoView({block: "end", behavior: "smooth"}), 100);
    };

    return (
        <ThemeProvider theme={advanaTheme}>
            <div id="gridWrapper">
                <GridContainer>
                    {campaigns.slice(0, visible).map((campaign) => (
                        <GridItem 
                            classes={{
                                root: classes.gridItem,
                                img: classes.rootIMG
                            }}
                            key={campaign.id}
                            xs={12} sm={6} md={4}
                        >
                            <Card id="campaignCard" className={classes.rootCard}>
                                <CardActionArea
                                    classes={{
                                        root: classes.actionArea,
                                        img: classes.cardIMG
                                    }}
                                    onClick={() => handleOpen(campaign)}>
                                    <CardMedia
                                        component="img"
                                        alt={campaign.alt}
                                        height="140"
                                        image={campaign.image}
                                        title={campaign.title}
                                    />
                                    <CardContent>
                                    <Typography className={classes.cardTitle} gutterBottom variant="h5" component="h2" align="center">
                                        {campaign.title}
                                    </Typography>
                                    <Typography className={classes.cardSubtitle} variant="body2" color="textSecondary" component="p" align="center">
                                        {campaign.subtitle}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <IconButton
                                        size="medium" 
                                        color="primary" 
                                        aria-label="More Information"
                                        onClick={() => handleOpen(campaign)}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </GridItem>
                    ))}

                    { visible >= 6 && visible < 21 ?
                        <Button
                            id="showMore"
                            className={classes.loadMore}
                            color="primary" 
                            aria-label="Load More"
                            onClick={showMoreItems}
                        >
                            <RefreshIcon style={{width: "50px", height: "50px", margin: "0 10px 0 0"}} />
                            <span>LOAD MORE</span>
                        </Button> : null
                    }
                    
                    <Modal
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                            classes: {
                                root: classes.modalBackdrop
                            }
                        }}
                    >
                        <Fade in={open}>
                            <div className={classes.modalContent}>
                                <img className={classes.modalIMG} src={campaign.image} />
                                <h6 className={classes.modalTitle}>{campaign.title}</h6>
                                <p className={classes.modalSubtitle}>{campaign.subtitle}</p>
                            </div>
                        </Fade>
                    </Modal>
                </GridContainer>
            </div>

        </ThemeProvider>
    )
};

CampaignItems.propTypes = {
    campaigns: PropTypes.array,
    campaign: PropTypes.object,
};

export default CampaignItems

