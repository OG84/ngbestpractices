import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { WorkbooksService } from './workbooks.service';
import { Workbook } from './workbook.model';
import { Injectable } from '@angular/core';

@Injectable()
export class WorkbooksResolver implements Resolve<Workbook[]> {
  constructor(private workbooksService: WorkbooksService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Workbook[] | Observable<Workbook[]> | Promise<Workbook[]> {
    return this.workbooksService.getWorkbooks();
  }
}
