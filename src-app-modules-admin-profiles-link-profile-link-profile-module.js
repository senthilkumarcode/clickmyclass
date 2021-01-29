(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-profiles-link-profile-link-profile-module"],{

/***/ "0biW":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/admin/profiles/link-profile/link-profile-list/link-profile-list.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: LinkProfileListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkProfileListComponent", function() { return LinkProfileListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LinkProfileListComponent {
    constructor() { }
    ngOnInit() {
    }
}
LinkProfileListComponent.ɵfac = function LinkProfileListComponent_Factory(t) { return new (t || LinkProfileListComponent)(); };
LinkProfileListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinkProfileListComponent, selectors: [["link-profile-list"]], decls: 1, vars: 0, consts: [[1, "link-profile-list-wrapper"]], template: function LinkProfileListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5rLXByb2ZpbGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkProfileListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'link-profile-list',
                templateUrl: './link-profile-list.component.html',
                styleUrls: ['./link-profile-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Dlqs":
/*!************************************************!*\
  !*** ./src/app/core/auth/guards/auth.guard.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auth/auth.service */ "Vurf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthGuard {
    /**
     * Constructor
     *
     * @param {AuthService} _authService
     * @param {Router} _router
     */
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Check the authenticated status
     *
     * @param redirectURL
     * @private
     */
    _check(redirectURL) {
        // Check the authentication status
        return this._authService.check()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((authenticated) => {
            // If the user is not authenticated...
            if (!authenticated) {
                // Redirect to the sign-in page
                this._router.navigate(['sign-in'], { queryParams: { redirectURL } });
                // Prevent the access
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
            }
            // Allow the access
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
        }));
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Can activate
     *
     * @param route
     * @param state
     */
    canActivate(route, state) {
        let redirectUrl = state.url;
        if (redirectUrl === '/sign-out') {
            redirectUrl = '/';
        }
        return this._check(redirectUrl);
    }
    /**
     * Can activate child
     *
     * @param childRoute
     * @param state
     */
    canActivateChild(childRoute, state) {
        let redirectUrl = state.url;
        if (redirectUrl === '/sign-out') {
            redirectUrl = '/';
        }
        return this._check(redirectUrl);
    }
    /**
     * Can load
     *
     * @param route
     * @param segments
     */
    canLoad(route, segments) {
        return this._check('/');
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "IbA+":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/profiles/link-profile/link-profile-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: routes, LinkProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkProfileRoutingModule", function() { return LinkProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auth/guards/auth.guard */ "Dlqs");
/* harmony import */ var _link_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link-profile.component */ "q/0p");






const routes = [
    { path: '', component: _link_profile_component__WEBPACK_IMPORTED_MODULE_3__["LinkProfileComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] }
];
class LinkProfileRoutingModule {
}
LinkProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LinkProfileRoutingModule });
LinkProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LinkProfileRoutingModule_Factory(t) { return new (t || LinkProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LinkProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "MdHr":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin/profiles/link-profile/link-profile.module.ts ***!
  \****************************************************************************/
/*! exports provided: LinkProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkProfileModule", function() { return LinkProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _link_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./link-profile-routing.module */ "IbA+");
/* harmony import */ var _link_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./link-profile.component */ "q/0p");
/* harmony import */ var _link_profile_list_link_profile_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./link-profile-list/link-profile-list.component */ "0biW");










class LinkProfileModule {
}
LinkProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LinkProfileModule, bootstrap: [_link_profile_component__WEBPACK_IMPORTED_MODULE_5__["LinkProfileComponent"]] });
LinkProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LinkProfileModule_Factory(t) { return new (t || LinkProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_link_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["routes"]),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _link_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["LinkProfileRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LinkProfileModule, { declarations: [_link_profile_component__WEBPACK_IMPORTED_MODULE_5__["LinkProfileComponent"], _link_profile_list_link_profile_list_component__WEBPACK_IMPORTED_MODULE_6__["LinkProfileListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _link_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["LinkProfileRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_link_profile_component__WEBPACK_IMPORTED_MODULE_5__["LinkProfileComponent"], _link_profile_list_link_profile_list_component__WEBPACK_IMPORTED_MODULE_6__["LinkProfileListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_link_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["routes"]),
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _link_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["LinkProfileRoutingModule"]
                ],
                bootstrap: [
                    _link_profile_component__WEBPACK_IMPORTED_MODULE_5__["LinkProfileComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "q/0p":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/admin/profiles/link-profile/link-profile.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LinkProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkProfileComponent", function() { return LinkProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _link_profile_list_link_profile_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link-profile-list/link-profile-list.component */ "0biW");




function LinkProfileComponent_link_profile_list_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link-profile-list");
} }
class LinkProfileComponent {
    constructor() {
        this.isLinkListLoaded = true;
    }
    ngOnInit() {
    }
}
LinkProfileComponent.ɵfac = function LinkProfileComponent_Factory(t) { return new (t || LinkProfileComponent)(); };
LinkProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinkProfileComponent, selectors: [["app-link-profile"]], decls: 3, vars: 1, consts: [[1, "link-profile-wrapper"], [1, "main"], [4, "ngIf"]], template: function LinkProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LinkProfileComponent_link_profile_list_2_Template, 1, 0, "link-profile-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLinkListLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _link_profile_list_link_profile_list_component__WEBPACK_IMPORTED_MODULE_2__["LinkProfileListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5rLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-link-profile',
                templateUrl: './link-profile.component.html',
                styleUrls: ['./link-profile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-profiles-link-profile-link-profile-module.js.map