import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'okode-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.scss']
})
export class MovieListPageComponent {

  readonly movies = [ 'Interstellar', 'Blade Runner', 'Star Wars', 'The Matrix', 'Aliens' ];

  constructor(private navCtrl: NavController) { }

  goToMovieDetail(movie: string) {
    this.navCtrl.navigateForward('movies/detail');
  }

}
