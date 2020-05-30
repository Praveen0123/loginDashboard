import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 form:FormGroup
 
 get username() {return this.form.get('username');}
 
//  get email(){return this.form.get('email');}
 get password(){return this.form.get('password');}
 
 
  constructor(public router:Router, public fb:FormBuilder) { 
    this.form = this.fb.group({
      username:new FormControl('',[Validators.required]),
      //  email:new FormControl('',[Validators.required,Validators.email]),
       password:new FormControl('',[Validators.required,Validators.minLength(6),
        Validators.maxLength(24),]),
      
    });
  }
  
  ngOnInit() {
  }
 
  public onSubmit(values:Object):void {
    if (this.form.valid) {
  
      if (values['username'] == localStorage.getItem("storeuser") && values['password'] == localStorage.getItem("storepass"))
      {
        this.router.navigate(['/dashboardregister']);
       
        localStorage.setItem("loginUser",values['username']);
        console.log(values["username"],"ioo")
     
     
    }
    else
    alert("username and password not match");
  }

}
}
