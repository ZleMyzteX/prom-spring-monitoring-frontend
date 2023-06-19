import { Component } from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  methodCalled:boolean = false;
  testCallResult = '';
  delay:number = 0;

  constructor(private appService: AppService) {
  }

  getBackendUriFromAppService(): string {
    return this.appService.getCurrentBackendUri();
  }

  testConnection(): string {
    console.log('test');
    this.methodCalled = true;
    this.appService.callTest()
      .subscribe({
      next: value => {
        this.testCallResult = value.response;
      },
      error: error => {
        console.log(error);
        this.testCallResult = this.buildErrorString('testConnection');
      },
    })
    return 'Error, backend not reachable';
  }

  standardDelay(): void {
    console.log('getting standard delay (1000ms)');
    this.methodCalled = true;
    this.testCallResult = 'waiting...';
    this.appService.callStandardDelay()
      .subscribe({
        next: value => {
          this.testCallResult = value.response;
        },
        error: error => {
          console.log(error);
          this.testCallResult = this.buildErrorString('standardDelay');
        },
      })
  }

  customDelay(): void {
    console.log('getting custom delay: ' + this.delay);
    this.appService.callCustomDelay(this.delay)
      .subscribe({
        next: value => {
          this.testCallResult = value.response;
        },
        error: error => {
          this.testCallResult = this.buildErrorString('customDelay');
          console.log(error);
        },
      })
  }

  private buildErrorString(methodName: string):string {
    return 'Error, cant reach backend (method: ' + methodName + ')';
  }
}
