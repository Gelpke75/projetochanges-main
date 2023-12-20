import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  selectedLanguage = 'pt'; // Defina o idioma padrão ou um idioma inicial

  enableNotifications: boolean = false;

  changeLanguage() {
    this.translate.use(this.selectedLanguage);
  }
  constructor(public apiService : ApiService,private translate: TranslateService) {}
  ngOnInit(): void {
  
  }

  saveSettings() {
    console.log('Configurações salvas:', this.apiService.enableNotifications, this.apiService.selectedLanguage);
    // Aqui você pode adicionar a lógica para salvar as configurações no serviço
  }
}
