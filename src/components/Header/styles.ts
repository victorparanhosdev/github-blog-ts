import styled from "styled-components";

export const Container = styled.header`
background: ${({theme})=> theme.COLORS["base-profile"]};
width: 100%;
min-height: 29.6rem;
display: grid;
position: relative;

z-index: -1;
.imgleft {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}

.imgright {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

}
&::after{
        content: '';
        display: block;
        width: 50rem;
        height: 0px;
        background: transparent;
        place-self: center;
        box-shadow: 0rem 0rem 25rem 3rem #14589C;
    }

> div{
    display: grid;
    justify-items: center;
    max-width: 14.8rem;
    gap: 2rem;
    margin: auto;

    img {
    min-width: 4.5rem;
    height: 4rem;

    }

    h1 {
    font-family: "Coda", sans-serif;
    text-transform: uppercase;
    font-size: 2.4rem;
    color: ${({theme})=> theme.COLORS.blue};
    line-height: 1.6;
    }
    
  


}

`