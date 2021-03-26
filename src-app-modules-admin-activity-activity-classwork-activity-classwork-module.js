(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-activity-activity-classwork-activity-classwork-module"],{

/***/ "+Cz5":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin/activity/activity-classwork/activity-classwork-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: ActivityClassworkRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityClassworkRoutingModule", function() { return ActivityClassworkRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _activity_classwork_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activity-classwork.component */ "GhBo");





const routes = [
    { path: '', component: _activity_classwork_component__WEBPACK_IMPORTED_MODULE_2__["ActivityClassworkComponent"] }
];
class ActivityClassworkRoutingModule {
}
ActivityClassworkRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ActivityClassworkRoutingModule });
ActivityClassworkRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ActivityClassworkRoutingModule_Factory(t) { return new (t || ActivityClassworkRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ActivityClassworkRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityClassworkRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "GhBo":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/admin/activity/activity-classwork/activity-classwork.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ActivityClassworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityClassworkComponent", function() { return ActivityClassworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ActivityClassworkComponent {
    constructor() { }
    ngOnInit() {
    }
}
ActivityClassworkComponent.ɵfac = function ActivityClassworkComponent_Factory(t) { return new (t || ActivityClassworkComponent)(); };
ActivityClassworkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivityClassworkComponent, selectors: [["activity-classwork"]], decls: 2, vars: 0, template: function ActivityClassworkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "assignment-classwork works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpdml0eS1jbGFzc3dvcmsuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityClassworkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'activity-classwork',
                templateUrl: './activity-classwork.component.html',
                styleUrls: ['./activity-classwork.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iZbT":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/activity/activity-classwork/activity-classwork.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ActivityClassworkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityClassworkModule", function() { return ActivityClassworkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _activity_classwork_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activity-classwork-routing.module */ "+Cz5");
/* harmony import */ var _activity_classwork_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity-classwork.component */ "GhBo");





class ActivityClassworkModule {
}
ActivityClassworkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ActivityClassworkModule });
ActivityClassworkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ActivityClassworkModule_Factory(t) { return new (t || ActivityClassworkModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _activity_classwork_routing_module__WEBPACK_IMPORTED_MODULE_2__["ActivityClassworkRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ActivityClassworkModule, { declarations: [_activity_classwork_component__WEBPACK_IMPORTED_MODULE_3__["ActivityClassworkComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _activity_classwork_routing_module__WEBPACK_IMPORTED_MODULE_2__["ActivityClassworkRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityClassworkModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_activity_classwork_component__WEBPACK_IMPORTED_MODULE_3__["ActivityClassworkComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _activity_classwork_routing_module__WEBPACK_IMPORTED_MODULE_2__["ActivityClassworkRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-activity-activity-classwork-activity-classwork-module.js.map