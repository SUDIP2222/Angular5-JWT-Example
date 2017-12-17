import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { LocationComponent } from './component/location/location.component';
import { AuthGuard } from './guard/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LocationComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(appRoutes);
