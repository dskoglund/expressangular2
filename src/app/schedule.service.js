"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var ScheduleService = (function () {
    function ScheduleService(http) {
        this.http = http;
        this.scheduleUrl = '/upcoming_pga_schedule';
    }
    ScheduleService.prototype.getSchedule = function () {
        var _this = this;
        return this.http.get(this.scheduleUrl)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.data = data; }, function (err) { return _this.error = err; }); // Reach here if fails
        try { }
        catch ( = this.handleError) { }
        ;
    };
    ScheduleService.prototype.getHello = function () {
        var _this = this;
        return this.http.get('upcoming_pga_schedule')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.data = data; }, function (err) { return _this.error = err; }); // Reach here if fails
        try { }
        catch ( = function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); }) { }
        ;
    };
    ScheduleService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ScheduleService;
}());
ScheduleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ScheduleService);
exports.ScheduleService = ScheduleService;
//# sourceMappingURL=schedule.service.js.map