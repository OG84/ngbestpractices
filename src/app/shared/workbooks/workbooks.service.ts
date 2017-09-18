import { Injectable } from '@angular/core';
import { Workbook } from './workbook.model';
import { Observable } from 'rxjs/Observable';
import { LoadingService } from 'angular-loading-service';

@Injectable()
export class WorkbooksService {

  constructor(private loadingService: LoadingService) {

  }

  getWorkbooks(): Observable<Workbook[]> {
    const getWorkbooks: Observable<Workbook[]> = Observable.create(observer => {
      setTimeout(() => {
        observer.next(this.createWorkbooks());
        observer.complete();
      }, 500);
    });

    this.loadingService.start(getWorkbooks);
    return getWorkbooks;
  }

  private createWorkbooks(): Workbook[] {
    const workbooks: Workbook[] = [];
    for (let i = 0; i < 3; i++) {
      const workbook: Workbook = {
        id: i,
        name: `Workbook ${i}`
      };
      workbooks.push(workbook);
  }
    return workbooks;
  }
}
