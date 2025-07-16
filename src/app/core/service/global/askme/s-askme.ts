import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ContactMessage } from '../../../model/global/contact-message.model';
import { Observable } from 'rxjs';
import { APIEndPoint } from '../../../constants/constants';

const headers = new HttpHeaders({
 'Content-Type': 'application/json' 
});

@Injectable({
  providedIn: 'root'
})
export class SAskme {
  private http = inject(HttpClient);

  sendMessage(data: ContactMessage): Observable<any> {
    return this.http.post(APIEndPoint.global.AskMe, data,{headers});
  }
}
