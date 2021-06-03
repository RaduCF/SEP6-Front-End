import { TopMovieList } from './movie/movie.model';

export interface User {
  id?: number;
  uId: string;
  email: string;
}

export interface UserDB {
  id?: number;
  uId: string;
  username: string;
  topMovieList: TopMovieList;
}

export interface UserLocal {
  id?: number;
  uId: string;
  username: string;
}

export interface LoginUser {
  firebase_id: string;
  username: string;
}
