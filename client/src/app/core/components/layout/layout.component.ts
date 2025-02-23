import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-layout',
  imports: [
    RouterLink
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  #themeService = inject(ThemeService);

  toggleDarkMode(event: MouseEvent): void {
    event.preventDefault();
    this.#themeService.toggleDarkMode();
  }
}
