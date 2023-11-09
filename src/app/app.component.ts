import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translocoService: TranslocoService) {}

  changeLanguage() {
    const language = this.translocoService.getActiveLang() === 'en' ? 'hu' : 'en';
    this.translocoService.setActiveLang(language);
  }
}
