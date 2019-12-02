import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

// Apps own custom components
import { HomeComponent } from './home.component';
import { WebService } from './web.service';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav.component';

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, MatInputModule,
    AppRoutingModule, MatCardModule, FormsModule, MatToolbarModule,
    BrowserAnimationsModule, HttpClientModule, MatSnackBarModule,
  ],
  providers: [ WebService ],
  bootstrap: [AppComponent]
})

export class AppModule {}
