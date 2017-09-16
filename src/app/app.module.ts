import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CliComponent } from './cli/cli.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import { PrismComponent } from 'angular-prism';
import { Http, XHRBackend, RequestOptions, HttpModule } from '@angular/http';
import { HttpService } from './shared/http.service';
import { ResolversComponent } from './resolvers/resolvers.component';
import { WorkbooksService } from './shared/workbooks/workbooks.service';
import { ExercisesService } from './shared/exercises/exercises.service';
import { AptsService } from './shared/apts/apts.service';
import { WithoutResolversComponent } from './resolvers/without-resolvers/without-resolvers.component';
import { WithResolversComponent } from './resolvers/with-resolvers/with-resolvers.component';
import { WorkbooksResolver } from './shared/workbooks/workbooks.resolver';
import { ExercisesResolver } from './shared/exercises/exercises.resolver';
import { AptsResolver } from './shared/apts/apts.resolver';
import { RouterModule, Routes } from '@angular/router';
import { LoadingService } from './shared/loading.service';
import { MdProgressBarModule } from '@angular/material';
import 'hammerjs';
import { GuardsComponent } from './guards/guards.component';
import { CoverService } from './shared/covers/cover.service';
import { CoverResolver } from './shared/covers/cover.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cli',
    component: CliComponent
  },
  {
    path: 'resolvers',
    component: ResolversComponent,
    children: [
      {
        path: 'without',
        component: WithoutResolversComponent
      },
      {
        path: 'with',
        component: WithResolversComponent,
        resolve:
        {
          'workbooks': WorkbooksResolver,
          'exercises': ExercisesResolver,
          'apts': AptsResolver,
          'coverUrl': CoverResolver
        }
      }
    ]
  },
  {
    path: 'guards',
    component: GuardsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CliComponent,
    HeaderComponent,
    HomeComponent,
    PrismComponent,
    ResolversComponent,
    WithoutResolversComponent,
    WithResolversComponent,
    GuardsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    MdProgressBarModule
  ],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    },
    WorkbooksService,
    ExercisesService,
    AptsService,
    WorkbooksResolver,
    ExercisesResolver,
    AptsResolver,
    CoverResolver,
    LoadingService,
    CoverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpFactory(backend: XHRBackend, options: RequestOptions) {
  return new HttpService(backend, options);
}

