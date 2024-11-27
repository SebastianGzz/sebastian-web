import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import {
  ArrowDownLeft,
  ExternalLink,
  Mail,
  LucideAngularModule,
} from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, TranslatePipe, LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  readonly Icons = { ArrowDownLeft, ExternalLink, Mail };

  readonly SOCIALS = [
    {
      name: 'instagram',
      url: 'https://www.instagram.com/_sebastian.cor',
      icon: '/assets/icons/instagram.svg',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sebastiangzzcor',
      icon: '/assets/icons/linkedin.svg',
    },
    {
      name: 'github',
      url: 'https://github.com/SebastianGzz',
      icon: '/assets/icons/github.svg',
    },
  ];
}
