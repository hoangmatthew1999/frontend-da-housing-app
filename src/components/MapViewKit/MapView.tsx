import React, { useState } from "react";
import theme from "../Theme";
import { Grommet, Box } from "grommet";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
//import { config } from '../../config';
//const config = require('config');
//use this api to get the long and latitude 
//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

// fetch('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDdngkkFMKItXik_aZKOGo9oZNEd60qC24')
//   .then((response) => {return response.json})

interface MapKitPropsInterface {
  width: number;
  height: number;
  latitude: number;
  longitude: number;
  zoom: number;
}

const MapView: React.FC<MapKitPropsInterface> = (props) => {
  const { width, height, latitude, longitude, zoom } = props;
  const [viewport, setViewport] = useState({
    width,
    height,
    latitude,
    longitude,
    zoom
  });
  componentDidMount(){
    let response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDdngkkFMKItXik_aZKOGo9oZNEd60qC24');
    let data = await response.json;
    console.log(data);
  };
  return (
      <Grommet theme={theme}>
      <Box height={`${height}px`} width={`${width}px`}  >
        {/* <ReactMapGL {...viewport} mapboxApiAccessToken={config.MAPBOX_TOKEN} onViewportChange={setViewport} /> */}
      </Box>
    </Grommet>
  );
};

export default MapView;
