import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private iab: InAppBrowser) {

  }

  openInAppBrowser() {
    this.iab.create('https://www.google.com', '_blank').show();
  }

}
