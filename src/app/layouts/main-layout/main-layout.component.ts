import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import {
  ArrowUpRight,
  Languages,
  LucideAngularModule,
  Menu,
} from 'lucide-angular';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { MatRipple } from '@angular/material/core';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
  imports: [
    RouterOutlet,
    RouterLink,
    LucideAngularModule,
    RouterLinkActive,
    TranslatePipe,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    MatRipple,
  ],
})
export class MainLayoutComponent {
  readonly Icons = { Menu, Languages, ArrowUpRight };

  readonly LANGS = [
    { name: 'english', code: 'en', icon: 'flag-us.svg' },
    { name: 'español', code: 'es', icon: 'flag-mexico.svg' },
  ];

  readonly NAV_LINKS = [
    { ref: 'HEADER.NAVLINKS.HOME', url: '/', icon: null },
    {
      ref: 'HEADER.NAVLINKS.PROJECTS',
      url: '/projects',
      icon: this.Icons.ArrowUpRight,
    },
    { ref: 'HEADER.NAVLINKS.CONTACTME', url: '/contact', icon: null },
  ];

  currentLang = signal('en');

  constructor(private translationService: TranslationService) {
    this.translationService.currentLang$.subscribe((value) => {
      this.currentLang.set(value);
    });
  }

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }
}
