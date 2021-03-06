import styled from "styled-components";

export const GreenButton = styled.button`
    background-color: #8A9828;
    border-radius: var(--general-border-radius);
    right: 0;
    left: auto;
    transition: .10s;
    content: '';
    width: fit;
    height: fit;
    bottom: 0;
`

export const RedButton = styled.button`     // Edited.
    background-color: #591420;
    width: auto;
    height: auto;
    padding: 4px 15px;
    border-radius: var(--general-border-radius);
    font-family: var(--main-font);
    font-size: 18px;
    text-align: center;
    color: white;
`

export const ButtonText = styled.label`
    font-family: 'Nunito Sans', sans-serif;;
    font-size: 18;
    text-align: center;
    color: white;
`
export const ButtonDisabled = styled.button`
    background-color: grey;
    right: 0;
    left: auto;
    transition: .3s;
    border-radius: var(--general-border-radius);
    content: '';
    width: fit;
    bottom: 0;
    height: fit;
`

export const ButtonSignup = styled.button`
    background-color: #8A9828;
    width: auto;
    height: auto;
    padding: 10px 50px;
    border-radius: var(--general-border-radius);
    font-family: var(--main-font);
    font-size: 36px;
    text-align: center;
    color: white;
`

export const TheGreenButton = styled.button`
    background-color: #8A9828;
    width: auto;
    height: auto;
    padding: 4px 15px;
    border-radius: var(--general-border-radius);
    font-family: var(--main-font);
    font-size: 18px;
    text-align: center;
    color: white;
`

export const SmallGreenButton = styled.button`
    background-color: #8A9828;
    width: auto;
    height: auto;
    max-width: 170px;
    padding: 4px 15px;
    border-radius: var(--general-border-radius);
    font-family: var(--main-font);
    font-size: 12px;
    text-align: center;
    color: white;
`

export const GreyButton = styled.button`
    background-color: grey;
    width: auto;
    height: auto;
    padding: 4px 15px;
    border-radius: var(--general-border-radius);
    font-family: var(--main-font);
    font-size: 18px;
    text-align: center;
    color: white;
`