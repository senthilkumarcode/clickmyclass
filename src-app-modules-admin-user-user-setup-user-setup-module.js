(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-user-user-setup-user-setup-module"],{

/***/ "KMAK":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/user/user-setup/user-setup.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSetupComponent", function() { return UserSetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserSetupComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserSetupComponent.ɵfac = function UserSetupComponent_Factory(t) { return new (t || UserSetupComponent)(); };
UserSetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSetupComponent, selectors: [["app-user-setup"]], decls: 2, vars: 0, template: function UserSetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-setup works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSetupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-setup',
                templateUrl: './user-setup.component.html',
                styleUrls: ['./user-setup.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "t9bk":
/*!********************************************************************!*\
  !*** ./src/app/modules/admin/user/user-setup/user-setup.module.ts ***!
  \********************************************************************/
/*! exports provided: UserSetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSetupModule", function() { return UserSetupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_learn_components_card_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@learn/components/card/card.module */ "B1ue");
/* harmony import */ var src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/ui/message/message.module */ "cGRK");
/* harmony import */ var src_app_modules_ui_help_tooltip_help_tooltip_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/ui/help-tooltip/help-tooltip.module */ "4ibu");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-intl-tel-input */ "t34c");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _user_setup_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-setup-routing.module */ "wIRt");
/* harmony import */ var _user_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-setup.component */ "KMAK");











class UserSetupModule {
}
UserSetupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserSetupModule });
UserSetupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserSetupModule_Factory(t) { return new (t || UserSetupModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__["NgxIntlTelInputModule"],
            src_learn_components_card_card_module__WEBPACK_IMPORTED_MODULE_2__["LearnCardModule"],
            src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_3__["LearnMessageModule"],
            src_app_modules_ui_help_tooltip_help_tooltip_module__WEBPACK_IMPORTED_MODULE_4__["HelpTooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"].forRoot(),
            _user_setup_routing_module__WEBPACK_IMPORTED_MODULE_7__["UserSetupRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserSetupModule, { declarations: [_user_setup_component__WEBPACK_IMPORTED_MODULE_8__["UserSetupComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__["NgxIntlTelInputModule"],
        src_learn_components_card_card_module__WEBPACK_IMPORTED_MODULE_2__["LearnCardModule"],
        src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_3__["LearnMessageModule"],
        src_app_modules_ui_help_tooltip_help_tooltip_module__WEBPACK_IMPORTED_MODULE_4__["HelpTooltipModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _user_setup_routing_module__WEBPACK_IMPORTED_MODULE_7__["UserSetupRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSetupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_user_setup_component__WEBPACK_IMPORTED_MODULE_8__["UserSetupComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__["NgxIntlTelInputModule"],
                    src_learn_components_card_card_module__WEBPACK_IMPORTED_MODULE_2__["LearnCardModule"],
                    src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_3__["LearnMessageModule"],
                    src_app_modules_ui_help_tooltip_help_tooltip_module__WEBPACK_IMPORTED_MODULE_4__["HelpTooltipModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"].forRoot(),
                    _user_setup_routing_module__WEBPACK_IMPORTED_MODULE_7__["UserSetupRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "wIRt":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin/user/user-setup/user-setup-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: UserSetupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSetupRoutingModule", function() { return UserSetupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-setup.component */ "KMAK");





const routes = [
    { path: '', component: _user_setup_component__WEBPACK_IMPORTED_MODULE_2__["UserSetupComponent"] }
];
class UserSetupRoutingModule {
}
UserSetupRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserSetupRoutingModule });
UserSetupRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserSetupRoutingModule_Factory(t) { return new (t || UserSetupRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserSetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSetupRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-user-user-setup-user-setup-module.js.map