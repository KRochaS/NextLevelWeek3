import React, { useContext } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import mapMarkerImg from '../images/map-marker.svg';
import mapMarkerImgDark from '../images/map-marker-dark.svg';
import { useHistory } from "react-router-dom";

// import '../styles/components/sidebar.css';
import { AppSidebar } from './stylesSidebar';
import { ThemeContext } from 'styled-components';



export default function Sidebar() {
    const { title } = useContext(ThemeContext);

    const { goBack } = useHistory();
    return (
        <AppSidebar>
            <img src={title === 'light' ? mapMarkerImg : mapMarkerImgDark} alt="Happy" />

            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#FFF" />
                </button>
            </footer>
        </AppSidebar>
    );
}