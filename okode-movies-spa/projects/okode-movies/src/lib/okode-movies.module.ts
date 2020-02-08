import { NgModule } from '@angular/core';
import { OkodeMoviesComponent } from './okode-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListPageComponent } from './movie-list-page/movie-list-page.component';
import { MovieDetailPageComponent } from './movie-detail-page/movie-detail-page.component';



@NgModule({
  declarations: [OkodeMoviesComponent, MovieDetailComponent, MovieListPageComponent, MovieDetailPageComponent],
  imports: [
  ],
  exports: [OkodeMoviesComponent]
})
export class OkodeMoviesModule { }
