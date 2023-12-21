import styled from 'styled-components'
import { varWord } from '../../styles/varWord'

export const Container = styled.div`

`

export const Content = styled.main`

width: 100%;
max-width: 86.5rem;
margin: auto;
margin-top: -10rem;

`

export const Profile = styled.div`
background: ${({theme})=> theme.COLORS["base-profile"]};
border-radius: 1rem;
display: flex;
align-items: center;
gap: 3.2rem;
padding: 3.2rem 4rem;

img {
    min-width: 14.8rem;
    height: 14.8rem;
    border-radius: 0.8rem;
    object-fit: cover;


}

.box-title {
    display: flex;
    justify-content: space-between;

    h1 {
    ${varWord.fonts.TitleL}
    color: ${({theme})=> theme.COLORS['base-title']};
    }
    button {
        border: 0;
        background-color: transparent;
        display: flex;
        gap: 0.8rem;
        ${varWord.fonts.Link}
        color: ${({theme})=> theme.COLORS.blue};
        text-transform: uppercase;
    }
}
p {
    margin-top: 0.8rem;
    ${varWord.fonts.TextM}
    color: ${({theme})=> theme.COLORS['base-text']};

} 

ul {
    margin-top: 2.4rem;
    display: flex;
    align-items: center;
    gap: 2.4rem;

    li {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        svg {
            color: ${({theme})=> theme.COLORS['base-label']};
        }

        span {
            ${varWord.fonts.TextM};
            color: ${({theme})=> theme.COLORS['base-subtitle']};
        }


    }
}



`