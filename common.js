(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "Mg80":
/*!*****************************************!*\
  !*** ./src/app/core/api/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
class ApiService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rootUrl;
    }
    addUpdateProgram(data) {
        return this.http.post(`/api/Program/AddUpdateProgram`, data || {});
    }
    addUpdateClassLevel(data) {
        return this.http.post(`/api/Class/AddUpdateClassLevel`, data || {});
    }
    addUpdateBatchMode(data) {
        return this.http.post(`/api/Batch/AddUpdateBatchMode`, data || {});
    }
    addUpdateBatchCategory(data) {
        return this.http.post(`/api/Batch/AddUpdateBatchCategory`, data || {});
    }
    addUpdateStyle(data) {
        return this.http.post(`/api/Style/AddUpdateStyle`, data || {});
    }
    addUpdateRoom(data) {
        return this.http.post(`/api/Room/AddUpdateRoom`, data || {});
    }
    addAppointmentCategory(data) {
        return this.http.post(`/api/AppointmentCategory/AddAppointmentCategory`, data || {});
    }
    addUpdateOpenProgramPackage(data) {
        return this.http.post(`/api/OpenProgram/AddUpdateOpenProgramPackage`, data || {});
    }
    addNotificationCategory(data) {
        return this.http.post(`/api/NotificationCategory/AddNotificationCategory`, data || {});
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "gk47":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/admin/appointment/appointment-profile/appointment-profile-list/appointment-profile-list.service.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: AppointmentProfileListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentProfileListService", function() { return AppointmentProfileListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class AppointmentProfileListService {
    constructor() {
        this.appointmentProfileListMatDrawer = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.appointmentprofilelostdrawer = this.appointmentProfileListMatDrawer.asObservable();
    }
    getAppointmentProfileListMatDrawer() {
        return this.appointmentProfileListMatDrawer.value;
    }
    setAppointmentProfileListMatDrawer(value) {
        this.appointmentProfileListMatDrawer.next(value);
    }
}
AppointmentProfileListService.ɵfac = function AppointmentProfileListService_Factory(t) { return new (t || AppointmentProfileListService)(); };
AppointmentProfileListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppointmentProfileListService, factory: AppointmentProfileListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentProfileListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map