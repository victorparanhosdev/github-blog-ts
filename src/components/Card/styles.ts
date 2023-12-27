import styled from "styled-components";
import { varWord } from "../../styles/varWord";

export const Container = styled.div`
    display: grid;
    grid-template-areas: 'title title info'
    'description description description';
    background: ${({theme})=> theme.COLORS['base-post']};
    border-radius: 10px;
    padding: 3.2rem;
    width: 100%;
    cursor: pointer;
   

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

    .paragrafo-p {
        grid-area: description;
        text-align: justify;
        ${varWord.fonts.TextM};
        margin-top: 2rem;
        color: ${({theme})=> theme.COLORS['base-text']};
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;

    }

`