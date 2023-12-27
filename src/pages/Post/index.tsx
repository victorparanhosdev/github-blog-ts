import { Content } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faComment, faCalendarDay, faUpRightFromSquare, faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { Header } from "../../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useBlog } from "../../hooks/useBlog";
import { formatDistance } from "date-fns"
import {ptBR} from 'date-fns/locale/pt-BR';
import ReactMarkdown from 'react-markdown';

export function Post(){

    const {DataIssues} = useBlog()
    const {id} = useParams()
    const navigate = useNavigate()

    function handleBack(){
        navigate('/')
    }

    const FilterData = DataIssues.filter(data=> {
        return data.number === Number(id)
    })
    console.log(FilterData[0])
  

    return(
        <>
        <Header />
       {FilterData.length > 0 &&  <Content>

<div>
    <div className="box-button">
        <button onClick={handleBack}><FontAwesomeIcon icon={faAngleLeft} />voltar</button>
        <a href={FilterData[0].html_url} target="_blank">ver no github <FontAwesomeIcon icon={faUpRightFromSquare}/></a>
    </div>
    <h1>{FilterData[0].title}</h1>
    <ul>
        <li><FontAwesomeIcon icon={faGithub}/> <span>{FilterData[0].user.login}</span></li>
        <li><FontAwesomeIcon icon={faCalendarDay}/><span>{formatDistance(new Date(FilterData[0].created_at), new Date(), {addSuffix: true, locale: ptBR})}</span></li>
        <li><FontAwesomeIcon icon={faComment}/><span>{FilterData[0].comments} comentários</span></li>
    </ul>

</div>

<section>

    <div className="firstdiv">
        <p><ReactMarkdown>{FilterData[0].body}</ReactMarkdown></p>
    </div>



</section>



</Content>}

        </>
    )
}