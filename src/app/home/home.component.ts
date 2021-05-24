import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public exploreMovies: string[] = [];
  public newMovies: string[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 6; i++) {
      this.exploreMovies.push(i + ' movie');
    }
    for (let i = 1; i < 5; i++) {
      this.newMovies.push(i + ' movie');
    }
  }

}
