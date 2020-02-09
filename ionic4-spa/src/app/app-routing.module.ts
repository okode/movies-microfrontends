import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'detail', component: DetailComponent },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
