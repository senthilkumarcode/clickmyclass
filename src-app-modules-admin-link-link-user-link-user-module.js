(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-link-link-user-link-user-module"],{

/***/ "49Jn":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin/link/link-user/link-user.component.ts ***!
  \*********************************************************************/
/*! exports provided: LinkUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkUserComponent", function() { return LinkUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LinkUserComponent {
    constructor() { }
    ngOnInit() {
    }
}
LinkUserComponent.ɵfac = function LinkUserComponent_Factory(t) { return new (t || LinkUserComponent)(); };
LinkUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinkUserComponent, selectors: [["app-link-user"]], decls: 2, vars: 0, template: function LinkUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "link-user works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5rLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-link-user',
                templateUrl: './link-user.component.html',
                styleUrls: ['./link-user.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Xj5U":
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin/link/link-user/link-user-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: routes, LinkUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkUserRoutingModule", function() { return LinkUserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auth/guards/auth.guard */ "Dlqs");
/* harmony import */ var _link_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link-user.component */ "49Jn");






const routes = [
    { path: '', component: _link_user_component__WEBPACK_IMPORTED_MODULE_3__["LinkUserComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] }
];
class LinkUserRoutingModule {
}
LinkUserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LinkUserRoutingModule });
LinkUserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LinkUserRoutingModule_Factory(t) { return new (t || LinkUserRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LinkUserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkUserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "pQKl":
/*!******************************************************************!*\
  !*** ./src/app/modules/admin/link/link-user/link-user.module.ts ***!
  \******************************************************************/
/*! exports provided: LinkUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkUserModule", function() { return LinkUserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _link_user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link-user-routing.module */ "Xj5U");
/* harmony import */ var _link_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link-user.component */ "49Jn");





class LinkUserModule {
}
LinkUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LinkUserModule });
LinkUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LinkUserModule_Factory(t) { return new (t || LinkUserModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _link_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["LinkUserRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LinkUserModule, { declarations: [_link_user_component__WEBPACK_IMPORTED_MODULE_3__["LinkUserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _link_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["LinkUserRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkUserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_link_user_component__WEBPACK_IMPORTED_MODULE_3__["LinkUserComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _link_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["LinkUserRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-link-link-user-link-user-module.js.map