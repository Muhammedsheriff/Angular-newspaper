import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {Router} from '@angular/router'

import * as $ from 'jquery'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsContainer:any[]=[];
  constructor( private _news:NewsService , private _Router:Router) { 
    this.changeCode('fr')
  }

  changeRoute(i)
  {
      this._Router.navigate(['details',i]);
  }

  contCode:string = 'fr'
  catCode:string = 'general'
  
  changeCode(code)
  {
      this.contCode = code;
    this._news.getNews(code,this.catCode).subscribe( data => this.newsContainer=data.articles)
  }

  changeCategory(cat)
  {
    this.catCode = cat;
    this._news.getNews(this.contCode,cat).subscribe( data => this.newsContainer=data.articles)
  }


  countryCodes = [
    {name:'Emirates',code:'ae'},
    {name:'United',code:'us'},
    {name:'France',code:'fr'},
    {name:'Egypt',code:'eg'},
    {name:'Russia',code:'ru'},
    {name:'Italy',code:'it'},
    {name:'Japan',code:'jp'},
    {name:'Poland',code:'pl'},

  ]

    categories = ["sports","business","general","technology","entertainment"]




  ngOnInit() {


    $(".test").slideUp(2000)
  }

}
