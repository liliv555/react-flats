import React from "react";
import GoogleMapReact from 'google-map-react';

export default function Map() {
  const defaultProps = {
    center: {
      lat: 48.864716,
      lng: 2.349014
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBtN6mZ80ByiB9c2JfclBupR0MXJeNXQ0M" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      />
    </div>
  );
}
