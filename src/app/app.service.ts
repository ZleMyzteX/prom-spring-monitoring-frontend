import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // localhost for local k8s deployment
  //private backendUri = "http://localhost:32080/"
  // localhost for "normal" localhost
  private backendUri = "http://localhost:8080/"

  constructor(private httpClient: HttpClient) { }

  callTest(): Observable<any> {
    return this.httpClient.get<string>(this.backendUri + "test");
  }

  callStandardDelay(): Observable<any> {
    return this.httpClient.get<string>(this.backendUri + "delay");
  }

  callCustomDelay(delay: number): Observable<any> {
    return this.httpClient.get<string>(this.backendUri + "delay/" + delay);
  }

  getCurrentBackendUri(): string {
    return this.backendUri;
  }
}
