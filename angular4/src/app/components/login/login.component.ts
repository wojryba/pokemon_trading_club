import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    this.form = this.fb.group({
      Email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      Password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.api.login(this.form.value).subscribe(
      response => console.log(response),
      error => console.log(error),
      () => console.log('completed')
    );
  }

}
