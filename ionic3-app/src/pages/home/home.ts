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
    this.iab.create('https://www.google.com', '_blank',{
      hidenavigationbuttons: 'yes',
      hideurlbar: 'yes',
      location: 'no',
      hidden: 'yes',
      footer: 'no',
      toolbar: 'no',
      hidespinner: 'yes'
    }).show();
  }

}
