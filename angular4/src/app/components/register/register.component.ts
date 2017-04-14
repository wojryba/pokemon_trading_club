import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router,
  private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.form = this.fb.group({
      Name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      Email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      Password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.api.register(this.form.value).subscribe(
      response => {
        let token = JSON.parse(response['_body']);
        token = token.token;
        localStorage.setItem('token', JSON.stringify(token));
        this._flashMessagesService.show('Registration succesfull!', { cssClass: 'alert-success' } );
      },
      error => console.log(error),
      () => {
        this.form.reset();
        setTimeout(() => { this.router.navigate(['/allPokemons']); }, 1000);
      }
    );
  }

}
