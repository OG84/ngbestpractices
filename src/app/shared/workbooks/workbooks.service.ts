import { Injectable } from '@angular/core';
import { Workbook } from './workbook.model';
import { Observable } from 'rxjs/Observable';
import { LoadingService } from '../loading.service';

@Injectable()
export class WorkbooksService {

  constructor(private loadingService: LoadingService) {

  }

  getWorkbooks(): Observable<Workbook[]> {
    this.loadingService.start();
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.createWorkbooks());
        observer.complete();
        this.loadingService.stop();
      }, 1000);
    });
  }

  private createWorkbooks(): Workbook[] {
    const workbooks: Workbook[] = [];
    for (let i = 0; i < 10; i++) {
      const workbook: Workbook = {
        id: i,
        name: `Workbook ${i}`
      };
      workbooks.push(workbook);
  }
    return workbooks;
  }
}
