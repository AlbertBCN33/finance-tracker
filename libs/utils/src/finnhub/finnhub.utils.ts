import { Quote } from '@finance-tracker/models';

const validQuote = (quote: Quote): boolean =>
  quote &&
  quote.o !== 0 &&
  quote.h !== 0 &&
  quote.l !== 0 &&
  quote.c !== 0 &&
  quote.pc !== 0 &&
  quote.d !== null &&
  quote.dp !== null;

export const FinnhubUtils = {
  validQuote,
};
