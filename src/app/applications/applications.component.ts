import { Component } from '@angular/core';
import { FigureComponent } from '../figure/figure.component';
import { ReferenceLinkComponent } from '../references/reference-link/reference-link.component';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [FigureComponent, ReferenceLinkComponent],
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.scss',
})
export class ApplicationsComponent {}
