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
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "wbvY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_select_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/select/select.component */ "GlKx");
/* harmony import */ var _ui_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/datepicker/datepicker.component */ "8uQT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");










function AddProgramComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProgramComponent_div_57_Template_mat_checkbox_ngModelChange_1_listener($event) { const item_r2 = ctx.$implicit; return item_r2.checked = $event; })("change", function AddProgramComponent_div_57_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectRecurranceId(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", item_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r2.checked)("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.value);
} }
class AddProgramComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
    }
    onMainProgramChange(event) {
        this.program.programId = event[0].programId;
    }
    onProgramStyleChange(event) {
        this.program.subProgramStyleId = event[0].subProgramStyleId;
    }
    onProgramClassChange(event) {
        this.program.subProgramCategoryId = event[0].subProgramCategoryId;
    }
    onProgramBatchChange(event) {
        this.program.subProgramBatchId = event[0].subProgramBatchId;
    }
    getProgramStartDate(event) {
        this.program.startAge = event;
    }
    getProgramEndDate(event) {
        this.program.endAge = event;
    }
    onProgramTimingChange(event) {
        this.program.timingId = event;
    }
    selectRecurranceId(item) {
        if (item.checked) {
            this.program.recurranceId = item.recurranceId;
        }
    }
    submitAddProgramBatchForm(form) {
    }
    ngOnInit() {
        this.sharedService.timezonecast.subscribe(timeZone => {
            console.log(timeZone);
            this.timeZone = timeZone;
        });
        this.program = {};
        this.program.attachMent = 'FreeStyle.pdf';
        this.mainProgramList = [
            {
                programId: 1,
                value: 'Dance'
            },
            {
                programId: 2,
                value: 'Yoga'
            },
            {
                programId: 3,
                value: 'Karate'
            }
        ];
        this.programStyleList = [
            {
                subProgramStyleId: 1,
                value: 'FreeStyle'
            },
            {
                subProgramStyleId: 2,
                value: 'Zumba'
            },
            {
                subProgramStyleId: 3,
                value: 'Ballet'
            },
            {
                subProgramStyleId: 4,
                value: 'Hip Hop'
            },
            {
                subProgramStyleId: 5,
                value: 'Jazz'
            },
            {
                subProgramStyleId: 6,
                value: 'Tap'
            }
        ];
        this.programBatchList = [
            {
                subProgramBatchId: 1,
                value: 'Weekday'
            },
            {
                subProgramBatchId: 2,
                value: 'Weekend'
            }
        ];
        this.programClassLevelList = [
            {
                subProgramCategoryId: 1,
                value: 'Adults'
            },
            {
                subProgramCategoryId: 2,
                value: 'Kids'
            },
            {
                subProgramCategoryId: 3,
                value: 'Women'
            }
        ];
        this.programTimingList = [
            {
                timingId: 1,
                value: 'Yes'
            },
            {
                timingId: 2,
                value: 'No'
            }
        ];
        this.programRecurranceList = [
            {
                recurranceId: 1,
                value: 'Mon'
            },
            {
                recurranceId: 2,
                value: 'Tue'
            },
            {
                recurranceId: 3,
                value: 'Wed'
            },
            {
                recurranceId: 4,
                value: 'Thu'
            },
            {
                recurranceId: 5,
                value: 'Fri'
            },
            {
                recurranceId: 6,
                value: 'Sat'
            },
            {
                recurranceId: 7,
                value: 'Sun'
            }
        ];
    }
}
AddProgramComponent.ɵfac = function AddProgramComponent_Factory(t) { return new (t || AddProgramComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"])); };
AddProgramComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddProgramComponent, selectors: [["app-add-program"]], decls: 97, vars: 39, consts: [[1, "add-program-wrapper"], [1, "main"], [1, "mb-7"], [1, "bg-card", "shadow", "px-10", "py-8"], ["name", "addProgramBatchForm", "novalidate", "", 3, "ngSubmit"], ["addProgramBatchForm", "ngForm"], [1, "row"], [1, "col-sm-4"], ["labelText", "Main Program", "fieldPlaceholder", "Select Program", "fieldValue", "value", "fieldId", "programId", 3, "fieldRequired", "fieldList", "fieldModel", "fieldParams"], [1, "input-box"], [1, "ml-1", "text-warn", "font-medium"], ["type", "text", "placeholder", "Enter", "name", "programBatchId", "autocomplete", "off", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Enter", "name", "programName", "autocomplete", "off", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["labelText", "Class Level", "fieldPlaceholder", "Select Class", "fieldValue", "value", "fieldId", "subProgramCategoryId", 3, "fieldRequired", "fieldList", "fieldModel", "fieldParams"], ["type", "number", "placeholder", "Enter", "name", "totalMonth", "autocomplete", "off", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["labelText", "Start Date", "fieldName", "programStartDate", "type", "date", 3, "fieldRequired", "fieldModel", "fieldParams"], ["labelText", "End Date", "fieldName", "programEndDate", "type", "date", 3, "fieldRequired", "fieldModel", "fieldParams"], ["type", "text", "placeholder", "Enter", "name", "description", "autocomplete", "off", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["labelText", "Select Style", "fieldPlaceholder", "Select Style", "fieldValue", "value", "fieldId", "subProgramStyleId", 3, "fieldRequired", "fieldList", "fieldModel", "fieldParams"], ["labelText", "Select Batch", "fieldPlaceholder", "Select Batch", "fieldValue", "value", "fieldId", "subProgramBatchId", 3, "fieldRequired", "fieldList", "fieldModel", "fieldParams"], ["labelText", "Is Timing Fixed", "fieldPlaceholder", "Select", "fieldValue", "value", "fieldId", "timingId", 3, "fieldRequired", "fieldList", "fieldModel", "fieldParams"], [1, "col-sm-12"], [1, "md:flex", "mt-2"], ["class", "inline-block mr-4", 4, "ngFor", "ngForOf"], ["labelText", "Select Timings", "fieldPlaceholder", "Select", "fieldValue", "value", "fieldId", "timingId", 3, "fieldRequired", "fieldList", "fieldModel", "fieldParams"], ["labelText", "Select Room", "fieldPlaceholder", "Select", "fieldValue", "value", "fieldId", "timingId", 3, "fieldRequired", "fieldList", "fieldModel", "fieldParams"], ["type", "number", "placeholder", "Enter", "name", "studentsAllowed", "autocomplete", "off", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "font-semibold", "text-secondary", "right", "flex", "align-items-center"], ["svgIcon", "feather:paperclip", 1, "mr-2", "icon-sm"], [1, "input-box", "radio-box"], [1, "form-group"], ["name", "modeType", "id", "online", "type", "radio", 3, "ngModel", "value", "ngModelChange"], ["for", "online", 1, "radio-inline"], ["name", "modeType", "id", "inperson", "type", "radio", 3, "ngModel", "value", "ngModelChange"], ["for", "inperson", 1, "radio-inline"], ["name", "modeType", "id", "both", "type", "radio", 3, "ngModel", "value", "ngModelChange"], ["for", "both", 1, "radio-inline"], [1, "col-sm-12", "text-right", "my-8"], ["mat-flat-button", "", 3, "color"], [1, "inline-block", "mr-4"], [1, "my-1", "mr-2", 3, "name", "ngModel", "color", "ngModelChange", "change"]], template: function AddProgramComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddProgramComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.submitAddProgramBatchForm(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "learn-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fieldParams", function AddProgramComponent_Template_learn_select_fieldParams_9_listener($event) { return ctx.onMainProgramChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Program Batch ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProgramComponent_Template_input_ngModelChange_16_listener($event) { return ctx.program.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Program Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProgramComponent_Template_input_ngModelChange_23_listener($event) { return ctx.program.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "learn-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fieldParams", function AddProgramComponent_Template_learn_select_fieldParams_25_listener($event) { return ctx.onProgramClassChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Total Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProgramComponent_Template_input_ngModelChange_32_listener($event) { return ctx.program.totalMonth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "app-datepicker", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fieldParams", function AddProgramComponent_Template_app_datepicker_fieldParams_34_listener($event) { return ctx.getProgramStartDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "app-datepicker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fieldParams", function AddProgramComponent_Template_app_datepicker_fieldParams_36_listener($event) { return ctx.getProgramEndDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProgramComponent_Template_input_ngModelChange_43_listener($event) { return ctx.program.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "learn-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fieldParams", function AddProgramComponent_Template_learn_select_fieldParams_45_listener($event) { return ctx.onProgramStyleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "learn-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fieldParams", function AddProgramComponent_Template_learn_select_fieldParams_47_listener($event) { return ctx.onProgramBatchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "learn-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fieldParams", function AddProgramComponent_Template_learn_select_fieldParams_49_listener($event) { return ctx.onProgramTimingChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Select Recurrance ( M, T, W, Th, F, S, Su)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AddProgramComponent_div_57_Template, 3, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "learn-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fieldParams", function AddProgramComponent_Template_learn_select_fieldParams_59_listener($event) { return ctx.onProgramTimingChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "learn-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fieldParams", function AddProgramComponent_Template_learn_select_fieldParams_61_listener($event) { return ctx.onProgramTimingChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Max Students Allowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProgramComponent_Template_input_ngModelChange_68_listener($event) { return ctx.program.studentsAllowed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Attachment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "mat-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Program Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProgramComponent_Template_input_ngModelChange_83_listener($event) { return ctx.program.mode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProgramComponent_Template_input_ngModelChange_87_listener($event) { return ctx.program.mode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "In-Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProgramComponent_Template_input_ngModelChange_91_listener($event) { return ctx.program.mode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Both");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldRequired", "required")("fieldList", ctx.mainProgramList)("fieldModel", ctx.program.programId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.program.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.program.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldRequired", "required")("fieldList", ctx.programClassLevelList)("fieldModel", ctx.program.subProgramCategoryId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.program.totalMonth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldRequired", "null")("fieldModel", ctx.program.startAge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldRequired", "null")("fieldModel", ctx.program.endAge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.program.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldRequired", "required")("fieldList", ctx.programStyleList)("fieldModel", ctx.program.subProgramStyleId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldRequired", "required")("fieldList", ctx.programBatchList)("fieldModel", ctx.program.subProgramBatchId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldRequired", "required")("fieldList", ctx.programTimingList)("fieldModel", ctx.program.timingId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.programRecurranceList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldRequired", "required")("fieldList", ctx.programTimingList)("fieldModel", ctx.program.timingId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldRequired", "required")("fieldList", ctx.programTimingList)("fieldModel", ctx.program.timingId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.program.studentsAllowed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.program.attachMent, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.program.mode)("value", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.program.mode)("value", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.program.mode)("value", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _ui_select_select_component__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _ui_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__["DatepickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHJvZ3JhbS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProgramComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-program',
                templateUrl: './add-program.component.html',
                styleUrls: ['./add-program.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"] }]; }, null); })();


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
/* harmony import */ var src_app_modules_ui_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/ui/datepicker/datepicker.module */ "nmPQ");
/* harmony import */ var _add_program_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-program-routing.module */ "/3OR");
/* harmony import */ var _add_program_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-program.component */ "D/0K");










class AddProgramModule {
}
AddProgramModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddProgramModule });
AddProgramModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddProgramModule_Factory(t) { return new (t || AddProgramModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"].forRoot(),
            src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_3__["SelectModule"],
            src_app_modules_ui_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_4__["DatepickerModule"].forRoot(),
            _add_program_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddProgramRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddProgramModule, { declarations: [_add_program_component__WEBPACK_IMPORTED_MODULE_6__["AddProgramComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_3__["SelectModule"], src_app_modules_ui_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_4__["DatepickerModule"], _add_program_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddProgramRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProgramModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_add_program_component__WEBPACK_IMPORTED_MODULE_6__["AddProgramComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"].forRoot(),
                    src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_3__["SelectModule"],
                    src_app_modules_ui_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_4__["DatepickerModule"].forRoot(),
                    _add_program_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddProgramRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-program-add-program-add-program-module.js.map