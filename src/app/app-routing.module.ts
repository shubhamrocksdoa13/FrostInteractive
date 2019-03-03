import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'studio', pathMatch: 'full' },
  { path: 'studio', loadChildren: './studios/studios.module#StudiosModule' },
  { path: '**', redirectTo: 'studio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
