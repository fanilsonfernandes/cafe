import styled from "styled-components";

export const DeliveryContainer=styled.div`

margin-top: 4.5rem;

h1{
    padding-top: 2.5rem;
    color:${(props)=>props.theme['YellowDark']}; 
    font-family: Regular,sans-serif;
}

p{
    padding-top: 1rem;
    color:${(props)=>props.theme['Title']}; 
    font-family: Regular,sans-serif;
}

`;

export const ImagemContainer=styled.div`

display: flex;
margin-top: 2rem;
justify-content: space-between;
align-items: center;
gap: 2.5rem;

`;