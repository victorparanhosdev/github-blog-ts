import { Content } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faComment, faCalendarDay, faUpRightFromSquare, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns"
import { ptBR } from 'date-fns/locale/pt-BR';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Loader } from "../../components/Loader";
interface PropsPostData {
    html_url: string,
    user: { login: string },
    created_at: string,
    comments: string,
    title: string,
    body: string
}

export function Post() {

    const [data, setData] = useState<PropsPostData | null>(null)

    const { id } = useParams()

    const navigate = useNavigate()

    function handleBack() {
        navigate('/')
    }



    useEffect(() => {
        async function fetchIssues() {
            await api.get(`repos/victorparanhosdev/github-blog-ts/issues/${id} `).then(response => setData(response.data)).catch(error => console.log(error))
        }
        fetchIssues()

    }, [id])


    return (
        <>
            {data ? <Content>

                <div>
                    <div className="box-button">
                        <button onClick={handleBack}><FontAwesomeIcon icon={faAngleLeft} />voltar</button>
                        <a href={data.html_url} target="_blank">ver no github <FontAwesomeIcon icon={faUpRightFromSquare} /></a>
                    </div>
                    <h1>{data.title}</h1>
                    <ul>
                        <li><FontAwesomeIcon icon={faGithub} /> <span>{data.user.login}</span></li>
                        <li><FontAwesomeIcon icon={faCalendarDay} /><span>{formatDistanceToNow(new Date(data.created_at), { addSuffix: true, locale: ptBR })}</span></li>
                        <li><FontAwesomeIcon icon={faComment} /><span>{data.comments} comentários</span></li>
                    </ul>

                </div>

                <section>
                    <div className="firstdiv">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.body}</ReactMarkdown>
                    </div>

                </section>



            </Content> : <Loader/>}

        </>
    )
}