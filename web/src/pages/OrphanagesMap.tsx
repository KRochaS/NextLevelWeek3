import '../styles/pages/orphanages-map.css';

import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Mapa Happy" />

                    <h2> Escolha um orfanato no mapa</h2>
                    <p> Muitas crianças estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong> Taquara </strong>
                    <span> Rio Grande do Sul </span>
                </footer>
            </aside>

            <Map
                center={[-29.6568992, -50.7728421]}
                zoom={15}
                style={{ width: '100%', height: '100%'}}

            >

                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;