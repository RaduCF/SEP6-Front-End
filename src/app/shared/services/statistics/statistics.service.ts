import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TopMovie } from '../../models/database/movie/movie.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private statisticsSearchUrl = '/meddit/statistics/';  // URL to statistics api

  public searchedTopMovies$: BehaviorSubject<TopMovie[]> = new BehaviorSubject<TopMovie[]>(null);
  public searchedFavMovies$: BehaviorSubject<TopMovie[]> = new BehaviorSubject<TopMovie[]>(null);

  constructor(private http: HttpClient, private router: Router) {
    this.getTopMoviesByTrending();
    this.getFavMoviesByTrending();
  }

  public getTopMoviesByTrending() {
    try {
      const resp = this.http.get<TopMovie[]>(environment.apiConfig.api_local_url + this.statisticsSearchUrl + 'topTrending/0')
        .subscribe((data: TopMovie[]) => {
          this.searchedTopMovies$.next(data);
        });
      return resp;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public getFavMoviesByTrending() {
    try {
      const resp = this.http.get<TopMovie[]>(environment.apiConfig.api_local_url + this.statisticsSearchUrl + 'topFavorite/0')
        .subscribe((data: TopMovie[]) => {
          this.searchedFavMovies$.next(data);
        });
      return resp;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

}
