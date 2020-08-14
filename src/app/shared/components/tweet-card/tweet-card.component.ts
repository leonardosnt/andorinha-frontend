import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Tweet } from '../../models/tweet';
import { Comentario } from '../../models/comentario';
import { Form, NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetCardComponent implements OnInit {

  @Input()
  private tweet: Tweet;

  @Input()
  private inputComentarAtivo: boolean = false;

  @Output()
  private comentarioAdicionado: EventEmitter<Comentario>;

  constructor(private api: ApiService) {
    this.comentarioAdicionado = new EventEmitter<Comentario>();
  }

  ngOnInit() {
  }

  onAdicionarComentario(ngForm: NgForm) {
    const {conteudo} = ngForm.form.value;

    // TODO: loader - algo para indicar que o comentário "está sendo adicionado"
    // caso a request demore mais do que o esperado.
    this.api.usuario().usuarioAtual().subscribe(usuario => {
      const comentario = new Comentario();
      comentario.tweet = this.tweet;
      comentario.usuario = usuario;
      comentario.conteudo = conteudo;

      this.api.comentario().inserir(comentario).subscribe((c) => {
        comentario.id = c.id;

        this.comentarioAdicionado.emit(comentario);
      })
    });

    // TODO: resetar apenas se o comentário foi adicionad?
    ngForm.reset();
  }
}
