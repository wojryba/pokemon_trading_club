webpackJsonp([1,4],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 115;


/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(131);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = (function () {
    function ApiService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
    }
    ApiService.prototype.register = function (user) {
        var data = JSON.stringify({ user: user });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post('api/register', data, options);
    };
    ApiService.prototype.login = function (user) {
        var data = JSON.stringify({ user: user });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post('api/login', data, options);
    };
    ApiService.prototype.updateProfile = function (profile) {
        var data = JSON.stringify({ profile: profile });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.authHttp.post('api/profile', data, options);
    };
    ApiService.prototype.changePassword = function (pass) {
        var data = JSON.stringify({ pass: pass });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.authHttp.post('api/password', data, options);
    };
    ApiService.prototype.addPokemon = function (pokemon) {
        var data = JSON.stringify({ pokemon: pokemon });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.authHttp.post('api/addPokemon', data, options);
    };
    ApiService.prototype.getMyPokemons = function () {
        return this.authHttp.get('api/getMyPokemons');
    };
    ApiService.prototype.deletePokemon = function (i) {
        var data = JSON.stringify({ i: i });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.authHttp.post('api/deletePokemon', data, options);
    };
    ApiService.prototype.getPokemons = function () {
        return this.authHttp.get('api/getAll');
    };
    ApiService.prototype.exchangePokemons = function (exchange) {
        var data = JSON.stringify({ exchange: exchange });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.authHttp.post('api/exchangePokemon', data, options);
    };
    ApiService.prototype.getTradeRequests = function () {
        return this.authHttp.get('api/getRequests');
    };
    ApiService.prototype.rejectYours = function (request) {
        var data = JSON.stringify({ request: request });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.authHttp.post('api/rejectYours', data, options);
    };
    ApiService.prototype.rejectOther = function (request) {
        var data = JSON.stringify({ request: request });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.authHttp.post('api/rejectOther', data, options);
    };
    ApiService.prototype.acceptRequest = function (request) {
        var data = JSON.stringify({ request: request });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.authHttp.post('api/acceptRequest', data, options);
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"]) === "function" && _b || Object])
], ApiService);

var _a, _b;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(212),
        styles: [__webpack_require__(201)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_modal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_modal_plugins_bootstrap__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_all_pokemons_all_pokemons_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_my_pokemons_my_pokemons_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_settings_settings_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_navbar_navbar_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_modal_window_modal_window_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_trade_requests_trade_requests_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_api_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__ = __webpack_require__(130);
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_15__components_settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'allPokemons', component: __WEBPACK_IMPORTED_MODULE_13__components_all_pokemons_all_pokemons_component__["a" /* AllPokemonsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'myPokemons', component: __WEBPACK_IMPORTED_MODULE_14__components_my_pokemons_my_pokemons_component__["a" /* MyPokemonsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */]] }
];
function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthConfig"](), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_all_pokemons_all_pokemons_component__["a" /* AllPokemonsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_my_pokemons_my_pokemons_component__["a" /* MyPokemonsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_modal_window_modal_window_component__["a" /* ModalWindowComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_trade_requests_trade_requests_component__["a" /* TradeRequestsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_7_angular2_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_angular2_modal_plugins_bootstrap__["a" /* BootstrapModalModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_20__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]]
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_17__components_modal_window_modal_window_component__["a" /* ModalWindowComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_window_modal_window_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trade_requests_trade_requests_component__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPokemonsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AllPokemonsComponent = (function () {
    function AllPokemonsComponent(api, auth, overlay, vcRef, modal) {
        this.api = api;
        this.auth = auth;
        this.modal = modal;
        overlay.defaultViewContainer = vcRef;
    }
    AllPokemonsComponent.prototype.ngOnInit = function () {
        this.getPokemons();
    };
    AllPokemonsComponent.prototype.getPokemons = function () {
        var _this = this;
        var id = this.auth.useJwtHelper();
        id = id._id;
        this.api.getPokemons().subscribe(function (response) {
            var poke = JSON.parse(response['_body']);
            console.log(poke);
            poke = poke.filter(function (val) {
                if (val && val._id !== id) {
                    return val;
                }
            });
            _this.pokemons = poke;
        }, function (error) { return console.log(error); }, function () { return console.log('completed'); });
    };
    AllPokemonsComponent.prototype.exchangePokemon = function (i, j) {
        var _this = this;
        var exchange = {
            wanted: {
                user: this.pokemons[i]._id,
                pokemonName: this.pokemons[i].pokemons[j].name,
                pokemonIndex: j,
                pokemonImg: this.pokemons[i].pokemons[j].sprites.front_default
            }
        };
        localStorage.setItem('exchange', JSON.stringify(exchange));
        this.modal.open(__WEBPACK_IMPORTED_MODULE_4__modal_window_modal_window_component__["a" /* ModalWindowComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_modal__["n" /* overlayConfigFactory */])({ num1: 2, num2: 3 }, __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */])).then(function (dialog) {
            dialog.onDestroy.subscribe(function (source) { return _this.TradeComponent.getRequests(); });
        });
    };
    return AllPokemonsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__trade_requests_trade_requests_component__["a" /* TradeRequestsComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__trade_requests_trade_requests_component__["a" /* TradeRequestsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__trade_requests_trade_requests_component__["a" /* TradeRequestsComponent */]) === "function" && _a || Object)
], AllPokemonsComponent.prototype, "TradeComponent", void 0);
AllPokemonsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-all-pokemons',
        template: __webpack_require__(213),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal__["g" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_modal__["g" /* Overlay */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["c" /* Modal */]) === "function" && _f || Object])
], AllPokemonsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=all-pokemons.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(214),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(fb, api, router, _flashMessagesService) {
        this.fb = fb;
        this.api = api;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            Email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].email
                ])],
            Password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.api.login(this.form.value).subscribe(function (response) {
            var token = JSON.parse(response['_body']);
            token = token.token;
            localStorage.setItem('token', JSON.stringify(token));
            _this._flashMessagesService.show('Log in succesfull!', { cssClass: 'alert-success' });
        }, function (error) {
            var message = JSON.parse(error['_body']);
            message = message.message;
            console.log(message);
            if (message === 'User not found!') {
                _this._flashMessagesService.show('Wrong user name! Maybe you shoulde register?', { cssClass: 'alert-danger' });
            }
            else if (message === 'Wrong password!') {
                _this._flashMessagesService.show('Wrong Password!', { cssClass: 'alert-danger' });
            }
        }, function () {
            _this.form.reset();
            setTimeout(function () { _this.router.navigate(['/allPokemons']); }, 1000);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(215),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPokemonsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyPokemonsComponent = (function () {
    function MyPokemonsComponent(_flashMessagesService, fb, api) {
        this._flashMessagesService = _flashMessagesService;
        this.fb = fb;
        this.api = api;
        this.disable = false;
    }
    MyPokemonsComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
        this.getMyPokemons();
        this.disable = false;
    };
    MyPokemonsComponent.prototype.getMyPokemons = function () {
        var _this = this;
        console.log('traded');
        this.api.getMyPokemons().subscribe(function (response) {
            _this.pokemons = JSON.parse(response['_body']);
        }, function (error) { return console.log(error); }, function () { return console.log('completed'); });
    };
    MyPokemonsComponent.prototype.addPokemon = function () {
        var _this = this;
        this.disable = true;
        this.api.addPokemon(this.form.value).subscribe(function (response) {
            var pokemon = JSON.parse(response['_body']);
            _this.pokemons = pokemon;
        }, function (error) {
            console.log(error);
            _this._flashMessagesService.show('Wrong Pokemon Name!', { cssClass: 'alert-danger' });
            _this.disable = false;
            _this.form.reset();
        }, function () {
            console.log('completed');
            _this.disable = false;
            _this.form.reset();
        });
    };
    MyPokemonsComponent.prototype.deletePokemon = function (i) {
        var _this = this;
        this.api.deletePokemon(i).subscribe(function (response) {
            _this.pokemons = JSON.parse(response['_body']);
        }, function (error) { return console.log(error); }, function () { return console.log('completed'); });
    };
    return MyPokemonsComponent;
}());
MyPokemonsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-my-pokemons',
        template: __webpack_require__(217),
        styles: [__webpack_require__(206)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _c || Object])
], MyPokemonsComponent);

var _a, _b, _c;
//# sourceMappingURL=my-pokemons.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logOut = function () {
        localStorage.removeItem('token');
        this.router.navigate(['']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(218),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(fb, api, router, _flashMessagesService) {
        this.fb = fb;
        this.api = api;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            Name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)
                ])],
            Email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].email
                ])],
            Password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.api.register(this.form.value).subscribe(function (response) {
            var token = JSON.parse(response['_body']);
            token = token.token;
            localStorage.setItem('token', JSON.stringify(token));
            _this._flashMessagesService.show('Registration succesfull!', { cssClass: 'alert-success' });
        }, function (error) { return console.log(error); }, function () {
            _this.form.reset();
            setTimeout(function () { _this.router.navigate(['/allPokemons']); }, 1000);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(219),
        styles: [__webpack_require__(208)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = (function () {
    function SettingsComponent(auth, fb, api, _flashMessagesService) {
        this.auth = auth;
        this.fb = fb;
        this.api = api;
        this._flashMessagesService = _flashMessagesService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.UpdateForm = this.fb.group({
            city: [''],
            state: ['']
        });
        this.changeForm = this.fb.group({
            currentPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            newPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]
        });
        this.getInfo();
    };
    // get current user profile, and output to the page
    SettingsComponent.prototype.getInfo = function () {
        this.profileInfo = this.auth.useJwtHelper();
    };
    // change current city and state of the user
    SettingsComponent.prototype.updateProfile = function () {
        var _this = this;
        this.api.updateProfile(this.UpdateForm.value).subscribe(function (response) {
            // response contains new token of the user
            var token = JSON.parse(response['_body']);
            token = token.token;
            // set it in place of the old one
            localStorage.setItem('token', JSON.stringify(token));
            _this.getInfo();
            // show nice flash messages
            _this._flashMessagesService.show('Profile Updated!', { cssClass: 'alert-success' });
        }, function (error) {
            console.log(error);
            // if error happens show error message
            _this._flashMessagesService.show('Something went wrong!', { cssClass: 'alert-danger' });
        }, function () { return _this.UpdateForm.reset(); } // reset the filds of form to empty
        );
    };
    SettingsComponent.prototype.changePassword = function () {
        var _this = this;
        this.api.changePassword(this.changeForm.value).subscribe(function (response) {
            // parse the response of api
            var res = response['_body'];
            // if operation sucessfull alert sucess
            if (res === 'password changed') {
                _this._flashMessagesService.show('Password changed!', { cssClass: 'alert-success' });
            }
            else if (res === 'wrong password') {
                // if wrong password was inputed, say it
                _this._flashMessagesService.show('You inputed wrong password!', { cssClass: 'alert-danger' });
            }
        }, function (error) { return console.log(error); }, function () { return _this.changeForm.reset(); } // reset the filds of form to empty
        );
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(220),
        styles: [__webpack_require__(209)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], SettingsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".container {\n  text-align: left;\n}\n\n.form-group {\n  font-size: 1.2em;\n}\n\n.control-label {\n  min-height: 126px;\n  width: 35%;\n  margin-bottom: 0px;\n}\n\n.btn {\n  width: 16%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".bu {\n  text-align: center;\n}\n\n.pokemon {\n  margin:auto;\n  display: inline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".addPokemon {\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".navbar img {\n  height: 50px;\n  width: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".container {\n  text-align: left;\n}\n\n.form-group {\n  font-size: 1.4em;\n}\n\n.control-label {\n  min-height: 103px;\n  width: 35%;\n  margin-bottom: 0px;\n}\n\n.btn {\n  width: 16%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".container {\n  text-align: left;\n}\n\n.Ilabel {\n  width: 80%;\n  min-height: 90px;\n  margin-bottom: 0;\n}\n\n.Ulabel {\n  width: 80%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".requests {\n  border: 1px solid  #ffccb3;\n  border-radius: 5%;\n  padding: 2%;\n  width: 80%;\n  height: auto;\n  margin: auto;\n}\n\n.request {\n  border: 1px solid  #ffccb3;\n  border-radius: 5%;\n  overflow: hidden;\n  width: 80%;\n  margin: auto;\n  margin-bottom: 2%;\n}\n\n.left {\n  float: left;\n  display: block;\n  margin-left: 20%;\n}\n\n.right {\n  float: right;\n  display: block;\n  margin-right: 20%;\n}\n\n@media (max-width: 480px) {\n  .btn {\n    margin: 2%;\n  }\n\n  .requests {\n    margin: auto;\n    width: 100%\n  }\n\n  .left {\n    float: none;\n    margin: auto;\n    border-bottom: dotted 1px #ffccb3;\n  }\n\n  .right {\n    float: none;\n    margin: auto;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <app-trade-requests (traded)=\"getPokemons($evet)\"></app-trade-requests>\n  </div>\n  <h1>All of the pokomons (exept yours...):</h1>\n  <div class=\"pokemons\">\n    <div class=\"pokemonWrapper\" *ngFor=\"let pokemon of pokemons, let i = index\">\n      <h4>User: {{pokemon.name}}</h4>\n      <div class=\"pokemon\" *ngFor=\"let poke of pokemon.pokemons, let j = index\">\n        <i (click)=\"exchangePokemon(i, j)\" class=\"fa fa-exchange\" aria-hidden=\"true\"></i>\n        <img src=\"{{poke.sprites.front_default}}\" alt=\"{{poke.name}}\" />\n        <h5>{{poke.name}}</h5>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n    <h2>This site allows you to:</h2>\n    <h4>See all of your pokemons</h4>\n    <h4>See all pokemons of others</h4>\n    <h4>Request to trade pokamon with other user</h4>\n    <h4>Manage requests from your dashboard</h4>\n    <h4>To do all that, you need to register/login first!</h4>\n    <h4>So go ahead and do that!</h4>\n    <h4>Oh.. and you can also chagne your password and some settings!</h4>\n  </div>\n  <div class=\"info\">\n    <img src=\"../../../assets/home.png\" />\n  </div>\n</div>\n"

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"leftForms\">\n    <flash-messages></flash-messages>\n    <form class=\"form-group\" novalidate [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form)\">\n      <label class=\"control-label\">Email:\n        <input class=\"form-control\" type=\"text\" formControlName=\"Email\" />\n        <div *ngIf=\"form.get('Email').touched\">\n          <p *ngIf=\"form.get('Email').hasError('email')\">Email needs to be a valid email adress!</p>\n          <p *ngIf=\"form.get('Email').hasError('required')\">Email is required!</p>\n        </div>\n      </label>\n      <br />\n\n      <label class=\"control-label\">Password:\n        <input class=\"form-control\" type=\"text\" formControlName=\"Password\" />\n        <div *ngIf=\"form.get('Password').touched\">\n          <p *ngIf=\"form.get('Password').hasError('required')\">Password is required!</p>\n        </div>\n      </label>\n      <br />\n\n      <button class=\"btn btn-primary\" [disabled]=\"form.invalid\" type=\"submit\">Log In</button>\n      <button class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</button>\n    </form>\n  </div>\n\n  <div class=\"Hide\">\n    <h1>This is login form.</h1>\n    <h3>You need to log in to trade pokemons!</h3>\n    <h3>If you're not registered yet,</h3>\n    <h3>Click the register button!</h3>\n  </div>\n\n  <img class=\"downImg\" src=\"../../../assets/login.png\" />\n</div>\n"

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<div class=\"bu\">\n  <div class=\"modal-header\">\n    <h1>Which pokemon you want to trade for?</h1>\n  </div>\n\n  <div class=\"pokemons\">\n    <div *ngFor=\"let pokemon of pokemons, let i = index\">\n      <div class=\"pokomon\">\n        <img (click)=\"choosePokemon(i)\" src=\"{{pokemon.sprites.front_default}}\" alt=\"{{pokemon.name}}\" />\n        <h4>{{pokemon.name}}</h4>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <app-trade-requests (traded)=\"getMyPokemons($evet)\"></app-trade-requests>\n  </div>\n  <div class=\"addPokemon\">\n    <form novalidate [formGroup]=\"form\" (ngSubmit)=\"addPokemon(form)\">\n      <label>Add a new Pokemon!\n        <input placeholder=\"Enter Pokemon name!\" class=\"form-control\" type=\"text\" formControlName=\"name\" />\n        <p *ngIf=\"form.get('name').touched && form.get('name').hasError('required')\">You must input some Pokemon name!</p>\n      </label>\n      <button class=\"btn btn-success\" [disabled]=\"form.invalid || disable\" type=\"submit\">Add!</button>\n      <flash-messages></flash-messages>\n    </form>\n  </div>\n\n  <h1>Your pokemons:</h1>\n  <div class=\"pokemons\">\n    <div *ngFor=\"let pokemon of pokemons, let i = index\">\n      <div class=\"pokemon\">\n        <i (click)=\"deletePokemon(i)\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        <img src=\"{{pokemon.sprites.front_default}}\" alt=\"{{pokemon.name}}\" />\n        <h5>{{pokemon.name}}</h5>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['/']\" class=\"navbar-brand\">Pokemon Club!</a>\n      \n    </div>\n\n    <div id=\"navbar\">\n      <ul class=\"nav navbar-nav navbar-right\" *ngIf='auth.loggedIn(); else not'>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/']\">Home</a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/allPokemons']\">All Pokemons</a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/myPokemons']\">My Pokemons</a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/settings']\">Settings</a></li>\n        <li (click)=\"logOut()\"><a>LogOut</a></li>\n      </ul>\n\n        <ng-template #not>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/']\">Home</a></li>\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n          </ul>\n\n        </ng-template>\n    </div>\n\n  </div>\n\n\n</nav>\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form-group\" [ngClass]=\"{'has-error':isError}\" >\n    <flash-messages></flash-messages>\n    <form novalidate (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\">\n      <label class=\"control-label\">Name:\n        <input class=\"form-control\"\n        type=\"text\" formControlName=\"Name\" />\n        <div  *ngIf=\"form.get('Name').touched\">\n          <p *ngIf=\"form.get('Name').hasError('required')\">Name is required!</p>\n          <p *ngIf=\"form.get('Name').hasError('minlength')\">Name needs to be ad least 3 characters long!</p>\n        </div>\n      </label>\n      <br />\n\n      <label class=\"control-label\">Email:\n        <input class=\"form-control\"\n        type=\"text\" formControlName=\"Email\" />\n        <div  *ngIf=\"form.get('Email').touched\">\n          <p *ngIf=\"form.get('Email').hasError('required')\">Email is required!</p>\n          <p *ngIf=\"form.get('Email').hasError('email')\">Email needs to be a valid email adress!</p>\n        </div>\n      </label>\n      <br />\n\n      <label class=\"control-label\">Password:\n        <input class=\"form-control\"\n        type=\"text\" formControlName=\"Password\" />\n        <div  *ngIf=\"form.get('Password').touched\">\n          <p *ngIf=\"form.get('Password').hasError('required')\">Password is required!</p>\n        </div>\n      </label>\n      <br />\n\n      <button class=\"btn btn-primary\" [disabled]=\"form.invalid\" type=\"submit\">Register</button>\n      <button class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</button>\n    </form>\n  </div>\n  <div class=\"Hide\">\n    <h1>This is registration form.</h1>\n    <h3>You need to input a name at least 3 characters long,</h3>\n    <h3>A valid email adress,</h3>\n    <h3>And a password.</h3>\n    <br />\n    <h3>If you are registerd already, click the login botton</h3>\n  </div>\n  <img class=\"downImgR\" src=\"../../../assets/register.jpg\" />\n</div>\n"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <flash-messages></flash-messages>\n  <div class=\"col-md-4\">\n    <h1>Your Provile:</h1>\n    <br />\n    <h4>Name: <span>{{profileInfo.name}}</span></h4>\n    <h4>Email: <span>{{profileInfo.email}}</span></h4>\n    <h4>City: <span *ngIf=\"profileInfo.city else emptyCity\">{{profileInfo.city}}</span></h4>\n    <h4>State: <span *ngIf=\"profileInfo.state else emptyState\">{{profileInfo.state}}</span></h4>\n  </div>\n  <ng-template #emptyCity><span>not given</span></ng-template>\n  <ng-template #emptyState><span>not given</span></ng-template>\n\n  <div class=\"col-md-4\">\n    <h1>Updata Profile:</h1>\n    <form novalidate [formGroup]=\"UpdateForm\" (ngSubmit)=\"updateProfile(UpdateForm)\" >\n      <label class=\"Ulabel\">City:\n        <input class=\"form-control\" type=\"text\" formControlName=\"city\" />\n      </label>\n      <label class=\"Ulabel\">State:\n        <input class=\"form-control\" type=\"text\" formControlName=\"state\" />\n      </label>\n      <button class=\"btn btn-info\" type=\"submit\">Update your profile</button>\n    </form>\n  </div>\n\n  <div class=\"col-md-4\">\n    <h1>Change Password:</h1>\n    <form novalidate [formGroup]=\"changeForm\" (ngSubmit)=\"changePassword(changeForm)\">\n      <label class=\"Ilabel\">Current Password:\n        <input class=\"form-control\" type=\"text\" formControlName=\"currentPassword\" />\n          <p *ngIf=\"changeForm.get('currentPassword').touched && changeForm.get('currentPassword').hasError('required')\">You must input your current password!</p>\n      </label>\n      <label class=\"Ilabel\">New Password:\n        <input class=\"form-control\" type=\"text\" formControlName=\"newPassword\" />\n        <p *ngIf=\"changeForm.get('newPassword').touched && changeForm.get('newPassword').hasError('required')\">You must input new password!</p>\n      </label>\n       <br />\n      <button class=\"btn btn-info\" [disabled]=\"changeForm.invalid\" type=\"submit\">Change Password</button>\n    </form>\n  </div>\n\n  <img class=\"downImgR\" src=\"../../../assets/settings.png\" />\n</div>\n"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<div class=\"requests\">\n  <button class=\"btn btn-warning btn-lg\" (click)=\"openYourRequests()\">Your trade requests.</button>\n  <button class=\"btn btn-warning btn-lg\" (click)=\"openRequestsForMe()\">Trade requests for you.</button>\n  <div *ngIf=\"yourRequests\">\n    <h1>Requests you made:</h1>\n    <h3 *ngIf=\"myRequests.length === 0\">There are none!</h3>\n    <div *ngFor=\"let request of myRequests, let i = index\">\n      <div class=\"request\">\n        <i (click)=\"rejectRequest(i, 'your')\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        <div class=\"left\">\n          <h4>You offer:</h4>\n          <img src=\"{{request.proposed.pokemonImg}}\" alt=\"{{request.proposed.pomekonName}}\"/>\n          <h5>{{request.proposed.pokemonName}}</h5>\n        </div>\n\n        <div class=\"right\">\n          <h4>For:</h4>\n          <img src=\"{{request.wanted.pokemonImg}}\" alt=\"{{request.wanted.pomekonName}}\"/>\n          <h5>{{request.wanted.pokemonName}}</h5>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"requestsForMe\">\n    <h1>Requests made for you:</h1>\n    <h3 *ngIf=\"requestsMadeForMe.length === 0\">There are none!</h3>\n    <div *ngFor=\"let request of requestsMadeForMe, let i = index\">\n      <div class=\"request\">\n        <i (click)=\"acceptRequest(i)\" class=\"fa fa-check\" aria-hidden=\"true\"></i>\n        <i (click)=\"rejectRequest(i, 'forYou')\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        <div class=\"left\">\n          <h4>Offering:</h4>\n          <img src=\"{{request.proposed.pokemonImg}}\" alt=\"{{request.proposed.pomekonName}}\"/>\n          <h5>{{request.proposed.pokemonName}}</h5>\n        </div>\n        <div class=\"right\">\n          <h4>For:</h4>\n          <img src=\"{{request.wanted.pokemonImg}}\" alt=\"{{request.wanted.pomekonName}}\"/>\n          <h5>{{request.wanted.pokemonName}}</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(116);


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService() {
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["JwtHelper"]();
    }
    AuthService.prototype.useJwtHelper = function () {
        var token = localStorage.getItem('token');
        /* console.log(
          this.jwtHelper.decodeToken(token),
          this.jwtHelper.getTokenExpirationDate(token),
          this.jwtHelper.isTokenExpired(token)
        ); */
        return this.jwtHelper.decodeToken(token);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        if (token) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])();
        }
        else {
            return false;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(12);
/* unused harmony export Poke */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalWindowComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Poke = (function (_super) {
    __extends(Poke, _super);
    function Poke(num1, num2) {
        var _this = _super.call(this) || this;
        _this.num1 = num1;
        _this.num2 = num2;
        return _this;
    }
    return Poke;
}(__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));

var ModalWindowComponent = (function () {
    function ModalWindowComponent(api, dialog) {
        this.api = api;
        this.dialog = dialog;
        this.context = dialog.context;
    }
    ModalWindowComponent.prototype.ngOnInit = function () {
        this.getMyPokemons();
    };
    ModalWindowComponent.prototype.getMyPokemons = function () {
        var _this = this;
        this.api.getMyPokemons().subscribe(function (response) {
            _this.pokemons = JSON.parse(response['_body']);
        }, function (error) { return console.log(error); }, function () { return console.log('completed'); });
    };
    ModalWindowComponent.prototype.choosePokemon = function (i) {
        var _this = this;
        var exchange = JSON.parse(localStorage.getItem('exchange'));
        exchange.proposed = {
            pokemonIndex: i,
            pokemonName: this.pokemons[i].name,
            pokemonImg: this.pokemons[i].sprites.front_default
        };
        this.api.exchangePokemons(exchange).subscribe(function (response) {
            console.log(response['_body']);
        }, function (error) { return console.log(error); }, function () {
            console.log('completed');
            _this.dialog.close();
        });
    };
    return ModalWindowComponent;
}());
ModalWindowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-window',
        template: __webpack_require__(216),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["d" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["d" /* DialogRef */]) === "function" && _b || Object])
], ModalWindowComponent);

var _a, _b;
//# sourceMappingURL=modal-window.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeRequestsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TradeRequestsComponent = (function () {
    function TradeRequestsComponent(api) {
        this.api = api;
        this.traded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.yourRequests = false;
        this.requestsForMe = false;
    }
    TradeRequestsComponent.prototype.ngOnInit = function () {
        this.getRequests();
    };
    TradeRequestsComponent.prototype.getRequests = function () {
        var _this = this;
        this.api.getTradeRequests().subscribe(function (response) {
            var requests = JSON.parse(response['_body']);
            console.log(requests);
            _this.requestsMadeForMe = requests.forMe;
            _this.myRequests = requests.my;
        }, function (error) { return console.log(error); }, function () { return console.log('completed'); });
    };
    TradeRequestsComponent.prototype.openYourRequests = function () {
        if (this.yourRequests) {
            this.yourRequests = false;
        }
        else {
            this.requestsForMe = false;
            this.yourRequests = true;
        }
    };
    TradeRequestsComponent.prototype.openRequestsForMe = function () {
        if (this.requestsForMe) {
            this.requestsForMe = false;
        }
        else {
            this.yourRequests = false;
            this.requestsForMe = true;
        }
    };
    TradeRequestsComponent.prototype.acceptRequest = function (i) {
        var _this = this;
        this.api.acceptRequest(this.requestsMadeForMe[i]).subscribe(function (response) {
            if (response['_body'] === 'change accepted') {
                _this.getRequests();
                _this.traded.emit('traded');
            }
        }, function (error) { return console.log(error); }, function () {
            console.log('completed');
        });
    };
    TradeRequestsComponent.prototype.rejectRequest = function (i, f) {
        var _this = this;
        if (f === 'your') {
            this.api.rejectYours(this.myRequests[i]).subscribe(function (response) {
                if (response['_body'] === 'request rejected') {
                    _this.getRequests();
                }
            }, function (error) { return console.log(error); }, function () {
                console.log('completed');
                _this.getRequests();
            });
        }
        else if (f === 'forYou') {
            this.api.rejectOther(this.requestsMadeForMe[i]).subscribe(function (response) {
                console.log(response['_body']);
                if (response['_body'] === 'request rejected') {
                    _this.getRequests();
                }
            }, function (error) { return console.log(error); }, function () {
                console.log('completed');
                _this.getRequests();
            });
        }
    };
    return TradeRequestsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], TradeRequestsComponent.prototype, "traded", void 0);
TradeRequestsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-trade-requests',
        template: __webpack_require__(221),
        styles: [__webpack_require__(210)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _b || Object])
], TradeRequestsComponent);

var _a, _b;
//# sourceMappingURL=trade-requests.component.js.map

/***/ })

},[259]);
//# sourceMappingURL=main.bundle.js.map