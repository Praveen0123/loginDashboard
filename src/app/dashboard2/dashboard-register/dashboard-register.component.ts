import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-register',
  templateUrl: './dashboard-register.component.html',
  styleUrls: ['./dashboard-register.component.css']
})
export class DashboardRegisterComponent implements OnInit {

  form: FormGroup;
  loading = false;
 
 
  get username() {return this.form.get('username');}
 
  //  get email(){return this.form.get('email');}
   get password(){return this.form.get('password');}
  constructor( private formBuilder: FormBuilder,
    private router: Router) { }

    ngOnInit() {
      this.form = this.formBuilder.group({
         
        username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  public onSubmit(form:any) {
    if (this.form.valid) {
     
        this.router.navigate(['/dashboardlist']);
       
        console.log(this.username.value,"hi");
        console.log(this.password.value,"iii");
        localStorage.setItem('storedashboarduser',(this.username.value));
        localStorage.setItem('storedashboardpass',(this.password.value));
     
    
  }

  }
  logout(){
    localStorage.removeItem('credentials');
    this.router.navigate(["/login"]);
  }
}

