import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-figure',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './figure.component.html',
  styleUrl: './figure.component.scss',
})
export class FigureComponent {
  @Input() imgSrc!: string;
  @Input() imgAlt!: string;
}
