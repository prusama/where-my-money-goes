import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Button, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
