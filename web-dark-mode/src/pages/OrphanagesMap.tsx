import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

import Leaflet from 'leaflet';
import React, { useContext, useEffect, useState } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import mapMarkerImgDark from '../images/map-marker-dark.svg';
import mapMarkerImg from '../images/map-marker.svg';
import api from '../services/api';
import { Aside, CreateOrphanage, PageMap } from './stylesOrphanagesMap';

interface Orphanage {
    id: number,
    latitude: number,
    longitude: number,
    name: string;
}

function OrphanagesMap() {
    const { title } = useContext(ThemeContext);

    const mapIcon = Leaflet.icon({
        iconUrl: title === 'dark' ? mapMarkerImgDark : mapMarkerImg,
    
        iconSize: [58, 68],
        iconAnchor: [29, 68],
        popupAnchor: [170, 2]
    })

    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {

        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);

    
    return (
        <PageMap>
            <Aside>
                <header>
                    <img src={title === 'light' ? mapMarkerImg : mapMarkerImgDark} alt="Mapa Happy" />

                    <h2> Escolha um orfanato no mapa</h2>
                    <p> Muitas crianças estão esperando sua visita :)</p>
                </header>
                <footer>
                    <strong> Taquara </strong>
                    <span> Rio Grande do Sul </span>
                </footer>
            </Aside>

            <Map
                center={[-29.6568992, -50.7728421]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}

            >

                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/${title === 'dark' ? 'dark' : 'light'}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                {
                    orphanages.map(orphanage => {
                        console.log(orphanage);
                        return (
                            <Marker
                                position={[orphanage.latitude, orphanage.longitude]}
                                icon={mapIcon}
                                key={orphanage.id}
                            >

                                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                    {orphanage.name}
                                    <Link to={`/orphanages/${orphanage.id}`}>
                                        <FiArrowRight size={20} color="#FFF" />
                                    </Link>
                                </Popup>
                            </Marker>
                        )
                    })
                }
            </Map>

            <CreateOrphanage>
                <Link to="/orphanages/create">
                    <FiPlus size={32} color="#FFF" />
                </Link>

            </CreateOrphanage>
        </PageMap>
    );
}

export default OrphanagesMap;