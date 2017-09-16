import { Http, RequestOptionsArgs, Response, ConnectionBackend, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';

@Injectable()
export class HttpService extends Http {
  constructor(
    _backend: ConnectionBackend,
    _defaultOptions: RequestOptions,
    private loadingService?: LoadingService) {

    super(_backend, _defaultOptions);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.loadingService.start();

    const get = super.get(url, options);
    get.subscribe(x => this.loadingService.stop());

    return get;
  }
}
