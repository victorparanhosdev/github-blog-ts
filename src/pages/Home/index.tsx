import { Profile, Content, FormSearch, Post } from "./styles"
import { Header } from "../../components/Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup, faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import { useBlog } from "../../hooks/useBlog";
import {useForm} from 'react-hook-form'

export function Home(){
    const {DataGit, fecthApi} = useBlog()
    const {register, handleSubmit, reset} = useForm()
    
    function searchForm(data: any){
        fecthApi(data.query)
        reset()
    }

    return(
        <>
            <Header/>
            <Content>
               {
                DataGit &&
                 <Profile>
                 <img src={DataGit.avatar_url} alt="" />
                 <div>
                     <div className="box-title">
                         <h1>{DataGit.name}</h1>
                       
                         <a target="_blank" href={DataGit.html_url}>Github <FontAwesomeIcon icon={faUpRightFromSquare}/></a>
                     </div>  

                     <p>{DataGit.bio}</p>
            
                     <ul>
                         <li><FontAwesomeIcon icon={faGithub}/> <span>{DataGit.login}</span></li>
                         <li><FontAwesomeIcon icon={faBuilding}/><span>{DataGit.company ? DataGit.company : 'Rocketseat'}</span></li>
                         <li><FontAwesomeIcon icon={faUserGroup}/><span>{DataGit.followers} Seguidores</span></li>
                     </ul>
                 </div>
             </Profile>
               }


                <section>
                    <FormSearch onSubmit={handleSubmit(searchForm)}>
                    <div>
                        <h2>Publicações</h2>
                        <span>6 publicações</span>
                    </div>

                    <div>
                        <input {...register("query")} type="text" placeholder="Buscar Counteúdo" />
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