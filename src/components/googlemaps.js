import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyAPqFkPiD-L1AgaDK58sSyaOI8R3-giGU4"

const GoogleMaps = withGoogleMap(props => (
  <GoogleMap
    googleMapURL = {googleMapURL}
    defaultZoom={15}
    defaultCenter={props.position}
  >
      <Marker/>
  </GoogleMap>
));

export default GoogleMaps;