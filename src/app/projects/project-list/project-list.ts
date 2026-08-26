import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../app.service';

@Component({
  imports: [AsyncPipe, RouterLink],
  selector: 'app-project-list',
  styleUrl: './project-list.css',
  templateUrl: './project-list.html',
})
export class ProjectList {
  private projectService = inject(ProjectService);
  projects$ = this.projectService.getProjects();
}
