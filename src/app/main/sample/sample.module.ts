import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { SampleComponent } from './sample.component';
import { HomeComponent } from './home.component';
import { DashboardModule } from 'app/modules/dashboard/dashboard.module';
import { AuthGuard } from 'app/auth/helpers';

const routes = [
  {
    path: 'sample',
    component: SampleComponent,
    data: { animation: 'sample' },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [SampleComponent, HomeComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule, DashboardModule],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule {}
