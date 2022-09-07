import axios, { AxiosInstance } from "axios";

interface SearchUsersReponse {
  total_count: number;
  incomplete_results: boolean;
  items: Array<{
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean,
    score: number,
  }>
}

interface GetUserResponse {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean,
  name: string,
  company: string,
  blog: string,
  location: string,
  email: null,
  hireable: boolean,
  bio: string,
  twitter_username: null,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  created_at: string,
  updated_at: string,
}

class GitHubService {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://api.github.com',
    });
  }

  async searchUsers(user: string) {
    return this.httpClient.get<SearchUsersReponse>('search/users/', {
      params: {
        q: user,
        per_page: 5,
      }
    });
  }

  async getUser(user: string) {
    return this.httpClient.get<GetUserResponse>(`users/${user}`);
  }
}

export default new GitHubService(); 