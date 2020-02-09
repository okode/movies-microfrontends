import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
