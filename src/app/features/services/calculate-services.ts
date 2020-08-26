import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { CalculateElement, CalculateParamElement } from '../models/calculate-model';

@Injectable({
  providedIn: 'root'
})
export class CalculateServices {

  public calculateResponse: BehaviorSubject<CalculateElement> = new BehaviorSubject(null);
  public calculateResponse$ = this.calculateResponse.asObservable();

  constructor(private httpClient: HttpClient) { }

  getCalculate(calculateParam: CalculateParamElement): Observable<CalculateElement> {
    debugger;
    const resultDatosCalculados = this.httpClient.post<CalculateElement>(`http://localhost:9400/calculator/calculate`, calculateParam);
    return resultDatosCalculados;
  }


}
