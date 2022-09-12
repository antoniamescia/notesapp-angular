import { WeatherService } from './services/weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoteComponent } from './note/note.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { NoteListComponent } from './note-list/note-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddButtonComponent } from './add-button/add-button.component';
import { FooterComponent } from './footer/footer.component';
import { ToggleDarkModeComponent } from './toggle-dark-mode/toggle-dark-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    WeatherComponent,
    NoteListComponent
    NavBarComponent,
    AddButtonComponent,
    FooterComponent,
    ToggleDarkModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
