import { Container, Profile, Content } from "./styles"
import { Header } from "../../components/Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup, faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
export function Home(){
    return(
        <Container>
            <Header/>
            <Content>
                <Profile>
                    <img src="https://avatars.githubusercontent.com/u/96530960?s=400&u=3771af4af4d79a081f95cc34e827cadf6f480bab&v=4" alt="" />
                    <div>
                        <div className="box-title">
                            <h1>Victor Paranhos</h1>
                            <button>Github <FontAwesomeIcon icon={faUpRightFromSquare}/></button>
                        </div>

                        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
               
                        <ul>
                            <li><FontAwesomeIcon icon={faGithub}/> <span>victorparanhosdev</span></li>
                            <li><FontAwesomeIcon icon={faBuilding}/><span>Rocketseat</span></li>
                            <li><FontAwesomeIcon icon={faUserGroup}/><span>32 seguidores</span></li>
                        </ul>
                    </div>
                </Profile>




            </Content>
            
        </Container>
    )
}