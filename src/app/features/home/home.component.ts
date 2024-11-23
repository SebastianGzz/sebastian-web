import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ArrowUpRight, LucideAngularModule, Star } from 'lucide-angular';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TranslatePipe,
    RouterLink,
    RouterLinkActive,
    LucideAngularModule,
    NgClass,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly Icons = { ArrowUpRight, Star };

  readonly NAV_LINKS = [
    { ref: 'HEADER.NAVLINKS.ABOUTME', url: '/', icon: null },
    {
      ref: 'HEADER.NAVLINKS.PROJECTS',
      url: '/projects',
      icon: this.Icons.ArrowUpRight,
    },
    {
      ref: 'HEADER.NAVLINKS.CONTACTME',
      url: '/contact',
      icon: this.Icons.ArrowUpRight,
    },
  ];

  usuarios = ['LS', 'DH', 'CA', 'MR', 'PP'];
  colores = [
    'bg-red-400',
    'bg-blue-400',
    'bg-green-400',
    'bg-yellow-400',
    'bg-purple-400',
  ];

  getColor(index: number): string {
    return this.colores[index % this.colores.length];
  }
}
