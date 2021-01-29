(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-profiles-profile-reports-profile-reports-module"],{

/***/ "AfYg":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/admin/profiles/profile-reports/profile-reports.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfileReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileReportsModule", function() { return ProfileReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _profile_reports_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-reports-routing.module */ "PVcz");
/* harmony import */ var _profile_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-reports.component */ "gvUg");





class ProfileReportsModule {
}
ProfileReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileReportsModule });
ProfileReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileReportsModule_Factory(t) { return new (t || ProfileReportsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _profile_reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileReportsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileReportsModule, { declarations: [_profile_reports_component__WEBPACK_IMPORTED_MODULE_3__["ProfileReportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _profile_reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileReportsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_profile_reports_component__WEBPACK_IMPORTED_MODULE_3__["ProfileReportsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _profile_reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileReportsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "PVcz":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admin/profiles/profile-reports/profile-reports-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ProfileReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileReportsRoutingModule", function() { return ProfileReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class ProfileReportsRoutingModule {
}
ProfileReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileReportsRoutingModule });
ProfileReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileReportsRoutingModule_Factory(t) { return new (t || ProfileReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileReportsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gvUg":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/admin/profiles/profile-reports/profile-reports.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProfileReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileReportsComponent", function() { return ProfileReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProfileReportsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileReportsComponent.ɵfac = function ProfileReportsComponent_Factory(t) { return new (t || ProfileReportsComponent)(); };
ProfileReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileReportsComponent, selectors: [["app-profile-reports"]], decls: 2, vars: 0, template: function ProfileReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile-reports works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXJlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-reports',
                templateUrl: './profile-reports.component.html',
                styleUrls: ['./profile-reports.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-profiles-profile-reports-profile-reports-module.js.map