import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  constructor(private _http:HttpClient) {
    
   }
  
getNews(code , cat):Observable<any>
{
  return  this._http.get("https://newsapi.org/v2/top-headlines?country="+code+"&category="+cat+"&apiKey=d34d49ce3a794aca80d1ae821239b0eb")
  
}

getSources():Observable<any>
{
  return  this._http.get("https://newsapi.org/v2/sources?apiKey=d34d49ce3a794aca80d1ae821239b0eb")
  
}


  getClients():any
  {
    return [
      {name:'ahmed',age:25,salary:56465456},
      {name:'ali',age:25,salary:56465456},
      {name:'sayed',age:25,salary:56465456},
      {name:'mai',age:25,salary:56465456},
      {name:'ahmed',age:25,salary:56465456},
      
    ]
    
  }

}
