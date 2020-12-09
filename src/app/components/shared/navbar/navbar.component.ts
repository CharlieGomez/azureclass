import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  flag = 'mx';

  constructor(public translate: TranslateService
    ) {
      translate.addLangs(['mx', 'us']);
      if (!localStorage.getItem('language') || !translate.getLangs().includes(localStorage.getItem('language')) ) {
        this.switchLang('mx');
      }
      else {
        this.switchLang(localStorage.getItem('language'));
      }
    }

    switchLang(lang: string) {
      this.translate.use(lang);
      localStorage.setItem('language', lang);
      this.flag = lang;
    }

  ngOnInit(): void {
  }
}

