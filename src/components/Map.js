import React, { useState } from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

function Map() {
  const navTab = {
    padding: "5px",
    // borderRadius: "10px",
    marginBottom: "5px",
  };

  const mapWrapper = {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  };

  // state to switch between map views
  const [mapview, setMapview] = useState({
    view: "global",
    defaultCenter: { lat: 28.0339, lng: -1.6596 },
    defaultZoom: 2,
  });

  // switches mapview state
  function switchView(view) {
    switch (view) {
      case "global":
        setMapview({
          ...mapview,
          view: "global",
          defaultCenter: { lat: 28.0339, lng: -1.6596 },
          defaultZoom: 2,
        });
        break;
      case "states":
        setMapview({
          ...mapview,
          view: "states",
          defaultCenter: { lat: 39.0119, lng: -98.4842 },
          defaultZoom: 4,
        });
        break;
      case "counties":
        setMapview({
          ...mapview,
          view: "counties",
          defaultCenter: { lat: 39.0119, lng: -98.4842 },
          defaultZoom: 4,
        });
        break;
      default:
        console.log("test default");
    }
  }

  // creates map component
  const CdvMapComponent = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={mapview.defaultZoom}
        defaultCenter={mapview.defaultCenter}
      ></GoogleMap>
    ))
  );

  return (
    <div style={mapWrapper}>
      <div style={{ display: "flex" }}>
        <button
          className="btn"
          style={navTab}
          onClick={() => {
            switchView("global");
          }}
        >
          Global
        </button>
        <button
          className="btn"
          style={navTab}
          onClick={() => {
            switchView("states");
          }}
        >
          States
        </button>
        <button
          className="btn"
          style={navTab}
          onClick={() => {
            switchView("counties");
          }}
        >
          Counties
        </button>
      </div>

      <CdvMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDvOgXab5LUG1wvK1utXkanVWLoUf0OGgo"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default Map;
