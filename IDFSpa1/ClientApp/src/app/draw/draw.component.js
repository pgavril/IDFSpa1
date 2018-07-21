"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var DrawComponent = /** @class */ (function () {
    function DrawComponent(accountService, router, activatedRoute) {
        this.accountService = accountService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.amount = 10000;
        this.submitted = false;
    }
    DrawComponent.prototype.ngOnInit = function () {
        this.saldo = this.activatedRoute.snapshot.params['id'];
    };
    DrawComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    Object.defineProperty(DrawComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.amount); },
        enumerable: true,
        configurable: true
    });
    DrawComponent.prototype.submitfromCredit = function () {
        this.updateAcct(this.amount);
    };
    DrawComponent.prototype.updateAcct = function (draw) {
        var _this = this;
        //if (this.saldo.credit < draw) {
        //  console.error("Not enough Funds!");
        //  return;
        // }
        this.accountService.updateAcct(draw).subscribe(function (data) {
            _this.router.navigate(['account']);
            return true;
        }, function (error) {
            console.error("Error saving acct!");
        });
    };
    __decorate([
        core_1.Input()
    ], DrawComponent.prototype, "saldo");
    DrawComponent = __decorate([
        core_1.Component({
            selector: 'idf-draw',
            templateUrl: './draw.component.html',
            styleUrls: ['./draw.component.css']
        })
    ], DrawComponent);
    return DrawComponent;
}());
exports.DrawComponent = DrawComponent;
