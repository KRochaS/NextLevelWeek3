import Leaflet from 'leaflet';
import React, { useContext, useEffect, useState } from 'react';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import Sidebar from '../components/Sidebar';
import mapMarkerImgDark from '../images/map-marker-dark.svg';
import mapMarkerImg from '../images/map-marker.svg';
import api from '../services/api';
import {
    DontOpenOnWeekends,
    Hour,
    Images,
    MapContainer,
    OpenDetails,
    OpenOnWeekends,
    OrphanageDetails,
    OrphanageDetailsContent,
    PageOrphanage,
} from './stylesOrphanage';

// import { FaWhatsapp } from "react-icons/fa";
// import '../styles/pages/orphanage.css';
interface Orphanage {
    latitude: number;
    longitude: number;
    name: string;
    about: string;
    instructions: string;
    opening_hours: string;
    open_on_weekends: boolean;
    images: Array<{
        id: number;
        url: string;
    }>
}

interface OrphanageParams {
    id: string;
}

export default function Orphanage() {
    const { title } = useContext(ThemeContext);

    const mapIcon = Leaflet.icon({
        iconUrl: title === 'dark' ? mapMarkerImgDark : mapMarkerImg,

        iconSize: [58, 68],
        iconAnchor: [29, 68],
        popupAnchor: [170, 2]
    })


    const params = useParams<OrphanageParams>();
    const [orphanage, setOrphanage] = useState<Orphanage>();
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        api.get(`orphanages/${params.id}`).then(response => {
            setOrphanage(response.data);
        });
    }, [params.id]);

    if (!orphanage) {
        return <p>Carregando...</p>
    }

    return (
        <PageOrphanage>
            <Sidebar />

            <main>
                <OrphanageDetails>
                    <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />

                    <Images>
                        {orphanage.images.map((image, index) => (
                            <button
                                key={image.id}
                                className={activeImageIndex === index ? 'active' : ''}
                                type="button"
                                onClick={() => {
                                    setActiveImageIndex(index);
                                }}
                            >
                                <img src={image.url} alt={orphanage.name} />
                            </button>
                        ))}
                    </Images>

                    <OrphanageDetailsContent>
                        <h1>{orphanage.name}</h1>
                        <p>{orphanage.about}</p>

                        <MapContainer>
                            <Map
                                center={[orphanage.latitude, orphanage.longitude]}
                                zoom={16}
                                style={{ width: '100%', height: 280 }}
                                dragging={false}
                                touchZoom={false}
                                zoomControl={false}
                                scrollWheelZoom={false}
                                doubleClickZoom={false}
                            >
                                <TileLayer
                                    url={`https://api.mapbox.com/styles/v1/mapbox/${title === 'light' ? 'light' : 'dark'}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                                />
                                <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
                            </Map>

                            <footer>
                                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}>Ver rotas no Google Maps</a>
                            </footer>
                        </MapContainer>

                        <hr />

                        <h2>Instruções para visita</h2>
                        <p>{orphanage.instructions}</p>

                        <OpenDetails>
                            <Hour>
                                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                                {orphanage.opening_hours}
                            </Hour>
                            {orphanage.open_on_weekends ? (
                                <OpenOnWeekends>
                                    <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                                </OpenOnWeekends>
                            ) : (
                                    <DontOpenOnWeekends>
                                        <FiInfo size={32} color="#FF6690" />
                  Não Atendemos <br />
                  fim de semana
                                    </DontOpenOnWeekends>
                                )}
                        </OpenDetails>

                        {/* <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button> */}
                    </OrphanageDetailsContent>
                </OrphanageDetails>
            </main>
        </PageOrphanage>
    );
}