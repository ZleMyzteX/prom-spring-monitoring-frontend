import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private backendUri = "http://localhost:8080/"

  constructor(private httpClient: HttpClient) { }

  callTest(): Observable<any> {
    return this.httpClient.get<string>(this.backendUri + "test");
  }
}
