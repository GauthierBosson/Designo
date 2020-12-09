import * as React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer } from "react-leaflet";

const MapWrapper = styled.div`
  width: 500px;
  height: 500px;
  border-radius: ${({ theme }) => theme.borderRadius.base};

  .leaflet-container {
    border-radius: ${({ theme }) => theme.borderRadius.base};
    width: 100%;
    height: 100%;
  }
`;

const MapCard: React.FC<{ position: [number, number] }> = ({ position }) => (
  <MapWrapper>
    <MapContainer
      zoomControl={false}
      center={position}
      zoom={17}
      scrollWheelZoom={false}
      dragging={false}
      touchZoom={false}
      doubleClickZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  </MapWrapper>
);

export default MapCard;
