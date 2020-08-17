import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet } from '../models/tweet';
import { TweetSeletor } from '../models/seletor/tweet.seletor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient) { }

  public consultar(id: number): Observable<Tweet> {
    return this.http.get<Tweet>(`${environment.apiUrl}/tweet/${id}`);
  }

  public pesquisar(seletor: TweetSeletor): Observable<Tweet[]> {
    return this.http.post<Tweet[]>(`${environment.apiUrl}/tweet/pesquisar`, seletor);
  }

  public inserir(tweet: Tweet): Observable<Tweet> {
    return this.http.post<Tweet>(`${environment.apiUrl}/tweet`, tweet);
  }
}
