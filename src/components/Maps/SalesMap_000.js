import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const SalesMap = () => {
  const [data, setData] = useState([]);
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  useEffect(() => {
    csv("/unemployment-by-county-2017.csv").then(counties => {
      setData(counties);
    });
  }, []);

  const colorScale = scaleQuantile()
    .domain(data.map(d => d.unemployment_rate))
    .range([
      "#1B79A6",
      "#00acc1",
      "#21BECC",
      "#42CFD5",
      "#62DDDE",
      "#83E7E4",
      "#A4EEE9",
      "#C4F5F0",
      "#1B79A6"
    ]);

  return (
    <>
    <ComposableMap 
        projection="geoAlbersUsa"
        projectionConfig={{
            scale: 1000
        }}
        height={500}
    >
        <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
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
                        fill={cur ? colorScale(cur.unemployment_rate) : "#EEE"}
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

export default SalesMap;
