import { Routes } from '@angular/router';
import { ProjectList } from './projects/project-list/project-list';
import { Home } from './home/home';
import { ProjectDetail } from './projects/project-detail/project-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects', component: ProjectList, pathMatch: 'full' },
  { path: 'projects/:id', component: ProjectDetail },
  { path: '**', redirectTo: '' },
];
