import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { MessagesComponent } from './messages.component';
import { RegisterComponent } from './register.component';

const appRoutes: Routes = [
  {path: '',         component: HomeComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'messages/:name', component: MessagesComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
