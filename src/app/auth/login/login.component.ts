import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  isSubmitted: boolean = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private storage: StorageService,
    private auth: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ["mor_2314", Validators.required],
      password: ["83r5^_", Validators.required]
    })

  }

  get f() { return this.loginForm.controls; }

  ngOnInit() {
  }

  onSubmit() {
    let obj = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    // call api and ssend data to backend
    this.auth.LoginApi(obj).subscribe(
      (res: any) => {
        console.log(res);

        this.storage.setItem('token', res.token)
        this.router.navigate(['/main/home']);
      },
      (err: any) => {
        console.log('err in login', err);

      }
    )


  }
}
