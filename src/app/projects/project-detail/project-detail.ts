import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { ProjectService } from '../../app.service';

@Component({
  imports: [AsyncPipe, RouterLink],
  selector: 'app-project-detail',
  styleUrl: './project-detail.css',
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);

  project$ = this.route.paramMap.pipe(
    map((params) => params.get('id')),
    switchMap((id) => {
      if (!id) {
        return of(undefined);
      }

      return this.projectService.getProjectById(id);
    }),
  );
}
