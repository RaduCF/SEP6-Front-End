import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './views/home/home.component';
import { MovieInfoComponent } from './views/movie-info/movie-info.component';
import { SearchedListComponent } from './views/searched-list/searched-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'movie-info', component: MovieInfoComponent },
  { path: 'searched-list', component: SearchedListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
