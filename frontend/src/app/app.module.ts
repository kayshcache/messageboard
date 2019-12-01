import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { WebService } from './web.service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, NewMessageComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, MatInputModule,
    AppRoutingModule, MatCardModule, FormsModule,
    BrowserAnimationsModule, HttpClientModule,
  ],
  providers: [ WebService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
