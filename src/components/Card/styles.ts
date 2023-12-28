import styled from "styled-components";
import { varWord } from "../../styles/varWord";

export const Container = styled.div`

    background: ${({theme})=> theme.COLORS['base-post']};
    border-radius: 10px;
    padding: 3.2rem;
    width: 100%;
    cursor: pointer;
    @media (max-width: 425px){
        padding: 3.2rem 2rem;
    }
   
    > div {
        display: flex;
        justify-content: space-between;
        column-gap: 1rem;
        @media (max-width: 425px){
            display: block;
            
   
        }
      

        h2 {
        grid-area: title;
        ${varWord.fonts.TitleM}
        color: ${({theme})=> theme.COLORS['base-title']};
        }
        span {
        grid-area: info;
        justify-self: end;
        ${varWord.fonts.TextS};
        color: ${({theme})=> theme.COLORS['base-span']};
        white-space: nowrap;
        }

    }

  

    .paragrafo-p {
        grid-area: description;
        text-align: justify;
        ${varWord.fonts.TextM};
        margin-top: 2rem;
        color: ${({theme})=> theme.COLORS['base-text']};
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        a {
                text-decoration: none;
                color: ${({theme})=> theme.COLORS.blue};
            }

    }

`