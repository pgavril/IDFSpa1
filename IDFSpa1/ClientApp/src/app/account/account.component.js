"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AccountComponent = /** @class */ (function () {
    //  constructor(private accountService: AccountService ) { }
    function AccountComponent(router, accountService) {
        this.router = router;
        this.accountService = accountService;
        this.saldo = { balance: 0, credit: 0 };
        this.saldo1 = { balance: 0, credit: 0 };
        this.isLoading = true;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getAcct();
    };
    AccountComponent.prototype.getAcct = function () {
        var _this = this;
        this.accountService.getAcct().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.saldo = data[0]; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { return console.log('done loading accts'); });
    };
    AccountComponent.prototype.getAcct1 = function () {
        var _this = this;
        this.accountService.list().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.saldo1 = data; _this.isLoading = false; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { return console.log('done loading accts'); });
    };
    AccountComponent.prototype.updateAcct = function (draw) {
        var _this = this;
        this.accountService.updateAcct(draw).subscribe(function (data) {
            // refresh the list
            _this.getAcct();
            _this.getAcct();
            return true;
        }, function (error) {
            console.error("Error saving acct!");
            return rxjs_1.Observable["throw"](error);
        });
    };
    AccountComponent.prototype.withdraw = function () {
        this.router.navigate(['draw', this.saldo]);
    };
    Object.defineProperty(AccountComponent.prototype, "withdrawProhibited", {
        get: function () {
            if (this.saldo.credit <= 0) {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    AccountComponent = __decorate([
        core_1.Component({
            selector: 'idf-account',
            templateUrl: './account.component.html',
            styleUrls: ['./account.component.css']
        })
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
