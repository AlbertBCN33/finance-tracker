export enum SummaryItemType {
  TEXT = 'TEXT',
  ICON = 'ICON',
  DATE = 'DATE',
  CURRENCY = 'CURRENCY',
}

interface SummaryItemText {
  type: SummaryItemType.TEXT;
  label: string | undefined;
  value: string | number | undefined | null;
  format?: never;
  currency?: never;
}

interface SummaryItemIcon {
  type: SummaryItemType.ICON;
  label: string | undefined;
  value: string;
  format?: never;
  currency?: never;
}

interface SummaryItemDate {
  type: SummaryItemType.DATE;
  label: string | undefined;
  value: string | number | undefined | null;
  format: string;
  currency?: never;
}

interface SummaryItemCurrency {
  type: SummaryItemType.CURRENCY;
  label: string | undefined;
  value: string | number | undefined | null;
  currency: string;
  format?: never;
}

export type SummaryItem =
  | SummaryItemText
  | SummaryItemIcon
  | SummaryItemDate
  | SummaryItemCurrency;
