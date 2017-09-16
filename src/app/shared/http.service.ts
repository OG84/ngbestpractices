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
    const get = super.get(url, options);
    this.loadingService.start(get);

    return get;
  }
}
