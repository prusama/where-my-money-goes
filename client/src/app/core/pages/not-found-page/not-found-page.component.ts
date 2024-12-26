import {Component, inject} from '@angular/core';
import {Button} from 'primeng/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [
    Button
  ],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss'
})
export class NotFoundPageComponent {
  #router = inject(Router);

  goHome(): void {
    this.#router.navigate(['/']);
  }
}
