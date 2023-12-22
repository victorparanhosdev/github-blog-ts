import { Content } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faComment, faCalendarDay, faUpRightFromSquare, faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { Header } from "../../components/Header";

export function Post(){
    return(
        <>
        <Header />
        <Content>


            <div>
                <div className="box-button">
                    <button><FontAwesomeIcon icon={faAngleLeft} />voltar</button>
                    <button>ver no github <FontAwesomeIcon icon={faUpRightFromSquare}/></button>
                </div>
                <h1>JavaScript data types and data structures</h1>
                <ul>
                    <li><FontAwesomeIcon icon={faGithub}/> <span>victorparanhosdev</span></li>
                    <li><FontAwesomeIcon icon={faCalendarDay}/><span>Há 1 dia</span></li>
                    <li><FontAwesomeIcon icon={faComment}/><span>5 comentários</span></li>
                </ul>

            </div>

            <section>

                <div className="firstdiv">
                    <p><strong>Programming languages all have built-in data structures, but these often differ from one language to another.</strong>This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                    </p>
                    <h3>Dynamic typing</h3>
                    <p>JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:</p>
                </div>

                <div>
                    <pre>
                        <code>
                    let foo = 42;   // foo is now a number
                    foo = 'bar';    // foo is now a string
                    foo = true;     // foo is now a boolean    
                        </code>
                    </pre>
                </div>

            </section>



        </Content>

        </>
    )
}