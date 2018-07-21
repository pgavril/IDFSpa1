import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../account.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientAccountModel } from '../models/account.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'idf-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})


export class AccountComponent implements OnInit {

  public values: string[];
  public saldo: ClientAccountModel = { balance: 0, credit: 0};
  public saldo1: ClientAccountModel = { balance: 0, credit: 0};
  public showSpinner : boolean = true;

  //  constructor(private accountService: AccountService ) { }

  constructor(private router: Router, private accountService: AccountService) {
   
  }

  ngOnInit() {
    

    this.getAcct();
   
  }

  getAcct() {
    this.accountService.getAcct().subscribe(
      // the first argument is a function which runs on success
      data => { this.saldo = data[0] as ClientAccountModel},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading accts')
    );
  }

  getAcct1() {
    this.accountService.list().subscribe(
      // the first argument is a function which runs on success
      data => { this.saldo1 = data; this.showSpinner = false;},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading accts')
    );
  }
  updateAcct(draw) {
    this.accountService.updateAcct(draw).subscribe(
      data => {
        // refresh the list
        this.getAcct();
        this.getAcct();
        return true;
      },
      error => {
        console.error("Error saving acct!");
        return Observable.throw(error);
      }
    );
  }

  withdraw() {
 
    this.router.navigate(['draw', this.saldo]);
  }

  public get withdrawProhibited() {
    if (this.saldo.credit <= 0) {
      return true;
    }



  }
}

