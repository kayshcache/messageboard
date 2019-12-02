import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { MessagesComponent } from './messages.component';

const appRoutes: Routes = [
  {path: '',         component: HomeComponent},
  {path: 'messages', component: MessagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
