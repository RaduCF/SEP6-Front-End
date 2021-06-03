import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { MovieInfoComponent } from './views/movie-info/movie-info.component';
import { HomeComponent } from './views/home/home.component';
import { MovieService } from './shared/services/movie/movie.service';
import { AuthService } from './shared/services/auth/auth.service';
import { SearchedListComponent } from './views/searched-list/searched-list.component';
import { TopMovieListComponent } from './views/top-movie-list/top-movie-list.component';
import { UserService } from './shared/services/auth/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    MovieInfoComponent,
    HomeComponent,
    SearchedListComponent,
    TopMovieListComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MovieService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
