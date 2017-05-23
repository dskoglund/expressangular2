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
var golfer_service_1 = require("./golfer.service");
var schedule_service_1 = require("./schedule.service");
var PGAScheduleComponent = (function () {
    function PGAScheduleComponent(golferService, scheduleService) {
        this.golferService = golferService;
        this.scheduleService = scheduleService;
        this.toolbarTitle = 'PGA Upcoming Schedule of Events';
    }
    PGAScheduleComponent.prototype.getGolfers = function () {
        var _this = this;
        this.golferService.getGolfers()
            .then(function (golfers) { return _this.golfers = golfers; });
    };
    ;
    PGAScheduleComponent.prototype.getHello = function () {
        this.scheduleService.getHello()
            .then(function (res) { return console.log(res); })
            .then(console.log(res));
    };
    PGAScheduleComponent.prototype.ngOnInit = function () {
        this.getGolfers();
        this.getHello();
    };
    return PGAScheduleComponent;
}());
PGAScheduleComponent = __decorate([
    core_1.Component({
        selector: 'pga-upcoming-schedule',
        templateUrl: "./pga-schedule.component.html",
        styleUrls: ['./pga-schedule.component.css']
    }),
    __metadata("design:paramtypes", [golfer_service_1.GolferService, schedule_service_1.ScheduleService])
], PGAScheduleComponent);
exports.PGAScheduleComponent = PGAScheduleComponent;
//# sourceMappingURL=pga-schedule.component.js.map