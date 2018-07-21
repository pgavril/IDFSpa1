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

  @Input()

 // saldo: ClientAccountModel;
  public amount: number = 10000;
  public credit:number = 0;
  public notEnough: false;
  public isLoading: true;

  constructor(private accountService: AccountService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.credit = this.activatedRoute.snapshot.params['id'] as number;
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;

  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.amount); }


  submitfromCredit() {
    this.updateAcct(this.amount);

   

  }

  updateAcct(draw) {
    //if (this.saldo.credit < draw) {
    //  console.error("Not enough Funds!");
    //  return;
   // }
    this.accountService.updateAcct(draw).subscribe(
      data => {
        this.router.navigate(['account']);
        return true;
      },
      error => {
        console.error("Error saving acct!");

      }
    );

  }
}
