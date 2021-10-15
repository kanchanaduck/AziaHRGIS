import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomFormsModule } from 'ngx-custom-validators';
import { FormWizardModule } from 'angular2-wizard';
import { HttpClientModule } from '@angular/common/http';
import { TinymceModule } from 'angular2-tinymce';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },  
  { path: 'profile', component: ProfileComponent },
]

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    PerfectScrollbarModule,
    ChartsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    ColorPickerModule, 
    // Select2Module,
    NgSelectModule,
    CustomFormsModule,
    FormWizardModule,
    HttpClientModule,
    TinymceModule.withConfig({
      skin_url: '../assets/tinymce/skins/lightgray'
   }),
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class GeneralPagesModule { }
