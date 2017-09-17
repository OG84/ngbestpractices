import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../shared/loading.service';
import { AuthService } from '../shared/auth/auth.service';
import { Profile } from '../shared/auth/profile.model';

@Component({
  selector: 'ngbp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  progressMode = 'determinate';
  isAuthenticated: boolean;
  profile: Profile;

  constructor(
    private loadingService: LoadingService,
    private authService: AuthService) { }

  ngOnInit() {
    this.loadingService.loadingChanged.subscribe(isLoading => {
      if (isLoading) {
        this.progressMode = 'indeterminate';
      } else {
        this.progressMode = 'determinate';
      }
    });

    this.authService.isAuthenticatedChanged.subscribe(x => this.isAuthenticated = x);
    this.authService.profile.subscribe(x => this.profile = x);
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }
}
