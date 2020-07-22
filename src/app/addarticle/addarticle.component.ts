import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {


  newArticles = [];
  test(x)
  {
    this.newArticles.push(x)
  }
  constructor() { }

  ngOnInit() {
  }

}
