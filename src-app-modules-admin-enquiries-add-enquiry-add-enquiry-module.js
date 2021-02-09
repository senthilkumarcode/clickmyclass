(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-enquiries-add-enquiry-add-enquiry-module"],{

/***/ "FAGM":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/admin/enquiries/add-enquiry/add-enquiry-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AddEnquiryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEnquiryRoutingModule", function() { return AddEnquiryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_enquiry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-enquiry.component */ "tJti");





const routes = [
    { path: '', component: _add_enquiry_component__WEBPACK_IMPORTED_MODULE_2__["AddEnquiryComponent"] }
];
class AddEnquiryRoutingModule {
}
AddEnquiryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddEnquiryRoutingModule });
AddEnquiryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddEnquiryRoutingModule_Factory(t) { return new (t || AddEnquiryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddEnquiryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEnquiryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jI+H":
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin/enquiries/add-enquiry/add-enquiry.module.ts ***!
  \***************************************************************************/
/*! exports provided: AddEnquiryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEnquiryModule", function() { return AddEnquiryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_enquiry_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-enquiry-routing.module */ "FAGM");
/* harmony import */ var _add_enquiry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-enquiry.component */ "tJti");





class AddEnquiryModule {
}
AddEnquiryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddEnquiryModule });
AddEnquiryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddEnquiryModule_Factory(t) { return new (t || AddEnquiryModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _add_enquiry_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddEnquiryRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddEnquiryModule, { declarations: [_add_enquiry_component__WEBPACK_IMPORTED_MODULE_3__["AddEnquiryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _add_enquiry_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddEnquiryRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEnquiryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_add_enquiry_component__WEBPACK_IMPORTED_MODULE_3__["AddEnquiryComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _add_enquiry_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddEnquiryRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "tJti":
/*!******************************************************************************!*\
  !*** ./src/app/modules/admin/enquiries/add-enquiry/add-enquiry.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddEnquiryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEnquiryComponent", function() { return AddEnquiryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AddEnquiryComponent {
    constructor() { }
    ngOnInit() {
    }
}
AddEnquiryComponent.ɵfac = function AddEnquiryComponent_Factory(t) { return new (t || AddEnquiryComponent)(); };
AddEnquiryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEnquiryComponent, selectors: [["app-add-enquiry"]], decls: 2, vars: 0, template: function AddEnquiryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add-enquiry works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZW5xdWlyeS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEnquiryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-enquiry',
                templateUrl: './add-enquiry.component.html',
                styleUrls: ['./add-enquiry.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-enquiries-add-enquiry-add-enquiry-module.js.map