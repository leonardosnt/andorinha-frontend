import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { TweetService } from './tweet.service';
import { ComentarioService } from './comentario.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private usuarioService: UsuarioService, private tweetService: TweetService, private comentarioService: ComentarioService) { }

  public usuario(): UsuarioService {
    return this.usuarioService;
  }

  public tweet(): TweetService {
    return this.tweetService;
  }

  public comentario(): ComentarioService {
    return this.comentarioService;
  }
}
