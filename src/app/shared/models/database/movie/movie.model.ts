export interface MovieSearchResult {
  tmdb_id: number;
  title: string;
  overview: string;
  release_Date: Date;
  rating: number;
  poster_path: string;
  popularity: number;
}

export interface Movie {
  details: MovieDetails;
  images: MovieImage[];
  videos: MovieVideo[];
  cast: PersonDetails[];
  medditInfo: MedditInfo;
}

export interface MovieDetails {
  id: number;
  imdb_id: string;
  title: string;
  synopsis: string;
  poster_path: string;
  release_date: Date;
  runtime: number;
  status: string;
  rating: number;
}

export interface MovieImage {
  path: string;
  height: number;
  width: number;
  language: string;
}

export interface MovieVideo {
  key: string;
  name: string;
  site: string;
}

export interface PersonDetails {
  id: number;
  department: string;
  name: string;
  cast_id: number;
  character: string;
  profilePicture: string;
}

export interface MedditInfo {
  members: number;
  creationDate: Date;
}

export interface TopMovieList {
  user_id: number;
  subreddit1_id: number;
  subreddit2_id: number;
  subreddit3_id: number;
  subreddit4_id: number;
  subreddit5_id: number;
  subreddit6_id: number;
  subreddit7_id: number;
  subreddit8_id: number;
  subreddit9_id: number;
  subreddit10_id: number;
}

export interface TopMovie {
  title: string;
  rank: number;
}
