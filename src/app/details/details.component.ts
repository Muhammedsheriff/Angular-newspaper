import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import {NewsService} from '../news.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  id:number;

  article= {};

  constructor(private _ActivatedRoute:ActivatedRoute , private _NewsService:NewsService) {

      this.id =parseInt( _ActivatedRoute.snapshot.paramMap.get('id'));
    
      _NewsService.getNews('fr','general').subscribe(data =>this.article = data.articles[this.id])
      

   }

  ngOnInit() {
  }

}
