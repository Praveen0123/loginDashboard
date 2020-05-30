import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor( private http: HttpClient) { }
 
  getone(id){
    // return this.http.get("https://jsonplaceholder.typicode.com/users/"+id).pipe(map(res=>
    // {
    //   return res
    // }))
    console.log(id,`${id}`)
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=1`);
  }
  getob():Observable<any>{
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/users`);
  }
}


