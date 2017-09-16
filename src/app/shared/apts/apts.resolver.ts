import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AptsService } from './apts.service';
import { Apt } from './apt.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AptsResolver implements Resolve<Apt[]> {
  constructor(private aptsService: AptsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Apt[] | Observable<Apt[]> | Promise<Apt[]> {
    return this.aptsService.getApts();
  }
}
