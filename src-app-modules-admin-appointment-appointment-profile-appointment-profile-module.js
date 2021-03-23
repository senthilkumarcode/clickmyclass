(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-appointment-appointment-profile-appointment-profile-module"],{

/***/ "UARD":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/admin/appointment/appointment-profile/appointment-profile-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AppointmentProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentProfileRoutingModule", function() { return AppointmentProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auth/guards/auth.guard */ "Dlqs");
/* harmony import */ var _appointment_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointment-profile.component */ "UanN");






const routes = [{
        path: '', component: _appointment_profile_component__WEBPACK_IMPORTED_MODULE_3__["AppointmentProfileComponent"],
        children: [
            { path: 'add', canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], loadChildren: () => Promise.all(/*! import() | src-app-modules-admin-appointment-appointment-profile-appointment-create-profile-appointment-create-profile-module */[__webpack_require__.e("default~src-app-modules-admin-appointment-appointment-events-appointment-event-types-appointment-eve~932ae708"), __webpack_require__.e("default~src-app-modules-admin-appointment-appointment-events-appointment-event-types-appointment-eve~87721c89"), __webpack_require__.e("common"), __webpack_require__.e("src-app-modules-admin-appointment-appointment-profile-appointment-create-profile-appointment-create-profile-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/admin/appointment/appointment-profile/appointment-create-profile/appointment-create-profile.module */ "gket")).then(m => m.AppointmentCreateProfileModule) },
            { path: 'edit/:id', canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], loadChildren: () => Promise.all(/*! import() | src-app-modules-admin-appointment-appointment-profile-appointment-create-profile-appointment-create-profile-module */[__webpack_require__.e("default~src-app-modules-admin-appointment-appointment-events-appointment-event-types-appointment-eve~932ae708"), __webpack_require__.e("default~src-app-modules-admin-appointment-appointment-events-appointment-event-types-appointment-eve~87721c89"), __webpack_require__.e("common"), __webpack_require__.e("src-app-modules-admin-appointment-appointment-profile-appointment-create-profile-appointment-create-profile-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/admin/appointment/appointment-profile/appointment-create-profile/appointment-create-profile.module */ "gket")).then(m => m.AppointmentCreateProfileModule) },
            { path: 'list', canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], loadChildren: () => Promise.all(/*! import() | src-app-modules-admin-appointment-appointment-profile-appointment-profile-list-appointment-profile-list-module */[__webpack_require__.e("default~src-app-modules-admin-appointment-appointment-profile-appointment-profile-list-appointment-p~87ddbf10"), __webpack_require__.e("default~src-app-modules-admin-appointment-appointment-profile-appointment-profile-list-appointment-p~9b18072e"), __webpack_require__.e("common"), __webpack_require__.e("src-app-modules-admin-appointment-appointment-profile-appointment-profile-list-appointment-profile-list-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/admin/appointment/appointment-profile/appointment-profile-list/appointment-profile-list.module */ "qB8g")).then(m => m.AppointmentProfileListModule) },
            { path: '', pathMatch: 'full', redirectTo: 'add' },
        ]
    }];
class AppointmentProfileRoutingModule {
}
AppointmentProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppointmentProfileRoutingModule });
AppointmentProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppointmentProfileRoutingModule_Factory(t) { return new (t || AppointmentProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppointmentProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "UanN":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin/appointment/appointment-profile/appointment-profile.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AppointmentProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentProfileComponent", function() { return AppointmentProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppointmentProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppointmentProfileComponent.ɵfac = function AppointmentProfileComponent_Factory(t) { return new (t || AppointmentProfileComponent)(); };
AppointmentProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppointmentProfileComponent, selectors: [["app-appointment-profile"]], decls: 1, vars: 0, template: function AppointmentProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBvaW50bWVudC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-appointment-profile',
                templateUrl: './appointment-profile.component.html',
                styleUrls: ['./appointment-profile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iYIv":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/admin/appointment/appointment-profile/appointment-profile.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: AppointmentProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentProfileModule", function() { return AppointmentProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _appointment_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appointment-profile-routing.module */ "UARD");
/* harmony import */ var _appointment_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointment-profile.component */ "UanN");





class AppointmentProfileModule {
}
AppointmentProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppointmentProfileModule });
AppointmentProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppointmentProfileModule_Factory(t) { return new (t || AppointmentProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _appointment_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppointmentProfileRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppointmentProfileModule, { declarations: [_appointment_profile_component__WEBPACK_IMPORTED_MODULE_3__["AppointmentProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _appointment_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppointmentProfileRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_appointment_profile_component__WEBPACK_IMPORTED_MODULE_3__["AppointmentProfileComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _appointment_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppointmentProfileRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-appointment-appointment-profile-appointment-profile-module.js.map