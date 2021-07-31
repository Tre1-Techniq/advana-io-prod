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
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputAdornment from '@material-ui/core/InputAdornment';

// @material-ui/ icons
import InfoIcon from '@material-ui/icons/Info';
import SearchIcon from '@material-ui/icons/Search';

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

// data
// import campaigns from "./campaign-items";

// Styles
import styles from "../../assets/jss/material-kit-react/views/campaignGrid";

const useStyles = makeStyles(styles);

const CampaignItems = ({campaigns, loading}) => {
    const classes = useStyles();
    
    const [q, setQ] = useState("");
    const [searchParam] = useState(["status", "title"]);
    const [filterParam, setFilterParam] = useState(["All"]);

    function search(campaigns) {
        return campaigns.filter((campaign) => {
            if (campaign.status == filterParam) {
                return searchParam.some((newCampaign) => {
                    return (
                        campaign[newCampaign]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newCampaign) => {
                    return (
                        campaign[newCampaign]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    };

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <GridContainer className={classes.filterInputs}>
                <GridItem xs={12} sm={12} md={3}>
                    <div className="search-wrapper">
                        <Input
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>   
                            }
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="Search campaigns..."
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                    </div>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                    <NativeSelect
                        onChange={(event) => {
                            setFilterParam(event.target.value);
                        }}
                        className={classes.selectFilter}
                        name="status"
                        value={filterParam}
                        inputProps={{ 'aria-label': 'Campaign Status' }}
                    >
                        <option value="All">All</option>
                        <option value="Current">Current</option>
                        <option value="Past">Past</option>
                    </NativeSelect>
                </GridItem>
            </GridContainer>
            <GridContainer>
                {search(campaigns).map(campaign => (
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
        </div>
    )
};

CampaignItems.propTypes = {
    campaigns: PropTypes.array,
    loading: PropTypes.bool
};

export default CampaignItems

