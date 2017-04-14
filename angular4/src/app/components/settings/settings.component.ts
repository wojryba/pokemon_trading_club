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

  // get current user profile, and output to the page
  getInfo() {
    this.profileInfo = this.auth.useJwtHelper();
  }

  // change current city and state of the user
  updateProfile() {
    this.api.updateProfile(this.UpdateForm.value).subscribe(
      response => {
        // response contains new token of the user
        let token = JSON.parse(response['_body']);
        token = token.token;
        // set it in place of the old one
        localStorage.setItem('token', JSON.stringify(token));
        this.getInfo();
        // show nice flash messages
        this._flashMessagesService.show('Profile Updated!', { cssClass: 'alert-success' } );
      },
      error => {
        console.log(error);
        // if error happens show error message
        this._flashMessagesService.show('Something went wrong!', { cssClass: 'alert-danger' });
      },
      () => this.UpdateForm.reset() // reset the filds of form to empty
    );
  }

  changePassword() {
    this.api.changePassword(this.changeForm.value).subscribe(
      response => {
        // parse the response of api
        const res = response['_body'];
        // if operation sucessfull alert sucess
        if (res === 'password changed') {
          this._flashMessagesService.show('Password changed!', { cssClass: 'alert-success' } );
        } else if (res === 'wrong password') {
          // if wrong password was inputed, say it
          this._flashMessagesService.show('You inputed wrong password!', { cssClass: 'alert-danger' } );
        }

      },
      error => console.log(error),
      () => this.changeForm.reset() // reset the filds of form to empty
    );
  }

}
