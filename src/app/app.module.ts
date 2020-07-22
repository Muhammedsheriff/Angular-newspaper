import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';

import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { SearchTitlePipe } from './search-title.pipe'

import {RouterModule , Routes} from '@angular/router';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { DetailsComponent } from './details/details.component'

const appRoutes:Routes = 
[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'sports',component:SportsComponent},
  {path:'business',component:BusinessComponent},
  {path:'tech',component:TechnologyComponent},
  {path:'addarticle',component:AddarticleComponent},
  {path:'details/:id',component:DetailsComponent}
 

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BusinessComponent,
    SportsComponent,
    TechnologyComponent,
    SearchTitlePipe,
    AddarticleComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
