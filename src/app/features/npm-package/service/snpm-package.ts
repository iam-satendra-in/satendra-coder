import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnpmPackage {
  private registryUrl = 'https://registry.npmjs.org';
  private downloadsUrl = 'https://api.npmjs.org/downloads/point';

  // 👇 Common headers to skip JWT token in interceptor
  private noAuthHeaders = new HttpHeaders({ 'No-Auth': 'true' });

  constructor(private http: HttpClient) {}

  // Get full metadata of package
  getPackageMetadata(packageName: string): Observable<any> {
    return this.http.get(
      `${this.registryUrl}/${encodeURIComponent(packageName)}`,
      { headers: this.noAuthHeaders }
    );
  }

  // Get specific version details
  getPackageVersion(packageName: string, version: string): Observable<any> {
    return this.http.get(
      `${this.registryUrl}/${encodeURIComponent(packageName)}/${version}`,
      { headers: this.noAuthHeaders }
    );
  }

  // Get download stats (day/week/month)
  getDownloads(
    packageName: string,
    period: 'last-day' | 'last-week' | 'last-month'
  ): Observable<any> {
    return this.http.get(
      `${this.downloadsUrl}/${period}/${encodeURIComponent(packageName)}`,
      { headers: this.noAuthHeaders }
    );
  }
}
