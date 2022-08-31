import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from './components/exercises/exercises.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'exercises',
    pathMatch: 'full',
  },
  {
    path: 'exercises',
    component: ExercisesComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
