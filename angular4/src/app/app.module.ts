import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions  } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AllPokemonsComponent } from './components/all-pokemons/all-pokemons.component';
import { MyPokemonsComponent } from './components/my-pokemons/my-pokemons.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuardService]},
  {path: 'allPokemons', component: AllPokemonsComponent, canActivate: [AuthGuardService]},
  {path: 'myPokemons', component: MyPokemonsComponent, canActivate: [AuthGuardService]}
];

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NavbarComponent,
    AllPokemonsComponent,
    MyPokemonsComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [ApiService, AuthService, AuthGuardService,
    {
       provide: AuthHttp,
       useFactory: authHttpServiceFactory,
       deps: [Http, RequestOptions]
     }],
  bootstrap: [AppComponent],
  entryComponents: [ ModalWindowComponent ]
})
export class AppModule { }
