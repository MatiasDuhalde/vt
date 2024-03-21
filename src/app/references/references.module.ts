import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferencesService } from './references.service';
import { ReferenceLinkComponent } from './reference-link/reference-link.component';
import { ReferenceListComponent } from './reference-list/reference-list.component';

@NgModule({
  imports: [CommonModule, ReferenceLinkComponent, ReferenceListComponent],
  exports: [ReferenceLinkComponent, ReferenceListComponent],
})
export class ReferencesModule {}
