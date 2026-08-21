import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { portfolioData } from './data/portofolio.data';
import { AsyncPipe } from '@angular/common';
import { ProjectService } from './services/project.service';

@Component({
  imports: [RouterOutlet, AsyncPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  data = portfolioData;

  private projectService = inject(ProjectService);
  projects$ = this.projectService.getProjects();
}
