import React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import usMap from "../../geojson/us-map.json";
//import usCities from "../../geojson/us-cities.json";
//import worldMap from "../../geojson/world-map.json";

const markers = [
    { markerOffset: 15, name: "New York", coordinates: [-73.98, 40.77] },
];

const SalesMap = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [98, -38, 0],
        scale: 1300,
      }}
      height={500}
    >
        <ZoomableGroup zoom={1}>
            <Geographies geography={usMap}>
                {({ geographies }) =>
                geographies
                    .map(geo => (
                    <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#EAEAEC"
                        stroke="#D6D6DA"
                    />
                    ))
                }
            </Geographies>
            {markers.map(({ name, coordinates, markerOffset }) => (
                <Marker key={name} coordinates={coordinates}>
                    <g
                        fill="none"
                        stroke="#FF5533"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(-12, -24)"
                    >
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                    </g>
                    <text
                        textAnchor="middle"
                        y={markerOffset}
                        style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                    >
                        {name}
                    </text>
                </Marker>
            ))}
        </ZoomableGroup>
    </ComposableMap>
  );
};

export default SalesMap;
