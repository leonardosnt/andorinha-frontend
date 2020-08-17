import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event } from '@angular/router';
import { Tweet } from 'src/app/shared/models/tweet';
import { Comentario } from 'src/app/shared/models/Comentario';
import { ApiService } from 'src/app/shared/services/api.service';
import { ComentarioSeletor } from 'src/app/shared/models/seletor/comentario.seletor';
import { Usuario } from 'src/app/shared/models/usuario';

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

      const seletor = new ComentarioSeletor();
      seletor.idTweet = id;
      seletor.orderField = 'data';
      seletor.orderType = 'desc';

      // TODO: usar DTO
      this.api.comentario().pesquisar(seletor)
        .subscribe(comentarios => this.comentarios = comentarios);
    });
  }

  onComentarioAdicionado(comentario: Comentario) {
    // TODO: scrollar até o comentário
    this.comentarios.unshift(comentario);
  }

}
