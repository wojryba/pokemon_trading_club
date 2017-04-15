import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy  {
  form: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router,
  private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.form = this.fb.group({
      Email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      Password: ['', Validators.required]
    });
  }

  ngOnDestroy() {
  }


  onSubmit() {
    this.api.login(this.form.value).subscribe(
      response => {
        let token = JSON.parse(response['_body']);
        token = token.token;
        localStorage.setItem('token', JSON.stringify(token));
        this._flashMessagesService.show('Log in succesfull!', { cssClass: 'alert-success' } );
      },
      error => {
        let message = JSON.parse(error['_body']);
        message = message.message;
        console.log(message);
        if (message === 'User not found!') {
          this._flashMessagesService.show('Wrong user name! Maybe you shoulde register?', { cssClass: 'alert-danger' });
        } else if (message === 'Wrong password!') {
          this._flashMessagesService.show('Wrong Password!', { cssClass: 'alert-danger' });
        }
      },
      () => {
        this.form.reset();
        setTimeout(() => { this.router.navigate(['']); }, 1000);
      }
    );
  }

}
