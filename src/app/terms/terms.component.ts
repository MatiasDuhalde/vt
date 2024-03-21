import { Component } from '@angular/core';
import { TermListComponent } from './term-list/term-list.component';
import { ReferenceListComponent } from '../references/reference-list/reference-list.component';
import { ReferenceLinkComponent } from '../references/reference-link/reference-link.component';
import { FigureComponent } from '../figure/figure.component';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [
    TermListComponent,
    ReferenceListComponent,
    ReferenceLinkComponent,
    FigureComponent,
  ],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss',
})
export class TermsComponent {}
