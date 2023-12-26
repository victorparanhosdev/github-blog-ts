import { Profile, Content, FormSearch, Post } from "./styles"
import { Header } from "../../components/Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup, faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';

export function Home(){

    return(
        <>
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


                <section>
                    <FormSearch action="">
                    <div>
                        <h2>Publicações</h2>
                        <span>6 publicações</span>
                    </div>

                    <div>
                        <input type="text" placeholder="Buscar Counteúdo" />
                   </div>

                    <button style={{display: "none", visibility: "hidden", opacity: 0}} type="submit">Buscar</button>
                    </FormSearch>
                </section>

                <Post>

                    <div>
                        <h2>JavaScript data types and data structures</h2>
                        <span>Há 1 dia</span>
                        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in</p>
                    </div>
                    <div>
                        <h2>JavaScript data types and data structures</h2>
                        <span>Há 1 dia</span>
                        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in</p>
                    </div>
                    <div>
                        <h2>JavaScript data types and data structures</h2>
                        <span>Há 1 dia</span>
                        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in</p>
                    </div>

                    <div>
                        <h2>JavaScript data types and data structures</h2>
                        <span>Há 1 dia</span>
                        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in</p>
                    </div>

                    <div>
                        <h2>JavaScript data types and data structures</h2>
                        <span>Há 1 dia</span>
                        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in</p>
                    </div>


                </Post>




            </Content>
            
        </>
    )
}