import { Injectable } from '@angular/core';
import { ClientAccountModel } from './models/account.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {forkJoin} from 'rxjs';
//import Accountmodel = require("./models/account.model");
//import ClientAccountModel = Accountmodel.ClientAccountModel;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AccountService {

 // public saldo: ClientAccountModel;

  constructor(private http: HttpClient) {
    // this.http.get('/api/values').subscribe(result => {
    //    this.values = result as string[];
    //  },
    //  error => console.error(error));
  }
  //list(): Observable<ClientAccountModel> {
  //  return of ({balance: 0, credit: 100000});
  //}

  list() {
    return this.http.get<ClientAccountModel>('/api/bank');
  }

  listHttp(saldo): ClientAccountModel {
  
    this.http.get<ClientAccountModel>('/api/bank').subscribe(result => {
        saldo = result;
    
      console.log('Credit: ' + saldo.credit);
      console.log('Balance: ' + saldo.balance);
    },
      error => {
        console.error(error);
        saldo.balance = 0;
        saldo.credit = 0;
      });

    return saldo;
   }

  // listHttp():  ClientAccountModel {
  // this.http.get('/api/bank').subscribe(result => {
  //    this.value = result as ClientAccountModel;
  //  },error => console.error(error));
  //  console.info(this.value);
  //  return this.value;
  // }

  getAcct() {
    return this.http.get('/api/bank/1');
  }

  createAcct(saldo) {
    let body = JSON.stringify(saldo);
    return this.http.post('/api/bank/', body, httpOptions);
  }

  updateAcct(saldo) {
   
    let body = JSON.stringify(saldo  );
    
    return this.http.put('/api/bank', body, httpOptions);
  }
  getAccts() {
    return forkJoin(
      this.http.get('/apibank/1'),
      this.http.get('apibank/2')
    );
  }

}
