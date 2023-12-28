import styled from "styled-components";
import { varWord } from "../../styles/varWord";

export const Content = styled.main`

width: 100%;
max-width: 88.5rem;
margin: auto;
margin-top: -10rem;
padding-inline: 2rem;

> div {
    background: ${({theme})=> theme.COLORS["base-profile"]};
    border-radius: 10px;
    padding: 3.2rem;
    min-height: 16.8rem;


    .box-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    a, button {
        color:${({theme})=> theme.COLORS.blue};
        border: 0;
        background: none;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        ${varWord.fonts.Link};
        text-transform: uppercase;
        position: relative;

        
        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background: ${({theme})=> theme.COLORS.blue};
            position: absolute;
            bottom: -0.5rem;
            transform: scaleX(0);
            opacity: 0;
        }
        
        &:hover::after{
        
        transform: scaleX(1);
        opacity: 1;
        transition: transform 0.4s, opacity 0.3s;
    }
  
        svg {
            min-width: 1.2rem;
            height: 1.2rem;
        }

    }


    }


    h1 {
        ${varWord.fonts.TitleL};
        color:${({theme})=> theme.COLORS["base-title"]};
        margin-bottom: 0.8rem;

    
    }

    ul {
    margin-top: 2.4rem;
    display: flex;
    align-items: center;
    gap: 2.4rem;

    @media (max-width: 615px){
        flex-wrap: wrap;
    }
   

    li {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        svg {
            color: ${({theme})=> theme.COLORS['base-label']};
        }

        span {
            ${varWord.fonts.TextM};
            color: ${({theme})=> theme.COLORS["base-span"]};
        }


    }
}



}





section {
    padding: 4rem 3.2rem;
    @media (max-width: 425px){
        padding: 4rem 2rem;
    }
   

    .firstdiv {

        .paragrafo-p { 
        color: ${({theme})=> theme.COLORS["base-text"]};
        ${varWord.fonts.TextM};
        text-align: justify;
        
            a {
                text-decoration: none;
                color: ${({theme})=> theme.COLORS.blue};
            }
        }

    }



}


`