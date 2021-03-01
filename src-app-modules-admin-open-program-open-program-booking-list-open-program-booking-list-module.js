(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-open-program-open-program-booking-list-open-program-booking-list-module"],{

/***/ "2Cv5":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/admin/open-program/open-program-booking-list/open-program-booking-list-routing.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: OpenProgramBookingListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenProgramBookingListRoutingModule", function() { return OpenProgramBookingListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class OpenProgramBookingListRoutingModule {
}
OpenProgramBookingListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OpenProgramBookingListRoutingModule });
OpenProgramBookingListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OpenProgramBookingListRoutingModule_Factory(t) { return new (t || OpenProgramBookingListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OpenProgramBookingListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpenProgramBookingListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "FxNZ":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/admin/open-program/open-program-booking-list/open-program-booking-list.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: OpenProgramBookingListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenProgramBookingListModule", function() { return OpenProgramBookingListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _open_program_booking_list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./open-program-booking-list-routing.module */ "2Cv5");
/* harmony import */ var _open_program_booking_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./open-program-booking-list.component */ "nsWW");





class OpenProgramBookingListModule {
}
OpenProgramBookingListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OpenProgramBookingListModule });
OpenProgramBookingListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OpenProgramBookingListModule_Factory(t) { return new (t || OpenProgramBookingListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _open_program_booking_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["OpenProgramBookingListRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OpenProgramBookingListModule, { declarations: [_open_program_booking_list_component__WEBPACK_IMPORTED_MODULE_3__["OpenProgramBookingListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _open_program_booking_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["OpenProgramBookingListRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpenProgramBookingListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_open_program_booking_list_component__WEBPACK_IMPORTED_MODULE_3__["OpenProgramBookingListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _open_program_booking_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["OpenProgramBookingListRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "nsWW":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/admin/open-program/open-program-booking-list/open-program-booking-list.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: OpenProgramBookingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenProgramBookingListComponent", function() { return OpenProgramBookingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OpenProgramBookingListComponent {
    constructor() { }
    ngOnInit() {
    }
}
OpenProgramBookingListComponent.ɵfac = function OpenProgramBookingListComponent_Factory(t) { return new (t || OpenProgramBookingListComponent)(); };
OpenProgramBookingListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpenProgramBookingListComponent, selectors: [["app-open-program-booking-list"]], decls: 2, vars: 0, template: function OpenProgramBookingListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "open-program-booking-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcGVuLXByb2dyYW0tYm9va2luZy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpenProgramBookingListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-open-program-booking-list',
                templateUrl: './open-program-booking-list.component.html',
                styleUrls: ['./open-program-booking-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-open-program-open-program-booking-list-open-program-booking-list-module.js.map