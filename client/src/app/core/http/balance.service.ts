import {inject, Injectable} from '@angular/core';
import {YearBalance} from '../model/year-balance.model';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {YEAR_BALANCE_MOCK} from '../mocks/year-balance.mock';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  readonly http = inject(HttpClient);

  getAllBalances$(): Observable<Array<YearBalance>> {
    // TODO: Integrate BE API
    //return this.http.get<Array<YearBalance>>('');

    return of(YEAR_BALANCE_MOCK);
  }

  async getAllBalances(): Promise<Array<YearBalance>> {
    // TODO: Integrate BE API

    return new Promise(resolve => {
      setTimeout(() => resolve(YEAR_BALANCE_MOCK), 1000)
    });
  }
}
