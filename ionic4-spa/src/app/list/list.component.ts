import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  readonly movies = [ 'Interstellar', 'Blade Runner', 'Star Wars', 'The Matrix', 'Aliens' ];

  constructor(private navCtrl: NavController) { }

  goToMovieDetail(movie: string) {
    this.navCtrl.navigateForward('movies/detail');
  }

}
