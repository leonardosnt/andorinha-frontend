import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Resultado } from '../models/util/resultado';
import { Observable, of } from 'rxjs';
import {UsuarioSeletor} from '../models/seletor/usuario.seletor';


const USUARIOS = [
  {
    nome: 'Romário',
    idade: 46,
    dataNascimento: new Date()
  },
  {
    nome: 'Bebeto',
    idade: 47,
    dataNascimento: new Date()
  },
  {
    nome: 'Ronaldo',
    idade: 48,
    dataNascimento: new Date()
  },
  {
    nome: 'Raí',
    idade: 19,
    dataNascimento: new Date()
  },
  {
    nome: 'Zico',
    idade: 50,
    dataNascimento: new Date()
  },
  {
    nome: 'Menino Ney',
    idade: 20,
    dataNascimento: new Date()
  }

];

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  pesquisar(seletor: UsuarioSeletor): Observable<Resultado<Usuario>> {
    return of( new Resultado<Usuario>().of(this.paginar( USUARIOS, seletor.limite, seletor.pagina ), USUARIOS.length) );
  }

  private paginar( array: Array<Usuario>, limite: number, pagina: number ): Array<Usuario>{
    return array.slice( (pagina - 1) * limite, (pagina) * limite);
  }
}
