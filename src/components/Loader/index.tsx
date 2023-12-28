import {Container} from './styles.ts'
import { BallTriangle} from "react-loader-spinner";


export function Loader(){
    return(
        <Container>
        <BallTriangle
    
        radius={5}
        color="#3294F8"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
        </Container>
    )
}