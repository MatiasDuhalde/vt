import { Injectable, Provider } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import type { NewReference, Reference } from './source-reference';

export type NewReferences = { [key: string]: NewReference };
export type References = { [key: string]: Reference };

export interface ReferencesConfig {
  references: NewReferences;
}

@Injectable({
  providedIn: 'root',
})
export class ReferencesService {
  private referencesSubject = new BehaviorSubject<References>({});
  references$: Observable<References> = this.referencesSubject.asObservable();

  static forRoot(config: ReferencesConfig): Provider {
    return {
      provide: ReferencesService,
      useFactory: () => {
        const { references } = config;
        const referencesWithIndex: References = {};
        let index = 1;
        for (const id in references) {
          if (references.hasOwnProperty(id)) {
            referencesWithIndex[id] = { ...references[id], id, index };
            index++;
          }
        }

        const service = new ReferencesService();
        service.referencesSubject.next(referencesWithIndex);
        return service;
      },
    };
  }

  public getReferenceById(id: string): Reference {
    return this.referencesSubject.value[id];
  }

  public getReferenceRefById(id: string): string {
    return `cite-${id}`;
  }

  public getReferenceRef(reference: Reference): string {
    return this.getReferenceRefById(reference.id);
  }
}
