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
  @Input() referenceId!: string;
  reference!: SourceReference;
  refId!: string;

  public ngOnInit() {
    this.refId = getReferenceRefId(this.reference);
  }

  public scrollToReference() {
    const element = document.getElementById(this.referenceRefId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
