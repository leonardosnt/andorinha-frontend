import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Resultado } from '../models/util/resultado';
import { Observable, of } from 'rxjs';
import {UsuarioSeletor} from '../models/seletor/usuario.seletor';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const USUARIOS = [
  {
    id: 1,
    nome: 'Romário',
    idade: 46,
    dataNascimento: new Date()
  },
  {
    id: 2,
    nome: 'Bebeto',
    idade: 47,
    dataNascimento: new Date()
  },
  {
    id: 3,
    nome: 'Ronaldo',
    idade: 48,
    dataNascimento: new Date()
  },
  {
    id: 4,
    nome: 'Raí',
    idade: 19,
    dataNascimento: new Date()
  },
  {
    id: 5,
    nome: 'Zico',
    idade: 50,
    dataNascimento: new Date()
  },
  {
    id: 6,
    nome: 'Menino Ney',
    idade: 20,
    dataNascimento: new Date()
  }

];

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public consultar(id: number):  Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.apiUrl}/usuario/${id}`);
  }

  pesquisar(seletor: UsuarioSeletor): Observable<Resultado<Usuario>> {
    return of( new Resultado<Usuario>().of(this.paginar( USUARIOS, seletor.limite, seletor.pagina ), USUARIOS.length) );
  }

  private paginar( array: Array<Usuario>, limite: number, pagina: number ): Array<Usuario>{
    return array.slice( (pagina - 1) * limite, (pagina) * limite);
  }
}
