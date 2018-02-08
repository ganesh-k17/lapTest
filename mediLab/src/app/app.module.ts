import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuPanelComponent } from './menuPanel.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { MedServicePanelComponent } from './med-service-panel/med-service-panel.component';
import { MedServiceMainpanelComponent } from './med-service-mainpanel/med-service-mainpanel.component';
import { MediAboutMainComponent } from './medi-about-main/medi-about-main.component';
import { DoctorcontetComponent } from './doctorcontet/doctorcontet.component';
import { MainPatientCommentPanelComponent } from './main-patient-comment-panel/main-patient-comment-panel.component';
import { PatientCommentComponent } from './patient-comment/patient-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPanelComponent,
    HomeComponent,
    HomeContentComponent,
    MedServicePanelComponent,
    MedServiceMainpanelComponent,
    MediAboutMainComponent,
    DoctorcontetComponent,
    MainPatientCommentPanelComponent,
    PatientCommentComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
