import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardLayout } from './layout/dashboard-layout/dashboard-layout';

@Component({
  selector: 'app-root',
  imports: [DashboardLayout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Ang20CrudApps';
}
