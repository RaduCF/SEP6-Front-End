import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../shared/services/auth/auth.service';
import { MovieService } from '../shared/services/movie/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  public searchStr: string;
  private userSub: Subscription;

  constructor(
    private authService: AuthService,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user$.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  searchMovies(): void {
    this.movieService.getMoviesByName(this.searchStr);
  }
}
