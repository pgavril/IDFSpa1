import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngMaterialModule } from './angmaterial';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccountComponent } from './account/account.component';
import { AccountService } from './account.service';
import { FormatAccountNumberPipe } from './format-account-number.pipe';
import { UiModule } from './ui/ui.module';
import { DrawComponent } from './draw/draw.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccountComponent,
    FormatAccountNumberPipe,
    DrawComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngMaterialModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'account', pathMatch: 'full' },
      { path: 'account', component: AccountComponent },
      { path: 'draw'  , component: DrawComponent },
      { path: '**', redirectTo: 'account' }
    ]),
    UiModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
