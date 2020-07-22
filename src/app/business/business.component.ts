import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service'
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {


  sources:object = []
  constructor( _news:NewsService) {

    _news.getSources().subscribe(data => this.sources = data.sources)
   }

  ngOnInit() {
  }

}
