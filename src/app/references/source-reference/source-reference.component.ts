import { Component, Input } from '@angular/core';
import { SourceReference, getReferenceRefId } from '../source-reference';

@Component({
  selector: 'app-source-reference',
  standalone: true,
  imports: [],
  templateUrl: './source-reference.component.html',
  styleUrl: './source-reference.component.scss',
})
export class SourceReferenceComponent {
  @Input() reference!: SourceReference;
  referencerRefId: string = '';

  public ngOnInit() {
    this.referencerRefId = getReferenceRefId(this.reference);
  }
}
