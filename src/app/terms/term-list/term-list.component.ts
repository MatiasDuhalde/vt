import { Component } from '@angular/core';
import { TermComponent } from './term/term.component';

@Component({
  selector: 'app-term-list',
  standalone: true,
  imports: [TermComponent],
  templateUrl: './term-list.component.html',
  styleUrl: './term-list.component.scss',
})
export class TermListComponent {}
