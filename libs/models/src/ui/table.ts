export enum TableColumnTemplate {
  TRANSLATE = 'TRANSLATE',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  CURRENCY = 'CURRENCY',
  PERCENTAGE = 'PERCENTAGE',
  BOOLEAN = 'BOOLEAN',
}
export type TableColumnTemplateT = keyof typeof TableColumnTemplate;

export interface TableColumnOptions {
  // Column template === translate -> add the translation url
  translation?: string;
  // Column template === currency -> add the currency symbol
  currency?: string;
  // Column template === date -> use the date formatter
  format?: string;
}

export interface TableColumn {
  id: string;
  label: string;
  isSortable?: boolean;
  width?: string;
  template?: TableColumnTemplate;
  options?: TableColumnOptions;
}
