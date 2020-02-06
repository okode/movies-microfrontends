import { NgModule } from '@angular/core';
import { OkodeMoviesComponent } from './okode-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';



@NgModule({
  declarations: [OkodeMoviesComponent, MovieDetailComponent],
  imports: [
  ],
  exports: [OkodeMoviesComponent]
})
export class OkodeMoviesModule { }
