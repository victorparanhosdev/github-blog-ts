import { Container } from "./styles";
import Logo from '../../assets/logo.svg'
import EffectLeft from '../../assets/effectleft.svg'
import EffectRight from '../../assets/effectright.svg'
import { memo } from "react";

function HeaderComponent(){
    return(
        <Container>
            <img className="imgleft" src={EffectLeft} alt="" />

                <div>
                    <img src={Logo} alt="" />
                    <h1>GitHub Blog</h1>
                </div>
                

            <img className="imgright" src={EffectRight} alt="" />
        </Container>
    )
}

export const Header = memo(HeaderComponent)