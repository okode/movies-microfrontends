import { NgModule } from '@angular/core';
import { OkodeMoviesComponent } from './okode-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [OkodeMoviesComponent, MovieDetailComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [OkodeMoviesComponent, MovieDetailComponent]
})
export class OkodeMoviesModule { }
