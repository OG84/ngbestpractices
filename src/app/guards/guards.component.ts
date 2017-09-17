import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'ngbp-guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.scss']
})
export class GuardsComponent implements OnInit {

  profile: any = '{}';
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.profile.subscribe(x => this.profile = x);
  }
}
