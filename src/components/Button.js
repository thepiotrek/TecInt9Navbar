import styled from "styled-components";

export const GreenButton = styled.button`
background-color: #8A9828;
border-radius: 12px;
height: 36px;
width: 115px;
border: 0px

  &:after {
    position: absolute;
    right: 0;
    left: auto;
    transition: .3s;
    content: '';
    width: 0;
    bottom: 0;
    height: 3px;
    background: #164ca7;
  }
  &:hover {
    cursor: pointer;
    &:after {
      width: 100%;
      left: 0;
    }
  }
}


`

export const RedButton = styled.button`
background-color: #591420;
height: 36px;
width: 115px;
border-radius: 12px;
border: 0px
&:after {
    position: absolute;
    right: 0;
    left: auto;
    transition: .3s;
    content: '';
    width: 0;
    bottom: 0;
    height: 3px;
    background: #164ca7;
  }
  &:hover {
    cursor: pointer;
    &:after {
      width: 100%;
      left: 0;
    }
  }
`

export const ButtonText = styled.label`
font: "STIXVariants";
font-size: 18;
text-align: center;
color: white;
`
export const ButtonDisabled = styled.button`
background-color: grey;
height: 36px;
width: 115px;
border-radius: 12px;
border: 0px
&:after {
    position: absolute;
    right: 0;
    left: auto;
    transition: .3s;
    content: '';
    width: 0;
    bottom: 0;
    height: 3px;
    background: #164ca7;
  }
  &:hover {
    cursor: pointer;
    &:after {
      width: 100%;
      left: 0;
    }
  }
`

