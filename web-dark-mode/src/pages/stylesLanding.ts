import styled from 'styled-components';

import imgDark from '../images/landing-dark.svg';
import img from '../images/landing.svg';

export const Container = styled.div`
  
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.colors.primary};

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentWrapper = styled.div`
 position: relative;

width: 100%;
max-width: 1100px;

height: 100%;
max-height: 680px;

display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: space-between;

background: url(${props => props.theme.title === 'dark' ? imgDark : img}) no-repeat 80% center;

main {
    max-width: 350px;

    
}

main h1 {
font-size:  76px;
font-weight: 700;
line-height: 70px;

}

main p {
   margin-top: 40px;
   font-size: 24px;
   line-height: 34px;
    
    }
`;

export const Location = styled.div`
 position: absolute;
    right: 0;
    top: 0;

    font-size: 24px;
    line-height: 34px;
    display: flex;
    flex-direction: column;
   

    text-align:  right;

    strong {
        font-weight: 800;
    }

    /* justify-content: space-between */

`;
export const EnterApp = styled.div`
  position: absolute;
    right: 0;
    bottom: 0;

    width: 80px;
    height: 80px;
    background: ${props => props.theme.colors.button};
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;


`;