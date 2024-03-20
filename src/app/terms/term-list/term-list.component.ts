import { Component } from '@angular/core';
import { TermComponent } from '../term/term.component';
import { ReferenceLinkComponent } from '../../reference/reference-link/reference-link.component';

@Component({
  selector: 'app-term-list',
  standalone: true,
  imports: [TermComponent, ReferenceLinkComponent],
  templateUrl: './term-list.component.html',
  styleUrl: './term-list.component.scss',
})
export class TermListComponent {}
