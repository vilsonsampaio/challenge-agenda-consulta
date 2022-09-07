import { useEffect, useState } from "react";
import { FiChevronLeft, FiMapPin } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { useParams } from "react-router-dom";

import GitHubService from "../../services/GitHubService";

import { CenterWrapper, GoBack, UserInfoContainer, Wrapper } from "./styles";

interface UserInfo {
  avatar: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  company: string;
  location: string;
}

function User() {
  const { username } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    (async () => {
      try {
        if (!username) throw new Error('O nome do usuário é obrigatório!');

        setIsLoading(true);
        
        const { data } = await GitHubService.getUser(username);

        setUser({
          avatar: data.avatar_url,
          name: data.name,
          bio: data.bio,
          followers: data.followers,
          following: data.following,
          company: data.company,
          location: data.location,
        });
      } catch (error) {
        setUser(null);
        
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [username]);

  if (isLoading) {
    return (
      <CenterWrapper>
        <p>Carregando...</p>
      </CenterWrapper>
    );
  }

  if (user === null) {
    return (
      <CenterWrapper>
        <p>Usuário não encontrado!</p>

        <GoBack to='/'>
          Voltar
        </GoBack>
      </CenterWrapper>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        <GoBack to='/'>
          <FiChevronLeft />
          
          Voltar
        </GoBack>

        <UserInfoContainer>
          <div className="profile">
            <img src={user.avatar} alt={user.name} />

            <div>
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
            </div>
          </div>

          <div className="info">
            <div>
              <strong>Seguidores</strong>
              <span>{user.followers}</span>
            </div>

            <div>
              <strong>Seguindo</strong>
              <span>{user.following}</span>
            </div>

            <div>
              <strong><FaRegBuilding /></strong>
              <span>{user.company}</span>
            </div>

            <div>
              <strong><FiMapPin /></strong>
              <span>{user.location}</span>
            </div>
          </div>
        </UserInfoContainer>
      </div>
    </Wrapper>
  );
}

export default User;