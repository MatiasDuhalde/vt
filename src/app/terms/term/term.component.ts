import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-term',
  standalone: true,
  imports: [],
  templateUrl: './term.component.html',
  styleUrl: './term.component.scss'
})
export class TermComponent {
  @Input() name!: string;
}
