
import styled from 'styled-components';

export const PageCreateOrphanage = styled.div`
     display: flex;
`;

export const Main = styled.main`
   flex: 1;
`;

export const OrphanageForm = styled.form`
width: 700px;
    margin: 64px auto;
  
    background: ${props => props.theme.colors.backgroundForm};
    border: 1px solid ${props => props.theme.colors.borderForm};
    border-radius: 20px;
  
    padding: 64px 80px;
  
    overflow: hidden;

    fieldset {
    border: 0;
  }

  fieldset + fieldset {
    margin-top: 80px;
  }

  fieldset legend {
    width: 100%;
  
    font-size: 32px;
    line-height: 34px;
    color:${props => props.theme.colors.legendColor};
    font-weight: 700;
  
    border-bottom: 1px solid #D3E2E5;
    margin-bottom: 40px;
    padding-bottom: 24px;
  }

  button.confirm-button {
    margin-top: 64px;
  
    width: 100%;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: ${props => props.theme.colors.backgroundConfirmButton};
    border-radius: 20px;
    color: #FFFFFF;
    font-weight: 800;
  
    display: flex;
    justify-content: center;
    align-items: center;
  
    transition: background-color 0.2s;
  }

  button.confirm-button svg {
    margin-right: 16px;
  }

  /* button.confirm-button:hover {
    background: #36CF82;
  } */
  
`;

export const InputBlock = styled.div`
 margin-top: 24px;

 label {
    display: flex;
    color: ${props => props.theme.colors.labelColor};
    margin-bottom: 8px;
    line-height: 24px;
  }
  
  label span {
    font-size: 14px;
    color: #8FA7B3;
    margin-left: 24px;
    line-height: 24px;
  }

  input, textarea {
    width: 100%;
    background: ${props => props.theme.colors.textareaColor};
    border: 1px solid #D3E2E5;
    border-radius: 20px;
    outline: none;
    color: #FFFFFF;
  }

  input {
    height: 64px;
    padding: 0 16px;
  }

  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }

  .images-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
  }

  .images-container img {
    width: 100%;
    height: 96px;
    object-fit: cover;
    border-radius: 20px;
  }

  .images-container .new-image {
    height: 96px;
    background: ${props => props.theme.colors.textareaColor};
    border: 1px dashed ${props => props.theme.colors.borderDashedColor};
    border-radius: 20px;
    cursor: pointer;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input[type=file] {
    display: none;
  }

  .button-select {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .button-select button {
    height: 64px;
    background: ${props => props.theme.colors.textareaColor};
    border: 1px solid ${props => props.theme.colors.buttonSelectActiveBorder};
    color:  ${props => props.theme.colors.buttonSelectColor};
    cursor: pointer;
  }

  .button-select button.active {
    background: ${props => props.theme.colors.buttonSelectActiveColor};
    border: 1px solid #A1E9C5;
    color: ${props => props.theme.colors.buttonSelectTextActiveColor}; 
  }

  .button-select button:first-child {
    border-radius: 20px 0px 0px 20px;
  }

  .button-select button:last-child {
    border-radius: 0 20px 20px 0;
    border-left: 0;
  }

  
`;
