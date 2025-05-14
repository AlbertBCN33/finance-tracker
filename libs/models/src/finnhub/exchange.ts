/**
 * Exchange
 */
export interface Exchange {
  code: string;
  name: string;
  mic: string;
  timezone: string;
  pre_market: string | null; // Format example: 07:00-10:00
  hour: string; // Format example: '10:00-14:44'
  post_market: string | null; // Format example: 16:00-18:50
  close_date: string; // Format example: '7,0'
  country: string;
  country_name: string;
}
