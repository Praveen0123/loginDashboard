import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
     
        this.router.navigate(['/login']);
       
        console.log(this.username.value,"hi");
        console.log(this.password.value,"iii");
        localStorage.setItem('storeuser',(this.username.value));
        localStorage.setItem('storepass',(this.password.value));
     
    
  }

  }
}
