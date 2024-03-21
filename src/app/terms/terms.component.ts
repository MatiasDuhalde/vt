import { Component } from '@angular/core';
import { TermListComponent } from './term-list/term-list.component';
import { ReferencesModule } from '../references/references.module';
import { ReferenceListComponent } from '../references/reference-list/reference-list.component';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [TermListComponent, ReferenceListComponent],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss',
})
export class TermsComponent {}
