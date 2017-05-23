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
var Observable_1 = require("rxjs/Observable");
require("./rxjs-operators");
var pga_schedule_event_1 = require("./pga-schedule-event");
var UpcomingScheduleService = (function () {
    function UpcomingScheduleService(http) {
        this.http = http;
        this.scheduleUrl = '/upcoming_pga_schedule';
    }
    UpcomingScheduleService.prototype.getSchedule = function () {
        return this.http.get(this.scheduleUrl)
            .map(this.extractScheduleData)
            .catch(this.handleError);
    };
    UpcomingScheduleService.prototype.extractScheduleData = function (res) {
        var body = res.json();
        var pgaEvents = pga_schedule_event_1.PGAEvent[] = [];
        for (var item in body) {
            var pgaEvent = body[item];
            var pgaEventData = {
                date: pgaEvent.date,
                tournamentEvent: pgaEvent.tournamentEvent,
                tournamentLocation: pgaEvent.tournamentLocation,
                tv: pgaEvent.tv,
                defendingChamp: pgaEvent.defendingChamp,
                purse: pgaEvent.purse,
                completed: pgaEvent.completed
            };
            pgaEvents.push(pgaEventData);
        }
        return pgaEvents;
    };
    UpcomingScheduleService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return Observable_1.Observable.throw(errMsg);
    };
    return UpcomingScheduleService;
}());
UpcomingScheduleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UpcomingScheduleService);
exports.UpcomingScheduleService = UpcomingScheduleService;
//# sourceMappingURL=pga-schedule.service.js.map