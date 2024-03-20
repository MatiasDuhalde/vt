import { Component, Input } from '@angular/core';
import { SourceReference, getReferenceRefId } from '../source-reference';

@Component({
  selector: 'app-reference-link',
  standalone: true,
  imports: [],
  templateUrl: './reference-link.component.html',
  styleUrl: './reference-link.component.scss',
})
export class ReferenceLinkComponent {
  @Input() reference!: SourceReference;
  referenceRefId: string = '';

  public ngOnInit() {
    this.referenceRefId = getReferenceRefId(this.reference);
  }

  public scrollToReference() {
    const element = document.getElementById(this.referenceRefId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
