import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Exercise } from './exercises.model';
import { LoadingService } from 'angular-loading-service';

@Injectable()
export class ExercisesService {
  constructor(private loadingService: LoadingService) {

  }

  getExercises(): Observable<Exercise[]> {
    const getExercises: Observable<Exercise[]> = Observable.create(observer => {
      setTimeout(() => {
        observer.next(this.createExercises());
        observer.complete();
      }, 1500);
    });

    this.loadingService.start(getExercises);
    return getExercises;
  }

  private createExercises(): Exercise[] {
    const exercises: Exercise[] = [];
    for (let i = 0; i < 3; i++) {
      const exercise: Exercise = {
        id: i,
        name: `Exercise ${i}`
      };
      exercises.push(exercise);
    }
    return exercises;
  }
}
