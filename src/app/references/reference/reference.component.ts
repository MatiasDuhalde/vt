import { Component, Input } from '@angular/core';
import { Reference } from '../source-reference';
import { ReferencesService } from '../references.service';

@Component({
  selector: 'app-source-reference',
  standalone: true,
  imports: [],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss',
})
export class ReferenceComponent {
  @Input() reference!: Reference;
  refId!: string;

  constructor(private referencesService: ReferencesService) {}

  public ngOnInit() {
    this.refId = this.referencesService.getReferenceRef(this.reference);
  }
}
