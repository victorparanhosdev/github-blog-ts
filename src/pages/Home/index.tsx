import { Profile, Content, FormSearch, Post } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faUserGroup,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useBlog } from "../../hooks/useBlog";
import { useNavigate } from "react-router-dom";

import { Card } from "../../components/Card";
import { useForm } from "react-hook-form";
import { Loader } from "../../components/Loader";

export function Home() {
  const { ProfileInfo, fetchSearchForm, DataIssues } =
    useBlog();
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();

  function handleForm(data: any) {
    fetchSearchForm(data.query);
    reset()
  }

  function handlePost(params: number) {
    navigate(`post/${params}`);
    fetchSearchForm("")
  }

  return (
    <>
      <Content>
        {ProfileInfo ? (
          <Profile>
            <img src={ProfileInfo.avatar_url} alt="" />
            <div>
              <div className="box-title">
                <h1>{ProfileInfo.name}</h1>

                <a target="_blank" href={ProfileInfo.html_url}>
                  Github <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>

              <p>{ProfileInfo.bio}</p>

              <ul>
                <li>
                  <FontAwesomeIcon icon={faGithub} />{" "}
                  <span>{ProfileInfo.login}</span>
                </li>
                {ProfileInfo.company ? (
                  <li>
                    <FontAwesomeIcon icon={faBuilding} />
                    <span>{ProfileInfo.company}</span>
                  </li>
                ) : null}
                <li>
                  <FontAwesomeIcon icon={faUserGroup} />
                  <span>{ProfileInfo.followers} seguidores</span>
                </li>
              </ul>
            </div>
          </Profile>
        ): <Loader/>}

        <section>
          <FormSearch onSubmit={handleSubmit(handleForm)}>
            <div>
              <h2>Publicações</h2>
              <span>{DataIssues.length} publicações</span>
            </div>

            <div>
              <input
                {...register("query")}
                type="text"
                placeholder="Buscar Counteúdo"
              />
            </div>

            <button
              style={{ display: "none", visibility: "hidden", opacity: 0 }}
              type="submit"
            >
              Buscar
            </button>
          </FormSearch>
        </section>

        <Post>
          {DataIssues.length > 0 &&
            DataIssues.map((dataCard) => {
              return (
                <Card
                  key={String(dataCard.number)}
                  handlePost={handlePost}
                  dataCard={dataCard}
                />
              );
            })}
        </Post>
      </Content>
    </>
  );
}
