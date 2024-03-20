export interface SourceReference {
  id: string;
  text: string;
  index: string;
}

export const getReferenceRefId = (reference: SourceReference) =>
  `cite-entry-${reference.index}`;
