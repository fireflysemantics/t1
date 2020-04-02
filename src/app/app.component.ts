import { Component } from '@angular/core';
import { ContentService } from './fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 't1';
  constructor(cs:ContentService) {}
}
