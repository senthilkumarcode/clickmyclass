(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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


/***/ })

}]);
//# sourceMappingURL=common.js.map