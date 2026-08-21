import { Component, inject } from '@angular/core';
import { ProjectService } from '../app.service';
import { portfolioData } from '../app.data';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  portfolioData = portfolioData;

  private projectService = inject(ProjectService);
  projects$ = this.projectService.getProjects();
}
