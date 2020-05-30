import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  users:any;
  id: any;
  data:any;
  // data: any[];
  // res: Array<any>
 
  
  constructor(private http: HttpClient, public activatedRoute: ActivatedRoute,public _userservice: NewserviceService) {
   
    
   }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id,"this.id");
     console.log(this.id,"praveen");
    this.getone();
    // let res = this.http.get("https://jsonplaceholder.typicode.com/posts?"+this.id);
    // res.subscribe((data)=>this.users =data);
  
    // console.log(this.users,"users")

  }
  getone(){
    this._userservice.getone(this.id).subscribe(res =>
      {
        console.log(this.id,"tiwari")
        this.data=res;
        this.users = this.data.filter(response => response.id == this.id);
        console.log(res);
      })
  }
  


}





