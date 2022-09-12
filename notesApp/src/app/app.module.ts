import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddButtonComponent } from './add-button/add-button.component';
import { FooterComponent } from './footer/footer.component';
import { ToggleDarkModeComponent } from './toggle-dark-mode/toggle-dark-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddButtonComponent,
    FooterComponent,
    ToggleDarkModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
