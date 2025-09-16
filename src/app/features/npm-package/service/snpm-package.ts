import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnpmPackage {
  private registryUrl = 'https://registry.npmjs.org';
  private downloadsUrl = 'https://api.npmjs.org/downloads/point';

  constructor(private http: HttpClient) {}

  // Get full metadata of package
  getPackageMetadata(packageName: string): Observable<any> {
    return this.http.get(
      `${this.registryUrl}/${encodeURIComponent(packageName)}`
    );
  }

  // Get specific version details
  getPackageVersion(packageName: string, version: string): Observable<any> {
    return this.http.get(
      `${this.registryUrl}/${encodeURIComponent(packageName)}/${version}`
    );
  }

  // Get download stats (day/week/month)
  getDownloads(
    packageName: string,
    period: 'last-day' | 'last-week' | 'last-month'
  ): Observable<any> {
    return this.http.get(
      `${this.downloadsUrl}/${period}/${encodeURIComponent(packageName)}`
    );
  }
}
