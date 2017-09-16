import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Exercise } from './exercises.model';
import { LoadingService } from '../loading.service';

@Injectable()
export class ExercisesService {
  constructor(private loadingService: LoadingService) {

  }

  getExercises(): Observable<Exercise[]> {
    this.loadingService.start();
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.createExercises());
        observer.complete();
        this.loadingService.stop();
      }, 500);
    });
  }

  private createExercises(): Exercise[] {
    const exercises: Exercise[] = [];
    for (let i = 0; i < 10; i++) {
      const exercise: Exercise = {
        id: i,
        name: `Exercise ${i}`
      };
      exercises.push(exercise);
    }
    return exercises;
  }
}
