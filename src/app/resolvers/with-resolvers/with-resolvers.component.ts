import { Component, OnInit } from '@angular/core';
import { Workbook } from '../../shared/workbooks/workbook.model';
import { Exercise } from '../../shared/exercises/exercises.model';
import { Apt } from '../../shared/apts/apt.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngbp-with-resolvers',
  templateUrl: './with-resolvers.component.html',
  styleUrls: ['./with-resolvers.component.scss']
})
export class WithResolversComponent implements OnInit {

  workbooks: Workbook[];
  exercises: Exercise[];
  apts: Apt[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.workbooks = this.route.snapshot.data['workbooks'];
    this.exercises = this.route.snapshot.data['exercises'];
    this.apts = this.route.snapshot.data['apts'];
  }
}
