import { NgModule } from '@angular/core';
import { OkodeMoviesComponent } from './okode-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MovieListPageComponent } from './movie-list-page/movie-list-page.component';
import { MovieDetailPageComponent } from './movie-detail-page/movie-detail-page.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'list', component: MovieListPageComponent },
  { path: 'detail', component: MovieDetailPageComponent }
];

@NgModule({
  declarations: [
    OkodeMoviesComponent,
    MovieDetailComponent,
    MovieListPageComponent,
    MovieDetailPageComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    OkodeMoviesComponent,
    MovieDetailComponent,
    MovieListPageComponent,
    MovieDetailPageComponent
  ]
})
export class OkodeMoviesModule { }
