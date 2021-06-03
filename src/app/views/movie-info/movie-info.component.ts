import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, PersonDetails } from '../../shared/models/database/movie/movie.model';
import { MovieService } from '../../shared/services/movie/movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  public movie: Movie = null;
  public castDirector: PersonDetails = null;
  public castProduction: PersonDetails = null;
  public castActing: PersonDetails[] = [];
  public threads = null;
  @ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.movieService.movie$.subscribe(m => {
      this.movie = m;
      if (this.movie && this.movie.cast) {
        m.cast.forEach(cast => {
          if (cast.department === 'Production') {
            this.castProduction = cast;
          } else if (cast.department === 'Directing') {
            this.castDirector = cast;
          } else if (cast.department === 'Acting' && this.castActing.length < 7) {
            this.castActing.push(cast);
          }
        });
      }
    });
  }

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

}
