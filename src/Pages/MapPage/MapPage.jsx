
import './MapPage.scss'
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent';

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 40.4165, lng: -80 }), []);

  return (
    <div>
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>

    <NavbarComponent/>
    </div>
    
  );
}