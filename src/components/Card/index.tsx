import ReactMarkdown from "react-markdown"
import { Container } from "./styles"
import { formatDistance } from "date-fns"
import {ptBR} from 'date-fns/locale/pt-BR';



interface PropsCard {
    dataCard: any,
    handlePost: (value: number) => void
}


export function Card({dataCard, handlePost}: PropsCard) {
    const result = formatDistance(new Date(dataCard.created_at), new Date(), {addSuffix: true, locale: ptBR})

    return (
        <Container onClick={() => handlePost(dataCard.number)} key={String(dataCard.number)}>
            <h2>{dataCard.title}</h2>
            <span>{result}</span>
            <p className="paragrafo-p"><ReactMarkdown>{dataCard.body}</ReactMarkdown></p>
        </Container>
    )
}