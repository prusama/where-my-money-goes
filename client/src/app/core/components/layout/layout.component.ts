import { Component } from '@angular/core';
import {Card} from 'primeng/card';

@Component({
  selector: 'app-layout',
  imports: [
    Card
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  toggleDarkMode(event: MouseEvent): void {
    event.preventDefault();
    const element = document.querySelector('html');
    element?.classList.toggle('dark');
  }
}
