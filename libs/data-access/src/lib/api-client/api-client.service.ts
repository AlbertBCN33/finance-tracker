import { inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// Token to provide API URL from the frontend app
export const API_URL = new InjectionToken<string>('API_URL');

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  private http = inject(HttpClient);
  private readonly baseUrl = inject(API_URL);

  private prependBaseUrl = (url: string) => `${this.baseUrl}/${url}`;

  get<T>(url: string, params?: Record<string, string | number>): Observable<T> {
    return this.http.get<T>(this.prependBaseUrl(url), {
      params: new HttpParams({ fromObject: params }),
    });
  }

  post<T>(url: string, body: unknown): Observable<T> {
    return this.http.post<T>(this.prependBaseUrl(url), body);
  }

  put<T>(url: string, body: unknown): Observable<T> {
    return this.http.put<T>(this.prependBaseUrl(url), body);
  }

  patch<T>(url: string, body: unknown): Observable<T> {
    return this.http.patch<T>(this.prependBaseUrl(url), body);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(this.prependBaseUrl(url));
  }
}
