import React, { useState, useEffect, memo } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";

// import { makeStyles } from "@material-ui/core/styles";

import PropTypes from 'prop-types';
//import classNames from "classnames";

// import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js"

// const useStyles = makeStyles(styles);

const geoUrl = "/counties-10m.json";

const SalesMap = ({ setTooltipContent }) => {
  //   const classes = useStyles();
  const [data, setData] = useState([]);
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState([-96,38]);

  function handleZoomIn() {
    if (zoom > 9) return;
    setZoom(() => zoom * (1.5));
  }

  function handleZoomOut() {
    if (zoom < 1) return;
    setZoom( () => zoom / (1.5));
  }

  function handleMoveEnd() {
    setZoom(zoom);
    setCenter(center)
  }

  useEffect(() => {
    csv("/unemployment-by-county-2017.csv").then(counties => {
      setData(counties);
    }).then(setZoom(zoom));
  }, []);

  const colorScale = scaleQuantile()
    .domain(data.map(d => d.unemployment_rate))
    .range([
        "#C4F5F0",
        "#93EAE7",
        "#62DDDE",
        "#31C7D0",
        "#00ACC1",
        "#079DBA",
        "#0E8FB4",
        "#1483AD",
        "#1B79A6",
    ]);

    SalesMap.propTypes = {
        setTooltipContent: PropTypes.func,
    };

  return (
    <>
    {/* <Loader /> */}
        <ComposableMap
            data-tip=""
            projection="geoAlbersUsa"
            projectionConfig={{
                scale: 900
            }}
            height={400}
        >
            <ZoomableGroup
                className=""
                zoom={zoom}
                center={center}
                onMoveEnd={handleMoveEnd}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                    geographies.map(geo => {
                        const cur = data.find(s => s.id === geo.id);
                        return (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={cur ? colorScale(cur.unemployment_rate) : "#e7e7e7"}
                            onMouseEnter={() => {
                                //console.log(cur.unemployment_rate);
                                setTooltipContent(`${cur.name}` + `<br/>` +  `${"Unemployment: " + cur.unemployment_rate}` +"%");
                                //console.log(`"RATE: " ${cur.unemployment_rate}`);
                            }}
                            onMouseLeave={() => {
                                //console.log("MOUSE LEAVE: ");
                                setTooltipContent("");
                            }}
                        />
                        );
                    })
                    }
                </Geographies>
            </ZoomableGroup>
        </ComposableMap>
        <div className="controls">
            <button onClick={handleZoomIn}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>
            <button onClick={handleZoomOut}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                >
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>
        </div>
    </>
  );
};

export default memo(SalesMap);
