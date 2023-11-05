import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { WorkExperienceComponent } from './work-experience/work-experience.component'; 
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FooterComponent } from './footer/footer.component';
 import { FooterModule } from '@coreui/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    WorkExperienceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    RouterModule,
    NgxPageScrollModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }