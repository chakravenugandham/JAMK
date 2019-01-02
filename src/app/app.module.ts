import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { YoutubePlayerModule } from 'ngx-youtube-player';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { VideosComponent } from './videos/videos.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from './footer/footer.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import { RegistrationComponent } from './registration/registration.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import {
   MatNativeDateModule, MatSidenavModule, MatListModule, MatToolbarModule
} from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonHeaderComponent } from './common-header/common-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    NewsComponent,
    VideosComponent,
    AdvertisementComponent,
    FooterComponent,
    RegistrationComponent,
    CommonHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    YoutubePlayerModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatNativeDateModule, MatSidenavModule, MatListModule, MatToolbarModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatStepperModule,
    MatCardModule,
    MatRadioModule,
    FlexLayoutModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
