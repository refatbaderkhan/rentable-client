import React, { useState, useRef, useMemo, useEffect } from 'react'
import { MapContainer, TileLayer, useMapEvents, Marker } from 'react-leaflet'
import "./style.css";

const Map = ({onCoordinatesChange}) => {

  const [position, setPosition] = useState([33.891122, 35.506016])


  const LocationMarker = ({setPosition}) => {
    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        onCoordinatesChange({
          item_latitude: lat,
          item_longitude: lng,
        })
      },
    });

    return null;
  };

}

export default Map