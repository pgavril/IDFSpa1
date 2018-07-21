"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
//import Accountmodel = require("./models/account.model");
//import ClientAccountModel = Accountmodel.ClientAccountModel;
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var AccountService = /** @class */ (function () {
    // public saldo: ClientAccountModel;
    function AccountService(http) {
        this.http = http;
        // this.http.get('/api/values').subscribe(result => {
        //    this.values = result as string[];
        //  },
        //  error => console.error(error));
    }
    //list(): Observable<ClientAccountModel> {
    //  return of ({balance: 0, credit: 100000});
    //}
    AccountService.prototype.list = function () {
        return this.http.get('/api/bank');
    };
    AccountService.prototype.listHttp = function (saldo) {
        this.http.get('/api/bank').subscribe(function (result) {
            saldo = result;
            console.log('Credit: ' + saldo.credit);
            console.log('Balance: ' + saldo.balance);
        }, function (error) {
            console.error(error);
            saldo.balance = 0;
            saldo.credit = 0;
        });
        return saldo;
    };
    // listHttp():  ClientAccountModel {
    // this.http.get('/api/bank').subscribe(result => {
    //    this.value = result as ClientAccountModel;
    //  },error => console.error(error));
    //  console.info(this.value);
    //  return this.value;
    // }
    AccountService.prototype.getAcct = function () {
        return this.http.get('/api/bank/1');
    };
    AccountService.prototype.createAcct = function (saldo) {
        var body = JSON.stringify(saldo);
        return this.http.post('/api/bank/', body, httpOptions);
    };
    AccountService.prototype.updateAcct = function (saldo) {
        var body = JSON.stringify(saldo);
        return this.http.put('/api/bank', body, httpOptions);
    };
    AccountService.prototype.getAccts = function () {
        return rxjs_1.forkJoin(this.http.get('/apibank/1'), this.http.get('apibank/2'));
    };
    AccountService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
