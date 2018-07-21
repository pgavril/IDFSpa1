"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var angmaterial_1 = require("./angmaterial");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var menu_component_1 = require("./menu/menu.component");
var account_component_1 = require("./account/account.component");
var account_service_1 = require("./account.service");
var format_account_number_pipe_1 = require("./format-account-number.pipe");
var ui_module_1 = require("./ui/ui.module");
var draw_component_1 = require("./draw/draw.component");
var header_component_1 = require("./shared/header/header.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                account_component_1.AccountComponent,
                format_account_number_pipe_1.FormatAccountNumberPipe,
                draw_component_1.DrawComponent,
                header_component_1.HeaderComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                angmaterial_1.AngMaterialModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: 'account', pathMatch: 'full' },
                    { path: 'account', component: account_component_1.AccountComponent },
                    { path: 'draw', component: draw_component_1.DrawComponent },
                    { path: '**', redirectTo: 'account' }
                ]),
                ui_module_1.UiModule
            ],
            providers: [account_service_1.AccountService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
