(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-feedback-feedback-list-feedback-list-module"],{

/***/ "AGLe":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/feedback/feedback-list/feedback-list-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: FeedbackListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackListRoutingModule", function() { return FeedbackListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class FeedbackListRoutingModule {
}
FeedbackListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeedbackListRoutingModule });
FeedbackListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FeedbackListRoutingModule_Factory(t) { return new (t || FeedbackListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeedbackListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Al9b":
/*!******************************************************************************!*\
  !*** ./src/app/modules/admin/feedback/feedback-list/feedback-list.module.ts ***!
  \******************************************************************************/
/*! exports provided: FeedbackListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackListModule", function() { return FeedbackListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _feedback_list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback-list-routing.module */ "AGLe");
/* harmony import */ var _feedback_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback-list.component */ "TmMs");





class FeedbackListModule {
}
FeedbackListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeedbackListModule });
FeedbackListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FeedbackListModule_Factory(t) { return new (t || FeedbackListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _feedback_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeedbackListRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeedbackListModule, { declarations: [_feedback_list_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _feedback_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeedbackListRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_feedback_list_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _feedback_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeedbackListRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "TmMs":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/feedback/feedback-list/feedback-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FeedbackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackListComponent", function() { return FeedbackListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FeedbackListComponent {
    constructor() { }
    ngOnInit() {
    }
}
FeedbackListComponent.ɵfac = function FeedbackListComponent_Factory(t) { return new (t || FeedbackListComponent)(); };
FeedbackListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedbackListComponent, selectors: [["app-feedback-list"]], decls: 2, vars: 0, template: function FeedbackListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "feedback-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feedback-list',
                templateUrl: './feedback-list.component.html',
                styleUrls: ['./feedback-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-feedback-feedback-list-feedback-list-module.js.map