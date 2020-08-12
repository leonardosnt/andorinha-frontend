import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario';
import { Tweet } from 'src/app/shared/models/tweet';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.scss'],
})
export class UsuarioPerfilComponent implements OnInit {

  private usuario: Usuario;
  private tweets: Tweet[]; // TODO: paginação

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        // TODO: validar
        const id = Number(params.get('id'));

        // TODO: buscar
        const usuario = new Usuario();
        usuario.id = id;
        usuario.nome = "Leonardo";

        const tweets = [];

        for (let i = 0; i < 5; i++) {
          const tweet = new Tweet();
          tweet.usuario = usuario;
          tweet.conteudo = "Hello World ";
          tweet.data = new Date();
          tweet.id = i;

          tweets.push(tweet);
        }

        this.tweets = tweets;
        this.usuario = usuario;
      });
  }

}
