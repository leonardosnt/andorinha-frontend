import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private usuarioService: UsuarioService) { }

  public usuario(): UsuarioService {
    return this.usuarioService;
  }
}
