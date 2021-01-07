(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-notification-add-notification-add-notification-module"],{

/***/ "0q48":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/notification/add-notification/add-notification.module.ts ***!
  \****************************************************************************************/
/*! exports provided: AddNotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotificationModule", function() { return AddNotificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_notification_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-notification-routing.module */ "a2kp");
/* harmony import */ var _add_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-notification.component */ "ToVr");





class AddNotificationModule {
}
AddNotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddNotificationModule });
AddNotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddNotificationModule_Factory(t) { return new (t || AddNotificationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _add_notification_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddNotificationRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddNotificationModule, { declarations: [_add_notification_component__WEBPACK_IMPORTED_MODULE_3__["AddNotificationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _add_notification_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddNotificationRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNotificationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_add_notification_component__WEBPACK_IMPORTED_MODULE_3__["AddNotificationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _add_notification_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddNotificationRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ToVr":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/admin/notification/add-notification/add-notification.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotificationComponent", function() { return AddNotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AddNotificationComponent {
    constructor() { }
    ngOnInit() {
    }
}
AddNotificationComponent.ɵfac = function AddNotificationComponent_Factory(t) { return new (t || AddNotificationComponent)(); };
AddNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddNotificationComponent, selectors: [["app-add-notification"]], decls: 2, vars: 0, template: function AddNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add-notification works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-notification',
                templateUrl: './add-notification.component.html',
                styleUrls: ['./add-notification.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "a2kp":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin/notification/add-notification/add-notification-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: AddNotificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotificationRoutingModule", function() { return AddNotificationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-notification.component */ "ToVr");





const routes = [
    { path: '', component: _add_notification_component__WEBPACK_IMPORTED_MODULE_2__["AddNotificationComponent"] }
];
class AddNotificationRoutingModule {
}
AddNotificationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddNotificationRoutingModule });
AddNotificationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddNotificationRoutingModule_Factory(t) { return new (t || AddNotificationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddNotificationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNotificationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-notification-add-notification-add-notification-module.js.map