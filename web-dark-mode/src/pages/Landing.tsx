import React, { useContext } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import logoImgDark from '../images/logo-dark.svg';
import logoImg from '../images/logo.svg';
import { Container, ContentWrapper, EnterApp, Location } from './stylesLanding';

interface Props {
    toggleTheme(): void;
}
const Landing: React.FC<Props> = ({ toggleTheme }) => {
    const { title } = useContext(ThemeContext);
    return (
        <Container>
            <ContentWrapper>
                <img src={title === 'light' ? logoImg : logoImgDark} alt="Happy" />



                <main>
                    <h1> Leve felicidade para o mundo</h1>
                    <p> Muitas crianças estão esperando a sua visita.</p>
                </main>

                <Location>
                    <strong> Taquara</strong>
                    <span> Rio Grande do Sul</span>


                    <div>
                        <Switch
                            onChange={toggleTheme}
                            checked={title === 'dark'}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            height={10}
                            width={30}
                            handleDiameter={15}
                            offColor="#88898A"
                            onColor="#5EA3DE"
                        />


                    </div>

                </Location>



                <EnterApp>
                    <Link to="/app">
                        <FiArrowRight size={26} color="#FFF" />
                    </Link>

                </EnterApp>
            </ContentWrapper>
        </Container>
    );
}

export default Landing;