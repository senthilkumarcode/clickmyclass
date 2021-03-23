(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-appointment-appointment-events-appointment-scheduled-event-appointment-scheduled-event-module"],{

/***/ "UAnK":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/admin/appointment/appointment-events/appointment-scheduled-event/appointment-scheduled-event-routing.module.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: AppointmentScheduledEventRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentScheduledEventRoutingModule", function() { return AppointmentScheduledEventRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appointment_scheduled_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appointment-scheduled-event.component */ "xIAh");





const routes = [
    { path: '', component: _appointment_scheduled_event_component__WEBPACK_IMPORTED_MODULE_2__["AppointmentScheduledEventComponent"] }
];
class AppointmentScheduledEventRoutingModule {
}
AppointmentScheduledEventRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppointmentScheduledEventRoutingModule });
AppointmentScheduledEventRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppointmentScheduledEventRoutingModule_Factory(t) { return new (t || AppointmentScheduledEventRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppointmentScheduledEventRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentScheduledEventRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bWy1":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/admin/appointment/appointment-events/appointment-scheduled-event/appointment-scheduled-event.module.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: AppointmentScheduledEventModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentScheduledEventModule", function() { return AppointmentScheduledEventModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _appointment_scheduled_event_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointment-scheduled-event-routing.module */ "UAnK");
/* harmony import */ var _appointment_scheduled_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appointment-scheduled-event.component */ "xIAh");







class AppointmentScheduledEventModule {
}
AppointmentScheduledEventModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppointmentScheduledEventModule });
AppointmentScheduledEventModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppointmentScheduledEventModule_Factory(t) { return new (t || AppointmentScheduledEventModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"].forRoot(),
            _appointment_scheduled_event_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppointmentScheduledEventRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppointmentScheduledEventModule, { declarations: [_appointment_scheduled_event_component__WEBPACK_IMPORTED_MODULE_4__["AppointmentScheduledEventComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _appointment_scheduled_event_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppointmentScheduledEventRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentScheduledEventModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_appointment_scheduled_event_component__WEBPACK_IMPORTED_MODULE_4__["AppointmentScheduledEventComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"].forRoot(),
                    _appointment_scheduled_event_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppointmentScheduledEventRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "xIAh":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/admin/appointment/appointment-events/appointment-scheduled-event/appointment-scheduled-event.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: AppointmentScheduledEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentScheduledEventComponent", function() { return AppointmentScheduledEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AppointmentScheduledEventComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppointmentScheduledEventComponent.ɵfac = function AppointmentScheduledEventComponent_Factory(t) { return new (t || AppointmentScheduledEventComponent)(); };
AppointmentScheduledEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppointmentScheduledEventComponent, selectors: [["app-appointment-scheduled-event"]], decls: 2, vars: 0, template: function AppointmentScheduledEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "appointment-scheduled-event works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBvaW50bWVudC1zY2hlZHVsZWQtZXZlbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentScheduledEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-appointment-scheduled-event',
                templateUrl: './appointment-scheduled-event.component.html',
                styleUrls: ['./appointment-scheduled-event.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-appointment-appointment-events-appointment-scheduled-event-appointment-scheduled-event-module.js.map