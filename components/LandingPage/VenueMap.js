import "leaflet/dist/leaflet.css";

import {TileLayer, Marker, Popup, MapContainer} from "react-leaflet";
import { useEffect, useState } from "react";

import L from "leaflet";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});



const VenueMap = ({venue}) => {
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
            {/*<TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url = "https://tile.openstretmap.org/{z}/{x}{y}.png"
    /> */}
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




export default VenueMap;