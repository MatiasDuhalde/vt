export interface NewReference {
  content: string;
}

export interface Reference extends NewReference {
  id: string;
  index: number;
}
