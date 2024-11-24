import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  ArrowDownLeft,
  CalendarDays,
} from 'lucide-angular';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe, RouterLink, LucideAngularModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  readonly Icons = { ArrowDownLeft, CalendarDays };

  readonly PROJECTS = [
    {
      dateRange: 'PROJECTS.P1.DATERANGE',
      title: 'PROJECTS.P1.TITLE',
      description: 'PROJECTS.P1.DESCRIPTION',
      image: '/assets/images/angular-internal-chat.png',
    },
    {
      dateRange: 'PROJECTS.P2.DATERANGE',
      title: 'PROJECTS.P2.TITLE',
      description: 'PROJECTS.P2.DESCRIPTION',
      image: '/assets/images/react-lottery-system.png',
    },
  ];
}
