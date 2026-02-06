import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function ZoomController({ center }) {
  const map = useMap();
  if (center) map.flyTo(center, 13, { duration: 2 }); // Zoom to 1km scale
  return null;
}

const MapView = ({ lat, lon }) => (
  <div style={{ flex: 1, height: '100%' }}>
    <MapContainer center={[lat, lon]} zoom={5} style={{ height: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ZoomController center={[lat, lon]} />
      <Marker position={[lat, lon]} />
    </MapContainer>
  </div>
);

export default MapView;