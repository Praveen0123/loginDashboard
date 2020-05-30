import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {
 username:string;
 password:string;
 constructor( private formBuilder: FormBuilder,
  private router: Router) { }

  ngOnInit() {
    this.username = (localStorage.getItem('storedashboarduser'));
    this.password= ( localStorage.getItem('storedashboardpass' ) );
  }
  
  //  user= JSON.parse( localStorage.getItem('storedashboarduser' ) );
  //  pass= JSON.parse( localStorage.getItem('storedashboardpass' ) );

//  window.document.getElementById("user").innerHTML = localStorage.getItem("storedashboarduser");
//   document.getElementById("pass").innerHTML = localStorage.getItem("storedashboardpass");

  logout(){
    localStorage.removeItem('credentials');
    this.router.navigate(["/login"]);
  }
}
