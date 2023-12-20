import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  selectedLanguage = 'pt'; // Defina o idioma padrão ou um idioma inicial
  private appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    
  
  ];

  constructor(private translate: TranslateService) {
  this.translate.setDefaultLang(this.selectedLanguage);
  }
  changeLanguage() {
    this.translate.use(this.selectedLanguage);
  }
}
