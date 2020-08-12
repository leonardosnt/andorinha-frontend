import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tweet } from 'src/app/shared/models/tweet';
import { Usuario } from 'src/app/shared/models/usuario';
import { Comentario } from 'src/app/shared/models/Comentario';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-tweet-detalhe',
  templateUrl: './tweet-detalhe.component.html',
  styleUrls: ['./tweet-detalhe.component.scss']
})
export class TweetDetalheComponent implements OnInit {

  private tweet: Tweet;
  private comentarios: Comentario[];

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // TODO: validar
      const id = Number(params.get('id'));

      this.api.tweet().consultar(id)
        .subscribe(tweet => this.tweet = tweet);

      this.buscarComentarios()
        .subscribe(comentarios => this.comentarios = comentarios);
    });
  }

  buscarComentarios(): Observable<Comentario[]> {
    const comentarios = [];

    for (let i = 0; i < 3; i++) {
      const usuario = new Usuario();
      usuario.id = 2;
      usuario.nome = "Foo";

      // TODO: buscar
      const comentario = new Comentario();
      comentario.id = 1;
      comentario.conteudo = "Um comentário aleatório";
      comentario.tweet = null;
      comentario.usuario = usuario;
      comentario.data = new Date();

      comentarios.push(comentario);
    }

    return of(comentarios);
  }

}
