import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario';
import { ComentarioSeletor } from '../models/seletor/comentario.seletor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  public consultar(id: number): Observable<Comentario> {
    return this.http.get<Comentario>(`${environment.apiUrl}/comentario/${id}`);
  }

  public pesquisar(seletor: ComentarioSeletor): Observable<Comentario[]> {
    return this.http.post<Comentario[]>(`${environment.apiUrl}/comentario/pesquisar`, seletor);
  }

}
