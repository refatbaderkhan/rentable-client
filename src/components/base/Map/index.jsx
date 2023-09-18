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


  function DraggableMarker() {
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            const { lat, lng } = marker.getLatLng()
            setPosition([lat, lng]);
            onCoordinatesChange({
              item_latitude: lat,
              item_longitude: lng,
            })
          }
        },
      }),
      [],
    )
    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
        autoPan={true}
        >
      </Marker>
    )
  }

  
  return (
    <div id='leaflet-container'>
 <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <LocationMarker setPosition={setPosition}/>
  <DraggableMarker/>
</MapContainer>
    </div>
  )
}

export default Map