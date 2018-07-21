import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'idf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'idf';
  public values: string[];
  constructor(private http: HttpClient) {
    //this.http.get('/api/values').subscribe(result => {
    //  this.values = result as string[];
    //}, error => console.error(error));
  }
}
