(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-feedback-feedback-setup-feedback-setup-module"],{

/***/ "Un2x":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/admin/feedback/feedback-setup/feedback-setup.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FeedbackSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackSetupComponent", function() { return FeedbackSetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FeedbackSetupComponent {
    constructor() { }
    ngOnInit() {
    }
}
FeedbackSetupComponent.ɵfac = function FeedbackSetupComponent_Factory(t) { return new (t || FeedbackSetupComponent)(); };
FeedbackSetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedbackSetupComponent, selectors: [["app-feedback-setup"]], decls: 2, vars: 0, template: function FeedbackSetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "feedback-setup works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay1zZXR1cC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackSetupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feedback-setup',
                templateUrl: './feedback-setup.component.html',
                styleUrls: ['./feedback-setup.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VfEt":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/feedback/feedback-setup/feedback-setup-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: FeedbackSetupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackSetupRoutingModule", function() { return FeedbackSetupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class FeedbackSetupRoutingModule {
}
FeedbackSetupRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeedbackSetupRoutingModule });
FeedbackSetupRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FeedbackSetupRoutingModule_Factory(t) { return new (t || FeedbackSetupRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeedbackSetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackSetupRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "omvR":
/*!********************************************************************************!*\
  !*** ./src/app/modules/admin/feedback/feedback-setup/feedback-setup.module.ts ***!
  \********************************************************************************/
/*! exports provided: FeedbackSetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackSetupModule", function() { return FeedbackSetupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _feedback_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback-setup-routing.module */ "VfEt");
/* harmony import */ var _feedback_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback-setup.component */ "Un2x");





class FeedbackSetupModule {
}
FeedbackSetupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeedbackSetupModule });
FeedbackSetupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FeedbackSetupModule_Factory(t) { return new (t || FeedbackSetupModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _feedback_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeedbackSetupRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeedbackSetupModule, { declarations: [_feedback_setup_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackSetupComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _feedback_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeedbackSetupRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackSetupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_feedback_setup_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackSetupComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _feedback_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeedbackSetupRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-feedback-feedback-setup-feedback-setup-module.js.map