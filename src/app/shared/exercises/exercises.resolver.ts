import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ExercisesService } from './exercises.service';
import { Exercise } from './exercises.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ExercisesResolver implements Resolve<Exercise[]> {
  constructor(private exercisesService: ExercisesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Exercise[] | Observable<Exercise[]> | Promise<Exercise[]> {
    return this.exercisesService.getExercises();
  }
}
