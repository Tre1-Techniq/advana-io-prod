import React from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";

// nodejs library to set properties for components
import PropTypes from "prop-types";


import allStates from "../../geojson/data/allstates.json";
//import offsets from "../../geojson/data/offsets.json";

import usMap from "../../geojson/us-map.json";

const offsets = {
    VT: [50, -8],
    NH: [34, 2],
    MA: [30, -1],
    RI: [28, 2],
    CT: [35, 10],
    NJ: [34, 1],
    DE: [33, 0],
    MD: [47, 10],
    DC: [49, 21]
};

const markers = [
    { id: "01", markerOffset: 15, city: "New York", coordinates: [-74.0059413, 40.7127837], tooltip: "New York" },
    { id: "02", markerOffset: 15, city: "Chicago", coordinates: [-87.6297982, 41.8781136], tooltip: "Chicago" },
    { id: "03", markerOffset: 15, city: "Irvine", coordinates: [-117.7946942, 33.6839473], tooltip: "Irvine" },
    { id: "04", markerOffset: 15, city: "San Diego", coordinates: [-117.1610838, 32.715738], tooltip: "San Diego" },
    { id: "05", markerOffset: 15, city: "Phoenix", coordinates: [-112.0740373, 33.4483771], tooltip: "Phoenix" },
];

const SalesMap = () => {
  return (
    <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{
            scale: 1300
        }}
        height={500}
    >
        <ZoomableGroup>
            <Geographies geography={usMap}>
                {({ geographies }) => (
                <>
                    {geographies.map(geo => (
                    <Geography
                        key={geo.rsmKey}
                        stroke="#d7d7d7"
                        geography={geo}
                          style={{
                            default: {
                                fill: "#e7e7e7"
                            },
                            hover: {
                                fill: "#e1e1e1"
                            },
                            pressed: {
                                fill: "#e1e1e1"
                            }
                          }}
                    />
                    ))}
                    {geographies.map(geo => {
                    const centroid = geoCentroid(geo);
                    const cur = allStates.find(s => s.val === geo.id);
                    return (
                        <g key={geo.rsmKey + "-name"}>
                        {cur &&
                            centroid[0] > -160 &&
                            centroid[0] < -67 &&
                            (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                            <Marker coordinates={centroid}>
                                <text y="2" fontSize={14} textAnchor="middle" fill="#b7b7b7">
                                    {cur.id}
                                </text>
                            </Marker>
                            ) : (
                            <Annotation
                                subject={centroid}
                                dx={offsets[cur.id][0]}
                                dy={offsets[cur.id][1]}
                                connectorProps={{
                                    stroke: "#b7b7b7",
                                    strokeWidth: 1,
                                    strokeLinecap: "round"
                                  }}
                            >
                                <text x={4} fontSize={14} alignmentBaseline="middle" fill="#a7a7a7">
                                    {cur.id}
                                </text>
                            </Annotation>
                            ))}
                        </g>
                    );
                })}
                {markers.map(({ id, coordinates, tooltip }) => (
                    <Marker
                        key={id}
                        coordinates={coordinates}
                        data-tip={tooltip}
                        onMouseEnter={() => console.log(tooltip)}
                    >
                        <g
                            fill="none"
                            stroke="#2e4094"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform="translate(-12, -24)"
                        >
                            <circle
                                cx="12"
                                cy="10"
                                r="12"
                            />
                        </g>
                        <g
                            fill="#2e4094"
                            stroke="none"
                            transform="translate(-12, -24)"
                        >
                            <circle
                                cx="12"
                                cy="10"
                                r="8"
                                className="markerInner"
                            />
                        </g>
                    </Marker>
                ))}
                </>
                )}
            </Geographies>
        </ZoomableGroup>
    </ComposableMap>
  );
};

export default SalesMap;

SalesMap.propTypes = {
    setTooltipContent: PropTypes.func,
};
