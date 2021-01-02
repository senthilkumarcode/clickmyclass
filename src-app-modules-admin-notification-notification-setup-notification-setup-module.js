(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-notification-notification-setup-notification-setup-module"],{

/***/ "HJYr":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/admin/notification/notification-setup/notification-setup.module.ts ***!
  \********************************************************************************************/
/*! exports provided: NotificationSetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSetupModule", function() { return NotificationSetupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _notification_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-setup-routing.module */ "u4Pc");
/* harmony import */ var _notification_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-setup.component */ "ZbAd");





class NotificationSetupModule {
}
NotificationSetupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotificationSetupModule });
NotificationSetupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotificationSetupModule_Factory(t) { return new (t || NotificationSetupModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _notification_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotificationSetupRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationSetupModule, { declarations: [_notification_setup_component__WEBPACK_IMPORTED_MODULE_3__["NotificationSetupComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _notification_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotificationSetupRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationSetupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_notification_setup_component__WEBPACK_IMPORTED_MODULE_3__["NotificationSetupComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _notification_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotificationSetupRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZbAd":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/admin/notification/notification-setup/notification-setup.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NotificationSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSetupComponent", function() { return NotificationSetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotificationSetupComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotificationSetupComponent.ɵfac = function NotificationSetupComponent_Factory(t) { return new (t || NotificationSetupComponent)(); };
NotificationSetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationSetupComponent, selectors: [["app-notification-setup"]], decls: 2, vars: 0, template: function NotificationSetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notification-setup works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24tc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationSetupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notification-setup',
                templateUrl: './notification-setup.component.html',
                styleUrls: ['./notification-setup.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "u4Pc":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/admin/notification/notification-setup/notification-setup-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: NotificationSetupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSetupRoutingModule", function() { return NotificationSetupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notification_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-setup.component */ "ZbAd");





const routes = [
    { path: '', component: _notification_setup_component__WEBPACK_IMPORTED_MODULE_2__["NotificationSetupComponent"] }
];
class NotificationSetupRoutingModule {
}
NotificationSetupRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotificationSetupRoutingModule });
NotificationSetupRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotificationSetupRoutingModule_Factory(t) { return new (t || NotificationSetupRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationSetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationSetupRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-notification-notification-setup-notification-setup-module.js.map