import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Movie, MovieSearchResult } from '../../models/database/movie/movie.model';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieSearchUrl = '/meddit/movieSubreddit/';  // URL to movie api
  private userId = 1;

  public popularMovies$: BehaviorSubject<MovieSearchResult[]> = new BehaviorSubject<MovieSearchResult[]>(null);
  public latestMovies$: BehaviorSubject<MovieSearchResult[]> = new BehaviorSubject<MovieSearchResult[]>(null);

  public searchedMovies$: BehaviorSubject<MovieSearchResult[]> = new BehaviorSubject<MovieSearchResult[]>(null);
  public movie$: BehaviorSubject<Movie> = new BehaviorSubject<Movie>(null);

  constructor(private http: HttpClient, private router: Router) {
    this.getMoviesByCategory('popular');
    this.getMoviesByCategory('latest');
  }

  public getMoviesByName(searchStr: string) {
    try {
      const resp = this.http.get<MovieSearchResult[]>(environment.apiConfig.api_url +
                          this.movieSearchUrl + 'search/' + searchStr)
        .subscribe((data: MovieSearchResult[]) => {
          this.searchedMovies$.next(data);
          console.log(this.searchedMovies$);
          this.router.navigate(['/searched-list']);
        });
      return resp;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public getMoviesByCategory(searchStr: string) {
    try {
      const resp = this.http.get<MovieSearchResult[]>(environment.apiConfig.api_local_url + 'search/category/' + searchStr)
        .subscribe((data: MovieSearchResult[]) => {
          if (searchStr === 'popular') {
            this.popularMovies$.next(data);
            console.log(this.popularMovies$);
          } else if (searchStr === 'latest') {
            this.latestMovies$.next(data);
            console.log(this.latestMovies$);
          }
        });
      return resp;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public getMoviesById(movieId: number) {
    try {
      const resp = this.http.get<Movie>(environment.apiConfig.api_local_url +
                this.movieSearchUrl + movieId + '?user_id=' + this.userId)
        .subscribe((data: Movie) => {
          this.movie$.next(data);
          console.log(this.movie$);
        });
      return resp;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
