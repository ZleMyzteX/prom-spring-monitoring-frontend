import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prom-spring-monitoring-frontend';
  calledTest = false;
  testCallResult = '';

  constructor(private appService: AppService) {

  }

  testConnection(): void {
    console.log('test');
    this.calledTest = true;
    this.appService.callTest().subscribe({
      next: value => {
        this.testCallResult = value.response;
      }
    })
  }

}
