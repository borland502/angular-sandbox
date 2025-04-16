import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, RouterModule, LayoutComponent],
  standalone: true
})
export class AppComponent {
  title = 'Dashboard';
}
