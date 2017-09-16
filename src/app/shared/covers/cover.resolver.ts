import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CoverService } from './cover.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CoverResolver implements Resolve<string> {
  constructor(private coverService: CoverService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string | Observable<string> | Promise<string> {
    return this.coverService.getCoverUrl();
  }
}
