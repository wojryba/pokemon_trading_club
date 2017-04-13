import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  profileInfo: any;
  UpdateForm: FormGroup;
  changeForm: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder, private api: ApiService,
  private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.UpdateForm = this.fb.group({
      city: [''],
      state: ['']
    });

    this.changeForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
    this.getInfo();
  }

  getInfo() {
    this.profileInfo = this.auth.useJwtHelper();
  }

  updateProfile() {
    this.api.updateProfile(this.UpdateForm.value).subscribe(
      response => {
        let token = JSON.parse(response['_body']);
        token = token.token;
        localStorage.setItem('token', JSON.stringify(token));
        this.getInfo();
        this._flashMessagesService.show('Profile Updated!', { cssClass: 'alert-success' } );
      },
      error => {
        console.log(error);
        this._flashMessagesService.show('Something went wrong!', { cssClass: 'alert-danger' });
      },
      () => this.UpdateForm.reset()
    );
  }

  changePassword() {
    this.api.changePassword(this.changeForm.value).subscribe(
      response => {
        const res = response['_body'];
        if (res === 'password changed') {
          this._flashMessagesService.show('Password changed!', { cssClass: 'alert-success' } );
        } else if (res === 'wrong password') {
          this._flashMessagesService.show('You inputed wrong password!', { cssClass: 'alert-danger' } );
        }

      },
      error => console.log(error),
      () => this.changeForm.reset()
    );
  }

}
