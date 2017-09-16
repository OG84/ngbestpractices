import { Component, OnInit } from '@angular/core';
import { WorkbooksService } from '../../shared/workbooks/workbooks.service';
import { ExercisesService } from '../../shared/exercises/exercises.service';
import { AptsService } from '../../shared/apts/apts.service';
import { Workbook } from '../../shared/workbooks/workbook.model';
import { Exercise } from '../../shared/exercises/exercises.model';
import { Apt } from '../../shared/apts/apt.model';
import { CoverService } from '../../shared/covers/cover.service';

@Component({
  selector: 'ngbp-without-resolvers',
  templateUrl: './without-resolvers.component.html',
  styleUrls: ['./without-resolvers.component.scss']
})
export class WithoutResolversComponent implements OnInit {

  workbooks: Workbook[];
  exercises: Exercise[];
  apts: Apt[];
  coverUrl: string;

  constructor(
    private workbooksService: WorkbooksService,
    private exercisesService: ExercisesService,
    private aptsService: AptsService,
    private coverService: CoverService) {

  }

  ngOnInit() {
    this.workbooksService.getWorkbooks().subscribe(x => this.workbooks = x);
    this.exercisesService.getExercises().subscribe(x => this.exercises = x);
    this.aptsService.getApts().subscribe(x => this.apts = x);
    this.coverService.getCoverUrl().subscribe(x => this.coverUrl = x);
  }

}
