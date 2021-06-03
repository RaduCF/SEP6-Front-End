import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie/movie.service';
import { MovieSearchResult, TopMovie } from '../../shared/models/database/movie/movie.model';
import { StatisticsService } from '../../shared/services/statistics/statistics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public popularMovies: MovieSearchResult[] = [];
  public newMovies: MovieSearchResult[] = [];
  public topMovies: TopMovie[] = [];
  public favMovies: TopMovie[] = [];

  constructor(private movieService: MovieService, private statisticsService: StatisticsService) { }

  ngOnInit() {
    this.movieService.popularMovies$.subscribe(m => {
      this.popularMovies = m;
    });

    this.movieService.latestMovies$.subscribe(m => {
      this.popularMovies = m;
    });

    this.statisticsService.searchedTopMovies$.subscribe(m => {
      this.topMovies = m;
      console.log(this.topMovies);
    });

    this.statisticsService.searchedFavMovies$.subscribe(m => {
      this.favMovies = m;
      console.log(this.favMovies);
    });
  }

}
