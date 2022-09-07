import { FormEvent, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import GitHubService from "../../services/GitHubService";

import { InputContainer, SearchResults, Wrapper } from "./styles";

interface User {
  username: string;
  avatar: string;
}

function Search() {
  const [search, setSearch] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  async function handleSearch(e: FormEvent) {
    e.preventDefault();

    try {
      setIsLoading(true);

      const { data } = await GitHubService.searchUsers(search);

      const parsedUsers: User[] = data.items.map(user => ({
        avatar: user.avatar_url,
        username: user.login,
      }));

      setUsers(parsedUsers);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Wrapper>
      <div className="container">
        <h1>
          Encontre usuários <br />
          do GitHub
        </h1>

        <InputContainer onSubmit={handleSearch}>
          <input 
            name="user"
            placeholder="Digite o nome do usuário"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <button type="submit">
            {isLoading ? 'Carregando...' : 'Pesquisar'}
          </button>
        </InputContainer>

        <SearchResults>
          {users.map(user => (
            <Link 
              key={user.username} 
              to={`/user/${user.username}`}
            >
              <img src={user.avatar} alt={user.username} />

              <div>
                <strong>{user.username}</strong>
              </div>

              <FiChevronRight size={24} strokeWidth={3  } />
            </Link>
          ))}
        </SearchResults>
      </div>
    </Wrapper>
  );
}

export default Search;