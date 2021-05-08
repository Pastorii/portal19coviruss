import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/pr`;
  }

  obterdados(): Promise<any>{
    return this.http.get(`${this.url}`)
    .toPromise()
    .then(Response => Response );
  }


}
