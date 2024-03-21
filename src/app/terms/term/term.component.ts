import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-term',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './term.component.html',
  styleUrl: './term.component.scss',
})
export class TermComponent {
  @Input() name!: string;
}
