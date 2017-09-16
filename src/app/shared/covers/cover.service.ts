import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingService } from '../loading.service';

@Injectable()
export class CoverService {

  constructor(private loadingService: LoadingService) { }

  getCoverUrl(): Observable<string> {
    const cover: Observable<string> = Observable.create(observer => {
      setTimeout(() => {
        observer.next('https://www.phase-6.de/system/galleries/pics/cover_cornelsen/xcornelsen_access_3.png.pagespeed.ic.9qc-DEg5nH.jpg');
        observer.complete();
      }, 800);
    });

    this.loadingService.start(cover);
    return cover;
  }
}
