import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) { }

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
    console.log(this.form.value);
    this.api.register(this.form.value).subscribe(
      response => console.log(response),
      error => console.log(error),
      () => console.log('completed')
    );
  }

}
