import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'



const MainPage = () => {

    const mapStyles = {
            width: "100%",
            height: "100vh"
        }

    return (
        <div  className='max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto'>
            This is Main Page
            <MapContainer id="map" style={mapStyles} center={[50.779729, 6.100367]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[50.779729, 6.100367]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MainPage;