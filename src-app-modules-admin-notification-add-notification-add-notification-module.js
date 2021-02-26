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
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/ui/select/select.module */ "Miw4");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ "CzEO");
/* harmony import */ var _add_notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-notification-routing.module */ "a2kp");
/* harmony import */ var _add_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-notification.component */ "ToVr");










class AddNotificationModule {
}
AddNotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddNotificationModule });
AddNotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddNotificationModule_Factory(t) { return new (t || AddNotificationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"].forRoot(),
            src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_3__["SelectModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_4__["QuillModule"].forRoot({
                modules: {
                    syntax: false,
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ 'header': 1 }, { 'header': 2 }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'script': 'sub' }, { 'script': 'super' }],
                        [{ 'indent': '-1' }, { 'indent': '+1' }],
                        [{ 'direction': 'rtl' }],
                        [{ 'size': ['small', false, 'large', 'huge'] }],
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'font': [] }],
                        [{ 'align': [] }],
                        ['clean']
                    ]
                }
            }),
            _add_notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddNotificationRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddNotificationModule, { declarations: [_add_notification_component__WEBPACK_IMPORTED_MODULE_6__["AddNotificationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_3__["SelectModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_4__["QuillModule"], _add_notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddNotificationRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNotificationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_add_notification_component__WEBPACK_IMPORTED_MODULE_6__["AddNotificationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"].forRoot(),
                    src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_3__["SelectModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_4__["QuillModule"].forRoot({
                        modules: {
                            syntax: false,
                            toolbar: [
                                ['bold', 'italic', 'underline', 'strike'],
                                ['blockquote', 'code-block'],
                                [{ 'header': 1 }, { 'header': 2 }],
                                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                [{ 'script': 'sub' }, { 'script': 'super' }],
                                [{ 'indent': '-1' }, { 'indent': '+1' }],
                                [{ 'direction': 'rtl' }],
                                [{ 'size': ['small', false, 'large', 'huge'] }],
                                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                                [{ 'color': [] }, { 'background': [] }],
                                [{ 'font': [] }],
                                [{ 'align': [] }],
                                ['clean']
                            ]
                        }
                    }),
                    _add_notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddNotificationRoutingModule"]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_select_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/select/select.component */ "GlKx");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quill */ "CzEO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class AddNotificationComponent {
    constructor() {
        this.notificationCategoryData = [];
        this.editorPlacehorder = "";
    }
    getNotificationRoleType(event) {
        this.notification.roleTypeId = event[0].lookupValueId;
    }
    getNotificationCategoryType(event) {
        this.notification.categoryTypeId = event[0].lookupValueId;
    }
    onContentChanged(event) {
    }
    clearAll() {
    }
    submitAddNotificationForm(form) {
    }
    ngOnInit() {
        this.notification = {};
        this.roleTypeData = [
            {
                "lookupValueId": 43,
                "lookupValueName": "Admin",
                "description": "Male",
                "isActive": true,
                "isCommon": true,
                "apartmentId": null,
                "isDisabled": false
            },
            {
                "lookupValueId": 44,
                "lookupValueName": "Staff",
                "description": "Female",
                "isActive": true,
                "isCommon": true,
                "apartmentId": null,
                "isDisabled": false
            },
            {
                "lookupValueId": 45,
                "lookupValueName": "Student",
                "description": "Female",
                "isActive": true,
                "isCommon": true,
                "apartmentId": null,
                "isDisabled": false
            },
            {
                "lookupValueId": 46,
                "lookupValueName": "Parent",
                "description": "Female",
                "isActive": true,
                "isCommon": true,
                "apartmentId": null,
                "isDisabled": false
            }
        ];
    }
}
AddNotificationComponent.ɵfac = function AddNotificationComponent_Factory(t) { return new (t || AddNotificationComponent)(); };
AddNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddNotificationComponent, selectors: [["app-add-notification"]], decls: 31, vars: 10, consts: [[1, "add-notification-wrapper"], [1, "main"], [1, "mb-5"], [1, "bg-card", "shadow", "px-10", "py-8"], ["name", "addNotificationForm", "novalidate", ""], ["addNotificationForm", "ngForm"], [1, "row"], [1, "col-sm-4"], ["labelText", "Role Type", "fieldPlaceholder", "Select Role", "fieldValue", "lookupValueName", "fieldId", "lookupValueId", 3, "fieldRequired", "fieldList", "fieldModel", "fieldParams"], ["labelText", "Notification Category", "fieldPlaceholder", "Select Category", "fieldValue", "lookupValueName", "fieldId", "lookupValueId", 3, "fieldRequired", "fieldList", "fieldModel", "fieldParams"], [1, "col-sm-12"], [1, "input-box"], [1, "mandatory"], ["type", "text", "placeholder", "Enter", "name", "subject", "required", "", 1, "form-control", "form-group", 3, "ngModel", "ngModelChange"], ["name", "ckeditor", "required", "", 1, "quill-editor", 3, "placeholder", "ngModel", "ngModelChange"], [1, "col-sm-12", "text-right"], ["mat-flat-button", "", 1, "mr-2", 3, "click"], ["mat-flat-button", "", 3, "color", "click"]], template: function AddNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "learn-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fieldParams", function AddNotificationComponent_Template_learn_select_fieldParams_9_listener($event) { return ctx.getNotificationRoleType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "learn-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fieldParams", function AddNotificationComponent_Template_learn_select_fieldParams_11_listener($event) { return ctx.getNotificationCategoryType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNotificationComponent_Template_input_ngModelChange_18_listener($event) { return ctx.notification.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "quill-editor", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNotificationComponent_Template_quill_editor_ngModelChange_25_listener($event) { return ctx.notification.ckeditor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNotificationComponent_Template_button_click_27_listener() { return ctx.clearAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNotificationComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.submitAddNotificationForm(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldRequired", "required")("fieldList", ctx.roleTypeData)("fieldModel", ctx.notification.roleTypeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldRequired", "required")("fieldList", ctx.notificationCategoryData)("fieldModel", ctx.notification.categoryTypeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.notification.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.editorPlacehorder)("ngModel", ctx.notification.ckeditor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _ui_select_select_component__WEBPACK_IMPORTED_MODULE_2__["SelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillEditorComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
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