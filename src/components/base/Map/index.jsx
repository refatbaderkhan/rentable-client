import React, { useState, useRef, useMemo, useEffect } from 'react'
import { MapContainer, TileLayer, useMapEvents, Marker } from 'react-leaflet'
import "./style.css";
import { useCustomDispatch } from '../../../redux/customHooks/customDispatch';


const Map = ({item_latitude, item_longitude, alternative}) => {
  
  const {setCoordinates} = useCustomDispatch();

  const [position, setPosition] = useState(
    item_latitude && item_longitude ? [item_latitude, item_longitude] : [33.891122, 35.506016]
  );

  
  const LocationMarker = ({setPosition}) => {
    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        setCoordinates({
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
            setCoordinates({
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
  <div className={ alternative ? 'leaflet-container-alternative' : 'leaflet-container'}>
 <MapContainer center={position} zoom={14} scrollWheelZoom={true} className={ alternative ? 'leaflet-container-alternative' : 'leaflet-container'}>
 <TileLayer className={ alternative ? 'leaflet-container-alternative' : 'leaflet-container'} attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {!item_latitude && !item_longitude && (
    <div>
    <LocationMarker setPosition={setPosition}/>
    <DraggableMarker/>
    </div>
  )}
  {item_latitude !== undefined && item_longitude !== undefined && (
    <Marker position={[item_latitude, item_longitude]}></Marker>
  )}
  </MapContainer>
    </div>
  )
}

export default Map