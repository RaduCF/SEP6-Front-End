import { MovieSearchResult } from '../../shared/models/database/movie/movie.model';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searched-list',
  templateUrl: './searched-list.component.html',
  styleUrls: ['./searched-list.component.scss']
})
export class SearchedListComponent implements OnInit {
  public movies: MovieSearchResult[];

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.movieService.searchedMovies$.subscribe(m => {
      this.movies = m;
      console.log(this.movies);

      if (!m) {
        this.router.navigate(['/home']);
      }
    });
  }

  public showMovieInfo(movie: MovieSearchResult) {
    this.movieService.getMoviesById(movie.tmdb_id);
    this.router.navigate(['/movie-info']);
  }

}
