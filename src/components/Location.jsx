
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility"; 
export const Map = () => {
  const position = [31.759911, -106.487003];
  const zoomLevel = 12.8;
  const businessAddress = "5616 Hemmingway Dr, El Paso, TX 79924";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessAddress)}`;
 
  return (
    <MapContainer zoom={zoomLevel} center={position} scrollWheelZoom={false} style={{width:"100%", height:"50vh", zIndex: 1}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>
          <b>Home Scape</b> <br/>
          <b>Address</b>: <a href={mapsUrl} target="_blank" rel="noreferrer">{businessAddress}</a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

const Location = () => {
    return ( 
        <div className="w-full h-full items-center justify-center">
            {/* Map */}
            <div className="flex flex-row items-center justify-center ">
                <Map/>
            </div>
        </div>
     );
}
 
export default Location;
