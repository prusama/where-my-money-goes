import {Component, computed, inject} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {LayoutComponent} from './core/components/layout/layout.component';
import {toSignal} from '@angular/core/rxjs-interop';
import {filter, map} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  #router = inject(Router);
  #currentUrl = toSignal(this.#router.events.pipe(
    filter((event => event instanceof NavigationEnd)),
    map((event) => event.url)
  ));

  isInAuthSection = computed(() => this.#currentUrl()?.includes('/auth/'));
}
