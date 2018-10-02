import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      })
    };

    //http.get(baseUrl + "/api/SampleData/WeatherForecasts", { headers })
    //  .map(response => this.forecasts = response.json());
      //.catch(this.handleError);

    http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts', httpOptions).subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  //ngOnInit() {
  //  let headers = new Headers();
  //  headers.append('Content-Type', 'application/json');
  //  let authToken = localStorage.getItem('auth_token');
  //  headers.append('Authorization', `Bearer ${authToken}`);

  //  http.get(baseUrl + "/api/SampleData/WeatherForecasts", { headers })
  //    .map(response => this.forecasts = response.json());
  //  //// subscribe to router event
  //  //this.subscription = this.activatedRoute.queryParams.subscribe(
  //  //  (param: any) => {
  //  //    this.brandNew = param['brandNew'];
  //  //    this.credentials.email = param['email'];
  //  //  });
  //}
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
