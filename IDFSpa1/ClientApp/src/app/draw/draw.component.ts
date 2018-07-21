import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../account.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientAccountModel } from '../models/account.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'idf-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {

  @Input() credit: number;
  public saldo: ClientAccountModel = { balance: 0, credit: 0 };

  public amount: number = 0;

  public notEnough:boolean = false;
  public showSpinner:boolean  = true;

  constructor(private accountService: AccountService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // let credit = this.activatedRoute.snapshot.params['id'] as number;
  }

  ngOnInit() {
    //this.credit = this.activatedRoute.snapshot.params['id'] as number;
   
  
    this.notEnough = false;
    this.showSpinner = false;
  }

 
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.amount); }


  submitfromCredit() {
    this.showSpinner = true;

    this.getAcctData();

    this.showSpinner = false;
    this.notEnough = false;

  }
  getAcctData() {
    this.accountService.list().subscribe(
      // the first argument is a function which runs on success
      data => {
        this.saldo = data as ClientAccountModel;
        console.log('CreditD: ' + this.saldo.credit);
        console.log('BalanceD: ' + this.saldo.balance);

        this.saldo = data;
        if (this.saldo.credit > this.amount) {
          console.log('Good to go');
          this.updateAcct(this.amount);
        } else {
          console.log('Bad to go');
          this.notEnough = true;
          return;
        }
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading accts for draw')
    );
  }

 

  updateAcct(draw) {
    
    this.accountService.updateAcct(draw).subscribe(
      data => {
       // this.showSpinner = false;
        this.router.navigate(['account']);
        return true;
      },
      error => {
        console.error("Error saving acct!");

      }
    );

  }
}
