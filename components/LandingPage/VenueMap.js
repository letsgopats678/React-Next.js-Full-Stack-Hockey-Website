import "leaflet/dist/leaflet.css";

/////import {TileLayer, Marker, Popup, MapContainer} from "react-leaflet";
///import { useEffect, useState } from "react";

"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


export default function VenueMap({ position }) {
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "400px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Arena Location</Popup>
      </Marker>
    </MapContainer>
  );
}




/*const VenueMap = ({venue}) => {
    const [position, setPosition] = useState(null);
    useEffect(()=>{
        if(!venue){
            return;
        }

        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(venue)}`)
            .then((res) => res.json())
            .then((data) => {
                if(data.length > 0){
                    setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
                }
            });
       



    }, [venue]);

    if(!position){
        return null;
    }
    console.log(position);

    return(

        <MapContainer
            center = {position}
            zoom = {15}
            style = {{height: "300px", width: "100%", borderRadius: "12px"}}
        >
            /*<TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url = "https://tile.openstretmap.org/{z}/{x}{y}.png"
    /> 
            <TileLayer
                attribution='&copy; OpenStreetMap contributors &copy; CARTO'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
       
       <Marker position={position}>
            <Popup>{venue}</Popup>
        </Marker>

        </MapContainer>

    );

};




export default VenueMap;*/