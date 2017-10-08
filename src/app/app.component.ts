import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public popularMovies;
  constructor(private http: Http) {

  }

  public ngOnInit() { }

}
