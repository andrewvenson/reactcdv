import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

// creates map component
const CdvMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: 28.0339, lng: -1.6596 }}
    ></GoogleMap>
  ))
);

const Map = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      {/* <p>Map</p> */}
      <CdvMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDvOgXab5LUG1wvK1utXkanVWLoUf0OGgo"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Map;
