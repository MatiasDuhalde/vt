import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ReferenceComponent } from '../reference/reference.component';
import { References, ReferencesService } from '../references.service';
import { Reference } from '../source-reference';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-reference-list',
  standalone: true,
  imports: [CommonModule, ReferenceComponent, MatListModule],
  templateUrl: './reference-list.component.html',
  styleUrl: './reference-list.component.scss',
})
export class ReferenceListComponent {
  references$!: Observable<References>;
  orderedReferences: Reference[] = [];

  constructor(private referencesService: ReferencesService) {}

  public ngOnInit(): void {
    this.references$ = this.referencesService.references$;

    this.references$.subscribe((references) => {
      this.orderedReferences = Object.values(references).sort(
        (a, b) => a.index - b.index,
      );
    });
  }

  public ngOnDestroy(): void {
    this.references$.subscribe().unsubscribe();
  }
}
