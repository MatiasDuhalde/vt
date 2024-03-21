import { Component, Input } from '@angular/core';
import { ReferencesService } from '../references.service';
import { Reference } from '../source-reference';

@Component({
  selector: 'app-reference-link',
  standalone: true,
  imports: [],
  templateUrl: './reference-link.component.html',
  styleUrl: './reference-link.component.scss',
})
export class ReferenceLinkComponent {
  @Input() referenceId!: string;
  reference!: Reference;
  refId!: string;

  constructor(private referencesService: ReferencesService) {}

  public ngOnInit() {
    this.reference = this.referencesService.getReferenceById(this.referenceId);
    this.refId = this.referencesService.getReferenceRef(this.reference);
  }

  public scrollToReference(event: Event) {
    event.preventDefault();
    const element = document.getElementById(this.refId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
