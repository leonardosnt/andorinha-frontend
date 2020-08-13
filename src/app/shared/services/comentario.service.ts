import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario';
import { ComentarioSeletor } from '../models/seletor/comentario.seletor';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  // TODO: pegar da config
  private apiUrl = 'http://localhost/andorinha-backend/api';

  constructor(private http: HttpClient) { }

  public consultar(id: number): Observable<Comentario> {
    return this.http.get<Comentario>(`${this.apiUrl}/comentario/${id}`);
  }

  public pesquisar(seletor: ComentarioSeletor): Observable<Comentario[]> {
    return this.http.post<Comentario[]>(`${this.apiUrl}/comentario/pesquisar`, seletor);
  }

}
