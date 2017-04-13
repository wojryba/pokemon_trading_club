import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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

  onSubmit() {
    this.api.login(this.form.value).subscribe(
      response => {
        let token = JSON.parse(response['_body']);
        token = token.token;
        localStorage.setItem('token', JSON.stringify(token));
        this._flashMessagesService.show('Log in succesfull!', { cssClass: 'alert-success' } );
      },
      error => console.log(error),
      () => {
        this.form.reset();
        setTimeout(() => { this.router.navigate(['/settings']); }, 1000);
      }
    );
  }

}
