import { Component, Input } from '@angular/core';
import { SourceReferenceComponent } from '../source-reference/source-reference.component';
import { SourceReference } from '../source-reference';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reference-list',
  standalone: true,
  imports: [CommonModule, SourceReferenceComponent],
  templateUrl: './reference-list.component.html',
  styleUrl: './reference-list.component.scss',
})
export class ReferenceListComponent {
  @Input() references!: SourceReference[];
}
