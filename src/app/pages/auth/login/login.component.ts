import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  isLogin: boolean = false;
  token : string = '';


  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiserviceService,
    private router: Router,
    public toster : ToastrService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }


  get formControls() {
    return this.loginForm.controls;
  }


  loginFormSubmit() {
    let dbEmail = 'super_admin@yopmail.com';
    let dbPass = 'Mind@123';
    let url = ''
    if (this.loginForm.valid) {
      if (dbEmail === this.loginForm.value.userEmail && dbPass === this.loginForm.value.userPassword) {
        this.isLogin = true;
        this.token = 'abcdefghijklmnop123456789abcdefghihjlkljhkjdsfhkj';
        let data = {
          uEmail: this.loginForm.value.userEmail,
          uPass: this.loginForm.value.userPassword,
          isLogin: this.isLogin,
          token : this.token
        }
        this.toster.success('Success' ,'Login Successfull' , {
          timeOut: 3000,
        });
        localStorage.setItem('userData', JSON.stringify(data));
        this.router.navigate(['/home/dashboard'])
      }
      else {
        this.isLogin = false;
        this.toster.error('Error' ,'Email & Password not found' , {
          timeOut: 3000,
        });
        console.log("email password not found")
      }
    }
    else {
      if (!this.loginForm.value.userEmail && !this.loginForm.value.userPassword) {
        this.isLogin = false
        this.toster.error('Error' ,'Email & Password are required' , {
          timeOut: 3000,
        });
        console.log("Email and password are required")
      }

      else if (!this.loginForm.value.userEmail) {
        this.isLogin = false
        this.toster.error('Error' ,'Email is required' , {
          timeOut: 3000,
        });
        console.log("Email is required")
      }

      else {
        this.isLogin = false
        this.toster.error('Error' ,'Password is required' , {
          timeOut: 3000,
        });
        console.log("password is required");
      }
    }


  }

}
