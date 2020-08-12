import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet } from '../models/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  // TODO: pegar da config
  private apiUrl = 'http://localhost/andorinha-backend/api';

  constructor(private http: HttpClient) { }

  public consultar(id: number): Observable<Tweet> {
    return this.http.get<Tweet>(`${this.apiUrl}/tweet/${id}`);
  }

}
