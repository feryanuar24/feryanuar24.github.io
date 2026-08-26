import { Component } from '@angular/core';
import { portfolioData } from '../app.data';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  portfolioData = portfolioData;
}
