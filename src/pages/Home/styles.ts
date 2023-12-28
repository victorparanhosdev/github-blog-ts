import styled from 'styled-components'
import { varWord } from '../../styles/varWord'


export const Content = styled.main`

width: 100%;
max-width: 88.5rem;
margin: auto;
margin-top: -10rem;
padding-inline: 2rem;

`

export const Profile = styled.div`
background: ${({ theme }) => theme.COLORS["base-profile"]};
border-radius: 1rem;
display: flex;
align-items: center;
gap: 3.2rem;
padding: 3.2rem 4rem;
margin-bottom: 7.2rem;

@media (max-width: 585px){
    padding: 3.2rem 2rem;
    max-width: 40rem;
    margin-inline: auto;
    display: grid;
    place-items: center;

}

> div {
    width: 100%;
}

img {
    min-width: 14.8rem;
    height: 14.8rem;
    border-radius: 0.8rem;
    object-fit: cover;


}

.box-title {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    h1 {
    ${varWord.fonts.TitleL}
    color: ${({ theme }) => theme.COLORS['base-title']};
    }
    a {
        border: 0;
        background-color: transparent;
        display: flex;
        gap: 0.8rem;
        ${varWord.fonts.Link}
        color: ${({ theme }) => theme.COLORS.blue};
        text-transform: uppercase;
        position: relative;

        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background: ${({ theme }) => theme.COLORS.blue};
            position: absolute;
            bottom: 1rem;
            transform: scaleX(0);
            opacity: 0;
        }
  



        &:hover::after{
        
            transform: scaleX(1);
            opacity: 1;
            transition: transform 0.4s, opacity 0.3s;
        }
    }
}
p {
    margin-top: 0.8rem;
    ${varWord.fonts.TextM}
    color: ${({ theme }) => theme.COLORS['base-text']};

} 

ul {
    margin-top: 2.4rem;
    display: flex;
    align-items: center;
    gap: 0.6rem 2.4rem;
    flex-wrap: wrap;

    @media (max-width: 585px){
        display: grid;
        
    }


    li {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        svg {
            color: ${({ theme }) => theme.COLORS['base-label']};
        }

        span {
            ${varWord.fonts.TextM};
            color: ${({ theme }) => theme.COLORS['base-subtitle']};
            white-space: nowrap;
        }


    }
}



`

export const FormSearch = styled.form`

div:first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2rem;

    h2 {
        ${varWord.fonts.TitleS}
        color: ${({ theme }) => theme.COLORS['base-subtitle']};

    }

    span {
        ${varWord.fonts.TextS}
        color: ${({ theme }) => theme.COLORS['base-span']};
    }
}


div:nth-child(2) {
    width: 100%;
    padding: 1.2rem 1.6rem;
    border: 1px solid transparent;
    background:  ${({ theme }) => theme.COLORS['base-input']};
    border-radius: 6px;

    input {
        ${varWord.fonts.TextM}
        color: ${({ theme }) => theme.COLORS['base-text']};
        border: 0;
        outline: 0;
        background: transparent;
        width: 100%;


    }
    &::placeholder {
        ${varWord.fonts.TextM}
        color: ${({ theme }) => theme.COLORS['base-label']};
    }

    &:focus-within {
        border-color:  ${({ theme }) => theme.COLORS.blue}
    }


}

`

export const Post = styled.section`
margin-block: 4.8rem;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(27.6rem, 1fr));
justify-items: center;
gap: 3.2rem;





`