import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { of, map, catchError, forkJoin } from 'rxjs';
import { urlsConfig } from './ngx-server-check.type';

@Injectable({
  providedIn: 'root'
})
export class NgxServerCheckService implements Resolve<any> {

  private http = inject(HttpClient)

  resolve(route: ActivatedRouteSnapshot) {
    const urlsConfig: urlsConfig[] = route.data['config'];
    const requests = urlsConfig.map((urlConfig: urlsConfig) =>
      this.http.get(urlConfig.url, { observe: 'response' }).pipe(
        map(response => (
          { 
            name: urlConfig['name'], 
            url: urlConfig['url'], 
            status: response.status,
            error: null 
          }
        )),
        catchError(error => {
          return of({ 
            name: urlConfig['name'], 
            url: urlConfig['url'], 
            status: error.status, 
            error: error.message 
          });
        })
      )
    );

    return forkJoin(requests);
  }
}
