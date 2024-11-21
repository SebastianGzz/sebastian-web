import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import {
  ArrowUpRight,
  Languages,
  LucideAngularModule,
  Menu,
} from 'lucide-angular';
import { TranslatePipe } from '../../core/pipes/translate.pipe';

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
  ],
})
export class MainLayoutComponent {
  readonly Icons = { Menu, Languages, ArrowUpRight };
}
