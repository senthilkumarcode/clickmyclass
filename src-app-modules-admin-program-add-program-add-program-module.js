(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-program-add-program-add-program-module"],{

/***/ "/3OR":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/program/add-program/add-program-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AddProgramRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProgramRoutingModule", function() { return AddProgramRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_program_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-program.component */ "D/0K");





const routes = [
    { path: "", component: _add_program_component__WEBPACK_IMPORTED_MODULE_2__["AddProgramComponent"] }
];
class AddProgramRoutingModule {
}
AddProgramRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddProgramRoutingModule });
AddProgramRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddProgramRoutingModule_Factory(t) { return new (t || AddProgramRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddProgramRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProgramRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "D/0K":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin/program/add-program/add-program.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProgramComponent", function() { return AddProgramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AddProgramComponent {
    constructor() { }
    ngOnInit() {
    }
}
AddProgramComponent.ɵfac = function AddProgramComponent_Factory(t) { return new (t || AddProgramComponent)(); };
AddProgramComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddProgramComponent, selectors: [["app-add-program"]], decls: 5, vars: 0, consts: [[1, "add-program-wrapper"], [1, "main"], [1, "pb-1"], [1, "bg-card", "shadow", "mt-8"]], template: function AddProgramComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHJvZ3JhbS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProgramComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-program',
                templateUrl: './add-program.component.html',
                styleUrls: ['./add-program.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Zxoe":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin/program/add-program/add-program.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddProgramModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProgramModule", function() { return AddProgramModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/ui/select/select.module */ "Miw4");
/* harmony import */ var _add_program_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-program-routing.module */ "/3OR");
/* harmony import */ var _add_program_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-program.component */ "D/0K");








class AddProgramModule {
}
AddProgramModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddProgramModule });
AddProgramModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddProgramModule_Factory(t) { return new (t || AddProgramModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"].forRoot(),
            src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_3__["SelectModule"],
            _add_program_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddProgramRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddProgramModule, { declarations: [_add_program_component__WEBPACK_IMPORTED_MODULE_5__["AddProgramComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_3__["SelectModule"],
        _add_program_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddProgramRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProgramModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_add_program_component__WEBPACK_IMPORTED_MODULE_5__["AddProgramComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"].forRoot(),
                    src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_3__["SelectModule"],
                    _add_program_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddProgramRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-program-add-program-add-program-module.js.map